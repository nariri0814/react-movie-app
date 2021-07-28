import React from 'react';
import styled from 'styled-components';

import SectionContainer from './SectionContainer';
import Logo from '../components/header/Logo';
import Gnb from '../components/header/Gnb';
import './Header.css';

const StyledHeaderTop = styled.div`
  width: 100%;
  height: 34px;
  border-bottom: 1px solid #2f2f2f;
  color: #a5a5a5;
`;
const StyledTopNav = styled.div`
  line-height: 34px;
  float: right;
`;

function Header(){
  return (
    <>
      <StyledHeaderTop>
        <SectionContainer>
          <StyledTopNav>
            <ul className="header_top_ul">
              <li className="header_top_li"><a>로그인</a></li>
              <li className="header_top_li">|</li>
              <li className="header_top_li"><a>이용권</a></li>
              <li className="header_top_li">|</li>
              <li className="header_top_li"><a>이벤트</a></li>
            </ul>
          </StyledTopNav>
        </SectionContainer>
      </StyledHeaderTop>
      
      <SectionContainer>
        <Logo/>
        <Gnb/>
      </SectionContainer>
      
    </>
  )
}

export default Header;
