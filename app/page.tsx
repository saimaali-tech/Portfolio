// src/app/page.tsx
import Introduction from '@/src/components/Introduction';
import About from '@/src/components/About';
import Education from '@/src/components/Education';
import Experience from '@/src/components/Experience';
import Projects from '@/src/components/Projects';
import Skills from '@/src/components/Skills';


export default function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills/>
    </main>
  );
}