import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import DisplayResults from './DisplayResults'
import axios from 'axios'
import ApiEndpoints from '../lib/ApiEndpoints'
import {
  Link,
  Route,
  NavLink,
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
      console.log(res.data.results)
      const resData = res.data.results
      const filteredResult = resData.filter((datapoint) => {
        return datapoint.year == this.state.searchYear
      })
      console.log(filteredResult)
      this.setState({
        stateResult: filteredResult
      })
      // console.log(this.state.stateResults)

    } catch (error) {
      console.error(error)
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()

    this.fetchStats()

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
              yearValue={this.state.searchYear}
              name="searchQuery"
              results={this.state.stateResult}
              {...props}
            />}
          />
        </Switch>
        {/* <StateSearch
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          stateValue={this.state.searchState}
          yearValue={this.state.searchYear}
          name="searchQuery"
          results={this.state.stateResult}
        /> */}
      </>
    )
  }
}

export default Container