/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const PROGRESS_BAR_MIN_VALUE = 0;
const PROGRESS_BAR_MAX_VALUE = 100;

const SIZES = {
  small: {
    height: "8px",
    borderRadius: "4px"
  },
  medium: {
    height: "12px",
    borderRadius: "4px"
  },
  large: {
    height: "24px",
    padding: "4px",
    borderRadius: "8px"
  }
}

const ProgressBar = ({ value, size }) => {
  const progressBarSize = SIZES[size];

  return (
    <Wrapper
      style={progressBarSize}
      role="progressbar"
      aria-label="progress bar"
      aria-valuenow={value}
      aria-valuemin={PROGRESS_BAR_MIN_VALUE}
      aria-valuemax={PROGRESS_BAR_MAX_VALUE}
    >
      <BarTrimmer>
        <Bar value={value}>
          <VisuallyHidden>
            {value}%
          </VisuallyHidden>
        </Bar>
      </BarTrimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  width: 100%;
`;

const BarTrimmer = styled.div`
  overflow: hidden;
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value + "%"};
  height: 100%;
`;

export default ProgressBar;
