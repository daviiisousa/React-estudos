type titleProps= {
    title: string
}

export const ContentHeader = ({title}: titleProps) =>{
    return(
        <>
            <div className="text-center mt-3">
                <h4>{title}</h4>
            </div>
        </>
    )
}