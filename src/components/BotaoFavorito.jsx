

import { useState } from 'react';

function BotaoFavorito() {

    const [favorito, setFavorito] = useState(false);

    return (
        <button onClick={() => setFavorito(!favorito)}>
            {favorito ? 'Favoritos' : 'Favoritar'}
        </button>
    );
}
