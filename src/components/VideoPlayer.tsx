import React from 'react';

interface IState {
  paused: boolean;
}

interface IProps {
  videoPath: string;
}

export default class VideoPlayer extends React.Component<IProps, IState> {
  player: React.RefObject<HTMLVideoElement>;

  constructor(props: IProps, state: IState) {
    super(props, state);

    this.state = {
      paused: true,
    };

    this.stepForward = this.stepForward.bind(this);
    this.switchPlaying = this.switchPlaying.bind(this);
    this.player = React.createRef();
  }

  stepForward(step: number) {
    this.player.current!.currentTime += step;
  }

  switchPlaying() {
    if (this.state.paused) {
      this.player.current?.play();
    } else {
      this.player.current?.pause();
    }
    this.setState({ paused: !this.state.paused });
  }

  render() {
    return (
      <div>
        <video src={this.props.videoPath} ref={this.player} />
        <div>
          <button onClick={(_) => this.stepForward(-0.1)}>⏪ 0.1</button>
          <button onClick={(_) => this.stepForward(-0.3)}>⏪ 0.3</button>
          <button onClick={(_) => this.stepForward(-0.5)}>⏪ 0.5</button>
          <button onClick={(_) => this.switchPlaying()}>
            {this.state.paused ? '▶️' : '⏸️'}
          </button>
          <button onClick={(_) => this.stepForward(0.1)}>⏩ 0.1</button>
          <button onClick={(_) => this.stepForward(0.3)}>⏩ 0.3</button>
          <button onClick={(_) => this.stepForward(0.5)}>⏩ 0.5</button>
        </div>
      </div>
    );
  }
}
