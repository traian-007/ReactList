import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem: {}, text: ''
    }
  }
  handleChange(e) {
    this.setState({ text: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    var ab = this.state.newItem
    ab.name = this.state.text
    this.setState({ newItem: ab })
    // this.setState({ newItem: {name: this.state.text })
    this.props.addItem(this.state.newItem, this.props.idName)
    this.setState({ text: '' })

  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
        <h4>Add {this.props.idName}</h4>
        <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
          <div id={divName} ref={divName}>
            <label>Name</label><br />
            <input type='text' ref='id' onChange={this.handleChange.bind(this)} value={this.state.text} />
          </div>
          <br />
          <input type='submit' value='Submit' />
          <br />
        </form>
      </div>
    );
  }

}

export default AddItem;
