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
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isCaseStudy = pathname.startsWith('/case-studies');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/inkline-schedule-call/30min', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group outline-none">
          <span className="font-display font-black text-2xl tracking-tighter text-white">
            InkLine<span className="text-amber-500">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-white font-bold transition-colors">Services</a>
            <Link to="/case-studies" className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-colors ${isCaseStudy ? 'text-white' : 'text-gray-500 hover:text-white'}`}>Case Studies</Link>
          </div>
          <Button variant="primary" onClick={handleBookCall} className="px-6 py-2 text-[10px] !rounded-md uppercase tracking-widest font-bold">
            Book Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/inkline-schedule-call/30min', '_blank');
  };

  return (
    <Section className="pt-40 md:pt-52 pb-32 flex flex-col items-center text-center">
      <FadeIn>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border mb-8 bg-brand-card/50">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-300">Available for Q3 Strategy</span>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl lg:text-9xl leading-[1] mb-10 text-gradient max-w-5xl font-display tracking-[-0.05em]">
          We help founders turn ideas into authority.
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Ghostwriting, content systems, and distribution strategies that drive visibility, credibility, and inbound leads. For the elite few who refuse to sound like AI noise.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={handleBookCall}>
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
};

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
        <h2 className="text-5xl md:text-7xl lg:text-8xl max-w-4xl tracking-[-0.04em] leading-[0.95] font-display">
          An end-to-end <br />
          <span className="text-gray-500">content ecosystem.</span>
        </h2>
        <p className="text-xl text-gray-500 mt-10 max-w-2xl leading-relaxed tracking-tight">
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
            <h2 className="text-5xl md:text-7xl text-black leading-[0.95] tracking-[-0.05em] font-display">
              Generative AI made content cheap. <br />
              <span className="text-zinc-400">It also made you invisible.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl md:text-3xl text-zinc-800 leading-tight tracking-tight font-display font-medium">
                Right now, your competitors are flooding the market with automated jargon. The internet is drowning in noise.
              </p>
              <p className="text-zinc-600 leading-relaxed max-w-lg">
                Buyers don't trust it. If your brand sounds like a machine, you lose the deal before you even get on the calendar. Story sells, AI doesn't know yours.
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
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-display tracking-tight leading-tight">A clinical approach to <br /><span className="text-gray-500">authority.</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">We don't guess. We extract, architect, and optimize.</p>
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
      <div className="max-w-4xl">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">Featured Work</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.95] font-display">Content that <br /><span className="text-gray-500">closes.</span></h2>
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

const FinalCTA = () => {
  const handleBookCall = () => {
    window.open('https://calendly.com/inkline-schedule-call/30min', '_blank');
  };

  return (
    <Section className="!py-40">
      <div className="glass-card bg-linear-to-br from-zinc-900 to-black p-12 md:p-24 text-center rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl mb-8 tracking-tighter font-display leading-none">Ready to stop <span className="text-gray-500 italic">blending in?</span></h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Stop letting bots dilute your life's work. Let's build a content engine that actually sounds like you. We only take on 3 new clients per quarter.
          </p>
          <div className="flex justify-center">
            <Button onClick={handleBookCall} variant="primary" className="!px-12 !py-6 text-lg">
              Start Building Authority <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-brand-border bg-black">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 lg:col-span-2">
        <Link to="/" className="group outline-none inline-block mb-6">
          <span className="font-display text-white font-bold tracking-tighter text-3xl leading-none">
            InkLine<span className="text-amber-500">.</span>
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

const Home = () => (
  <>
    <Hero />
    <TrustStrip />
    <Services />
    <Positioning />
    <Process />
    <Work />
    <Testimonials />
    <FinalCTA />
  </>
);

const CASE_STUDIES = [
  {
    id: "neosapien",
    title: "Category Creation for AI Wearables",
    client: "NeoSapien",
    subtitle: "India's first AI-native wearable startup",
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
    client: "Mindcase",
    subtitle: "AI Agents for unstructured data",
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
    id: "daily-objects",
    title: "The Design + Manufacturing Engine",
    client: "DailyObjects",
    subtitle: "Leading D2C lifestyle & tech accessories",
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
    id: "bonkers-corner",
    title: "Scaling Executive Presence",
    client: "Bonkers Corner",
    subtitle: "Youth-focused streetwear brand",
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

const CaseStudiesIndex = () => {
  return (
    <div className="pt-40 pb-24">
      <Section>
        <div className="mb-32">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-6 block">The Proof</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8 leading-[0.85] font-display">Clinical <br /><span className="text-gray-500">Authority.</span></h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed tracking-tight">
              We move the needle for leaders who refuse to sound like AI noise. A selection of partnerships with the elite few.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-0">
          {CASE_STUDIES.map((c, i) => (
            <FadeIn key={c.id} delay={i * 0.1}>
              <Link 
                to={`/case-studies/${c.id}`} 
                className="group relative block border-t border-brand-border py-12 md:py-20 outline-none"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                  <div className="lg:col-span-1 hidden lg:block">
                    <span className="text-xs font-mono text-gray-700">0{i + 1}</span>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] group-hover:text-amber-500 transition-colors duration-500 font-display font-bold leading-[1.05] mb-4">
                      {c.client}<span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">.</span>
                    </h2>
                    <div className="flex items-center gap-2">
                       <div className="h-[1px] w-4 bg-amber-500/50" />
                       <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold">
                        Intelligence Report
                       </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl text-white/90 group-hover:text-white transition-colors duration-500 font-display font-medium leading-tight tracking-tight">
                        {c.title}
                      </p>
                      <p className="text-base text-gray-500 leading-relaxed max-w-md">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-14 h-14 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500 group-hover:scale-110 shadow-xl">
                      <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-linear-to-r from-amber-500/0 to-amber-500/0 group-hover:to-amber-500/[0.02] transition-all duration-700 pointer-events-none" />
              </Link>
            </FadeIn>
          ))}
          <div className="border-t border-brand-border" />
        </div>
      </Section>
    </div>
  );
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const c = CASE_STUDIES.find(item => item.id === id);

  if (!c) return <div className="pt-40 text-center text-gray-500">Case study not found.</div>;

  const handleBookCall = () => {
    window.open('https://calendly.com/inkline-schedule-call/30min', '_blank');
  };

  return (
    <div className="pt-40 pb-24">
      <Section>
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-20 transition-colors text-[10px] uppercase tracking-[0.4em] font-bold group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Intelligence reports
            </Link>
            
            <div className="mb-32">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber-500 font-bold">Confidential Intelligence Report</span>
                <div className="h-px flex-1 bg-brand-border" />
                <span className="text-[10px] font-mono text-gray-700">REF: {c.id.toUpperCase()}/2026</span>
              </div>
              <h1 className="text-6xl md:text-8xl tracking-tighter mb-8 leading-[0.85] font-display">
                {c.client}.
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                {c.title}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-40 border-y border-brand-border py-16">
              {c.stats.map((s, idx) => (
                <div key={idx}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold mb-6">{s.label}</div>
                  <div className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter leading-none">{s.val}</div>
                </div>
              ))}
            </div>

            <div className="space-y-40">
              <section className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 sticky top-32 font-bold">Operational Context</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
                    {c.challenge}
                  </p>
                </div>
              </section>

              <section className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 sticky top-32 font-bold">Strategic Architecture</h3>
                </div>
                <div className="md:col-span-8">
                  <div className="text-xl md:text-2xl text-gray-500 leading-relaxed space-y-8 font-medium">
                    {c.solution}
                  </div>
                </div>
              </section>

              <section className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-amber-500/80 sticky top-32 font-bold">Clinical Result</h3>
                </div>
                <div className="md:col-span-8">
                  <div className="p-12 md:p-20 rounded-[3rem] bg-zinc-900/50 border border-brand-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] -mr-48 -mt-48 transition-colors group-hover:bg-amber-500/10" />
                    <p className="text-3xl md:text-5xl text-white font-bold tracking-tighter leading-[1.1] relative z-10">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt-32 border-t border-brand-border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="flex items-start gap-8">
                    <Quote className="w-12 h-12 text-amber-500/20 shrink-0 mt-2" />
                    <p className="text-xl md:text-2xl text-gray-400 italic max-w-xl leading-relaxed">
                      "InkLine moved us from vanity to pipeline by extracting narratives our team missed."
                    </p>
                  </div>
                  <Button onClick={handleBookCall} variant="primary" className="!px-10 !py-5 text-base rounded-2xl">
                    Request Strategy Call
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};



export default function App() {
  return (
    <div className="selection:bg-white selection:text-black min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies" element={<CaseStudiesIndex />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
