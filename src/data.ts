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
  // ── 1. BPM FIA UI — Head of Institutional Relations ──────────────────────
  {
    id: "exp-1",
    role: "Head of Institutional Relations Commission",
    organization: "BPM FIA UI (Badan Perwakilan Mahasiswa)",
    period: "Mar 2026 - Saat ini",
    duration: "3 bln",
    type: "PR & Leadership",
    description: [
      "Memimpin pengawasan, komunikasi, serta koordinasi hubungan kelembagaan eksternal dan internal FIA UI.",
      "Menjalin komunikasi strategis dengan organisasi mahasiswa tingkat fakultas dan universitas.",
      "Mengonseptualisasikan struktur kolaboratif yang partisipatif untuk meningkatkan keterlibatan pemangku kepentingan."
    ],
    skills: ["Leadership", "Strategic Communications", "Team Mentoring"],
    logo: "/asset/pengalaman/logo organisasi/BPM FIA UI.png",
    mediaImages: []
  },

  // ── 2. Girl Up UI — PR & Social Media ────────────────────────────────────
  {
    id: "exp-2",
    role: "Public Relation and Social Media Management Officer",
    organization: "Girl Up UI (Universitas Indonesia)",
    period: "Jan 2026 - Saat ini",
    duration: "5 bln",
    type: "PR & Leadership",
    description: [
      "Bertanggung jawab atas hubungan kelembagaan (Institutional Relations) serta publikasi media.",
      "Menggagas kampanye digital interaktif mengenai kesetaraan gender dan pengembangan kepemimpinan muda.",
      "Merancang aset visual kreatif dengan Canva untuk memperkuat kehadiran digital organisasi."
    ],
    skills: ["Canva", "Strategic Communications", "Creative Writing"],
    logo: "/asset/pengalaman/logo organisasi/Girl Up UI (Indonesia).png",
    mediaImages: []
  },

  // ── 3. Self Employed — Drawing, Art, Mini Business ───────────────────────
  {
    id: "exp-3",
    role: "Drawing Enthusiast, Art Lover, & Mini Business Owner",
    organization: "Self Employed / Wiraswasta",
    period: "Jan 2018 - Saat ini",
    duration: "8 thn 5 bln",
    type: "Creative & Art",
    description: [
      "Mengoperasikan bisnis mini kreatif: kerajinan bunga artifisial (Selling Artificial Flowers), ilustrasi karakter animasi Jepang (Sketch), serta Digital Art, Canva, dan Journaling.",
      "Memasarkan dan mendistribusikan karya seni tradisional dan digital secara mandiri.",
      "Mengembangkan kemahiran menggambar manual secara presisi serta mengombinasikannya dengan strategi visual digital."
    ],
    skills: ["Traditional Art Skills", "Canva", "Creative Writing"],
    logo: "/asset/pengalaman/logo organisasi/Self Employed.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/Self Employed/Selling Artificial Flowers.png",
      "/asset/pengalaman/galeri pengalaman/Self Employed/Digital Art, Playing with Canva, and Journaling.png",
      "/asset/pengalaman/galeri pengalaman/Self Employed/Sketch.png",
    ]
  },

  // ── 4. UniVerse Expo 2026 — Project Officer ───────────────────────────────
  {
    id: "exp-4",
    role: "Project Officer",
    organization: "UniVerse Expo 2026",
    period: "Des 2025 - Jan 2026",
    duration: "2 bln",
    type: "Events & Mentoring",
    description: [
      "Mengembangkan konsep acara eksibisi kreatif masa depan dan mengontrol manajemen logistik teknis.",
      "Membina kemitraan strategis dengan beberapa merek kreatif anak muda."
    ],
    skills: ["Leadership", "Financial Analysis"],
    logo: "/asset/pengalaman/logo organisasi/UniVerse Expo 2026.png",
    mediaImages: []
  },

  // ── 5. ADAPTASI UI 2025 — Staff Dokumentasi ──────────────────────────────
  {
    id: "exp-5",
    role: "Staff at Dokumentasi",
    organization: "ADAPTASI UI 2025",
    period: "Sep 2025 - Des 2025",
    duration: "4 bln",
    type: "Creative & Art",
    description: [
      "Mengambil dokumentasi foto dan video definisi tinggi secara real-time untuk orientasi mahasiswa baru.",
      "Berkolaborasi mengedit publikasi cuplikan video kreatif berdurasi pendek."
    ],
    skills: ["Canva", "Traditional Art Skills"],
    logo: "/asset/pengalaman/logo organisasi/ADAPTASI UI.png",
    mediaImages: []
  },

  // ── 6. PESPORA — PIC of Design ────────────────────────────────────────────
  {
    id: "exp-6",
    role: "PIC of Design",
    organization: "PESPORA",
    period: "Jun 2025 - Des 2025",
    duration: "7 bln",
    type: "Creative & Art",
    description: [
      "Mendesain dan membuat logo, feed Instagram @pesporanegara, mengorganisir LinkedIn, serta menyiapkan proposal sponsorship untuk PESPORA 7.0.",
      "Memimpin identitas visual acara dari konsep awal hingga publikasi resmi.",
      "Berkolaborasi lintas divisi untuk menghasilkan konten visual yang kohesif dan komunikatif."
    ],
    skills: ["Canva", "Strategic Communications", "Traditional Art Skills"],
    logo: "/asset/pengalaman/logo organisasi/PESPORA.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/PPESPORA/feeds1.png",
      "/asset/pengalaman/galeri pengalaman/PPESPORA/feeds2.png",
    ]
  },

  // ── 7. FIA CENDEKIA — PIC of Design and Publication ──────────────────────
  {
    id: "exp-7",
    role: "PIC of Design and Publication",
    organization: "FIA CENDEKIA",
    period: "Mei 2025 - Des 2025",
    duration: "8 bln",
    type: "Creative & Art",
    description: [
      "Memimpin perancangan identitas visual FIA Cendekia 2025 dari konsep hingga rilis publik, terinspirasi dari Age of Enlightenment.",
      "Mendesain logo utama: lentera menyala, buku terbuka, dan elemen orbit sebagai simbol ilmu, eksplorasi, dan pencerahan.",
      "Menerapkan estetika vintage untuk mencerminkan kedalaman historis sambil mempertahankan relevansi kontemporer."
    ],
    skills: ["Canva", "Strategic Communications", "Traditional Art Skills"],
    logo: "/asset/pengalaman/logo organisasi/FIA CENDEKIA.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/FIA CENDIKIA/Starter Feeds Introduction.png",
      "/asset/pengalaman/galeri pengalaman/FIA CENDIKIA/What we made this far!.png",
    ]
  },

  // ── 8. Himanera Muda — Coordinator of Event (Battle of Knowledge 1.0) ─────
  {
    id: "exp-8",
    role: "Coordinator of Event",
    organization: "Battle of Knowledge 1.0 · Kontrak",
    period: "Apr 2025 - Des 2025",
    duration: "9 bln",
    type: "Events & Mentoring",
    description: [
      "Mengoordinasikan rangkaian perlombaan BoK 1.0: divisi Debat, Kuis, Desain Poster, serta Liaison Officer (LO).",
      "Memimpin perencanaan efektif, eksekusi mulus, dan kolaborasi lintas tim untuk festival akademik yang kompetitif.",
      "Memandu skema evaluasi performa kepanitiaan dan alur operasional acara."
    ],
    skills: ["Leadership", "Strategic Communications", "Team Mentoring"],
    logo: "/asset/pengalaman/logo organisasi/default.png",
    mediaImages: [
    ]
  },

  // ── 9. BEM FIA UI — Staff Dept. Education & Science ──────────────────────
  {
    id: "exp-9",
    role: "Staff at Department of Education and Science",
    organization: "BEM FIA UI · Kontrak",
    period: "Mar 2025 - Des 2025",
    duration: "10 bln",
    type: "Events & Mentoring",
    description: [
      "Bertugas di Departemen Pendidikan dan Keilmuan BEM FIA UI selama 10 bulan.",
      "Berkontribusi dalam program-program akademik dan keilmuan untuk mahasiswa FIA UI.",
      "Mendukung pelaksanaan kegiatan departemen dan koordinasi antar divisi."
    ],
    skills: ["Leadership", "Team Mentoring", "Strategic Communications"],
    logo: "/asset/pengalaman/logo organisasi/BEM FIA UI 2026.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/BEM FIA UI/Certificate.png",
    ]
  },

  // ── 10. LDMK FIA UI — Mentor ──────────────────────────────────────────────
  {
    id: "exp-10",
    role: "Mentor",
    organization: "LDMK FIA UI",
    period: "Agu 2025 - Nov 2025",
    duration: "4 bln",
    type: "Events & Mentoring",
    description: [
      "Menjadi mentor pendamping akademik dan karakter untuk Kelompok 23 FIA UI.",
      "Mengisi sesi pengembangan kepemimpinan, strategi belajar, dan adaptasi mahasiswa baru.",
      "Menciptakan iklim diskusi yang suportif dan membina kerja sama kelompok berdurasi intensif."
    ],
    skills: ["Team Mentoring", "Leadership", "Creative Writing"],
    logo: "/asset/pengalaman/logo organisasi/LDMK FIA UI.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/LDKM FIA UI/With Kelompok 23.png",
    ]
  },

  // ── 11. Administration Festival FIA UI ────────────────────────────────────
  {
    id: "exp-11",
    role: "Coordinator of Finance",
    organization: "Administration Festival FIA UI",
    period: "Apr 2025 - Okt 2025",
    duration: "7 bln",
    type: "Events & Mentoring",
    description: ["Coordinated the Finance Department at Administration Festival 9, leading the Sponsorship, Ticketing, and Fundraising divisions to optimize revenue streams, organized campaign, maintain budget efficiency, and support the overall success of the event."],
    skills: ["Leadership", "Financial Analysis"],
    logo: "/asset/pengalaman/logo organisasi/Administration Festival FIA UI.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/Administration Festival FIA UI/Certificate.png",
    ]
  },

  // ── 12. FKMPI — Essay Competition ─────────────────────────────────────────
  {
    id: "exp-12",
    role: "Essay Competition",
    organization: "Forum Komunikasi Mahasiswa Politeknik se-Indonesia (FKMPI)",
    period: "Des 2024 - Jan 2025",
    duration: "2 bln",
    type: "Events & Mentoring",
    description: ["This essay discusses the role of the Indonesian International Student Mobility Awards (IISMA) program as a form of implementing the Sustainable Development Goals (SDGs) in quality education to support the Golden Indonesia 2045. Using a qualitative approach, this essay highlights how IISMA not only improves the quality of Indonesian human resources through global experience, but also encourages awardees to be active in SDGs-based social campaigns. By adopting a public administration and governance perspective, it emphasizes the importance of policy flexibility and collaboration between students, government, and other sectors in sustainable development."],
    skills: ["Creative Writing", "Strategic Communications"],
    logo: "/asset/pengalaman/logo organisasi/Forum Komunikasi Mahasiswa Politeknik se-Indonesia (FKMPI).png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/Forum Komunikasi Mahasiswa Politeknik se-Indonesia (FKMPI)/Certificate.png",
    ]
  },

  // ── 13. UNESA — Essay Competition ─────────────────────────────────────────
  {
    id: "exp-13",
    role: "Essay Competition",
    organization: "Universitas Negeri Surabaya (UNESA)",
    period: "Des 2024 - Jan 2025",
    duration: "",
    type: "Events & Mentoring",
    description: ["Industry 5.0 brings a revolution that emphasizes the collaboration of humans and technology to create more inclusive solutions. In this essay, we explore the role of youth as agents of change in the development and downstreaming of bionic hand technology for people with disabilities in Indonesia. By linking the principles of public administration, public policy, as well as 3D printing and IoT-based innovation, this essay highlights how synergy between government, industry, and community can ensure this technology is not only innovative, but also affordable and sustainable for people in need."],
    skills: ["Creative Writing", "Strategic Communications"],
    logo: "/asset/pengalaman/logo organisasi/Universitas Negeri Surabaya (UNESA).png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/Universitas Negeri Surabaya (UNESA)/Certificate.png",
    ]
  },

  // ── 14. GEMAFIA UI — Decorator (placeholder) ──────────────────────────────
  {
    id: "exp-14",
    role: "Decorator",
    organization: "GEMAFIA UI",
    period: "Sep 2024",
    duration: "1 bln",
    type: "Creative & Art",
    description: ["In the voluntary RADAYA 2024 program, our decoration team, made various decorations with the theme of the movie “Charlie and The Chocolate Factory”. We brought ideas like melted ice cream, small pieces like chocolate cardboard, various balloons, flag designs, and even Charlie's own stick."],
    skills: ["Traditional Art Skills", "Creative Writing"],
    logo: "/asset/pengalaman/logo organisasi/Himanera Muda.png",
    mediaImages: [
      "/asset/pengalaman/galeri pengalaman/Himanera Muda/Second Look.png",
      "/asset/pengalaman/galeri pengalaman/Himanera Muda/The Looks.png",
    ]
  },

  {
    id: "exp-15",
    role: "OSN Geografi",
    organization: "SMAS BPS&K 1 JAKARTA",
    period: "",
    duration: "",
    type: "Events & Mentoring",
    description: ["Became the coordinator of the geography school team in the learning process and also become a participant."],
    skills: ["Leadership", "Team Mentoring"],
    logo: "",
    mediaImages: []
  },

  // ── 15. Bedah Kampus UI — OSIS (placeholder) ──────────────────────────────
  {
    id: "exp-16",
    role: "OSIS",
    organization: "SMPN 213 JAKARTA",
    period: "",
    duration: "",
    type: "PR & Leadership",
    description: ["Being a member of the culture section, I became the coordinator of the painting extracurricular activity and supported small organizational matters such as being a liaison to various elementary schools to invite them to join the event, and maintaining order during the event. However, I did not fulfill my term of office due to a serious problem."],
    skills: ["Leadership", "Team Mentoring"],
    logo: "/asset/pengalaman/logo organisasi/default",
    mediaImages: []
  },
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

