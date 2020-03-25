import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { ThemeProvider } from './context/theme'

import GlobalStyles from './styles/GlobalStyles'
import Container from './layout/Container'
import Nav from './components/Nav/Nav'
import Posts from './components/Posts'
import Post from './components/Post'
import User from './components/User'

class App extends Component {
  render () {
    return (
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Container>
            <header>
              <Nav />
            </header>
            <main>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => <Posts {...props} type='top' />}
                />
                <Route path='/post' component={Post} />
                <Route path='/new' render={props => <Posts {...props} type='new' />} />
                <Route path='/user' component={User} />
              </Switch>
            </main>
          </Container>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
