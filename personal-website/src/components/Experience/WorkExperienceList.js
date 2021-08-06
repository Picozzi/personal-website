const json = {
  jobs: [
    {
      jobTitle: "Software Developer",
      jobCompany: "Autodesk",
      jobDescription:
        "Software Developer working within the Autodesk Research Division focused on data communication protocols and time series databases.",
      jobDetails: "May 2021 - August 2021",
      jobLocation: "Toronto, Ontario",
      jobLabels: [
        "BACNet",
        "C++",
        "Python",
        "Multithreading",
        "Network Protocols",
        "Time Series Database",
      ],
      jobColor: "#76B542",
      jobPoints: [
        "Spearheaded the research project tasked with developing a programmable data router capable of customizing the transfer of visualization data between various device protocols.",
        "Developed a driver based on the BacNet protocol enabling the transfer of data from over 300 devices in the Toronto MaRS building.",
      ],
      jobNews: [
        [
          "https://www.archpaper.com/2021/07/worlds-first-3d-printed-steel-bridge-debuts-in-amsterdam-red-light-district/",
          "The Architect's Newspaper - MX3D Bridge",
        ],
      ],
      jobThumbnail:
        "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/autodesk/autodesk_thumbnail.png",
      jobSetting: {
        width: "30vw",
        height: ["25vh", "20vh"],
        layout: [1, 2],
        photos: [
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/autodesk/autodesk_toronto.jpg",
          },
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/autodesk/MX3D_bridge.jpg",
          },
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/autodesk/pi_pdr_dev.jpg",
          },
        ],
        showNumOfRemainingPhotos: false,
      },
      jobExpanded: true,
    },
    {
      jobTitle: "Project Manager & Scrum Master",
      jobCompany: "John Hancock Financial",
      jobDescription:
        "PM within the U.S Retirement division responsible for the deployment operations of two Salesforce teams.",
      jobDetails: "August 2020 - January 2021",
      jobLocation: "Toronto, Ontario",
      jobLabels: [
        "Agile",
        "Gantt Charts",
        "Sprint",
        "Business Analyst",
        "Client Management",
      ],
      jobColor: "#002d5c",
      jobPoints: [
        "Led the QA validation team in the migration of 1000+ project repositories to SharePoint Online reducing overall storage by 4 TB.",
        "Responsible for the deployment and change management process of 2 Agile Salesforce teams within the Path to Digital Program.",
        "Developed 2 project management tools to assist in tracking monthly personnel budgets goals for employees and contractors.",
        "Analyzed the division’s billing system to provide key volume metrics to vendors during procurement periods.",
      ],
      jobNews: [
        [
          "https://www.salesforce.com/customer-success-stories/john-hancock/",
          "Salesforce Article - Digital Experiences",
        ],
      ],
      jobThumbnail:
        "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/john_hancock/john_hancock_thumbnail.jpg",
      jobSetting: {
        width: "25vw",
        height: ["25vh"],
        layout: [1],
        photos: [
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/john_hancock/john_hancock_toronto.jpg",
          },
        ],
        showNumOfRemainingPhotos: false,
      },
      jobExpanded: true,
    },
    {
      jobTitle: "Full Stack Software Developer",
      jobCompany: "Raven",
      jobDescription:
        "Full Stack Developer working on creating bespoke data reporting web applications for high profile clients.",
      jobDetails: "January 2020 - May 2020",
      jobLocation: "Ottawa, Ontario",
      jobLabels: [
        "Python",
        "React",
        "GraphQL",
        "Python",
        "Pandas",
        "Client Management",
      ],
      jobColor: "#0CA6D5",
      jobPoints: [
        "Developed an automated reporting tool for 5 major customers using React and Python which reduced manual work by 86%.",
        "Managed the creation of a bespoke customer‐facing application using React and GraphQL which enabled daily monitoring of manufacturing efficiency for 30+ customers.",
        "Created Python scripts using the Pandas library to extract and measure specific manufacturing analytics from raw telemetry data.",
        "Worked in an Agile environment to deploy configurations and create new features to accommodate daily customer requests.",
      ],
      //jobNews : [["https://www.salesforce.com/customer-success-stories/john-hancock/", "Salesforce Article - Digital Experiences"]],
      jobThumbnail:
        "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/raven/raven_thumbnail.png",
      jobSetting: {
        width: "30vw",
        height: ["20vh", "25vh"],
        layout: [2, 1],
        photos: [
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/raven/raven_devices.jpg",
          },
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/raven/raven_lunch.png",
          },
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/raven/raven_manufacturing.jpg",
          },
        ],
        showNumOfRemainingPhotos: false,
      },
      jobExpanded: true,
    },
    {
      jobTitle: "Application Developer",
      jobCompany: "Allstream",
      jobDescription:
        "Developer working on creating various database applications for the division's Billing infrastructure.",
      jobDetails: "May 2019 - August 2019",
      jobLocation: "Mississauga, Ontario",
      jobLabels: [
        "Python",
        "Java",
        "Relational Databases",
        "Amazon Aurora",
        "Google CloudVision",
      ],
      jobColor: "#E98A2B",
      jobPoints: [
        "Led a project to develop a Python application to migrate a billing system’s database/functionality from Oracle SQL Developer to an Amazon Aurora’s PostgreSQL database with zero downtime.",
        "Developed a Python algorithm using the Google Cloud Vision API and Amazon Web Service’s S3 to sort, compile, and store bi‐weekly invoices saving 10 hours of work per week.",
        "Updated company‐wide procedures in Java using the Spring Framework and MyBatipse Eclipse plugin to better notify customers about their upcoming monthly invoices.",
      ],
      //jobNews : [["https://www.salesforce.com/customer-success-stories/john-hancock/", "Salesforce Article - Digital Experiences"]],
      jobThumbnail:
        "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/allstream/allstream_thumbnail.png",
      jobSetting: {
        width: "30vw",
        height: ["25vh"],
        layout: [1],
        photos: [
          {
            source:
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/allstream/allstream_location.jpg",
          },
        ],
        showNumOfRemainingPhotos: false,
      },
      jobExpanded: true,
    },
  ],
};

export default json;
