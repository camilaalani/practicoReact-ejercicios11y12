import { Form } from "react-bootstrap";

const categorias = [
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "general", label: "General" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

const paises = [
  { value: "us", label: "Estados Unidos" },
  { value: "ar", label: "Argentina" },
  { value: "br", label: "Brasil" },
  { value: "mx", label: "México" },
  { value: "ca", label: "Canadá" },
  { value: "fr", label: "Francia" },
  { value: "de", label: "Alemania" },
  { value: "es", label: "España" },
  { value: "it", label: "Italia" },
  { value: "gb", label: "Reino Unido" },
  { value: "au", label: "Australia" },
  { value: "jp", label: "Japón" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "ru", label: "Rusia" },
  { value: "za", label: "Sudáfrica" },
  { value: "co", label: "Colombia" },
  { value: "pe", label: "Perú" },
  { value: "cl", label: "Chile" },
  { value: "ve", label: "Venezuela" },
  { value: "ec", label: "Ecuador" },
  { value: "bo", label: "Bolivia" },
  { value: "py", label: "Paraguay" },
  { value: "uy", label: "Uruguay" },
];


const Formulario = ({ onCategoriaSeleccionada, onPaisSeleccionado }) => {
  return (
    <Form>
      <Form.Group controlId="formPais" className='mb-3'>
        <Form.Label>Buscar un País:</Form.Label>
        <Form.Control as="select" onChange={(e) => onPaisSeleccionado(e.target.value)}>
          <option value="">Seleccione un país...</option>
          {paises.map((pais) => (
            <option key={pais.value} value={pais.value}>
              {pais.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formCategoria" className='mb-3'>
        <Form.Label>Buscar por Categoría:</Form.Label>
        <Form.Control as="select" onChange={(e) => onCategoriaSeleccionada(e.target.value)}>
          <option value="">Seleccione una categoría...</option>
          {categorias.map((categoria) => (
            <option key={categoria.value} value={categoria.value}>
              {categoria.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};


export default Formulario;
