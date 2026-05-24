import { EducationItem, ExperienceItem, SkillItem, ArtworkMock } from './types';

export const CHIKA_PROFILE = {
  fullName: "Chika Nur Siswoyo",
  headline: "Public Administration Student at Universitas Indonesia | Public Relations at Girl Up UI",
  aboutMe: "Mahasiswa Ilmu Administrasi Publik UI yang berprestasi, aktif dalam public relations, kepemimpinan, dan memiliki ketertarikan kuat pada seni kreatif, penulisan, serta komunikasi strategis. Saya menggabungkan keilmuan administrasi publik, manajemen hubungan kelembagaan, dan keahlian seni kreatif untuk memberikan dampak sosial yang bermakna.",
  stats: [
    { label: "Proyek & Event Dipimpin", value: "10+" },
    { label: "Tahun Berkelana di Dunia Seni", value: "8+" },
    { label: "IPK Saat Ini (UI)", value: "Cum Laude" },
    { label: "Organisasi Aktif", value: "3+" }
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "Universitas Indonesia (UI)",
    degree: "Bachelor of Public Administration (Administrative Science)",
    period: "2024 - 2028 (Expected)",
    gpa: "Cum Laude",
    highlights: [
      "Fokus pada Tata Kelola Sektor Publik, Kebijakan Publik, dan Komunikasi Strategis.",
      "Aktif dalam Badan Perwakilan Mahasiswa (BPM) FIA UI dan berbagai kepanitiaan kampus.",
      "Aktif memperjuangkan inklusivitas dan pemberdayaan perempuan bersama Girl Up UI."
    ],
    skills: ["Strategic Communications", "Leadership", "Financial Analysis"]
  },
  {
    institution: "SMAS BPS&K I JAKARTA",
    degree: "Lulusan Terbaik (Social Sciences)",
    period: "2022 - 2024",
    gpa: "IPK 94.64 (Highest GPA & Best Graduate)",
    highlights: [
      "Meraih predikat Lulusan Terbaik bidang Ilmu Pengetahuan Sosial (IPS).",
      "Peringkat 1 Kelas Eligible, Angkatan 2024.",
      "Aktif sebagai Class Leader selama 2 tahun dan Koordinator Tim OSN Geografi."
    ],
    skills: ["Team Mentoring", "Traditional Art Skills", "Canva", "Creative Writing"]
  },
  {
    institution: "SMPN 213 JAKARTA",
    degree: "Junior High School Diploma",
    period: "2019 - 2021",
    gpa: "IPK 89.10",
    highlights: [
      "Aktif sebagai pengurus OSIS bidang Seni dan Budaya.",
      "Mengoordinasikan ekstrakurikuler seni lukis dan berbagai acara festival sekolah."
    ],
    skills: ["Traditional Art Skills", "Creative Expression"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Head of Institutional Relations Commission",
    organization: "BPM FIA UI (Badan Perwakilan Mahasiswa)",
    period: "Mar 2026 - Present",
    duration: "3 mos",
    type: "PR & Leadership",
    description: [
      "Memimpin pengawasan, komunikasi, serta koordinasi hubungan kelembagaan eksternal dan internal FIA UI.",
      "Menjalin komunikasi strategis dengan organisasi mahasiswa tingkat fakultas dan universitas.",
      "Mengonseptualisasikan struktur kolaboratif yang partisipatif untuk meningkatkan keterlibatan pemangku kepentingan."
    ],
    skills: ["Leadership", "Strategic Communications", "Team Mentoring"]
  },
  {
    id: "exp-2",
    role: "Public Relation and Social Media Management Officer",
    organization: "Girl Up UI (Universitas Indonesia)",
    period: "Jan 2026 - Present",
    duration: "5 mos",
    type: "PR & Leadership",
    description: [
      "Bertanggung jawab atas hubungan kelembagaan (Institutional Relations) serta publikasi media.",
      "Menggagas kampanye digital interaktif mengenai kesetaraan gender dan pengembangan kepemimpinan muda.",
      "Merancang aset visual kreatif dengan Canva untuk memperkuat kehadiran digital organisasi."
    ],
    skills: ["Canva", "Strategic Communications", "Creative Writing"]
  },
  {
    id: "exp-3",
    role: "Drawing Enthusiast, Art Lover, & Mini Business Owner",
    organization: "Self Employed / Wiraswasta",
    period: "Jan 2018 - Present",
    duration: "8 years 5 mos",
    type: "Creative & Art",
    description: [
      "Mengoperasikan bisnis mini kreatif berupa kerajinan bunga artifisial, ilustrasi karakter (sketsa karakter animasi Jepang), serta journaling kreatif.",
      "Memasarkan dan mendistribusikan karya seni tradisional dan digital secara mandiri.",
      "Mengembangkan kemahiran menggambar manual berjam-jam secara presisi serta mengombinasikannya dengan strategi visual digital."
    ],
    skills: ["Traditional Art Skills", "Canva", "Creative Writing"]
  },
  {
    id: "exp-4",
    role: "PIC of Design and Publication",
    organization: "FIA CENDEKIA 2025",
    period: "May 2025 - Dec 2025",
    duration: "8 mos",
    type: "Creative & Art",
    description: [
      "Memimpin perancangan identitas visual FIA Cendekia 2025 dari konsep hingga rilis publik.",
      "Mendesain logo utama yang melambangkan lentera menyala, buku terbuka, dan elemen orbit sebagai representasi ilmu, eksplorasi, dan pencerahan.",
      "Mengatur tata letak feed Instagram yang bernilai estetika tinggi untuk mengedukasi peserta program."
    ],
    skills: ["Canva", "Strategic Communications", "Traditional Art Skills"]
  },
  {
    id: "exp-5",
    role: "Coordinator of Event",
    organization: "Battle of Knowledge 1.0",
    period: "Apr 2025 - Dec 2025",
    duration: "9 mos",
    type: "Events & Mentoring",
    description: [
      "Mengoordinasikan rangkaian perlombaan BoK 1.0 yang mencakup divisi Debat, Kuis, Desain Poster, serta Liaison Officer (LO).",
      "Memandu skema evaluasi performa kepanitiaan dan alur operasional acara agar berjalan mulus.",
      "Memimpin kolaborasi lintas fungsional dengan tim kreatif, humas, dan logistik."
    ],
    skills: ["Leadership", "Strategic Communications", "Team Mentoring"]
  },
  {
    id: "exp-6",
    role: "Mentor",
    organization: "LDMK FIA UI",
    period: "Aug 2025 - Nov 2025",
    duration: "4 mos",
    type: "Events & Mentoring",
    description: [
      "Menjadi mentor pendamping akademik dan karakter untuk Kelompok 23 FIA UI.",
      "Mengisi sesi pengembangan kepemimpinan, strategi belajar, dan adaptasi mahasiswa baru.",
      "Menciptakan iklim diskusi yang suportif dan membina kerja sama kelompok berdurasi intensif."
    ],
    skills: ["Team Mentoring", "Leadership", "Creative Writing"]
  },
  {
    id: "exp-7",
    role: "Class Leader",
    organization: "SMAS BPS&K I JAKARTA",
    period: "Jun 2021 - Jun 2023",
    duration: "2 years 1 mo",
    type: "PR & Leadership",
    description: [
      "Dipilih secara demokratis untuk memimpin urusan perwakilan kelas dan memediasi aspirasi siswa ke staf akademis.",
      "Menginisiasi pembentukan kelompok belajar efektif guna meningkatkan kesiapan ujian rekan seangkatan.",
      "Mengatur agenda operasional rutin kelas dan menyelenggarakan forum diskusi kreatif."
    ],
    skills: ["Leadership", "Strategic Communications", "Team Mentoring"]
  },
  {
    id: "exp-8",
    role: "Project Officer",
    organization: "UniVerse Expo 2026",
    period: "Dec 2025 - Jan 2026",
    duration: "2 mos",
    type: "Events & Mentoring",
    description: [
      "Mengembangkan konsep acara eksibisi kreatif masa depan dan mengontrol manajemen logistik teknis.",
      "Membina kemitraan strategis dengan beberapa merek kreatif anak muda."
    ],
    skills: ["Leadership", "Financial Analysis"]
  },
  {
    id: "exp-9",
    role: "Staff at Dokumentasi",
    organization: "ADAPTASI UI 2025",
    period: "Sep 2025 - Dec 2025",
    duration: "4 mos",
    type: "Creative & Art",
    description: [
      "Mengambil dokumentasi foto dan video definisi tinggi secara real-time untuk orientasi mahasiswa baru.",
      "Berkolaborasi mengedit publikasi cuplikan video kreatif berdurasi pendek."
    ],
    skills: ["Canva", "Traditional Art Skills"]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  { name: "Leadership", category: "Core", level: 95 },
  { name: "Strategic Communications", category: "Core", level: 92 },
  { name: "Team Mentoring", category: "Core", level: 90 },
  { name: "Canva Pro Design", category: "Creative", level: 94 },
  { name: "Traditional Art Skills (Sketching)", category: "Creative", level: 88 },
  { name: "Creative Writing", category: "Creative", level: 85 },
  { name: "Financial Analysis", category: "Technical", level: 75 },
  { name: "Public Administration Governance", category: "Technical", level: 82 },
  { name: "Event Management", category: "Soft", level: 89 },
  { name: "Public Relations Campaigning", category: "Soft", level: 92 }
];

export const ARTWORKS_DATA: ArtworkMock[] = [
  {
    title: "Anime Character Sketch",
    category: "Traditional Art Skill",
    description: "Sketsa pinsil hitam-putih presisi tinggi karakter animasi Jepang dengan arsiran bayangan mendalam menggunakan pensil grafit manual.",
    imageFallback: "bg-pink-100 border-pink-300"
  },
  {
    title: "Handmade Artificial Flower Bouquet",
    category: "Mini Business Product",
    description: "Dekorasi bunga sintetis handmade yang dirancang menggunakan kertas krep premium dan kawat dekoratif, terjual di area Jakarta Raya.",
    imageFallback: "bg-amber-50 border-amber-200"
  },
  {
    title: "Fiacendekia Visual Logo",
    category: "Graphic Design",
    description: "Aset logo sirkuler bermakna lentera menyala dan orbit planet, melambangkan perjalanan mencerahkan menuju pilar akademik unggulan.",
    imageFallback: "bg-rose-100 border-rose-300"
  },
  {
    title: "Aesthetic Journal Spread",
    category: "Creative Craftsmanship",
    description: "Journaling estetik dengan kolase kertas kraft, kliping alam, kaligrafi tinta, dan stiker pastel bertemakan keseimbangan hidup.",
    imageFallback: "bg-pink-50 border-pink-200"
  }
];
