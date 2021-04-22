import React from 'react';


const AdminForm = ({
                       id: key,
                       majRecette,
                       recettes,
                        supprimerRecette

}) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const { name, value} = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className='card'>

            <form className='admin-form'>

                <input value={recette.nom} type='text' name='nom' placeholder='Nom de la recette' onChange={e => handleChange(e,key)}/>

                <input value={recette.image} type='text' name='image' placeholder="Adresse de l'image" onChange={e => handleChange(e,key)}/>

                <textarea value={recette.ingredients} name='ingrédients' rows='3' placeholder='Liste des ingrédients' onChange={e => handleChange(e,key)}/>

                <textarea  value={recette.instructions} name='instructions' rows='15' placeholder='Liste des instructions' onChange={e => handleChange(e,key)}/>

            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
    )
}

export default AdminForm