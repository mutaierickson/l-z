// src/data/index.ts
import { Cpu, Shield, WifiIcon, Code } from "lucide-react";


// Local partner logos
import HuaweiLogo from "@/assets/partners/Picture4.png";
import FortnetLogo from "@/assets/partners/Picture19.png";
import CommvaultLogo from "@/assets/partners/Picture12.png";
import VeeamLogo from "@/assets/partners/Picture13.png";
import DellLogo from "@/assets/partners/Picture2.png";
import CheckPointLogo from "@/assets/partners/Picture16.png";
import OracleLogo from "@/assets/partners/Picture5.png";
import HpeLogo from "@/assets/partners/Picture3.png";
import IBMLogo from "@/assets/partners/Picture1.png";
import LenovoLogo from "@/assets/partners/Picture6.png";
import NetAppLogo from "@/assets/partners/Picture7.png";
import RedHatLogo from "@/assets/partners/Picture8.png";
import ExtremeNetworksLogo from "@/assets/partners/Picture10.png";
import MicrosoftLogo from "@/assets/partners/Picture9.png";
import AristaLogo from "@/assets/partners/Picture11.png";
import AcronisLogo from "@/assets/partners/Picture14.png";
import VeritasLogo from "@/assets/partners/Picture15.png";
import ThalesLogo from "@/assets/partners/Picture20.png";
import CiscoLogo from "@/assets/partners/Picture17.png";
import RuckusLogo from "@/assets/partners/Picture18.png";
import Opentext from "@/assets/partners/Picture21.png";
import Hikvision from "@/assets/partners/Picture24.png";
import Vertiv from "@/assets/partners/Picture25.png";
import Kaspersky from "@/assets/partners/Picture26.png";
import Logsign from "@/assets/partners/Picture27.png";
import Symantec from "@/assets/partners/Picture28.png";
import Vmware from "@/assets/partners/Picture29.png";
import HewlettPackaed from "@/assets/partners/Picture30.png";
import BitDefender from "@/assets/partners/Picture23.png";
import CloudStrike from "@/assets/partners/Picture31.png";



// Local testimonial images
import PrecisionDrones from "@/assets/testimonials/Picture5.png";
import EleganceDesigners from "@/assets/testimonials/Picture2.png";
import KenyaFarmers from "@/assets/testimonials/Picture13.png";
import VilcomNetwork from "@/assets/testimonials/Picture11.png";
import KenyaPower from "@/assets/testimonials/Picture20.png";
import SignVrse from "@/assets/testimonials/signvrse.png";
import SRC from "@/assets/testimonials/Picture9.png";
import IndoEmbassy from "@/assets/testimonials/Picture18.png";
import KenyaPort from "@/assets/testimonials/Picture1.png";
import HealthStrat from "@/assets/testimonials/Picture17.png"
import CooperativeBank from "@/assets/testimonials/Picture3.png";
import Afosi from "@/assets/testimonials/Picture8.png";
import KSMS from "@/assets/testimonials/Picture7.png";
import PCEA from "@/assets/testimonials/Picture10.png";
import KenyaRailways from "@/assets/testimonials/Picture12.png";
import KSB from "@/assets/testimonials/Picture19.png";



export const partnersList = [
  { id: 1, name: "Huawei", logo: HuaweiLogo },
  { id: 2, name: "Dell", logo: DellLogo },
  { id: 3, name: "CheckPoint", logo: CheckPointLogo },
  { id: 4, name: "Oracle", logo: OracleLogo },
  { id: 5, name: "HPE", logo: HpeLogo },
  { id: 6, name: "Microsoft", logo: MicrosoftLogo },
  { id: 7, name: "Lenovo", logo: LenovoLogo },
  { id: 8, name: "NetApp", logo: NetAppLogo },
  { id: 9, name: "RedHat", logo: RedHatLogo },
  { id: 10, name: "ExtremeNetworks", logo: ExtremeNetworksLogo },
  { id: 11, name: "Arista", logo: AristaLogo },
  { id: 12, name: "Commvault", logo: CommvaultLogo },
  { id: 13, name: "Veeam", logo: VeeamLogo },
  { id: 14, name: "Acronis", logo: AcronisLogo },
  { id: 15, name: "Veritas", logo: VeritasLogo },
  { id: 16, name: "CheckPoint", logo: CheckPointLogo },
  { id: 17, name: "Cisco", logo: CiscoLogo },
  { id: 18, name: "Fortnet", logo: FortnetLogo },
  { id: 19, name: "Thales", logo: ThalesLogo },
  { id: 20, name: "OpenText", logo: Opentext },
  { id: 21, name: "IBM", logo: IBMLogo },
  { id: 22, name: "Ruckus", logo: RuckusLogo },
  { id: 23, name: "BitDefender", logo: BitDefender },
  { id: 24, name: "HikVision", logo: Hikvision },
  { id: 25, name: "HewlettPackards", logo: HewlettPackaed },
  { id: 26, name: "Kaspersky", logo: Kaspersky },
  { id: 27, name: "Vertiv", logo: Vertiv },
  { id: 28, name: "LogSign", logo: Logsign },
  { id: 29, name: "VMWare", logo: Vmware },
  { id: 30, name: "Symantec", logo: Symantec },
  { id: 31, name: "CloudStrike", logo: CloudStrike },



];

