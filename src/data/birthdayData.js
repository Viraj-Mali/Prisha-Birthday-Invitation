/**
 * BIRTHDAY PARTY DATA
 * All names, dates, venue details, and content are stored here.
 * To update any information, only edit this file.
 */
export const weddingData = {
  language: "en",

  // Birthday girl info
  birthday: {
    name: "Prisha",
    age: 1,
    ageLabel: "1st",
    tagline: "Turning ONE! 🎀",
    subtitle: "You're Invited to the Party!",
    mainLine: "Prisha's 1st Birthday",
    partyDate: "19 August 2026",
    partyTime: "7:00 PM",
    partyDateISO: "2026-08-19T19:00:00",
    timezone: "Asia/Kolkata",
    hashtag: "#PrishaTurns1",
    blessing: "🎀 A Magical Celebration 🎀",
    emoji: "🎀",
  },

  // Parents and family info (reusing 'couple' key for component compatibility)
  couple: {
    groomName: "Akshay",
    groomFullName: "Akshay",
    groomQualification: "The Cool Dad",
    groomParents: "",
    groomAddress: "",
    brideName: "Pallavi",
    brideFullName: "Pallavi",
    brideQualification: "The Awesome Mom",
    brideParents: "",
    brideAddress: "",
    birthdayGirlName: "Prisha",
    birthdayGirlAge: "1",
    birthdayGirlNote: "She loves balloons, candy & crawling around! 🎈",
  },

  // Reusing 'wedding' key for component compatibility
  wedding: {
    title: "Birthday Invitation",
    subtitle: "You're Invited to the Party!",
    mainLine: "Prisha Turns 1! 🎀",
    weddingDate: "19 August 2026",
    weddingTime: "7:00 PM",
    weddingDateISO: "2026-08-19T19:00:00",
    timezone: "Asia/Kolkata",
    hashtag: "#PrishaTurns1",
    blessing: "🎈 Come Celebrate With Us! 🎈",
  },

  venue: {
    name: "Yashobhoomi Society",
    address: "Alokapuram Road, Wadmukhwadi, Charoli",
    city: "Pimpri Chinchwad, Pune",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Yashobhoomi+Society+Charoli+Pune",
    mapSearch: "https://www.google.com/maps/search/?api=1&query=Yashobhoomi+Society+Charoli+Pune",
  },

  // Party schedule / activities
  events: [
    {
      id: "cake",
      title: "Cake Cutting 🎂",
      icon: "🎂",
      date: "Wednesday, 19 August 2026",
      time: "7:00 PM",
      venue: "Yashobhoomi Society",
      isoDate: "2026-08-19T19:00:00",
      calendarTitle: "Cake Cutting – Prisha's Birthday",
      illustration: "",
      description: "The sweetest moment of the evening!",
    },
    {
      id: "dinner",
      title: "Dinner & Dance 🕺",
      icon: "🍽️",
      date: "Wednesday, 19 August 2026",
      time: "8:00 PM",
      venue: "Yashobhoomi Society",
      isoDate: "2026-08-19T20:00:00",
      calendarTitle: "Dinner – Prisha's Birthday",
      illustration: "",
      description: "Food, fun & dancing the night away!",
    },
  ],

  invitationMessage:
    "With hearts full of joy, we invite you and your little ones to celebrate our daughter's 1st birthday! Come join us for a magical afternoon of fun, laughter, cake, and lots of sweet memories. Your presence will make this day extra special! 🎀🎈",

  family: {
    heading: "Hosted By",
    mainLine: "Our Loving Family",
    members: [
      { name: "Pallavi (Mama)", phone: "8308988641" },
      { name: "Akshay (Papa)", phone: "9168100071" },
      { name: "Dada & Dadi", phone: "" },
      { name: "Nana & Nani", phone: "" },
      { name: "All Our Dear Relatives", phone: "" },
    ],
  },

  footerLine: "We can't wait to celebrate with you! See you at the party! 🎉",

  assets: {
    music: "/music/birthday-music.mpeg",
    ganpatiImage: "",
    weddingCard: "",
    groomPhoto: "",
    bridePhoto: "",
    birthdayGirlPhoto: "/images/prisha.JPG",
    galleryImages: [
      "/images/photo1.JPG",
      "/images/photo2.jpeg",
      "/images/photo3.jpeg",
      "/images/photo4.jpeg",
      "/images/photo5.jpeg"
    ],
  },

  share: {
    whatsappText:
      "👑 You're Invited to Prisha's Royal 1st Birthday! 🎀\nOur little princess is turning one! Join us for a fairytale evening of cake, music, and magical memories. ✨🎂\n\n📅 Wednesday, 19 August 2026 | 7:00 PM\n📍 Yashobhoomi Society, Pune\n\nYour presence and blessings are most welcome!\n",
    websiteUrl: "https://prisha-birthday-invitation.vercel.app/",
  },

  seo: {
    title: "👑 You're Invited to Prisha's Royal 1st Birthday! 🎀",
    description:
      "Our little princess is turning one! Join us for a fairytale evening of cake, music, and magical memories. ✨🎂",
    ogImage: "/images/og-preview.jpeg",
  },
};
