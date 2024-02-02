import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '5ad672aae6c9402c912f604443b414ce';

function App() {
  const [noticias, setNoticias] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [paisSeleccionado, setPaisSeleccionado] = useState('');
  const [error, setError] = useState(null);
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=5ad672aae6c9402c912f604443b414ce');
        const data = await response.json();

        if (data.status === 'ok') {
          setCategorias(data.sources);
        } else {
          setError('Error al obtener las categorías');
        }
      } catch (error) {
        setError('Error al obtener las categorías');
      }
    };

    const obtenerPaises = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();

        setPaises(data);
      } catch (error) {
        setError('Error al obtener la lista de países');
      }
    };

    obtenerCategorias();
    obtenerPaises();
  }, []);

  const handleCategoriaSeleccionada = async (categoria) => {
    setCategoriaSeleccionada(categoria);
    setError(null);

    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=${paisSeleccionado}&category=${categoria}`);
      const data = await response.json();

      if (data.status === 'ok') {
        setNoticias(data.articles);
      } else {
        setError('Error al obtener noticias');
        setNoticias([]);
      }
    } catch (error) {
      setError('Error al obtener noticias');
      setNoticias([]);
    }
  };

  const handlePaisSeleccionado = (pais) => {
    setPaisSeleccionado(pais);
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={12}>
          <Titulo />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Formulario
            onCategoriaSeleccionada={handleCategoriaSeleccionada}
            onPaisSeleccionado={handlePaisSeleccionado}
            paises={paises}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {error ? (
            <Card>
              <Card.Header>Error</Card.Header>
              <Card.Body>
                <p>{error}</p>
              </Card.Body>
            </Card>
          ) : (
            noticias.length > 0 && (
              <Card>
                <Card.Header>Noticias Principales</Card.Header>
                <Card.Body>
                  <ListaNoticias noticias={noticias} />
                </Card.Body>
              </Card>
            )
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
