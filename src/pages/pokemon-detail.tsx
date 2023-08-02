import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom'; // importation d'éléments provenants de la librairie React
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import formatDate from '../helpers/helpers/format-date';
import formatType from '../helpers/helpers/format-type';
  
type Params = { id: string }; // définition d'un type pour l'id que l'on récupère depuis l'url
  
//route pour typer le paramètre recu depuis le routeur avec RouteComponentProps, donc une donnée qui vient (du routeur) de l'url
const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {

    //on dit que par défault le state contient la valeur null, et la synthaxe permet de dire à typescript que cet objet est soit un pokémon, ou la valeur null
  const [pokemon, setPokemon] = useState<Pokemon|null>(null);
  
  //hook d'effet dans lequel une boucle permet de retrouver un pokémon avec l'identifiant passé en paramètre
  //dès que le paramètre d'un url correspond à l'identifiant d'un pokémon, on l'affecte au state du composant grâce à la méthode setPokémon
  //et donc si aucun ne match, la vlauer renverra null
  useEffect(() => {
    POKEMONS.forEach(pokemon => {
      if (match.params.id === pokemon.id.toString()) {
        setPokemon(pokemon);
      }
    })
  }, [match.params.id]);
    

  return (
    <div>
      { pokemon ? ( // opérateur ternaire pour vérifier si on trouve un pokémon on l'affiche
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ pokemon.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/pokemons/edit/${pokemon.id}`} className="btn btn-floating halfway-fab waves-effect waves-light">
                  <i className="material-icons">edit</i>
                  </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ pokemon.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>Points de vie</td> 
                        <td><strong>{ pokemon.hp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Dégâts</td> 
                        <td><strong>{ pokemon.cp }</strong></td> 
                      </tr> 
                      <tr> 
                        <td>Types</td> 
                        <td>
                          {pokemon.types.map(type => (
                           <span key={type} className={formatType(type)}>{type}</span> //utilisation des methodes factorisees car même logique ici
                          ))}</td> 
                      </tr> 
                      <tr> 
                        <td>Date de création</td> 
                        <td>{formatDate(pokemon.created)}</td>  {/* utilisation des methodes factorisees car même logique ici */}                 
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action">
                  <Link to="/">Retour</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">Aucun pokémon à afficher !</h4> //si aucun pokémon n'est trouvé, nous renvoyons ce message
      )}
    </div>
    
  );
}
  
export default PokemonsDetail;