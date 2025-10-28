import { motion } from "framer-motion";

export default function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
            <motion.h1
                className="text-3xl font-bold mb-6 text-teal-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills Swap
            </motion.h1>
            <motion.div
                className="w-14 h-14 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            />
            <motion.p
                className="mt-6 text-sm tracking-wide text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                Loading, please wait...
            </motion.p>
        </div>
    );
}
