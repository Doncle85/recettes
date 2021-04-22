import React, { Component } from 'react'
// CSS
import './App.css'

import Header from "./components/Header";
import Admin from "./components/Admin";
import  recettes from "./recettes";
import Card from "./components/Card"

//firebase
import base from "./base";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
      recettes : {}
  }

  componentDidMount() {
      this.ref = base.syncState(`/${this.state.pseudo}/recttes`,{
          context: this,
          state: 'recettes'
      })
  }

  componentWillUnmount() {
      base.removeBinding(this.ref)
  }

    ajouterRecette = recette => {
      const recettes = { ...this.state.recettes }
      recettes[`recette-${Date.now()}`] = recette
      this.setState({ recettes })
  }

    majRecette = (key, newRecette) => {
        const recettes = { ...this.state.recettes }
        recettes[key] = newRecette
        this.setState({ recettes })
    }

    chargerExemple = () => this.setState({ recettes })

  render () {
      const cards = Object.keys(this.state.recettes)
          .map(key => <Card key={key} details={this.state.recettes[key]}></Card>)
      console.log(cards)
    return (
        <div className='box'>
          <Header pseudo={this.state.pseudo} />
          <div className='cards'>
              { cards }
          </div>
            <Admin
                recettes={this.state.recettes}
                ajouterRecette={this.ajouterRecette}
                majRecette={this.majRecette}
                chargerExemple={this.chargerExemple}/>
        </div>
    )
  }
}

export default App
