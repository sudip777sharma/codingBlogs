import React, { useState, useEffect } from 'react'

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        if (e.target[0].value !== '' && e.target[1].value !== '' && e.target[2].value !== '') {
            await fetch('/api/postcontact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: e.target[0].value,
                    email: e.target[1].value,
                    concern: e.target[2].value,
                }),
            })
        } else {
            alert("please fill form completely")
        }
    }
    return (
        <div className='h-screen p-5'>
            <form
                className='bg-gray-300 h-72 mt-16 rounded-xl p-5'
                onSubmit={handleSubmit}>
                <div
                    className='flex justify-center items-center'>
                    <label
                        className='font-bold text-xl'
                    >Name:</label>
                    <input
                        className='rounded-lg m-2 p-2 outline-none'
                        placeholder='name'
                        type="text" />
                </div>
                <div
                    className='flex justify-center items-center'>
                    <label
                        className='font-bold text-xl'
                    >Email:</label>
                    <input
                        className='rounded-lg m-2 p-2 outline-none'
                        placeholder='Your email'
                        type="email" />
                </div>
                <div
                    className='flex justify-center items-center'>
                    <label
                        className='font-bold text-xl'
                    >Concern:</label>
                    <textarea
                        className='rounded-lg m-2 p-2 outline-none'
                        placeholder='Your concern'
                    ></textarea>
                </div>
                <div
                    className='flex justify-center items-center'>
                    <button
                        className='bg-green-600 text-white p-2 rounded-lg m-4 font-bold'
                        type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact