import {Button} from '../../shared/ui/button/Button.tsx';
import s from './counter.module.css'
import type {CounterProps} from '../enterValue/EnterValue.tsx';



export const Counter = ({counterScreen, setCounterScreen,setting}: CounterProps) => {

  const increaseCount = () => {
    if(setting.max > setting.min){
      setCounterScreen( {...counterScreen, count: counterScreen.count +1})
    }
  }


  const resetCount = () => {
    setCounterScreen({...counterScreen, count:setting.min})
  }

  const disabledBtnIcr = (setting.max  == counterScreen.count)||(setting.max  && setting.min) < 0 || (setting.max  < setting.min) || (setting.max  == setting.min)
  const disabledBtnDec = (setting.max  && setting.min)< 0 || (setting.max < setting.min) ||(setting.max  == setting.min) || (setting.min  == counterScreen.count)

  return (

    <>
      <div className={s.counter}>
        <p className={s.num} style={{color: counterScreen.count === setting.max  ? 'red' : ''}}
        >{counterScreen.message ? counterScreen.message : counterScreen.count}</p>
        <div className={s.groupBtn}>
          <Button disabled={disabledBtnIcr} name={'inc'} onClick={increaseCount}/>
          <Button disabled={disabledBtnDec} name={'reset'} onClick={resetCount}/>
        </div>

      </div>

    </>

  )
}