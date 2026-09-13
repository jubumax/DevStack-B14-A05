function Footer() {
    return (
        <footer className="bg-white border-t">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-10">

                {/* Brand block */}
                <div className="max-w-xs">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-violet-600 text-white font-bold w-7 h-7 rounded-md flex items-center justify-center text-xs">
                            DS
                        </div>
                        <span className="font-bold">
                            Dev<span className="text-pink-600">Stack</span>
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h4 className="font-semibold text-sm mb-3">PRODUCT</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold text-sm mb-3">COMPANY</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-semibold text-sm mb-3">LEGAL</h4>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

            </div>

            <hr className="border-gray-200" />

            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-between text-sm text-gray-400">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;