import Footer from "../../components/DashboardFolder/Footer/Footer";
import { SpotlightPreview } from "../../components/defaults/SotlightBg";
import DashboardNav from "../../components/Nav/LandingNav";

export default function about() {
  return (
    <SpotlightPreview>
      <DashboardNav />

      <div className="relative flex flex-col min-w-screen items-center">
        <section className="min-w-full bg-black/5 backdrop-blur-md pt-50 pb-20 px-5 md:px-20  felx flex-col  items-stretch ">
          <div className="max-w-5xl mx-auto text-center">
            {/* العنوان */}
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Discover the Magic of Movies
            </h2>

            {/* فقرة تعريفية */}
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              MovieSite is your ultimate destination for discovering and
              enjoying the best movies from around the world. Explore top-rated
              films, hidden gems, and all-time favorites in one place.
            </p>

            {/* مهمة الموقع */}
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
              Our mission is to make movie discovery fun and effortless. Whether
              you’re looking for the latest blockbusters or timeless classics,
              MovieSite guides you to your next favorite film.
            </p>

            {/* قائمة النقاط */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Top-Rated Movies
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover the highest rated movies quickly and easily.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Hidden Gems
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore movies you might not find anywhere else.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get suggestions based on your tastes and preferences.
                </p>
              </div>
            </div>

            {/* جملة ختامية */}
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Join our community of movie lovers and start your cinematic
              adventure today!
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </SpotlightPreview>
  );
}
