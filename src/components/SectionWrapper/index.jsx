import React from "react";
import PropTypes from "prop-types";
import * as S from './SectionWrapper.styles';


export default function SectionWrapper({ id, children }) {
    return (
      <S.Section id={id}>
        {children}
      </S.Section>
    );
  }
  
  SectionWrapper.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };