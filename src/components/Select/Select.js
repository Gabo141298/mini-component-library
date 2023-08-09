import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const ICON_SIZE = 16;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange} aria-label={label}>
        {children}
      </HiddenSelect>

      <DisplayedValue>
        {displayedValue}
      </DisplayedValue>
      <IconWrapper size={ICON_SIZE + "px"}>
        <Icon id="chevron-down" size={ICON_SIZE} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const HiddenSelect = styled.select`
  opacity: 0;
  position: absolute;
  appearance: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DisplayedValue = styled.div`
  position: relative;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;

  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${HiddenSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }  
  
  ${HiddenSelect}:hover + & {
    color: ${COLORS.black};
  }

  pointer-events: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  height: ${props => props.size};
  width: ${props => props.size};
  pointer-events: none;
`;

export default Select;
