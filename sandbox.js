printFarmInventory3(7, 11, 3);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

function printFarmInventory1(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ?? 
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function multiplier(factor) {
    return number => number * factor;
}

function wrapValue(n) {
    let local = n;
    return () => local;
}

function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < (step / 2) ? 0 : step);
}

function minus(a, b) {
    if (b === undefined) {
        return -a;
    }
    return a - b;
}

function square(x) {
    return x * x;
}

