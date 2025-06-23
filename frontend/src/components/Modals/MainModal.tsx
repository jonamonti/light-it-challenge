import { useEffect, type FC, type ReactNode } from 'react'
import { Backdrop, Content, ModalContainer } from './styled'

type Props = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const MainModal: FC<Props> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <Content>{children}</Content>
      </ModalContainer>
    </Backdrop>
  )
}

export default MainModal