import React from "react";
import { Alert } from "react-native";

import * as Location from "expo-location";
import Loading from "./components/Loading";
import axios from "axios";
import Weather from "./components/Weather";

const API_KEY = "94a6b6eeb9e482d5d1e2d5fe896c2864";
export default class App extends React.Component {
  state = {
    isLoading: true,
    temp: 0,
    weatherState: "",
    city: "",
  };

  getWeather = async (latitude: number, longitude: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    //#region api result
    // api.openweathermap.org/data/2.5/weather?lat=37.6183579&lon=127.0725522&appid=94a6b6eeb9e482d5d1e2d5fe896c2864
    // var res = {
    //   coord: { lon: 127.0726, lat: 37.6184 },
    //   weather: [
    //     { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
    //   ],
    //   base: "stations",
    //   main: {
    //     temp: 276.17,
    //     feels_like: 273.31,
    //     temp_min: 275.15,
    //     temp_max: 278.15,
    //     pressure: 1026,
    //     humidity: 60,
    //   },
    //   visibility: 10000,
    //   wind: { speed: 0.51, deg: 120 },
    //   clouds: { all: 20 },
    //   dt: 1615214316,
    //   sys: {
    //     type: 1,
    //     id: 8096,
    //     country: "KR",
    //     sunrise: 1615154026,
    //     sunset: 1615195897,
    //   },
    //   timezone: 32400,
    //   id: 1841988,
    //   name: "Guri-si",
    //   cod: 200,
    // };
    //#endregion
    const { data } = await axios.get(url);
    console.log(data);
    this.setState({
      isLoading: false,
      temp: Math.round(data.main.temp),
      weatherState: data.weather[0].main,
      city: data.name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      await this.getWeather(latitude, longitude);
    } catch (e) {
      Alert.alert("앗 어딘지 알 수가 없어요.....유유", e.message);
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, city, temp, weatherState } = this.state;

    return isLoading ? (
      <Loading />
    ) : (
      <Weather city={city} weatherState={weatherState} temp={temp} />
    );
  }
}
