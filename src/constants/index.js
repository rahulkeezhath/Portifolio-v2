import {
    mobile,
    backend,
    creator,
    web,
    Personal,
    github,
    live,
    Netflix,
    docker,
    splunk,
    burpsuite,
    wireshark,
    metasploit,
    Wazuh,
    LetsDefend
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "SOC Analyst",
      icon: web,
    },
    {
      title: "Penetration Tester",
      icon: mobile,
    },
    {
      title: "SIEM & Threat Intelligence",
      icon: backend,
    },
    {
      title: "Network & Cloud Security",
      icon: creator,
    },
  ];

  const technologies = [
    {
      title: "Splunk",
      icon: splunk,
    },
    {
      title: "Metasploit",
      icon: metasploit,
    },
    {
      title: "Docker",
      icon: docker,
    },
    {
      title: "Burpsuite",
      icon: burpsuite,
    },
    {
      title: "WireShark",
      icon: wireshark,
    },
  ];
  
  
  // const experiences = [
  //   {
  //     title: "Wordpress Developer",
  //     company_name: "Tech4Addiction.com",
  //     icon: tech4addiction,
  //     iconBg: "#383E56",
  //     date: "March 2021 - August 2021",
  //     points: [
  //       "Developed and maintained web applications using Wordpress technology.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Maintained Page's layouts and Categories to easily update #Tech News(Pages)",
  //     ],
  //   },
  //   {
  //     title: "Search Engine Optimization",
  //     company_name: "Coursera",
  //     icon: seo,
  //     iconBg: "#E6DEDD",
  //     date: "July 2021 - Oct 2021",
  //     points: [
  //       "Learnt Search Engine Optimization from Coursera",
  //       "Gained a deep understanding of the strategies and techniques necessary to optimize websites for search engines and drive organic traffic.",
  //       "This course is the importance of staying up-to-date with the latest trends and best practices in SEO.",
  //     ],
  //   },
  //   {
  //     title: "Wordpress Developer",
  //     company_name: "Zerociti",
  //     icon: zerociti,
  //     iconBg: "#E6DEDD",
  //     date: "April 2022 - Oct 2022",
  //     points: [
  //       "A Stunning & Responsive e-commerce website that was created using WordPress and further customised with Javascript and CSS.",
  //       "Includes pages, such as the Shop page, FAQ page, About Us page, and Contact page.",
  //       "The payment system is added as it covered with integrated payment pages that make simply to make purchases safely and conveniently.",
  //     ],
  //   },
  //   {
  //     title: "Front End Developer",
  //     company_name: "HoneyUncle",
  //     icon: honeyuncle,
  //     iconBg: "#FFDF00",
  //     date: "Oct 2022 - Dec 2022",
  //     points: [
  //       "Created a website utilising well-known web development tools including HTML, CSS, jQuery, and Bootstrap.",
  //       "To make it simple for parents to traverse the website and identify the courses they were interested in, the layout and design were optimised.",
  //       "Parents could quickly browse the available courses, pick the ones they desired, and enrol their children using the user-friendly enrollment system in only a few clicks.",
  //     ],
  //   },
  // ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "Aman is champ, straight forward to his goals and whatever he choose, never let it leave without completing. ",
  //     name: "Ravi Pathak",
  //     designation: "ASE Intern",
  //     company: "Techion",
  //     image: ravi,
  //   },
  //   // {
  //   //   testimonial:
  //   //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   //   name: "Chris Brown",
  //   //   designation: "COO",
  //   //   company: "DEF Corp",
  //   //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   // },
  //   // {
  //   //   testimonial:
  //   //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   //   name: "Lisa Wang",
  //   //   designation: "CTO",
  //   //   company: "456 Enterprises",
  //   //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   // },
  // ];
  
  const projects = [
    {
      name: "Wazuh",
      description:
        "Wazuh is an open-source Security Information and Event Management (SIEM) and Extended Detection and Response (XDR) platform that provides real-time threat detection, log analysis, and security monitoring.",
      tags: [
        {
          name: "SIEM",
          color: "blue-text-gradient",
        },
        {
          name: "Dashboard",
          color: "green-text-gradient",
        },
        {
          name: "Alert",
          color: "pink-text-gradient",
        },
      ],
      image: Wazuh,
      minImg: live,
    },
    // {
    //   name: "Fastrack",
    //   description:
    //     "Welcome to our convenient and reliable car rental website! Whether you're planning a road trip, need a vehicle for your business travels, or simply want to explore a new city, our platform offers a wide range of rental cars to suit your needs. With our user-friendly interface, you can easily search, compare, and book the perfect vehicle in just a few clicks.Start exploring now and let the magic of movies unfold before your eyes!",
    //   tags: [
    //     {
    //       name: "React",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "vite",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "express",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: Fastrack,
    //   source_code_link: "https://github.com/rahulkeezhath/Car-Rental-Website",
    //   minImg: github,
    // },
    {
      name: "LetsDefend",
      description:
        "Gained hands-on experience in live SOC monitoring and incident response through real-time labs on the LetsDefend platform. ",
      tags: [
        {
          name: "Log Analysis",
          color: "blue-text-gradient",
        },
        {
          name: "Threat Hunting",
          color: "green-text-gradient",
        },
        {
          name: "Forensic",
          color: "pink-text-gradient",
        },
      ],
      image: LetsDefend,
      minImg: live,
    },
    // {
    //   name: "Foody",
    //   description:
    //     "Welcome to our vibrant ecommerce website, your one-stop destination for fresh and delicious fruits, vegetables, and refreshing juices! We bring the farm-fresh goodness straight to your doorstep, making healthy living convenient and enjoyable.But we don't stop at just fruits and vegetables.Explore our bountiful selection of top-quality fruits and vegetables, carefully sourced from trusted farmers who prioritize taste and nutrition. ",
    //   tags: [
    //     {
    //       name: "EJS",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Bootstrap",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Express",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: Foody,
    //   source_code_link: "https://github.com/rahulkeezhath/Foody",
    //   minImg: github,
    // },
    {
      name: "Personal Portfolio",
      description:
        "Hey look! This is it, you are exploring my Cybersecurity Portfolio.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind ",
          color: "pink-text-gradient",
        },
      ],
      image: Personal,
      source_code_link: "https://github.com/rahulkeezhath/Portifolio-v2",
      minImg: github,
    },
  ];
  
  export { services, technologies, projects };