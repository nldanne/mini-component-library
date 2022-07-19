import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectContainer value={value} onChange={onChange}>
        {children}
      </SelectContainer>
      <Content>
        {displayedValue}
        <IconWrap style={{ '--size': 24 + 'px'}}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrap>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectContainer = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Allows the select element to be interactable */
  opacity: 0;

`;

const Content = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: 1rem;
  border-radius: 8px;

  /* Adjacent sibling combinator, relevent styles to the 'Content' component */
  ${SelectContainer}:focus + & {
    outline: 5px dotted black;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectContainer}:hover + & {
    color: ${COLORS.black};
  }

`;

const IconWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);

  /* Can't receive click events, allowing child elements to be clickable */
  pointer-events: none;
`;


export default Select;
