import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  min-height: 100vh;
  max-width: 100vw;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;`

export const ProductsBanner = styled.img`
  width: 100%;
  object-fit: cover;
`
export const CategoryNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${(props) => (props.isActiveCategory ? '#7843e5' : '#999999')};
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #7843e5'};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
