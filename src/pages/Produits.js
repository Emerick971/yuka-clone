import React from 'react';
import './Produits.css';

//Initialisation de la page produit qui affichera les produits et leurs informations à l'utilisateur

//Initialisation du constructeur avec comme paramêtre l'élément (slug) qui récupère le produit ciblé par son id via l'API
class Produit extends React.Component{
constructor(props){
    super(props);

    this.state = {
        info: []
    }
}

//Récupération du produit ciblé par son id. 
componentDidMount() {
    fetch("https://world.openfoodfacts.org/api/v0/product/"+this.props.match.params.slug+".json")
    .then((resp)=> resp.json())

    //Mise à jour du produit ciblé par son id
    .then((data) => this.setState({info:data.product}));
}

nutriScore(score){
    if(score == null){
        return "information non communiquée";
    }else{
        return score;
    }
}

displayPercent(percent){
    if(percent < 1){
        return "<1";
    }else{
        return Math.trunc(percent);
    }
}

    render(){
        return(
        <>
        {this.state.info.length !== 0 &&
            <div className="container">
            {/* Récupération des informations sélectionnées concernant le produit, et affichées en passant passant par son id */}
                <div className="header">
                    <img src={this.state.info.image_front_url} alt={this.state.info.generic_name} />
                    <div className="ref">
                    <div className="headerName">
                        <h1>{this.state.info.generic_name}</h1>
                    </div>
                    <div className="headerScore">
                        <p>Nutriscore : {this.nutriScore(this.state.info.nutriscore_grade)} </p>
                    </div> 
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Pourcentage</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        this.state.info.ingredients.map((ingredient)=>
                        <tr key={ingredient.id}>
                            <td>{ingredient.text.replaceAll("_","").toUpperCase()}</td>
                            <td>{this.displayPercent(ingredient.percent_estimate)}%</td>
                        </tr>
                        )
                    }
                    </tbody>
                    </table>

                    </div>
                </div>

                <div className="body">
                    
                </div>   

            </div>
        }
        </>
        )
        
    }
}

export default Produit;