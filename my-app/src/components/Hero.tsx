export default function Hero() {
    return (
        <div className="py-12 w-1/3 mx-auto space-y-2">
            <h3 className="font-[400] text-xl">Looking for a House help?</h3>
            <h2 className="text-4xl leading-snug font-[500]">Find available Helpers & Maids in India</h2>
            <h5 className="font-[400]">Explore profiles and contact helpers directly</h5>
            <div className="text-white flex justify-around pt-4">
                <button className="rounded-xl p-2 bg-[#123750] min-w-[125px]">
                    <p>Employers</p>
                </button>
                <button className="rounded-xl p-2 bg-[#123750] min-w-[125px]">
                    <p>Helpers</p>
                </button>
            </div>
        </div>
    );
}