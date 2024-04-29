// import Parents from "./assets/parents.png";
import { ArrowDown } from "lucide-react";
import PhonePoster from "./assets/phone-poster-bg-compressed.png";
import Poster from "./assets/poster-bg-compressed.png";
import { ButtonLink } from "./components/ui/button-link";

function App() {
    return (
        <div className="md:h-screen bg-primary relative md:overflow-hidden">
            <div className="w-full flex justify-center items-center overflow-hidden">
                <img src={Poster} width="100%" className="hidden md:flex" />
                <img src={PhonePoster} width="100%" className="md:hidden" />
            </div>
            <div className="flex flex-col items-center justify-center text-white md:hidden -mt-20">
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
                    <h5>Click to be a volunteer</h5>
                    <ButtonLink to="https://chat.whatsapp.com/EbMVHOKv22nIAJLhcaNcJP" className="cursor-pointer">
                        Volunteer Registration
                    </ButtonLink>
                </div>
                <div className="flex flex-col gap-2 bg-white p-3 rounded-md shadow-md">
                    <h5>Click to be a partner</h5>
                    <ButtonLink to="https://chat.whatsapp.com/GhADCxo7bIt4cYOIUwAj3I" className="cursor-pointer">
                        Patnership Registration
                    </ButtonLink>
                </div>
            </div>
            <div className=" w-full bottom-3 flex flex-col justify-center items-center"></div>
        </div>
    );
}

export default App;
