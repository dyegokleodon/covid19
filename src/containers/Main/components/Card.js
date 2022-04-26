import {Card as CardUI} from '../../../components/Card'

import {
  ValueStyled,
  LabelStyled,
  CardContentStyled
} from './style'
function Card ({value, color, label}) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default Card;