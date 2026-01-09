import { motion } from "framer-motion";

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="p-6"
        >
            {children}
        </motion.div>
    );
}
