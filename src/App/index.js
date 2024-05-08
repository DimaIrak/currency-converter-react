import { Form } from "./Form";
import "./app.css";
import { hello } from "./Utils/hello";

hello();

function App() {
    return (
        <div className="app">
            <Form />
        </div>
    );
}

export default App;