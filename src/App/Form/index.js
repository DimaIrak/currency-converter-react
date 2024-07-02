import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";
import {
    StyledForm,
    Field,
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
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <StyledForm onSubmit={onFormSubmit} onReset={onFormReset}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kantor złotóweczka</legend>
                <p className="form__paragraph">
                    <label>
                        <span className="form__labelText">Tyle mam PLN*:</span>
                        <Field value={amount} onChange={({ target }) => setAmount(target.value)} type="number" step="1" min="1" placeholder="wpisz kwotę" name="enteredAmount" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">
                            Wybierz waluta:
                        </span>
                        <Field value={currency} onChange={({ target }) => setCurrency(target.value)} required name="selectedCurrency">
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
                    <button className="form__button">Przelicz dla mnie</button>
                    <button type="reset" className="form__button--special">Wyczyść kwotę</button>
                </p>
                <p className="form__footer">
                    *Pole obowiązkowe do wypełnienia
                </p>
            </fieldset>
        </StyledForm>
    );
};