const { normaliseURL, getURLsFromHTML } = require('./crawl.js');
const { test, expect } = require('@jest/globals')

test("Testing protal strip", () => {
    const input = "http://wagslane.dev/path";
    const output = normaliseURL(input);
    const expected = "wagslane.dev/path";
    expect(output).toEqual(expected);
})

test("Testing slash removal", () => {
    const input = "http://wagslane.dev/path/";
    const output = normaliseURL(input);
    const expected = "wagslane.dev/path";
    expect(output).toEqual(expected);
})

test("Testing html url extraction", () => {
    const input = `<html>< body ><a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a></ ></html >`;
    const baseURL = `https://blog.boot.dev`;
    const output = getURLsFromHTML(input, baseURL);
    const expected = "https://blog.boot.dev/";
    expect(output).toEqual(expected);
})

test("Testing html url extraction from relative paths", () => {
    const input = `<html>< body ><a href="/path/"><span>Go to Boot.dev</span></a></ ></html >`;
    const baseURL = `https://blog.boot.dev`;
    const output = getURLsFromHTML(input, baseURL);
    const expected = "https://blog.boot.dev/path/";
    expect(output).toEqual(expected);
})
