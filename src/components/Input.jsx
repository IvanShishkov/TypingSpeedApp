import React from 'react'

export const Input = ({ handleKeyPress, started }) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (started) ref.current.focus()
  }, [started])

  return (
    <div className="input">
      <input ref={ref} onKeyPress={handleKeyPress} type="text" />
    </div>
  )
}
