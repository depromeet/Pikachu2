/* global google */
import React, {
  Component,
} from 'react';

import Helmet from 'react-helmet';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import Container from './Container';

const GettingStartedGoogleMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={18}
    defaultCenter={{ lat: 37.4818227, lng: 126.9079878 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default class GettingStartedExample extends Component {

  state = {
    markers: [{
      position: {
        lat: 37.4828240,
        lng: 126.9100000,
      },
      key: 'Taiwan',
      defaultAnimation: 2,
    }],
  };

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

    if (nextMarkers.length === 3) {
      this.props.toast( // eslint-disable-line react/prop-types
        'Right click on the marker to remove it',
        'Also check the code!'
      );
    }
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
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapLoad={this.handleMapLoad}
          onMapClick={this.handleMapClick}
          markers={this.state.markers}
          onMarkerRightClick={this.handleMarkerRightClick}
        />
      </Container>
    );
  }
}
