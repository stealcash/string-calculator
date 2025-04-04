import React, { useState } from "react";
import { add } from "../utility/add";
import "../styles/style.css"
const StringCalculator: React.FC = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<number | string>("");

    const handleCalculate = () => {
        try {
            setResult(add(input)); // Call the add function
        } catch (error: any) {
            setResult(error?.message); // Handle errors
        }
    };

    return (
        <div className="container">
            <h2>String Calculator</h2>
            <label>Enter numbers
                <p>(Format:<span>//[delimter]\n[numbers]</span>)</p>
            </label>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="E.g //;\n1;2;3 or 1,2,3"
            />
            <button className="calculate_btn" onClick={handleCalculate}>Calculate</button>
            <p>Result:<b> {result}</b></p>
        </div>
    );
};

export default StringCalculator;