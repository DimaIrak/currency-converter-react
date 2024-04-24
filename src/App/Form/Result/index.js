import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {!!result && (
            <>
                {result.enteredAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                <strong>
                    {result.calculatedAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);