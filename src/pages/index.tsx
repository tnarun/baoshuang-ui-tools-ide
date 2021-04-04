import React from 'react';
import styles from './index.less';

interface IState {}

interface IProps {}

export default class IndexPage extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <h1 className={styles.title}>资源准备页</h1>
      </div>
    );
  }
}
