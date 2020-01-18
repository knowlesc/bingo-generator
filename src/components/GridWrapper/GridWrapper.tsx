import './GridWrapper.css';
import * as React from 'react';
import { Header } from '../Header/Header';
import { Grid } from '../Grid/Grid';

interface IGridWrapperProps {
  items: ITileContent[];
}

export class GridWrapper extends React.Component<IGridWrapperProps> {
  constructor(props: IGridWrapperProps) {
    super(props);
  }

  render() {
    return (
      <div className="grid-wrapper">
        <Header/>
        <Grid items={this.props.items}/>
      </div>
    )
  }
}