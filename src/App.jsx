import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div>
      <button onClick={async () => {
        const data= await fetchVideos("Cat");
        console.log(data.videos);
      }}>Get Videos</button>
    </div>
  )
}

export default App