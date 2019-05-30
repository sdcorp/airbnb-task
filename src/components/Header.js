import React from 'react';
import styled from 'styled-components';
import Container from './styles/Container';
import { ReactComponent as AirBnbLogo } from '../assets/airbnb-logo.svg';
import searchIcon from '../assets/search-icon.svg';

const Header = () => {
  return (
    <StickyHeader>
      <Container>
        <HeaderContainer>
          <Logo href="#">
            <LogoSvg />
          </Logo>
          <SearchBox>
            <SearchInput type="search" name="Search" />
            <img src={searchIcon} alt="Search" />
          </SearchBox>
          <Navigation>
            <NavLink href="#">Become a host</NavLink>
            <NavLink href="#">Help</NavLink>
            <NavLink href="#">Sign up</NavLink>
            <NavLink href="#">Log in</NavLink>
          </Navigation>
        </HeaderContainer>
      </Container>
    </StickyHeader>
  );
};

const StickyHeader = styled.div`
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 0 #ebebeb;
`;

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 14px 0;
`;

const Logo = styled.a`
  display: block;
  margin-right: 24px;
`;

const LogoSvg = styled(AirBnbLogo)`
  width: 34px;
  height: 34px;
`;

const SearchBox = styled.div`
  position: relative;
  width: calc(0% + 35%);
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  font-size: 18px;
  font-weight: bold;
  padding: 1rem 0.5rem 1rem 2.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 200ms ease-in;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Navigation = styled.nav`
  margin-left: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #484848;
  text-decoration: none;
  padding: 2rem 1.5rem;
  &:hover {
    border-bottom: 2px solid #484848;
  }
`;

export default Header;
