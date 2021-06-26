import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

class CreditCardForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      cardNumber: '',
      formErrors: {name: '', cardNumber: ''},
      nameValid: false,
      cardNumberValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let cardNumberValid = this.state.cardNumberValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'cardNumber':
        cardNumberValid = value.length >= 6;
        fieldValidationErrors.cardNumber = cardNumberValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    cardNumberValid: cardNumberValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.cardNumberValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm">
        <h2>Enter you credit card information</h2>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <input type="text" required className="form-control" name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.cardNumber)}`}>
          <input type="text" className="form-control" name="cardNumber"
            placeholder="Card Number"
            value={this.state.cardNumber}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default CreditCardForm;
