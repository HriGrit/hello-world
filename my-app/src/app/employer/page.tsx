import Navbar from '@/components/navbar';
import React from 'react';

import Hero from '@/components/Hero';

export default function Employer() {
    return (
        <Navbar>
            <div className="py-12 w-1/3 mx-auto space-y-2">
                <h2 className="text-4xl leading-snug font-[500]">Find Helpers in India</h2>
                <h5 className="font-[400] text-lg">Explore profiles and contact helpers directly</h5>
            </div>
        </Navbar>
    );
}