export const TOOLS_DATA = [
  { name: "Canva Pro", icon: "🎨", category: "Design" },
  { name: "Figma", icon: "✏️", category: "Design" },
  { name: "Microsoft Office", icon: "📊", category: "Productivity" },
  { name: "Google Workspace", icon: "🗂️", category: "Productivity" },
  { name: "Traditional Drawing", icon: "🖊️", category: "Art" },
  { name: "Acrylic Painting", icon: "🖌️", category: "Art" },
  { name: "Instagram Content", icon: "📱", category: "Social Media" },
  { name: "LinkedIn Management", icon: "💼", category: "Social Media" },
];

export const ACHIEVEMENTS_DATA = [
  // ── Universitas Indonesia (2024–kini) ─────────────────────────────────────
  {
    title: "Head of IR Commission",
    subtitle: "BPM FIA UI · Mar 2026–kini",
    detail: "Memimpin komisi hubungan kelembagaan eksternal & internal tingkat fakultas",
    icon: "🎓",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    dot: "bg-emerald-400",
  },
  {
    title: "PR & Social Media Officer",
    subtitle: "Girl Up UI · Jan 2026–kini",
    detail: "Mengelola hubungan kelembagaan, kampanye digital kesetaraan gender, dan aset visual Canva",
    icon: "📣",
    color: "bg-rose-50 border-rose-200 text-rose-700",
    dot: "bg-rose-400",
  },
  {
    title: "Cum Laude",
    subtitle: "Universitas Indonesia · 2024–kini",
    detail: "Predikat akademis tertinggi sejak semester pertama",
    icon: "⭐",
    color: "bg-pink-50 border-pink-200 text-pink-700",
    dot: "bg-pink-400",
  },
  // ── SMAS BPS&K I Jakarta (2022–2024) ──────────────────────────────────────
  {
    title: "Lulusan Terbaik IPS",
    subtitle: "SMAS BPS&K I Jakarta · 2024",
    detail: "IPK 94.64 — Peringkat 1 Kelas Eligible Angkatan 2024",
    icon: "🥇",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-400",
  },
  {
    title: "Class Leader 2 Tahun",
    subtitle: "SMAS BPS&K I Jakarta · 2021–2023",
    detail: "Dipilih demokratis, memimpin forum & kelompok belajar",
    icon: "👑",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    dot: "bg-violet-400",
  },
  {
    title: "Koordinator OSN Geografi",
    subtitle: "SMAS BPS&K I Jakarta · 2023",
    detail: "Memimpin tim olimpiade sains nasional bidang Geografi",
    icon: "🗺️",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    dot: "bg-sky-400",
  },
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
