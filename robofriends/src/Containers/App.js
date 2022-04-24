import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from './robots';
import Scroll from '../Components/Scroll.js' ;
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users });
        })
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value})
        //this.state.searchfield = wrong syntax
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots === 0) {
            return <h1>Loading...</h1>
        } else{
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );}
    }
}

export default App;