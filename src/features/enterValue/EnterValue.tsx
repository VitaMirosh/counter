import {type ChangeEvent} from 'react';
import {Input} from '../../shared/ui/input/Input.tsx';
import {Button} from '../../shared/ui/button/Button.tsx';
import type {CountType, MinMaxType} from '../../App.tsx';
import s from './enter_value.module.css'

export type CounterProps = {
  counterScreen: CountType
  setCounterScreen: (counterScreen: CountType) => void
  setting: MinMaxType
  setSetting: (setting: MinMaxType) => void
}

export const EnterValue = ({
                             setCounterScreen,
                             setting,
                             setSetting,
                             counterScreen
                           }: CounterProps) => {

  const handleChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSetting({...setting, max: Number(e.currentTarget.value)})
  };
  const handleChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSetting({...setting, min: Number(e.currentTarget.value)})
  };

  const disableInput = () => {
    if ((setting.max && setting.min) < 0 || (setting.max == setting.min) || (setting.max < setting.min)) {
      setCounterScreen({...counterScreen, message: 'Incorrect value'});
    } else {
      setCounterScreen({...counterScreen, message: 'enter values and press "set"'})
    }
  }
  const oncClickSetBtn = () => {
    if ((setting.max || setting.min > 0) && (setting.min < setting.max)) {
      setCounterScreen({...counterScreen, count: setting.min, message: ''})
    } else {
      setCounterScreen({...counterScreen, message: 'Incorrect value'})
    }
  }

  const disabledBtn = (setting.max && setting.min) < 0 || (setting.max == setting.min) || (setting.max < setting.min)
  const className =  (setting.max || setting.min) < 0 || (setting.max == setting.min) || (setting.max < setting.min)

  return (
    <>
      <div className={s.enter_value}>
        <div className={s.input_container}>
          <div className={s.input_group}>
            <p className={s.p}>max value</p>
            <Input value={setting.max} onChange={handleChangeMaxValue} disabled={disableInput} className={className}/>
          </div>
          <div className={s.input_group}>
            <p className={s.p}>start value</p>
            <Input value={setting.min} onChange={handleChangeStartValue} disabled={disableInput} className={className}/>
          </div>
        </div>

        <div className={s.btn}>
          <Button name={'set'} onClick={oncClickSetBtn} disabled={disabledBtn}/>
        </div>

      </div>

    </>
  )
}
