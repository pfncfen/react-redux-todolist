import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

require('../styles/App.scss')

const App = () => (
  <div className="app">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
