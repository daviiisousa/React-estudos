import '../../index.css';

export const Headear = () =>{
    return(
        <>
            <header className='bg-blue-950 p-7'>
                <nav className='mx-10 flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <h1 className="text-white text-4xl">Organice</h1>
                        <span className="material-symbols-outlined text-white h-4">receipt_long</span>
                    </div>
                </nav>
            </header>
        </>
    )
}