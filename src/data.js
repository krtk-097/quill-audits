export const issues = [
    {
      title: "Unauthorized Claim/Compound",
      description: "Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time."
    },
    {
      title: "Precision Loss in mintCDP()",
      description: "Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function."
    },
    {
      title: "Multiplication Accuracy",
      description: "Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations."
    },
    {
      title: "Incorrect Share Allocation",
      description: "The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources."
    },
    {
        title: "Logic Error in Referral Handling:",
        description: "A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system."
      },
    {
      title: "Referral Exploitation",
      description: "Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity."
    }
  ];

  export const audits = [
    "Ethereum Audit",
    "Polygon Audit",
    "BSC Audit",
    "Solana Audit",
    "NEAR Audit",
    "Algorand Audit",
    "Tezos Audit",
    "Hyperledger Fabric Audit",
    "L1 Audit",
    "Polkadot Audit",
    "Wallet Audit",
    "ZkSync Audit",
    "Starknet Audit"
  ];

  export const tools = [
    "QuillAI",
    "QuillCheck",
    "QuillShield",
    "QuillAcademy",
    "QuillMonitor",
    "Web3Suggest",
    "Explore All Tools"
  ];

  export const services = [
    "Red Teaming",
    "dApp Pentesting",
    "DeFi Diligence",
    "NFT Due Diligence",
    "Rug Pull Due Diligence",
    "Security Consultation",
    "Blockchain Forensics",
    "KYC (Know Your Customer)"
  ];

  export const links = [
    "Pricing",
    "Audit Process",
    "Our Audits",
    "Testimonials",
    "Security Synopsis",
    "Blog",
    "Clients"
    ];
  
  