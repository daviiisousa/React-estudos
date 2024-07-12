import './Article.css'

export const Article = ({title = 'valo padrao', sobre = 'valor padrao', foto = 'nada', descricao = '', id = ''}) => {
    return(
        <>
            <section>
                <img className='images-section' src={foto} alt="" />

                <div className="article-info">
                    <p>{id}</p>
                    <h2>{title}</h2>
                    <h3>{sobre}</h3>

                    <p>{descricao}</p>
                </div>
            </section>
        </>
    )
}