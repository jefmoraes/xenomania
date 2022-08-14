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
import Head from "next/head"

const Home:NextPage = () =>{
  const {colors} = useContext(ThemeContext)
  const [answer, setAnswer ] = useState('')
  const ref = useRef(0)
  const [local, setLocal] = useState(locations[ref.current]);
  const [tips, setTips] = useState<TipProps[]>(local.tips as TipProps[])
  const [attempts, setAttempts] = useState<boolean>(true)
  const [modal, setModal] = useState(false)
  const erros = useRef<number>(0)
  const curId = useRef<number>(0);

  const scrollToCard = () => {
    const element = document.getElementById(`tip${curId.current}`);
    const tips = document.getElementById('tips');
    
    console.log('curId:'+curId.current)
    console.log('NASA')
    if(element && tips){
      
      const elementLeft = element.offsetLeft + element.offsetWidth; //o quão distante o meu elemento esta da esquerda
      
      console.log('element.offsetWidth:'+ element.offsetWidth)
      console.log('tips.offsetWidth:'+tips.offsetWidth)
      console.log('element.offsetLeft:'+ element.offsetLeft)

      if (elementLeft >= tips.offsetWidth + tips.scrollLeft) { //verifica se o elemento esta na tela 
        tips.scrollLeft = elementLeft - tips.offsetWidth + 48;
      } else if (elementLeft <=  tips.scrollLeft) {
        tips.scrollLeft = element.offsetLeft + 48;
      }

      /* tips.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      }) */
    }
  }
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
        if( erros.current <= locations.length ){
          curId.current++;
          scrollToCard();
          const updateTips = tips;
          updateTips[erros.current].status = 'unlocked';
          updateTips[erros.current+1].status = 'selected';
          erros.current++;
          setTips([...updateTips])
          setAttempts(false)
          
          setTimeout(() => {
            setAttempts(true);
          }, 700)
        }else{
          console.log('acabou'); 

        } 
      }
    }
  }


  return(
    <Container>
      <Head>
        <title>NotAmerican</title>
      </Head>
      <Header>
        <TitleHeader>NotAmerican</TitleHeader>
        <HelpButton onClick={modalPull}>Como Jogar ?</HelpButton> 
      </Header>
      { modal && <Modal modalPull={modalPull}/> }
      <main style={{ display:'flex', flexDirection:'column' , justifyContent:'space-evenly' , flex: 1 , paddingTop:114}}>
        <ContentCards id='tips'>
          {tips.map ((item,index) => {

            const id = `tip${index}`

            return (
              <Tip
                id={id}
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