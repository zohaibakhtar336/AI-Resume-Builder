export default {
  firstName: "Aman",
  lastName: "Kumar",
  jobTitle: "Frontend Developer",
  address: "Koramangala, Bangalore, Karnataka",
  phone: "(987)-654-3210",
  email: "aman.kumar@example.com",
  themeColor: "#3498db",
  summary: `Passionate Frontend Developer with experience in building scalable and responsive web applications. 
    Proficient in React.js, JavaScript, and UI/UX principles, focusing on crafting high-performance and user-friendly interfaces. 
    Always eager to learn and work on cutting-edge technologies.`,

  experience: [
    {
      id: 1,
      title: "Frontend Developer",
      companyName: "Proton Expert Systems & Solutions Pvt. Ltd.",
      city: "Bangalore",
      state: "Karnataka",
      startDate: "March 2024",
      endDate: "Present",
      currentlyWorking: true,
      workSummary: `• Developed and optimized web applications using React.js and Next.js.\n
            • Implemented responsive UI/UX designs ensuring a seamless experience across multiple devices.\n
            • Integrated REST APIs and worked closely with backend developers for smooth data exchange.\n
            • Improved performance and accessibility of applications using modern frontend practices.`
    },
    {
      id: 2,
      title: "MERN Stack Developer (Freelance)",
      companyName: "Freelance Projects",
      city: "Remote",
      state: "India",
      startDate: "July 2023",
      endDate: "Feb 2024",
      currentlyWorking: false,
      workSummary: `• Designed and developed full-stack applications using React.js, Node.js, Express, and MongoDB.\n
            • Built real-time chat features using Socket.io and integrated OAuth authentication with Firebase.\n
            • Developed an AI-powered Resume Builder, allowing users to generate resumes dynamically.\n
            • Optimized React components for faster load times and improved state management using Redux.`
    }
  ],

  education: [
    {
      id: 1,
      universityName: "Jamia Millia Islamia University",
      startDate: "Aug 2019",
      endDate: "June 2023",
      degree: "Bachelor of Technology",
      major: "Computer Science & Engineering",
      description: `Gained strong fundamentals in Data Structures, Algorithms, and Web Development. 
            Worked on multiple academic projects involving MERN Stack, Java, and Python.`
    }
  ],

  skills: [
    { id: 1, name: "React.js", rating: 60 },
    { id: 2, name: "JavaScript", rating: 70 },
    { id: 3, name: "CSS & Tailwind", rating: 80 },
    { id: 4, name: "Node.js & Express", rating: 65 },
    { id: 5, name: "MongoDB", rating: 60 },
    { id: 6, name: "Git & GitHub", rating: 70 }
  ]
};
