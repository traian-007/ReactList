import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lists: [], // this holds the name of each list
      items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  handleAddList(s, i) {
    let lists = this.state.lists
    lists.push(s)
    this.setState({ lists: lists })
    let ab = this.state.items
    ab[s] = []
    ab.id = i
    this.setState({ items: ab })

    // console.log('items:   ', this.state.items)
    // console.log('lists:  ', this.state.lists)
  }

  handleAddItem(s, i) {
    // Implement this function!
    console.log(s)
    let ab = this.state.items
    for (var prop in ab) {
      if (prop == i) {
        ab[prop] = ab[prop].concat(s)
        this.setState({ items: ab })
        console.log(this.state.items)
      }
    }
    // console.log('lists:  ', this.state.lists)
    // let newItem = this.state.items
  }

  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
