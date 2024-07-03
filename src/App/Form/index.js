import { useState } from "react";
import { currencies } from "../currencies";
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
} from "./styled"

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(0);

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            enteredAmount: +amount,
            calculatedAmount: amount / rate,
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

    return (
        <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
            <Fildset>
                <Legend>Kantor złotóweczka</Legend>
                <p>
                    <label>
                        <LabelText>Tyle mam PLN*:</LabelText>
                        <Field value={amount} onChange={({ target }) => setAmount(target.value)} type="number" step="1" min="1" placeholder="wpisz kwotę" name="enteredAmount" />
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>
                            Wybierz waluta:
                        </LabelText>
                        <Field as="select" value={currency} onChange={({ target }) => setCurrency(target.value)} required name="selectedCurrency">
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </Field>
                    </label>
                </p>

                <Result result={result} />

                <p>
                    <CountButton>Przelicz dla mnie</CountButton>
                    <CleanButton onClick={onFormReset} type="reset">Wyczyść za mnie</CleanButton>
                </p>
                <Footer>
                    *Pole obowiązkowe do wypełnienia
                </Footer>
            </Fildset>
        </StyledForm>
    );
};