import { useEffect, useState } from 'react'
import { Input } from 'components/molecules'
import { Title, Button } from 'components/atoms'
import { createItem, updadeItem, deleteItem } from 'services/request'
import {
  ModalBackgroundContainer,
  ModalContentContainer,
  ModalHeaderContainer,
  ModalCloseButton,
  ButtonsContainer
} from './styles'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres')
      return false
    }

    if (quantity < 1) {
      alert('Quantidade não pode ser menor que 1')
      return false
    }
    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (result?.erro) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.erro) {
      alert('Item atualizado com sucesso')
      onClose()
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await updadeItem(item._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.erro) {
        alert('Item atualizado com sucesso')
        onClose()
      }
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalBackgroundContainer>
      <ModalContentContainer>
        <ModalHeaderContainer>
          <Title> {item ? 'Editar item' : 'Adicionar novo item'}</Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeaderContainer>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Nome"
          placeholder="Ex: arroz"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade"
          type="number"
        />
        <ButtonsContainer>
          {item && (
            <Button icon="trash" variant="outline" onClick={callDeleteItem}>
              Deletar item
            </Button>
          )}
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? 'Atualizar' : 'Adicionar'}
          </Button>
        </ButtonsContainer>
      </ModalContentContainer>
    </ModalBackgroundContainer>
  )
}
