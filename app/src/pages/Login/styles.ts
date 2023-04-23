import styled from 'styled-components';

export const Container = styled.div`
    background-color: #eaeaea;
    flex-direction: column;
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.div`
    background-color: #fff;
    width: 80%;
    display: flex;
    padding: 30px 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    min-height: 350px;
    border-radius: 20px;
    #label-select {
        margin: 20px 0;
        font-size: 12px;
        color: #9b9b9b;
    }

    span {
        color: #666;
        margin: 10px 0;
    }
`;

export const InputsContainer = styled.div`
    margin-bottom: 26px;
`;