export const testimonials = [
  { id: 1, name: "Kenya Ports Authortiy", image: KenyaPort, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 2, name: "Kenya Railways Corporation", image: KenyaRailways, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 3, name: "Co-operative Bank of Kenya", image: CooperativeBank, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 4, name: "Kenya Power & Lighting Company", image: KenyaPower, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 5, name: "Elegance Designers & Printers", image: EleganceDesigners, message: "They delivered exceptional business solutions tailored to our needs.Their expertise in IT was evident from the start. Thanks to their seamless integration and support, our efficiency has significantly improved.", rating: 5 },
  { id: 6, name: "Kenya Farmers Association", image: KenyaFarmers, message: "Their exceptional business and IT solutions exceeded our expectations.They provided customized strategies that aligned with our goals. Their professional team ensured a smooth implementation process, resulting in notable improvements.", rating: 5 },
  { id: 7, name: "Vilcom Networks", image: VilcomNetwork, message: "Outstanding service! Their business solutions are top-notch, and theirIT support is unparalleled. Our workflow has become more efficient and productive. We highly recommend their comprehensive services.", rating: 5 },
  { id: 8, name: "Precision Drones", image: PrecisionDrones, message: "This service truly transformed our business with innovative solutions and excellent support.", rating: 5 },{ id: 6, name: "SignVrse", image: SignVrse, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 9, name: "Salaries & Remuneration Commission", image: SRC, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 10, name: "Indonesian Embassy", image: IndoEmbassy, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 11, name: "Health Strat", image: HealthStrat, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 12, name: "Africa For Sustainability Initiative", image: Afosi, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 13, name: "Kenya School for Monetary Studies", image: KSMS, message: "The level of professionalism and creativity is unmatched, highly recommend their services.", rating: 5 },
  { id: 14, name: "Presbyterian Church of East Africa", image: PCEA, message: "Partnering with them was a game-changer. Their business and IT solutions perfectly met our requirements. Their dedicated team provided consistent support, enhancing our overall productivity and performance.", rating: 5 },
  { id: 15, name: "Kenya Society For The Blind", image: KSB, message: "Partnering with them was a game-changer. Their business and IT solutions perfectly met our requirements. Their dedicated team provided consistent support, enhancing our overall productivity and performance.", rating: 5 },
];

