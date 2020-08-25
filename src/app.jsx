import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    Axios
    .get('https://codepen.io/merobertsjr/pen/WayqqB.js')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>San Diego Top Spots</h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
        </div> 
        { 
          this.state.topspots.map(topspot => (
              <TopSpot  
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location}
              />
            )
          )
        }

      </div>
    );
  }
}

export default App;
