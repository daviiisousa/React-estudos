import { StaticCards } from '../Static-cards/StaticCards'
import styles from './Header.module.scss'

export const Header = () => {
    return(
    <>
        <header>
            <div className={styles.conteinerHello}>
                <div>
                    <h1>My Todo</h1>
                    <span>Bem vindo, Davi</span>
                </div>

                <div>
                <StaticCards
                    title='tarefas feitas'
                    quantidade={7}
                />
                <StaticCards
                    title='tarefas a fazer' 
                    quantidade={10}
                />
                <StaticCards 
                    title='total de tarefas'
                    quantidade={17}
                />
            </div>
            </div>

           
        </header>
    </>

    )
}