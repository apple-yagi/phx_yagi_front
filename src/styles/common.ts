import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  max-width: 1126px;
  margin: auto;
  padding: 0 15px;

  ${up("sm")} {
    padding: 0 20px;
  }

  ${up("md")} {
    padding: 0 30px;
  }

  ${up("lg")} {
    padding: 0;
  }
`;