export const services = [
  {
    title: "Applications, Databases & Software Development",
    subtitle: "Custom Software Solutions",
    icon: Code,
    path: "/Applications",
    image: "https://img.freepik.com/premium-photo/curios-it-engineer-standing-middle-working-data-center-server-room_488220-873.jpg?w=900",
    description: "Your challenges demand more than code; you require bespoke digital artistry. We engineer cutting-edge applications and databases that don’t just solve problems; they redefine industries. From AI-driven analytics to mission-critical databases, our solutions are precision-tuned to your ambitions. Think faster decisions, seamless scalability, and a competitive edge sharpened to perfection.",
    highlights: [
      "Custom software development",
      "Database design & management",
      "Web & mobile application development",
      "API integration & development",
      "Cloud-native application development"
    ]
  },
  {
    title: "Networking Solutions",
    subtitle: "Networking & Connectivity",
    icon: WifiIcon,
    path: "/Networking",
    image: "https://img.freepik.com/free-photo/network-switch-with-cables_1137-6.jpg?t=st=1746780783~exp=1746784383~hmac=88c3651063496308bc4341432619a5e2a709edbaa5b9b578f849235c31ade6aa&w=900",
    description: "Your empire spans continents. Our selection of zero-latency networking fabric from reliable OEMs will ensure every user, whether in the boardroom or halfway across the globe, to operate like they’re at the heart of your infrastructure. With integration of software-defined networking (SDN) and multi-layered redundancy, we will turn complexity into seamless, lightning-fast access.",
    highlights: [
      "Sensor network deployment",
      "Edge computing architecture",
      "Predictive maintenance systems",
      "Fleet management solutions",
      "Smart facility integration"
    ]
  },
  {
    title: "Cyber Security & Data Loss Prevention",
    subtitle: "Advanced Threat Protection",
    icon: Shield,
    path: "/Cybersecurity",
    image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148364032.jpg?t=st=1746781511~exp=1746785111~hmac=e4ccaafcf3d05fffa67177860d0abbed45cc6a9e470f1174349ea1e0399fc145&w=996",
    description: "In a world of wolves, we are your war machines. Our cybersecurity suite isn’t just a shield — it’s an AI-powered sentinel that hunts threats before they breathe. From quantum-resistant encryption to behavior-based anomaly detection, we guard your data with a brutality that leaves no room for error.",
    highlights: [
      "Real-time threat detection & response",
      "Compliance management",
      "Security awareness training",
      "Penetration testing & audits",
      "Incident response planning"
    ]
    
  },
  {
    title: "Enterprise Resource Planning",
    subtitle: "ERP & Business Process Automation",
    icon: Code,
    path: "/Enterprisesolutions",
    image: "https://img.freepik.com/premium-photo/enterprise-resource-management-erp-software-system-business-resources-plan_31965-6467.jpg?w=996",
    description: "Your business isn't just processes - it's a battlefield of ambition. Our AI-driven Enterprise Resource Planning systems don't just streamline workflows; they orchestrate empires. We transform fragmented operations into a weaponized advantage through ruthless operational efficiency and predictive command.",

    highlights: [
      "Sensor network deployment",
      "Edge computing architecture",
      "Predictive maintenance systems",
      "Fleet management solutions",
      "Smart facility integration"
    ]
  },
  {
    title: "Software & Hardware Infrastructure",
    subtitle: "Infrastructure",
    icon: Cpu,
    path: "/Infrastructure",
    image: "https://img.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?t=st=1746692093~exp=1746695693~hmac=ac9e278e20f4a920c47a2abd440d65e9107334b35adb78c1c81f0098d05e7e46&w=996",
    description: "We understand that behind every revolution lies infrastructure engineered to perfection. Our carefully selected and optimized high-availability compute and storage platforms are the silent titans of your success; our aim is to make your enterprise relentless, resilient, and ready to scale at the speed of your ambition. With 99.999% uptime and enterprise-grade redundancy, your applications will not just run; they will dominate.",
    highlights: [
      "Full-stack cloud migration services",
      "Multi-cloud management & optimization",
      "Disaster recovery planning",
      "Cost management & optimization",
      "Kubernetes & container orchestration"
    ]
  },
];

export interface ProjectResult {
  value: number; 
  unit: string; 
  description: string; 
  icon?: string; 
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string; 
  challenge: string; 
  solution: string; 
  technologies: string[]; 
  highlights: string[]; 
  results: ProjectResult[]; 
  path: string; 
}

export interface SuccessStory {
  id: number;
  category: string;
  title: string;
  description: string; 
  path?: string; 
  linkText?: string; 
}

