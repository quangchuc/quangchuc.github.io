import React from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

const About: React.FC = () => {
  const expertiseAreas = [
    {
      title: "Smart Contract & Protocol Engineering",
      items: [
        "DeFi protocol design (RWA-backed, lending, trading, governance)",
        "Upgradeable & modular architectures",
        "Gas optimization and storage layout design",
        "Security-first development mindset",
      ],
    },
    {
      title: "DeFi & Ethereum Ecosystem",
      items: [
        "Solidity, ERC/EIP standards",
        "Lending protocols, DEXs, DAOs, bridges",
        "MEV awareness, incentive design, risk management",
        "Cross-chain architectures and oracle integrations",
      ],
    },
    {
      title: "Tooling & Audits",
      items: [
        "Foundry, Hardhat",
        "Slither, Echidna, invariant & fuzz testing",
        "Tenderly, testnets, mainnet deployments",
        "Audit preparation, issue remediation, post-audit maintenance",
      ],
    },
    {
      title: "Infrastructure & Deployment",
      items: [
        "Git, GitHub, GitLab",
        "CI/CD pipelines",
        "Docker, Kubernetes",
        "Linux, DigitalOcean, AWS, Vercel",
      ],
    },
    {
      title: "Frontend & Integrations",
      items: [
        "TypeScript",
        "Ethers.js, Viem, Wagmi",
        "Web3-react",
        "Next.js / React",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        {/* About Me Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <Reveal delay={100}>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I am a Senior Smart Contract Engineer specialized in building complex DeFi protocols, with a strong focus on correctness, security, and long-term maintainability.
              </p>
              <p>
                Over the past 5+ years, I have designed and deployed lending markets, trading platforms, cross-chain bridges, revenue distribution systems, and DAO governance frameworks, managing real user funds in production.
              </p>
              <p>
                I work primarily with Solidity and the Ethereum ecosystem, using modern tooling such as Foundry, Hardhat, Slither, and Echidna, and I collaborate closely with auditors, frontend teams, and protocol stakeholders.
              </p>
              <p>
                I enjoy zero-to-one protocol design, complex financial primitives, and early-stage environments where architecture, incentives, and security decisions have long-term impact.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Core Expertise */}
        <Reveal delay={200}>
          <h3 className="text-2xl font-semibold text-center mb-10">Core Expertise</h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {expertiseAreas.map((area, index) => (
            <Reveal key={index} delay={300 + index * 100}>
              <div
                className={cn(
                  "p-6 rounded-xl h-full",
                  "border border-border",
                  "bg-background/50",
                  "hover:border-primary/30 transition-colors duration-300"
                )}
              >
                <h4 className="text-lg font-semibold mb-4">{area.title}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
