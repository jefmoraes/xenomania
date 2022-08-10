import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  display: flex ;
  min-height: 100vh;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex ;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 100%;
  padding: 0 48px;
  position: fixed;
  z-index: 1;
  backdrop-filter: blur(15px);
  border-bottom: 1px  ${props => props.theme.colors.primary};

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`;
export const TitleHeader = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 540px) {
    font-size: 20px;
  }
`;

export const HelpButton = styled.button`
  backdrop-filter: blur(20px);
  background-color: ${props => props.theme.colors.scrollBar} ;
  padding: 11px 22px;
  border-radius: 21px;
  color: white;
  font-size: 15px;  
  cursor: pointer;

  @media (max-width: 540px) {
    padding: 10px 16px;
    font-size: 13px;
    border-radius: 18px;

  }
`;

export const ContentCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  padding: 0 42px 20px;
  overflow-x: scroll;


  ::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.scrollBar} ;
    height: 100%;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: ${props => props.theme.colors.scrollBarHover};
  }
  `;
  
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 14px 50px;
  
`;

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 580px;
  width: 100%;
`;

export const FlexNameInput = styled.span`
  display: flex;
  color: ${props => props.theme.colors.text} ;
  font-size: 26px;
  align-self: center;

  @media (max-width:540px) {
   font-size: 22px;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;

`;

export const Input = styled(motion.input)`
  height: 44px;
  border-radius: 22px;
  background-color: ${props => props.theme.colors.inputCard};
  color: ${props =>props.theme.colors.text};
  font-size: 17px;
  padding: 0 14px;
  border-width: 1; 
  border-style: solid;
  transition: border-color 2s ease;
  border-color: ${props => props.theme.colors.background};

  @media (max-width:540px) {
    height: 44px;
    
  }
`;

export const SendButton = styled.button`
  display: flex;
  padding: 10px 46px ;
  border-radius: 23px;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600px;
  background-color: ${props => props.theme.colors.sendInput};
  cursor: pointer;

  @media (max-width:540px) {
    padding: 8px 48px;
  }
`;

