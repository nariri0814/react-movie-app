import React from 'react';
import styled from 'styled-components';

const StyledSectionContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

const SectionContainer = ({children}) => {
  return (
    <StyledSectionContainer>
      {children}
    </StyledSectionContainer>
  )
}

export default SectionContainer;