// --- PROJECTS DATA ---
export const projectsList: Project[] = [
  {
    id: 1,
    category: "Infrastructure",
    title: "Kenya Ports Authority – ICT Modernization",
    description: "Led the modernization of Kenya Ports Authority’s IT infrastructure, implementing robust hardware systems and secure networking to enhance operational efficiency and communication across port facilities.",
    challenge: "The Authority faced challenges with outdated hardware, frequent system downtimes, and limited inter-departmental communication due to legacy infrastructure and minimal disaster recovery capabilities.",
    solution: "We upgraded the data center with modern servers, implemented a secure LAN/WAN architecture, deployed enterprise-grade firewalls, and set up backup and disaster recovery solutions. Workstations and network equipment were standardized for consistent performance and easier maintenance.",
    technologies: [
      "Dell PowerEdge Servers",
      "Cisco Switches & Firewalls",
      "Fiber Optic Backbone",
      "HP ProDesk Workstations",
      "VMware vSphere",
      "Windows Server 2022",
      "Structured Cabling Systems"
    ],
    highlights: [
      "Established a redundant and secure network backbone",
      "Centralized IT resources through server virtualization",
      "Enhanced system uptime with proactive monitoring tools",
      "Improved user support with standardized hardware deployments"
    ],
    results: [
      { value: 99.9, unit: "%", description: "Network uptime after deployment" },
      { value: 80, unit: "%", description: "Reduction in hardware-related incidents" },
      { value: 50, unit: "%", description: "Faster internal communication and data access" },
      { value: 3, unit: "x", description: "Increase in overall IT capacity and performance" }
    ],
    path: "/casestudy1"
  },
  {
    id: 2,
    category: "Infrastructure",
    title: "Kenya Railways Corporation – ICT Systems Revamp",
    description: "Partnered with Kenya Railways Corporation to overhaul their outdated ICT infrastructure, enhancing communication systems, hardware reliability, and centralized operations across regional stations.",
    challenge: "Kenya Railways relied on legacy systems that suffered frequent hardware failures, lacked secure connectivity between offices, and could not support modern enterprise software or real-time communication. This caused delays in internal processes and limited digital transformation efforts.",
    solution: "We executed a structured ICT infrastructure upgrade including installation of industrial-grade servers, network backbone modernization, high-speed internet connectivity, surveillance systems, and reliable power backup solutions. The overhaul supported future scalability and integration of smart transport systems.",
    technologies: [
      "Lenovo ThinkSystem Servers",
      "Fortinet Network Firewalls",
      "Fiber Optic Backbone",
      "Access Control & CCTV Systems",
      "Enterprise Wi-Fi (Ubiquiti/Aruba)",
      "Smart Power Backup & UPS Systems"
    ],
    highlights: [
      "Established secure, high-speed LAN/WAN across stations",
      "Minimized hardware downtime through industrial-grade replacements",
      "Enabled centralized user and asset management",
      "Improved data security and system resilience"
    ],
    results: [
      { value: 85, unit: "%", description: "Increase in system reliability" },
      { value: 60, unit: "%", description: "Reduction in network-related delays" },
      { value: 50, unit: "%", description: "Boost in internal communication efficiency" }
    ],
    path: "/casestudy1"
  },
  
  {
    id: 3,
    category: "Healthcare",
    title: "Nairobi Metropolitan Services – Digital Health Platform",
    description: "Developed a comprehensive, secure telehealth platform to modernize service delivery for Nairobi Metropolitan Services (NMS), enhancing patient experience and operational efficiency.",
    challenge: "NMS faced fragmented health systems with no centralized data sharing, delays in patient care coordination, and limited remote service capabilities. There was also a growing need to integrate real-time monitoring and communication tools for better public health outcomes.",
    solution: "We engineered a full-stack digital platform connecting patients, providers, and health centers via real-time communication tools. Core features included online ticketing, live monitoring, fleet and asset tracking, and integrated electronic health records. The platform centralized information flow through a Command & Control system with intuitive dashboards for improved decision-making.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "Twilio Video",
      "AWS (EC2, Shield, RDS)",
      "Docker"
    ],
    highlights: [
      "Secure real-time video consultations and appointment scheduling",
      "Integrated EHR and patient data synchronization",
      "Live dashboards for Command & Control visibility",
      "Fleet and asset management with geolocation tracking",
      "Role-based access control and end-to-end encryption"
    ],
    results: [
      { value: 98, unit: "%", description: "Patient satisfaction rate reported" },
      { value: 50, unit: "%", description: "Reduction in missed appointments" },
      { value: 70, unit: "%", description: "Increase in remote healthcare access" },
      { value: 65, unit: "%", description: "Improved operational decision-making speed" }
    ],
    path: "/projects/nms-digital-health"
  },
  
  {
    id: 4,
    category: "Finance",
    title: "DFID Project – BioSIM Supply Chain Finance Platform",
    description: "Developed an intelligent financial and operational planning system to optimize supply chain performance, align business objectives, and automate sales invoicing for the confectionery industry.",
    challenge: "The project required a dynamic platform capable of aligning strategic, financial, commercial, and operational goals across supply chains in the confectionery sector. The client faced difficulties in planning inventory, responding to real-time demand changes, and tracking invoicing efficiency.",
    solution: "We implemented a centralized planning system that integrates cross-functional inputs to generate short-, mid-, and long-term supply forecasts. The system leverages real-time demand and supply signals to optimize inventory levels and mitigate constraints. A built-in finance module automates sales invoicing and aligns production targets with financial and operational KPIs.",
    technologies: ["Power BI", "Python", "Microsoft Dynamics 365", "Azure SQL Database", "SAP FICO", "Excel Macros"],
    highlights: [
      "Integrated financial planning and supply chain alignment",
      "Automated sales invoicing across channels",
      "Real-time inventory and demand-supply visibility",
      "Improved planning accuracy through data-driven insights",
      "Collaborative cross-functional platform for business units"
    ],
    results: [
      { value: 80, unit: "%", description: "Reduction in supply-demand mismatches" },
      { value: 65, unit: "%", description: "Increase in invoicing efficiency" },
      { value: 40, unit: "%", description: "Decrease in inventory holding costs" },
      { value: 90, unit: "%", description: "Alignment between financial and operational KPIs" }
    ],
    path: "/projects/finance-biosim"
  },
  
  {
    id: 5,
    category: "Cybersecurity",
    title: "Salary & Remuneration Commission – Data Protection and Cybersecurity Platform",
    description: "Implemented a government-grade cybersecurity framework to safeguard sensitive payroll data, ensure regulatory compliance, and mitigate risks associated with insider threats and external breaches.",
    challenge: "SRC faced growing cybersecurity threats targeting sensitive salary structures, payroll data, and internal communications. There was a lack of centralized threat detection, inadequate data loss prevention controls, and compliance gaps with emerging data protection laws.",
    solution: "We developed and deployed a secure digital infrastructure focused on Data Loss Prevention (DLP), identity and access management (IAM), and continuous monitoring. The platform includes automated encryption protocols, user behavior analytics, and incident response workflows. We also ensured alignment with Kenya's Data Protection Act and ISO/IEC 27001 standards.",
    technologies: [
      "Microsoft Defender for Endpoint",
      "Fortinet DLP",
      "Zecurion DLP",
      "AWS KMS (Key Management Service)",
      "SIEM (Security Information and Event Management)",
      "OAuth 2.0 / SAML",
      "Zero Trust Network Access (ZTNA)"
    ],
    highlights: [
      "Implemented real-time DLP and access control across endpoints",
      "Encrypted sensitive payroll and personnel records",
      "Automated threat detection and mitigation system",
      "Role-based access management and policy enforcement",
      "Auditable compliance logs and reporting"
    ],
    results: [
      { value: 100, unit: "%", description: "Regulatory compliance with Kenya’s Data Protection Act" },
      { value: 75, unit: "%", description: "Reduction in potential data breach vectors" },
      { value: 60, unit: "%", description: "Decrease in internal data access violations" },
      { value: 90, unit: "%", description: "Improved visibility into cybersecurity posture" }
    ],
    path: "/casestudy2"
  }
  
];

