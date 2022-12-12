import { ConstructionOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

const useWindowInfo = (inf) => {
    const [info, setInfo] = useState({});
    const [lat, setLat] = useState();
  
  const x = document.getElementById('geo')
  var date = new Date();
  var z = [];
  if (info && lat ) {
    z.push("Operating System: " + window.clientInformation.platform, "Time-Zone: " + date,
      "Current Url: " + window.location.href, "Network Type: " + window.navigator.connection.effectiveType)
  }

  function getLocation() {
    if (inf === true) {
         if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
      }
     
    }
    function showPosition(position) {
      if (x !== null) {
        x.innerHTML = "Latitude: " + position.coords.latitude + ", " +
          "Longitude: " + position.coords.longitude;
      }
      setLat(position.coords)

    }
  
  const information = () => {
    if (inf===true) {
      setInfo(z)
    }
  }
  
  useEffect(() => {
  information()
  getLocation()
 },[x, inf])
  
  return (
    z)
}

export default useWindowInfo