import React from 'react'
import {HOC} from './HOC'

const HOC_index = (props) => {
  return (
    <div>
      <h2>Hello higer order components - this is props {props.favoriteNumber}</h2>
    </div>
  )
}

export default HOC(HOC_index)