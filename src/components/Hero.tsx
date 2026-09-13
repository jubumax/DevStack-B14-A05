function Hero() {
    return (
        <section className="text-center py-24 px-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold leading-tight">
                Build Your Ideal{" "}
                <span className="bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                    Development Stack
                </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
                Explore frontend, backend, database, and tooling options, compare them
                side by side, and put together the stack that fits your next project.
            </p>

            <div className="mt-8 flex justify-center gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium px-6 py-3 rounded-lg">
                    Explore Technologies
                </button>
                <button className="border border-gray-300 font-medium px-6 py-3 rounded-lg">
                    Learn More
                </button>
            </div>
        </section>
    );
}

export default Hero;