import React, { Component } from 'react'
import Header from '../Layout/Header';
import axios from 'axios';
import ShowUserInfo from '../ShowUserInfo'
import ShowReposInfo from '../ShowReposInfo';
import Search from '../Search';
import Footer from '../Layout/Footer';

export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: "coryhouse",
            userInfo: {},
            reposInfo: [],
            clientId:'64bc799a8c9572271c3a',
            clientSecret:'0e55f2f7f2e309be169fb2f0bdc9c7a48b25e521',
        }
    }

componentDidMount = () => {
    this.onClick();
}

onClick = () => {
    this.state.search === "" ? alert('Please input somthing!')
    :
    axios.get(`https://api.github.com/users/${this.state.search}?client_id=${this.state.clientId}&client_secret=${this.state.clientSecret}&sort=created`)
      .then(result => {
          this.setState({userInfo: result.data})
      })
      .catch(err => console.log(err))
      this.setState({search: ""})
    axios.get(`https://api.github.com/users/${this.state.search}/repos?client_id=${this.state.clientId}&client_secret=${this.state.clientSecret}&sort=created`)
    .then(result => {
        this.setState({reposInfo: result.data})
    })
    .catch(err => console.log(err))
}

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

  render() {
      // console.log(this.state.userInfo);
      // console.log(this.state.reposInfo);
    return (
      <div>
        <Header />
        <Search onChange={this.onChange} onClick={this.onClick} search={this.state.search} />
        <ShowUserInfo userInfo={this.state.userInfo}/>
        <ShowReposInfo reposInfo={this.state.reposInfo}/>
        <Footer />
      </div>
    )
  }
}
