import Image from 'next/image'
import React from 'react'
import explore from '../../assets/explore.svg'
import subscribe from '../../assets/subscribe.svg'
import contact from '../../assets/contact.svg'

const Steps = () => {
    return (
        <div className="container mx-auto px-4 py-16" id="working">
            <h2 className="text-3xl text-center font-bold mb-8">3 Simple & Easy Steps to Find Your Helper</h2>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <span className="rounded-full border-2 border-theme p-2">
                        <Image src={explore} alt="explore" width={20} height={20} />
                    </span>
                    <h3 className="text-xl font-bold">Explore</h3>
                    <p className="text-gray-700">Browse through a wide range of profiles to find the perfect helper for your needs.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="rounded-full border-2 border-theme p-2">
                        <Image src={subscribe} alt="subscribe" width={20} height={20} />
                    </span>
                    <h3 className="text-xl font-bold">Subscribe</h3>
                    <p className="text-gray-700">Choose a subscription plan that fits your budget and get in touch with your chosen helper.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="rounded-full border-2 border-theme p-2">
                        <Image src={contact} alt="contact" width={20} height={20} />
                    </span>
                    <h3 className="text-xl font-bold">Contact</h3>
                    <p className="text-gray-700">Chat or video call with your helper to discuss your needs and book an appointment.</p>
                </div>
            </div>
            <div className="text-center mt-8 bg-theme text-white font-medium hover:bg-[#DB1752] mx-[40%] py-2 rounded-md">
                <a href="/register" className="btn btn-primary">Register Here</a>
            </div>
        </div>
    )
}

export default Steps
