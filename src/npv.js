// Copyright 2015 JC Fisher

export default function npv(rate, ...values) {
    rate = rate * 1;
    var factor = 1,
        sum = 0;

    for(var i = 0; i < values.length; i++) {
        var factor = factor * (1 + rate);
        sum += values[i] / factor;
    }

    return sum;
}
