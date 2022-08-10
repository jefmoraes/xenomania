import { StaticImageData } from "next/image";
import { Content, GlassContent, Iconglass, MinCard, MinCardContainer } from "./styles"
type Props = {
  glass?: boolean;
  source: string;
}

export function SmallCards({glass,source}:Props){
  return(
    <Content>
      {!glass 
        ? 
          <MinCardContainer>
            <MinCard 
              src={source}
            />
          </MinCardContainer> 
        :
          <MinCardContainer>
            <GlassContent>
              <MinCard
                style={{filter: 'blur(20px)'}}
                src={source}
              />
              <Iconglass>?</Iconglass>
            </GlassContent>

          </MinCardContainer>
      }
    </Content>
  )
}