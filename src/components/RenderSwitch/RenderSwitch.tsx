import React from 'react';

interface RenderSwitchProps {
  cases: React.ReactNode[];
}

export const RenderSwitch: React.FC<RenderSwitchProps> = ({ cases }) => {
  return <>{cases.find((c) => c) || null}</>;
};
