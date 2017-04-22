import React, { Component } from 'react';

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = { restaurants: [] };
  }

  componentWillMount() {
  }

  render() {
    return (
      <ul>
        {
          this.state.restaurants.map((restaurant) => <li>{restaurant.name}</li>)
        }
      </ul>
    );
  }
}
