import './Header.css';
import * as React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <div className="row header">
        {
          ['B', 'I', 'N', 'G', 'O'].map((c) => <div key={c} className="tile">{c}</div>)
        }
      </div>
    )
  }
}