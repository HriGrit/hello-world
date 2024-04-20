import React from 'react';

function Pricing() {
    return (
        <div className="mb-32" id="pricing">
            <div className="flex justify-center items-center pt-8 pb-16">
                <h1 className="text-4xl font-bold">PRICING</h1>
            </div>

            <div className="flex justify-center">
                <p className="text-center text-xl font-medium mb-8">Our Plans</p>
            </div>

            <div className="flex justify-center space-x-10">
                <div className="w-80 rounded-lg shadow-md p-8 border-[1px] flex flex-col justify-around">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-medium">Standard</h3>
                        <p className="text-lg font-medium text-theme">INR 0</p>
                    </div>
                    <ul className="list-disc space-y-2 text-base">
                        <li>New profiles every 24h</li>
                        <li>Full database access - 1 profile</li>
                        <li>Personal space to manage your shortlist</li>
                        <li>Directly contact helper</li>
                    </ul>
                    <button className="w-full mt-4 py-2 rounded-md bg-theme text-white font-medium hover:bg-[#DB1752]">
                        Get Started
                    </button>
                </div>

                <div className="w-80 rounded-lg shadow-md p-8 border-[1px] flex flex-col justify-around">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-medium">Premium</h3>
                        <p className="text-lg font-medium text-theme">INR 100</p>
                    </div>
                    <ul className="list-disc space-y-2 text-base">
                        <li>All features of Standard Plan</li>
                        <li>Full database access - Unlimited profiles</li>
                        <li>Priority in customer support</li>
                        <li>100% refund upon dissatisfaction</li>
                    </ul>
                    <button className="w-full mt-4 py-2 rounded-md bg-theme text-white font-medium hover:bg-[#DB1752]">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
