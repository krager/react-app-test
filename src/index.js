import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAM_ADn0nHR-sOK5j_ppYTg8PIDN_WPF64';

// Create a new component. This component should produce some HTML.
const App = function() {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
