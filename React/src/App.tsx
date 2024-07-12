import { Article } from './components/Article/Article';
import {Navbar} from './components/Navbar/navbar'
import './style/App.css'

import { useEffect, useState } from 'react';
import axios from 'axios';

interface APi{
  id: string;
  image_url: string;
  title: string;
  news_site: string;
  summary: string;
}

function App() {

  const[news, setNews] = useState([])

  useEffect(() =>{
    async function loadNews(){
     const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles')
     const dados = response.data.results

     console.log(dados);
     setNews(dados)
    }
    loadNews()
  }, [])

  return (
    <>
      <Navbar />
      
      <section id='section'>
         
        { news.map((items:APi) => {
            return(
              <Article key={items.id}
              foto={items.image_url} 
              title={items.title}
              sobre={items.news_site}
              descricao={items.summary}
              />
            )
        })}
      </section>
    </>
  );
};

export default App;
