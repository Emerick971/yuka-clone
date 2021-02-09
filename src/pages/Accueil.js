import React from 'react';
import SearchBar from '../components/searchBar';
import {Link} from 'react-router-dom';
import './Accueil.css';

class Accueil extends React.Component{

    //initialisation d'un state 'food' qui récupèrera l'information de l'API
    constructor(props) {
        super(props);
        this.state = {   
           food: [],
           loading: false
        }
    }

    //on récupère la fonction handleChange qui est mis à jour lorsqu'on fait une nouvelle recherche
    //initialisation de la connexion à l'API. 
    //On passe à la fonction handleChange l'attribut searchFood afin d'ajouter le texte à rechercher
    handleChange = (searchFood) => {
        this.setState.loading=true;

        fetch("https://world.openfoodfacts.org/cgi/search.pl?search_terms="+searchFood+"&search_simple=1&action=process&json=1")
        .then((resp) => resp.json())
        .then((data) => this.getFood(data));
    };
    //Initialisation de la fonction getFood afin de mettre à jour l'élément rechercher dans l'API
    getFood = (data) => {
        this.setState({food:data.products});
        console.log(this.state.food)
    }

    render(){
        return(
            <>

                <h1>Accueil</h1>

                {/* Récupération sur la page accueil du composant SearchBar et soulèvement de l'évènement
                 soit la récupération de la valeur de l'input de l'enfant "searchBar.js au parent Accueil.js via la fonction "onSearch" */}
                <SearchBar onSearch={this.handleChange} />


                {/* Récupérer un tableau de produit en effectuant un map dessus */}
                <div className="cardContainer">

                {
                    this.state.loading === true &&
                    <p>Chargement ...</p>
                }

                {
                    this.state.food != null &&
                    this.state.food.map(item => (
                        <div key={item.id} className="cardProduct" >

                {/* Récupération d'information du produit mais pas redirigé. */}
                <img src={item.image_front_thumb_url} alt={item.generic_name_fr} />


                {/* Lorsque le produit est récupéré, il est encadré d'un Link qui permet de rediriger 
                le produit vers la page "Produit" */}            
                        <Link to={'/Produit/'+item.id}><h2 >{item.generic_name_fr}</h2></Link>

   
                        </div>
                    ))
                }
                </div>
                
            </>
        )
    }
}

export default Accueil;