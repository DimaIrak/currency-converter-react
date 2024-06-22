import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: right;
    font-family: monospace;
    color: ${({ theme }) => theme.colors.blueRbbon};
    background-color: ${({ theme }) => theme.colors.veryLightGray};
    padding-top: 15px;
    padding-right: 15px;
`;