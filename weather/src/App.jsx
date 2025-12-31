import { useState } from 'react'
import './App.css'

/* Images   */
import searchIcon from './assets/searchIcon.png';
import clearIcon from './assets/clearIcon.png';
import drizzleIcon from './assets/drizzleIcon.png';
import humidityIcon from './assets/humidityIcon.png';
import rainIcon from './assets/rainIcon.png';
import cloudIcon from './assets/searchIcon.png';
import snowIcon from './assets/snowIcon.png';
import windIcon from './assets/windIcon.png';

function App() {
  return (
    <>
      <div className='container'>
            <div className='input-container'>
              <input type="text" className='cityInput' placeholder='Search City' />
              <div className='search-icon'>
                  <img src="{searchIcon}" alt="Search" />
              </div>
            </div>
      </div>
    </>  
  )
}

export default App
