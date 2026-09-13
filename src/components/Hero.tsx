import heroImage from "../assets/banner-stack.png";

function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">

            {/* Left: text content */}
            <div className="flex-1">
                <h1 className="text-5xl font-bold leading-tight">
                    Build Your Ideal <br />
                    <span className="brand-gradient-text">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-6 text-gray-600 text-lg max-w-md">
                    Explore frontend, backend, database, and tooling options, compare them
                    side by side, and put together the stack that fits your next project.
                </p>

                <div className="mt-8 flex gap-4">
                    <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium px-6 py-3 rounded-lg">
                        Explore Technologies
                    </button>
                    <button className="border border-gray-300 font-medium px-6 py-3 rounded-lg">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right: hero image */}
            <div className="flex-1 flex justify-center">
                <img src={heroImage} alt="Development stack illustration" className="max-w-sm w-full" />
            </div>

        </section>
    );
}

export default Hero;