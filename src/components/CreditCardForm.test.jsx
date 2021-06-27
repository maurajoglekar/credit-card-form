import React from 'react';
import { mount } from 'enzyme';

import CreditCardForm from './CreditCardForm';

describe('Credit Card form component', () => {

    it('renders empty form with all the fields', () => {
        const wrapper = mount(<CreditCardForm/>);

        expect(
            wrapper
              .find('[data-test-id="name-input"]').props().value
          ).toBe('');

          expect(
            wrapper
              .find('[data-test-id="card-number-input"]').props().value
          ).toBe('');

          expect(
            wrapper
              .find('[data-test-id="cvv-input"]').props().value
          ).toBe('');

          expect(
            wrapper
              .find('[data-test-id="month-input"]').props().value
          ).toBe('');

          expect(
            wrapper
              .find('[data-test-id="year-input"]').props().value
          ).toBe('');


          expect(
            wrapper
              .find('[data-test-id="submit-button"]').props().disabled
          ).toBe(true)

        wrapper.unmount();
    });
});