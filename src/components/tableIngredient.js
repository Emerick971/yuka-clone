import React, { Component } from 'react';

class TableIngredient extends Component {

    displayPercent(percent){
        if(percent < 1){
            return "<1";
        }else{
            return Math.trunc(percent);
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render(){

        return (

            <>

                <table>
                    <tr>
                        <th>Ingredient</th>
                        <th>Pourcentage</th>
                    </tr>

                    {/*this.props.ingredients.map((ingredient)=>(

                        <tr>
                            <td>{ingredient.text.replaceAll("_","")}</td>
                            <td>{this.displayPercent(ingredient.percent_estimate)}%</td>
                        </tr>
                    ))*/} 

                </table>

            </>

        );
    }
}

export default TableIngredient;