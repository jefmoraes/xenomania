import { CSSProperties, HTMLAttributes, useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  Container, 
  GlassCardFront, 
  Iconglass, 
  NameCardContainer,
  ScoreCard,
  InfoCard,
  Content,
  IndexTip,
  Glass


} from './styles'

export type TipProps = HTMLAttributes<HTMLDivElement> & {
  source: string;
  name: string;
  pos: number;
  status: 'unlocked' | 'selected' | 'locked'
}

export function Tip({source, name, pos, status, ...rest}:TipProps){

  const cardContentStyle = useMemo<CSSProperties>(() => ({
    transform: 'rotateY(180deg)',
  }), []);
  console.log(status)

  const {colors} = useContext(ThemeContext)
  
  const contentStyle = (status === 'selected') || (status === 'unlocked')  ? cardContentStyle : undefined;


  const styleTip = ():CSSProperties => {
    switch (status) {
      case 'unlocked':
        return {backgroundColor:colors.unlocked};
      case 'locked':
        return {backgroundColor:colors.primary};
      case 'selected': 
        return {backgroundColor:colors.sendInput};
    }
  }

  return(
    <Container {...rest}>
      <Content style={contentStyle}>
        <GlassCardFront>
          <Iconglass> ? </Iconglass>
          <Glass source={source}/>
        </GlassCardFront>
        <InfoCard 
          style={ status === 'unlocked' ? { justifyContent: 'flex-end'} : undefined} 
          source={source}
        >
          {status === 'selected' && 
            <ScoreCard>
              {100-(pos*20)}
            </ScoreCard>
          }
          <NameCardContainer >
            {name}
          </NameCardContainer>
        </InfoCard>     
      </Content>
      <IndexTip style={styleTip()}>
        {pos+1}
      </IndexTip>
    </Container>
  )
}