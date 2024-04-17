export interface Course {
  id?: number;
  courseCode: string;
  courseTitle: string;
  creditLoad: number;
  semester: string;
  nature: string;
}

export interface supabaseCourse {
  course_id: number;
  course_level: number;
  course_code: string;
  course_title: string;
  credit_load: number;
  semester: string;
  nature: string;
}

export interface Level {
  level: string;
  courses: Course[]; // Array of Course objects
}
export const levelCourseData: Level[] = [
  {
    level: "100 level",
    courses: [
      {
        courseCode: "FUTM-CYB111",
        courseTitle: "Fundamentals of Cyber Security",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },
      {
        courseCode: "FUTM-CYB112",
        courseTitle: "Introduction to Cyber Security Tools",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "GST 103",
        courseTitle: "Nigerian People and Culture",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST121",
        courseTitle: "Use of English II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST110",
        courseTitle: "Use of English I and Library",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "COS101",
        courseTitle: "Introduction to Computing Sciences",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },
      {
        courseCode: "COS102",
        courseTitle: "Introduction to Problem Solving",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "STA111",
        courseTitle: "Descriptive Statistics",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "PHY108",
        courseTitle: "General Practical Physics II",
        semester: "2nd",
        creditLoad: 1,
        nature: "Core",
      },

      {
        courseCode: "PHY102",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "PHY107",
        courseTitle: "General Physics I",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "GST112",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "MTH102",
        courseTitle: "Elementary Mathematics II",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },
      {
        courseCode: "GST111",
        courseTitle: "	Communication in English",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },
    ],
  },

  {
    level: "200 level",
    courses: [
      {
        courseCode: "FUTM-CYB212",
        courseTitle: "Introduction to Cyber Security Tools",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "GST 203",
        courseTitle: "Nigerian People and Culture",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST 221",
        courseTitle: "Use of English II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST210",
        courseTitle: "Use of English I and Library",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "COS201",
        courseTitle: "Introduction to Computing Sciences",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "STA211",
        courseTitle: "Descriptive Statistics",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "PHY208",
        courseTitle: "General Practical Physics II",
        semester: "2nd",
        creditLoad: 1,
        nature: "Core",
      },

      {
        courseCode: "PHY202",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "GST212",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
    ],
  },
  {
    level: "300 level",
    courses: [
      {
        courseCode: "FUTM-CYB312",
        courseTitle: "Introduction to Cyber Security Tools",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "GST 303",
        courseTitle: "Nigerian People and Culture",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST321",
        courseTitle: "Use of English II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST310",
        courseTitle: "Use of English I and Library",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "COS101",
        courseTitle: "Introduction to Computing Sciences",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "STA111",
        courseTitle: "Descriptive Statistics",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "PHY108",
        courseTitle: "General Practical Physics II",
        semester: "2nd",
        creditLoad: 1,
        nature: "Core",
      },

      {
        courseCode: "PHY102",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "GST112",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
    ],
  },

  {
    level: "400 level",
    courses: [
      {
        courseCode: "FUTM-CYB412",
        courseTitle: "Introduction to Cyber Security Tools",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "GST 403",
        courseTitle: "Nigerian People and Culture",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST421",
        courseTitle: "Use of English II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST410",
        courseTitle: "Use of English I and Library",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "COS401",
        courseTitle: "Introduction to Computing Sciences",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "STA411",
        courseTitle: "Descriptive Statistics",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "PHY408",
        courseTitle: "General Practical Physics II",
        semester: "2nd",
        creditLoad: 1,
        nature: "Core",
      },

      {
        courseCode: "PHY402",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "GST412",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
    ],
  },

  {
    level: "500 level",
    courses: [
      {
        courseCode: "FUTM-CYB512",
        courseTitle: "Introduction to Cyber Security Tools",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "GST 503",
        courseTitle: "Nigerian People and Culture",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST521",
        courseTitle: "Use of English II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },

      {
        courseCode: "GST510",
        courseTitle: "Use of English I and Library",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "COS501",
        courseTitle: "Introduction to Computing Sciences",
        semester: "1st",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "STA511",
        courseTitle: "Descriptive Statistics",
        semester: "2nd",
        creditLoad: 3,
        nature: "Core",
      },

      {
        courseCode: "PHY508",
        courseTitle: "General Practical Physics II",
        semester: "2nd",
        creditLoad: 1,
        nature: "Core",
      },

      {
        courseCode: "PHY502",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
      {
        courseCode: "GST512",
        courseTitle: "General Physics II",
        semester: "2nd",
        creditLoad: 2,
        nature: "Core",
      },
    ],
  },
];
