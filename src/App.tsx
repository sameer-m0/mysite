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

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: React.Key }) => (
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
  <div className="border-y border-brand-border bg-black/50 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 items-center justify-items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {/* Row 1 */}
        <span className="font-jakarta text-2xl font-extrabold tracking-[-0.08em] text-white uppercase">CRED</span>
        
        <div className="flex items-center gap-1">
          <img src="https://cdn.simpleicons.org/zynga/white" className="h-5" alt="" referrerPolicy="no-referrer" />
          <span className="font-sans text-xl font-black tracking-tighter text-white lowercase">zynga</span>
        </div>

        <span className="font-comfortaa text-xl font-bold text-white lowercase">mamaearth</span>

        <div className="flex items-center gap-1.5">
          <img src="https://cdn.simpleicons.org/razorpay/white" className="h-5" alt="" referrerPolicy="no-referrer" />
          <span className="font-sans text-xl font-extrabold italic tracking-tighter text-white">Razorpay</span>
        </div>

        {/* Row 2 */}
        <span className="font-syne text-xl font-extrabold tracking-tighter text-white uppercase">NeoSapien</span>

        <span className="font-display text-xl font-light tracking-[0.15em] text-white uppercase">Mindcase</span>

        <span className="font-sans text-lg font-black tracking-tight text-white">DailyObjects</span>

        <div className="flex flex-col items-center">
          <span className="font-display text-base font-black tracking-tighter text-white uppercase leading-none">Bonkers</span>
          <span className="font-display text-[10px] font-bold tracking-[0.3em] text-white uppercase border-t border-white mt-0.5 pt-0.5">Corner</span>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <PenTool className="w-6 h-6 text-white" />,
      title: "The Hook (Social)",
      desc: "Founder ghostwriting, EGC, and high-value carousels that dominate LinkedIn feeds and capture mindshare.",
      outcome: "Dominates LinkedIn feeds and drives top-of-funnel connection."
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "The Engine (MOFU)",
      desc: "Deep-research articles and a high-converting website experience that answers questions and builds trust.",
      outcome: "Reduces 'Implementation Terror' and educates prospects."
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "The Vault (BOFU)",
      desc: "Premium Substack newsletters that convert rented social audiences into owned, high-intent buyers.",
      outcome: "Turns passive readers into high-conviction pipeline."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "The Accelerator (Paid)",
      desc: "Precision Google Ads to capture active demand and drive immediate ROI through search intent.",
      outcome: "Captures active demand exactly when buyers are searching."
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-white" />,
      title: "Carousel Posts",
      desc: "Highly visual distillations of complex frameworks, optimized for dwell time and algorithm favor.",
      outcome: "Highest engagement and save rates on LinkedIn."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "EGC Playbooks",
      desc: "Mobilizing your internal team (Sales, Eng, Product) to post consistently and humanize the brand.",
      outcome: "Multiplies organic reach via 'surround-sound' effect."
    }
  ];

  return (
    <Section id="services">
      <div className="mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">Our Ecosystem</span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl max-w-4xl tracking-tight">
          An end-to-end <br />
          <span className="text-gray-500">content ecosystem.</span>
        </h2>
        <p className="text-xl text-gray-500 mt-8 max-w-2xl leading-relaxed">
          We build the funnel that turns attention into pipeline:
        </p>
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
  <div id="positioning">
    {/* The Problem */}
    <Section className="bg-white text-black !max-w-none w-full border-b border-zinc-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl text-black leading-tight tracking-tighter">
              Generative AI made content cheap. <br />
              <span className="text-zinc-400">It also made your brand invisible.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-zinc-800 leading-relaxed font-medium">
                Right now, your competitors are flooding the market with automated jargon, soulless articles, and robotic LinkedIn posts. The internet is drowning in noise.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Buyers don't trust it, they scroll past it, and they definitely don't buy from it. If your brand sounds like a machine, you lose the deal before you even get on the calendar. Story sells software, but AI doesn't know your story.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>

    {/* The Solution */}
    <Section className="bg-zinc-950 text-white !max-w-none w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl leading-tight tracking-tighter">
                We don’t build vanity metrics. <br />
                <span className="text-gray-500">We build authority.</span>
              </h2>
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold">1:1</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">SME Interviews</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Human-Led</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-display font-bold">Zero</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-500">Hallucinations</span>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                We extract the raw, unfiltered expertise from your leadership team and translate it into high-impact content.
              </p>
              <p className="text-gray-500 leading-relaxed">
                No fluffy jargon. No AI hallucinations. Just outcome-focused content that proves you actually know what you're talking about. We turn your unique worldview into an undeniable competitive advantage.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  </div>
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
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">Featured Work</span>
        <h2 className="text-4xl md:text-5xl">Content that closes.</h2>
      </div>
      <Link to="/case-studies">
        <Button variant="outline">Case Studies <ChevronRight className="w-4 h-4" /></Button>
      </Link>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        { 
          label: "NeoSapien (Wearable Tech)", 
          title: "India's first AI-native wearable. Shifted from 'AI gadget' to 'Personal cognitive assistant'.", 
          metric: "Early Adopters" 
        },
        { 
          label: "Mindcase (Enterprise AI)", 
          title: "Positioned as the Enterprise Intelligence Layer. Generated higher-quality inbound pipeline.", 
          metric: "Demo Ready" 
        }
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
        <h2 className="text-4xl md:text-7xl mb-8 tracking-tighter">Ready to stop blending in?</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
          Stop letting bots dilute your life's work. Let's build a content engine that actually sounds like you. We only take on 3 new clients per quarter.
        </p>
        <div className="flex justify-center">
          <Button onClick={onBookCall} variant="primary" className="!px-12 !py-6 text-lg">
            Start Building Authority <MessageSquare className="w-5 h-5 ml-2" />
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
      id: "neosapien",
      title: "Category Creation for AI Wearables",
      client: "NeoSapien (Wearable Startup)",
      stats: [
        { label: "Category", val: "AI-Native" },
        { label: "Inbound", val: "High-Intent" },
        { label: "Market", val: "India-First" }
      ],
      challenge: "NeoSapien is India’s first AI-native wearable startup building the Neo 1—a screenless 'second brain'. They weren’t just selling a product—they were introducing a new category. But their messaging was trapped in technical jargon ('speaker diarisation', 'ambient AI') and feature-heavy explanations, leading to high curiosity but low trust.",
      solution: "We reframed the narrative from 'how it works' to 'what it does to your life'. We took over Founder LinkedIn Ghostwriting, extracted real use cases from the founders' experiences (Memory, Productivity, Cognitive Load reduction), and layered it with a Substack newsletter that broke complex AI into human stories.",
      outcome: "Successfully shifted perception from an 'AI gadget' to a 'Personal cognitive assistant'. This resulted in stronger emotional resonance with early users and significantly increased inbound curiosity from high-intent buyers and early adopters."
    },
    {
      id: "mindcase",
      title: "Enterprise Intelligence Layer",
      client: "Mindcase (B2B AI Platform)",
      stats: [
        { label: "Conversion", val: "Pipeline+" },
        { label: "Authority", val: "Expert-Led" },
        { label: "Leads", val: "Enterprise" }
      ],
      challenge: "Mindcase uses AI agents to convert unstructured web data into actionable enterprise intelligence. In a market flooded with 'AI wrappers', Mindcase had real depth but looked similar to competitors on the surface, risking being ignored by serious enterprise buyers.",
      solution: "Deployed a Content-Led Growth system focusing on real workflows instead of features. Created deep-research articles and LinkedIn carousels breaking down how AI agents replace manual research. Positioned founders as experts in data intelligence—not just tool builders.",
      outcome: "Shifted from being seen as an 'AI product' to an 'Enterprise intelligence layer'. This led to higher-quality inbound conversations and stronger credibility with enterprise buyers, significantly improving conversion from awareness to demo calls."
    },
    {
      id: "dailyobjects",
      title: "The Design + Manufacturing Engine",
      client: "Daily Objects (D2C Lifestyle)",
      stats: [
        { label: "Targeting", val: "High-Intent" },
        { label: "EGC Reach", val: "Surround-Sound" },
        { label: "B2B Interest", val: "Increased" }
      ],
      challenge: "Daily Objects is a leading D2C lifestyle and tech accessories brand. Growth was heavily dependent on performance marketing, leading to limited organic authority and a weak B2B perception regarding their design and manufacturing excellence.",
      solution: "Built a dual engine: Paid + Organic Authority. Targeted high-intent keywords via Google Ads for immediate ROI, while activating Employee Generated Content (EGC) playbooks for designers and supply chain leads to share behind-the-scenes stories and operational insights.",
      outcome: "Repositioned from just a 'D2C brand' to a 'Design + Operations Leader'. This increased inbound B2B and partnership interest, reduced dependency on paid-only growth, and built stronger credibility across the ecosystem."
    },
    {
      id: "bonkers",
      title: "Scaling Executive Presence",
      client: "Bonkers Corner (Streetwear)",
      stats: [
        { label: "Hiring", val: "Top-Tier" },
        { label: "Waitlist", val: "Expansion" },
        { label: "Growth", val: "D2C+" }
      ],
      challenge: "Bonkers Corner is a fast-growing youth-focused streetwear brand. The business was scaling, but leadership visibility wasn’t, making it harder to attract top-tier talent and missing leverage in offline expansion and partnership discussions.",
      solution: "Built the founder's executive presence on LinkedIn. Converted weekly voice notes into content focused on retail expansion, inventory challenges, and youth culture insights—prioritizing real operator insights over generic brand posts.",
      outcome: "Positioned the founder as a serious retail operator. This led to an increase in high-tier hiring interest and partnership conversations, established a stronger employer brand, and provided better leverage in offline expansion discussions."
    }
  ];

  const scrollToCase = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24">
      <Section>
        <FadeIn>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors text-sm group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Intelligence
          </Link>
          <h1 className="text-5xl md:text-7xl mb-8 tracking-tighter">Clinical proof of authority.</h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-16">
            We don't deal in likes. We deal in pipeline, perception, and power. Explore how we’ve transformed voices into owned assets.
          </p>

          {/* Selection Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
            {cases.map((c) => (
              <button 
                key={c.id} 
                onClick={() => scrollToCase(c.id)}
                className="glass-card p-6 text-left hover:border-white/30 transition-all group"
              >
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{c.client.split('(')[0]}</div>
                <div className="text-sm font-bold group-hover:text-amber-400 transition-colors uppercase tracking-tight">{c.title}</div>
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-48">
          {cases.map((c, i) => (
            <FadeIn key={i} delay={0.1}>
              <div id={c.id} className="grid lg:grid-cols-2 gap-16 items-start scroll-mt-32">
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
                      "InkLine moved us from vanity to pipeline by extracting narratives our internal team didn't even know were there."
                    </p>
                  </div>
                </div>

                <div className="space-y-10 pt-4 lg:pt-20">
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-white mb-4 border-b border-brand-border pb-2 w-fit">The Problem</h3>
                    <p className="text-gray-500 leading-relaxed font-medium">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-white mb-4 border-b border-brand-border pb-2 w-fit">The InkLine Approach</h3>
                    <p className="text-gray-500 leading-relaxed font-medium text-white/80">{c.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-widest text-amber-400 mb-4 border-b border-amber-400/20 pb-2 w-fit">The Outcome</h3>
                    <p className="text-white leading-relaxed font-semibold text-lg">{c.outcome}</p>
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
