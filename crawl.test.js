const { normaliseURL } = require('./crawl.js');
const { test, expect } = require('@jest/globals')

test("Testing protal strip", () => {
    const input ="http://wagslane.dev/path";
    const output = normaliseURL(input);
    const expected ="wagslane.dev/path";
    expect(output).toEqual(expected);
})

test("Testing slash removal", () => {
    const input ="http://wagslane.dev/path/";
    const output = normaliseURL(input);
    const expected ="wagslane.dev/path";
    expect(output).toEqual(expected);
})