import { motion } from "framer-motion";
import {
  Download, Mail, Phone, MapPin, Github, Linkedin, Code, BarChart3,
  Image, Camera, Lightbulb, Users, GraduationCap, Award, BookOpen,
  BadgeCheck, Rocket, Send, ExternalLink,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* ─── Hero ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Hello, I'm</p>
        <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Sanganathan{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent glow-text-blue">
            P
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
          Software Developer &nbsp;|&nbsp; IT Student
        </p>
        <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Motivated IT student passionate about programming, data analytics, and real-world problem solving.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button size="lg" className="glow-blue gap-2">
            <Download size={18} /> Download Resume
          </Button>
          <Button size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 gap-2" asChild>
            <a href="#contact"><Mail size={18} /> Contact Me</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary/30 flex items-center justify-center glow-blue animate-float">
          <span className="font-poppins text-5xl sm:text-6xl font-bold text-primary/60">SP</span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── About ─── */
const About = () => {
  const traits = [
    { icon: Lightbulb, text: "Strong foundation in programming & IT concepts" },
    { icon: Rocket, text: "Eager to apply knowledge in real-world projects" },
    { icon: BookOpen, text: "Quick learner with analytical thinking" },
    { icon: Users, text: "Team player with excellent collaboration skills" },
  ];
  return (
    <SectionWrapper id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-center mb-10 leading-relaxed text-lg">
          Motivated and hardworking 3rd-year B.Tech IT student at PSN Engineering College with a strong
          foundation in programming, problem-solving, and IT concepts. Eager to apply knowledge in
          real-world projects and internships.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <t.icon size={22} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/80">{t.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

/* ─── Education ─── */
const Education = () => (
  <SectionWrapper id="education">
    <SectionTitle>Education</SectionTitle>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-w-xl mx-auto p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors glow-blue"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-primary/10">
          <GraduationCap size={28} className="text-primary" />
        </div>
        <div>
          <h3 className="font-poppins text-xl font-semibold">B.Tech Information Technology</h3>
          <p className="text-muted-foreground">PSN Engineering College</p>
        </div>
      </div>
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
        2023 – 2027
      </span>
    </motion.div>
  </SectionWrapper>
);

/* ─── Skills ─── */
const Skills = () => {
  const skills = [
    { icon: Code, label: "Basic HTML" },
    { icon: BarChart3, label: "Data Analytics" },
    { icon: Image, label: "Adobe Photoshop" },
    { icon: Camera, label: "Photography" },
    { icon: Lightbulb, label: "Problem Solving" },
    { icon: Users, label: "Teamwork" },
  ];
  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, boxShadow: "0 0 25px hsl(230 90% 60% / 0.25)" }}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all cursor-default"
          >
            <s.icon size={28} className="text-primary" />
            <span className="font-medium text-sm text-foreground/90">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

/* ─── Experience ─── */
const Experience = () => (
  <SectionWrapper id="experience">
    <SectionTitle>Experience</SectionTitle>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-accent/10">
          <BookOpen size={28} className="text-accent" />
        </div>
        <div>
          <h3 className="font-poppins text-xl font-semibold">Value-Added Course in Data Analytics</h3>
          <p className="text-muted-foreground">Infosmite Edutech LLP</p>
        </div>
      </div>
      <p className="text-foreground/70 leading-relaxed">
        Gained practical skills in data handling, analysis, and interpretation through a comprehensive
        hands-on training program.
      </p>
    </motion.div>
  </SectionWrapper>
);

/* ─── Certifications ─── */
const Certifications = () => (
  <SectionWrapper id="certifications">
    <SectionTitle>Certifications</SectionTitle>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-w-xl mx-auto p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 rounded-xl bg-primary/10">
          <BadgeCheck size={28} className="text-primary" />
        </div>
        <h3 className="font-poppins text-xl font-semibold">Data Analytics Course</h3>
      </div>
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
        15 Dec 2024 – 22 Dec 2024
      </span>
    </motion.div>
  </SectionWrapper>
);

/* ─── Achievements ─── */
const Achievements = () => (
  <SectionWrapper id="achievements">
    <SectionTitle>Achievements</SectionTitle>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-w-xl mx-auto p-8 rounded-2xl bg-card border border-border hover:border-accent/40 transition-colors glow-purple"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-accent/10">
          <Award size={28} className="text-accent" />
        </div>
        <h3 className="font-poppins text-xl font-semibold">TECHBLITZ 2025</h3>
      </div>
      <p className="text-foreground/70 leading-relaxed">
        Participated in the National Level Technical Symposium, improving technical knowledge and
        collaboration skills.
      </p>
    </motion.div>
  </SectionWrapper>
);

/* ─── Projects ─── */
const Projects = () => (
  <SectionWrapper id="projects">
    <SectionTitle>Projects</SectionTitle>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[1, 2, 3].map((n) => (
        <motion.div
          key={n}
          whileHover={{ scale: 1.04 }}
          className="p-6 rounded-2xl bg-card border border-dashed border-border flex flex-col items-center justify-center min-h-[200px] gap-3"
        >
          <ExternalLink size={28} className="text-muted-foreground/40" />
          <p className="text-muted-foreground/60 font-medium">Coming Soon</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

/* ─── Contact ─── */
const Contact = () => (
  <SectionWrapper id="contact">
    <SectionTitle>Contact</SectionTitle>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
      {/* Info */}
      <div className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          Feel free to reach out — I'm always open to discussing new opportunities, projects, or ideas.
        </p>
        {[
          { icon: Mail, text: "sangardeepack657867@gmail.com", href: "mailto:sangardeepack657867@gmail.com" },
          { icon: Phone, text: "9585368709", href: "tel:9585368709" },
          { icon: MapPin, text: "Sankarankovil,Tenkasi District" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10">
              <item.icon size={18} className="text-primary" />
            </div>
            {item.href ? (
              <a href={item.href} className="text-foreground/80 hover:text-primary transition-colors">
                {item.text}
              </a>
            ) : (
              <span className="text-foreground/80">{item.text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4 p-6 rounded-2xl bg-card border border-border"
      >
        <Input placeholder="Your Name" className="bg-muted/50" />
        <Input type="email" placeholder="Your Email" className="bg-muted/50" />
        <Textarea placeholder="Your Message" rows={5} className="bg-muted/50" />
        <Button className="w-full glow-blue gap-2">
          <Send size={16} /> Send Message
        </Button>
      </form>
    </div>
  </SectionWrapper>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="border-t border-border py-8 px-4 mt-10">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© 2025 Sanganathan P. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={20} />
        </a>
        <a href="" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

/* ─── Page ─── */
const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <ParticleBackground />
    <Navbar />
    <div className="relative z-10">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Certifications />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Index;
