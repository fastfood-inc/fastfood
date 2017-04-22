import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setRestaurants } from '../actions';

class RestaurantList extends Component {
  componentWillMount() {
    fetch('/restaurants')
      .then((response) => {
        return response.json();
      })
      .then(({ restaurants }) => this.props.setRestaurants(restaurants));
  }

  render() {
    return (
      <ul>
        {
          this.props.restaurants.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)
        }
      </ul>
    );
  }
}

function mapStateToProps({ restaurants }) {
  return { restaurants };
}

export default connect(mapStateToProps, { setRestaurants })(RestaurantList);
