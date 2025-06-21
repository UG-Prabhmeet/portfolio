"use client";
import { motion } from "framer-motion";

export default function HoverLink({ href, children, className = "" }) {
    return (
        <motion.a
            href={href}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative inline-block text-blue-600 dark:text-blue-400 ${className}`}
        >
            {children}
            <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-0.5 h-[1px] bg-blue-600 dark:bg-blue-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
}
