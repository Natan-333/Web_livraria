import logo from './';
import './App.css';
import Home from './componentes/Home';
import Livros from './componentes/Livros';
import Foter from './componentes/Footer';
//importes

 export default function  App() {

  const tituhom="Biblioteca"
  const parag="Seja bem-vindo a Blibioteca"
  const livros=['HarryPotter','Senhor dos aneis','Berserk']
  const rodape="Natan Cruz FIAP"
  return (
    <div>
      <Home tituhom={tituhom}/>
      <Home parag={parag}/>
      <Livros livros={livros}/>
      <Foter rodape={rodape}/> 
    </div>

    
  );
}



