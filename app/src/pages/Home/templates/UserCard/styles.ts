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

    button {
        margin: 30px 0;
    }
`;
export const Name = styled.div`
    font-size: 18px;
    color: #272727;
`;