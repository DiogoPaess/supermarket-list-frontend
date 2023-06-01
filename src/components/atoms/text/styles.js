import styled from 'styled-components'

export const Title = styled.h1`
  max-width: ${({ mw }) => mw || 320}px;
  font-weight: bold;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fonteSize }) => fonteSize || 24}px;
  line-height: ${({ lineHeight }) => lineHeight || 22}px;
  color: black;
  margin-left: ${({ ml }) => ml || 0}px;

  @media (max-width: 420px) {
    max-width: 310px;
    font-size: 18px;
  }
`
export const SubTitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ fonteSize }) => fonteSize || 12}px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  margin-bottom: ${({ mb }) => mb || 24}px;

  @media (max-width: 420px) {
    max-width: 310px;
    font-size: 12px;
    margin-bottom: ${({ mb }) => mb || 24}px;
  }
`
