import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Explore from './pages/ExplorePage'
import LandingPage from './pages/LandingPage'
import CreatePoll from './pages/CreatePoll'
import PollPage from './pages/PollPage'
import ResultsPage from './pages/ResultsPage'
import MyPollsPage from './pages/MyPollsPage'


class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path='/explore'>
                    <Explore />
                </Route>
                <Route exact path='/createpoll'>
                    <CreatePoll />
                </Route>
                <Route exact path='/pollpage/:urlId'>
                    <PollPage />
                </Route>
                <Route exact path='/resultspage/:urlId'>
                    <ResultsPage />
                </Route>
                <Route exact path='/mypolls'>
                  <MyPollsPage />
                </Route>

            </Router>
            )        
    }
}

export default App