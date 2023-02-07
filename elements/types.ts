export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  size?: string
  weight?: 'regular' | 'bold'
  color?: string
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonType: 'A' | 'B'
  color?: string
  fontColor?: string
}