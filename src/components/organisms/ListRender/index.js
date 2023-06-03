import { SubTitle } from 'components/atoms'
import { ListCard } from 'components/molecules'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <SubTitle>
        Sua lista está vazia, clique no botão "Adicionar" para incluir novos
        items.
      </SubTitle>
    )
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
