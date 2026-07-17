import { motion } from 'framer-motion';
import { useCounter } from '../../hooks/useCounter';

const StatCard = ({ stat, animate }) => {
    const count = useCounter(stat.value, 2000, animate);

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
        >
            <div className="text-3xl font-bold tabular-nums text-slate-900">
                {count}
                {stat.suffix}
            </div>
            <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
        </motion.div>
    );
};

export default StatCard;
