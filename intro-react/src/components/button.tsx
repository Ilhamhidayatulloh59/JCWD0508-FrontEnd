import styled from "styled-components"

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`

function Button () {
    return (
        <StyledButton>Login</StyledButton>
    )
}

export default Button