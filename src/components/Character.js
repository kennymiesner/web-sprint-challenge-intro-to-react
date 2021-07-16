import React from 'react'
import styled from 'styled-components' // Import Styled Components

const StyledCharacter = styled.div`
  max-width: 75%;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin: 0 auto 30px auto;
  text-align: left;

  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};

  @media ${props => props.theme.breakpointMobile} {
    max-width: 100%;
    margin: 0 30px 30px 30px;
  }

  // Extending Selector: & = current selector we're on
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${props => props.theme.secondaryColor};
  }
`

export default function Character({ info }) {
    return (
        <StyledCharacter>
            {info.name}
        </StyledCharacter>
    )
}