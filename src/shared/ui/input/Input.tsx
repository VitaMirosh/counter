import type {ChangeEvent} from 'react';

type InputType = {
  value: number,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled:()=>void

}

export const Input = ({value,onChange,disabled}: InputType) => {
  return (
    <div >
      <input type={'number'} value={value} onChange={onChange} onClick={disabled}/>
    </div>
  );
};

