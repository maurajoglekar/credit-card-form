import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import styled from "styled-components";
import CreditCardTypes from "./CreditCardTypes";
import {
  ccType,
  detectCardType,
  validateCVV,
  validateYear,
  validateMonth
} from "../utils/general";

const StyledCreditCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ededed;

  max-width: 500px;
  margin: 30px;
  border-radius: 0.5em;
  border: 2px #d3d3d3 solid;
`;

const StyledFields = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1em;
    height: 40px;
    padding: 10px;
    text-align: center;
    border-radius: 0.5em;
    border: 2px #d3d3d3 solid;
    font-size: 16px;
    color: #444444;
  }

  .monthField {
    margin-right: 30px;
  }

  button {
    height: 60px;
    margin-bottom: 3em;
    color: #fff;
    font-size: 16px;
    background-color: #9370db;
    border-radius: 0.5em;
    border: 2px grey solid;
  }

  button:disabled {
    background-color: #E9D3FF;
  }
`;

class CreditCardForm extends Component {
  constructor(props) {
    super(props);

    const errorFields = {
      name: false,
      cardNumber: false,
      cvv: false,
      month: false,
      year: false,
    };

    this.state = {
      name: "",
      cardNumber: "",
      cvv: "",
      month: "",
      year: "",
      formErrors: errorFields,
      nameValid: false,
      cardNumberValid: false,
      cvvValid: false,
      monthValid: false,
      yearValid: false,
      formValid: false,
      cardType: null,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let {
      formErrors: fieldValidationErrors,
      cvvValid,
      nameValid,
      cardNumberValid,
      monthValid,
      yearValid,
      cardType,
      year
    } = this.state;

    switch (fieldName) {
      case "name":
        nameValid = !!value.match(/^([a-z]+[,.]?[ ]?|[a-z]+['-]?)+$/i);
        fieldValidationErrors.name = !nameValid;
        break;
      case "cardNumber":
        cardType = detectCardType(value);
        cardNumberValid = cardType !== ccType.invalid;
        fieldValidationErrors.cardNumber = !cardNumberValid;
        break;
      case "cvv":
        cvvValid = validateCVV(value, cardType);
        fieldValidationErrors.cvv = !cvvValid;
        break;
      case "month":
        monthValid = validateMonth(value, year);
        fieldValidationErrors.month = !monthValid;
        break;
      case "year":
        yearValid = validateYear(value);
        fieldValidationErrors.year = !yearValid;
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        cardNumberValid: cardNumberValid,
        cvvValid: cvvValid,
        monthValid: monthValid,
        yearValid: yearValid,
        cardType: cardType,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.cardNumberValid &&
        this.state.cvvValid &&
        this.state.monthValid &&
        this.state.yearValid,
    });
  }

  render() {
    const { formErrors, name, cardNumber, cvv, month, year, cardType } =
      this.state;

    return (
      <StyledCreditCardForm>
        <h2>Enter your credit card information</h2>
        <div>
          <FormErrors formErrors={formErrors} />
        </div>
        <StyledFields>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleUserInput}
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardNumber}
            onChange={this.handleUserInput}
          />

          <input
            type="text"
            name="cvv"
            placeholder="CVV2"
            value={cvv}
            onChange={this.handleUserInput}
          />

          <div>
            <input
              className="monthField"
              type="text"
              name="month"
              placeholder="Exp. Month"
              value={month}
              onChange={this.handleUserInput}
            />

            <input
              type="text"
              name="year"
              placeholder="Exp. Year"
              value={year}
              onChange={this.handleUserInput}
            />
          </div>
          <CreditCardTypes cardType={cardType}></CreditCardTypes>

          <button type="submit" disabled={!this.state.formValid}>
            Submit
          </button>
        </StyledFields>
      </StyledCreditCardForm>
    );
  }
}

export default CreditCardForm;
