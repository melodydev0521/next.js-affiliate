import styled from 'styled-components'

export const StyledList = styled.div`
    border: 1px solid #3c3c3c;
    border-radius: 3px;
    background-color: transparent;
    width: 100%;
    transition: 500ms;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const StyledListItem = styled.div`
    border: none;
    border-bottom: 1px solid #525252;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    transition: 500ms;
    cursor: pointer;
    &:hover {
        background-color: #525250;
    }
    & > div {
        display: flex;
        flex-direction: row;
    }
    & p {
        margin: 3px 0;
    }
`
