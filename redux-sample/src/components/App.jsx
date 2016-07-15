import React from 'react'
import Counter from '../containers/Counter'
import { Link, browserHistory } from 'react-router'

const App = ({ children }) => (
  <div>
    <h1>Big SPA</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/help">Help</Link></li>
    </ul>
    <div>{children}</div>
  </div>
)

export default App
