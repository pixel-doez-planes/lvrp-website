import React, { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  PaintBucket, 
  Building2, 
  Users, 
  CalendarDays, 
  Wrench,
  ChevronDown,
  Dice5,
  Dice6,
  CarFront,
  Crosshair,
  BadgeAlert,
  Flame,
  Stethoscope,
  Shield,
  Star,
  Truck,
  Activity
} from "lucide-react";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20 shadow-[0_0_15px_rgba(157,78,221,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dice5 className="w-7 h-7 text-primary" />
          <Dice6 className="w-7 h-7 text-primary -ml-1" />
          <span className="font-display font-bold text-xl tracking-wider text-white neon-text-glow">
            LAS VEGAS<span className="text-primary">RP</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-white transition-colors">Features</a>
          <a href="#departments" className="text-sm font-medium text-foreground/80 hover:text-white transition-colors">Departments</a>
          <a href="#community" className="text-sm font-medium text-foreground/80 hover:text-white transition-colors">Community</a>
        </div>
        <a 
          href="https://discord.gg/vegasrp" 
          target="_blank" 
          rel="noopener noreferrer"
          data-testid="link-nav-discord"
          className="px-6 py-2 rounded-full bg-primary/20 border border-primary/50 text-white font-semibold text-sm hover:bg-primary/40 hover:scale-105 transition-all duration-300 neon-box-glow"
        >
          Join Discord
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        {/* Placeholder for uploaded cinematic image */}
        <div className="absolute inset-0 bg-card/30 backdrop-blur-[2px] flex items-center justify-center border-b border-primary/20">
          <div className="text-center opacity-30">
            <span className="block text-sm uppercase tracking-[0.3em] text-primary mb-2">Cinematic Background Slot</span>
            <div className="w-full h-full max-w-4xl mx-auto aspect-[21/9] rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center neon-box-glow">
              <img src="/skyline.jpg" alt="Las Vegas Skyline" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-semibold mb-8 neon-box-glow">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            ER:LC Server on Roblox
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter mb-6 neon-text-glow uppercase"
        >
          Las Vegas <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
            Roleplay
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 font-light"
        >
          Experience one of the biggest, most immersive ER:LC servers on Roblox. Join our active community of over 20k players with 24/7 sessions, custom liveries, and professional roleplays.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://discord.gg/vegasrp"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-hero-discord"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 neon-box-glow-strong w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            Join the Discord
          </a>
          <a 
            href="#features"
            data-testid="link-hero-features"
            className="px-8 py-4 rounded-full font-bold text-lg text-white border border-primary/30 hover:bg-primary/10 transition-all w-full sm:w-auto neon-box-glow"
          >
            Explore the Server
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Professional Roleplay",
    desc: "Highly organized, realistic, and immersive RP scenarios tailored for serious players."
  },
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Custom Liveries",
    desc: "Exclusively designed vehicle liveries for all departments, bringing authentic Vegas style."
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Custom Departments",
    desc: "Multiple departments including LVMPD, NLVPD, CCSO, NHP, LVFR, CCFD, DOT, and more."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Active Community",
    desc: "A friendly, engaged player base that keeps the server alive, and 24/7 sessions."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Dedicated Staff",
    desc: "Active moderation and administration team ensuring a fair and enjoyable experience."
  }
];

