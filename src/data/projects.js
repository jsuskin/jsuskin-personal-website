export const projects = [
  {
    name: "Duodenarium",
    github: [
      ["Frontend", "https://github.com/jsuskin/Duodenarium-app"],
      ["Backend", "https://github.com/jsuskin/Duodenarium"]
    ],
    url: "https://duodenarium-app.herokuapp.com/",
    demo: "",
    description: "A music discovery app with a custom player",
    bulletpoints: [
      "Built and deployed React front-end and Rails backend API with endpoints for artists, songs, links, and tags.",
      "Manipulated ReactPlayer component to map controls from YouTube/Soundcloud URLs to custom audio player."
    ]
  },
  {
    name: "JamBuddy",
    github: [
      ["GitHub", "https://github.com/jsuskin/jambuddy"]
    ],
    url: "",
    demo: "http://youtu.be/0-YzlOUU1Ro",
    description: "An application to connect musicians with each other based on availability and location",
    bulletpoints: [
      "Developed Rails backend API with endpoints for users, locations, instruments, and availabilities.",
      "Built self-referential tables in Rails to connect users to other users.",
      "Implemented React front-end interface.",
      "Integrated map geolocation with Google Maps to persist latitude/longitude and place custom markers."
    ]
  },
  {
    name: "Scalinator",
    github: [
      ["GitHub", "https://github.com/jsuskin/scalebuilder"]
    ],
    url: "",
    demo: "http://youtu.be/TEVwI7DrGSE",
    description: "A guitar scale generator with user control over the number of strings represented and the tuning of each individual string",
    bulletpoints: [
      "Utilized vanilla JavaScript and HTML to generate guitar frets and scale diagrams based on user selections.",
      "Implemented Bootstrap CSS for minimalist styling."
    ]
  },
  {
    name: "The Stenographer App",
    github: [
      ["GitHub", "https://github.com/occipudding/the-stenographer-app"]
    ],
    url: "",
    demo: "https://youtu.be/GPBs9Tct6HA",
    description: "A full CRUD (Create, Read, Update, Delete) note-taking application",
    bulletpoints: [
      "Built Rails backend API with endpoints for users, topics and notes.",
      "Employed the use of Ancestry, a gem, allowing each note to have a full record of every ancestor in its tree.",
      "Built front-end interface with vanilla JavaScript. Applied vanilla CSS for minimalist styling."
    ]
  }
]

//,
// {
//   name: "",
//   github: [],
//   url: "",
//   demo: "",
//   description: "",
//   bulletpoints: ""
// }
