import React, { Component } from 'react';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = { color: 'black', toogle: false };
  }

  handleClick() {
    var toogleColor = !this.state.toogle;
    this.setState({ toogle: toogleColor })

  }

  render() {
    let b = this.state.toogle ? 'red' : this.state.color
    var item = this.props.item;
    var name = item.name;

    return (
      <span onClick={this.handleClick.bind(this)} style={{ color: b }}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