function Features() {
  return (
    <section id="features" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4 neon-text-glow"
          >
            What We Offer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Experience the best server, with a focus on realism, active moderation, and a huge community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-primary/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(157,78,221,0.2)]"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEPARTMENT PHOTOS
// To add a photo to a department:
//   1. Upload your image file into the  public/departments/  folder
//   2. Set the  image  field below to the file name, e.g.  "/departments/LVMPD.jpg"
//   3. Leave  image: null  to keep the placeholder until you have a photo ready.
// ─────────────────────────────────────────────────────────────────────────────
const departments = [
  {
    name: "LVMPD",
    full: "Las Vegas Metropolitan Police Department",
    icon: <BadgeAlert className="w-6 h-6" />,
    color: "from-blue-500 to-blue-900",
    shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]",
    border: "group-hover:border-blue-500",
    desc: "The primary law enforcement agency serving Las Vegas and unincorporated Clark County. Conduct high-speed pursuits, tactical operations, and keep the neon streets in check.",
    image: null, // e.g. "/departments/LVMPD.jpg"
  },
  {
    name: "NLVPD",
    full: "North Las Vegas Police Department",
    icon: <Shield className="w-6 h-6" />,
    color: "from-indigo-500 to-indigo-900",
    shadow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]",
    border: "group-hover:border-indigo-500",
    desc: "Serving the city of North Las Vegas with a separate jurisdiction from Metro. Patrol the north end, respond to calls, and uphold the law in a distinct part of the valley.",
    image: "/departments/nlvpd-dep.jpg"
  },
  {
    name: "SWAT",
    full: "Special Weapons and Tactics",
    icon: <Crosshair className="w-6 h-6" />,
    color: "from-zinc-500 to-zinc-900",
    shadow: "hover:shadow-[0_0_30px_rgba(113,113,122,0.35)]",
    border: "group-hover:border-zinc-500",
    desc: "Elite tactical unit deployed for high-risk operations, hostage rescue, and heavily armed incidents. The last line of defense when standard patrol is not enough.",
    image: null, // e.g. "/departments/SWAT.jpg"
  },
  {
    name: "CCSO",
    full: "Clark County Sheriff's Office",
    icon: <Star className="w-6 h-6" />,
    color: "from-yellow-500 to-yellow-900",
    shadow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]",
    border: "group-hover:border-yellow-500",
    desc: "Clark County's sheriff department handling county-level law enforcement, corrections, and civil duties across a wide jurisdiction stretching beyond the city limits.",
    image: "/departments/ccso-dep.jpg"
  },
  {
    name: "NHP",
    full: "Nevada Highway Patrol",
    icon: <CarFront className="w-6 h-6" />,
    color: "from-slate-400 to-slate-800",
    shadow: "hover:shadow-[0_0_30px_rgba(148,163,184,0.35)]",
    border: "group-hover:border-slate-400",
    desc: "State troopers patrolling Nevada's highways and interstates. Enforce traffic laws, respond to accidents, and conduct high-speed pursuits across open desert roads.",
    image: "/departments/nhp-dep.png"
  },
  {
    name: "LVFR",
    full: "Las Vegas Fire & Rescue",
    icon: <Flame className="w-6 h-6" />,
    color: "from-red-500 to-red-900",
    shadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]",
    border: "group-hover:border-red-500",
    desc: "City of Las Vegas' fire and emergency services division. Fight structure fires, respond to vehicle accidents, and deliver life-saving emergency medical care across the strip.",
    image: '/departments/lvfr-dep.jpg'
  },
  {
    name: "CCFD",
    full: "Clark County Fire Department",
    icon: <Flame className="w-6 h-6" />,
    color: "from-orange-500 to-orange-900",
    shadow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]",
    border: "group-hover:border-orange-500",
    desc: "Protecting unincorporated Clark County with fire suppression and emergency medical services. From suburban neighborhoods to desert terrain, CCFD covers it all.",
    image: "/departments/ccfd-dep.jpg"
  },
  {
    name: "DOT",
    full: "Nevada Department of Transportation",
    icon: <Truck className="w-6 h-6" />,
    color: "from-lime-500 to-lime-900",
    shadow: "hover:shadow-[0_0_30px_rgba(132,204,22,0.35)]",
    border: "group-hover:border-lime-500",
    desc: "Keeping Nevada's roads safe and operational. Manage traffic control, respond to road incidents, clear debris, and maintain infrastructure across the Las Vegas valley.",
    image: null, // e.g. "/departments/DOT.jpg"
  },
];

function Departments() {
  return (
    <section id="departments" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background z-0"></div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-4 neon-text-glow"
            >
              Choose Your Path
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground/70"
            >
              Multiple departments with custom liveries and unique opprtunities to roleplay.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-primary/10 transition-all duration-500 p-6 ${dept.shadow} ${dept.border}`}
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${dept.color} opacity-10 rounded-full blur-3xl group-hover:opacity-25 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-background/50 border border-primary/20 backdrop-blur-sm text-white">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">{dept.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/50 font-medium leading-tight">{dept.full}</p>
                  </div>
                </div>
                <p className="text-foreground/75 text-sm mb-5 leading-relaxed">{dept.desc}</p>

                {/* Department Photo — set dept.image to show a real photo */}
                <div className="w-full aspect-[16/9] rounded-xl border border-primary/20 bg-background/50 overflow-hidden flex items-center justify-center relative">
                  {dept.image ? (
                    <img
                      src={dept.image}
                      alt={`${dept.name} department`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-1 text-center px-3">
                      <span className="text-primary/40 text-2xl">+</span>
                      <span className="text-[9px] uppercase tracking-widest text-primary/30 font-mono">Add photo for {dept.name}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GALLERY PHOTOS — add your images here
// 1. Upload image files into  artifacts/las-vegas-rp/public/gallery/
// 2. Replace null with the path, e.g. "/gallery/patrol.jpg"
// 3. Add as many entries as you want — they loop infinitely.
//    Row 1 scrolls left, Row 2 scrolls right.
// ─────────────────────────────────────────────────────────────────────────────
const galleryRow1: (string | null)[] = [
  '/gallery/lvfr-1.png', // e.g. "/gallery/photo1.jpg"
  '/gallery/lvfr-2.png',
  '/gallery/ndot-1.jpg',
  '/gallery/lvfr-3.jpg',
  '/gallery/ccfd-1.png',
  '/gallery/ccfd-2.png',
];

const galleryRow2: (string | null)[] = [
  null, // e.g. "/gallery/photo7.jpg"
  null,
  null,
  null,
  null,
  null,
];

function GalleryCard({ src, label }: { src: string | null; label: number }) {
  return (
    <div
      style={{ flex: "0 0 auto", width: "380px", aspectRatio: "4/3" }}
      className="rounded-2xl border border-primary/20 bg-card/80 overflow-hidden relative group"
    >
      {src ? (
        <img
          src={src}
          alt={`Gallery photo ${label}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div style={{ width: "100%", height: "100%" }} className="flex flex-col items-center justify-center gap-2 bg-primary/5">
          <span className="text-primary/50 text-4xl leading-none">+</span>
          <span className="text-[10px] uppercase tracking-widest text-primary/50 font-mono">Photo {label}</span>
        </div>
      )}
    </div>
  );
}

