import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;

  @media (max-width: 830px) {
    overflow-x: hidden;
    overflow-y: hidden;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 412px;
  height: 520px;
  background-color: white;
  border-radius: 24px;

  @media (max-width: 420px) {
    max-width: 420px;
    max-height: 700px;
  }
`

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'shopping-back'
})`
  width: 220px;
  height: auto;

  @media (max-width: 420px) {
    width: 160px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  margin-top: 24px;

  @media (max-width: 420px) {
    width: 320px;
    margin-top: 8px;
  }
`
