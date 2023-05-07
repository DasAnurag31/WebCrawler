const { sortPages } = require('./report')
const { test, expect } = require('@jest/globals')

test("Testing report", () => {
    const input = {
        'wagslane.dev/tags/business': 1,
        'wagslane.dev/tags': 62,
    };
    const output = sortPages(input);
    const expected = [['wagslane.dev/tags', 62], ['wagslane.dev/tags/business', 1]]
    expect(output).toEqual(expected);
})