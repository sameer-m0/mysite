import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Shield, 
  Zap, 
  TrendingUp, 
  Search, 
  MonitorPlay, 
  PenTool,
  ArrowLeft,
  Quote
} from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// --- Utility Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Section = ({ children, className = '', id = '' }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick
}: { 
  children: ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string;
  onClick?: () => void;
}) => {
  const base = "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-lg",
    secondary: "bg-brand-card text-white hover:bg-zinc-800 border border-brand-border",
    outline: "border border-brand-border text-white hover:border-white"
  };
  
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// --- Page Sections ---

const Navbar = ({ onBookCall }: { onBookCall: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
    <Link to="/" className="group outline-none">
      <span className="font-display text-white font-bold tracking-tighter text-3xl leading-none">
        InkLine<span className="text-amber-400">.</span>
      </span>
    </Link>
    <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
      {['Services', 'Positioning', 'Process', 'Work'].map(item => (
        <a key={item} href={`/#${item.toLowerCase()}`} className="hover:text-white transition-colors uppercase tracking-widest text-[10px]">
          {item}
        </a>
      ))}
    </div>
    <div className="flex gap-4">
      <Link to="/case-studies" className="hidden sm:block">
        <Button variant="outline" className="px-5 py-2 text-[10px] !rounded-md uppercase tracking-widest">
          Case Studies
        </Button>
      </Link>
      <Button onClick={onBookCall} variant="primary" className="px-5 py-2 text-[10px] !rounded-md uppercase tracking-widest font-bold">
        Book Call
      </Button>
    </div>
  </nav>
);

const Hero = ({ onBookCall }: { onBookCall: () => void }) => (
  <Section className="pt-40 md:pt-52 pb-32 flex flex-col items-center text-center">
    <FadeIn>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border mb-8 bg-brand-card/50">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300">Available for Q3 Strategy</span>
      </div>
    </FadeIn>
    
    <FadeIn delay={0.1}>
      <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-gradient max-w-5xl">
        We help founders and CXOs turn ideas into authority.
      </h1>
    </FadeIn>

    <FadeIn delay={0.2}>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
        Ghostwriting, content systems, and distribution strategies that drive visibility, credibility, and inbound leads. For the elite few who refuse to sound like AI noise.
      </p>
    </FadeIn>

    <FadeIn delay={0.3}>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={onBookCall}>
          Book a Call <ArrowUpRight className="w-4 h-4" />
        </Button>
        <Link to="/case-studies">
          <Button variant="outline">
            View Work
          </Button>
        </Link>
      </div>
    </FadeIn>
  </Section>
);

const TrustStrip = () => (
  <div className="border-y border-brand-border bg-black/50 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
      <span className="font-display text-2xl font-bold tracking-tighter text-white">CRED</span>
      <span className="font-display text-2xl font-bold tracking-tighter text-white uppercase italic">Zynga</span>
      <span className="font-display text-2xl font-bold tracking-tighter text-white">mamaearth</span>
      <span className="font-display text-2xl font-bold tracking-tighter text-white">Razorpay</span>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Deep-Research (SEO & AEO)",
      desc: "Original narratives that AI cannot hallucinate. We conduct SME interviews and analyze proprietary data to rank on Google and capture LLM crawlers.",
      outcome: "Captures MOFU traffic and reduces enterprise 'Implementation Terror'."
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Substack (The BOFU Engine)",
      desc: "Moving audiences from rented platforms to owned assets. Weekly deep-dives designed to build deep parasocial trust and high-conviction leads.",
      outcome: "Turns passive readers into strategy session bookings."
    },
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "Founder LinkedIn",
      desc: "Executive presence management. Translating your unique worldview into punchy, scroll-stopping content via asynchronous voice notes.",
      outcome: "Drives top-of-funnel awareness and direct partnership inquiries."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "EGC (Employee Content)",
      desc: "Creating a 'surround-sound' effect. We build playbooks for your Sales and Eng teams to multiply your brand's organic reach effortlessly.",
      outcome: "Humanizes the brand and proves deep bench strength."
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-white" />,
      title: "Carousel Posts",
      desc: "High-contrast visual slides that distill complex frameworks into bite-sized playbooks optimized for dwell time and algorithm favor.",
      outcome: "Highest engagement and save rates for tactical authority."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Corporate Management",
      desc: "The official broadcast channel. Balancing product updates, case studies, and culture to provide necessary corporate validation.",
      outcome: "Essential credibility for prospects performing due diligence."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Google Ads (Demand Capture)",
      desc: "Capturing existing intent. Tightly themed ad groups focusing on pain points and competitor alternatives with high-conversion CRO.",
      outcome: "Supplements organic efforts with instant visibility."
    }
  ];

  return (
    <Section id="services">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">The Ecosystem</span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl max-w-4xl tracking-tight">
          Not just content. <br />
          <span className="text-gray-500">A pipeline engine.</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="glass-card p-10 h-full flex flex-col justify-between hover:border-white/20 transition-all duration-500 group">
              <div>
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-brand-border flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black mb-8">
                  {s.icon}
                </div>
                <h3 className="text-xl mb-4 text-white group-hover:translate-x-1 transition-transform duration-500">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{s.desc}</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[9px] uppercase tracking-widest text-white/40 block mb-2">The Outcome</span>
                <p className="text-xs text-gray-400 font-medium">{s.outcome}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

const Positioning = () => (
  <Section id="positioning" className="bg-white text-black !max-w-none w-full">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl text-black leading-tight tracking-tighter">
            AI made content easy. <br />
            <span className="text-zinc-400">It also made it invisible.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed">
              Most agencies are just using LLMs to shout into the void. At InkLine, we conduct SME interviews to capture narratives that AI cannot hallucinate.
            </p>
            <p className="text-zinc-600 leading-relaxed font-medium">
              We provide the hybrid strategy you need: human intelligence at the core, extracted from your real-world experience, and augmented by clinical distribution systems for scale. No generic prompts. Just high-signal authority.
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold">100%</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Anti-Hallucination</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold">SME</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Interview Led</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold">BOFU</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Conversion Focus</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </Section>
);

const Process = () => {
  const steps = [
    { title: "Extraction", desc: "Weekly SME interviews and async voice notes to capture your unique worldview." },
    { title: "Architecture", desc: "Mapping your narrative to a BOFU engine that drives actual pipeline." },
    { title: "Production", desc: "Anti-hallucination drafting of articles, newsletters, and social assets." },
    { title: "Distribution", desc: "Executing 'surround-sound' across LinkedIn, Substack, and Search." },
    { title: "Optimization", desc: "Converting rented platform metrics into owned asset growth and leads." }
  ];

  return (
    <Section id="process">
      <div className="text-center mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">The Workflow</span>
        <h2 className="text-4xl md:text-5xl mb-6">A clinical approach to authority.</h2>
        <p className="text-gray-500 max-w-xl mx-auto">We don't guess. We extract, architect, and optimize.</p>
      </div>
      
      <div className="relative">
        <div className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-[1px] bg-brand-border z-0" />
        <div className="grid lg:grid-cols-5 gap-12 relative z-10">
          {steps.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                <div className="w-12 h-12 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center mb-6 text-white font-display font-bold text-lg group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {i + 1}
                </div>
                <h3 className="text-lg mb-3 font-bold text-white uppercase tracking-tight">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Work = () => (
  <Section id="work">
    <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">Proven Results</span>
        <h2 className="text-4xl md:text-5xl">Moving from rented platforms to owned pipeline.</h2>
      </div>
      <Link to="/case-studies">
        <Button variant="outline">Case Studies <ChevronRight className="w-4 h-4" /></Button>
      </Link>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        { label: "Fintech Growth", title: "Reduced enterprise 'Implementation Terror' and increased MOFU leads by 40%.", metric: "40%+" },
        { label: "SaaS Authority", title: "Shortened sales cycle by 15% through a clinical BOFU Substack engine.", metric: "15%" }
      ].map((case_, i) => (
        <FadeIn key={i} delay={i * 0.2}>
          <Link to="/case-studies" className="block outline-none">
            <div className="glass-card group overflow-hidden cursor-pointer">
              <div className="aspect-video bg-zinc-900 border-b border-brand-border flex items-center justify-center relative p-12">
                <span className="text-8xl font-display font-bold text-white/5 absolute transition-transform group-hover:scale-110">
                  {case_.metric}
                </span>
                <p className="text-xl font-display font-medium text-center relative z-10 text-white leading-relaxed">
                  {case_.title}
                </p>
              </div>
              <div className="p-6 flex justify-between items-center bg-brand-card/30">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{case_.label}</span>
                <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const Testimonials = () => (
  <Section className="border-t border-brand-border !py-32">
    <div className="grid lg:grid-cols-3 gap-12">
      {[
        { text: "InkLine didn't just write for me; they helped me move my audience from a rented platform to a high-conviction owned asset.", author: "CEO, Series C Fintech" },
        { text: "The SME interview process is clinical. They extracted narratives our internal team didn't even know were there.", author: "Founder, Zynga-backed startup" },
        { text: "We achieved 'surround-sound' visibility across our sales and engineering teams in 90 days. The EGC playbook is a game changer.", author: "CMO, Enterprise SaaS" }
      ].map((t, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <div className="p-8 border-l border-brand-border space-y-6">
            <p className="text-lg italic text-gray-300 leading-relaxed">"{t.text}"</p>
            <div className="pt-4">
              <div className="text-white font-bold text-sm tracking-tight">{t.author}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Verified Client</div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </Section>
);

const FinalCTA = ({ onBookCall }: { onBookCall: () => void }) => (
  <Section className="!py-40">
    <div className="glass-card bg-linear-to-br from-zinc-900 to-black p-12 md:p-24 text-center rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-7xl mb-8 tracking-tighter">Ready to capture demand?</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
          We only take on 3 new clients per quarter to ensure premium SME-led output. Book a strategy call to see if we're a fit for your authority goals.
        </p>
        <div className="flex justify-center">
          <Button onClick={onBookCall} variant="primary" className="!px-12 !py-6 text-lg">
            Book a strategy call <MessageSquare className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-brand-border bg-black">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 lg:col-span-2">
        <Link to="/" className="group outline-none inline-block mb-6">
          <span className="font-display text-white font-bold tracking-tighter text-3xl leading-none">
            InkLine<span className="text-amber-400">.</span>
          </span>
        </Link>
        <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
          Premium ghostwriting, distribution, and authority systems for the world's most ambitious founders and CXOs.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Contact</h4>
        <div className="space-y-4">
          <a href="mailto:hello@inklineauthority.io" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /> hello@inklineauthority.io
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Agency</h4>
        <ul className="space-y-4 text-sm text-gray-500">
          <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
      <span className="text-[10px] uppercase tracking-widest text-gray-600">© 2026 InkLine. Global Agency.</span>
      <span className="text-[10px] uppercase tracking-widest text-gray-600">Built for Authority.</span>
    </div>
  </footer>
);

// --- Pages ---

const Home = ({ onBookCall }: { onBookCall: () => void }) => (
  <>
    <Hero onBookCall={onBookCall} />
    <TrustStrip />
    <Services />
    <Positioning />
    <Process />
    <Work />
    <Testimonials />
    <FinalCTA onBookCall={onBookCall} />
  </>
);

const CaseStudiesPage = ({ onBookCall }: { onBookCall: () => void }) => {
  const cases = [
    {
      title: "Eliminating 'Implementation Terror'",
      client: "Founder, Series C Neo-bank",
      stats: [
        { label: "New Followers", val: "12,400+" },
        { label: "Pipeline Value", val: "$1.2M" },
        { label: "Sales Cycle Red.", val: "15%" }
      ],
      challenge: "The founder had world-class ideas but enterprise buyers were spooked by implementation complexity. Their content was too high-level.",
      solution: "We used SME interviews to build 'Tactical Authority' through deep-research articles and visual carousels that demystified the implementation process.",
      outcome: "Within 6 months, the founder became the go-to authority for B2B fintech, reducing friction in the sales process and securing $1.2M in new pipeline."
    },
    {
      title: "The BOFU Substack Engine",
      client: "CMO, Enterprise AI SaaS",
      stats: [
        { label: "Newsletter Growth", val: "800%" },
        { label: "MQLs from Content", val: "45/mo" },
        { label: "Owned Audience", val: "15K+" }
      ],
      challenge: "Engaged on LinkedIn, but zero conversion control. The AI market noise made their standard content 'invisible'.",
      solution: "We pivoted to an 'Owned Asset' strategy, launching a Substack focusing on 'Anti-Hype AI'—moving passive followers into a clinical email ecosystem.",
      outcome: "The newsletter became their primary conversion driver, generating 45 high-intent MQLs per month and proving deep bench strength to prospects."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <Section>
        <FadeIn>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors text-sm group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl mb-8">Clinical proof of authority.</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-20">
            We don't deal in likes. We deal in pipeline, perception, and power. Explore how we’ve transformed voices into owned assets.
          </p>
        </FadeIn>

        <div className="space-y-32">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={0.1}>
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">Case Study 0{i + 1}</span>
                    <h2 className="text-3xl md:text-5xl mb-4 leading-tight">{c.title}</h2>
                    <p className="text-white/60 font-medium">{c.client}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 border-y border-brand-border py-8">
                    {c.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-display font-bold text-white">{s.val}</div>
                        <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="glass-card p-8 bg-white/[0.02]">
                    <Quote className="w-8 h-8 text-white/10 mb-6" />
                    <p className="text-lg text-gray-300 italic leading-relaxed">
                      "InkLine took my scattered thoughts and turned them into a cohesive narrative that actually moves the needle on our business goals. They moved us from vanity to pipeline."
                    </p>
                  </div>
                </div>

                <div className="space-y-10 pt-4 lg:pt-20">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-white mb-4 border-b border-brand-border pb-2 w-fit">The Challenge</h3>
                    <p className="text-gray-500 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-white mb-4 border-b border-brand-border pb-2 w-fit">Our Strategy</h3>
                    <p className="text-gray-500 leading-relaxed font-medium text-white/80">{c.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-white mb-4 border-b border-brand-border pb-2 w-fit">The Outcome</h3>
                    <p className="text-gray-500 leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
      <FinalCTA onBookCall={onBookCall} />
    </div>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl glass-card bg-brand-bg p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-4 font-display font-bold tracking-tight">The Authority Call.</h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              We aren't looking for projects. We are looking for founders ready to architect an owned asset empire. Leave your details or reach out directly.
            </p>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Strategic intake received. Expect a clinical response within 24h.');
              onClose();
            }}>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white outline-none focus:border-white/25 transition-colors" placeholder="Founder Name" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">Email</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white outline-none focus:border-white/25 transition-colors" placeholder="founder@company.io" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2 block">Worldview / Goal</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white outline-none focus:border-white/25 transition-colors h-32 resize-none" placeholder="What authority gap are we closing?" />
              </div>
              <Button variant="primary" className="w-full !rounded-lg font-bold">
                Submit Strategy Request
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              <a href="mailto:hello@inklineauthority.io" className="hover:text-white transition-colors">hello@inklineauthority.io</a>
              <span className="text-white/20 hidden sm:block">|</span>
              <span>Global Client intake open</span>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="selection:bg-white selection:text-black min-h-screen">
      <ScrollToTop />
      <Navbar onBookCall={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onBookCall={() => setIsModalOpen(true)} />} />
        <Route path="/case-studies" element={<CaseStudiesPage onBookCall={() => setIsModalOpen(true)} />} />
      </Routes>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
