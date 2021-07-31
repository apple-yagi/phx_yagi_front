import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 14px;

  ${up("md")} {
    padding: 0 25px;
  }

  ${up("lg")} {
    padding: 0 15px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${up("sm")} {
    grid-template-columns: 50% 50%;
  }

  ${up("lg")} {
    grid-template-columns: 33% 33% 33%;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 15px;

  ${up("md")} {
    font-size: 36px;
  }
`;
