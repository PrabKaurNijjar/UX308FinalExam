function color_mix(rgb_color1, rgb_color2){
    const mixRules = {
        'red+blue': 'fuchsia',
        'red+green': 'yellow',
        'green+blue': 'aqua',
        'red+red': 'red',
        'blue+blue': 'blue',
        'green+green': 'green'
    };

    const colors = [rgb_color1, rgb_color2].sort();
    const colorKey = colors.join('+');

    return mixRules[colorKey] || 'Error';
}

function largest_product(val1, val2, val3){
    const values = [val1, val2, val3];
    values.sort((a, b) => b - a); 
    return values[0] * values[1];
}

function day_of_the_week(day_num){
    const days = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    };
    return days[day_num] || "Error";
}

function pay_raise(status, years, salary){
    let raisePercentage;

    if (status === 'F') {
        if (years >= 10) {
            raisePercentage = 0.05; 
        } else if (years < 4) {
            raisePercentage = 0.015; 
        } else {
            raisePercentage = 0.02; 
        }
    } else if (status === 'P') {
        if (years >= 10) {
            raisePercentage = 0.03; 
        } else if (years < 4) {
            raisePercentage = 0.01; 
        } else {
            raisePercentage = 0.02; 
        }
    } else {
        return "Error"; 
    }

    return salary + (salary * raisePercentage);
}


function is_leap(year){
    const result = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    return result;
}


export {color_mix, largest_product, day_of_the_week, pay_raise, is_leap}; 
