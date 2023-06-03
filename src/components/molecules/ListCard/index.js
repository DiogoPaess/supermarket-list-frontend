import './index.css'

import {
  CardContainer,
  CheckImage,
  TextContainer,
  ArrowIconContainer,
  ArrowIcon
} from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(item)}>
      <CheckImage
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
      />
      <TextContainer>
        <SmallText fontSize={16} align="left" mb={2}>
          {item.name}
        </SmallText>
        <SmallText fontSize={14} fontWeight={400} align="left">
          {item.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowIconContainer>
    </CardContainer>
  )
}
