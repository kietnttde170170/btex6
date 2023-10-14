import React, { useState } from 'react';

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('+');
    const calculate = () => {
        switch (operator) {
            case '+':
                setResult(num1 + num2);
                break;
            case '-':
                setResult(num1 - num2);
                break;
            case '*':
                setResult(num1 * num2);
                break;
            case '/':
                setResult(num1 / num2);
                break;
            default:
                setResult('Invalid operator');
        }
    };

    return (
        <div>
            <h1>Calculator</h1>

            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(parseFloat(e.target.value))}
            />
            <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(parseFloat(e.target.value))}
            />
            <button onClick={calculate}>=</button>
            <p>Result: {result}</p>
        </div>
    );
}

export default Calculator;