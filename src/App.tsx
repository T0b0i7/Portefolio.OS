import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LayoutGrid, PlayCircle, Terminal, Zap, Palette, Database, CheckCircle, Image as ImageIcon, Share2, AtSign, Monitor, BookOpen, Skull } from "lucide-react";

type Theme = "futuristic" | "editorial" | "brutalist";

const StyleSwitcher = ({ current, onChange }: { current: Theme, onChange: (t: Theme) => void }) => {
  const themes: { id: Theme, icon: any, label: string }[] = [
    { id: "futuristic", icon: <Monitor size={18} />, label: "Futuriste" },
    { id: "editorial", icon: <BookOpen size={18} />, label: "Éditorial" },
    { id: "brutalist", icon: <Skull size={18} />, label: "Brutaliste" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-2">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`group relative size-12 flex items-center justify-center rounded-full transition-all duration-300 shadow-xl border ${
            current === t.id 
              ? "bg-primary text-white border-primary" 
              : "bg-card-bg text-text-main border-card-border hover:border-primary/50"
          }`}
        >
          {t.icon}
          <span className="absolute right-full mr-4 px-3 py-1 bg-card-bg border border-card-border text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t.label}
          </span>
        </button>
      ))}
    </div>
  );
};

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 px-6 py-4">
    <nav className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-4 rounded-full">
      <div className="flex items-center gap-3">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
          <LayoutGrid size={24} strokeWidth={2.5} />
        </div>
        <span className="text-xl font-black tracking-tighter uppercase">Portfolio.OS</span>
      </div>
      <div className="hidden md:flex items-center gap-10">
        <a href="#showcase" className="text-sm font-medium hover:text-primary transition-colors">Showcase</a>
        <a href="#stack" className="text-sm font-medium hover:text-primary transition-colors">Stack</a>
        <a href="#cms" className="text-sm font-medium hover:text-primary transition-colors">CMS</a>
        <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors">Roadmap</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="theme-button">
          Start Building
        </button>
      </div>
    </nav>
  </header>
);

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

  return (
    <section className="relative pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          V2.0 est maintenant disponible
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.9] uppercase"
        >
          L'AVENIR DU <br />
          <span className="text-gradient">PORTFOLIO</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12"
        >
          Concevez des expériences numériques monumentales. Une plateforme next-gen pour les créatifs qui refusent les standards.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-text-main text-bg-main font-black rounded-xl text-lg hover:opacity-80 transition-all cursor-pointer">
            Commencer l'aventure
          </button>
          <button className="w-full sm:w-auto px-10 py-5 theme-card font-bold rounded-xl text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer">
            <PlayCircle size={24} />
            Démo Vidéo
          </button>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 max-w-6xl mx-auto theme-card shadow-2xl relative group"
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
    <section id="showcase" className={`py-32 px-6 ${theme === 'brutalist' ? 'border-b-2 border-black' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              {theme === 'brutalist' && <span className="text-4xl font-black">01.</span>}
              <h2 className="text-4xl md:text-5xl font-black uppercase">Showcase</h2>
            </div>
            <p className="text-slate-400 max-w-md">Une sélection de créations propulsées par notre moteur de rendu ultra-rapide.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-full border border-primary text-primary font-bold text-sm cursor-pointer">Tous</button>
            <button className="px-6 py-2 rounded-full border border-card-border hover:border-primary transition-colors text-sm font-medium cursor-pointer">Web3</button>
          </div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${theme === 'editorial' ? 'lg:gap-20' : ''}`}>
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`group theme-card ${theme === 'editorial' ? 'aspect-[3/4]' : 'aspect-[4/5]'} transition-all duration-500`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${theme === 'brutalist' ? 'grayscale' : 'opacity-80'}`}
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${theme === 'editorial' ? 'bg-black/10' : 'bg-gradient-to-t from-bg-main via-transparent to-transparent'}`}></div>
              <div className={`absolute bottom-0 left-0 p-8 w-full ${theme === 'editorial' ? 'bg-white/90 text-black translate-y-0' : 'translate-y-4 group-hover:translate-y-0'} transition-transform duration-500`}>
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-text-main/10 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full border border-text-main/20 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase">{project.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
  <section id="stack" className={`py-32 px-6 ${theme === 'brutalist' ? 'bg-primary border-b-2 border-black' : 'bg-text-main/5'}`}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-4">
          {theme === 'brutalist' && <span className="text-4xl font-black text-black">02.</span>}
          <h2 className={`text-4xl font-black uppercase ${theme === 'brutalist' ? 'text-black' : ''}`}>NOTRE TECH STACK</h2>
        </div>
        <p className={theme === 'brutalist' ? 'text-black font-bold' : 'text-slate-400'}>Les outils les plus puissants du marché intégrés nativement.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Terminal className={theme === 'brutalist' ? 'text-black' : 'text-accent-2'} size={32} />, name: "React.js" },
          { icon: <Zap className={theme === 'brutalist' ? 'text-black' : 'text-accent-1'} size={32} />, name: "Framer Motion" },
          { icon: <Palette className={theme === 'brutalist' ? 'text-black' : 'text-primary'} size={32} />, name: "Tailwind CSS" },
          { icon: <Database className={theme === 'brutalist' ? 'text-black' : 'text-accent-2'} size={32} />, name: "Supabase" }
        ].map((tech, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`theme-card p-8 flex flex-col items-center gap-4 hover:border-primary/50 transition-colors cursor-default ${theme === 'brutalist' ? 'bg-white border-2 border-black' : ''}`}
          >
            {tech.icon}
            <span className={`font-bold ${theme === 'brutalist' ? 'text-black' : ''}`}>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CMSSection = ({ theme }: { theme: Theme }) => (
  <section id="cms" className={`py-32 px-6 overflow-hidden ${theme === 'brutalist' ? 'border-b-2 border-black' : ''}`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-8">
          {theme === 'brutalist' && <span className="text-4xl font-black">03.</span>}
          <h2 className="text-5xl font-black leading-tight uppercase">
            CMS INTUITIF. <br />
            <span className="text-accent-1">PUISSANCE BRUTE.</span>
          </h2>
        </div>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          Éditez votre contenu en temps réel. Pas de code nécessaire pour les mises à jour quotidiennes, mais une liberté totale pour les développeurs.
        </p>
        <ul className="space-y-6">
          {[
            "Édition WYSIWYG ultra-rapide",
            "Gestion d'actifs média optimisée",
            "SEO intégré de manière native"
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-4">
              <CheckCircle className="text-accent-2" size={20} />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative">
        <div className={`absolute -inset-10 ${theme === 'brutalist' ? 'hidden' : 'bg-accent-1/10 blur-[100px]'} rounded-full`}></div>
        <div className="relative theme-card border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-6 py-3 border-b border-card-border bg-text-main/5">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500/50"></div>
              <div className="size-3 rounded-full bg-yellow-500/50"></div>
              <div className="size-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="ml-4 text-[10px] text-slate-500 uppercase font-bold tracking-widest">Editor v2.4</div>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div className="h-4 w-1/3 bg-text-main/10 rounded"></div>
              <div className="h-10 w-full bg-text-main/5 border border-card-border rounded-lg"></div>
              <div className="h-4 w-1/4 bg-text-main/10 rounded"></div>
              <div className="h-32 w-full bg-text-main/5 border border-card-border rounded-lg flex items-center justify-center">
                <ImageIcon className="text-text-main/20" size={40} />
              </div>
              <div className="flex justify-end">
                <div className="h-10 w-32 bg-primary rounded-lg"></div>
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
      q: "Q1 2024",
      title: "Engine Refactoring",
      desc: "Passage à Rust pour le moteur de rendu côté serveur afin de diviser par 3 les temps de chargement.",
      color: "bg-accent-2 shadow-accent-2/50",
      textColor: "text-accent-2"
    },
    {
      q: "Q2 2024",
      title: "AI Design Assistant",
      desc: "Génération de layouts intelligents basée sur votre charte graphique existante.",
      color: "bg-accent-1 shadow-accent-1/50",
      textColor: "text-accent-1",
      reverse: true
    },
    {
      q: "Q3 2024",
      title: "Native Marketplace",
      desc: "Vendez vos propres composants et templates directement sur la plateforme.",
      color: "bg-primary shadow-primary/50",
      textColor: "text-primary"
    }
  ];

  return (
    <section id="roadmap" className={`py-32 px-6 ${theme === 'brutalist' ? 'bg-white' : 'bg-text-main/5'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-20">
          {theme === 'brutalist' && <span className="text-4xl font-black">04.</span>}
          <h2 className="text-4xl font-black text-center uppercase tracking-widest">Roadmap 2024</h2>
        </div>
        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-px ${theme === 'brutalist' ? 'bg-black' : 'bg-card-border'}`}></div>
          {steps.map((step, i) => (
            <div key={i} className={`relative mb-24 flex items-center justify-between w-full ${step.reverse ? 'flex-row-reverse' : ''}`}>
              <div className={`w-[45%] ${step.reverse ? 'text-left pl-12' : 'text-right pr-12'}`}>
                <span className={`${step.textColor} font-bold mb-2 block`}>{step.q}</span>
                <h4 className="text-xl font-black mb-2 uppercase">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
              <div className={`absolute left-1/2 transform -translate-x-1/2 size-4 rounded-full ${step.color} shadow-[0_0_15px]`}></div>
              <div className="w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-card-border">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
            <LayoutGrid size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Portfolio.OS</span>
        </div>
        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
          Le système d'exploitation définitif pour votre présence numérique. Construisez plus vite, designez mieux.
        </p>
        <div className="flex gap-4">
          <a href="#" className="group relative size-10 theme-card flex items-center justify-center hover:text-primary transition-colors">
            <Share2 size={18} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card-bg border border-card-border text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Partager
            </span>
          </a>
          <a href="#" className="group relative size-10 theme-card flex items-center justify-center hover:text-primary transition-colors">
            <AtSign size={18} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card-bg border border-card-border text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Contact
            </span>
          </a>
        </div>
      </div>
      <div>
        <h5 className="font-black mb-8 uppercase text-xs tracking-[0.2em]">Plateforme</h5>
        <ul className="space-y-4 text-sm text-slate-400">
          <li><a href="#" className="hover:text-text-main transition-colors">Projets</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Composants</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">API Reference</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-black mb-8 uppercase text-xs tracking-[0.2em]">Entreprise</h5>
        <ul className="space-y-4 text-sm text-slate-400">
          <li><a href="#" className="hover:text-text-main transition-colors">À Propos</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-text-main transition-colors">Légal</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
      <p>© 2024 Portfolio.OS. Tous droits réservés.</p>
      <div className="flex gap-8">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [theme, setTheme] = useState<Theme>("futuristic");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white transition-colors duration-500">
      <Navbar />
      <Hero theme={theme} />
      <Showcase theme={theme} />
      <TechStack theme={theme} />
      <CMSSection theme={theme} />
      <Roadmap theme={theme} />
      <Footer />
      <StyleSwitcher current={theme} onChange={setTheme} />
    </div>
  );
}
