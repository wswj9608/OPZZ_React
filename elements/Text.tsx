import React from 'react'
import styled from 'styled-components'
import { TextProps } from './types'

// type HeadingSizeType = 'regular20' | 'regular24' | 'regular28' | 'bold20' | 'bold24' | 'bold28'
// type DisplaySizeType = 'regular32' | 'bold32'

const Text = ({
  size = '14px',
  weight = 'regular',
  color = '#000',
  children,
  ...rest
}: TextProps): JSX.Element | null => {
  // const checkEng = /[a-zA-Z]/

  const setLineHeight = (fontSize: string) => {
    if (fontSize === '10px') {
      return '18px'
    }

    if (fontSize === '12px') {
      return '20px'
    }

    if (fontSize === '14px') {
      return '24px'
    }

    if (fontSize === '16px') {
      return '28px'
    }

    if (fontSize === '20px') {
      return '36px'
    }

    if (fontSize === '24px') {
      return '42px'
    }

    return '48px'
  }

  // if (checkEng.test(children as string)) {
  //   return (
  //     <BasicEngText
  //       style={{ ...sx }}
  //       className={className}
  //       color={color}
  //       size={size}
  //       weight={weight}
  //       height={setLineHeight(size)}
  //     >
  //       {children}
  //     </BasicEngText>
  //   )
  // }

  return (
    <BasicText color={color} size={size} weight={weight} height={setLineHeight(size)} {...rest}>
      {children}
    </BasicText>
  )
}

// const BasicEngText = styled('p')<{ size: string; weight: string; height: string; color: string }>`
//   font-family: 'NanumBarunGothic';
//   color: ${({ color }) => color};
//   font-size: ${({ size }) => size};
//   font-weight: ${({ weight }) => (weight === 'bold' ? '700' : '400')};
//   /* line-height: ${({ size }) => `${Number(size.replace('px', '')) + 4}px`}; */
//   line-height: ${({ size }) => Number(size.replace('px', '')) + 4}px;
// `

const BasicText = styled.p<{
  size: string
  weight: string
  height: string
  color: string
}>`
  font-family: 'Noto Sans KR';
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => (weight === 'bold' ? '700' : '400')};
  line-height: ${({ size }) => Number(size.replace('px', '')) + 4}px;
`

export default Text
