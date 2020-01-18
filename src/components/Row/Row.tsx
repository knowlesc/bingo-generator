import './Row.css';
import * as React from 'react';
import { Tile } from '../Tile/Tile';

interface IRowProps {
  item: ITileContent[];
}

export class Row extends React.Component<IRowProps> {
  constructor(props: IRowProps) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {
          this.props.item.map((c) => <Tile key={c.name} item={c}/>)
        }
      </div>
    )
  }
}