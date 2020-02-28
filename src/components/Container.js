import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import DisplayResults from './DisplayResults'
import NotFound from './NotFound'
import Footer from './Footer'
import AboutMe from './AboutMe'
import axios from 'axios'
import ApiEndpoints from '../lib/ApiEndpoints'
import {
  Route,
  Switch
} from 'react-router-dom'
import StateSearch from './StateSearch';
import Home from './Home'
import Header from './Header'

const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN

class Container extends Component {
  constructor() {
    super()
    this.state = {
      stateResult: [],
      searchYear: '',
      searchState: ''
    }
  }
  fetchStats = async () => {
    try {
      const res = await axios.get(`${ApiEndpoints.state}/${this.state.searchState}/1979/2020?API_KEY=${IEX_TOKEN}`)
      const resData = res.data.results
      const filteredResult = resData.filter((datapoint) => {
        return datapoint.year == this.state.searchYear
      })
      this.setState({
        stateResult: filteredResult
      })

    } catch (error) {
      console.error(error)
    }
  }
  goToPicAnchor = () => {
    window.location = '#crime_stats';
  }
  isValidDate(dateString) {
    let regEx = /^\d{4}$/;
    if (!dateString.match(regEx)) return false;  // Invalid format
    return true
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  inputEnter = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.handleInputSubmit()
    }
  }
  handleInputSubmit = event => {

    this.fetchStats()
    setTimeout(() => { this.goToPicAnchor(); }, 300)

  }
  handleSubmit = event => {
    event.preventDefault()

    this.fetchStats()
    setTimeout(() => { this.goToPicAnchor(); }, 300)

  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            exact path={'/'}
            render={(props) =>
              <Home
                {...props}
              />}
          />

          <Route
            exact path={"/state_search"}
            render={(props) => <StateSearch
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              stateValue={this.state.searchState}
              keyUp={this.inputEnter}
              yearValue={this.state.searchYear}
              name="searchQuery"
              results={this.state.stateResult}
              {...props}
            />}
          />
          <Route
            exact path={"/about_me"}
            render={() => <AboutMe />}
          />
          <Route
            render={() => <NotFound />}
          />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default Container