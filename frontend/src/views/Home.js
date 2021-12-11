import React from "react";
import CardSearch from "../components/cardSearch";
import Widget from "../components/widget";
import axios from "axios"

import "../styles/home.css";
const Home = () => {
    const [info, setInfo] = React.useState([]);
    React.useEffect(() => {
        console.log(navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
        }));
        console.log(process.env.REACT_APP_AMBEE_API_KEY)
        var options = {
            method: 'GET',
            url: 'https://api.ambeedata.com/latest/by-city',
            params: { city: 'San Pedro Sula' },
            headers: { 'x-api-key': process.env.REACT_APP_AMBEE_API_KEY, 'Content-type': 'application/json' }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        options = {
            method: 'GET',
            url: 'https://api.ambeedata.com/weather/latest/by-lat-lng',
            params: { lat: '14.0640256', lng: '-87.2251392' },
            headers: { 'x-api-key': process.env.REACT_APP_AMBEE_API_KEY, 'Content-type': 'application/json' }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    return (
        <div className="container">

            <div className="bg">
            </div>
            <div className="container">
                <div className="row">
                    <CardSearch />
                </div>
                <Widget />
            </div>
        </div>
    )
}
export default Home;