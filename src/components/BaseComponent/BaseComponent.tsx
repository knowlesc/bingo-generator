import './Base.css';
import * as React from 'react';
import { data } from '../../data/data';
import { GridWrapper } from '../GridWrapper/GridWrapper';

interface IBaseComponentState {
  items: ITileContent[];
}

export class BaseComponent extends React.Component<{}, IBaseComponentState> {
  constructor(props: {}) {
    super(props);

    const items = data.items;
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.splice(25);

    const freeCharacter = data.freeCharacters[Math.floor(Math.random() * data.freeCharacters.length)];
    items.splice(12, 0, freeCharacter)

    this.state = { items };
  }

  render() {
    return <GridWrapper items={data.items}/>
  }
}