import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: FunctionComponent = () => {


  return (   
      <Router>
        <div>
          {/* La barre de navigation commun à toutes les pages   */}
          <nav>
            <div className='nav-wrapper teal'>
            <Link to="/" className="brand-logo center">Pokédex</Link>         
        </div>
        </nav>
        {/* Le système de gestion des routes de notre application */}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path ="/pokemons" component={PokemonList} />
          <Route exact path='/pokemons/edit/:id' component={PokemonEdit} />
          <Route path="/pokemons/:id" component={PokemonDetail} />
        {/* bien la mettre en dernier car si on la met en premier toute les routes vont etre redirigées vers cette page car on ne lui a pas mis de path */}
          <Route component={PageNotFound} /> 
        </Switch>
        </div>
      </Router>   
  )
}


export default App;

// const NbPokemons: FunctionComponent = () => {
//   const [pokemons, setPokemons] = useState<Pokemon[]>([])

 


//   return (
//     <p>Il y a {pokemons.length} de pokemons dans la variable</p>
//   )
// }

// const ListPokemons: FunctionComponent = (props) => {

//   return (
//     <>
//       <div className='container'>
//         <div className='row'>
//           {POKEMONS.map((pokemon, key) => ( 
//             <div className='col s6 m4' key = {key}>
//               <a className="waves-effect waves-light btn"><i className="material-icons left">
              
//               <li>{pokemon.name}</li>
//               </i>
//               </a>
//               <div>{pokemon.types}</div>
       
//             </div>
//           ))}
             

//             {/* // <div className='col s6 m4' key={id}>
//             //   <div className='card horizontal'>
//             //     <div className='card-image'>
//             //       <img src={picture} alt={name} />
//             //     </div>
//             //     <div className='card-stacked'>
//             //       <div className='card-content'>
//             //         <p>{name}</p>
//             //         <p><small>{created.toString()}</small></p>
//             //       </div>
//                 // </div>
//               // </div>
//             // </div> */}

//           {/* ))} */}
//         </div>
//       </div>
//     </>

//   )
// }