// --- SUCCESS STORIES DATA ---
export const successStories: SuccessStory[] = [
  {
    id: 1,
    category: "FinTech",
    title: "Automating Financial Reporting",
    description: "Built an automated system for a financial institution to generate complex regulatory reports, significantly reducing manual effort and error rates.",
    path: "/projects/fintech-reporting",
    linkText: "Learn More"
  },
  {
    id: 2,
    category: "Education",
    title: "Developing a Remote Learning Portal",
    description: "Created a robust and interactive online learning platform for a university, facilitating virtual classes, assignment submission, and progress tracking.",
    path: "/projects/education-portal",
    linkText: "View Details"
  },
  {
    id: 3,
    category: "Real Estate",
    title: "Launching a Property Management App",
    description: "Designed and developed a mobile application simplifying property listing, tenant communication, and maintenance request management for real estate agents.",
     path: "/projects/realestate-app"
  },
   {
    id: 4,
    category: "Manufacturing",
    title: "Implementing an IoT Monitoring Solution",
    description: "Deployed an IoT solution to monitor factory equipment in real-time, enabling predictive maintenance and optimizing production efficiency.",
     // path: null // Example of a story with no link yet
   },
   {
    id: 5,
    category: "Non-Profit",
    title: "Building a Donor Management System",
    description: "Created a custom CRM to streamline donor relations, manage campaigns, and track contributions effectively for a large non-profit organization.",
     // path: null
   },
    {
    id: 6,
    category: "Legal Tech",
    title: "Developing Case Management Software",
    description: "Engineered a secure web application for law firms to manage cases, documents, deadlines, and client communication in a single platform.",
     // path: null
   },
];



