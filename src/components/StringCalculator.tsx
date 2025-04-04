import React, { useState } from "react";
import { add } from "../utility/add";
import "../styles/style.css"
const StringCalculator: React.FC = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<number | string>("");
    const [error,setError] = useState<null|string>(null)
    const handleCalculate = () => {
        try {
            setResult(add(input)); 
            setError(null)
        } catch (error) {
            const err = error as Error;
            //check if function throw an error , show it to ui
            setError(err?.message ?? "Something went Wrong");
        }
    };

    return (
        <div className="container">
            <h2>String Calculator</h2>
            <label>Enter numbers
                <p>(Format:<span title="E.g //;\n12;4 OR //;;\n5;;9">//[delimter]\n[numbers]</span>)</p>
            </label>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="E.g //;\n1;2;3 or 1,2,3"
            />
            <button className="calculate_btn" onClick={handleCalculate}>Calculate</button>
            <p>Result:<b> {result}</b></p>

            {error && <div style={{color:"red"}}>{error}</div>}
        </div>
    );
};

export default StringCalculator;