import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1b2431] text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and description */}
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-teal-600 rounded-md flex items-center justify-center">
                            <div className="w-5 h-5 bg-white rounded-sm"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-white">
                            Skill <span className="text-teal-400">Swap</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your local hub for learning and sharing skills.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="hover:text-teal-400 transition-colors duration-200"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-teal-400 transition-colors duration-200"
                            >
                                My Profile
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">CONTACT</h3>
                    <p className="text-gray-400">info@skillswap.com</p>
                    <p className="text-gray-400">123 Skill Street, Learning City</p>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-white font-semibold mb-4">FOLLOW US</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-teal-400 transition-colors"
                        >
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                <p>© 2025 SkillSwap. All rights reserved.</p>
                <p className="mt-2">
                    <a href="#" className="hover:text-teal-400">
                        Privacy Policy
                    </a>{" "}
                    ·{" "}
                    <a href="#" className="hover:text-teal-400">
                        Terms of Service
                    </a>
                </p>
            </div>
        </footer>
    );
}
