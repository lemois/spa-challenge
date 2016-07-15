import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import Counter from './containers/Counter';
import Footer from './components/Footer.jsx';
import configureStore from './configureStore';

const store = configureStore();

const renderTo = (component, target, props) => render(
    <Provider store={store}>
    {React.createElement(component, props)}
  </Provider>,
  document.getElementById(target)
);


const getComponent = name => ({
  Counter, Footer
}[name])

const renderComponents = () =>
        Array.prototype.slice.call(
          document.querySelectorAll('[data-component]')
        )
        .map(x => ({
          target: x,
          component: getComponent(x.dataset.component),
          props: Object.assign({}, x.dataset)
        }))
        .forEach(x => {
          render(
              <Provider store={store}>
              {React.createElement(x.component, x.props)}
            </Provider>, x.target);
        });

module.exports = {
  main: () => {
    alert('main');
  },
  renderComponents,
  renderTo,
  Counter,
  Footer,
}
