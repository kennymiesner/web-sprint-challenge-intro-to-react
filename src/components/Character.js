import React from 'react'
import styled from 'styled-components' // Import Styled Components

const StyledCharacter = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;

  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};

  @media ${props => props.theme.breakpointMobile} {
    width: initial;
  }

  transition: all 0.3s ease-in-out;

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