import {type ChangeEvent} from 'react';
import {Input} from '../../shared/ui/input/Input.tsx';
import {Button} from '../../shared/ui/button/Button.tsx';
import s from './enter_value.module.css'
import {useAppDispatch} from '../../app/hooks/useAppDispatch.ts';
import type {CountType} from '../auth/model/counter-selectors.ts';
import {
  disableInputAC,
  handleChangeMaxValueAC,
  handleChangeStartValueAC,
  oncClickSetBtnAC
} from '../auth/model/counter-reducer.ts';

 type Props = {
  count:CountType
}

export const EnterValue = ({count}: Props) => {
  const dispatch = useAppDispatch()
  const handleChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleChangeMaxValueAC({e}))
  };
  const handleChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(handleChangeStartValueAC({e}))
  };

  const disableInput = () => {
    dispatch(disableInputAC());
  }
    const oncClickSetBtn = () => {
      dispatch(oncClickSetBtnAC())
    }

    const disabledBtn = (count.max && count.min) < 0 || (count.max == count.min) || (count.max < count.min)
    const classNameMin = count.min < 0 || (count.max == count.min) || (count.max < count.min)
    const classNameMax = count.max < 0 || (count.max == count.min) || (count.max < count.min)

    return (
      <>
        <div className={s.enter_value}>
          <div className={s.input_container}>
            <div className={s.input_group}>
              <p className={s.p}>max value</p>
              <Input value={count.max} onChange={handleChangeMaxValue} disabled={disableInput}
                     className={classNameMax}/>
            </div>
            <div className={s.input_group}>
              <p className={s.p}>start value</p>
              <Input value={count.min} onChange={handleChangeStartValue} disabled={disableInput}
                     className={classNameMin}/>
            </div>
          </div>

          <div className={s.btn}>
            <Button name={'set'} onClick={oncClickSetBtn} disabled={disabledBtn}/>
          </div>

        </div>

      </>
    )
  }

