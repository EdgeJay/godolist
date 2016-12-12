'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import MainComponent from './components/MainComponent';

export default (locals) => {
  return ReactDOMServer.renderToString(<MainComponent />);
};

if (typeof(window) !== 'undefined') {
  ReactDOM.render(<MainComponent />, document.getElementById('main-mount'));
}
