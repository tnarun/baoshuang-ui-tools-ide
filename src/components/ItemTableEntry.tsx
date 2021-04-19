import React from 'react';
import styles from './ItemTableEntry.less';

export interface TableData {
  itemName: string;
  pictureURL: string;
}

interface IState {}

interface IProps {
  data: TableData;
}

export default class ItemManager extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props, state);
  }

  render() {
    return (
      <tr>
        <td id={styles.tableRow}>
          <img id={styles.itemImage} src={this.props.data.pictureURL} />
        </td>
        <td>{this.props.data.itemName}</td>
      </tr>
    );
  }
}
