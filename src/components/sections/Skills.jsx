import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Terminal as TerminalIcon,
    Server,
    Cpu,
    Code
} from 'lucide-react';
import {
    SiPython,
    SiCplusplus,
    SiC,
    SiJavascript,
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiGithub,
    SiDocker,
    SiHtml5,
    SiCss,
    SiPostman
} from 'react-icons/si';

const SKILL_ICONS = {
    'Java': Code,
    'Python': SiPython,
    'C++': SiCplusplus,
    'C': SiC,
    'JavaScript': SiJavascript,
    'SQL': Database,
    'NumPy': Database,
    'Pandas': Database,
    'Seaborn': Database,
    'Matplotlib': Database,
    'HTML5': SiHtml5,
    'CSS3': SiCss,
    'MySQL': Database,
    'Git': SiGit,
    'GitHub': SiGithub,
    'VS Code': Code,
    'DBMS': Database,
    'OOPs': Code,
};


const SKILL_GROUPS = [
    {
        title: 'Languages',
        icon: Code2,
        skills: ['C', 'C++', 'Java', 'Python'],
        color: 'text-arch-blue'
    },
    {
        title: 'Frameworks & Libraries',
        icon: Globe,
        skills: ['NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'HTML5', 'CSS3'],
        color: 'text-purple-400'
    },
    {
        title: 'Tools & Platforms',
        icon: Cpu,
        skills: ['MySQL', 'Git', 'GitHub', 'Jira', 'Figma', 'VS Code', 'Ubuntu'],
        color: 'text-emerald-400'
    },
    {
        title: 'Core Subjects',
        icon: Database,
        skills: ['DBMS', 'Operating Systems', 'Computer Networks', 'SQL', 'OOPs'],
        color: 'text-yellow-400'
    },
    {
        title: 'Soft Skills',
        icon: TerminalIcon,
        skills: ['Leadership', 'Time Management', 'Problem-Solving', 'Adaptability'],
        color: 'text-red-400'
    }
];

export default function Skills() {
    return (
        <div className='space-y-8 max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {SKILL_GROUPS.map((group, i) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className='p-6 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/50 transition-all group hover:shadow-lg hover:shadow-arch-blue/5'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className={`p-2 bg-arch-blue/10 rounded-lg ${group.color} group-hover:bg-arch-blue group-hover:text-black transition-all`}>
                                <group.icon size={20} />
                            </div>
                            <h3 className='text-lg font-bold'>{group.title}</h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {group.skills.map(skill => {
                                const Icon = SKILL_ICONS[skill];
                                return (
                                    <span
                                        key={skill}
                                        className='px-3 py-1.5 bg-black/5 dark:bg-black/40 border border-border dark:border-dark-border rounded-full text-xs font-mono text-muted hover:text-arch-blue hover:border-arch-blue transition-all flex items-center gap-2 group/skill'
                                    >
                                        {Icon && <Icon size={14} className='opacity-70 group-hover/skill:opacity-100 transition-opacity' />}
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Achievement Highlights */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className='mt-12 p-6 bg-arch-blue/5 border border-arch-blue/20 rounded-xl'
            >
                <h3 className='text-sm font-bold text-arch-blue mb-4 uppercase tracking-wider'>Achievements</h3>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold text-arch-blue'>150+</p>
                        <p className='text-xs text-muted'>LeetCode Problems Solved</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-2xl font-bold text-arch-blue'>5★ HackerRank</p>
                        <p className='text-xs text-muted'>C++ and Java</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-lg font-bold text-arch-blue'>Top 10</p>
                        <p className='text-xs text-muted'>24-hour Hackathon</p>
                    </div>
                </div>
                        
            </motion.div>
        </div>
    );
}