const optellen = (...cijfers) => {
    console.log(cijfers);
    return cijfers.reduce((acc, current) => {
        return  acc + current;
    });
}

console.log(optellen(1, 2, 3, 4, 5, 6));

const telOp = (num1, num2, num3, num4) => {
    return num1 + num2 + num3 + num4;
}

const cijfers = [1, 2, 3, 4];

console.log(telOp(...cijfers));