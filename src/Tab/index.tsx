import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children?: React.ReactNode;
}

function Tab({ children, ...attribute }: Props) {
  return <div {...attribute}>{children}</div>;
}

export default Tab;
