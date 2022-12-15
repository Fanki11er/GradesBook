import styled from "styled-components";

export const SmallLoaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  animation-name: show;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SmallLoaderImg = styled.img`
  height: 100%;
`;
