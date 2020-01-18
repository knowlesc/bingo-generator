import './Grid.css';
import * as React from 'react';
import { Row } from '../Row/Row';

interface IGridProps {
  items: ITileContent[];
}

export class Grid extends React.Component<IGridProps> {
  constructor(props: IGridProps) {
    super(props);
  }

  render() {
    return (
      <div className="grid">
        {
          [1, 2, 3, 4, 5].map((n) =>
            <Row key={n} item={this.props.items.slice((n - 1) * 5, (n - 1) * 5 + 5)}/>
          )
        }
      </div>
    )
  }
}