import React, { Component } from 'react';

export default class RestaurantList extends Component {
  constructor() {
    super();

    this.state = { restaurants: [] };
  }

  componentWillMount() {
    fetch('/restaurants')
      .then((response) => {
        return response.json();
      })
      .then(({ restaurants }) => this.setState({ restaurants }));
  }

  render() {
    return (
      <ul>
        {
          this.state.restaurants.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)
        }
      </ul>
    );
  }
}
