import { Article } from './components/Article/Article';
import {Navbar} from './components/Navbar/navbar'
import './style/App.css'

import imgHTML from './assets/pexels-pixabay-270404.jpg'
import imgJS from './assets/pexels-markusspiske-2004161.jpg'
import imgCSS from './assets/pexels-negativespace-92905.jpg'


function App() {
  return (
    <>
      <Navbar />
      <section id='section'>
        <Article
        foto={imgHTML} 
        title='HTML'
        sobre='Linguagem de marcaçao'
        />
        <Article
        foto={imgCSS} 
        title='CSS'
        sobre='Linguagem de estilizaçao'
         />
         <Article 
         foto={imgJS}
         title='JavaScript'
         sobre='Linguagem de programaçao'
         />
      </section>
    </>
  );
};

export default App;
