import styled from 'styled-components'

export const Container = styled.div``

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
    color: ${props => props.isActiveCategory ? '#7843e5' : '#999999'};
    border-bottom: ${props => props.isActiveCategory && '2px solid #7843e5' };
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;

`