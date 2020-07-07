exports.sum = (a, b) => {
    if(!a || !b) {
        throw new Error('Provide 2 numbers plss')
    }

    return a + b
}