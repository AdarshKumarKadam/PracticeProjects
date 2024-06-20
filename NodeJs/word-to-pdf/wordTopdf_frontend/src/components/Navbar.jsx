import React from 'react'

const Navbar = () => {
    return (

        <>
            <div className="max-w-screen-2xl flex flex-row justify-between mx-auto container fixed px-6 md:px-40  items-center h-16 shadow-md bg-slate-700 ">
                <div className="flex flex-row cursor-pointer">
                    <span className='text-slate-300 font-bold text-2xl'>word</span>
                    <p className='text-green-500 font-bold text-2xl'>To</p>
                    <span className='text-slate-300 font-bold text-2xl' >pdf</span>
                </div>
                <div className='text-slate-300 cursor-pointer font-bold text-xl hover:scale-125 duration-300'>Home</div>
            </div>
        </>
    )
}

export default Navbar

// flex 
{/*  */ }
