import React from 'react';
import { SectionHeading } from './typography/Headings';

const SectionContainer = ({ title, children }) => {
  return (
    <section>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  );
};

export default SectionContainer;
