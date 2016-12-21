import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ConnectedButtonsContainer from '../containers/ConnectedButtonsContainer'

require('../styles/App.scss')

const App = () => (
  <div className="app-wrapper">
    <Header />
    <AddTodo />
    <VisibleTodoList />
    <ConnectedButtonsContainer />
    <Footer />
  </div>
)

export default App
