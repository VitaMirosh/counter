import {Button} from '../../shared/ui/button/Button.tsx';
import {useState} from 'react';
import s from './counter.module.css'

const MAX_COUNTER = 5
const MIN_COUNTER = 0
export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);


  const increaseCount = () => {
      setCounter(counter + 1)
  }


  const resetCount = () => {
      setCounter(0)

  }

  return (

    <>
      <div className={s.counter}>
        <p className={s.num} style={{color: counter === MAX_COUNTER ? 'red' : ''}}
        >{counter}</p>
        <div className={s.groupBtn}>
          <Button disabled={counter === MAX_COUNTER}  name={'inc'} onClick={increaseCount}/>
          <Button disabled={counter === MIN_COUNTER} name={'reset'} onClick={resetCount}/>
        </div>

      </div>

    </>

  )
}