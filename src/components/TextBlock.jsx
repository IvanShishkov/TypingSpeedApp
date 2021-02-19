import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getText } from '../redux/actions/textAction'

import { Input, MainText, Information, ModalContent } from './'

import Modal from 'react-modal'

Modal.setAppElement('body')

const now = () => new Date().getTime()

export const TextBlock = () => {
  const dispatch = useDispatch()
  const text = useSelector((state) => state.text.text).toString()

  const [index, setIndex] = React.useState(0)
  const [correctIndex, setCorrectIndex] = React.useState(0)
  const [errorIndex, setErrorIndex] = React.useState(0)
  const [ru, setRu] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [started, setStarted] = React.useState(false)
  const [ended, setEnded] = React.useState(false)
  const [accuracy, setAccuracy] = React.useState(100)
  const [startTime, setStartTime] = React.useState(0)
  const [cpm, setCpm] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)
  const [outgoingChars, setOutgoingChars] = React.useState('')

  React.useEffect(() => {
    dispatch(getText(Math.round(Math.random() * 7), ru))
  }, [dispatch, ru])

  const toggleModal = React.useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const handleEnd = React.useCallback(() => {
    setEnded(true)
    setStarted(false)
    toggleModal()
  }, [toggleModal])

  const handleReload = React.useCallback(() => {
    setStarted(true)
    setEnded(false)
    window.location.reload()
  }, [])

  const handleKeyPress = (e) => {
    e.preventDefault()
    const { key } = e

    let updatedOutgoingChars = outgoingChars

    if (key === text.charAt(index)) {
      setIndex(index + 1)
      updatedOutgoingChars += text.charAt(index)
      setOutgoingChars(updatedOutgoingChars)
      setCorrectIndex(correctIndex + 1)
      setIsError(false)
    } else {
      setErrorIndex(errorIndex + 1)
      setIsError(true)
    }

    if (index !== 0) {
      if (!startTime) setStartTime(now())
      const minutes = (now() - startTime) / 60000
      setCpm(Math.round((correctIndex + errorIndex) / minutes))
    }

    if (index > 5) {
      if (accuracy > 0)
        setAccuracy(Math.floor(((index - errorIndex) / index) * 100))
      else setAccuracy(0)
    }

    if (index + 1 === text.length) handleEnd()
  }

  return (
    <div className="textBlock">
      <Input handleKeyPress={handleKeyPress} started={started} />
      <MainText
        indexOfInput={index}
        isError={isError}
        text={text}
        outgoingChars={outgoingChars}
      />
      <Information
        cpm={cpm}
        accuracy={accuracy}
        started={started}
        setStarted={setStarted}
        handleReload={handleReload}
        setEnded={setEnded}
        ru={ru}
        setRu={setRu}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={false}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <ModalContent
          cpm={cpm}
          accuracy={accuracy}
          handleReload={handleReload}
        />
      </Modal>
    </div>
  )
}
