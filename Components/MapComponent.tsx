import React from 'react'
import Image from 'next/image'
import map from '../src/assets/map.svg'

const MapComponent = () => {
  return (
    <div>
      <div className="map-wrapper w-full">
         <Image src={map} alt=''/>
      </div>
    </div>
  )
}

export default MapComponent
