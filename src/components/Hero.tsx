import React, { useEffect, useRef } from "react";
import Reveal from "./Reveal";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Particles array
    const particles: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      direction: number;
      color: string;
    }[] = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(width, height) / 20; // Responsive particle count

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.2,
          direction: Math.random() * Math.PI * 2,
          color: `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.2})`,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update position
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;

        // Wrap around screen
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Connect nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(66, 153, 225, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0; // Clear particles
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Senior Smart Contract Engineer
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              I design, ship, and maintain secure production-grade Ethereum
              protocols — lending markets, trading platforms, cross-chain
              bridges, and DAO governance — used by real users with real capital
              at stake.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-sm md:text-base text-muted-foreground/80 mb-10">
              5+ years in DeFi • $150M+ RWA ecosystem • Solidity / Foundry /
              Hardhat • Lending, DEX, NFT, DAO, Marketplace
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md h-10 px-8 py-6 text-sm font-medium transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90"
              >
                Contact me
              </a>
              <a
                href="https://github.com/quangchuc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md h-10 px-8 py-6 text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                View GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={800}>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <a href="#about" className="text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
