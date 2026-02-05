import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import PragueMap from './PragueMap'

const SLIDES = [
    'intro',
    'photos',
    'map',
    'pillars',
    'ecology',
    'city',
    'detournement',
    'modes',
    'predecessors',
    'privacy',
    'demo',
    'anifilm',
    'questions'
]

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const goNext = useCallback(() => {
        setCurrentSlide(prev => Math.min(prev + 1, SLIDES.length - 1))
    }, [])

    const goPrev = useCallback(() => {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
                e.preventDefault()
                goNext()
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault()
                goPrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [goNext, goPrev])

    return (
        <div className="h-screen bg-[#FAFAFA] overflow-hidden relative">
            {/* Navigation arrows */}
            <div className="fixed bottom-8 right-8 z-50 flex gap-4">
                <button
                    onClick={goPrev}
                    disabled={currentSlide === 0}
                    className={`w-12 h-12 border-2 border-black flex items-center justify-center text-2xl transition-all cursor-pointer ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-black hover:text-white'
                        }`}
                >
                    ←
                </button>
                <button
                    onClick={goNext}
                    disabled={currentSlide === SLIDES.length - 1}
                    className={`w-12 h-12 border-2 border-black flex items-center justify-center text-2xl transition-all cursor-pointer ${currentSlide === SLIDES.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-black hover:text-white'
                        }`}
                >
                    →
                </button>
            </div>

            {/* Slide counter */}
            <div className="fixed bottom-8 left-8 z-50 text-sm text-black/40">
                {currentSlide + 1} / {SLIDES.length}
            </div>

            {/* Slides */}
            <AnimatePresence mode="wait">
                {/* SLIDE 1: INTRO */}
                {currentSlide === 0 && (
                    <Slide key="intro">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
                            <div className="flex-1 flex justify-center">
                                <motion.img
                                    src={`${import.meta.env.BASE_URL}animations/scan.gif`}
                                    alt="AR Scanning"
                                    className="w-64 h-64 object-contain border-2 border-black"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                                />
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <p className="text-sm tracking-widest text-black/40 mb-4">
                                    FAMU • 2025
                                </p>
                                <h1 className="text-5xl md:text-6xl font-black text-black tracking-tight mb-6">
                                    chompAR
                                </h1>
                                <p className="text-xl text-black/80 leading-relaxed mb-6">
                                    A street art game using gamification to train attention and appropriate public space.
                                </p>

                                <div className="mt-8 text-black/30 text-sm">
                                    ← → use arrows to navigate
                                </div>
                            </div>
                        </div>
                    </Slide>
                )}

                {/* SLIDE 2: PHOTOS */}
                {currentSlide === 1 && (
                    <Slide key="photos">
                        <div className="grid grid-cols-3 gap-4 max-w-4xl">
                            <motion.img
                                src={`${import.meta.env.BASE_URL}IMG_5461.jpg`}
                                alt="Chomp in street 1"
                                className="w-full aspect-square object-cover border-2 border-black"
                                style={{ objectPosition: 'top right' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                            />
                            <motion.img
                                src={`${import.meta.env.BASE_URL}IMG_5564.jpg`}
                                alt="Chomp in street 2"
                                className="w-full aspect-square object-cover border-2 border-black"
                                style={{ objectPosition: 'top center' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                            />
                            <motion.img
                                src={`${import.meta.env.BASE_URL}IMG_5583.jpg`}
                                alt="Chomp in street 3"
                                className="w-full aspect-square object-cover border-2 border-black"
                                style={{ objectPosition: 'center center' }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                            />
                        </div>
                    </Slide>
                )}

                {/* SLIDE 3: MAP */}
                {currentSlide === 2 && (
                    <div key="map" className="h-screen w-screen relative">
                        <PragueMap />
                        {/* Navigation overlay for map slide */}
                        <div className="absolute bottom-8 right-8 z-[2000] flex gap-4">
                            <button
                                onClick={goPrev}
                                className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center text-2xl hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                ←
                            </button>
                            <button
                                onClick={goNext}
                                className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center text-2xl hover:bg-black hover:text-white transition-all cursor-pointer"
                            >
                                →
                            </button>
                        </div>
                        <div className="absolute bottom-8 left-8 z-[2000] text-sm text-black/40 bg-white px-2 py-1">
                            {currentSlide + 1} / {SLIDES.length}
                        </div>
                    </div>
                )}

                {/* SLIDE 4: THREE PILLARS - overview */}
                {currentSlide === 3 && (
                    <Slide key="pillars" dark>
                        <p className="text-sm tracking-widest text-white/40 mb-6">THEORETICAL FRAMEWORK</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-12">Three Pillars</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 border border-white/40 text-center"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}badges/badge-1.png`}
                                    alt="Attention Ecology"
                                    className="w-16 h-16 mx-auto mb-4 object-contain"
                                />
                                <h3 className="text-xl font-bold">Attention Ecology</h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 border border-white/40 text-center"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}badges/badge-2.png`}
                                    alt="Right to the City"
                                    className="w-16 h-16 mx-auto mb-4 object-contain"
                                />
                                <h3 className="text-xl font-bold">Right to the City</h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="p-6 border border-white/40 text-center"
                            >
                                <img
                                    src={`${import.meta.env.BASE_URL}badges/badge-3.png`}
                                    alt="Détournement"
                                    className="w-16 h-16 mx-auto mb-4 object-contain"
                                />
                                <h3 className="text-xl font-bold">Détournement</h3>
                            </motion.div>
                        </div>
                    </Slide>
                )}

                {/* SLIDE 5: ATTENTION ECOLOGY */}
                {currentSlide === 4 && (
                    <Slide key="ecology">
                        <img
                            src={`${import.meta.env.BASE_URL}badges/badge-1.png`}
                            alt="Attention Ecology"
                            className="w-24 h-24 mb-8 object-contain"
                        />
                        <p className="text-sm tracking-widest text-black/40 mb-4">PILLAR 1</p>
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">Attention Ecology</h2>
                        <p className="text-2xl text-black/60">People don't look around themselves.</p>
                    </Slide>
                )}

                {/* SLIDE 6: RIGHT TO THE CITY */}
                {currentSlide === 5 && (
                    <Slide key="city" dark>
                        <img
                            src={`${import.meta.env.BASE_URL}badges/badge-2.png`}
                            alt="Right to the City"
                            className="w-24 h-24 mb-8 object-contain"
                        />
                        <p className="text-sm tracking-widest text-white/40 mb-4">PILLAR 2</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Right to the City</h2>
                        <p className="text-2xl text-white/60">People don't consider the city theirs.</p>
                    </Slide>
                )}

                {/* SLIDE 7: DÉTOURNEMENT */}
                {currentSlide === 6 && (
                    <Slide key="detournement">
                        <img
                            src={`${import.meta.env.BASE_URL}badges/badge-3.png`}
                            alt="Détournement"
                            className="w-24 h-24 mb-8 object-contain"
                        />
                        <p className="text-sm tracking-widest text-black/40 mb-4">PILLAR 3</p>
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">Détournement</h2>
                        <p className="text-2xl text-black/60">Using technology against technology.</p>
                    </Slide>
                )}

                {/* SLIDE 8: TWO MODES */}
                {currentSlide === 7 && (
                    <Slide key="modes" dark>
                        <p className="text-sm tracking-widest text-white/40 mb-6">GAME DESIGN</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-12">Two Modes</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                            {/* Solo mode */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-8 bg-white text-black"
                            >
                                <h3 className="text-3xl font-bold mb-2">Solo Mode</h3>
                                <p className="text-black/40 mb-6">Ambient</p>

                                <div className="space-y-4 text-black/70">
                                    <p>Collect Chomps into your personal collection.</p>
                                    <p>Ownership stays <span className="font-bold text-black">forever</span>.</p>
                                    <p>No pressure. The journey is the goal.</p>
                                </div>

                                <div className="mt-6 p-4 bg-black/5">
                                    <p className="text-sm text-black/50 italic">
                                        = Attention training
                                    </p>
                                </div>
                            </motion.div>

                            {/* Battle mode */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-8 border-2 border-white"
                            >
                                <h3 className="text-3xl font-bold mb-2">Battle Mode</h3>
                                <p className="text-white/40 mb-6">Competitive</p>

                                <div className="space-y-4 text-white/70">
                                    <p><span className="text-[#E53935] font-bold">Red</span> vs <span className="text-[#1E88E5] font-bold">Blue</span></p>
                                    <p>Claim = <span className="font-bold text-white">this piece of the city is yours</span>.</p>
                                    <p>Can be recaptured.</p>
                                </div>

                                <div className="mt-6 p-4 bg-white/10">
                                    <p className="text-sm text-white/50 italic">
                                        = Public space appropriation
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </Slide>
                )}

                {/* SLIDE 9: PREDECESSORS */}
                {currentSlide === 8 && (
                    <Slide key="predecessors">
                        <p className="text-sm tracking-widest text-black/40 mb-6">INSPIRATION</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Predecessors</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 border-2 border-black"
                            >
                                <h3 className="text-2xl font-bold text-black mb-4">Pokémon GO</h3>
                                <p className="text-black/60 mb-4">Location-based AR gamification</p>
                                <p className="text-black/40 text-sm">
                                    Gamification, teams, real-time
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 border-2 border-black"
                            >
                                <h3 className="text-2xl font-bold text-black mb-4">Invader</h3>
                                <p className="text-black/60 mb-4">Gamified street art</p>
                                <p className="text-black/40 text-sm">
                                    Scoring, achievements, map
                                </p>
                            </motion.div>
                        </div>
                    </Slide>
                )}

                {/* SLIDE 10: PRIVACY-FIRST */}
                {currentSlide === 9 && (
                    <Slide key="privacy" dark>
                        <p className="text-sm tracking-widest text-white/40 mb-6">DESIGN</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-12">Privacy-first</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 border border-white/40"
                            >
                                <h3 className="font-bold text-xl mb-2">No GPS</h3>
                                <p className="text-white/60 text-sm">We don't track location.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-6 border border-white/40"
                            >
                                <h3 className="font-bold text-xl mb-2">Local Profile</h3>
                                <p className="text-white/60 text-sm">Data in browser. No registration.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 border border-white/40"
                            >
                                <h3 className="font-bold text-xl mb-2">20min Delay</h3>
                                <p className="text-white/60 text-sm">Anti-predator protection on map.</p>
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 text-xl text-white/60"
                        >
                            Phone as a <span className="font-bold text-white">secondary tool</span>.
                        </motion.p>
                    </Slide>
                )}

                {/* SLIDE 11: DEMO */}
                {currentSlide === 10 && (
                    <Slide key="demo">
                        <p className="text-sm tracking-widest text-black/40 mb-4">DEMO</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Scan Me</h2>

                        <motion.img
                            src={`${import.meta.env.BASE_URL}demo-target.png`}
                            alt="Scan target"
                            className="w-80 h-80 object-contain border-4 border-black"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        />

                        <p className="mt-6 text-black/40 text-sm">Open scanner on your phone</p>
                    </Slide>
                )}

                {/* SLIDE 12: ANIFILM */}
                {currentSlide === 11 && (
                    <Slide key="anifilm">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Anifilm 2026</h2>
                        <p className="text-black/40 mb-8">March 2026 • Liberec</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl items-center">
                            <div className="p-8 bg-white border-2 border-black">
                                <h3 className="text-xl font-bold text-black mb-4">AR Treasure Hunt</h3>
                                <ul className="space-y-3 text-black/60">
                                    <li>• 12 paste-ups around the festival</li>
                                    <li>• Collecting animation "frames"</li>
                                    <li>• Complete = 2s animation</li>
                                    <li>• Collective CRT display</li>
                                </ul>
                                <p className="mt-6 text-sm text-black/40">
                                    Festival theme: <span className="text-black font-bold">HORA</span>
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <img
                                    src={`${import.meta.env.BASE_URL}anifilm.gif`}
                                    alt="Anifilm animation"
                                    className="max-w-full max-h-80 object-contain border-2 border-black"
                                />
                            </div>
                        </div>
                    </Slide>
                )}

                {/* SLIDE 13: QUESTIONS */}
                {currentSlide === 12 && (
                    <Slide key="questions" dark>
                        <p className="text-sm tracking-widest text-white/40 mb-6">DISCUSSION</p>
                        <h2 className="text-4xl md:text-6xl font-bold mb-12">Questions?</h2>

                        <div className="flex flex-col md:flex-row gap-6 max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="p-8 border border-white/40 text-center flex-1"
                            >
                                <p className="text-2xl font-bold">Two Modes</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-8 border border-white/40 text-center flex-1"
                            >
                                <p className="text-2xl font-bold">Additional Theory</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="p-8 border border-white/40 text-center flex-1"
                            >
                                <p className="text-2xl font-bold">Ambient Path</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12"
                        >
                            <div className="w-20 h-20 mx-auto">
                                <motion.img
                                    src={`${import.meta.env.BASE_URL}chumper.png`}
                                    alt="Chomp"
                                    className="w-full h-full object-contain"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        </motion.div>
                    </Slide>
                )}
            </AnimatePresence>
        </div>
    )
}

function Slide({ children, dark = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className={`h-screen flex flex-col items-center justify-center p-8 ${dark ? 'bg-black text-white' : 'bg-[#FAFAFA] text-black'
                }`}
        >
            {children}
        </motion.div>
    )
}
