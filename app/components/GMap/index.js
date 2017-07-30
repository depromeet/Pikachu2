/* global google */
import canUseDOM from 'can-use-dom';
import React, {
  Component,
} from 'react';

import Helmet from 'react-helmet';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import Container from './Container';
import MeetUpInfoWindow from './MeetUpInfoWindow';

const geolocation = (
  canUseDOM && navigator.geolocation ? navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure('fail');
    },
  })
);

const PikachuMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    center={props.center}
    onClick={props.onMapClick}
  >
    {props.center && (
      <InfoWindow
        disableAutoPan={true}
        position={props.center}
      >
        <MeetUpInfoWindow></MeetUpInfoWindow>
      </InfoWindow>
    )}
    {props.markers.map((marker) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class GMap extends Component {

  state = {
    markers: [{
      position: {
        lat: 37.4888240,
        lng: 126.9100000,
      },
      key: 'Taiwan',
      defaultAnimation: 2,
    }],
    center: null,
  };

  componentDidMount() {
    geolocation.getCurrentPosition((position) => { // eslint-disable-line consistent-return
      if (this.isUnMounted) {
        return false;
      }

      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    }, () => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        lat: 37.4818227,
        lng: 126.9079878,
      });
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handleMapLoad = this.handleMapLoad.bind(this);
  handleMapClick = this.handleMapClick.bind(this);
  handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

  handleMapLoad(map) {
    this._mapComponent = map; // eslint-disable-line no-underscore-dangle
    if (map) {
      console.log(map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter((marker) => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <Container>
        <Helmet
          title="피카츄 만남이 쉬워진다."
        />
        <PikachuMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          center={this.state.center}
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </Container>
    );
  }
}
