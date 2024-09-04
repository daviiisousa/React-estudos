type InputFormProps ={
    type: "date" | "text"
    placeholder?: string,
    name: string,
    id: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export const InputForm = ({id, name, placeholder, type, onChange}: InputFormProps) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className="rounded-md px-5 py-1 w-[100%] col-span-3"
            name={name}
            id={id}
            onChange={onChange} 
        />
    )
}
