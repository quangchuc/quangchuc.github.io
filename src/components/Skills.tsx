import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

const Skills: React.FC = () => {
  const principles = [
    {
      title: "Invariants first",
      description: "Protocol design starts from solvency, value conservation, and access-control guarantees; features come second.",
    },
    {
      title: "Security is continuous",
      description: "Threat modeling, defensive Solidity patterns, fuzz & invariant testing, static analysis, and auditor collaboration are part of the workflow, not a checkbox.",
    },
    {
      title: "Explicit state machines",
      description: "Clear states, transitions, and preconditions to minimize edge cases and simplify audits.",
    },
    {
      title: "Auditability over cleverness",
      description: "Readable, boring core logic first; gas optimizations applied only after correctness is proven.",
    },
    {
      title: "Governed upgradability",
      description: "Modular and upgradeable systems only with explicit governance, clear upgrade paths, and risk controls.",
    },
    {
      title: "Production discipline",
      description: "Deterministic behavior, observable state, conservative assumptions, and careful migrations when real capital is at stake.",
    },
  ];

  const lookingFor = [
    "Lending, borrowing, and credit protocols (including RWAs)",
    "DEXs, trading, and derivatives primitives",
    "Yield, staking, and liquidity protocols",
    "Bridges, cross-chain, and interoperability systems",
    "Marketplaces, launchpads, and token distribution mechanisms",
    "NFT-based financial primitives and on-chain ownership systems",
    "Protocol-level tooling, infra, and governance systems",
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        {/* Engineering Principles */}
        <Reveal>
          <h2 className="section-title">Engineering Principles</h2>
        </Reveal>

        <div className="max-w-3xl mx-auto mb-20">
          <Reveal delay={100}>
          <ul className="space-y-5">
            {principles.map((principle, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-lg text-muted-foreground"
              >
                <span className="text-primary mt-1">•</span>
                <div>
                  <span className="font-semibold text-foreground">{principle.title}</span>
                  <span className="mx-2">—</span>
                  {principle.description}
                </div>
              </li>
            ))}
          </ul>
          </Reveal>
        </div>

        {/* What I'm Looking For */}
        <Reveal>
          <h2 className="section-title">What I'm Looking For</h2>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground mb-6">
              I'm interested in working with early-stage or scaling DeFi teams
              building on-chain financial primitives and infrastructure, including:
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="space-y-3 mb-8">
              {lookingFor.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-muted-foreground"
                >
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-lg text-muted-foreground">
              I'm open to senior smart contract, protocol engineer, or founding
              engineer roles, especially in teams where protocol design, security,
              and long-term architecture matter.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
