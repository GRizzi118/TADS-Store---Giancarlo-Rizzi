// Componente educacional — demonstra toggle de estado com useState
// Não está integrado à aplicação; para usar, importe em outro componente e adicione ao JSX

import { useState } from 'react';

function BotaoFavorito() {
    const [favorito, setFavorito] = useState(false);

    return (
        <button onClick={() => setFavorito(!favorito)}>
            {favorito ? '❤️ Favorito' : '🤍 Favoritar'}
        </button>
    );
}

export default BotaoFavorito;
