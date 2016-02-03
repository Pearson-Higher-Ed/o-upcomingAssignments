import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './src/js/containers/App'
import configureStore from './src/js/stores/configureStore'
export { default } from './src/js/components/DynamicList';

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('mount')
)
