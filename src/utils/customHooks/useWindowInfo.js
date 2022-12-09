import { ConstructionOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

const useWindowInfo = (inf) => {
    const [info, setInfo] = useState({});
    const [lat, setLat] = useState();
const x= document.getElementById('geo')

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

    function showPosition(position) {
    
  x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
    setLat(position)
}


    useEffect(() => {
        setInfo(inf)
        getLocation();
    },[x])

  return (
    info, lat
  )
}

export default useWindowInfo