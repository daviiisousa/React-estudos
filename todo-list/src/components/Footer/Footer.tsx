import instagram from '../../assets/logo-instagram.jpg'
import facebook from '../../assets/logo-facebook.jpg'
import github from '../../assets/logo-github.jpg'

export const Footer = () => {
    return(
        <>
            <footer className="p-8 flex items-center bg-blue-900">
                <div className="w-[50%]">
                    <h1 className="text-white text-7xl">Davi Sousa Alves</h1> 
                </div>
                <div className="grid grid-cols-1 gap-10">
                    <a 
                    href="https://www.instagram.com/daviiisousa18/" 
                    target="_blank">
                        <img 
                        src={instagram} 
                        alt="logo do instagram" 
                        className='w-[80px] rounded-[50%]'/>
                    </a>
                    <a 
                    href="https://www.facebook.com/profile.php?id=100031301692757&locale=pt_BR" 
                    target="_blank" >
                        <img 
                        src={facebook} 
                        alt="logo do facebook"
                        className='w-[80px] rounded-[50%]' />
                    </a>
                    <a 
                    href="https://github.com/daviiisousa" 
                    target="_blank">
                    <img 
                        src={github} 
                        alt="logo do github"
                        className='w-[80px] rounded-[50%]' />
                    </a>
                </div>      
            </footer>
        </>
    )
}