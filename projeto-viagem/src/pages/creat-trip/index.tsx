
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripleModal } from './confirm-triple-modal'
import { DestinatioAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsSteps } from './steps/invite-guest-steps'

export function CreatTripPage() {
  
  const navigate = useNavigate()  

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [emailsToImvite, setEmailsToInvite] = useState([
    'marcos55@gmail.com'
  ])
  const [isConfirmTripleModalOpen, setIsconfirmTripModalOpen] = useState(false)

  function openGestsInputOpen() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInputs(){
    setIsGuestsInputOpen(false)
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false)
  }

  function openConfirmModal(){
    setIsconfirmTripModalOpen(true)
  }

  function closeConfirmModal(){
    setIsconfirmTripModalOpen(false)
  }

  function addToEmailNewInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data =new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return 
    }

    if(emailsToImvite.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToImvite,
      email
    ])
    
    event.currentTarget.reset()
  }

  function removeEmailsToInvite(emailToRemove: string){
    const nemEmailList = emailsToImvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(nemEmailList)
  }

  function creatTrip(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
          </div>

          <div className='space-y-4'>
             <DestinatioAndDateStep 
                closeGuestsInputs={closeGuestsInputs}
                isGuestsInputOpen={isGuestsInputOpen}
                openGestsInputOpen={openGestsInputOpen}
             />

             {isGuestsInputOpen && (
                <InviteGuestsSteps 
                    emailsToImvite={emailsToImvite}
                    openConfirmModal={openConfirmModal}
                    openGuestsModal={openGuestsModal}
                />
             )}

          </div>

          <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-500 underline" href="#">termos de uso</a> e <a className="text-zinc-500 underline" href="#">políticas de privacidade</a>.
          </p>
         
      
          {isGuestsModalOpen && (
            <IviteGuestsModal
                emailsToImvite={emailsToImvite}
                addToEmailNewInvite={addToEmailNewInvite}
                closeGuestsModal={closeGuestsModal}
                removeEmailsToInvite={removeEmailsToInvite}
            />
          )}

          {isConfirmTripleModalOpen &&(
            <ConfirmTripleModal 
                closeConfirmModal={closeConfirmModal}
                creatTrip={creatTrip}
            />
          )}
        </div>
    </div>

  )
}


