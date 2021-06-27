import React from 'react';
import styled from "styled-components";
import { getDisplayPropName } from "../utils/general";

const StyledFormErrors = styled.div`
  color: red;
`;
export const FormErrors = ({formErrors}) =>
  <StyledFormErrors>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{getDisplayPropName(fieldName)} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </StyledFormErrors>