function GalleryTrack({ images, direction }: { images: (string | null)[]; direction: "left" | "right" }) {
  const doubled = [...images, ...images];
  const anim = direction === "left"
    ? { animation: "gallery-scroll-left 35s linear infinite" }
    : { animation: "gallery-scroll-right 40s linear infinite" };
  return (
    <div style={{ display: "flex", gap: "1rem", width: "max-content", ...anim }}>
      {doubled.map((src, i) => (
        <GalleryCard key={i} src={src} label={(i % images.length) + 1} />
      ))}
    </div>
  );
}

function CommunityGallery() {
  return (
    <section id="community" className="py-24 relative z-10 bg-background overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-4 neon-text-glow-secondary"
        >
          The Streets Come Alive
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/70 max-w-2xl mx-auto"
        >
          Real moments from the most immersive ER:LC experience in the game.
        </motion.p>
      </div>

      {/* Scrolling rows with fade edges */}
      <div className="relative flex flex-col gap-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div style={{ overflow: "hidden" }}>
          <GalleryTrack images={galleryRow1} direction="left" />
        </div>
        <div style={{ overflow: "hidden" }}>
          <GalleryTrack images={galleryRow2} direction="right" />
        </div>
      </div>

      <style>{`
        @keyframes gallery-scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gallery-scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden border border-primary/30 neon-box-glow-strong bg-card"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20"></div>
          
          <div className="relative z-10 px-6 py-24 md:py-32 text-center flex flex-col items-center">
            <div className="flex items-center gap-1 mb-8">
              <Dice5 className="w-14 h-14 text-primary drop-shadow-[0_0_15px_rgba(157,78,221,0.8)]" />
              <Dice6 className="w-14 h-14 text-primary drop-shadow-[0_0_15px_rgba(157,78,221,0.8)]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">
              Ready to Hit <br/> The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary neon-text-glow">Strip?</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mb-12">
              Join thousands of other players in the most immersive ER:LC experience. Your story begins now.
            </p>
            <a 
              href="https://discord.gg/vegasrp"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-cta-discord"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-background rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span>Join discord.gg/vegasrp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background py-12 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Dice5 className="w-5 h-5 text-primary" />
          <Dice6 className="w-5 h-5 text-primary -ml-0.5" />
          <span className="font-display font-bold text-lg tracking-wider text-white">
            VEGAS<span className="text-primary">RP</span>
          </span>
        </div>
        
        <p className="text-foreground/50 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Las Vegas Roleplay. All rights reserved. Not affiliated with Roblox or Police Roleplay Community.
        </p>

        <div className="flex items-center gap-4">
          <a 
            href="https://discord.gg/vegasrp" 
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-footer-discord"
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      {/* Noise overlay for texture */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')"}}></div>
      
      <Navbar />
      <Hero />
      <Features />
      <Departments />
      <CommunityGallery />
      <CTA />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2800);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {/* Radial glow behind logo */}
      <div className="absolute w-80 h-80 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

      {/* -------------------------------------------------------
          LOADING LOGO — replace /loading-logo.svg with your own
          image file placed in the `public/` folder.
          Recommended: 120×120px PNG or SVG, transparent background.
          ------------------------------------------------------- */}
      <motion.div
        className="relative mb-8"
        animate={{
          scale: [1, 1.08, 1],
          filter: [
            "drop-shadow(0 0 12px rgba(157,78,221,0.5))",
            "drop-shadow(0 0 28px rgba(157,78,221,0.9))",
            "drop-shadow(0 0 12px rgba(157,78,221,0.5))",
          ],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/loading-logo.jpeg"
          alt="Las Vegas Roleplay Logo"
          width={120}
          height={120}
          className="rounded-2xl"
        />
      </motion.div>

      {/* Server name */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="font-display font-black text-3xl tracking-widest text-white neon-text-glow">
          VEGAS<span className="text-primary">RP</span>
        </span>
        <span className="text-xs tracking-[0.3em] uppercase text-foreground/50 font-medium">
          Las Vegas Roleplay
        </span>
      </motion.div>

      {/* Subtle loading bar */}
      <motion.div
        className="absolute bottom-12 w-32 h-0.5 rounded-full bg-primary/20 overflow-hidden"
      >
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {loading && <LoadingScreen key="loader" onDone={() => setLoading(false)} />}
        </AnimatePresence>
        {!loading && (
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
            <Toaster />
          </WouterRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
