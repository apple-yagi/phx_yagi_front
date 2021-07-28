import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";
import { up } from "styled-breakpoints";
import { Container } from "~/styles/common";
import { css } from "@emotion/react";

const Root = styled.nav`
  width: 100%;
  height: 30px;
  background-color: white;
  ${tw`border-b-2 border-gray-200`}
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
  ${tw`space-x-6`}
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

const linkActive = css`
  ${tw`text-gray-700 border-b-2 border-gray-700`}
`;

export const Navigation = (): JSX.Element => {
  const router = useRouter();
  const isTopPage = router.pathname === "/";
  const isArticlesPage = router.pathname.indexOf("/articles") === 0;

  return (
    <Root>
      <NavContainer>
        <NavList>
          <NavItem css={isTopPage && linkActive}>
            <Link href='/'>
              <a>Top</a>
            </Link>
          </NavItem>
          <NavItem css={isArticlesPage && linkActive}>
            <Link href='/articles'>
              <a>Articles</a>
            </Link>
          </NavItem>
        </NavList>
      </NavContainer>
    </Root>
  );
};
