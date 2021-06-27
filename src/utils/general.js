export const ccType = {
    visa: 'Visa',
    amex: 'American Express',
    mastercard: 'Mastercard',
    discover: 'Discover',
    invalid: 'invalid'
  };

  export const cclogoUrl = 'https://apisandboxstatic.zuora.com/Resources/5222233/Images/card-logos-3.png';

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

  export const validateMonth = (value, year) => {
    const now = new Date();
    if (!year || (year && year > now.getFullYear())) {
      // if no year entered or future year, allow all 12 months
      return value.match(/^(0?[1-9]|1[012])$/i);
    } else if (year && year === now.getFullYear()) {
      // current year, so allow only current month or later
      return value.match(/^(0?[1-9]|1[012])$/i) && value >= now.getMonth() + 1;
    }
  };

  export const validateYear = (value) => {
    const now = new Date();
    return value.match(/^\d{4}$/i) && value >= now.getFullYear();
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