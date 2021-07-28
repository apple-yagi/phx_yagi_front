import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 30px;
  padding-right: 30px;

  ${up("md")} {
    padding-left: 25px;
    padding-right: 25px;
  }

  ${up("lg")} {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
