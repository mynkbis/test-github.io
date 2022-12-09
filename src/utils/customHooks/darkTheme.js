import React, { useEffect, useState } from 'react'

const useDarkTheme = (value) => {
    const [darkMode, setDarkMode] = useState(false)
    const enabled = darkMode ;
   
    useEffect(() => {
        const className = "dark-mode";
      const element = window.document.body;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );







    
  return (
    [enabled, setDarkMode]
  )
}

export default useDarkTheme