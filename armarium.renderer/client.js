const React = require('react');
const ReactDOM = require('react-dom');
window.renderApp = function(props) {
  const component = require('./src/'+store.component);
  const domContainerNode = document.getElementById('app-container');
  // Unmounting the component before mounting it again
  ReactDOM.unmountComponentAtNode(domContainerNode);
  ReactDOM.render(React.createFactory(component.default)(props), domContainerNode);
}
renderApp(store.props);