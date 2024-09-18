import { useState } from "react"
import Card from "../card/Card"

const Forma = () => {

    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleAge = (event) => {
        setAge(event.target.value)
    }

    const handleSave = (event) => {
        event.preventDefault()

        const userForm = {
            name: name,
            email: email,
            age: age,
            id: Date.now()
        }

        const copied = [...users]
        copied.push(userForm)
        setUsers(copied)

        setName('')
        setEmail('')
        setAge('')
    }

    return (
        <div>
            <form className="border-4 border-[#00ffff] rounded-md p-5 max-w-[80%] m-auto text-center mb-16">
                <div className='max-w-[100%] border-2 rounded-md p-3 border-orange-600 mb-5 hover:border-green-600'><input onChange={handleName} value={name} className='w-[100%] outline-none' type="text" placeholder='Ismingizni kiriting ...' /></div>
                <div className='max-w-[100%] border-2 rounded-md p-3 border-orange-600 mb-5 hover:border-violet-600'><input onChange={handleEmail} value={email} className='w-[100%] outline-none' type="email" placeholder='Emailingizni kiriting ...' /></div>
                <div className='max-w-[100%] border-2 rounded-md p-3 border-orange-600 mb-5 hover:border-blue-600'><input onChange={handleAge} value={age} className='w-[100%] outline-none' type="number" placeholder='Yoshingizni kiriting ...' /></div>
                <button onClick={handleSave} className='bg-green-500 text-white py-2 px-12 rounded-md hover:bg-blue-500'>Saqlash</button>
            </form>
            <div className="border-4 border-yellow-500 rounded-xl py-16 px-5 flex flex-wrap m-auto max-w-[80%]">
                {users.length > 0 && users.map((v, i) => (
                    <Card user={v} />
                ))}
            </div>
        </div>
    )
}

export default Forma
