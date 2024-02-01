import Parents from "./assets/parents.png";
import { ButtonLink } from "./components/ui/button-link";

function App() {
    return (
        <div className="h-screen w-full md:bg-[url('./assets/bg.png')] bg-[url('./assets/bg-small-one.png')] bg-cover  md:bg-cover bg-center">
            <div className="w-full h-screen flex justify-center items-center backdrop-brightness-50">
                {/* <div className="flex justify-center items-center -mt-40 w-1/2">
                    
                </div> */}
                <div className="flex flex-col justify-center">
                    <div className="absolute top-24 sm:top-4 m-auto left-0 right-0 md:flex md:justify-center md:items-center lg:w-1/2">
                        <img src={Parents} alt="parents" />
                    </div>
                    <div className="flex flex-col justify-center items-center z-10  sm:mt-52 text-white">
                        <h1 className="md:text-8xl text-5xl font-black  z-10">Nairobi,Kenya</h1>
                        <h2 className="md:text-4xl text-lg font-extrabold ">Healing and Deliverance Crusade</h2>
                        <h5>With</h5>
                        <h5 className="text-base sm:text-lg font-bold ">Dr. Pst. Paul and Dr. Mrs. Becky Enenche</h5>
                    </div>
                    <div className="flex flex-col gap-4 px-2">
                        <ButtonLink to="https://forms.gle/ux8QF9PeiKLWVFRY8" className="cursor-pointer">
                            Register Now
                        </ButtonLink>
                        <ButtonLink to="https://forms.gle/aL8x9c83nkJD9Lw4A" className="cursor-pointer">
                            Volunteer Registration
                        </ButtonLink>
                        <ButtonLink to="https://forms.gle/4Lu7GSLEzF1oJAkB7" className="cursor-pointer">
                            Patnership Registration
                        </ButtonLink>
                    </div>
                </div>
                <div className="absolute flex bottom-10 py-2 px-4 bg-primary bg-yellow-300 m">
                    <p className="text-center md:text-start">
                        <span className="font-bold">Dates:</span> 16th - 17th May | <span className="font-bold">Venue:</span> Kasarani Stadium Nairobi
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
