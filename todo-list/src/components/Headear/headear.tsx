import '../../index.css';

export const Headear = () =>{
    return(
        <>
            <header className='bg-blue-950 p-7'>
                <nav className='mx-10 flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <h1 className="text-white text-4xl">Organaice</h1>
                        <span className="material-symbols-outlined text-white h-4">receipt_long</span>
                    </div>
                    <ul className='flex justify-between text-gray-400 gap-3'>
                        <li>Home</li>
                        <li>Redes Sociais</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}