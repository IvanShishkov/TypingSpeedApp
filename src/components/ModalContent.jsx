import React from 'react'
import { RiFocus3Line } from 'react-icons/ri'
import { IoSpeedometerOutline } from 'react-icons/io5'

const getTitle = (accuracy) => {
  if (accuracy >= 85) return 'отлично!'
  else if (accuracy >= 70 && accuracy < 85) return 'неплохо!'
  else return 'лучше потренируйся'
}

export const ModalContent = ({ cpm, accuracy, handleReload }) => {
  return (
    <div className="modalContent">
      <span className="congrat">{getTitle(accuracy)}</span>
      <div className="redBlock">
        <div className="informationBlock">
          <div className="wrapperBlock">
            <IoSpeedometerOutline className="infoIcons" />
            <div>
              <span className="titleBlock">скорость</span>
              <div className="block">
                <span className="numberBlock">{cpm} </span>
                <span> cpm</span>
              </div>
            </div>
          </div>
          <div className="wrapperBlock">
            <RiFocus3Line className="infoIcons" />
            <div>
              <span className="titleBlock">точность</span>
              <div className="block">
                <span className="numberBlock">{accuracy}</span>
                <span> %</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBlock">
          <ul>
            <li>• Скорость (CPM) - Ваша скорость печати знаков в минуту.</li>
            <li>
              • Точность - Ваша точность вводимых символов. Уменьшается при
              ошибках.
            </li>
          </ul>
        </div>
      </div>
      <div className="buttonBlock">
        <span className="tip">
          Подсказка: Вы можете сменить язык текста, нажав на флажок в правом
          нижнем углу главного окна*
        </span>
        <div className="retry" onClick={handleReload}>
          Еще раз
        </div>
      </div>
    </div>
  )
}
