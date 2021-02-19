import React from 'react'

const getColor = (i, index, indexOfInput, isError, outgoingChars) => {
  if (index === indexOfInput) {
    return !isError ? 'active' : 'error'
  } else {
    return outgoingChars[index] === i ? 'done' : ''
  }
}

export const MainText = ({ text, indexOfInput, isError, outgoingChars }) => {
  return (
    <div className="mainText">
      {text.split('').map((i, index) => (
        <span
          className={getColor(i, index, indexOfInput, isError, outgoingChars)}
          key={`${i}_${index}`}
        >
          {i}
        </span>
      ))}
    </div>
  )
}
