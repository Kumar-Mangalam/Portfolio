import { motion } from 'framer-motion';
import { Code2, Zap, ChevronDown } from 'lucide-react';

export default function Desktop({ onNavigate }) {
    return (
        <div className='flex flex-col items-center justify-center h-full space-y-6 p-4 text-center'>
            {/* Main Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-5xl'
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className='shrink-0'
                >
                    <div className='relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56'>
                        <div className='absolute inset-0 bg-gradient-to-br from-arch-blue via-purple-400 to-arch-blue rounded-2xl opacity-20 blur-2xl' />
                        <div className='relative w-full h-full rounded-2xl overflow-hidden border-2 border-arch-blue/50 p-1 bg-bg-secondary dark:bg-dark-bg-secondary'>
                            <img   
                                src='https://media.licdn.com/dms/image/v2/D5603AQE7Whql4T547g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698348220669?e=1775692800&v=beta&t=6A0WHWrDoIv1XXB7ZWWBP3wqBvoa5USwnzCT96fw3Ko'
                                alt='Kumar Mangalam'
                                className='w-full h-full object-cover rounded-xl'
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <div className='space-y-4 lg:text-left'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-arch-blue via-purple-400 to-arch-blue bg-clip-text text-transparent'>
                        Kumar Mangalam
                    </h1>
                    <p className='text-sm sm:text-base md:text-lg font-mono text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium px-4 lg:px-0'>
                        B.Tech CSE Student | Software Developer | Data Scientist
                    </p>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-8 text-xs sm:text-sm'
                    >
                        <div className='flex items-center gap-2 text-muted'>
                            <Code2 size={16} className='text-arch-blue' />
                            <span>150+ LeetCode Problems Solved</span>
                        </div>
                        <div className='flex items-center gap-2 text-muted'>
                            <Zap size={16} className='text-arch-blue' />
                            <span>5★ HackerRank | Top 10 Hackathon</span>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className='mt-8'
                    >
                        <button
                            onClick={() => onNavigate('terminal')}
                            className='btn btn-secondary group flex items-center gap-3 px-6 py-3 border-arch-blue/30 hover:border-arch-blue text-xs uppercase cursor-pointer tracking-widest transition-all hover:shadow-lg hover:shadow-arch-blue/20'
                        >
                            <div className='w-2 h-2 rounded-full bg-arch-blue animate-pulse' />
                            Open terminal
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 2 }}
                className='absolute bottom-8 flex flex-col items-center gap-2'
            >
                <span className='text-[10px] text-muted uppercase tracking-widest font-mono'>Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown size={20} className='text-arch-blue/50' />
                </motion.div>
            </motion.div>
        </div>
    );
}
