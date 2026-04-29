'use client';

import Link from 'next/link';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

type CarouselCard = {
    id: number;
    title: string;
    url: string;
    description: string;
    cta: string;
    modelId: string;
};

const cards: CarouselCard[] = [
    {
        id: 1,
        title: 'Model Calm',
        url: '/images/zdjecia-safe/calm_dab_naturalny.png',
        description: 'Pionowe, luksusowe frezowanie nadające wnętrzu rytm i elegancję.',
        cta: 'Konfiguruj model Calm',
        modelId: 'wisla'
    },
    {
        id: 2,
        title: 'Model Facet',
        url: '/images/zdjecia-safe/facet_dab_wedzony.png',
        description: 'Głębokie, fasetowe frezowanie CNC tworzące trójwymiarową rzeźbę.',
        cta: 'Konfiguruj model Facet',
        modelId: 'bieszczady'
    },
    {
        id: 3,
        title: 'Model Soft',
        url: '/images/zdjecia-safe/soft_dab_naturalny.jpg',
        description: 'Miękkie, płynne fale rzeźbione w drewnie dla spokojnej harmonii.',
        cta: 'Konfiguruj model Soft',
        modelId: 'tatry'
    },
    {
        id: 4,
        title: 'Model Rhythm',
        url: '/images/zdjecia-safe/rhythm_jesion_jasny.png',
        description: 'Powtarzalny rytm pionowych segmentów daje wyważony efekt 3D.',
        cta: 'Konfiguruj model Rhythm',
        modelId: 'karpaty'
    },
    {
        id: 5,
        title: 'Model Geo',
        url: '/images/zdjecia-safe/geo_dab_naturalny.png',
        description: 'Geometryczne podziały powierzchni inspirowane architekturą.',
        cta: 'Konfiguruj model Geo',
        modelId: 'sudety'
    }
];

const Card = ({ card }: { card: CarouselCard }) => {
    return (
        <article className="w-[86vw] max-w-[720px] shrink-0">
            <div className="group relative h-[300px] sm:h-[360px] md:h-[420px] overflow-hidden bg-gray-light">
                <div
                    style={{
                        backgroundImage: `url(${card.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-black/0 to-black/0" />
            </div>

            <div className="pt-8 text-center">
                <h3 className="font-serif text-3xl md:text-4xl text-primary-black">{card.title}</h3>
                <div className="h-px w-12 bg-gray-medium mx-auto my-5" />
                <p className="text-gray-dark text-base md:text-lg leading-relaxed max-w-[34rem] mx-auto">
                    {card.description}
                </p>
                <div className="pt-6 md:pt-7">
                    <Link
                        href={`/konfigurator?model=${card.modelId}`}
                        className="inline-block uppercase tracking-[0.14em] text-[13px] md:text-[14px] text-primary-black border-b border-primary-black pb-1 hover:opacity-70 transition-opacity"
                    >
                        {card.cta}
                    </Link>
                </div>
            </div>
        </article>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef
    });
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 170,
        damping: 24,
        mass: 0.28
    });

    const x = useTransform(smoothProgress, [0, 1], ['1%', '-60%']);

    return (
        <section ref={targetRef} className="relative h-[260vh] bg-primary-white">
            <div className="sticky top-16 flex h-[calc(100vh-4rem)] items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 md:gap-10 pl-[max(1rem,calc((100vw-1400px)/2))] pr-[12vw]">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Example = () => {
    return (
        <div className="bg-primary-white">
            <div className="container-premium pt-14 md:pt-20 pb-10 md:pb-12 text-center">
                <span className="text-subtitle block text-gray-dark">KOLEKCJA 2026</span>
                <h2 className="mt-4 font-serif text-primary-black text-4xl md:text-5xl">Pięć esencji formy.</h2>
            </div>

            <HorizontalScrollCarousel />

            <div className="container-premium py-10 md:py-14 text-center">
                <span className="text-sm md:text-base uppercase tracking-[0.18em] text-gray-dark">
                    Przewijaj, aby odkryć kolejne modele
                </span>
            </div>
        </div>
    );
};

export default Example;
