interface ElementDefaultProps {
  className?: string
  sx?: object
  onClick?: () => {}
  children: any
}

interface TextProps extends ElementDefaultProps {
  size?:
    | "10px"
    | "12px"
    | "14px"
    | "16px"
    | "18px"
    | "20px"
    | "24px"
    | "28px"
    | "30px"
    | "32px"
    | "54px"
  weight?: "regular" | "bold"
  color?: string
}

interface ButtonProps extends ElementDefaultProps {
  type: "A" | "B"
  color?: string
  fontColor?: string
}
