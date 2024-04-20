import Navbar from '@/components/navbar';
import React from 'react';

interface Employer {
    name: string;
    location: string;
    requirements: string;
    isFullTime: boolean;
    availability: string;
}

const employers: Employer[] = [
    {
        name: 'Gujrati Family - Mumbai',
        location: 'Mumbai',
        requirements: 'Looking for a Gujarati domestic helper who can cook Gujarati breakfast everyday',
        isFullTime: true,
        availability: 'Before Jan 14, 2024',
    },
    {
        name: 'Single Professional - Bangalore',
        location: 'Bangalore',
        requirements: 'Need help with cleaning and laundry twice a week (flexible days).',
        isFullTime: false,
        availability: 'As soon as possible',
    },
    {
        name: 'Young Couple - Delhi',
        location: 'Delhi',
        requirements: 'Looking for a live-in helper for childcare (newborn) and light housekeeping.',
        isFullTime: true,
        availability: 'After March 1st, 2024',
    },
    {
        name: 'Elderly Couple - Chennai',
        location: 'Chennai',
        requirements: 'Seeking a companion for elderly care and assistance with errands.',
        isFullTime: true,
        availability: 'Open to negotiation',
    },
    {
        name: 'Busy Family - Pune',
        location: 'Pune',
        requirements: 'Need help with cooking meals, after-school care for children (2 kids), and occasional pet care.',
        isFullTime: true,
        availability: 'Flexible (within next 2 months)',
    },
];

export default function Helper() {
    return (
        <Navbar>
            <div className="py-12 w-1/3 mx-auto space-y-2">
                <h2 className="text-4xl leading-snug font-[500]">Find Employers in India</h2>
                <h5 className="font-[400] text-lg">Explore employers and contact employers directly</h5>
            </div>
            <div className="mx-auto px-4 py-8">
                <div className="flex flex-col gap-4">
                    {employers.map((employer) => (
                        <div
                            key={employer.name}
                            className="rounded-lg shadow-md bg-white overflow-hidden border-[1px]"
                        >
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2">{employer.name}</h3>
                                <p className="text-gray-600 mb-2">
                                    {employer.location} - {employer.isFullTime ? 'Full-Time' : 'Part-Time'}
                                </p>
                                <p className="text-gray-600">{employer.requirements}</p>
                            </div>
                            <div className="flex items-center justify-between px-4 pb-4 border-t">
                                <span className="text-gray-500 text-sm">Available: {employer.availability}</span>
                                <button className="btn btn-primary">Contact Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Navbar>
    );
}
