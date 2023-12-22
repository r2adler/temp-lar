'use client'
import {ComponentProps, ComponentPropsWithoutRef, useState} from 'react'
import {DeleteIcon} from 'public/DeleteIcon'
import Eye from 'public/Eye'
import EyeClosed from 'public/Eye'
import {SearchImg} from 'public/SearchIcon'
import {Typography} from '@/components'
import {clsx} from 'clsx'
import SearchIcon from 'public/searchIcon.svg'

import cls from './Text-field.module.scss'

export type TextFieldProps = {
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  name?: string
  onClearClick?: () => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = ({
                            className,
                            disabled,
                            errorMessage,
                            fullWidth,
                            label,
                            onClearClick,
                            type,
                            value,
                            ...rest
                          }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const finalType = getFinalType(type, showPassword)

  const onEyeClickHandler = () => {
    setShowPassword(prev => !prev)
  }

  const searchImgCN = clsx(cls.searchImg, disabled && cls.disabled)
  const eyeIconCN = clsx(disabled && cls.disabled)
  const inputCN = clsx(cls.textField, errorMessage && cls.error, disabled && cls.disabled)
  const inputWrapperCN = clsx(
    cls.inputWrapper,
    errorMessage && cls.error,
    fullWidth && cls.fullWidth,
    className
  )
  const labelCN = clsx(cls.label, disabled && cls.disabled)

  return (
    <div className={cls.container}>
      {label && (
        <Typography as={'label'} className={labelCN} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={inputWrapperCN}>
        {type === 'search' && <SearchImg className={searchImgCN}/>}
        <input className={inputCN} disabled={disabled} type={finalType} {...rest} />
        <div className={cls.searchIconWrapper}>
          <SearchIcon className={cls.searchIcon}/>
        </div>

        {type === 'search' && (
          <button className={cls.deleteBtn} onClick={onClearClick} type={'button'}>
            <DeleteIcon/>
          </button>
        )}
        {type === 'password' && (
          <button className={cls.eyeBtn} onClick={onEyeClickHandler} type={'button'}>
            {showPassword ? <EyeClosed className={eyeIconCN}/> : <Eye className={eyeIconCN}/>}
          </button>
        )}
      </div>

      {errorMessage && (
        <Typography className={cls.error} variant={'caption'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}

const getFinalType = (type: ComponentProps<'input'>['type'], showPassword: boolean) => {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}
