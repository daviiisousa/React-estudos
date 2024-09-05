
type InputFormProps = {
    type: "text" | "number",
    name: string,
    id: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export const InputForm = ({id, name, onChange, placeholder, type}: InputFormProps) => {

    return(
        <input
            className="px-3 hover:border-blue-500 border-2 rounded-md col-span-2 py-1"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
    )
}