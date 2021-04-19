import ItemManager from '@/components/ItemManager';
import VideoPlayer from '@/components/VideoPlayer';
import React from 'react';
import styles from './index.less';

interface IProps {}

interface IState {
  videoPath: string;
}

export default class IndexPage extends React.Component<IProps, IState> {
  constructor(state: IState) {
    super(state);

    this.state = {
      videoPath: '',
    };
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>资源准备页</h1>
        源视频:
        <input
          type="file"
          onChange={(event) => {
            let firstItem = event.currentTarget.files?.item(0);
            this.setState({ videoPath: URL.createObjectURL(firstItem) });
          }}
        />
        {this.state.videoPath == '' ? null : (
          <VideoPlayer videoPath={this.state.videoPath} />
        )}
        <ItemManager />
      </div>
    );
  }
}
