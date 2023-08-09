import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--font-size": 14 / 16 + "rem",
    "--border-weight": "1px",
    "--padding-bottom": "4px",
    "--icon-text-separation": "24px",
    iconSize: 16
  },
  large: {
    "--font-size": 18 / 16 + "rem",
    "--border-weight": "2px",
    "--padding-bottom": "7px",
    "--icon-text-separation": "36px",
    iconSize: 24
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <SearchWrapper>
        <IconWrapper styles={{ "--size": styles.iconSize }}>
          <Icon id={icon} size={styles.iconSize} />
        </IconWrapper>
        <Input placeholder={placeholder} style={{ ...styles, "--width": width + "px" }} />
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 2px;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
`;

const Input = styled.input`
  width: var(--width);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-weight) solid ${COLORS.black};
  
  padding-left: var(--icon-text-separation);
  padding-bottom: var(--padding-bottom);

  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
