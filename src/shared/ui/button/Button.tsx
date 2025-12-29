import { clsx } from "clsx"
import type {ReactNode} from 'react';
import s from './button.module.css'

type ButtonType = {
  className?: string,
  name: string
  onClick: () => void
  disabled: boolean
  children?: ReactNode
}

export const Button = ({name,onClick,className,children,disabled}:ButtonType) =>{
  const render = name ? name : children


  return(
    <button className={clsx(s.btn, disabled ? s.disabled:'', className) } onClick={onClick} disabled={disabled}>{render}</button>
  )

}
