import { gray } from '@/styles/palette'
import React from 'react'
import styled from 'styled-components'
import { ButtonProps } from './types'

const Button = ({ buttonType, color = '#4171d6', fontColor = '#FFF', children, ...rest }: ButtonProps) => {
  if (buttonType === 'category') {
    return (
      <CategoryButton color={color} fontColor={fontColor} {...rest}>
        {children}
      </CategoryButton>
    )
  }

  if (buttonType === 'fill') {
    return (
      <FillButton color={color} fontColor={fontColor} {...rest}>
        {children}
      </FillButton>
    )
  }

  return (
    <LineButton color={color} fontColor={fontColor} {...rest}>
      {children}
    </LineButton>
  )
}

const CategoryButton = styled.button<{ color: string; fontColor: string }>`
  cursor: pointer;
  color: ${({ fontColor }) => fontColor};
  padding: 0 12px;
  border-radius: 4px;
  background: none;

  &:hover {
    background-color: ${gray[100]};
  }
`

const FillButton = styled.button<{ color: string; fontColor: string }>`
  cursor: pointer;
  height: 40px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};
`

const LineButton = styled.button<{ color: string; fontColor: string }>`
  cursor: pointer;
  padding: 0 14px;
  height: 40px;
  border-radius: 4px;
  border: ${({ color }) => `1px solid ${color}`};
  font-size: 14px;
  font-weight: 500;
  background: none;
  color: ${({ color }) => color};
`

export default Button
