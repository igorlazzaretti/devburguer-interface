import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: 430px;
  max-width: 780px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Image = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 10px;
`
export const ProductName = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  font-weight: normal;
`
export const ProductPrice = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  margin-top: 50px;
`
