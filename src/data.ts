export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FactRow {
  label: string;
  value: string;
}

export interface VisionCard {
  id: string;
  title: string;
  description: string;
}

export interface CommunityPoint {
  num: string;
  title: string;
  description: string;
}

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    period: "Early Steps",
    title: "Ward Member",
    subtitle: "Chitkul Village Governance",
    description: "Began his public service career at the absolute grassroots level. Served directly in ward-level committees, responding daily to small-scale irrigation, local lanes, and immediate neighborhood problems."
  },
  {
    period: "Grassroots Rise",
    title: "Sarpanch",
    subtitle: "Chitkul Gram Panchayat",
    description: "Elected as village Sarpanch with a clear mandates. Pioneered landmark rural sanitation drives, renovated government primary school buildings, and designed sustainable drinking water pipelines that became a blueprint for neighboring villages."
  },
  {
    period: "Regional Work",
    title: "BRS Inning",
    subtitle: "Active Welfare & Cadre Mobilization",
    description: "Mobilized massive youth leagues and community blocks in Patancheru. Supervised decentralized welfare distribution and established his status as a premier mass-contact leader in the Medak region."
  },
  {
    period: "Nov 2023",
    title: "INC Joining",
    subtitle: "Transition to High Command Representation",
    description: "Officially joined the Indian National Congress (INC) under high-command guidance. Consolidated backward class configurations in Medak and championed secular welfare policies rooted in Telangana's original statehood dreams."
  },
  {
    period: "Mar 2024",
    title: "Congress Lok Sabha Candidate",
    subtitle: "Nominated for Medak Constituency",
    description: "Appointed as the official INC candidate for the historic Medak Lok Sabha seat. Spearheaded an energetic, exhaustive 90-day campaign touching hundreds of remote hamlets. Championed reservation protections and worker rights."
  },
  {
    period: "May 13, 2024",
    title: "Historic Lok Sabha Mandate",
    subtitle: "The Medak Verdict",
    description: "Secured a historic poll performance of 4,32,078 votes. Cultivated an unprecedented grassroots vote share reflecting the deep-seated public trust of both urban laborers and rural cultivators."
  },
  {
    period: "Present Era",
    title: "Congress State Leader",
    subtitle: "Telangana State Strategy & Backward Class Voice",
    description: "Serves as an influential state voice. Regularly coordinates regional developmental forums, leads delegations on OBC/SC representation, and maintains permanent constituency accessibility in Patancheru and greater Medak."
  }
];

export const FACT_ROWS: FactRow[] = [
  { label: "NAME", value: "Neelam Madhu Mudiraj" },
  { label: "AGE", value: "43 Years" },
  { label: "PARTY", value: "Indian National Congress (INC)" },
  { label: "CONSTITUENCY", value: "Medak, Telangana" },
  { label: "NATIVE VILLAGE", value: "Chitkul, Patancheru" },
  { label: "COMMUNITY", value: "Mudiraj (OBC)" },
  { label: "PROFESSION", value: "Publicist, Social Advocate & Agriculturist" },
  { label: "FATHER", value: "Neelam Nirmal" },
  { label: "DECLARED ASSETS", value: "₹15.4 Crore (2024 Lok Sabha Declaration)" }
];

export const VISION_CARDS: VisionCard[] = [
  {
    id: "obc-sc",
    title: "OBC & SC Rights Protection",
    description: "Relentless struggle for equitable caste representation, defensive legal support for OBC reservations, and ensuring structural budget allocations for marginalized welfare."
  },
  {
    id: "rural",
    title: "Gram Panchayat Welfare",
    description: "Devolving real monetary power to village administrations. Upgrading Chitkul and neighboring hamlets with state-of-the-art health clinics, high-speed fiber links, and modern drains."
  },
  {
    id: "people",
    title: "Direct People's Access",
    description: "Eliminating the middleman barrier. Establishing permanent public grievance offices with digitized tracking systems where any common citizen can access their leader directly."
  },
  {
    id: "gov",
    title: "Inclusive Leadership Model",
    description: "Bridging the gap between corporate industrial zones (like Patancheru) and poor agricultural workers. Ensuring corporate social responsibility actively funds local schools."
  },
  {
    id: "econ",
    title: "Youth Upliftment & Skills",
    description: "Establishing advanced industrial training institutes in Patancheru to train local rural youth for high-paying manufacturing jobs. Funding state loans for women entrepreneurs."
  },
  {
    id: "const",
    title: "Constitutional Safeguards",
    description: "Preserving secular fabric, backing freedom of speech, and fostering inter-community harmony across Medak through active mediation and diverse social representations."
  }
];

export const COMMUNITY_POINTS: CommunityPoint[] = [
  {
    num: "01",
    title: "Mudiraj Voice & Representation",
    description: "As a leader from the Mudiraj community, Neelam Madhu Mudiraj has consistently elevated BC needs into mainstream assembly and national debates, securing socio-economic dignity for the fishing and farming working-class."
  },
  {
    num: "02",
    title: "Grassroots SC/ST Coalition",
    description: "Actively partnering with scheduled castes and Dalit networks in rural Patancheru. Led protests to implement original land allotments and secure education subsidies."
  },
  {
    num: "03",
    title: "Patancheru Industrial Care",
    description: "Balancing Patancheru's heavy manufacturing footprints with citizen safety. Demanding pristine environmental audits and job guarantees for local village youth from native areas."
  },
  {
    num: "04",
    title: "Cohesive State Alignment",
    description: "Working in close alignment with state high-command ministers to direct state budgets and developmental highways directly into backward subdivisions of Medak."
  }
];
