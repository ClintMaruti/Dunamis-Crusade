import { ButtonLink } from "./components/ui/button-link";
// md:bg-[url('./assets/bg.png')] bg-[url('./assets/bg-small-one.png')]
function App() {
    return (
        <div className="h-screen w-full bg-purple-100 bg-main bg-cover md:bg-cover bg-center grid place-content-center">
            <div className="flex flex-col justify-center items-center">
                {/* <div className="absolute top-0 sm:top-0 m-auto left-0 right-0 md:flex md:justify-center md:items-center lg:w-1/2">
                        <img src={Parents} alt="parents" />
                    </div> */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="md:text-8xl text-5xl font-black  z-10">Nairobi,Kenya</h1>
                    <h2 className="md:text-4xl text-lg font-extrabold ">Healing and Deliverance Crusade</h2>
                    <h5>With</h5>
                    <h5 className="text-base sm:text-lg font-bold ">Dr. Pst. Paul and Dr. Mrs. Becky Enenche</h5>
                </div>
                <div className="flex flex-col gap-4 px-2 w-full">
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
                <div className="w-full flex justify-center items-center py-2 px-2 bg-primary bg-yellow-300 my-10">
                    <p className="text-center md:text-start">
                        <span className="font-bold">Dates:</span> 16th - 17th May | <span className="font-bold">Venue:</span> Kasarani Stadium Nairobi
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
