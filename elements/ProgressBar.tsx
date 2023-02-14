import { gray } from '@/styles/palette'
import styled from 'styled-components'
import { ProgressBarProps } from './types'

const ProgressBar = ({ width, height, bgColor = gray[0], fill = gray[400] }: ProgressBarProps) => {
  return (
    <BarWrapper width={width} height={height} bgColor={bgColor} fill={fill}>
      <div className="bar" />
    </BarWrapper>
  )
}

const BarWrapper = styled.div<{ width: number; height: number; bgColor: string; fill: string }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  background-color: ${({ bgColor }) => bgColor};

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ width }) => width}%;
    height: ${({ height }) => height}px;
    background-color: ${({ fill }) => fill};
  }
`

export default ProgressBar
