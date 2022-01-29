import React, {useState,Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {useAuth} from '../Utils/AuthContext'
import { Link, useHistory } from 'react-router-dom';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Takeride() {
  const [error, setError] = useState("");
 
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [Ctype, setCtype] = useState("");
 
  const {signup, addUserData} = useAuth();
  const history = useHistory();

  const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
         
          await addUserData({address,city,state,pincode,Ctype});
          history.push("/profile");   
          
      } catch(e){
          setError(e.error);
          console.error(e);
      }
  }

class Takeride extends Component {
  static defaultProps = {
    center: {
      lat: 19.75,
      lng: 75.7138884
    },
    zoom: 11
  };

  render() {
    return (
      <div>
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

      <div>
      <form autoComplete="false" onSubmit={handleSubmit}>
      <h1> Take Ride</h1>
          {(error)?("Error : "+error):("")} 
         
         
          <label htmlFor="address">
              Address : 
              <textarea value={address}  name="address" id="address" onChange={(e)=>setAddress(e.target.value)} />
          </label>
          <label htmlFor="city">
              City : 
              <input value={city} type="text" name="city" id="city" onChange={(e)=>setCity(e.target.value)} />
          </label>
          <label htmlFor="state">
              State : 
              <input value={state} type="text" name="state" id="state" onChange={(e)=>setState(e.target.value)} />
          </label>
          
          <label htmlFor="pincode">
              Pincode : 
              <input value={pincode} type="text" name="pincode" id="pincode" onChange={(e)=>setPincode(e.target.value)} />
          </label>

          <label htmlFor="car1">
              Car type : 
              <input value="car1" type="radio" name="Ctype" id="car1" onChange={(e)=>setCtype(e.target.value)} />
          </label>


          <input type="submit" value="Calculate Price" />

          
          Already a member? <Link to="/login">Login</Link>
      </form>
  </div>
  </div>
    );
    }}}