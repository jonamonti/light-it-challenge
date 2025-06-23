import { PHContainer } from './styled'

type Props = {
  text: string
  isLoading?: boolean
}

const MainPlaceholder = ({ text, isLoading }: Props) => {
  return (
    <PHContainer loading={isLoading}>
      <h2>{text}</h2>
    </PHContainer>
  )
}

export default MainPlaceholder