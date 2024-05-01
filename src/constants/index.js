import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    cibc,
    nbnpha,
    threejs,
    matlab,
    java,
    python,
    clang,
    autocad,
    unbcybersec,
    revit,
    nbnphadb,
    modular,
    waterproject,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineering Student",
      icon: web,
    },
    {
      title: "Developer",
      icon: mobile,
    },
    {
      title: "Tech Enthusiast",
      icon: backend,
    },
    {
      title: "Leader",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Matlab",
      icon: matlab,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: clang,
    },
    {
      name: "AutoCAD",
      icon: autocad,
    },
    {
      name: "Revit",
      icon: revit,
    },
    {
      name: "UNBcybersec",
      icon: unbcybersec,
    },
  ];
  
  const experiences = [
    {
      title: "Banking Center Leader (Branch Manager)",
      company_name: "RBC Royal Bank",
      icon: cibc,
      iconBg: "#E6DEDD",
      date: "August 2017 - January 2021",
      points: [
        "Ensured that all advice and services provided were targeted to delivering an unforgettable and remarkable client experience",
        "Motivated, oriented, and led a team of 12+ staff and delivered branch huddles, sales and services meetings, and targeted team meetings",
        "Unified two separate bank branches to create a one-team mentality and deliver an exceptional and uniform client experience",
        "Ensured that all compliance, regulatory, and procedural standards were adhered to",
      ],
    },
    {
      title: "Senior Financial Advisor, Investments",
      company_name: "Canadian Imperial Bank of Commerce (CIBC)",
      icon: cibc,
      iconBg: "#383E56",
      date: "January 2021 - April 2022",
      points: [
        "Managed and grew a high-net-worth client book with a primary focus on retaining lending clients",
        "Developed successful financial plans with a portfolio (50+MM) of high-value clients",
        "Hosted client-focused presentations/seminars on various financial goal metrics, including investing, retirement, and estate planning",
        "Provided the highest quality advice and guidance to clients while meeting or exceeding their needs and expectations",
      ],
    },
    {
      title: "Engineering Intern",
      company_name: "New Brunswick Non-Profit Housing Association (NBNPHA)",
      icon: nbnpha,
      iconBg: "#E6DEDD",
      date: "May 2023 - September 2023",
      points: [
        "Created, designed and completed a web application project to create a unified sortable database of products that meet green energy and accessibility requirements. Project includes web scraping, JavaScript, CSS, MS Azure as well increasing knowledge in python, database design as well as  web application development and web hosting",
        "Created a repository of unified design criteria to ensure future affordable, green barrier and accessible unit builds have fewest possible hinderances regarding time and financial constraints. These plans were created by combining several Canadian, New Brunswick and North American building policies governing environmental and finance regulations.",
        "Worked with non-profit housing groups, Government entities such as Economic Development Office, Accessibility New Brunswick, and the city of Saint John, as well as Trades Groups, Builders and Suppliers to help unify gap between NB housing shortages and unaffordability with new housing starts",
        "Finished 3rd Nationally in the Off-Site Construction Research Center Student Design Competition – Competition to design affordable modular housing to be available as open source blueprints to increase rate of housing development in Canada",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NBNPHA Database",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "purple-text-gradient",
        },
      ],
      image: nbnphadb,
      source_code_link: "https://ambitious-water-093183b0f.3.azurestaticapps.net/web.html",
    },
    {
      name: "NBNPHA Modular Housing",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "revit",
          color: "blue-text-gradient",
        },
        {
          name: "autoCAD",
          color: "green-text-gradient",
        },
        {
          name: "office365",
          color: "pink-text-gradient",
        },
      ],
      image: modular,
      source_code_link: "https://github.com/",
    },
    {
      name: "Arduino Smart Water Dispenser",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "arduino",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "fusion360",
          color: "pink-text-gradient",
        },
        {
          name: "prusa 3D",
          color: "purple-text-gradient",
        },
      ],
      image: waterproject,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };