import React, { useState } from "react";
import styled from "styled-components";
import { ccType, cclogoUrl } from "../utils/general";

const StyledCreditCardTypes = styled.div`
  display: flex;
  justify-content: center;
  border-left: 2px solid #fff;
  padding-left: 1px;
  border-left-color: rgba(255, 255, 255, 0);
  margin-bottom: 1em;
`;

const StyledVisa = styled.div`
  background-image: url(${cclogoUrl});
  background-position: ${props => (props.isType ? '0 -820px' : '0 -902px')};
  width: 60px;
  height: 32px;
  margin: 2px;
`;

const StyledMasterCard = styled.div`
  background-image: url(${cclogoUrl});
  background-position: ${props => (props.isType ? '0 -656px' : '0 -738px')};
  width: 52px;
  height: 32px;
  margin: 2px;
`;

const StyledAMEX = styled.div`
  background-image: url(${cclogoUrl});
  background-position: ${props => (props.isType ? '0 0' : '0 -82px')};
  width: 51px;
  height: 32px;
  margin: 2px;
`;

const StyledDiscover = styled.div`
  background-image: url(${cclogoUrl});
  background-position: ${props => (props.isType ? '0 -328px' : '0 -410px')};
  width: 51px;
  height: 32px;
  margin: 2px;
`;

const CreditCardTypes = ({cardType }) => {

  return (
    <StyledCreditCardTypes>
      <StyledVisa isType={cardType === ccType.visa}/>
      <StyledMasterCard isType={cardType === ccType.mastercard}/>
      <StyledAMEX isType={cardType === ccType.amex}/>
      <StyledDiscover isType={cardType === ccType.discover}/>
    </StyledCreditCardTypes>
  );
};

export default CreditCardTypes;
