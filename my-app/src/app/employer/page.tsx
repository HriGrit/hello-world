import Navbar from '@/components/navbar';
import React from 'react';

interface Profile {
    name: string;
    experience: number;
    location: string;
    role: string;
    isActive: boolean;
    description: string;
}

const profiles: Profile[] = [
    {
        name: 'Rashmi K-46 yr',
        experience: 9,
        location: 'Delhi',
        role: 'Domestic Helper - Finished Contract',
        isActive: true,
        description: "I am Rashmi K, 47 years old, seperated, and have 4 children. I am from the Philippines.I've been working in Hong Kong for 9 years. I am a hardworking, honest, and trustworthy person. I can cook Chinese and Western food. I can take care of children and pets. I can do all the household chores. I can work independently and can follow instructions. I am looking for a new employer to work with. I am available for an interview anytime. Thank you."
    },
    {
        name: 'Vikas S - 32 yr',
        experience: 5,
        location: 'Mumbai',
        role: 'Driver & Handyman',
        isActive: false,
        description: "Hi, I'm Vikas, a 32-year-old responsible and punctual driver with 5 years of experience. I'm proficient in navigating city traffic and ensuring passenger safety. Additionally, I'm skilled in basic handyman tasks like furniture assembly, minor repairs, and gardening. I'm a quick learner and eager to take on new challenges. I'm available full-time and open to relocation opportunities. Let me know if you're interested!",
    },
    {
        name: 'Priya M - 28 yr',
        experience: 3,
        location: 'Chennai',
        role: 'Elderly Caregiver',
        isActive: true,
        description: "I'm Priya, a compassionate and attentive caregiver with 3 years of experience. I'm passionate about providing quality care for seniors and ensuring their well-being. I have experience assisting with daily living activities, medication reminders, meal preparation, and companionship. I'm also trained in basic first aid and CPR. I'm highly adaptable and can personalize my care approach to each individual's needs. I'm available for full-time or part-time positions. Feel free to reach out if you have any questions.",
    },
];

export default function Employer() {
    return (
        <Navbar>
            <div className="py-12 w-1/3 mx-auto space-y-2">
                <h2 className="text-4xl leading-snug font-[500]">Find Helpers in India</h2>
                <h5 className="font-[400] text-lg">Explore profiles and contact helpers directly</h5>
            </div>
            <div className="flex flex-col space-y-4 mb-32">
                {profiles.map((profile) => (
                    <div
                        key={profile.name}
                        className="flex items-center p-4 border rounded-lg shadow-md hover:bg-gray-100 mx-32"
                    >
                        <div className="flex-shrink-0 mr-4">
                            <img
                                className="w-16 h-16 rounded-full object-cover"
                                src="https://picsum.photos/id/237/200/300"
                                alt="Profile picture"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <h4 className="text-lg font-medium">{profile.name}</h4>
                            <p className="text-gray-600">{profile.role}</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">
                                    {profile.experience} yr experience
                                </span>
                                <span className="rounded-full px-2 py-1 bg-green-500 text-white">
                                    {profile.isActive ? 'Very Active' : 'Inactive'}
                                </span>
                            </div>
                            <p className="text-gray-600">{profile.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Navbar>
    );
}
