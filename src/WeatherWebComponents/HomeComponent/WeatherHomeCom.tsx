// import React from 'react'
import Searchbar from './Searchbar'
import CityWeather from './CityWeather'
import Chances from './Chances'

function WeatherHomeCom() {
  return (
    <div className=' pt-2'>
      <Searchbar/>
        <hr className='border-2'/>
      <div className='flex md:flex-row flex-col gap-2'>
        <CityWeather/>
        <Chances/>
      </div>
       
    </div>
  )
}

export default WeatherHomeCom