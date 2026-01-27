import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
    <div className='py-10 px-28'>
      <SearchBar />
      <Tabs/>
      <ResultGrid/>
    </div>
  )
}

export default App