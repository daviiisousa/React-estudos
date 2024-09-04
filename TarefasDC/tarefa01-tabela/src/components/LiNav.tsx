type Children ={
    children: React.ReactNode
}

export const LiNav = ({children}: Children) => {
    return(
        <li className=" hover:bg-red-400 px-5 py-3 rounded-md hover:text-xl">{children}</li>
    )
}