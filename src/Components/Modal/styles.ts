import styled from 'styled-components';
import { motion } from "framer-motion";

type IndexTipProps = {
  selected?: boolean;
}

export const Overlay = styled(motion.div)`
  justify-content: center;
  display: flex;
  align-items: flex-end;
  position: absolute;
  background-color: ${props => props.theme.colors.backgroundOpacity};
  width: 100%;
  min-height: 100vh;
  z-index: 2;
  top: 0;
  padding-top: 80px;
  left: 0;
  overflow-y: hidden;

`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 40px 20px ;
  background-color: ${props => props.theme.colors.primary};
  max-width: 1128px;
  width: 100%;
  border-radius: 47px 47px 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonExit = styled(motion.button)`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.border};
  align-self: center;
  margin-top: -20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Info = styled.span`
  display: flex;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 500;
  margin-top: 16px;
`;

export const ContentLeftandRight = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const ContentSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  flex: 1;
  min-width: 320px;
  width: 100%;
  
  @media (max-width: 540px) {
    gap: 30px;
    min-width: auto;
  }
`;

export const Title = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
`;

export const SmallCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: start;
  gap: 16px;
`;

export const IndexTip = styled.span<IndexTipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  width: 22px;
  border-radius: 11px;
  color: ${props => props.theme.colors.text};
  background-color:  ${props => props.selected ? props.theme.colors.sendInput : props.theme.colors.secondary};
  font-size: 12px;
`;

export const GroupTitleElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Line = styled.div`
  min-height: calc(100% );
  border-right: 1px solid ${props => props.theme.colors.sendInput};
  margin-top: -50px;
  margin-bottom: -44px;

  @media (max-width: 886px) {
    display: none;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  @media (max-width: 540px) {
    gap: 16px;
  }
`;

export const ScoreInstruction = styled.span`
  background: ${props => props.theme.colors.glassCard};
  width: 45px;
  height: 45px;
  border-radius: 23px;
  color: ${props =>props.theme.colors.text};
  font-size: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
  `;

export const NameCardInstruction = styled.span`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.glassCard};
  padding: 7px 14px;
  border-radius: 15px;
  color: ${props =>props.theme.colors.text};
  font-size: 12px;
  `;
