function getRandomIntegerFromTo(from, to) {
    from = Math.ceil(from);
    to = Math.floor(to);

    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function formatNumberWithThousandSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}