import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.colors.veryLightGray};
    padding: 10px 20px 20px 20px;
`;

export const Field = styled.input`
    padding: 13px;
    border: 3px solid;
    color: ${({ theme }) => theme.colors.darkCyan};
    border-radius: 50px;
    width: 200px;
    margin: 20px 0;
`;