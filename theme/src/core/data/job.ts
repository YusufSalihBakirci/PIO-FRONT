interface item {
    id: string,
    title: string
}
interface details {
    id: number,
    image: string,
    title: string,
    description: string,
    company: string,
    city: string,
    country: string,
    stars: number,
    date: string,
    priority: number,
    resp: resp[],
    reqs: reqs[],
    skills: skills[]
}
interface resp {
    title: string
}
interface reqs {
    title: string
}
interface skills {
    title: string
}
interface list {
    id: number,
    image: string,
    title: string,
    description: string,
    company: string,
    city: string,
    country: string,
    date: string,
    priority: string,
    stars: number
}
interface multi {
    code: number,
    name: string
}
export const filter: item[] = [
    {
        id: "chk-ani",
        title: "Full-time (8688)"
    },
    {
        id: "chk-ani1",
        title: "Contract (503)"
    },
    {
        id: "chk-ani2",
        title: "Part-time (288)"
    },
    {
        id: "chk-ani3",
        title: "Internship (236)"
    },
    {
        id: "chk-ani4",
        title: "Temporary (146)"
    },
    {
        id: "chk-ani5",
        title: "Commission (25)"
    }
]
export const local: item[] = [
    {
        id: "chk-ani6",
        title: "New York<span class='d-block'>NY (399)</span>"
    },
    {
        id: "chk-ani7",
        title: "San Francisco<span class='d-block'>CA (252)</span>"
    },
    {
        id: "chk-ani8",
        title: " Washington<span class='d-block'>DC(226)</span>"
    },
    {
        id: "chk-ani9",
        title: "Seattle<span class='d-block'>WA (242)</span>"
    },
    {
        id: "chk-ani10",
        title: "Chicago<span class='d-block'>IL (187)</span>"
    }
]
export const job: item[] = [
    {
        id: "chk-ani11",
        title: " UI/Ux designer(25)"
    },
    {
        id: "chk-ani12",
        title: "Graphic designer(10)"
    },
    {
        id: "chk-ani13",
        title: "Front end designer(15)"
    },
    {
        id: "chk-ani14",
        title: "PHP developer(42)"
    },
    {
        id: "chk-ani15",
        title: "React Developer(5)"
    }
]
export const industry: item[] = [
    {
        id: "chk-ani16",
        title: "Computer Software(14)"
    },
    {
        id: "chk-ani17",
        title: "IT Engineer(10)"
    },
    {
        id: "chk-ani18",
        title: "Service industry(20)"
    },
    {
        id: "chk-ani19",
        title: "Accounting(34)"
    },
    {
        id: "chk-ani20",
        title: "Financial Services(5)"
    }
]
export const skil: item[] = [
    {
        id: "chk-ani21",
        title: " HTML,scss & sass"
    },
    {
        id: "chk-ani22",
        title: "Javascript"
    },
    {
        id: "chk-ani23",
        title: "Node.js"
    },
    {
        id: "chk-ani24",
        title: "Gulp & Pug"
    },
    {
        id: "chk-ani25",
        title: "Angular.js"
    }
]
export const jobs: details[] = [
    {
        id: 1,
        image: "job-search/1.jpg",
        title: "UI/UX IT Frontend Developer",
        description: "We are looking for an experienced and zeta designer and/or frontend engineer with expertise in accessibility to join our team , 3+ years of experience working in as a Frontend Engineer or comparable role.",
        company: "(L6)",
        city: "Salt Lake City",
        country: " UT",
        stars: 5,
        date: "",
        priority: 5,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 2,
        image: "job-search/2.jpg",
        title: "React/React Native Developer",
        description: "Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface",
        company: "San",
        city: "Diego",
        country: "CA ",
        stars: 4,
        date: "",
        priority: 2,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 3,
        image: "job-search/3.jpg",
        title: "Senior UX designer",
        description: "The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards",
        company: "Minneapolis",
        city: "",
        country: " MN",
        stars: 3,
        date: "2 days ago",
        priority: 1,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 4,
        image: "job-search/4.jpg",
        title: "Front end web developer",
        description: "Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.",
        company: "Cisco",
        city: "Lelystad",
        country: "Netherlands",
        stars: 1,
        date: "3 days ago",
        priority: 4,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 5,
        image: "job-search/5.jpg",
        title: "Graphic designer",
        description: "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.",
        company: "Infosys",
        city: "Lelystad",
        country: "Netherlands",
        stars: 2,
        date: "3 days ago",
        priority: 5,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 6,
        image: "job-search/6.jpg",
        title: "Designer, CRM",
        description: "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspiMofi age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
        company: "Citrix",
        city: "Lelystad",
        country: "Netherlands",
        stars: 4,
        date: "3 days ago",
        priority: 6,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 7,
        image: "job-search/2.jpg",
        title: "UI designer E-commerce",
        description: "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspiMofi age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
        company: "Ericsson",
        city: "Lelystad",
        country: "Netherlands",
        stars: 3,
        date: "5 days ago",
        priority: 7,
        resp: [
            { title: "Develop new user-facing features" },
            { title: "Build reusable code and libraries for future use" },
            { title: "Ensure the technical feasibility of UI/UX designs" },
            { title: "Optimize application for maximum speed and scalability" },
            {
                title: "Assure that all user input is validated before submitting to back-end"
            },
            { title: "Collaborate with other team members and stakeholders" }
        ],
        "reqs": [
            {
                title: "Excellent knowledge of browser troubleshooting and debugging practices and techniques"
            },
            {
                title: "Knowledge of graphics software such as Adobe Suite, Photoshop etc."
            },
            {
                title: "Sense of ownership and pride in your performance and its impact on company’s success"
            },
            { title: "Critical thinker and problem-solving skills" },
            { title: "Good time-management skills" },
            { title: "Great interpersonal and communication skills" },
            { title: "BA in Computer Science or similar relevant field" }
        ],
        "skills": [
            {
                title: "Proficient understanding of web markup, including HTML5, CSS3"
            },
            {
                title: "The ability to work effectively as part of a team is important, since front-end web designers may work closely with marketing staff as well as other web developers"
            },
            {
                title: "Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS"
            },
            {
                title: "Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image"
            },
            {
                title: "Proficient understanding of cross-browser compatibility issues and ways to work around them"
            }
        ]
    },
    {
        id: 8,
        image: "job-search/2.jpg",
        title: "Senior UX designer",
        description: "Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.",
        company: "Sutherland",
        city: "Lelystad",
        country: "Netherlands",
        stars: 4,
        date: "5 days ago",
        priority: 8,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 9,
        image: "job-search/2.jpg",
        title: "React/React Native Developer",
        description: "Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive",
        company: "San",
        city: "",
        country: "Diego, CA",
        stars: 4,
        date: "5 days ago",
        priority: 1,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 10,
        image: "job-search/3.jpg",
        title: "Senior UX designer",
        description: "The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards",
        company: "Minneapolis",
        city: "",
        country: " MN",
        stars: 3,
        date: "5 days ago",
        priority: 5,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 11,
        image: "job-search/5.jpg",
        title: "Graphic designer",
        description: "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.",
        company: "Infosys",
        city: "",
        country: "Lelystad, Netherlands",
        stars: 3,
        date: "3 days ago",
        priority: 2,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 12,
        image: "job-search/6.jpg",
        title: "Designer, CRM",
        description: "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow dashed to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
        company: "Citrix",
        city: "",
        country: " Lelystad, Netherlands ",
        stars: 3,
        date: "3 days ago",
        priority: 4,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 13,
        image: "job-search/1.jpg",
        title: "UI/UX IT Frontend Developer",
        description: "We are looking for an experienced and Yuri designer and/or frontend engineer with expertise in accessibility to join our team , 3+ years of experience working in as a Frontend Engineer or comparable role. You won’t be a team of one though — you’ll be collaborating closely with other...",
        company: "",
        city: "",
        country: " (L6) Salt Lake City, UT",
        stars: 3,
        date: "",
        priority: 4,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    },
    {
        id: 14,
        image: "job-search/2.jpg",
        title: "React/React Native Developer ",
        description: "Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow dashed to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.",
        company: "San",
        city: "",
        country: "Diego, CA ",
        stars: 4,
        date: "",
        priority: 4,
        resp: [
            { title: "Have shipped multiple iOS, Android, and/or web products" },
            { title: "5+ years UI/UX experience" },
            {
                title: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles"
            },
            {
                title: "Ability to autonomously pursue elegant solutions to open-ended problems"
            },
            { title: "Comfort with ambiguity" },
            { title: "Proven ability to create interactive prototypes" },
            {
                title: "Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization"
            },
            {
                title: "Strong written communication skills with ability to make transparent design documentation and client-facing presentations"
            },
            {
                title: "Ability to create and maintain flow charts, wire frames, prototypes, and mockups."
            },
            {
                title: "Ability to effectively work on more than one project at a time"
            },
            {
                title: "Experience conducting user research and stakeholder interviews"
            },
            {
                title: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc."
            },
            { title: "Bonus Considerations" }
        ],
        "reqs": [
            { title: "Experience working with Agile development teams" },
            { title: "Experience with RITE method usability testing" },
            {
                title: "Experience in visual and motion design; ability to translate UX design into high quality visuals"
            },
            { title: "Mastery of Sketch & InVision" },
            { title: "Knowledge of mobile or front-end web programming" }
        ],
        "skills": [
            { title: "Competitive pay" },
            { title: "Competitive medical, dental, and vision insurance plans" },
            { title: "Company-provided 401(k) plan" },
            { title: "Paid vacation and sick time" },
            { title: "Free snacks and beverages" }
        ]
    }
]
export const data: list[] = [
    {
        id: 1,
        image: "job-search/2.jpg",
        title: "React/React Native Developer",
        description: "This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native. Transform product wireframes into responsive, mobile user interface components and Ideally 2+ years experience with React. Bonus points if you have React Native experience.",
        company: "San",
        city: "Diego",
        country: "CA ",
        date: "",
        priority: "2",
        stars: 3
    },
    {
        id: 2,
        image: "job-search/4.jpg",
        title: "Front end web developer",
        description: "Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial.",
        company: "Cisco",
        city: "Lelystad",
        country: "Netherlands",
        date: "3 days ago",
        priority: "4",
        stars: 4
    },
    {
        id: 3,
        image: "job-search/5.jpg",
        title: "Graphic designer",
        description: "Transform product wireframes into responsive, mobile user interface components and Ideally 2+ years experience with React. Bonus points if you have React Native experience. Professional experience of React Native and other front end frameworks.",
        company: "Infosys",
        city: "Lelystad",
        country: "Netherlands",
        date: "3 days ago",
        priority: "5",
        stars: 2
    },
    {
        id: 4,
        image: "job-search/6.jpg",
        title: "Designer, CRM",
        description: "Bonus points if you have React Native experience. This is an incredibly exciting opportunity. Professional experience of React Native frameworks. Transform product wireframes into responsive, mobile user interface components and Ideally 2+ years experience with React.",
        company: "Citrix",
        city: "Lelystad",
        country: "Netherlands",
        date: "3 days ago",
        priority: "6",
        stars: 4
    }
]
export const options: multi[] = [
    { code: 1, name: 'January' },
    { code: 2, name: 'February' },
    { code: 3, name: 'March' },
    { code: 4, name: 'April' },
    { code: 5, name: 'May' },
    { code: 6, name: 'June' },
    { code: 7, name: 'July' },
    { code: 8, name: 'August' },
    { code: 9, name: 'September' },
    { code: 10, name: 'October' },
    { code: 11, name: 'November' },
    { code: 12, name: 'December' },
]
export const options1: multi[] = [
    { code: 1, name: '1' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
    { code: 4, name: '4' },
    { code: 5, name: '5' },
    { code: 6, name: '6' },
    { code: 7, name: '7' },
    { code: 8, name: '8' },
    { code: 9, name: '9' },
    { code: 10, name: '10' },
    { code: 11, name: '11' },
    { code: 12, name: '12' },
    { code: 13, name: '13' },
    { code: 14, name: '14' },
    { code: 15, name: '15' },
    { code: 16, name: '16' },
    { code: 17, name: '17' },
    { code: 18, name: '18' },
    { code: 19, name: '19' },
    { code: 20, name: '20' },
    { code: 21, name: '21' },
    { code: 22, name: '22' },
    { code: 23, name: '23' },
    { code: 24, name: '24' },
    { code: 25, name: '25' },
    { code: 26, name: '26' },
    { code: 27, name: '27' },
    { code: 28, name: '28' },
    { code: 29, name: '29' },
    { code: 30, name: '30' },
    { code: 30, name: '31' },
]
export const options2: multi[] = [
    { code: 1, name: '1985' },
    { code: 2, name: '1986' },
    { code: 3, name: '1987' },
    { code: 4, name: '1988' },
    { code: 5, name: '1989' },
    { code: 6, name: '1990' },
    { code: 7, name: '1991' },
    { code: 8, name: '1992' },
    { code: 9, name: '1993' },
    { code: 10, name: '1994' },
    { code: 11, name: '1995' },
    { code: 12, name: '1996' },
    { code: 13, name: '1997' },
    { code: 14, name: '1998' },
    { code: 15, name: '1999' },
    { code: 16, name: '2000' },
    { code: 17, name: '2001' },
    { code: 18, name: '2002' },
    { code: 19, name: '2003' },
    { code: 20, name: '2004' },
    { code: 21, name: '2005' },
    { code: 22, name: '2006' },
    { code: 23, name: '2007' },
    { code: 24, name: '2008' },
    { code: 25, name: '2009' },
    { code: 26, name: '2010' },
    { code: 27, name: '2012' },
    { code: 28, name: '2013' },
    { code: 29, name: '2014' },
    { code: 30, name: '2015' },
    { code: 30, name: '2016' },
    { code: 30, name: '2017' },
    { code: 30, name: '2018' },
    { code: 30, name: '2019' },
]