import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box titulo 1",
    text: lorem,
    bgColor: "#D5CAFA"
  },
  {
    id: Math.random(),
    title: "Box titulo 2",
    text: lorem,
    bgColor: "#EDA9A9"
  },
  {
    id: Math.random(),
    title: "Box titulo 3",
    text: lorem,
    bgColor: "#F2EE8D"
  },
  {
    id: Math.random(),
    title: "Box titulo 4",
    text: lorem,
    bgColor: "#9FEACD"
  }
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} /> {/* usa a const de parametro para a funcao home */}
    </>
  );
}

export default App;

// seguindo o tutorial de: https://dev.to/carloscne/criando-paginas-responsivas-e-adaptativas-com-react-e-styled-components-1gje
//  teremos fontes de tamanhos diferentes para Mobile com 24px, Tablet com 18px e Web com 16px.