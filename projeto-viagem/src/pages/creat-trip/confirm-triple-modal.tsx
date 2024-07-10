import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";

interface confirmTripleModalProps{
    closeConfirmModal: () => void
    creatTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripleModal({
    closeConfirmModal,
    creatTrip,
}: confirmTripleModalProps){
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>

             <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>

               <div className='space-y-2'>
                <div className='flex text-center justify-between'>
                 <h2 className='text-lg font-semibold'>
                  Confirmar criaçao de viagem
                 </h2>
                 <button onClick={closeConfirmModal} type='button'>
                   <X className='size-5 text-zinc-400' />
                 </button>
               </div>
                <p className='text-sm text-zinc-400'>
                Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>Florianópolis, Brasil</span> nas datas de <span className='font-semibold text-zinc-100'>16 a 27 de Agosto de 2024 </span> preencha seus dados abaixo:
                </p>
               </div>

               <form onSubmit={creatTrip} className='space-y-3'>
                <div className='h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2'>
                  <User className='text-zinc-400 size-5' />
                  <input  
                  name='name' 
                  placeholder="Seu nome completo" 
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"/>
                </div>

                <div className='h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2'>
                  <Mail className='text-zinc-400 size-5' />
                  <input 
                  type="email" 
                  name='email' 
                  placeholder="Seu e-mail pessoal" 
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"/>
                </div>

                <button  type='submit' className='bg-lime-300 text-lime-950 w-full justify-center rounded-lg px-5 h-11 font-medium flex        items-center gap-2 hover:bg-lime-400'>
                  Confirmar criaçao de viagem
                </button>
              </form>
            
            </div>
           </div>
    )
}