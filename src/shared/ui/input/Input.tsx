import type {ChangeEvent} from 'react';
import s from './input.module.css'
import {clsx} from 'clsx';

type InputType = {
  value: number,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled:()=>void
  className:boolean


}

export const Input = ({value,onChange,disabled,className}: InputType) => {
  return (
    <div >
      <input type={'number'} value={value} onChange={onChange} onClick={disabled} className={clsx(className ? s.error_input  : s.input )}/>
    </div>
  );
};

