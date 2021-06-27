import React, { useState } from "react";
import styled from "styled-components";
const cclogoUrl = 'https://apisandboxstatic.zuora.com/Resources/5222233/Images/card-logos-3.png';
const StyledCreditCardTypes = styled.div`
  display: flex;
  justify-content: center;
  border-left: 2px solid #fff;
  padding-left: 1px;
  border-left-color: rgba(255, 255, 255, 0);
  margin-bottom: 1em;
`;

//-902px
const StyledVisa = styled.div`
  background-image: url(${cclogoUrl});
  background-position: 0 -820px;
  width: 60px;
  height: 32px;
  margin: 2px;
`;

//-738px
const StyledMasterCard = styled.div`
  background-image: url(${cclogoUrl});
  background-position: 0 -656px;
  width: 52px;
  height: 32px;
  margin: 2px;
`;

// -82px
const StyledAMEX = styled.div`
  background-image: url(${cclogoUrl});
  background-position: 0 0;
  width: 51px;
  height: 32px;
  margin: 2px;
`;

//-410px
const StyledDiscover = styled.div`
  background-image: url(${cclogoUrl});
  background-position: 0 -328px;
  width: 51px;
  height: 32px;
  margin: 2px;
`;

const CreditCardTypes = ({ }) => {

  return (
    <StyledCreditCardTypes>
      <StyledVisa />
      <StyledMasterCard />
      <StyledAMEX />
      <StyledDiscover />
    </StyledCreditCardTypes>
  );
};

export default CreditCardTypes;
