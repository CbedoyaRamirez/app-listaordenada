import "./App.css";
import ListaOrdenada from "./component/ListaOrdenada";

function App() {
  const personas = [
    { nombre: "Carlos", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 },
    { nombre: "Oscar", edad: 100 },
    { nombre: "Lore", edad: 2 },
    { nombre: "Bebe", edad: -2 },
  ];

  return (
    <>
      <ListaOrdenada personas={personas} />
    </>
  );
}

export default App;
