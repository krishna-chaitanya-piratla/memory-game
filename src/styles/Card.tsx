import styled from 'styled-components';

export const CardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem; /* Added padding */
`;

export const CardInner = styled.div<{ isVisible: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ isVisible }) => (isVisible ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const CardFront = styled(CardFace)`
  background-color: #fff;
  color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardBack = styled(CardFace)`
  background-color: #ccc;
  color: transparent;
  transform: rotateY(180deg);
`;
