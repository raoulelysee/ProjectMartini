import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from 'material-ui/Paper';
//import Paper from 'material-ui-next/Paper';
//import Typography from 'material-ui-next/Typography';
import { Typography } from 'material-ui/styles/typography';


class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '700px',
      height: '500px',
      position:'absolute',
      marginLeft:'0',
      marginTop: '0',
      marginRight: '0',
      marginBottom: '0',
      margin: 'auto',

    }
    return (
      <div className="mapstyle">
      <Map
        item
        xs = { 12 }

        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 45.550329, lng: -73.650950}}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Restaurant Martini Pizza' }
          position = {{ lat: 45.550329, lng: -73.650950}}
          name = { 'Restaurant Martini Pizza'  }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Restaurant Martini Pizza
            </Typography>
            <Typography
              component = 'p'
            >
              9481 Lajeunesse (coin Louvain)<br />
              Montréal Qc H2M 1S5
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyApH2WqxM59LBf51qATGgLV6xT7ByH3B9o",
    v: "3"
})(GoogleMapsContainer)
