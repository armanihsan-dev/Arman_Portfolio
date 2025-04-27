import Encryption from '@/components/main/Encryption';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import Image from 'next/image';
import { ThreeDMarqueeDemo } from '@/components/main/ThreeDMarqueeDemo';
import { GoogleGeminiEffectDemo } from '@/components/main/GoogleGeminiEffectDemo';

export default function Home() {
  return (
    <main className="h-fit w-full">
      <div className="flex flex-col gap-50">
        <Hero />
        <Skills />
        {/* <TextHoverEffectDemo /> */}
        {/* <ThreeDMarqueeDemo /> */}
        <GoogleGeminiEffectDemo />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
