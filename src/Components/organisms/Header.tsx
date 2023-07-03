import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { LikeButton } from "../atoms/buttons/LikeButton";

const HeaderEl = styled.header`
  width: 100%;
  background: rgba(30, 30, 30, 0.48);
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 80px;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 229px;
  height: 42px;
  filter: invert(1);
  image &:hover {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
`;

const NavLinkA = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  &.active {
    border-bottom: 1px solid #fff;
  }
`;


const A = styled.a`
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const SignInButton = styled.button`
  width: 163px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  background: #d3eaff;
  border: transparent;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-family: Syne;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
`;

export const Header = () => {
  return (
    <HeaderEl>
      <Wrapper>
        <Link to={"/"}>
          <Logo src="640px-SpaceX_Logo_Black.png" alt="Logo" />
        </Link>
        <Nav>
          <NavLinkA to={"/"}>Home</NavLinkA>
          <A>Tours</A>
          <A>About</A>
          <A>Help</A>
        </Nav>
        <ButtonWrapper>
          <NavLink to={"/favorites"}>
            <LikeButton/>
          </NavLink>
          <SignInButton>Sign In</SignInButton>
        </ButtonWrapper>
      </Wrapper>
    </HeaderEl>
  );
};
