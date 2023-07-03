import { styled } from "styled-components";

export const BuyButton = styled.button`
  background: #d3eaff;
  border: none;
  color: #000;
  text-align: center;
  font-size: 24px;
  font-family: Syne;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  flex: 1 0 0;  
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
`;
