import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;

  ${up("md")} {
    padding: 0 25px;
  }

  ${up("lg")} {
    padding: 0 15px;
  }
`;
