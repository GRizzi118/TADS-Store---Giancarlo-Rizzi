

// Componente educacional — demonstra uso básico de useState
// Não está integrado à aplicação; para usar, importe em outro componente

import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
        Cliquei {contador} vezes
    </button>
  );
}