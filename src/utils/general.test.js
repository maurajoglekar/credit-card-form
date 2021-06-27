import {
    validateName,
    detectCardType,
    ccType,
    validateCVV,
    validateMonth,
    validateYear
} from './general';

const visaNumber = '4242424242424242';
const amexNumber = '371449635398431';

describe('tests to validate name value', () => {

    it('valid name', () => {
        const result = validateName('Maura Joglekar');
        expect(result).toBeTruthy();
    });

    it('test invalid name', () => {
        const result = validateName('Maura?6');
        expect(result).toBeFalsy();
    });
});

describe('tests to detect card type', () => {

    it('detect Visa', () => {
        const result = detectCardType(visaNumber);
        expect(result).toEqual(ccType.visa);
    });

    it('detect Amex', () => {
        const result = detectCardType(amexNumber);
        expect(result).toEqual(ccType.amex);
    });

    it('invalie credit card', () => {
        const result = detectCardType('98');
        expect(result).toEqual(ccType.invalid);
    });
});

describe('tests to detect card type', () => {

    it('detect Visa', () => {
        const result = detectCardType(visaNumber);
        expect(result).toEqual(ccType.visa);
    });

    it('detect Amex', () => {
        const result = detectCardType(amexNumber);
        expect(result).toEqual(ccType.amex);
    });

    it('invalid credit card', () => {
        const result = detectCardType('98');
        expect(result).toEqual(ccType.invalid);
    });
});

describe('tests for CVV', () => {

    it('detect invalid CVV for Visa', () => {
        const cardType = detectCardType(visaNumber);
        const result = validateCVV('12', cardType);
        expect(result).toBeFalsy();
    });

    it('detect valid CVV for Visa', () => {
        const cardType = detectCardType(visaNumber);
        const result = validateCVV('123', cardType);
        expect(result).toBeTruthy();
    });

    it('detect invalid CVV for AMEX', () => {
        const cardType = detectCardType(amexNumber);
        const result = validateCVV('123', cardType);
        expect(result).toBeFalsy();
    });

    it('detect valid CVV for AMEX', () => {
        const cardType = detectCardType(amexNumber);
        const result = validateCVV('1234', cardType);
        expect(result).toBeTruthy();
    });

});

describe('tests for validating month and year', () => {

    it('validate month, no year', () => {
        const result = validateMonth('1', '');
        expect(result).toBeTruthy();
    });

    it('validate month, old year', () => {
        const result = validateMonth('1', '2020');
        expect(result).toBeFalsy();
    });

    it('future month, this year', () => {
        const result = validateMonth('8', '2021');
        expect(result).toBeTruthy();
    });

    it('future month, future year', () => {
        const result = validateMonth('2', '2030');
        expect(result).toBeTruthy();
    });

    it('future year', () => {
        const result = validateYear('2030');
        expect(result).toBeTruthy();
    });

    it('current year', () => {
        const result = validateYear('2021');
        expect(result).toBeTruthy();
    });

    it('past year', () => {
        const result = validateYear('2019');
        expect(result).toBeFalsy();
    });
});