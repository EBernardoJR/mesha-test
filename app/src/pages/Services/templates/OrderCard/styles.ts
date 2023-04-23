import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    max-width: 800px;
    min-height: 160px;
    background-color: #fff;
    margin: 30px auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        width: 100px;
        margin-top: 30px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    button {
        margin: 20px 10px;
    }
`;

export const Name = styled.p`
    font-size: 18px;
    color: #272727;
`;

export const Description = styled.p`
    font-size: 18px;
    color: #666666;
    width: 60%;
    margin: 0;
`;
export const Price = styled.p`
    font-size: 16px;
    color: #666666;
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
        font-size: 20px;
    }
`;