export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: string
  weight?: 'regular' | 'bold'
  color?: string
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonType: 'fill' | 'line' | 'category'
  color?: string
  fontColor?: string
}

export interface ProgressBarProps {
  width: number
  height: number
  bgColor?: string
  fill?: string
}
