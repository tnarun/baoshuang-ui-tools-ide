import React from 'react';
import ItemTableEntry, { TableData } from '@/components/ItemTableEntry';

interface IState {
  selectedFiles: TableData[];
}

interface IProps {}

export default class ItemManager extends React.Component<IProps, IState> {
  constructor(props: IProps, state: IState) {
    super(props, state);

    this.state = { selectedFiles: [] };
  }

  filesToTableData(fileList: FileList) {
    let datas: TableData[] = [];
    for (let i = 0; i < fileList.length; i++) {
      let data: TableData = {
        itemName: fileList.item(i)!.name,
        pictureURL: URL.createObjectURL(fileList.item(i)!),
      };
      datas.push(data);
    }
    return datas;
  }

  render() {
    return (
      <div>
        <input
          type="file"
          multiple={true}
          accept="image/*"
          onChange={(event) => {
            let files = event.currentTarget.files;
            if (files != null) {
              this.setState({ selectedFiles: this.filesToTableData(files) });
            }
          }}
        />
        {this.state.selectedFiles.length == 0 ? null : (
          <table>
            <tr>
              <th>图片</th>
              <th>名称</th>
            </tr>
            {this.state.selectedFiles.map((data, index) => (
              <ItemTableEntry key={index} data={data} />
            ))}
          </table>
        )}
        <button>上传</button>
      </div>
    );
  }
}
