import React from 'react'

const Card = ({ user }) => {
    if (!user) {
        alert("Formani to'ldiring...");
        return null;
    }
    else if (user.name == ''|| user.email == '' || user.age == '') {
        return alert("Formani to'ldiring....🤬🤬🤬🤬😡😡😡")
    }
    return (
        <div>
            <div className="border-2 hov rounded-xl p-10 m-auto max-w-[100%] bg-[#00ffff] transition duration-300">
                <h2 className='capitalize text-xl font-bold text-white'>Ismi: {user.name}</h2>
                <p className='capitalize text-xl font-bold text-white'>Email: {user.email}</p>
                <p className='capitalize text-xl font-bold text-white'>Yoshi: {user.age}</p>
            </div>
        </div>
    )
}

export default Card
