import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    min-height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Infos = styled.div`
`;

export const Buttons = styled.div`
    * {
        padding: 0 15px;
    }
    margin-right: 20px;
`;

export const Title = styled.h1`
    margin-left: 30px;
    color: #0074CA;
    margin-bottom: 0;
`;

export const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: #666;
    margin-left: 30px;
    margin-top: 0px;
`;