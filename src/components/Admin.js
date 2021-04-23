import React, { Component } from 'react';
import AjouterRecette from "./AjouterRecette";
import AdminForm from "./AdminForm";
import Login from "./Login";

//firebase
import firebase from 'firebase/app'
import  'firebase/auth'
import base, { firebaseApp } from "../base";


class Admin extends Component {
    state = {
        uid: null,
        chef : null
    }

    handleAuth = authData => {
        console.log(authData)
    }

    authenticate = () => {
        firebaseApp
            .auth()
            .signInWithPopup('facebookAuthProvider')
            .then(this.handleAuth)
    }
    render() {
        const{ recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette} = this.props

        //Si l'utilisateur n'est pas connecté
        if (!this.state.uid) {
            return <Login authentiicate={this.authenticate}/>
        }


        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette} />
                {
                    Object.keys(recettes)
                        .map(key => <AdminForm
                    key={key}
                    id={key}
                    majRecette={majRecette}
                    supprimerRecette={supprimerRecette}
                    recettes={recettes}></AdminForm>)
                }
                <footer>
                    <button onClick={chargerExemple}>Remplir</button>
                </footer>
            </div>
        )
    }
}

export default Admin;