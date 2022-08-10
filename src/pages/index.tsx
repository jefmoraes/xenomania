import { NextPage } from "next"
import { ChangeEvent, cloneElement, CSSProperties, FormEvent, useContext, useMemo, useRef, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Tip, TipProps } from '../Components/Tip'
import { locations } from '../data/locations'
import { motion } from "framer-motion";

import {
  Container,
  Header,
  HelpButton, 
  TitleHeader, 
  ContentCards,
  FlexNameInput,
  Input,
  ContainerInput,
  SendButton,
  ContentInput,
  ButtonContainer


} from '../styles'
import { Modal } from '../Components/Modal';

const Home:NextPage = () =>{
  const {colors} = useContext(ThemeContext)
  const [answer, setAnswer ] = useState('')
  const ref = useRef(0)
  const [local, setLocal] = useState(locations[ref.current]);
  const [tips, setTips] = useState<TipProps[]>(local.tips as TipProps[])
  const [attempts, setAttempts] = useState<boolean>(true)
  const [modal, setModal] = useState(false)
  
  
  const erros = useRef<number>(0)

  function modalPull(){
    setModal(!modal)
  }

  function handleAnswerComparation(){
    if(answer !== ''){
      const stringSemAcento = answer.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

      if(stringSemAcento.toUpperCase() === local.name.toUpperCase()){
        console.log('parabéns');
        ref.current++;

        if(ref.current < locations.length){
        
          setLocal(locations[ref.current]);
    
          const newTips = tips.map((item,index): TipProps => {
            return{
              source:item.source,
              name: item.name,
              pos: item.pos,
              status: 'locked'
            } 
          })
    
          setTips([...newTips]);
          setTimeout(() => {
            setTips(locations[ref.current].tips as TipProps[]);
          }, 500)
          
        }else{
          console.log('deu garota')
        }
        setAttempts(true);
        erros.current = 0;
        
        //animação
      }else{
        console.log(erros)
        const updateTips = tips;
        updateTips[erros.current].status = 'unlocked';
        updateTips[erros.current+1].status = 'selected';
        erros.current++;
        setTips([...updateTips])
        setAttempts(false)
      
        setTimeout(() => {
          setAttempts(true);
        }, 700)
      }
    }
  }


  return(
    <Container>
      <Header>
        <TitleHeader>Xenomania</TitleHeader>
        <HelpButton onClick={modalPull}>How to Play ?</HelpButton> 
      </Header>
      { modal && <Modal modalPull={modalPull}/> }
      <main style={{ display:'flex', flexDirection:'column' , justifyContent:'space-evenly' , flex: 1 , paddingTop:114}}>
        <ContentCards>
          {tips.map ((item,index) => {
            return (
              <Tip
                key={index} 
                source={item.source}
                name={item.name} 
                pos={index}
                status={item.status}
              />
            )
          }
          )}
        </ContentCards>
        <ContainerInput>
          <ContentInput>
            <FlexNameInput>Em qual país estamos ?</FlexNameInput>
            <Input 
              animate={ !attempts ? 
                {
                  scale: 1,
                  rotate: -2,
                } : 
                undefined
              }
              typeof='text' 
              onChange={event => setAnswer(event.target.value)}
              style={ !attempts  ? {borderColor: colors.sendInput} : undefined}
            />
          </ContentInput>
          <ButtonContainer>
            <SendButton onClick={handleAnswerComparation}>Enviar</SendButton>
          </ButtonContainer>
        </ContainerInput>
      </main>
    </Container>
  )
}

export default Home;