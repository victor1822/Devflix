import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [DadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault style={{ backgroundColor: '#141414' }} marginAll={0}>

      {DadosIniciais.length === 0 && (<div>Loading...</div>)}

      {
        DadosIniciais.map((categoria, indice)=>{
          if(indice === 0){
            return(
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={DadosIniciais[0].videos[0].titulo}
                  url={DadosIniciais[0].videos[0].url}
                  videoDescription="Atualizei minhas definições de Programador Júnior, Pleno e Sênior para 2020. Esta é a primeira vez que eu fico em paz com o assunto porque classificar em níveis um desenvolvedor de software é algo complicado, com centenas de dimensões, principalmente quando levamos em conta o contexto que a pessoa está inserida. Então uma senioridade em programação é algo realmente sofisticado, mas a simplicidade deste vídeo vem do fato de eu analisar apenas uma dimensão nessa história toda. Inclusive, seria extremamente proveitoso ver isso nas vagas de programador ou até nos currículos."
                />

                <Carousel
                  ignoreFirstVideo
                  category={DadosIniciais[0]}
                />
              </div>
            );
          }
           return (
               <Carousel
                 key={categoria.id}
                 category={categoria}
               />
             );
         })
      }
    </PageDefault>
  );
}

export default Home;
