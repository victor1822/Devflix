import React from 'react';
import Menu from './components/Menu'
import DadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{backgroundColor: "#141414"}}>
      <Menu/>

      <BannerMain
      videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
      url={DadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Atualizei minhas definições de Programador Júnior, Pleno e Sênior para 2020. Esta é a primeira vez que eu fico em paz com o assunto porque classificar em níveis um desenvolvedor de software é algo complicado, com centenas de dimensões, principalmente quando levamos em conta o contexto que a pessoa está inserida. Então uma senioridade em programação é algo realmente sofisticado, mas a simplicidade deste vídeo vem do fato de eu analisar apenas uma dimensão nessa história toda. Inclusive, seria extremamente proveitoso ver isso nas vagas de programador ou até nos currículos."}
      />

      <Carousel
      ignoreFirstVideo
      category={DadosIniciais.categorias[0]}
      />

      <Carousel
      category={DadosIniciais.categorias[1]}
      />

      <Carousel
      category={DadosIniciais.categorias[2]}
      />

      <Carousel
      category={DadosIniciais.categorias[3]}
      />

      <Carousel
      category={DadosIniciais.categorias[4]}
      />

      <Carousel
      category={DadosIniciais.categorias[5]}
      />

      <Footer/>

    </div>
  );
}

export default App;
