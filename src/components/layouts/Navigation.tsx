import styled from "@emotion/styled";
import Link from "next/link";
import { up } from "styled-breakpoints";
import { Container } from "~/styles/common";

const Root = styled.nav`
  width: 100%;
  height: 30px;
  background-color: white;
`;

const NavContainer = styled(Container)`
  height: 100%;
  margin: 0 auto;
  ${up("lg")} {
    max-width: 1126px;
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  font-weight: bold;
  color: #93a5b1;
  transition: 0.3s color;
  font-size: 18px;

  :hover {
    color: black;
  }
`;

export const Navigation = (): JSX.Element => {
  return (
    <Root>
      <NavContainer>
        <NavList className='space-x-3'>
          <NavItem>
            <Link href='/'>
              <a>Trending</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/articles'>
              <a>Articles</a>
            </Link>
          </NavItem>
        </NavList>
      </NavContainer>
    </Root>
  );
};
