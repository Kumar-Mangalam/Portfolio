import { motion } from 'framer-motion';
import { Award, ExternalLink, ChevronRight } from 'lucide-react';

const CERTIFICATES = [
    {
        title: "Oracle Data Science Professional",
        issuer: "Oracle",
        date: "2024",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=AA02C4194D6EA1B8116A9353E6F6F0EC1B8FC2866A8A201601F0B1D7B2BF2FE0",
        platform: "Oracle"
    },
    {
        title: "Infosys Generative AI Certification",
        issuer: "Infosys",
        date: "2024",
        link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_014157710267834368237/1-0bc67b06-18cd-4677-8b07-6332c1229443.pdf",
        platform: "Infosys"
    },
    {
        title: "NPTEL Cloud Computing",
        issuer: "IIT Kharagpur",
        date: "2024",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730181504239777.pdf",
        platform: "NPTEL"
    },
    {
        title: "Computer Networking",
        issuer: "Coursera",
        date: "2024",
        link: "https://www.coursera.org/account/accomplishments/verify/R368V4IX6V7E?utm_product=course",
        platform: "Coursera"
    }
];

export default function Certificates() {
    return (
        <div className='space-y-6 max-w-4xl mx-auto'>
            <div className='space-y-2'>
                <p className='text-xs font-mono text-muted flex items-center gap-2'>
                    <ChevronRight size={10} className='text-arch-blue' />
                    Professional certifications & achievements
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {CERTIFICATES.map((cert, i) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className='group p-5 bg-black/5 dark:bg-white/5 border border-border dark:border-dark-border rounded-xl hover:border-arch-blue/40 transition-all flex flex-col justify-between hover:shadow-lg hover:shadow-arch-blue/10'
                    >
                        <div className='space-y-3'>
                            <div className='flex justify-between items-start'>
                                <div className='p-2 bg-arch-blue/10 rounded-lg text-arch-blue'>
                                    <Award size={20} />
                                </div>
                                <span className='text-[10px] font-mono text-muted uppercase tracking-wider'>{cert.date}</span>
                            </div>

                            <div>
                                <h3 className='text-sm font-bold leading-snug group-hover:text-arch-blue transition-colors'>
                                    {cert.title}
                                </h3>
                                <p className='text-xs text-muted mt-1'>{cert.issuer}</p>
                            </div>
                        </div>

                        <div className='mt-6 flex items-center justify-between pt-4 border-t border-border/50 dark:border-dark-border/50'>
                            <span className='px-2 py-0.5 bg-arch-blue/10 rounded text-[9px] font-mono text-arch-blue border border-arch-blue/20'>
                                {cert.platform}
                            </span>
                            <a
                                href={cert.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 text-[11px] font-mono text-arch-blue hover:underline'
                            >
                                VIEW DETAIL
                                <ExternalLink size={10} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
