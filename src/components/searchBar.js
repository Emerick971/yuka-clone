import React from 'react';
import './searchBar.css';
import Button from 'react-bootstrap/Button';

//Initialisation du composant SearchBar qui contient un input et un bouton

class SearchBar extends React.Component{
   
   //Initialisation du constructor qui prend en paramêtre l'élément ciblé dans l'input
    constructor(props) {
        super(props);
        this.state = {
           searchFood: '', 
        }
    }

    //Mise à jour de la valeur de l'input
    handleChange = (event) => {
        this.setState ({searchFood:event.target.value})
        }
  
    //Fonction qui prend en charge la valeur de l'input
    searchEvent = () => {
        this.props.onSearch(this.state.searchFood)
    }

    render(){
        return(
            <>
                {/* On cible la valeur de l'input via value afin qu'il soit pris en charge dans le state */}
                {/* Puis on met à jour (setState) la valeur de l'input grâce à un onChange  */}
                <input type="text" placeholder="Tapez un produit" value={this.state.searchFood} onChange={this.handleChange} ></input>

                {/* Lors du click sur le bouton, on crée un évènement (une nouvelle foncion : searchEvent) envoyé au parent (Accueil.js),
                l'évènement searchEvent est la valeur de l'input. Pour envoyer de l'enfant vers le parent on utilisen "this.props..." */}
                <Button variant="warning" onClick = {this.searchEvent}>
                   Rechercher
                </Button>
            </>
        )
    }
}

export default SearchBar;