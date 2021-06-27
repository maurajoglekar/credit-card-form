import React from "react";
import { mount } from "enzyme";

import CreditCardTypes from "./CreditCardTypes";

describe("Credit Card Types component", () => {
  it("renders card types when non selected", () => {
    const wrapper = mount(<CreditCardTypes />);

    expect(wrapper.find('[data-test-id="visa-card"]').length).toBeGreaterThan(
      0
    );
    expect(wrapper.find('[data-test-id="mastercard-card"]').length).toBeGreaterThan(
      0
    );
    expect(wrapper.find('[data-test-id="amex-card"]').length).toBeGreaterThan(
      0
    );
    expect(wrapper.find('[data-test-id="discover-card"]').length).toBeGreaterThan(
      0
    );

    wrapper.unmount();
  });
});
