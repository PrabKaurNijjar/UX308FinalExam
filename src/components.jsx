import React, { useState } from 'react';
import {color_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js'; 

//Part 1 Color Mix

function colorMix() {
    const [color1, setColor1] = useState('');
    const [color2, setColor2] = useState('');
    const [result, setResult] = useState('');

    const handleMix = () => {
        setResult(color_mix(color1, color2));
    };

    return (
        <div>
            <h1>color Mixer</h1>
            <input
                type="text"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
                placeholder="First color"
            />
            <input
                type="text"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                placeholder="Second color"
            />
            <button onClick={handleMix}>Mix</button>
            <p>Result: {result}</p>
        </div>
    );
}

//Part 2 Largest Product

function LargestProduct() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        setResult(largest_product(parseFloat(value1), parseFloat(value2), parseFloat(value3)));
    };

    return (
        <div>
            <h1>Largest Product Calculator</h1>
            <input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="First Value"
            />
            <input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Second Value"
            />
            <input
                type="number"
                value={value3}
                onChange={(e) => setValue3(e.target.value)}
                placeholder="Third Value"
            />
            <button onClick={handleCalculate}>Calculate</button>
            <p>Result: {result}</p>
        </div>
    );
}

//Part 3 Day of the week

function DayOfTheWeek() {
    const [dayNum, setDayNum] = useState('');
    const [dayName, setDayName] = useState('');

    const findDay = () => {
        const num = parseInt(dayNum, 10);
        if (!isNaN(num) && num >= 1 && num <= 7) {
            setDayName(day_of_the_week(num));
        } else {
            setDayName("Error");
        }
    };

    return (
        <div>
            <h1>Day of the Week Finder</h1>
            <input
                type="number"
                value={dayNum}
                onChange={(e) => setDayNum(e.target.value)}
                placeholder="Enter a number (1-7)"
                min="1"
                max="7"
            />
            <button onClick={findDay}>Find Day</button>
            <p>Day: {dayName}</p>
        </div>
    );
}

//Part 4 Pay Raise

function PayRaise() {
    const [status, setStatus] = useState('');
    const [years, setYears] = useState('');
    const [salary, setSalary] = useState('');
    const [newSalary, setNewSalary] = useState('');

    const calculateRaise = () => {
        const yrs = parseInt(years, 10);
        const sal = parseFloat(salary);
        if ((status === 'F' || status === 'P') && yrs > 0 && sal > 0) {
            setNewSalary(pay_raise(status, yrs, sal).toFixed(2));
        } else {
            setNewSalary("Error");
        }
    };

    return (
        <div>
            <h1>Pay Raise Calculator</h1>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Employment Type</option>
                <option value="F">Full Time</option>
                <option value="P">Part Time</option>
            </select>
            <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="Years of Service"
            />
            <input
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Current Salary"
            />
            <button onClick={calculateRaise}>Calculate New Salary</button>
            <p>New Salary: {newSalary}</p>
        </div>
    );
}

//Part 5 Leap Year

function IsLeapYear() {
    const [year, setYear] = useState('');
    const [isLeapYear, setIsLeapYear] = useState(null);

    const handleCheckLeapYear = () => {
        const parsedYear = parseInt(year);
        const result = is_leap(parsedYear);
        setIsLeapYear(result);
    };

    return (
        <div>
            <h1>Leap Year Checker</h1>
            <input
                type="number"
                value={year}
                placeholder="Enter a year"
                onChange={(e) => setYear(e.target.value)}
            />
            <button onClick={handleCheckLeapYear}>Check Leap Year</button>
            {isLeapYear !== null && <p>{isLeapYear ? 'True' : 'False'}</p>}
        </div>
    );
}


export {colorMix, LargestProduct, DayOfTheWeek, PayRaise, IsLeapYear} ;