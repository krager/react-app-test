import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  render() {
    return <input onChange={(event) => console.log(event.target.value)} />
  }

};

// need to export so it can be used by other components.
export default SearchBar; // Any component that needs SearchBar can get it now.