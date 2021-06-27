import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import styled from "styled-components";

const StyledCreditCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ededed;

  max-width: 500px;
  margin: 30px;
  border-radius: .5em;
  border: 2px #D3D3D3 solid;
`;

const StyledFields = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1em;
    height: 40px;
    padding: 10px;
    text-align: center;
    border-radius: .5em;
    border: 2px #D3D3D3 solid;
    color: #D3D3D3;
    font-size: 16px;
  }

  .monthField {
    margin-right: 30px;
  }

  button {
    height: 60px;
    margin-bottom: 3em;
    color: #FFF;
    font-size: 16px;
    background-color: #9370DB;
    border-radius: .5em;
    border: 2px #D3D3D3 solid;
  }
`;


class CreditCardForm extends Component {
  constructor(props) {
    super(props);

    const errorFields = {
      name: "",
      cardNumber: "",
      cvv: "",
      month: "",
      year: "",
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
      yearValid
    } = this.state;

    switch (fieldName) {
      case "name":
        nameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.name = nameValid ? "" : " is invalid";
        break;
      case "cardNumber":
        cardNumberValid = value.length >= 6;
        fieldValidationErrors.cardNumber = cardNumberValid
          ? ""
          : " is too short";
        break;
      case "cvv":
        cvvValid = value.length >= 3;
        fieldValidationErrors.cvv = cvvValid ? "" : " is invalid";
        break;
      case "month":
        monthValid = value.length >= 3;
        fieldValidationErrors.month = monthValid ? "" : " is invalid";
        break;
      case "year":
        yearValid = value.length >= 3;
        fieldValidationErrors.year = yearValid ? "" : " is invalid";
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
        yearValid: yearValid
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
        this.state.yearValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <StyledCreditCardForm>
        <h2>Enter your credit card information</h2>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <StyledFields>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={this.state.cardNumber}
            onChange={this.handleUserInput}
          />

          <input
            type="text"
            name="cvv"
            placeholder="CVV2"
            value={this.state.cvv}
            onChange={this.handleUserInput}
          />

          <div>
            <input
              className="monthField"
              type="text"
              name="month"
              placeholder="Exp. Month"
              value={this.state.month}
              onChange={this.handleUserInput}
            />

            <input
              type="text"
              name="year"
              placeholder="Exp. Year"
              value={this.state.year}
              onChange={this.handleUserInput}
            />
          </div>


        <button type="submit" disabled={!this.state.formValid}>
          Submit
        </button>

        </StyledFields>
      </StyledCreditCardForm>
    );
  }
}

export default CreditCardForm;
