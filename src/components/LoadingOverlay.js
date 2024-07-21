"use client";
import React, { use } from "react";
import styled, { keyframes } from "styled-components";

// Animation for the fading in of the overlay
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the overlay with smoother transition
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // Semi-transparent black
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

// Animation for the spinner
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner with more modern aesthetics
const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3); // Lighter and thinner border
  border-top: 8px solid white; // White top to match the suggested modern look
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default LoadingOverlay;
