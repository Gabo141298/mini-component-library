import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--border-thickness": "1px",
    "--padding-bottom": "4px",
    "--icon-text-separation": "24px",
    "--height": 24 / 16 + "rem",
    iconSize: 16
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--border-thickness": "2px",
    "--padding-bottom": "7px",
    "--icon-text-separation": "36px",
    "--height": 36 / 16 + "rem",
    iconSize: 24
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input {...delegated} style={{ ...styles, "--width": width + "px" }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`;

const Input = styled.input`
  width: var(--width);
  height: var(--height);

  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  
  padding-left: var(--icon-text-separation);

  outline-offset: 2px;

  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
