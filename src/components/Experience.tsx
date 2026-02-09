import React from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

interface ProtocolWorkProps {
  title: string;
  context: string;
  role: string;
  whatIBuilt: string[];
  outcome: string[];
  keyDecisions?: string[];
  explores?: string[];
  status?: string;
  delay?: number;
}

const ProtocolCard: React.FC<ProtocolWorkProps> = ({
  title,
  context,
  role,
  whatIBuilt,
  outcome,
  keyDecisions,
  explores,
  status,
  delay = 0,
}) => {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          "p-6 md:p-8 rounded-xl h-full",
          "border border-border",
          "bg-background/50",
          "hover:border-primary/30 transition-colors duration-300",
        )}
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-2">
              Context
            </h4>
            <p>{context}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-2">
              My Role
            </h4>
            <p>{role}</p>
          </div>

          {keyDecisions && keyDecisions.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-2">
                Key Design Decisions
              </h4>
              <ul className="space-y-1">
                {keyDecisions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {explores && explores.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-2">
                What It Explores
              </h4>
              <ul className="space-y-1">
                {explores.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-2">
              {explores ? "Status" : "What I Built"}
            </h4>
            {status ? (
              <p>{status}</p>
            ) : (
              <ul className="space-y-1">
                {whatIBuilt.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {outcome.length > 0 && !status && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wide mb-2">
                Outcome
              </h4>
              <ul className="space-y-1">
                {outcome.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
};

const Experience: React.FC = () => {
  const intro =
    "Production-grade mainnet protocols with real users and real funds; additional hackathon and R&D work below.";

  const productionProtocols: ProtocolWorkProps[] = [
    {
      title: "RMM — Real-World Asset Lending Protocol",
      context:
        "RMM is a lending and borrowing protocol backed by tokenized real estate assets, enabling users to borrow and lend against real-world collateral.",
      role: "Smart Contract Engineer — protocol architecture, implementation, testing, and deployment.",
      whatIBuilt: [
        "Core lending & borrowing logic for RWA-backed tokens",
        "Collateralization, health factor, and liquidation mechanisms",
        "Upgradeable, modular contract architecture (production-grade)",
        "Comprehensive test suite: unit, integration, fuzz, and invariant tests",
        "Gas optimization and storage layout design",
        "Close collaboration with external auditors",
      ],
      outcome: [
        "TVL grew from 0 to $50M+",
        "Live production protocol with real users and real funds",
        "Audited, maintained, and evolved over multiple releases",
      ],
      delay: 0,
    },
    {
      title: "YAM — On-Chain Trading Platform for RWAs",
      context:
        "YAM is a secondary market trading platform enabling on-chain trading of tokenized real-world assets.",
      role: "Smart Contract Engineer — trading logic, integrations, and protocol security.",
      whatIBuilt: [
        "Core trading and settlement smart contracts",
        "Token accounting and transfer logic",
        "Integration with ERC standards and existing ecosystem contracts",
        "On-chain/off-chain data indexing using The Graph",
        "Frontend integration support and production debugging",
      ],
      outcome: [
        "$30M trading volume",
        "Production deployment with active users",
        "Core component of the RealToken ecosystem",
      ],
      delay: 100,
    },
    {
      title: "RealToken Ecosystem Governance (DAO & Treasury)",
      context:
        "Governance system allowing RealToken ecosystem participants to propose, vote on, and execute protocol-level decisions in a decentralized and transparent way.",
      role: "Smart Contract Engineer — governance architecture and implementation.",
      whatIBuilt: [
        "Governance contracts based on Governor pattern",
        "Proposal lifecycle: creation, voting, execution",
        "Voting power logic tied to ecosystem tokens",
        "Treasury contracts controlled by on-chain governance",
        "Integration with off-chain voting and tallying tools",
        "Security constraints to protect protocol funds",
      ],
      outcome: [
        "Fully operational DAO governance system",
        "Token holders actively participate in protocol decisions",
        "Enabled decentralized upgrades and treasury management",
      ],
      delay: 200,
    },
    {
      title: "Cross-Chain Token Bridge — Chainlink CCIP",
      context:
        "Secure token bridge enabling cross-chain transfers across multiple EVM networks.",
      role: "Protocol architect and implementer.",
      keyDecisions: [
        "Burn-and-mint architecture to prevent double spending",
        "Chainlink CCIP for cross-chain security guarantees",
        "Strict validation, replay protection, and failure handling",
      ],
      whatIBuilt: [
        "CCIP sender/receiver smart contracts",
        "Token lifecycle management across chains",
        "Extensive testing in forked and simulated environments",
      ],
      outcome: [
        "Production-grade cross-chain infrastructure",
        "Used for ecosystem token distribution across chains",
        "Support EVM blockchains (Ethereum, Polygon, Gnosis)",
      ],
      delay: 300,
    },
    {
      title: "ERC-6551 Identity NFTs — Token-Bound Accounts & Royalties",
      context:
        "An on-chain identity NFT system using token-bound accounts (ERC-6551) to let NFTs own assets, execute actions, and route revenue programmatically.",
      role: "Smart Contract Engineer — architecture, implementation, testing, and integration support.",
      whatIBuilt: [
        "Architected ERC-6551 token-bound account NFTs enabling NFTs to own assets and interact with protocols",
        "Implemented dynamic attributes/metadata updates tied to on-chain state and user actions",
        "Integrated ERC-2981 royalties for native secondary-sale revenue routing",
        "Designed permissioning and execution flows for safe account operations (calls, asset custody, upgrades)",
        "Built test coverage for account logic, royalty flows, and edge cases",
      ],
      outcome: [
        "Production-ready identity primitives enabling composable NFT-owned wallets and programmable identity",
        "Reliable royalty and revenue routing for creators/treasuries via standardized interfaces",
      ],
      delay: 350,
    },
    {
      title: "Merkle Distribution Vaults — Automated On-Chain Revenue Allocation",
      context:
        "A distribution system to allocate protocol revenue to many recipients efficiently and verifiably using Merkle proofs and on-chain claim vaults.",
      role: "Smart Contract Engineer — contract design, tooling automation, and distribution operations.",
      whatIBuilt: [
        "Built Merkle-tree backed distribution vaults to execute scalable on-chain revenue allocations",
        "Implemented claim verification logic (Merkle proofs), anti-double-claim protections, and accounting",
        "Automated the full distribution pipeline: snapshot → Merkle tree generation → root publishing → monitoring",
        "Designed admin and safety controls for root updates, emergency stops, and operational integrity",
        "Delivered testing around proof validation, rounding/precision, and adversarial claim patterns",
      ],
      outcome: [
        "Low-gas, verifiable revenue distributions at scale with minimal on-chain storage",
        "Repeatable automated workflow enabling frequent, reliable payouts to large recipient sets",
      ],
      delay: 400,
    },
  ];

  const projects: ProtocolWorkProps[] = [
    {
      title:
        "Aquila — Parametric Forest Fire Insurance (Chainlink Hackathon 2021 prize)",
      context:
        "Aquila is a parametric insurance protocol automating payouts for forest fire incidents using real-world data.",
      role: "Smart Contract Engineer — protocol design and implementation.",
      whatIBuilt: [
        "Solidity smart contracts to manage insurance policies and premiums",
        "Automated payout logic triggered by oracle data",
        "Integration with Chainlink oracles and nodes",
        "End-to-end testing and deployment on Ethereum",
      ],
      outcome: [
        "Winner — Chainlink Hackathon (Fall 2021)",
        "Demonstrated real-world DeFi + oracle-based insurance use case",
        "Fully functional end-to-end prototype",
      ],
      delay: 400,
    },
    {
      title: "Zeur — Zero-Interest Lending Protocol (Chainlink Hackathon 2025)",
      context:
        "Zeur explores a novel lending model where borrowers pay 0% interest, while lenders earn yield via collateral deployed into liquid staking tokens.",
      role: "Protocol researcher and designer.",
      explores: [
        "Interest-free borrowing mechanics",
        "Yield redirection via LSTs (Lido, EtherFi, Rocket Pool)",
        "New incentive structures for borrowers and lenders",
        "Composability with existing DeFi primitives",
      ],
      whatIBuilt: [],
      outcome: [],
      status: "Active R&D / early-stage protocol design",
      delay: 500,
    },

    {
      title:
        "UniYield — Cross-Chain Unified Yield Vault (ETHGlobal Hackathon 2026)",
      context:
        "UniYield is a cross-chain DeFi protocol that enables one-click stablecoin deposits from any chain into a unified yield-optimizing vault.",
      role: "Smart Contract & Full-Stack Web3 Engineer — protocol architecture, smart contracts, and frontend integration.",
      whatIBuilt: [
        "ERC-4626 yield vault implemented with a Diamond (EIP-2535) proxy architecture",
        "Modular strategy adapters for Aave, Morpho, and Compound",
        "Cross-chain flow using LI.FI as a transport and execution layer",
        "Frontend integrating LI.FI routing, execution, and on-chain vault interactions",
        "Deployment and configuration on Base mainnet",
      ],
      outcome: [
        "Fully deployed contracts and working end-to-end cross-chain UX",
        "Demonstrated composable use of LI.FI beyond simple bridging",
        "Production-style prototype showcasing one-click cross-chain DeFi",
      ],
      delay: 450,
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title">Selected Protocol Work</h2>
          <p className="text-muted-foreground mt-2">{intro}</p>
        </Reveal>

        <Reveal delay={50}>
          <h3 className="text-lg font-semibold text-foreground/90 mt-10 mb-4">
            Selected Production Protocols (Mainnet / real funds)
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productionProtocols.map((entry, index) => (
            <ProtocolCard key={`prod-${index}`} {...entry} />
          ))}
        </div>

        <Reveal delay={50}>
          <h3 className="text-lg font-semibold text-foreground/90 mt-14 mb-4">
            Selected Projects (Hackathons / R&D)
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((entry, index) => (
            <ProtocolCard key={`proj-${index}`} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
