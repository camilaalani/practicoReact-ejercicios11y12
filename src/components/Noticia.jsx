const Noticia = ({ noticia }) => {
  return (
    <div>
      <h3>{noticia.title}</h3>
      <p>{noticia.description}</p>
    </div>
  );
};

export default Noticia;
