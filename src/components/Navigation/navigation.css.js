import styled from 'styled-components';

export const Wrapper = styled.div`

    display: flex;
    flex-direction:column;
    padding-top:5px;
    ul{
        margin-left:-20px;
    }
    .link{
        padding:3px;
        list-style:square;
        position: relative;
        font-size: 1em;
        color: ${props => props.theme.color.main.light};
    }
    .title{
        margin-left:-20px;
        padding:5px;
        background: ${props => props.theme.color.main.light};
        color:white;
    }

`

