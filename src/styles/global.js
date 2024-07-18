import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;

// O que fizemos aqui foi zerar algumas propriedades e definir o root do HTML com o tamanho das fontes que vamos usar
// importei uma função que chamei de px2vw. Essa função converte pixels para viewport width.
// Como nosso layout será responsivo, preciso que ele se adapte em todos os tamanhos de tela e por isso vou usar o tamanho da viewport. Poderia ter pensado em usar percentual, mas o problema é que se você definir um percentual dentro de um outro elemento menor que a viewport, ele vai usar o tamanho daquele elemento e neste caso não resolveria o problema.
// Optei por não trabalhar usando também o viewport height porque normalmente trabalhos com a largura e não com a altura da tela 
