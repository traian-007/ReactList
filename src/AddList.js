import React, { Component } from 'react';

class AddList extends Component {
  constructor() {
    super();
    this.state = { text: '', id: 0 }
  }

  handleChange(e) { this.setState({ text: e.target.value }) }
  handleSubmit(e) {
    e.preventDefault();

    this.props.addList(this.state.text, this.state.id)
    this.setState({ id: this.state.id + 1 })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id='addList'>
            <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id="newId" onChange={this.handleChange.bind(this)} value={this.state.text}></input>
            </label>
          </div><br />
          <input type='submit' value='Create List' />
        </form>
      </div>
    );
  }
}

export default AddList;
