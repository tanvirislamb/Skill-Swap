import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoPersonCircle } from "react-icons/io5";

export default function Profile() {
    const { user, setUser, updateUser } = useContext(AuthContext);

    // Modal control
    const [isOpen, setIsOpen] = useState(false);


    // Mock update function (replace later with Firebase update)
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        updateUser({
            displayName: name,
            photoURL: image
        }).then(() => {
            setUser({ ...user, displayName: name, photoURL: image })
        })
        setIsOpen(false);
    };
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <title>Skills Swap | Profile</title>

            {/* Profile Card */}
            <div className="bg-white max-w-3xl w-full shadow-xl rounded-xl p-10 flex flex-col sm:flex-row items-center gap-8 border border-gray-100">
                <div className="bg-teal-100 p-1 rounded-full">
                    {user && user.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt={user.displayName || "User"}
                            className="w-25 h-25 rounded-full object-cover bg-white border-3 border-white"
                        />
                    ) : (
                        <IoPersonCircle className="text-[100px] text-teal-600" />
                    )}
                </div>

                <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        {user?.displayName || "User Name"}
                    </h2>
                    <p className="text-gray-500 mb-4">
                        {user?.email || "user@email.com"}
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-all"
                    >
                        Update Profile
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 shadow-2xl w-[90%] max-w-md relative">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Update Profile
                        </h2>

                        <form onSubmit={handleUpdate} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                    placeholder="Enter new name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                    placeholder="Enter new photo URL"
                                />
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
