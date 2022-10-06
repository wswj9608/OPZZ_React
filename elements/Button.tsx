import React from "react"
import styled from "styled-components"

const Button = ({
  className,
  sx,
  type,
  color = "#4171d6",
  fontColor = "#FFF",
  onClick,
  children,
}: ButtonProps) => {
  if (type === "A") {
    return (
      <ButtonA style={{ ...sx }} color={color} fontColor={fontColor}>
        {children}
      </ButtonA>
    )
  }

  return (
    <ButtonB style={{ ...sx }} color={color} fontColor={fontColor}>
      {children}
    </ButtonB>
  )
}

const ButtonA = styled.button<{ color: string; fontColor: string }>`
  padding: 0 14px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};
`

const ButtonB = styled.button<{ color: string; fontColor: string }>`
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
