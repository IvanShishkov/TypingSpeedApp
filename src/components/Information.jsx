import React from 'react'
import { Speed, Accuracy, Button } from './ux'

export const Information = ({
  cpm,
  started,
  setStarted,
  handleReload,
  setEnded,
  accuracy,
  ru,
  setRu,
}) => {
  return (
    <div className="information">
      <div className="mainTopBlock">
        <Speed cpm={cpm} />
        <Accuracy accuracy={accuracy} />
      </div>
      <Button
        started={started}
        setStarted={setStarted}
        handleReload={handleReload}
        setEnded={setEnded}
        ru={ru}
        setRu={setRu}
      />
    </div>
  )
}
