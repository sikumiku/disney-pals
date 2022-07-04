import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pals: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://api.disneyapi.dev/characters')
      .then(response => response.json())
      .then(data => this.setState({ pals: data.data }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { pals, searchfield } = this.state;
    const filteredPals = pals.filter(pal => {
      return pal.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!pals.length) {
      <h1 className='f1 helvetica'>Disney Pals</h1>
      return <h1 className='tc helvetica'>Loading</h1>
    } else if (!searchfield.length) {
      return (
        <div className='tc'>
          <h1 className='f1 helvetica'>Disney Pals</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
      );
    } else {
      return (
        <div className='tc'>
          <h1 className='f1 helvetica'>Disney Pals</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
              <ErrorBoundary>
                  <CardList pals={filteredPals}/>
              </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
