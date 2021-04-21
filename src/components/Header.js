import React from 'react';

const Header = ({pseudo}) => {
    //permets de tester si besoin d'apostrophes pour le pseudo
    const formatPseudo = pseudo=> /[aeiouy]/i.test(pseudo[0])?`d'${pseudo}`:`de ${pseudo}`
    console.log(formatPseudo(pseudo))
    return(
        <header>
            <h1>La boite à recettes {formatPseudo(pseudo)}</h1>
        </header>
    )
}

export default Header;