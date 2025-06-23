import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'
import { StyledButton } from './styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  children?: ReactNode
}

const MainButton: FC<Props> = ({ label, children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {label || children}
    </StyledButton>
  )
}

export default MainButton