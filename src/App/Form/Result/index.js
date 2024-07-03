import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
        {!!result && (
            <>
                Wezmę&nbsp;:
                {" "}
                <strong>
                    {result.calculatedAmount.toFixed(2)}&nbsp;
                    {" "}{result.currency}
                </strong>
            </>
        )}
    </Wrapper>
);