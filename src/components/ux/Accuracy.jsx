import React from 'react'

export const Accuracy = ({ accuracy }) => {
  return (
    <div className="accuracy">
      <span className="topBlock">точность</span>
      <div className="bottomBlock">
        <span className="number">{accuracy}</span>
        <span> %</span>
      </div>
    </div>
  )
}
