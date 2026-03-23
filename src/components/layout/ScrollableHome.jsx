import Desktop from './Desktop';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Training from '../sections/Training';
import Education from '../sections/Education';
import Certificates from '../sections/Certificates';
import CV from '../sections/CV';
import Contact from '../sections/Contact';

const SECTION_LIST = [
    { id: 'about', title: 'ABOUT', Component: About },
    { id: 'skills', title: 'SKILLS', Component: Skills },
    { id: 'projects', title: 'PROJECTS', Component: Projects },
    { id: 'training', title: 'TRAINING', Component: Training },
    { id: 'education', title: 'EDUCATION', Component: Education },
    { id: 'certificates', title: 'CERTIFICATES', Component: Certificates },
    { id: 'cv', title: 'CV', Component: CV },
    { id: 'contact', title: 'CONTACT', Component: Contact }
];

export default function ScrollableHome({ onNavigate }) {
    return (
        <div className='h-full overflow-y-auto custom-scrollbar pr-1 sm:pr-2'>
            <section className='min-h-[75vh] sm:min-h-[82vh]'>
                <Desktop onNavigate={onNavigate} />
            </section>

            <div className='space-y-6 sm:space-y-8 pb-10'>
                {SECTION_LIST.map(({ id, title, Component }) => (
                    <section
                        key={id}
                        id={id}
                        className='hypr-window rounded-lg overflow-hidden'
                    >
                        <div className='bg-black/5 dark:bg-black/40 px-3 sm:px-4 py-2 border-b border-border dark:border-dark-border'>
                            <span className='text-[10px] sm:text-xs font-mono font-bold text-arch-blue uppercase tracking-widest'>
                                {title}
                            </span>
                        </div>

                        <div className='p-4 sm:p-8 bg-bg-secondary/60 dark:bg-dark-bg-secondary/80'>
                            <Component />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
