import "styled-components"

declare module 'styled-components'{
  export interface DefaultTheme{
    colors:{
      primary: string;
      secondary: string;
      tertiary: string;
      button: string;
      sendInput: string;
      background: string;
      backgroundOpacity: string;
      backgroundGlassCard: string;
      text: string;
      border: string;
      glassCard: string;
      glassCardMystery: string;
      unlocked: string;
      scrollBar: string;
      scrollBarHover: string;
      inputCard: string;
      }
  }
}