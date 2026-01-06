import { motion } from "motion/react";
export default function AnimatedListItem({ children, className }) { 
    return (
        <motion.li 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={className}
        >
            {children}
        </motion.li>
    );
}