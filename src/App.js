import './App.css';
import { Switch, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Produit from './pages/Produits';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* Utilisation de Route qui indique le composant à retourner */}
        <Route path="/" exact component={Accueil} />

        {/* Paramétrage de la route 'produit' avec un slug qui est l'id du produit récupéré via l'API
        à la page 'Produits.js'*/}
        <Route path="/Produit/:slug"  component={Produit} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
