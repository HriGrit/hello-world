// components/Navbar.js
"use client"
import React from 'react';
import Link from 'next/link';

import logo from '../../assets/logo.svg'
import Image from 'next/image'

function Navbar({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className='bg-theme px-12'>
                <nav className='py-2 flex text-white justify-between text-xl'>
                    <div className='flex gap-8'>
                        <Image
                            src={logo}
                            height={60}
                            width={60}
                            alt="hi" />
                        <div className='my-auto flex space-x-4'>
                            <Link href='/'>
                                <p>Home</p>
                            </Link>
                            <Link href='#pricing'>
                                <p>Pricing</p>
                            </Link>
                            <Link href="#working">
                                <p>How it Works</p>
                            </Link>
                        </div>
                    </div>
                    <div className='flex space-x-4 my-auto'>
                        <Link href="/register">
                            <p>Register</p>
                        </Link>
                        <Link href="/login">
                            <p>Login</p>
                        </Link>
                    </div>
                </nav>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Navbar;
