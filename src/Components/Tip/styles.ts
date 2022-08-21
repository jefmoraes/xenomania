import styled from "styled-components";

type ContainerProps = {
  source: string;
  
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Content = styled.div`
  width: 252px;
  height: 382px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 700ms ease-in-out;
  background-position: center;
`;

const CardStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
`;

export const GlassCardFront = styled(CardStyles)`
  align-items: center;
  justify-content: center;
`;

export const Glass = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  position: absolute;
  z-index: 0;
`;


export const Iconglass = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.glassCardMystery}; 
  color: ${props =>props.theme.colors.text};
  font-size: 36px;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  z-index: 1;

`;


export const InfoCard = styled(CardStyles)<ContainerProps>`
  transform: rotateY(180deg);
  padding: 14px;
  align-items: flex-start;
  background-image: url(${props => props.source});
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

export const ScoreCard = styled.span`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.glassCard};
  width: 46px;
  height: 46px;
  border-radius: 23px;
  backdrop-filter: blur(50px);
  color: ${props =>props.theme.colors.text};
  font-size: 13px;
`;

export const NameCardContainer = styled.span`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.glassCard};
  padding: 7px 14px;
  border-radius: 15px;
  backdrop-filter: blur(50px);
  color: ${props =>props.theme.colors.text};
  font-size: 12px;
`;

export const IndexTip = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.secondary}; 

  @media (max-width: 413px ) {
    display: none;
  }
`;
