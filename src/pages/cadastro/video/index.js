import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

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

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
    {/* <form onSubmit={(event) => {
        event.preventDefault();
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: '1',
        }).then(() => {
          console.log('Cadastrou com sucesso!!');
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
          label="URL do Vídeo"
          type="input"
          name="URL"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria do Vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>

      </form> */}

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;
