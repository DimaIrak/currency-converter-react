import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
        {!!result && (
            <>
                Wezmę&nbsp;:
                {" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;
                    {" "}{result.currency}
                </strong>
            </>
        )}
    </Wrapper>
);