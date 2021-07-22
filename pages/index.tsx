import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledH1 = styled.h1`
  color: red;
  font-size: 2.5rem;
  font-weight: bold;
`;

export default function Home() {
  return (
    <div className='text-center'>
      <StyledH1
        css={css`
          cursor: pointer;
        `}>
        Hello Next App
      </StyledH1>
    </div>
  );
}
