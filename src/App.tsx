import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutGrid, PlayCircle, Terminal, Zap, Palette, Database, CheckCircle, Image as ImageIcon, Share2, AtSign, Monitor, BookOpen, Skull, Sparkles, Cpu, Ghost, Briefcase, Code, Leaf, Brush, Menu, X } from "lucide-react";

type Theme = "futuristic" | "editorial" | "brutalist" | "minimalist" | "luxury" | "retro" | "corporate" | "developer" | "organic" | "creative" | "cyberpunk" | "forest" | "whiteminimal" | "steampunk" | "glassmorphism" | "aqua";

const themes: { id: Theme, icon: any, label: string }[] = [
  { id: "futuristic", icon: <Monitor size={18} />, label: "Futuriste" },
  { id: "editorial", icon: <BookOpen size={18} />, label: "Éditorial" },
  { id: "brutalist", icon: <Skull size={18} />, label: "Brutaliste" },
  { id: "minimalist", icon: <Sparkles size={18} />, label: "Minimaliste" },
  { id: "luxury", icon: <Cpu size={18} />, label: "Luxe" },
  { id: "retro", icon: <Ghost size={18} />, label: "Retro" },
  { id: "corporate", icon: <Briefcase size={18} />, label: "Corporate" },
  { id: "developer", icon: <Code size={18} />, label: "Developer" },
  { id: "organic", icon: <Leaf size={18} />, label: "Organic" },
  { id: "creative", icon: <Brush size={18} />, label: "Creative" },
  { id: "cyberpunk", icon: <Zap size={18} />, label: "Cyberpunk" },
  { id: "forest", icon: <Leaf size={18} />, label: "Forêt" },
  { id: "whiteminimal", icon: <Sparkles size={18} />, label: "Blanc Minimal" },
  { id: "steampunk", icon: <Database size={18} />, label: "Steampunk" },
  { id: "glassmorphism", icon: <Palette size={18} />, label: "Glassmorphism" },
  { id: "aqua", icon: <Zap size={18} />, label: "Aqua" },
];

