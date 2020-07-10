import styled from 'styled-components'

export const IconsContainer = styled.div`
  margin-top: 1.2rem;
`;

export const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 400px;
  max-height: 400px;
  margin-right: 1rem;
  border-radius: 2px;
  display: inline-block;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  background-color: rgba(46, 204, 64, 0.3);
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2ecc40;
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;
