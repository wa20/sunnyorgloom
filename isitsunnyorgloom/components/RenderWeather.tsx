'use client'

import React, { useEffect } from 'react'




function RenderWeather() {

   


   const captureLocation = async () => { 
    try { 
      const res = await fetch('https://ipapi.co/json/')
      const data = await res.json()

      console.log('captureLocation', data)

      const lat = data.latitude
      const lon = data.longitude

      fetchWeather(lat, lon)

      return data

    } catch (error) {  
            
        console.log('captureLocation', error)
    }   
   }


   const fetchWeather = async (lat: number, lon: number) => { 

    try {
        const ApiKey = process.env.WEATHER_API_KEY

        const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${ApiKey}`)
        const data = await res.json()

        console.log('fetchWeather', data)
    } catch (error) {
        console.log('fetchWeather', error)
    }

   }
   

   useEffect(() => { 

    // console.log('ipApi', fetch())

   }, [])

//  const weather_data = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${APIKEY}` 


  return (
    <div>RenderWeather</div>
  )
}

export default RenderWeather