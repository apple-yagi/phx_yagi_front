import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { up } from "styled-breakpoints";
import { Container } from "~/styles/common";
import { lg } from "~/styles/vars";

const Root = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  height: 100%;
  margin: 0 auto;

  ${up("lg")} {
    max-width: 1126px;
  }
`;

const HeaderTitle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

const textSmNone = css`
  display: none;

  @media (min-width: ${lg}) {
    display: block;
  }
`;

export const Header = (): JSX.Element => {
  return (
    <Root>
      <HeaderContainer>
        <Link href='/'>
          <HeaderTitle>
            <Image
              src='https://cdn.svgporn.com/logos/phoenix.svg'
              alt='phoenix'
              width={35}
              height={35}
            />
            <span className='ml-2' css={textSmNone}>
              Phoenix
            </span>
            <div className='mx-1'>✖️</div>
            <Image
              src='https://cdn.svgporn.com/logos/nextjs-icon.svg'
              alt='next'
              width={35}
              height={35}
            />
            <span className='ml-2' css={textSmNone}>
              Next.js
            </span>
          </HeaderTitle>
        </Link>
      </HeaderContainer>
    </Root>
  );
};
