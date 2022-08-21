import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
  display: flex ;
  flex-direction: column;
  align-items: center;
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
  max-width: 1536px;

  @media (max-width: 540px) {
    height: 70px;
    padding: 0 16px;
  }
  @media (max-width: 414px) {
    height: 60px;
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
    line-height: 16px;

  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  
  padding-top: 100px;
  justify-content: center;
  align-items: center;
  gap: 48px;
  max-width: 1536px;
  width: 100%;

  @media (max-width: 540px) {
    padding-top: 110px;
    justify-content: flex-start;
    gap: 24px;
    
  }

  @media (min-width: 540px) {
    min-height: 100vh;
  }

  @media (max-width: 413px) {
    gap: 0;
    padding-top: 70px;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  padding: 0px 42px 10px;
  overflow-x: scroll;
  width: 100%;

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

  @media (max-width: 540px) {
    gap: 24px;
    padding: 0px 16px 10px;
    margin-right: 16px;
  }

  `;
  
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row; 
  max-width: 580px;
  width: 100%;
  gap: 24px;
  padding: 16px;

  @media (max-width: 540px) {
    gap: 10px;

  }
`;

export const ContentInput = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 22px;
  background-color: ${props => props.theme.colors.inputCard};
  padding: 4px;
  border-width: 1px; 
  border-style: solid;
  transition: border-color 2s ease;
  border-color: ${props => props.theme.colors.inputCard};
  
  @media (max-width:540px) {
    border-radius: 20px; 
  }
`;

export const ButtonMin = styled.button`
  width: 32px;
  height:  32px;
  border-radius: 16px;
  background-color:  ${props => props.theme.colors.sendInput};

  @media (min-width:540px) {
    display: none;
  }
`;

export const Input = styled.input`
  line-height: 24px;
  display: flex;
  flex: 1;
  margin: 0 14px;
  font-size: 17px;
  color: ${props =>props.theme.colors.text};
  background-color: transparent;
  
  &::placeholder{
    color: white;
    opacity: 0.7;
  }

`;

export const SendButton = styled.button`
  padding: 0 28px;
  border-radius: 23px;
  color: ${props => props.theme.colors.text};
  font-size: 17px;
  font-weight: 500;
  background-color: ${props => props.theme.colors.sendInput};
  cursor: pointer;

  @media (max-width:540px) {
    display: none;
  }
  
`;

