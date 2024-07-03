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
    margin: 0;
`;

export const Fildset = styled.fieldset`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-color: ${({ theme }) => theme.colors.blueViolet};
    padding: 40px 20px;
`;

export const Legend = styled.legend`
    border: 2px dotted ${({ theme }) => theme.colors.crimson};
    padding: 10px;
    border-radius: 15px;
    font-weight: 900;
    background-color: ${({ theme }) => theme.colors.desertStorm};
`;

export const LabelText = styled.span`
    display: inline-block;
    width: 150px;
    margin-right: 5px;
    padding: 5px;
    color: ${({ theme }) => theme.colors.fadedJade};
    font-size: 19px;
`;

export const Footer = styled.p`
    font-style: italic;
    font-weight: 100;
    font-size: small;
    padding-top: 30px;
    padding-bottom: 0px;
`;

export const CountButton = styled.button`
    margin-left: 11px;
    width: 60%;
    max-width: 250px;
    padding: 5px;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.gothic};

    &:hover{
        filter: brightness(115%)
    }
`;

export const CleanButton = styled.button`
    margin-left: 11px;
    margin-top: 7px;
    padding: 5px;
    padding-left: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.mauve};

    &:hover{
        background-color: hsl(271, 76%, 65%);
    }
`;