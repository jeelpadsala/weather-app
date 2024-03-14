import React, { Component } from 'react'
import Search from './Search'
import Result from './Result'
import Recent from './Recent'
import axios from 'axios'

export class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: "",
      lon: "",
      weatherData: null,
      city: "",
      loading: false,
      recent: []
    }
  }

  changeHandler = (event) => {
    console.log(event);
    const name = event.target.name;
    console.log(name);
    if (name === "city") {
      this.setState({
        city: event.target.value,
      })
    } else if (name === "lat") {
      this.setState({
        lat: event.target.value,
      })
    } else if (name === "lon") {
      this.setState({
        lon: event.target.value
      })
    }
  };

  searchHandler = (event) => {
    event.preventDefault();

    this.setState({
      loading: true
    })

    setTimeout(() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7aad24f6ce44a150f47383f14ee87a64`)
        .then((result) => {
          console.log(result);
          this.setState({
            city: result.data.name,
            weatherData: result.data
          },
            () => {
              this.addtoRecentHandler();
            }
          )
        })
        .catch((err) => {
          console.log(err);
        })
    }, 3000)
  }

  researchHandler = (lat, lon) => {
    console.log('Lat', lat, 'Lon', lon);

    this.setState({ lat, lon }, () => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=7aad24f6ce44a150f47383f14ee87a64`)
        .then((result) => {
          console.log(result);
          this.setState({
            city: result.data.name,
            weatherData: result.data
          })
        }).catch((err) => {
          console.log(err);
        })
    })
  }

  addtoRecentHandler = () => {
    const recent = this.state.recent;
    recent.push({
      lat: this.state.lat,
      lon: this.state.lon,
      city: this.state.city
    })

    this.setState({ recent }, () => {
      console.log("recent", this.state);
    })
  }

  locationHandler = (event) => {
    this.setState({
      loading: true
    })
    event.preventDefault();
    // this.setState({
    //   lat: "",
    //   lon: "",
    //   city: null,
    //   weatherData: null
    // })
    console.log(event);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log("Location", res);
          setTimeout(() => {
            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude
            });
            const { latitude: lat, longitude: lon } = res.coords;

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7aad24f6ce44a150f47383f14ee87a64`)
              .then((result) => {
                console.log(result);
                this.setState({
                  city: result.data.name,
                  weatherData: result.data
                })
              })
              .catch((err) => {
                console.log(err);
              });
          }, 3000)
        },
        (err) => {
          console.log("Location", err);
        }
      )
    } else {
      console.log("Location Not Support");
    }
  }

  render() {
    console.log("City", this.state.city);
    console.log("weather Data", this.state.weatherData);
    return (
      <div className='mt-5'>
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          weatherData={this.state.weatherData}
          change={this.changeHandler}
          location={this.locationHandler}
          search={this.searchHandler}
        ></Search>
        <Result weatherData={this.state.weatherData} loader={this.state.loading}></Result>
        <Recent recent={this.state.recent} research={this.researchHandler}></Recent>
      </div>
    )
  }
}

export default Weather
