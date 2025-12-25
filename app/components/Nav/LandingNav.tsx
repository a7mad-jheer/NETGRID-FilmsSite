
import ButtonAnim from "../ButtonAnimations/ButtonAnim";
import Logo from "../defaults/Logo";

export default async function LandingNav() {

  return (
    <>
      <header className="flex justify-between items-center p-3 bg-gray-900/50 backdrop-blur-md rounded-lg fixed h-16 z-50 w-2/3 left-1/2 -translate-x-1/2 top-5">
          <Logo href="/LandingPage"/>
          <div className="flex gap-4 md:gap-6">
            <ButtonAnim
              label="Login"
              className="flex-initial hover:bg-white hover:text-black transition-colors duration-300"
              link="/loginPage"
            />
            <ButtonAnim
              label="Sign up"
              className="flex-initial hover:bg-white hover:text-black transition-colors duration-300"
              link="/signup"
            />
          </div>
        </header>
    </>
  );
}


