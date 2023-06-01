import { ButtonContainer, ButtonIcon } from './styles'

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <ButtonContainer onClick={onClick} outline={variant === 'outine'}>
      {icon && (
        <ButtonIcon
          src={`/images/${icon}.svg`}
          alt={`supermarket_icon_${icon}`}
        />
      )}
      {children}
    </ButtonContainer>
  )
}
