import { motion } from "motion/react";
import { LayoutGrid, PlayCircle, Terminal, Zap, Palette, Database, CheckCircle, Image as ImageIcon, Share2, AtSign } from "lucide-react";

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
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 cursor-pointer">
          Start Building
        </button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
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
        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-[0.9]"
      >
        L'AVENIR DU <br />
        <span className="text-gradient-purple">PORTFOLIO</span>
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
        <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-xl text-lg hover:bg-slate-200 transition-colors cursor-pointer">
          Commencer l'aventure
        </button>
        <button className="w-full sm:w-auto px-10 py-5 glass-card font-bold rounded-xl text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer">
          <PlayCircle size={24} />
          Démo Vidéo
        </button>
      </motion.div>
    </div>
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-20 max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent z-10 opacity-40"></div>
      <img 
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1920" 
        alt="Interface de développement" 
        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  </section>
);

const Showcase = () => {
  const projects = [
    {
      title: "Cyber Dashboard",
      tags: ["React", "Three.js"],
      image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
      description: "Analytiques temps réel avec visualisation 3D immersive.",
      colors: "from-neon-purple/20 text-neon-purple border-neon-purple/30"
    },
    {
      title: "Améthyste App",
      tags: ["Framer", "WebGL"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description: "Expérience mobile minimaliste et fluide.",
      colors: "from-neon-cyan/20 text-neon-cyan border-neon-cyan/30"
    },
    {
      title: "Neon Commerce",
      tags: ["Next.js", "Stripe"],
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
      description: "Boutique en ligne avec système de paiement sécurisé.",
      colors: "from-primary/20 text-primary border-primary/30"
    }
  ];

  return (
    <section id="showcase" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Showcase</h2>
            <p className="text-slate-400 max-w-md">Une sélection de créations propulsées par notre moteur de rendu ultra-rapide.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-2 rounded-full border border-primary text-primary font-bold text-sm cursor-pointer">Tous</button>
            <button className="px-6 py-2 rounded-full border border-white/10 hover:border-white/40 transition-colors text-sm font-medium cursor-pointer">Web3</button>
            <button className="px-6 py-2 rounded-full border border-white/10 hover:border-white/40 transition-colors text-sm font-medium cursor-pointer">Design</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden glass-card neon-border-hover transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`bg-white/10 backdrop-blur-md text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-tighter`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

const TechStack = () => (
  <section id="stack" className="py-32 px-6 bg-charcoal/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black mb-4">NOTRE TECH STACK</h2>
        <p className="text-slate-400">Les outils les plus puissants du marché intégrés nativement.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: <Terminal className="text-neon-cyan" size={32} />, name: "React.js" },
          { icon: <Zap className="text-neon-purple" size={32} />, name: "Framer Motion" },
          { icon: <Palette className="text-primary" size={32} />, name: "Tailwind CSS" },
          { icon: <Database className="text-neon-cyan" size={32} />, name: "Supabase" }
        ].map((tech, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center gap-4 hover:border-primary/50 transition-colors cursor-default"
          >
            {tech.icon}
            <span className="font-bold">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CMSSection = () => (
  <section id="cms" className="py-32 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
      <div className="flex-1">
        <h2 className="text-5xl font-black mb-8 leading-tight">
          CMS INTUITIF. <br />
          <span className="text-neon-purple">PUISSANCE BRUTE.</span>
        </h2>
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
              <CheckCircle className="text-neon-cyan" size={20} />
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative">
        <div className="absolute -inset-10 bg-neon-purple/10 blur-[100px] rounded-full"></div>
        <div className="relative glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-6 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-red-500/50"></div>
              <div className="size-3 rounded-full bg-yellow-500/50"></div>
              <div className="size-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="ml-4 text-[10px] text-slate-500 uppercase font-bold tracking-widest">Editor v2.4</div>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              <div className="h-4 w-1/3 bg-white/10 rounded"></div>
              <div className="h-10 w-full bg-white/5 border border-white/10 rounded-lg"></div>
              <div className="h-4 w-1/4 bg-white/10 rounded"></div>
              <div className="h-32 w-full bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <ImageIcon className="text-white/20" size={40} />
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

const Roadmap = () => {
  const steps = [
    {
      q: "Q1 2024",
      title: "Engine Refactoring",
      desc: "Passage à Rust pour le moteur de rendu côté serveur afin de diviser par 3 les temps de chargement.",
      color: "bg-neon-cyan shadow-neon-cyan/50",
      textColor: "text-neon-cyan"
    },
    {
      q: "Q2 2024",
      title: "AI Design Assistant",
      desc: "Génération de layouts intelligents basée sur votre charte graphique existante.",
      color: "bg-neon-purple shadow-neon-purple/50",
      textColor: "text-neon-purple",
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
    <section id="roadmap" className="py-32 px-6 bg-charcoal/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-widest">Roadmap 2024</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10"></div>
          {steps.map((step, i) => (
            <div key={i} className={`relative mb-24 flex items-center justify-between w-full ${step.reverse ? 'flex-row-reverse' : ''}`}>
              <div className={`w-[45%] ${step.reverse ? 'text-left pl-12' : 'text-right pr-12'}`}>
                <span className={`${step.textColor} font-bold mb-2 block`}>{step.q}</span>
                <h4 className="text-xl font-black mb-2">{step.title}</h4>
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
  <footer className="py-20 px-6 border-t border-white/5">
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
          <a href="#" className="size-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-colors">
            <Share2 size={18} />
          </a>
          <a href="#" className="size-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-colors">
            <AtSign size={18} />
          </a>
        </div>
      </div>
      <div>
        <h5 className="font-black mb-8 uppercase text-xs tracking-[0.2em]">Plateforme</h5>
        <ul className="space-y-4 text-sm text-slate-400">
          <li><a href="#" className="hover:text-white transition-colors">Projets</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Composants</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-black mb-8 uppercase text-xs tracking-[0.2em]">Entreprise</h5>
        <ul className="space-y-4 text-sm text-slate-400">
          <li><a href="#" className="hover:text-white transition-colors">À Propos</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Légal</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
      <p>© 2024 Portfolio.OS. Tous droits réservés.</p>
      <div className="flex gap-8">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Showcase />
      <TechStack />
      <CMSSection />
      <Roadmap />
      <Footer />
    </div>
  );
}
