import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

        setResult({
            enteredAmount: +amount,
            calculateAmount: amount / rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={onFormSubmit}>
                <fieldset className="form__fieldset">
                    <legend className="form__legend">Kantor złotóweczka</legend>
                    <p className="form__paragraph">
                        <label className="form__label">
                            <span className="form__labelText">Tyle mam PLN*:</span>
                            <input value={amount} onChange={({ target }) => setAmount(target.value)} type="number" required step="1" className="form__field" placeholder="wpisz kwotę" name="enteredAmount"
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <span className="form__labelText">
                                Wybierz waluta:
                            </span>
                            <select value={currency} onChange={({ target }) => setCurrency(target.value)} className="form__field" required name="selectedCurrency">
                                {currencies.map((currency => (
                                    <option
                                        key={currency.short}
                                        value={currency.short}
                                    >
                                        {currency.name}
                                    </option>
                                )))}
                            </select>
                        </label>
                    </p>

                    <Result result={result} />

                    <p>
                        <button className="form__button">Przelicz dla mnie</button>
                        <button type="reset" className="form__button--special">wyczyść kwotę</button>
                    </p>
                    <p className="form__footer">
                        *Pole obowiązkowe do wypełnienia
                    </p>
                </fieldset>
            </form>
        </div>
    );
};