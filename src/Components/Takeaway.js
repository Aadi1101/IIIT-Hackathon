import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Takeway extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='map' style={{ height: '60vh', width: '50%', alignItems: 'center' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAYG7F-Bnewm-LRAjsNgZj1j73Pg1UAMCc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={19.751513}
            lng={75.713944}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Takeway;
