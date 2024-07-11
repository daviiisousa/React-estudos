import styles from './StaticCards.module.scss'

interface StaticCardsProps{
    title: string;
    quantidade: number;
}

export const StaticCards = ({title, quantidade}: StaticCardsProps) => {
    return(
        <>
            <article className={styles.articleCards}>
                <h2>{title}</h2>
                <span>{quantidade}</span>
            </article>
        </>
    )
}