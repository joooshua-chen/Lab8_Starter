// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('bad format number', () => {
    expect(isPhoneNumber(321333343434)).toBe(false);
  });

test('only letters', () => {
    expect(isPhoneNumber(abc)).toBe(false);
  });

test('police', () => {
    expect(isPhoneNumber(911)).toBe(true);
  });

  test('correct format', () => {
    expect(isPhoneNumber(6192235467)).toBe(true);
  });

  test('only @ ', () => {
    expect(isEmail(@@@@@@).toBe(false);
  });

test('only letter', () => {
    expect(isEmail(kioasfoije).toBe(false);
  });

test('hotmail', () => {
    expect(isEmail(ants@hotmail.com).toBe(true);
  });

  test('gmail', () => {
    expect(isEmail(applesauce@gmail.com).toBe(true);
  });
  test('only letter', () => {
    expect(isStrongPassword(qwerty).toBe(false);
  });

test('abc', () => {
    expect(isStrongPassword(abc)).toBe(false);
  });

test('strong pass', () => {
    expect(isStrongPassword(fnjkfd@#@#@#@#2jjfkeFNFNJ)).toBe(true);
  });

  test('strong pass 2', () => {
    expect(isStrongPassword(djwokjfo3DJWKND2132192@@#32)).toBe(true);
  });
  test('repeat', () => {
    expect(isDate(1111/1111/1111)).toBe(false);
  });

test('letters', () => {
    expect(isDate(dkm)).toBe(false);
  });

test('good date, () => {
    expect(isDate(11/11/2011)).toBe(true);
  });

  test('birthday', () => {
    expect(isDate(01/02/2003)).toBe(true);
  });
  test('only number', () => {
    expect(isHexColor(1113321)).toBe(false);
  });

test('special char, () => {
    expect(isHexColor(najf!)).toBe(false);
  });

test('good color', () => {
    expect(isHexColor(FD123)).toBe(true);
  });

  test('good color 1', () => {
    expect(isHexColor(FFFFF)).toBe(true);
  });
