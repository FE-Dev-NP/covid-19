import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';

import image from './images/image.png'



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data:data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img  src={image} alt="image1" />
    <h1>{!country ? `Current state in World` : `Current state in ${country}`}</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;