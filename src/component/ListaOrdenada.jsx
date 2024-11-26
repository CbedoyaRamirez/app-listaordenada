/* eslint-disable react/prop-types */
const ListaOrdenada = ({ personas }) => {
  const personasOrdenadas = [...personas].sort((a, b) => a.edad - b.edad);

  return (
    <div>
      <h2>Lista de Personas</h2>
      <ol>
        {personasOrdenadas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} - {persona.edad} años
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListaOrdenada;