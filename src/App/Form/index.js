import { useState, useRef } from "react";
import { Result } from "./Result";
import {
    StyledForm,
    Field,
    Fildset,
    Legend,
    LabelText,
    Footer,
    CountButton,
    CleanButton,
    Loading,
    Failure,
} from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
    const ratesDate = useRatesData();
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(0);

    const calculateResult = (currency, amount) => {
        const rate = ratesDate.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setAmount("");
        setCurrency("USD");
        setResult(0);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
            <Fildset>
                <Legend>Kantor złotóweczka</Legend>
                {ratesDate.state === "loading"
                    ? (
                        <Loading>
                            Sekundka... <br />Ładuje kursy walut
                        </Loading>
                    )
                    : (
                        ratesDate.state === "error" ? (
                            <Failure>
                                Coś poszło nie tak
                            </Failure>
                        ) : (<>
                            < p >
                                <label>
                                    <LabelText>Tyle mam PLN*:</LabelText>
                                    <Field ref={inputRef} value={amount} onChange={({ target }) => setAmount(target.value)} type="number" step="1" min="1" placeholder="wpisz kwotę" name="enteredAmount" />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <LabelText>
                                        Wybierz waluta:
                                    </LabelText>
                                    <Field as="select" value={currency} onChange={({ target }) => setCurrency(target.value)} required name="selectedCurrency">
                                        {Object.keys(ratesDate.rates).map((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        ))}
                                    </Field>
                                </label>
                            </p>
                            <Result result={result} />
                            <p>
                                <CountButton onClick={focusInput}>Przelicz dla mnie</CountButton>
                                <CleanButton onClick={onFormReset} type="reset">Wyczyść za mnie</CleanButton>
                            </p>
                            <Footer>
                                *Pole obowiązkowe do wypełnienia
                            </Footer>
                        </>))}
            </Fildset>
        </StyledForm >
    );
};