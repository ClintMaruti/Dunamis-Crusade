// import Parents from "./assets/parents.png";
import { ArrowDown } from "lucide-react";
import PhonePoster from "./assets/phone-poster-bg.png";
import Poster from "./assets/poster-bg.png";
import { ButtonLink } from "./components/ui/button-link";

function App() {
    return (
        <div className="md:h-screen bg-primary relative md:overflow-hidden">
            <div className="w-full flex justify-center items-center overflow-hidden">
                <img src={Poster} width="100%" className="hidden md:flex" />
                <img src={PhonePoster} width="100%" className="md:hidden" />
            </div>
            <div className="flex flex-col items-center justify-center text-white md:hidden -mt-16">
                <p>Registration ongoing</p>
                <ArrowDown className="animate-bounce" />
            </div>
            <div className="md:absolute bottom-3 md:flex gap-4 justify-center px-2 w-full mb-3">
                <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-md my-4 md:my-0">
                    <h5>Normal registration</h5>
                    <ButtonLink to="https://forms.gle/ux8QF9PeiKLWVFRY8" className="cursor-pointer">
                        Register Now
                    </ButtonLink>
                </div>
                <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-md my-4 md:my-0">
                    <h5>Click if you want to become a volunteer</h5>
                    <ButtonLink to="https://forms.gle/aL8x9c83nkJD9Lw4A" className="cursor-pointer">
                        Volunteer Registration
                    </ButtonLink>
                </div>
                <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-md">
                    <h5>Click if you want to partner in giving</h5>
                    <ButtonLink to="https://forms.gle/4Lu7GSLEzF1oJAkB7" className="cursor-pointer">
                        Patnership Registration
                    </ButtonLink>
                </div>
            </div>
            <div className=" w-full bottom-3 flex flex-col justify-center items-center">
                {/* <div className="w-full flex justify-center items-center py-2 px-2 bg-primary bg-yellow-300 my-10">
                    <p className="text-center md:text-start">
                        <span className="font-bold">Dates:</span> 16th - 17th May | <span className="font-bold">Venue:</span> Kasarani Stadium Nairobi
                    </p>
                </div> */}
            </div>
        </div>
    );
}

export default App;

// bg-secondaryImg bg-cover bg-center
{
    /* <div className="w-3/4 md:w-1/2">
                    <img src={Parents} alt="parents" />
                </div> */
}
{
    /* <div className="flex flex-col justify-center items-center">
                    <h1 className="md:text-8xl text-5xl font-black  z-10">Nairobi,Kenya</h1>
                    <h2 className="md:text-4xl text-lg font-extrabold ">Healing and Deliverance Crusade</h2>
                    <h5>With</h5>
                    <h5 className="text-base sm:text-lg font-bold ">Dr. Pst. Paul and Dr. Mrs. Becky Enenche</h5>
                </div> */
}
