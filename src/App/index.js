import { Form } from "./Form";
import "./app.css";
import { Clock } from "./Clock";

function App() {
    return (
        <div className="app, container">
            <Clock />
            <Form />
        </div>
    );
}

export default App;