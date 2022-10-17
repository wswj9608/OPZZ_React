interface ElementDefaultProps {
  className?: string
  sx?: object
  onClick?: () => {}
  children: any
}

interface TextProps extends ElementDefaultProps {
  size?: string
  weight?: 'regular' | 'bold'
  color?: string
}

interface ButtonProps extends ElementDefaultProps {
  type: 'A' | 'B'
  color?: string
  fontColor?: string
}
