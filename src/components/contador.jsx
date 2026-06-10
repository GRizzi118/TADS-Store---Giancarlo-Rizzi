

import { userState} from "react";

function Contador() {
  const [contador, setContador] = userState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
        Cliquei {contador} vezes
    </button>
  );
}