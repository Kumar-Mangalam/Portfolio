import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    BookOpen,
    Flame,
    Clock,
    ChevronRight,
    Github,
    Code,
    Trophy
} from 'lucide-react';

/* ================= TRACKS ================= */

const TRACKS = [
    {
        label: 'Data Structures & Algorithms',
        progress: 75,
        status: 'Active',
        note: 'Solved 200+ problems on LeetCode with strong problem-solving skills'
    },
    {
        label: 'Backend Engineering (Node.js + APIs)',
        progress: 70,
        status: 'Active',
        note: 'Designing REST APIs, authentication systems, and optimizing databases'
    },
    {
        label: 'Full-Stack Development (MERN)',
        progress: 65,
        status: 'Active',
        note: 'Built scalable applications using MongoDB, Express, React, Node.js'
    },
    {
        label: 'Android Development (Kotlin + Firebase)',
        progress: 65,
        status: 'Active',
        note: 'Developed real-time apps with authentication, Firestore, and secure systems'
    },
    {
        label: 'Machine Learning & Data Processing',
        progress: 75,
        status: 'Active',
        note: 'Built ML models (92–95% accuracy), EDA with Pandas & Seaborn'
    },
    {
        label: 'System Design Fundamentals',
        progress: 45,
        status: 'Active',
        note: 'Learning scalability, caching, database design, distributed systems'
    }
];

/* ================= INTERESTS ================= */

const INTERESTS = [
    {
        area: 'Cloud & Scalable Systems',
        icon: Flame,
        description: 'Exploring AWS, deployment strategies, and building scalable backend systems.',
        tags: ['AWS', 'Docker', 'Scalability']
    },
    {
        area: 'Data Engineering',
        icon: BookOpen,
        description: 'Working on ETL pipelines, data processing, and building efficient data workflows.',
        tags: ['ETL', 'Data Pipelines', 'SQL']
    },
    {
        area: 'DevOps & Automation',
        icon: Cpu,
        description: 'Learning CI/CD pipelines, automation, and production-ready deployment workflows.',
        tags: ['CI/CD', 'GitHub Actions', 'Docker']
    }
];

/* ================= QUEUE ================= */

const QUEUE = [
    'Advanced System Design',
    'AWS (EC2, S3, Lambda)',
    'Microservices Architecture',
    'Docker & Kubernetes',
    'Apache Kafka',
    'PostgreSQL Optimization',
    'Redis (Caching)',
    'TypeScript',
    'GraphQL',
    'CI/CD Pipelines',
    'ElasticSearch',
    'Distributed Systems'
];

/* ================= CLEAN HACKERRANK ================= */

function HackerRankCard() {
    return (
        <div className='p-4 border rounded-xl text-center space-y-3 bg-black/5 dark:bg-white/5'>
            <h3 className='font-mono text-sm text-arch-blue'>HackerRank Profile</h3>

            <a
                href="https://www.hackerrank.com/profile/Deepak_Thakur_3"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg hover:bg-arch-blue/10 transition"
            >
                <p className="font-bold">Deepak Kumar</p>
                <p className="text-xs text-muted">@Deepak_Thakur_3</p>

                <div className="mt-3 flex justify-center gap-2 text-xs font-mono flex-wrap">
                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded">Java ★★★★★</span>
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">C++ ★★★★★</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded">Python ★★★</span>
                </div>
            </a>
        </div>
    );
}

/* ================= MAIN ================= */

export default function Learning() {
    const [activeTab, setActiveTab] = useState('tracks');

    return (
        <div className='space-y-6 max-w-4xl mx-auto'>

            {/* HEADER */}
            <p className='text-xs font-mono text-muted'>
                Focused on Backend Engineering, Android Development, and Data-Driven Systems
            </p>

            {/* TABS */}
            <div className='flex gap-1 font-mono text-xs border-b'>
                {['tracks', 'interests', 'queue', 'stats'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 border-b-2 ${
                            activeTab === tab
                                ? 'border-arch-blue text-arch-blue'
                                : 'text-muted'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* TRACKS */}
            {activeTab === 'tracks' && (
                <div className='space-y-5'>
                    {TRACKS.map(track => (
                        <div key={track.label}>
                            <div className='flex justify-between'>
                                <span>{track.label}</span>
                                <span>{track.progress}%</span>
                            </div>
                            <p className='text-xs text-muted'>{track.note}</p>
                            <div className='h-2 bg-gray-200 dark:bg-white/10 rounded'>
                                <div
                                    className='h-2 bg-arch-blue rounded'
                                    style={{ width: `${track.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* INTERESTS */}
            {activeTab === 'interests' && (
                <div className='space-y-4'>
                    {INTERESTS.map(item => (
                        <div key={item.area} className='p-4 border rounded-xl'>
                            <h3 className='font-bold'>{item.area}</h3>
                            <p className='text-sm text-muted'>{item.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* QUEUE */}
            {activeTab === 'queue' && (
                <div className='grid grid-cols-2 gap-2'>
                    {QUEUE.map(item => (
                        <div key={item} className='p-2 border rounded'>
                            {item}
                        </div>
                    ))}
                </div>
            )}

            {/* STATS */}
            {activeTab === 'stats' && (
                <div className='space-y-8'>

                    {/* GITHUB */}
                    <div className='space-y-4'>
                        <h3 className='text-sm font-mono flex items-center gap-2'>
                            <Github size={14} className='text-arch-blue' />
                            GitHub Activity
                        </h3>

                        <img
                            src="https://github-readme-streak-stats.herokuapp.com/?user=DeepakThakur10&theme=dark&hide_border=true"
                            alt="GitHub Streak"
                            className='w-full'
                        />

                        <img
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=DeepakThakur10&layout=compact&theme=dark&hide_border=true"
                            alt="Top Languages"
                            className='w-full max-w-md mx-auto'
                        />
                    </div>

                    {/* LEETCODE */}
                    <div className='space-y-4'>
                        <h3 className='text-sm font-mono flex items-center gap-2'>
                            <Code size={14} className='text-arch-blue' />
                            LeetCode Stats
                        </h3>

                        <div className='flex justify-center'>
                            <img
                                src="https://leetcard.jacoblin.cool/Deepak_KumarThakur?theme=dark&ext=contest"
                                alt="LeetCode Stats"
                                className='max-w-full'
                            />
                        </div>
                    </div>

                    {/* HACKERRANK */}
                    <div className='space-y-4'>
                        <h3 className='text-sm font-mono flex items-center gap-2'>
                            <Trophy size={14} className='text-arch-blue' />
                            HackerRank
                        </h3>

                        <HackerRankCard />
                    </div>

                </div>
            )}
        </div>
    );
}