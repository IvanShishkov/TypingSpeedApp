import React from 'react'
import { FaRedo, FaFlagCheckered } from 'react-icons/fa'

export const Button = React.memo(
  ({ started, setStarted, setEnded, handleReload, ru, setRu }) => {
    const handleStart = React.useCallback(() => {
      setStarted(true)
      setEnded(false)
    }, [setStarted, setEnded])

    const handleSwitchToRU = React.useCallback(() => {
      setRu(true)
    }, [setRu])

    const handleSwitchToUS = React.useCallback(() => {
      setRu(false)
    }, [setRu])

    return (
      <div className="buttonWrapper">
        <div
          className={`button ${!started ? 'start' : 'reload'}`}
          onClick={!started ? handleStart : handleReload}
        >
          {!started ? (
            <div>
              <span>начать</span>
              <FaFlagCheckered className="buttonIcons" />
            </div>
          ) : (
            <div>
              <span>заново</span>
              <FaRedo className="buttonIcons" />
            </div>
          )}
        </div>
        {!started ? (
          <div
            className="langSwitcher"
            onClick={!ru ? handleSwitchToRU : handleSwitchToUS}
          >
            <img
              alt="United States"
              src={
                !ru
                  ? 'http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg'
                  : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
              }
              width={20}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
)
