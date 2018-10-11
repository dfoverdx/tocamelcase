import '../index';

test('Basic strings', () => {
    expect('A B C'.toCamelCase()).toBe('aBC');
    expect('aB c'.toCamelCase()).toBe('aBC');
    expect('abc      def'.toCamelCase()).toBe('abcDef');
    expect('abc__ _ _def'.toCamelCase()).toBe('abcDef');
    expect('abc__ _ d_ e _ _fg'.toCamelCase()).toBe('abcDEFg');
});

test('Basic Pascal strings', () => {
    expect('A B C'.toCamelCase(true)).toBe('ABC');
    expect('aB c'.toCamelCase(true)).toBe('ABC');
    expect('abc      def'.toCamelCase(true)).toBe('AbcDef');
    expect('abc__ _ _def'.toCamelCase(true)).toBe('AbcDef');
    expect('abc__ _ d_ e _ _fg'.toCamelCase(true)).toBe('AbcDEFg');
});

test('Basic strings with punctuation', () => {
    expect(`a'b--d -- f.h`.toCamelCase()).toBe('aBDFH');
    expect(`...a...def`.toCamelCase()).toBe('aDef');
});

test('Basic Pascal strings with punctuation', () => {
    expect(`a'b--d -- f.h`.toCamelCase(true)).toBe('ABDFH');
    expect(`...a...def`.toCamelCase(true)).toBe('ADef');
});

test('Strings with numbers', () => {
    expect('12 3 4 5'.toCamelCase()).toBe('12_3_4_5');
    expect('12 3 abc'.toCamelCase()).toBe('12_3Abc');
    expect('ab2c'.toCamelCase()).toBe('ab2c');
    expect('1abc'.toCamelCase()).toBe('1abc');
    expect('1Abc'.toCamelCase()).toBe('1Abc');
    expect('abc 2def'.toCamelCase()).toBe('abc2def');
    expect('abc-2def'.toCamelCase()).toBe('abc2def');
    expect('abc_2def'.toCamelCase()).toBe('abc2def');
    expect('abc1_2def'.toCamelCase()).toBe('abc1_2def');
    expect('abc1 2def'.toCamelCase()).toBe('abc1_2def');
    expect('abc1 2   3def'.toCamelCase()).toBe('abc1_2_3def');
});

test('Pascal strings with numbers', () => {
    expect('12 3 4 5'.toCamelCase(true)).toBe('12_3_4_5');
    expect('12 3 abc'.toCamelCase(true)).toBe('12_3Abc');
    expect('ab2c'.toCamelCase(true)).toBe('Ab2c');
    expect('1abC'.toCamelCase(true)).toBe('1abC');
    expect('1Abc'.toCamelCase(true)).toBe('1Abc');
    expect('abc 2def'.toCamelCase(true)).toBe('Abc2def');
    expect('abc-2def'.toCamelCase(true)).toBe('Abc2def');
    expect('abc_2def'.toCamelCase(true)).toBe('Abc2def');
    expect('abc1_2def'.toCamelCase(true)).toBe('Abc1_2def');
    expect('abc1 2def'.toCamelCase(true)).toBe('Abc1_2def');
    expect('abc1 2   3def'.toCamelCase(true)).toBe('Abc1_2_3def');
});

test('Oddball cases', () => {
    expect(''.toCamelCase()).toBe('');
    expect('\t \n \r'.toCamelCase()).toBe('');
    expect('_'.toCamelCase()).toBe('_');
    expect('__'.toCamelCase()).toBe('_');
    expect('_ _'.toCamelCase()).toBe('_');
    expect('\t_ _\n'.toCamelCase()).toBe('_');
    expect('_a_'.toCamelCase()).toBe('a');
    expect('\''.toCamelCase()).toBe('');
    expect(`\tab\tcd`.toCamelCase()).toBe('abCd');
    expect(`
ab\tcd\r

-_

|'ef`.toCamelCase()).toBe(`abCdEf`);
});

test('Pascal oddball cases', () => {
    expect(''.toCamelCase(true)).toBe('');
    expect('\t \n \r'.toCamelCase(true)).toBe('');
    expect('_'.toCamelCase(true)).toBe('_');
    expect('__'.toCamelCase(true)).toBe('_');
    expect('_ _'.toCamelCase(true)).toBe('_');
    expect('\t_ _\n'.toCamelCase(true)).toBe('_');
    expect('_a_'.toCamelCase(true)).toBe('A');
    expect('\''.toCamelCase(true)).toBe('');
    expect(`\tab\tcd`.toCamelCase(true)).toBe('AbCd');
    expect(`
ab\tcd\r

-_

|'ef`.toCamelCase(true)).toBe(`AbCdEf`);
});