import React from 'react'

export const Speed = ({ cpm }) => {
  return (
    <div className="speed">
      <div className="topBlock">
        <span>скорость</span>
      </div>
      <div className="bottomBlock">
        <span className="cpm">{cpm}</span>
        <span> cpm</span>
      </div>
    </div>
  )
}
