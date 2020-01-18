import * as React from 'react';
import './tile.css';

interface ITileProps {
  item: ITileContent;
}

export class Tile extends React.Component<ITileProps> {
  constructor(props: ITileProps) {
    super(props);
  }

  render() {
    return (
      <div className="tile">
        <img src={this.props.item.imageUrl}></img>
        <div className="tile-text">{ this.props.item.name }</div>
      </div>
    )
  }
}