import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
// import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

const styles = {
  Box: {
    display: 'flex',
    flexDirection: 'row',
    width: 430,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BtnNewCat: {
    backgroundColor: '#45BF55',
    width: 200,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: 5 
  }
};

const Button = styled.button`
    width: 200px;
    height: 50px;
    color: var(--white);
    background-color:  var(--primary);
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChange } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <div style={styles.Box}>
          <Button type="submit" width="200px" height="50px">
            Cadastrar
          </Button>
          <Link to="/cadastro/categoria" style={styles.BtnNewCat}>
            <div>Nova Categoria</div>
          </Link>
        </div>
      </form>

    </PageDefault>
  );
}

export default CadastroVideo;
