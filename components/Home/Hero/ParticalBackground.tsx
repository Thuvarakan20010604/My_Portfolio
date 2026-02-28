import React from "react";

type FallBeamBackgroundProps = {
  className?: string;
};

const FallBeamBackground = ({ className = "" }: FallBeamBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="beam-radial absolute inset-0" />
      <div className="beam-grid absolute inset-0" />
      <div className="beam-overlay absolute inset-0" />
    </div>
  );
};

export default FallBeamBackground;
