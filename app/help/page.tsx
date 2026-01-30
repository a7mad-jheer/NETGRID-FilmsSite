import Footer from "@/components/LandingPage/Footer/Footer";
import { SpotlightPreview } from "@/components/Dashboard/global/SotlightBg";
import LandingNav from "@/components/LandingPage/LandingNav";


export default function HelpPage() {
  return (
    <SpotlightPreview>
      <LandingNav />

      <div className="relative flex flex-col min-w-screen items-center">
        <section className="w-full  bg-black/10 backdrop-blur-md pt-50 pb-20 px-4 border-t-3 inset-shadow-lime-300">
          <div className="max-w-4xl mx-auto">
            {/* العنوان */}
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Help Center
            </h1>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Find answers to common questions and learn how to get the most out
              of our platform.
            </p>

            {/* FAQ */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Why do I need to sign up?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Creating an account allows you to explore movies, save
                  favorites, and enjoy personalized recommendations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  How can I create an account?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Simply click on the Sign Up button, fill in your details, and
                  start discovering amazing movies.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  I forgot my password. What should I do?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Use the password recovery option on the login page to reset
                  your password easily.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  How can I contact support?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  If you need further assistance, please contact us through the
                  Contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </SpotlightPreview>
  );
}
