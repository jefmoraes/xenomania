import styled from "styled-components";
import Image from 'next/image'

type IndexTipProps = {
  selected?: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;

export const MinCardContainer = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const MinCard = styled.img`
  width: 112px;
  height: 151px;
  border-radius: 7px;
  object-fit: cover;
  object-position: center top;
`;

export const Iconglass = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.glassCardMystery}; 
  color: ${props =>props.theme.colors.text};
  font-size: 15px;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  z-index: 4;
  position: absolute;
`;

export const GlassContent = styled.span`
 overflow: hidden;
 border-radius: 7px;
 align-items: center;
 justify-content: center;
 display: flex;
`;
