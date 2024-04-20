"use client"
import React, { useState } from 'react';
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import google from '../../assets/Google.svg'
import Link from 'next/link';


export default function login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border-2 border-theme rounded-xl w-1/2'>
                <div className='bg-theme rounded-t-lg'>
                    <Image
                        src={logo}
                        height={60}
                        width={60}
                        className='mx-auto py-2'
                        alt="hi" />
                </div>
                <div className='p-8'>
                    <h1 className='text-center text-xl font-[500]'>Login</h1>
                    <hr className='bg-theme h-1 w-1/3 mx-auto my-2' />
                    <h1 className='text-md font-[400] my-4'>Login with Google</h1>
                    <div className=' border-[1px] rounded-lg p-2 mx-2 py-3'>
                        <Image
                            src={google}
                            height={30}
                            width={30}
                            className='mx-auto'
                            alt="google" />
                    </div>
                    <h1 className='text-md font-[400] my-4'>Or Login with Email</h1>
                    <div className='mx-2'>
                        <form>
                            <div className='flex flex-col gap-4'>
                                <input type="email" placeholder='Email' className='border-[1px] rounded-lg p-2' />
                                <input type="password" placeholder='Password' className='border-[1px] rounded-lg p-2' />
                                <button type='submit' className='bg-theme text-white rounded-lg p-2'>
                                    <Link href='/'>
                                        Log In
                                    </Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}