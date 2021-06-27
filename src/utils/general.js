export const ccType = {
    visa: 'Visa',
    amex: 'American Express',
    invalid: 'invalid'
  };

  export const detectCardType = (value) => {
    if (value) {
      if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(value)) 
        return ccType.visa; 
      if (/^3[47][0-9]{13}$/.test(value))
        return ccType.amex;  
    }

    return ccType.invalid;
  };

  export const validateCVV = (value, cardType) => {
    if (cardType === ccType.visa) {
      return value.length === 3;
    } else if  (cardType === ccType.amex) {
      return value.length === 4;
    }

    return false;
  };

  /**
 * Convert camelcase to multi words with capitalized first char
 * @param {*} propertyName
 * @returns
 */
export const getDisplayPropName = (propertyName) => {
  let propName = propertyName.replace(/([A-Z])/g, " $1").toLowerCase();
  return propName[0].toUpperCase() + propName.substring(1);
};