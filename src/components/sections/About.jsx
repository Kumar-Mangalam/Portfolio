import { motion } from 'framer-motion';
import { Terminal, Code, Database, Settings2 } from 'lucide-react';
import TerminalGraphic from '../ui/TerminalGraphic';

export default function About() {
    return (
        <div className='w-full'>
            <section className="mb-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className='mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6'
                >
                    <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-arch-blue/50 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-[#161b22]">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D5603AQE7Whql4T547g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698348220669?e=1775692800&v=beta&t=6A0WHWrDoIv1XXB7ZWWBP3wqBvoa5USwnzCT96fw3Ko"
                                    alt="Kumar Mangalam"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full mt-2 sm:mt-0">
                        <h2 className='text-2xl font-bold flex items-center justify-center sm:justify-start gap-3 w-full'>
                            <span className='text-arch-blue'>About Me</span>
                            <div className="h-px bg-arch-blue/20 flex-1 ml-4 hidden sm:block" />
                        </h2>
                    </div>
                </motion.div>

                {/* CONTENT */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-start items-center'>

                    <div className='space-y-6 text-muted leading-relaxed font-normal'>

                        {/* PARA 1 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex gap-4"
                        >
                            <Code className="w-6 h-6 shrink-0 text-arch-blue/70 mt-1" />
                            <span>
                                I'm a 3rd-year B.Tech CSE student at Lovely Professional University with a strong passion for
                                <span className='text-arch-blue font-medium'> Software Development</span> and
                                <span className='text-arch-blue font-medium'> Data Science</span>. I combine problem-solving skills with a quick learning ability to build real-world projects and explore cutting-edge technologies.
                            </span>
                        </motion.p>

                        {/* PARA 2 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-4"
                        >
                            <Database className="w-6 h-6 shrink-0 text-purple-400/70 mt-1" />
                            <span>
                                With expertise in full-stack development, I've built secure Android applications using
                                <span className='text-purple-400 font-medium'> Kotlin and Firebase</span>,
                                developed AI-powered chatbots with
                                <span className='text-purple-400 font-medium'> Gemini API</span>, and created machine learning models achieving
                                <span className='text-purple-400 font-medium'> 92-95% accuracy</span>. I'm passionate about clean architecture and solving complex problems efficiently.
                            </span>
                        </motion.p>

                        {/* PARA 3 */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <Terminal className="w-6 h-6 shrink-0 text-emerald-400/70 mt-1" />
                            <span>
                                I've achieved
                                <span className='text-emerald-400 font-medium'> 5-star ratings in C++ and Java on HackerRank</span>,
                                solved <span className='text-emerald-400 font-medium'> 150+ LeetCode problems</span>, and ranked
                                <span className='text-emerald-400 font-medium'> Top 10 in a 24-hour hackathon</span>. My core competencies include DSA, software architecture, data analysis, and adaptive problem-solving.
                            </span>
                        </motion.p>

                        {/* CURRENT FOCUS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='pt-4'
                        >
                            <div className='p-5 rounded-xl bg-bg-secondary/80 dark:bg-dark-bg-secondary/80 border border-arch-blue/10 shadow-lg shadow-arch-blue/5'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <Settings2 className="w-4 h-4 text-arch-blue" />
                                    <h3 className='text-xs font-mono uppercase tracking-widest text-arch-blue'>
                                        Current Focus
                                    </h3>
                                </div>

                                <p className='text-sm text-muted/90 leading-relaxed'>
                                    Actively developing expertise in <b>full-stack development</b>, <b>machine learning pipelines</b>, and <b>cloud computing</b> while exploring innovative ways to apply technology to real-world challenges. I'm adaptable, driven, and always ready to learn new technologies.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE GRAPHIC */}
                    <div className="flex justify-center lg:justify-end lg:items-start items-center col-span-1 py-8 lg:py-0">
                        <TerminalGraphic />
                    </div>
                </div>
            </section>
        </div>
    );
}