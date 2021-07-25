import tw, { styled } from "twin.macro";
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
  ${tw`space-x-3`}
`;

const NavItem = styled.li`
  font-weight: bold;
  font-size: 18px;
  ${tw`text-gray-400`}
  transition: 0.3s color;

  :hover {
    ${tw`text-gray-700`}
  }
`;

export const Navigation = (): JSX.Element => {
  return (
    <Root>
      <NavContainer>
        <NavList>
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