const StyleSwitcher = ({ current, onChange }: { current: Theme, onChange: (t: Theme) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`fixed z-[100] ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'}`}>
      <div className="relative flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className={`mb-2 ${isMobile ? 'grid grid-cols-5 gap-2 w-64' : 'grid grid-cols-4 gap-3 w-72 p-4 glass-card'}`}
            >
              {themes.map((t) => (
                <motion.button
                  key={t.id}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    onChange(t.id);
                    setIsOpen(false);
                  }}
                  className={`group relative flex flex-col items-center justify-center rounded-full transition-all duration-300 shadow-lg border ${
                    current === t.id 
                      ? "bg-primary text-white border-primary" 
                      : "bg-card-bg text-text-main border-card-border hover:border-primary/50"
                  } ${isMobile ? 'size-10' : 'size-11'}`}
                  title={t.label}
                >
                  {t.icon}
                  {!isMobile && (
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card-bg border border-card-border text-[9px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[101]">
                      {t.label}
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center rounded-full shadow-2xl transition-all duration-500 transform ${
            isOpen ? "bg-text-main text-bg-main rotate-45" : "bg-primary text-white hover:scale-110"
          } ${isMobile ? 'size-14' : 'size-16'}`}
        >
          {isOpen ? <X size={isMobile ? 24 : 28} /> : <Palette size={isMobile ? 20 : 28} />}
          {!isOpen && !isMobile && (
            <span className="absolute -top-2 -right-2 size-6 bg-text-main text-bg-main text-[10px] font-black flex items-center justify-center rounded-full border-2 border-bg-main">
              {themes.length}
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
};

const Navbar = ({ theme }: { theme: Theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 px-4 py-3 sm:px-6 sm:py-4 ${theme === 'minimalist' ? 'bg-white/80 backdrop-blur-md border-b border-slate-100' : ''}`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between ${theme === 'minimalist' ? '' : 'glass-card px-4 py-3 sm:px-8 sm:py-4 rounded-full sm:rounded-full'}`}>
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="size-8 sm:size-10 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
            <LayoutGrid size={isMobile ? 18 : 24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-xl font-black tracking-tighter uppercase leading-none truncate">Portfolio.OS</span>
            <span className="text-[8px] sm:text-[10px] font-bold text-primary uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-0.5">
              {themes.find(t => t.id === theme)?.label} Edition
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <a href="#showcase" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap">Showcase</a>
          <a href="#stack" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap">Stack</a>
          <a href="#cms" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap">CMS</a>
          <a href="#roadmap" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap">Roadmap</a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-text-main/10 rounded-lg transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
          <button className="theme-button text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 whitespace-nowrap">
            Start Building
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 glass-card p-4"
          >
            <div className="flex flex-col gap-3">
              <a href="#showcase" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest py-2">Showcase</a>
              <a href="#stack" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest py-2">Stack</a>
              <a href="#cms" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest py-2">CMS</a>
              <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest py-2">Roadmap</a>
              <button className="theme-button w-full text-sm py-2.5">Start Building</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ theme }: { theme: Theme }) => {
  if (theme === "brutalist") {
    return (
      <section className="relative pt-20 pb-0 overflow-hidden border-b-2 border-black">
        <div className="marquee border-b-2 border-black py-4 bg-primary">
          <div className="marquee-content text-4xl font-black uppercase tracking-tighter text-black">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">L'AVENIR DU PORTFOLIO • PORTFOLIO.OS • DESIGN BRUTAL • </span>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] mb-8 uppercase">
              SYSTEM <br /> <span className="text-primary">01</span>
            </h1>
            <p className="text-xl font-bold mb-12 max-w-md border-l-4 border-black pl-6">
              CONCEVEZ DES EXPÉRIENCES MONUMENTALES. REFUSEZ LES STANDARDS.
            </p>
            <div className="flex gap-4">
              <button className="theme-button text-xl px-12 py-6 uppercase">Start Now</button>
            </div>
          </div>
          <div className="theme-card aspect-square bg-slate-100 flex items-center justify-center">
             <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920" 
              alt="Code" 
              className="w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    );
  }

  if (theme === "editorial") {
    return (
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.4em] font-bold mb-6 block opacity-50"
            >
              Volume 01 / 2024
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-9xl font-light italic leading-[1] mb-12"
            >
              L'Art du <br /> <span className="font-bold not-italic">Portfolio</span>
            </motion.h1>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <p className="text-lg leading-relaxed max-w-sm italic opacity-70">
                Une exploration de la forme et de la fonction. Redéfinir l'espace numérique à travers une lentille éditoriale.
              </p>
              <button className="theme-button italic px-12">Découvrir l'œuvre</button>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920" 
              alt="Editorial" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 right-8 vertical-text text-[10px] uppercase tracking-[0.5em] font-bold">
              Digital Experience © 2024
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "minimalist") {
    return (
      <section className="relative pt-60 pb-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
            Simplicité. <span className="font-bold">Pureté.</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed">
            Le design n'est pas ce à quoi il ressemble, c'est comment il fonctionne. Une approche épurée pour des résultats concrets.
          </p>
          <button className="theme-button px-12 py-4">Commencer</button>
        </div>
      </section>
    );
  }

  if (theme === "luxury") {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-primary uppercase tracking-[1em] text-xs font-bold mb-8 block">Exclusivité Digitale</span>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-12 leading-tight">
            L'Excellence <br /> <span className="not-italic font-bold">Sur Mesure</span>
          </h1>
          <div className="h-px w-40 bg-primary mx-auto mb-12"></div>
          <button className="theme-button px-16 py-5">Entrer dans l'univers</button>
        </div>
      </section>
    );
  }

  if (theme === "retro") {
    return (
      <section className="relative pt-40 pb-20 px-6 font-mono">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border-2 border-primary p-2 mb-8 shadow-[4px_4px_0px_#FF00FF]">
            <span className="text-primary animate-pulse">SYSTEM BOOT: OK</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-text-main shadow-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
            PORTFOLIO.OS <br /> <span className="text-primary">V2.0.4</span>
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto border-2 border-primary p-6 bg-bg-main/50">
            {">"} INITIALIZING CREATIVE PROTOCOLS... <br />
            {">"} DESIGNING MONUMENTAL EXPERIENCES...
          </p>
          <button className="theme-button px-12 py-6 text-2xl uppercase">Insert Coin</button>
        </div>
      </section>
    );
  }

  if (theme === "corporate") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            Solutions Digitales <br /> <span className="text-primary">Pour l'Entreprise</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
            Nous accompagnons les entreprises dans leur transformation numérique avec des solutions robustes, évolutives et centrées sur l'utilisateur.
          </p>
          <div className="flex justify-center gap-4">
            <button className="theme-button px-10 py-4">Nos Services</button>
            <button className="px-10 py-4 border border-slate-200 rounded-xl font-bold text-slate-900 hover:bg-slate-50 transition-colors">Contactez-nous</button>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "developer") {
    return (
      <section className="relative pt-40 pb-20 px-6 font-mono bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary mb-4 flex items-center gap-2">
              <Code size={20} />
              <span className="text-sm font-bold uppercase tracking-widest">Dev.Environment v1.0</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Building <br /> <span className="text-primary">Scalable Systems</span>
            </h1>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg mb-12">
              <p className="text-emerald-400 mb-2">$ npm install creative-solutions</p>
              <p className="text-slate-400 leading-relaxed">
                Expertise en React, Node.js et architecture cloud. Nous transformons vos idées complexes en code propre et performant.
              </p>
            </div>
            <button className="theme-button px-8 py-4 bg-emerald-500 text-slate-950">View Documentation</button>
          </div>
          <div className="theme-card aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full p-4 font-mono text-xs text-slate-500 overflow-hidden">
              <p className="text-emerald-500">class Portfolio OS {"{"}</p>
              <p className="pl-4">constructor() {"{"}</p>
              <p className="pl-8">this.vision = "Monumental";</p>
              <p className="pl-8">this.performance = "Ultra-Fast";</p>
              <p className="pl-4">{"}"}</p>
              <p className="pl-4">render() {"{"}</p>
              <p className="pl-8">return this.createExperience();</p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"}</p>
              <div className="mt-4 animate-pulse">_</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "organic") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-[#fdfcf7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920" 
              alt="Nature" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-primary font-serif italic text-xl mb-4 block">Design Durable</span>
            <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-tight">
              Harmonie <br /> <span className="italic">& Bien-être</span>
            </h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-serif italic">
              Une approche organique du design numérique, privilégiant la douceur, la clarté et le respect de l'utilisateur.
            </p>
            <button className="theme-button px-12 py-4 bg-green-800 text-white rounded-full">Explorer</button>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "creative") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-rose-50 overflow-hidden">
        <div className="absolute -top-20 -right-20 size-96 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -left-20 size-96 bg-rose-300 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="size-20 bg-rose-500 rounded-full mx-auto mb-8 flex items-center justify-center text-white shadow-xl"
          >
            <Brush size={32} />
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-black text-rose-950 mb-8 tracking-tighter uppercase">
            Pure <br /> <span className="text-rose-500">Creativity</span>
          </h1>
          <p className="max-w-xl mx-auto text-xl text-rose-900/60 mb-12 font-medium">
            Nous brisons les codes pour créer des expériences visuelles uniques qui marquent les esprits.
          </p>
          <button className="theme-button px-12 py-5 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/30">Lancer un projet</button>
        </div>
      </section>
    );
  }

  if (theme === "cyberpunk") {
    return (
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,110,0.05)_25%,rgba(255,0,110,0.05)_50%,transparent_50%,transparent_75%,rgba(255,0,110,0.05)_75%,rgba(255,0,110,0.05))] bg-[200%_200%] animate-[moveBg_20s_linear_infinite]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-primary text-sm font-mono uppercase tracking-[0.3em] font-bold mb-4 block animate-pulse">⚡ NEURAL.NET.INITIALIZED ⚡</span>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter">
                CYBER<br /><span className="text-primary text-5xl md:text-7xl">PUNK</span>
              </h1>
              <p className="text-lg text-[#00F5FF] mb-8 font-mono leading-relaxed">
                {">"} Dive into the digital abyss. Where neon meets the void.<br />
                {">"} Hyper-realistic visuals. Zero compromises.
              </p>
              <button className="theme-button px-12 py-4 uppercase font-bold relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF006E] to-[#00F5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">ENTER THE SYSTEM</span>
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF006E]/20 to-[#9D00FF]/20 rounded-lg blur-2xl animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1920" 
                alt="Cyberpunk" 
                className="w-full h-full object-cover rounded-lg border border-primary shadow-[0_0_30px_rgba(255,0,110,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (theme === "forest") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-[#f1faee]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#74C69D] rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#40916C] font-serif italic text-sm uppercase tracking-wider mb-4 block">Écologie Numérique</span>
            <h1 className="text-5xl md:text-7xl font-serif text-[#1B4332] mb-8 leading-[1.1]">
              Cultivons <br /> l'Harmonie <br /> <span className="text-[#40916C] italic">Digitale</span>
            </h1>
            <p className="text-lg text-[#2D6A4F]/80 mb-8 leading-relaxed font-serif italic max-w-md">
              Une expérience de design naturelle, respectueuse de l'environnement et des utilisateurs. Revenir à l'essentiel.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="theme-button px-12 py-4 bg-[#40916C] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Découvrir
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#74C69D]/30"
          >
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1920" 
              alt="Nature" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>
    );
  }

  if (theme === "whiteminimal") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <div className="w-px h-16 bg-black mx-auto mb-12"></div>
            <h1 className="text-7xl md:text-9xl font-light text-black mb-12 tracking-tight">
              Essence
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl mx-auto text-sm md:text-base font-light text-black/70 leading-relaxed mb-12"
          >
            La beauté réside dans la simplicité. Chaque élément compte. Rien de plus.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="theme-button px-12 py-3 bg-black text-white rounded-none hover:opacity-70 transition-opacity"
          >
            Accéder
          </motion.button>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 max-w-5xl mx-auto aspect-video bg-black/5 rounded-sm border border-black/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1920" 
            alt="Minimal" 
            className="w-full h-full object-cover rounded-sm"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>
    );
  }

  if (theme === "steampunk") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="900" cy="900" r="120" fill="none" stroke="currentColor" strokeWidth="2"/>
            <line x1="0" y1="500" x2="1000" y2="500" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-2 border-[#B87333] p-8 mb-8 bg-[#2a2a2a]">
              <span className="text-[#B87333] font-mono text-sm uppercase tracking-wider">INDUSTRIAL EPOCH</span>
              <h1 className="text-5xl md:text-7xl font-bold text-[#E8D4C4] mt-4 font-mono tracking-tight">
                STEAM<br />PUNK
              </h1>
            </div>
            <p className="text-[#E8D4C4]/80 mb-8 leading-relaxed max-w-md font-mono text-sm">
              {">"} Mécanismes complexes. Esthétique victorienne.<br />
              {">"} Fusion de vapeur et d'électricité industrielle.
            </p>
            <button className="theme-button px-10 py-4 bg-[#B87333] text-[#E8D4C4] border-2 border-[#B87333] uppercase font-black">
              Activer Machine
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="border-4 border-[#B87333] p-4 bg-[#2a2a2a] transform -rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
                alt="Steampunk" 
                className="w-full aspect-square object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  if (theme === "glassmorphism") {
    return (
      <section className="relative pt-40 pb-20 px-6 bg-gradient-to-br from-[#f5f7fa] via-[#e8f0f8] to-[#f0f5fa] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00a8e8] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0077be] rounded-full blur-3xl opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 px-6 py-4 rounded-3xl backdrop-blur-xl bg-white/30 border border-white/40 w-fit mx-auto"
          >
            <span className="text-[#0077BE] text-sm font-bold uppercase tracking-widest">Transparence Moderne</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black text-[#1E3A5F] mb-8 tracking-tight">
            Glass <br /> <span className="bg-gradient-to-r from-[#0077BE] to-[#00D4FF] bg-clip-text text-transparent">Morphism</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#1E3A5F]/70 mb-12">
            Fluidité et élégance. Des surfaces qui respirent. Design moderne et aérien.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="theme-button px-12 py-4 bg-[#0077BE] text-white rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl"
          >
            Explorer
          </motion.button>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-4xl mx-auto mx-auto px-6 py-6 rounded-3xl backdrop-blur-md bg-white/20 border border-white/40 shadow-xl relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1920" 
            alt="Glass" 
            className="w-full aspect-video object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>
    );
  }

  if (theme === "aqua") {
    return (
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0099CC]/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00D4FF] font-mono text-sm uppercase tracking-wider mb-4 block">OCÉAN NUMÉRIQUE</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#E8F4F8] mb-8 uppercase tracking-tight">
              AQUA<br /><span className="text-[#66E6FF]">SPHERE</span>
            </h1>
            <p className="text-[#00D4FF] mb-8 leading-relaxed max-w-md font-mono text-base">
              Fluidité absolue. Onde après onde.<br />
              Immersion totale dans l'expérience.
            </p>
            <button className="theme-button px-12 py-4 bg-[#00D4FF] text-[#001A33] font-bold uppercase hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              Plonger
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80&w=1920" 
                alt="Ocean" 
                className="w-full h-full object-cover rounded-2xl border-4 border-[#00D4FF]/30 shadow-[0_0_40px_rgba(0,212,255,0.2)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="hidden sm:inline">V2.0 est maintenant disponible</span>
          <span className="sm:hidden">V2.0 Disponible</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight mb-4 sm:mb-6 md:mb-8 leading-[0.9] uppercase"
        >
          L'AVENIR <br className="sm:hidden" /> DU <br />
          <span className="text-gradient">PORTFOLIO</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 font-light leading-relaxed mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0"
        >
          Concevez des expériences numériques monumentales. Une plateforme next-gen pour les créatifs.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-text-main text-bg-main font-black rounded-xl text-sm sm:text-base md:text-lg hover:opacity-80 transition-all cursor-pointer">
            Commencer
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 theme-card font-bold rounded-xl text-sm sm:text-base md:text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <PlayCircle size={20} />
            <span className="hidden sm:inline">Démo Vidéo</span>
            <span className="sm:hidden">Démo</span>
          </button>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 sm:mt-12 md:mt-20 max-w-6xl mx-auto theme-card shadow-2xl relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main to-transparent z-10 opacity-40"></div>
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920" 
          alt="Interface de développement" 
          className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const Showcase = ({ theme }: { theme: Theme }) => {
  const projects = [
    {
      title: "Cyber Dashboard",
      tags: ["React", "Three.js"],
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
      description: "Analytiques temps réel avec visualisation 3D immersive.",
    },
    {
      title: "Améthyste App",
      tags: ["Framer", "WebGL"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description: "Expérience mobile minimaliste et fluide.",
    },
    {
      title: "Neon Commerce",
      tags: ["Next.js", "Stripe"],
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
      description: "Boutique en ligne avec système de paiement sécurisé.",
    }
  ];

  return (
    <section id="showcase" className={`py-12 sm:py-20 md:py-32 px-4 sm:px-6 ${theme === 'brutalist' ? 'border-b-2 border-black' : theme === 'retro' ? 'bg-[#000033]' : theme === 'developer' ? 'bg-slate-950 border-y border-slate-800' : theme === 'organic' ? 'bg-[#fdfcf7]' : theme === 'creative' ? 'bg-rose-50' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6 ${theme === 'minimalist' || theme === 'corporate' ? 'text-center md:text-left' : ''}`}>
          <div>
            <div className={`flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4 ${theme === 'minimalist' || theme === 'corporate' ? 'justify-center md:justify-start' : ''}`}>
              {theme === 'brutalist' && <span className="text-2xl sm:text-4xl font-black">01.</span>}
              {theme === 'retro' && <span className="text-primary font-mono text-sm sm:text-base">[01]</span>}
              {theme === 'developer' && <span className="text-primary font-mono text-sm sm:text-base">0x01</span>}
              <h2 className={`text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest ${theme === 'luxury' || theme === 'organic' ? 'font-serif italic' : theme === 'corporate' ? 'tracking-tight normal-case' : ''}`}>
                Showcase
              </h2>
            </div>
            <p className={`max-w-md text-xs sm:text-sm md:text-base ${theme === 'minimalist' || theme === 'corporate' ? 'mx-auto md:mx-0 text-slate-400' : theme === 'luxury' || theme === 'organic' ? 'italic opacity-60' : 'text-slate-400'}`}>
              Une sélection de créations propulsées par notre moteur.
            </p>
          </div>
          <div className="flex gap-2 justify-center md:justify-end text-xs sm:text-sm">
            <button className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border font-bold cursor-pointer transition-colors ${theme === 'corporate' ? 'bg-blue-600 border-blue-600 text-white' : 'border-primary text-primary hover:bg-primary/5'}`}>Tous</button>
            <button className="px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border border-card-border hover:border-primary transition-colors font-medium cursor-pointer">Web3</button>
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${theme === 'editorial' ? 'lg:gap-20' : theme === 'minimalist' || theme === 'corporate' ? 'md:gap-12' : theme === 'organic' ? 'md:gap-16' : ''}`}>
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`group theme-card ${theme === 'editorial' ? 'aspect-[3/4]' : theme === 'luxury' || theme === 'organic' ? 'aspect-[4/5] border-primary/10' : 'aspect-[4/5]'} transition-all duration-500 ${theme === 'corporate' ? 'shadow-lg hover:shadow-xl border-slate-100' : ''} overflow-hidden`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${theme === 'brutalist' ? 'grayscale' : theme === 'retro' ? 'brightness-125 contrast-125 sepia-[0.5]' : theme === 'luxury' || theme === 'organic' ? 'opacity-60 group-hover:opacity-100' : theme === 'developer' ? 'grayscale group-hover:grayscale-0' : 'opacity-80'}`}
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${theme === 'editorial' ? 'bg-black/10' : theme === 'minimalist' || theme === 'corporate' ? 'bg-white/0 group-hover:bg-white/5' : theme === 'luxury' || theme === 'organic' ? 'bg-black/40 group-hover:bg-black/20' : theme === 'developer' ? 'bg-slate-950/40 group-hover:bg-slate-950/10' : 'bg-gradient-to-t from-bg-main via-transparent to-transparent'}`}></div>
              <div className={`absolute bottom-0 left-0 p-8 w-full ${theme === 'editorial' ? 'bg-white/90 text-black translate-y-0' : theme === 'minimalist' || theme === 'corporate' ? 'bg-white/95 text-black translate-y-0 shadow-xl m-4 w-[calc(100%-2rem)] rounded-xl' : theme === 'luxury' || theme === 'organic' ? 'bg-black/80 backdrop-blur-md border-t border-primary/20 translate-y-0' : theme === 'developer' ? 'bg-slate-900/90 border-t border-slate-800 translate-y-0' : 'translate-y-4 group-hover:translate-y-0'} transition-transform duration-500`}>
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-tighter ${theme === 'minimalist' || theme === 'corporate' ? 'bg-slate-100 border-slate-200 text-slate-500' : theme === 'developer' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-text-main/10 backdrop-blur-md border-text-main/20'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={`text-2xl font-black mb-2 uppercase ${theme === 'luxury' || theme === 'organic' ? 'font-serif italic tracking-normal' : theme === 'corporate' ? 'tracking-tight normal-case font-bold' : ''}`}>{project.title}</h3>
                <p className={`text-sm transition-opacity duration-500 ${theme === 'minimalist' || theme === 'editorial' || theme === 'luxury' || theme === 'corporate' || theme === 'organic' ? 'opacity-70' : 'opacity-0 group-hover:opacity-100'}`}>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = ({ theme }: { theme: Theme }) => (
  <section id="stack" className={`py-12 sm:py-20 md:py-32 px-4 sm:px-6 ${theme === 'brutalist' ? 'bg-primary border-b-2 border-black' : theme === 'minimalist' || theme === 'corporate' ? 'bg-white' : theme === 'retro' || theme === 'developer' ? 'bg-[#000033] border-y-2 border-primary' : theme === 'organic' ? 'bg-[#fdfcf7]' : theme === 'creative' ? 'bg-rose-50' : 'bg-text-main/5'}`}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-2 sm:mb-4">
          {theme === 'brutalist' && <span className="text-2xl sm:text-4xl font-black text-black">02.</span>}
          {theme === 'retro' && <span className="text-primary font-mono text-sm sm:text-base">[02]</span>}
          {theme === 'developer' && <span className="text-primary font-mono text-sm sm:text-base">0x02</span>}
          <h2 className={`text-2xl sm:text-4xl font-black uppercase tracking-widest ${theme === 'brutalist' ? 'text-black' : theme === 'luxury' || theme === 'organic' ? 'font-serif italic' : theme === 'corporate' ? 'tracking-tight normal-case font-bold' : ''}`}>TECH STACK</h2>
        </div>
        <p className={`text-xs sm:text-sm md:text-base ${theme === 'brutalist' ? 'text-black font-bold' : theme === 'luxury' || theme === 'organic' ? 'italic opacity-60' : 'text-slate-400'}`}>Les outils puissants intégrés nativement.</p>
      </div>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 ${theme === 'minimalist' || theme === 'corporate' ? 'md:gap-8' : ''}`}>
        {[
          { icon: <Terminal className={theme === 'brutalist' ? 'text-black' : theme === 'retro' || theme === 'developer' ? 'text-primary' : 'text-accent-2'} size={24} />, name: "React.js" },
          { icon: <Zap className={theme === 'brutalist' ? 'text-black' : theme === 'retro' || theme === 'developer' ? 'text-accent-1' : 'text-accent-1'} size={24} />, name: "Motion" },
          { icon: <Palette className={theme === 'brutalist' ? 'text-black' : theme === 'retro' || theme === 'developer' ? 'text-primary' : 'text-primary'} size={24} />, name: "Tailwind" },
          { icon: <Database className={theme === 'brutalist' ? 'text-black' : theme === 'retro' || theme === 'developer' ? 'text-accent-2' : 'text-accent-2'} size={24} />, name: "Database" }
        ].map((tech, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`theme-card p-3 sm:p-6 md:p-8 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 hover:border-primary/50 transition-colors cursor-default ${theme === 'brutalist' ? 'bg-white border-2 border-black' : theme === 'minimalist' || theme === 'corporate' ? 'bg-slate-50 border-slate-100 shadow-none' : theme === 'luxury' || theme === 'organic' ? 'border-primary/10 bg-black/20' : theme === 'developer' ? 'bg-slate-900/50 border-slate-800' : ''}`}
          >
            {tech.icon}
            <span className={`font-bold text-[10px] sm:text-xs md:text-sm ${theme === 'brutalist' ? 'text-black' : theme === 'luxury' || theme === 'organic' ? 'tracking-widest uppercase' : theme === 'corporate' ? 'text-slate-900' : ''}`}>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CMSSection = ({ theme }: { theme: Theme }) => (
  <section id="cms" className={`py-12 sm:py-20 md:py-32 px-4 sm:px-6 overflow-hidden ${theme === 'brutalist' ? 'border-b-2 border-black' : theme === 'minimalist' || theme === 'corporate' ? 'bg-white' : theme === 'organic' ? 'bg-[#fdfcf7]' : theme === 'creative' ? 'bg-rose-50' : ''}`}>
    <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-20 ${theme === 'minimalist' || theme === 'corporate' ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-1">
        <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          {theme === 'brutalist' && <span className="text-2xl sm:text-4xl font-black">03.</span>}
          {theme === 'retro' && <span className="text-primary font-mono text-sm sm:text-base">[03]</span>}
          {theme === 'developer' && <span className="text-primary font-mono text-sm sm:text-base">0x03</span>}
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-black leading-tight uppercase tracking-widest ${theme === 'luxury' || theme === 'organic' ? 'font-serif italic normal-case tracking-normal' : theme === 'corporate' ? 'tracking-tight normal-case font-bold' : ''}`}>
            CMS <br className="sm:hidden" /> INTUITIF. <br className="hidden sm:block" />
            <span className={theme === 'luxury' || theme === 'organic' ? 'text-primary' : 'text-accent-1'}>PUISSANCE.</span>
          </h2>
        </div>
        <p className={`text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 leading-relaxed ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-500' : theme === 'luxury' || theme === 'organic' ? 'italic opacity-70' : 'text-slate-400'}`}>
          Éditez votre contenu en temps réel. Pas de code nécessaire.
        </p>
        <ul className="space-y-3 sm:space-y-4 md:space-y-6">
          {[
            "Édition WYSIWYG rapide",
            "Gestion média optimisée",
            "SEO natif"
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-2 sm:gap-4">
              <CheckCircle className={theme === 'luxury' || theme === 'organic' ? 'text-primary' : 'text-accent-2'} size={18} />
              <span className={`font-medium text-xs sm:text-sm md:text-base ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-600' : ''}`}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative w-full">
        <div className={`absolute -inset-10 ${theme === 'brutalist' || theme === 'minimalist' || theme === 'corporate' ? 'hidden' : 'bg-accent-1/10 blur-[100px]'} rounded-full`}></div>
        <div className={`relative theme-card overflow-hidden shadow-xl ${theme === 'minimalist' || theme === 'corporate' ? 'border-slate-200 shadow-lg' : theme === 'luxury' || theme === 'organic' ? 'border-primary/20 bg-black/40' : 'border-white/10'}`}>
          <div className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 border-b ${theme === 'minimalist' || theme === 'corporate' ? 'border-slate-100 bg-slate-50' : 'border-card-border bg-text-main/5'}`}>
            <div className="flex gap-1">
              <div className="size-2 sm:size-3 rounded-full bg-red-500/50"></div>
              <div className="size-2 sm:size-3 rounded-full bg-yellow-500/50"></div>
              <div className="size-2 sm:size-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="ml-2 sm:ml-4 text-[8px] sm:text-[10px] text-slate-500 uppercase font-bold tracking-widest">Editor v2.4</div>
          </div>
          <div className="p-3 sm:p-6 md:p-8">
            <div className="space-y-3 sm:space-y-6">
              <div className={`h-3 sm:h-4 w-1/3 rounded ${theme === 'minimalist' || theme === 'corporate' ? 'bg-slate-100' : 'bg-text-main/10'}`}></div>
              <div className={`h-8 sm:h-10 w-full border rounded-lg ${theme === 'minimalist' || theme === 'corporate' ? 'bg-white border-slate-100' : 'bg-text-main/5 border-card-border'}`}></div>
              <div className={`h-3 sm:h-4 w-1/4 rounded ${theme === 'minimalist' || theme === 'corporate' ? 'bg-slate-100' : 'bg-text-main/10'}`}></div>
              <div className={`h-20 sm:h-32 w-full border rounded-lg flex items-center justify-center ${theme === 'minimalist' || theme === 'corporate' ? 'bg-slate-50 border-slate-100' : 'bg-text-main/5 border-card-border'}`}>
                <ImageIcon className={theme === 'minimalist' || theme === 'corporate' ? 'text-slate-200' : 'text-text-main/20'} size={28} />
              </div>
              <div className="flex justify-end">
                <div className="h-8 sm:h-10 w-24 sm:w-32 bg-primary rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Roadmap = ({ theme }: { theme: Theme }) => {
  const steps = [
    {
      q: "Q1 2026",
      title: "Engine Refactoring",
      desc: "Passage à Rust pour le moteur de rendu côté serveur afin de diviser par 3 les temps de chargement.",
      color: "bg-accent-2 shadow-accent-2/50",
      textColor: "text-accent-2"
    },
    {
      q: "Q2 2026",
      title: "AI Design Assistant",
      desc: "Génération de layouts intelligents basée sur votre charte graphique existante.",
      color: "bg-accent-1 shadow-accent-1/50",
      textColor: "text-accent-1",
      reverse: true
    },
    {
      q: "Q3 2026",
      title: "Native Marketplace",
      desc: "Vendez vos propres composants et templates directement sur la plateforme.",
      color: "bg-primary shadow-primary/50",
      textColor: "text-primary"
    }
  ];

  return (
    <section id="roadmap" className={`py-12 sm:py-20 md:py-32 px-4 sm:px-6 ${theme === 'brutalist' ? 'bg-white' : theme === 'retro' || theme === 'developer' ? 'bg-[#000033]' : theme === 'corporate' ? 'bg-white' : theme === 'organic' ? 'bg-[#fdfcf7]' : theme === 'creative' ? 'bg-rose-50' : 'bg-text-main/5'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 md:mb-20">
          {theme === 'brutalist' && <span className="text-2xl sm:text-4xl font-black">04.</span>}
          {theme === 'retro' && <span className="text-primary font-mono text-sm sm:text-base">[04]</span>}
          {theme === 'developer' && <span className="text-primary font-mono text-sm sm:text-base">0x04</span>}
          <h2 className={`text-2xl sm:text-4xl font-black text-center uppercase tracking-widest ${theme === 'luxury' || theme === 'organic' ? 'font-serif italic tracking-normal' : theme === 'corporate' ? 'tracking-tight normal-case font-bold' : ''}`}>Roadmap</h2>
        </div>
        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-px ${theme === 'brutalist' || theme === 'retro' || theme === 'developer' ? 'bg-primary' : 'bg-card-border'}`}></div>
          {steps.map((step, i) => (
            <div key={i} className={`relative mb-12 sm:mb-16 md:mb-24 flex flex-col sm:flex-row items-start gap-4 sm:gap-0 w-full ${step.reverse ? 'sm:flex-row-reverse' : ''}`}>
              <div className={`w-full sm:w-[45%] ${step.reverse ? 'sm:text-left sm:pl-12' : 'sm:text-right sm:pr-12'}`}>
                <span className={`${step.textColor} font-bold mb-1 sm:mb-2 block text-xs sm:text-sm ${theme === 'retro' || theme === 'developer' ? 'animate-pulse' : ''}`}>{step.q}</span>
                <h4 className={`text-lg sm:text-xl font-black mb-1 sm:mb-2 uppercase ${theme === 'luxury' || theme === 'organic' ? 'font-serif italic tracking-normal' : theme === 'corporate' ? 'tracking-tight normal-case font-bold' : ''}`}>{step.title}</h4>
                <p className="text-slate-400 text-xs sm:text-sm">{step.desc}</p>
              </div>
              <div className={`absolute left-1/2 transform -translate-x-1/2 size-3 sm:size-4 rounded-full ${step.color} shadow-[0_0_15px] ${theme === 'retro' || theme === 'developer' ? 'border-2 border-white' : ''}`}></div>
              <div className="hidden sm:block w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ theme }: { theme: Theme }) => (
  <footer className={`py-8 sm:py-12 md:py-20 px-4 sm:px-6 border-t ${theme === 'minimalist' || theme === 'corporate' ? 'bg-white border-slate-100' : 'border-card-border'}`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-8">
          <div className="size-8 sm:size-10 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
            <LayoutGrid size={18} strokeWidth={2.5} />
          </div>
          <span className="text-base sm:text-xl font-black tracking-tighter uppercase">Portfolio.OS</span>
        </div>
        <p className={`max-w-sm mb-4 sm:mb-8 text-xs sm:text-sm leading-relaxed ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-500' : 'text-slate-400'}`}>
          Le système pour votre présence numérique.
        </p>
        <div className="flex gap-2 sm:gap-4">
          <a href="#" className="group relative size-9 sm:size-10 theme-card flex items-center justify-center hover:text-primary transition-colors">
            <Share2 size={16} />
          </a>
          <a href="#" className="group relative size-9 sm:size-10 theme-card flex items-center justify-center hover:text-primary transition-colors">
            <AtSign size={16} />
          </a>
        </div>
      </div>
      <div>
        <h5 className={`font-black mb-4 sm:mb-8 uppercase text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-900' : ''}`}>Plateforme</h5>
        <ul className={`space-y-2 sm:space-y-4 text-xs sm:text-sm ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-500' : 'text-slate-400'}`}>
          <li><a href="#" className="hover:text-text-main transition-colors">Projets</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Composants</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Docs</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">API</a></li>
        </ul>
      </div>
      <div>
        <h5 className={`font-black mb-4 sm:mb-8 uppercase text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-900' : ''}`}>Entreprise</h5>
        <ul className={`space-y-2 sm:space-y-4 text-xs sm:text-sm ${theme === 'minimalist' || theme === 'corporate' ? 'text-slate-500' : 'text-slate-400'}`}>
          <li><a href="#" className="hover:text-text-main transition-colors">À Propos</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Légal</a></li>
        </ul>
      </div>
    </div>
    <div className={`max-w-7xl mx-auto mt-6 sm:mt-12 md:mt-20 pt-4 sm:pt-6 md:pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm font-medium ${theme === 'minimalist' || theme === 'corporate' ? 'border-slate-100 text-slate-400' : 'border-card-border text-slate-500'}`}>
      <p>© 2026 Portfolio.OS. Tous droits réservés.</p>
      <div className="flex gap-4 sm:gap-8 text-xs">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [theme, setTheme] = useState<Theme>("futuristic");
  const [isSwitching, setIsSwitching] = useState(false);

  const [targetTheme, setTargetTheme] = useState<Theme | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    if (newTheme === theme) return;
    setTargetTheme(newTheme);
    setIsSwitching(true);
    setTimeout(() => {
      setTheme(newTheme);
      setTimeout(() => {
        setIsSwitching(false);
        setTargetTheme(null);
      }, 500);
    }, 300);
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white transition-colors duration-500">
      <AnimatePresence>
        {isSwitching && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-bg-main flex items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="size-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs font-black uppercase tracking-[0.5em] animate-pulse">
                Switching to {themes.find(t => t.id === (targetTheme || theme))?.label} Edition...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar theme={theme} />
      <Hero theme={theme} />
      <Showcase theme={theme} />
      <TechStack theme={theme} />
      <CMSSection theme={theme} />
      <Roadmap theme={theme} />
      <Footer theme={theme} />
      <StyleSwitcher current={theme} onChange={handleThemeChange} />
    </div>
  );
}
