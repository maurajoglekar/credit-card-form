import React from 'react';
import styled from "styled-components";
import { getDisplayPropName } from "../utils/general";

const StyledFormErrors = styled.div`
  color: red;
`;
export const FormErrors = ({formErrors}) =>
  <StyledFormErrors>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName]){
        return (
          <p key={i} data-test-id={`${fieldName}-error`}>{`${getDisplayPropName(fieldName)} is invalid`}</p>
        )        
      } else {
        return '';
      }
    })}
  </StyledFormErrors>