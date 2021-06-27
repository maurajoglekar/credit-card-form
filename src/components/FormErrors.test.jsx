import React from "react";
import { mount } from "enzyme";

import FormErrors from "./FormErrors";

describe("FormErrors component", () => {
  it("renders name error only", () => {
    const minProps = {
      formErrors: {
        name: true,
        cardNumber: false,
        cvv: false,
        month: false,
        year: false,
      },
    };
    const wrapper = mount(<FormErrors {...minProps} />);

    expect(wrapper.find('[data-test-id="name-error"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="cardNumber-error"]')).toHaveLength(0);
    expect(wrapper.find('[data-test-id="cvv-error"]')).toHaveLength(0);
    expect(wrapper.find('[data-test-id="month-error"]')).toHaveLength(0);
    expect(wrapper.find('[data-test-id="year-error"]')).toHaveLength(0);

    wrapper.unmount();
  });

  it("renders all errors", () => {
    const minProps = {
      formErrors: {
        name: true,
        cardNumber: true,
        cvv: true,
        month: true,
        year: true,
      },
    };
    const wrapper = mount(<FormErrors {...minProps} />);

    expect(wrapper.find('[data-test-id="name-error"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="cardNumber-error"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="cvv-error"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="month-error"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="year-error"]')).toHaveLength(1);

    wrapper.unmount();
  });
});
