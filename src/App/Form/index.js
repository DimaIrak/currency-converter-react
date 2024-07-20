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
    ExchangeDate,
    Link,
    Info,
} from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
    const ratesDate = useRatesData();
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(0);

    const calculateResult = (currency, amount) => {
        const rate = ratesDate.rates[currency].value;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setAmount("");
        setCurrency("EUR");
        setResult(0);
        focusInput();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (amount === "") {
            return;
        } else {
            calculateResult(currency, amount);
        }
    };

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const getExchangeDate = (ratesData) => {
        return new Date(ratesData.date).toLocaleDateString(undefined);
    };

    const handleAmountChange = (value) => {
        setAmount(value.slice(0, 8));
    };

    return (
        <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
            <Fildset>
                <Legend>Kantor złotóweczka</Legend>
                {ratesDate.status === "loading"
                    ? (
                        <Loading>
                            Sekundka... <br />Ładuje kursy walut
                        </Loading>
                    )
                    : (
                        ratesDate.status === "error" ? (
                            <Failure>
                                Coś poszło nie tak
                            </Failure>
                        ) : (<>
                            <p>
                                <label>
                                    <LabelText>Tyle mam PLN<Info>*</Info>:</LabelText>
                                    <Field ref={inputRef} value={amount} onChange={({ target }) => handleAmountChange(target.value)} type="number" step="1" min="1" placeholder="wpisz kwotę" name="enteredAmount" />
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
                                <CleanButton type="reset">Wyczyść za mnie</CleanButton>
                            </p>
                            <ExchangeDate>
                                Kursy walut pobierane są z <i><Link href="https://currencyapi.com/">currencyapi.com</Link></i>
                                <br />
                                <strong>Aktualne na dzień: {getExchangeDate(ratesDate)}</strong>
                            </ExchangeDate>
                            <Footer>
                                <Info>*</Info>Pole obowiązkowe do wypełnienia
                            </Footer>
                        </>))}
            </Fildset>
        </StyledForm >
    );
};