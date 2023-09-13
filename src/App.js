/**
 * @Author: Your name
 * @Date:   2023-09-12 22:16:05
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-09-13 12:16:50
 */

import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <section className='hero is-primary'> 
    <div className='hero-body'>
    <div className="App">
     <NavBar/>
     <ItemListContainer className='title' greeting = {'Bienvenidos'}/>
    </div>
    </div>
    </section>
  );
}

export default App;
