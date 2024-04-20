"use client"
import React, { useState } from 'react';
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import employer from '../../assets/employer.svg'
import helper from '../../assets/helper.svg'

import Link from 'next/link';

export default function Register() {
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
                    <h1 className='text-center text-3xl font-[400]'>Register</h1>
                    <hr className='bg-theme h-1 w-1/3 mx-auto my-2' />
                    <div className='flex gap-8 m-4'>
                        <div className='rounded-xl shadow-lg p-8 w-1/2 text-center flex flex-col justify-between border-[1px] gap-2'>
                            <Link href='/register/employer'>
                                <div>
                                    <Image
                                        src={employer}
                                        height={80}
                                        width={80}
                                        className='mx-auto py-2'
                                        alt="hi" />
                                </div>
                                <p className='text-2xl font-[600] text-theme'>Employer</p>
                                <p>Get a chance to freely choose your future employer and be hired.</p>
                            </Link>
                        </div>
                        <div className='rounded-xl shadow-lg p-8 w-1/2 text-center flex flex-col justify-around border-[1px] gap-2'>
                            <Link href="/register/helper">
                                <div>
                                    <Image
                                        src={helper}
                                        height={80}
                                        width={80}
                                        className='mx-auto py-2'
                                        alt="hi" />
                                </div>
                                <p className='text-2xl font-[600] text-theme'>Helper</p>
                                <p>Be in touch with many candidates and connect with the right one.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}