import {Button} from '../../shared/ui/button/Button.tsx';
import s from './counter.module.css'
import {useAppDispatch} from '../../app/hooks/useAppDispatch.ts';
import {increaseCountAC, resetCountAC} from '../auth/model/counter-reducer.ts';
import type {CountType} from '../auth/model/counter-selectors.ts';


type Props={
 count: CountType
}


export const Counter = ({count}: Props) => {

  const dispatch = useAppDispatch()
  const increaseCount = () => {
    dispatch(increaseCountAC())
  }


  const resetCount = () => {
    dispatch(resetCountAC())
  }

  const disabledBtnIcr = (count.max == count.count) || (count.max && count.min) < 0 || (count.max < count.min) || (count.max == count.min) || !!count.message
  const disabledBtnDec = (count.max && count.min) < 0 || (count.max < count.min) || (count.max == count.min) || (count.min == count.count) || !!count.message
  const errorText = (count.max && count.min) < 0 || (count.max < count.min) || (count.max == count.min)

  return (

    <>
      <div className={s.counter}>
        <p className={count.message ? s.num
          : count.count === count.max ? s.max
            : s.number} style={{color: errorText ? 'red' : ''}}>
          {count.message ? count.message
            : count.count}
        </p>
        <div className={s.groupBtn}>
          <Button disabled={disabledBtnIcr} name={'inc'} onClick={increaseCount}/>
          <Button disabled={disabledBtnDec} name={'reset'} onClick={resetCount}/>
        </div>

      </div>

    </>

  )
}