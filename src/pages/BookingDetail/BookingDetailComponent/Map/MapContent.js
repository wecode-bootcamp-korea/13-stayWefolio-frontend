import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContent.scss";

export class MapContent extends Component {
  constructor() {
    super();
    this.state = {
      locationData: [],
      markerPosition: {
        lat: 0,
        lng: 0,
      },
      markerText: "Hotel name",
    };
  }

  renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: this.state.markerPosition,
      map,
      text: this.state.markerText,
    });
    return marker;
  };

  componentDidMount() {
    fetch("/data/bookingDetailData/mapLocationData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState((prevState) => ({
          markerPosition: {
            ...prevState.markerPosition,
            lat: Number(res.picks_detail[0]?.latitude),
            lng: Number(res.picks_detail[0]?.longitude),
          },
        }));
      });
  }

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        center={this.state.markerPosition}
        onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        containerStyle={{ maxWidth: "1090px", height: "500px" }}
      >
        <Marker position={this.state.markerPosition} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAY0YOFJf78OggXYeI6_fe9uiDQ7e_GZjM",
})(MapContent);
