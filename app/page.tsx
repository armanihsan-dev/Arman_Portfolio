import Encryption from '@/components/main/Encryption';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import { GoogleGeminiEffectDemo } from '@/components/main/GoogleGeminiEffectDemo';
import Testimonials from '@/components/main/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen lg:h-full w-full overflow-hidden ">
      <div className="flex flex-col gap-50">
        <Hero />
        <Skills />
        <GoogleGeminiEffectDemo />
        <Encryption />
        <Projects />
        <Testimonials />
      </div>
    </main>
  );
}
