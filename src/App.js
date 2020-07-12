import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/HomePage'
import GithubOverview from './pages/GithubOverview/GitHubOverviewPage'
import { motion } from 'framer-motion'
import './App.scss'

function App() {
  return (
    <motion.main className="App">
      <Router>
        <Switch>
          <Route path="/:username" component={GithubOverview} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </motion.main>
  )
}

export default App