export const featuredProjects = [
  { image: "https://img.freepik.com/free-photo/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation_482257-65963.jpg?t=st=1746692093~exp=1746695693~hmac=ac9e278e20f4a920c47a2abd440d65e9107334b35adb78c1c81f0098d05e7e46&w=996", category: "Infrastructure", title: "Enterprise Hardware & Software Infrastructure", description: "Protect networks, applications, and data by identifying vulnerabilities, preventing breaches, encrypting sensitive information, implementing policies and technologies to effectively monitor, mitigate, recover from threats.", path: "/casestudy1" },
  { image: "https://img.freepik.com/free-vector/neon-fingerprint-background_23-2148364032.jpg?t=st=1746781511~exp=1746785111~hmac=e4ccaafcf3d05fffa67177860d0abbed45cc6a9e470f1174349ea1e0399fc145&w=996", category: "Cybersecurity", title: "Cyber Security & Data Loss Prevention", description: "Establishes secure, scalable, resilient IT environments by integrating robust servers, storage, networking, virtualization, operating systems, middleware, and management tools to support critical business applications.", path: "/casestudy2" },
  { image: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241207.jpg?t=st=1746976491~exp=1746980091~hmac=a8895b5c907a1d832b505e9792a53a9cbbcb1724b675ac6b2ebf40960cb12071&w=996", category: "AI & Machine Learning", title: "Predictive & Generative Artificial Intelligence", description: "Leverages machine learning algorithms to analyze large-scale historical data, forecast trends, and autonomously generate creative content, solutions, and insights, driving innovation and informed decision-making.", path: "/casestudy3" },
];


// index.ts (Assuming this is where heroSlides is defined)

export const heroSlides = [
  { id: 1, title: "Propellant For the Future's Innovation", subtitle: "The Leading Technology Experts in East Africa", image: "https://img.freepik.com/free-photo/tree-bubble_1048-4660.jpg?uid=R191960193&ga=GA1.1.587790270.1744118157&semt=ais_hybrid&w=740" },
  { id: 2, title: "Innovative Solutions for Every Business", subtitle: "Tailored technology to help your organization thrive", image: "https://img.freepik.com/free-photo/modern-chandelier-dark-background_181624-61813.jpg?t=st=1744814436~exp=1744818036~hmac=75ef1afee0e228fcd172724b6a51dd6496db8df7f0c870238054751994cbbe5d&w=996" },
  { id: 3, title: "Excellence in Service Delivery Across All Sectors", subtitle: "10+ years of experience across East Africa", image: "https://img.freepik.com/premium-photo/boxes-moving-conveyor-belt-laptop-conveyor-belt-3d-rendering-computer-digital-drawing_1094261-1764.jpg?w=996" },
  { id: 4, title: "We Are The Silicon Savannah of East Africa", subtitle: "We Accelerate the power of Computing to suit your daily needs", image: "https://img.freepik.com/premium-photo/great-migration-wildebeest-african-savannah_344022-86.jpg?w=996" },
  {
    id: 5,
    title: "We Are ISO Certified for Global Excellence",
    subtitle: "As Millenium Solutions, We Demonstrate Our Commitment to International Quality Standards",
    image: "https://img.freepik.com/free-photo/website-hosting-concept-with-bright-light_23-2149406783.jpg?uid=R191960193&ga=GA1.1.587790270.1744118157&w=740",
    
    overrideLink2: {
      text: "View Certifications", 
      to: "/isoCertification",
    },
  },
];

export const cardHoverVariant = {
  hover: { scale: 1.02, transition: { duration: 0.3, ease: "easeInOut" } },
  rest: { scale: 1 },
};
