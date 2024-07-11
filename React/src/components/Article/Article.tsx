import './Article.css'

export const Article = ({title = 'valo padrao', sobre = 'valor padrao', foto = 'nada'}) => {
    return(
        <>
            <section>
                <img className='images-section' src={foto} alt="" />

                <div className="article-info">
                    <h2>{title}</h2>
                    <h3>{sobre}</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis corporis consequuntur, quo, illum aperiam, voluptas beatae vel repellendus neque alias reprehenderit labore nostrum magnam voluptatum officia fugit reiciendis iure!</p>
                </div>
            </section>
        </>
    )
}