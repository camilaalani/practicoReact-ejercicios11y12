import { Card, Row, Col } from 'react-bootstrap';

const ListaNoticias = ({ noticias }) => {
  return (
    <Row>
      {noticias.map((noticia) => (
        <Col key={noticia.title} md={4} className="mb-4">
          <Card>
            {noticia.urlToImage && (
              <Card.Img variant="top" src={noticia.urlToImage} alt={noticia.title} />
            )}
            <Card.Body>
              <Card.Title>{noticia.title}</Card.Title>
              <Card.Text>{noticia.description}</Card.Text>
              <a href={noticia.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Ver Noticia Completa
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ListaNoticias;
