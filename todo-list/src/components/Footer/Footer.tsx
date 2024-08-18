export const Footer = () => {
    return(
        <>
            <footer className="p-8 flex items-center bg-blue-900 h-[40vh]">
                <div className="w-[50%] ">
                    <h1 className="text-white text-7xl">Davi Sousa Alves</h1> 
                </div>
                <div className="grid grid-cols-1 gap-10">
                    <a className="text-5xl text-white" href="http://" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className="text-5xl text-white" href="http://" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a className="text-5xl text-white" href="http://" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                </div>      
            </footer>
        </>
    )
}