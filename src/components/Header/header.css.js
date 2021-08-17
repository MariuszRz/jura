import styled from 'styled-components';

export const Wrapper = styled.header`
    display: flex;
    padding: 20px;
    box-shadow: 3px 3px 3px ${props => props.theme.color.shadow};

    h2{
        font-weight: 200;
        font-size:2rem;
        color:${props => props.theme.color.main.normal};
        margin:auto 10px;
        padding:0;
    }
    img{
        height: 50px;
    }
    ;

`
