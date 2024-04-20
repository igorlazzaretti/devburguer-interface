import styled from 'styled-components'


export const Container = styled.div`
    background-color: #ffde59;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px 0;

    .rec.rec-arrow {
        background-color: #7843E6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover {
        border: 2px solid #7843E6;
        background-color: #efefef;
        color: #7843E6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const CategoryIMG = styled.img`
    width: 400px;
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    p{
    color: #424242;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 120%; 
    margin-bottom: 5px
    }
`

export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 15px;
    
`

export const Button = styled.button`
    margin-top: 16px;
    width: 250px;
    height: 50px;
    background: #7843E6;
    border-radius: 8px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
    cursor: pointer;


    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content:center;
    
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`