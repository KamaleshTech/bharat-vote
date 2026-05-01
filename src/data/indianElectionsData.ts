/**
 * Represents a multiple-choice question for the election quiz.
 */
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

/**
 * Represents an educational flashcard with a term and its definition.
 */
export interface Flashcard {
  id: number;
  term: string;
  definition: string;
}

/**
 * Represents a key event in the election process timeline.
 */
export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/**
 * Collection of quiz questions for the Knowledge Check module.
 */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the minimum age to be eligible to vote in India?",
    options: ["16", "18", "21", "25"],
    answer: "18",
    explanation: "According to the Constitution of India, any citizen who is 18 years of age or older on the qualifying date (usually January 1st of the year) is eligible to vote."
  },
  {
    id: 2,
    question: "What does EVM stand for?",
    options: ["Electronic Voting Machine", "Election Verification Module", "Electronic Voter Matrix", "Electoral Voting Mechanism"],
    answer: "Electronic Voting Machine",
    explanation: "EVM stands for Electronic Voting Machine, which is used in Indian elections to record votes electronically instead of using traditional paper ballots."
  },
  {
    id: 3,
    question: "Which Constitutional body is responsible for conducting elections in India?",
    options: ["Supreme Court of India", "Parliament", "Election Commission of India", "President of India"],
    answer: "Election Commission of India",
    explanation: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India at national and state levels."
  },
  {
    id: 4,
    question: "What does NOTA stand for?",
    options: ["None Of The Above", "No Other True Alternative", "Not On The Agenda", "Nullified Option To Act"],
    answer: "None Of The Above",
    explanation: "NOTA stands for 'None Of The Above'. It is an option on the voting machine allowing voters to officially register a vote of rejection for all candidates."
  },
  {
    id: 5,
    question: "What document is primarily issued by the ECI to eligible voters?",
    options: ["Aadhaar Card", "PAN Card", "EPIC (Voter ID)", "Passport"],
    answer: "EPIC (Voter ID)",
    explanation: "The ECI issues the Electors Photo Identity Card (EPIC), commonly known as the Voter ID card, to eligible voters."
  },
  {
    id: 6,
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["Prime Minister", "Chief Justice of India", "President of India", "Parliament"],
    answer: "President of India",
    explanation: "The President of India appoints the Chief Election Commissioner and other Election Commissioners based on the advice of the Union Council of Ministers."
  },
  {
    id: 7,
    question: "What is the maximum number of members in the Lok Sabha?",
    options: ["543", "552", "250", "500"],
    answer: "552",
    explanation: "The maximum strength of the House envisaged by the Constitution is 552. However, currently, the Lok Sabha has 543 elected members."
  }
];

/**
 * Collection of flashcards for the terminology mastery module.
 */
export const flashcards: Flashcard[] = [
  {
    id: 1,
    term: "Model Code of Conduct (MCC)",
    definition: "A set of guidelines issued by the Election Commission of India for conduct of political parties and candidates during elections mainly with respect to speeches, polling day, polling booths, portfolios, election manifestos, processions and general conduct. It comes into force immediately on announcement of the election schedule."
  },
  {
    id: 2,
    term: "VVPAT",
    definition: "Voter Verifiable Paper Audit Trail. It is an independent verification system for voting machines designed to allow voters to verify that their vote was cast correctly, to detect possible election fraud or malfunction, and to provide a means to audit the stored electronic results."
  },
  {
    id: 3,
    term: "Lok Sabha",
    definition: "The lower house of India's bicameral Parliament, with members elected directly by the people of India. General elections are held every 5 years to elect its members."
  },
  {
    id: 4,
    term: "Vidhan Sabha",
    definition: "The State Legislative Assembly. It is the lower house (in states with bicameral legislature) or the sole house (in states with unicameral legislature) of the state legislature in the different States of India."
  },
  {
    id: 5,
    term: "Constituency",
    definition: "A specific geographical area that is represented by a single Member of Parliament (MP) in the Lok Sabha or Member of Legislative Assembly (MLA) in the Vidhan Sabha."
  },
  {
    id: 6,
    term: "Rajya Sabha",
    definition: "The upper house of the bicameral Parliament of India. Members are indirectly elected by members of the legislative assemblies of the states and union territories using single transferable votes."
  },
  {
    id: 7,
    term: "Electoral Roll",
    definition: "Often called the Voter's List, it is a compiled list of all the people who are eligible to vote in a particular constituency."
  },
  {
    id: 8,
    term: "Delimitation Commission",
    definition: "A commission established by the Government of India to redraw the boundaries of the various assembly and Lok Sabha constituencies based on a recent census."
  },
  {
    id: 9,
    term: "Returning Officer",
    definition: "The statutory authority responsible for overseeing the election in a constituency. They are appointed by the Election Commission."
  },
  {
    id: 10,
    term: "By-election",
    definition: "An election held to fill a political office that has become vacant between regularly scheduled elections."
  }
];

/**
 * Collection of timeline events for the electoral process overview.
 */
export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Announcement of Election Schedule",
    description: "The Election Commission of India formally announces the dates for the elections. The Model Code of Conduct comes into effect immediately.",
    icon: "Calendar"
  },
  {
    id: 2,
    title: "Filing of Nominations",
    description: "Candidates submit their nomination papers to the Returning Officer along with required affidavits detailing their criminal background, assets, liabilities, and educational qualifications.",
    icon: "FileText"
  },
  {
    id: 3,
    title: "Scrutiny of Nominations",
    description: "The Returning Officer examines the nomination papers to ensure they are valid and fulfill all legal requirements. Invalid nominations are rejected.",
    icon: "Search"
  },
  {
    id: 4,
    title: "Withdrawal of Candidature",
    description: "Candidates are given a specific window to withdraw their nominations if they choose not to contest.",
    icon: "XCircle"
  },
  {
    id: 5,
    title: "Campaigning",
    description: "Political parties and candidates campaign to win voter support. Campaigning must end 48 hours before the end of polling.",
    icon: "Megaphone"
  },
  {
    id: 6,
    title: "Polling Day",
    description: "Voters go to their designated polling booths to cast their votes using EVMs.",
    icon: "CheckSquare"
  },
  {
    id: 7,
    title: "Counting of Votes",
    description: "Votes are counted under strict supervision. The candidate with the highest number of votes in a constituency is declared the winner.",
    icon: "BarChart"
  },
  {
    id: 8,
    title: "Declaration of Results",
    description: "The final results are officially declared, and the new government formation process begins.",
    icon: "Award"
  }
];
