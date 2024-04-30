import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {!!result && (
            <>
                Wezmę&nbsp;:
                {" "}
                <strong>
                    {result.calculatedAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);