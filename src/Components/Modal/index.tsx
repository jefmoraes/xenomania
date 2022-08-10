import { useAnimation } from 'framer-motion'
import { useRef, useState } from 'react'
import Arrow from '../../icons/arrow'
import ArrowRight from '../../icons/arrowRight'
import { SmallCards } from '../SmallCards'
import {ButtonExit, Container, Content, ContentSide, ContentLeftandRight, Info, Overlay, Title, Group, GroupTitleElement, IndexTip, SmallCardContainer, Line, ScoreInstruction, NameCardInstruction} from './styles'
type Props = {
  modalPull:  () => void;
}

export function Modal({modalPull}:Props){
  const [animate, setAnimate] = useState(true)

  const handleOutsideClick = (event: any) => {
    if(event.target?.id === 'overlay' || event.target?.id === 'buttonExit' || event.target?.id === 'arrow'){
      setAnimate(false)
      setTimeout(() => {
        modalPull()
      },500) 
    }
  }

  return(
    <Overlay id='overlay' onClick={handleOutsideClick}>
      <Container
        animate={{
          y: animate ? [1000,0] : [0,1000],
        }}
        transition={ { duration: 0.5}}
      >    
        <Content>
          <ButtonExit id='buttonExit'>
            <Arrow 
              id='arrow'
              style={{transform: 'rotate(-270deg)'}}
            />
          </ButtonExit>
          <Info>Instruções</Info>
          <ContentLeftandRight>
            <ContentSide>
              <GroupTitleElement>
                <Title>O card com o seletor em vermelho representa a dica desbloqueada.</Title>
                <SmallCardContainer>
                  <SmallCards
                    source='/assets/turismo.jpg'
                  />
                  <IndexTip selected>{1}</IndexTip>
                </SmallCardContainer>
              </GroupTitleElement>
              <GroupTitleElement>
                <Title>A cada chute incorreto uma nova dica é desbloqueada.</Title>
                <Group>
                  <SmallCards
                    source='/assets/lhama.jpg'
                    glass
                  />
                  <ArrowRight/>
                  <SmallCards
                    source='/assets/lhama.jpg'

                  />
                </Group>
              </GroupTitleElement>
            </ContentSide>
            <Line/>    
            <ContentSide>
              <GroupTitleElement>
                <Title>A cada chute incorreto uma nova dica é desbloqueada.</Title>
                <Group style={{gap: 20}}>
                  <ScoreInstruction>100</ScoreInstruction>
                  <ArrowRight/>
                  <ScoreInstruction>80</ScoreInstruction>
                </Group>
              </GroupTitleElement>
              <GroupTitleElement>
              <Title>cada card é um tipo de dica.</Title>
                <Group style={{gap: 20}}>
                  <NameCardInstruction>Ponto Turistico</NameCardInstruction>
                  <NameCardInstruction>Cultura</NameCardInstruction>
                </Group>
              </GroupTitleElement>
              <Title> Tente descobrir o país que estamos, usando a menor quantidade de dicas para pontuar mais.</Title>
            </ContentSide>
          </ContentLeftandRight>
        </Content>
      </Container>
    </Overlay>
  )
}