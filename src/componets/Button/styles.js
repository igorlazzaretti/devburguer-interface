import styled from 'styled-components'

export const ContainerButton = styled.button`
  background-color: #7843e6;
  border-radius: 12px;
  width: 182px;
  height: 36px;
  border: none;
  cursor: pointer;
  
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  &:hover {
    background-color: #ffde59;
    opacity: 0.98;
  }
  &:active {
    opacity: 0.6;
  }
`
