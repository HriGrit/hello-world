import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/Pricing";
import Working from "@/components/working";

export default function Home() {
  return (
    <div className="">
      <Navbar >
        <div className="">
          <div className="bg-[#F9F9F9]">
            <Hero />
          </div>
          <Working />
          <Pricing />
        </div>
      </Navbar>
    </div>
  );
}