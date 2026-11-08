"use client";
import { useEffect, useState } from "react";

const T = {
  en: {
    nav: ["Home", "What I Explore do", "About", "Work", "Contact"],
    menu: "Menu",
    close: "Close",
    hi: "Hi there, I'm",
    role: "UI/UX Designer, Web Develop",
    lead: "I’m always curious to explore web development, UI/UX design, and turning ideas into meaningful digital experiences.",
    hire: "Contact Me",
    view: "View my Potfolio",
    c1: "UI/UX Design",
    c2: "Web development",
    what: "What I Explore",
    svc: [
      [
        "Web development",
        "Exploring web development through different projects and building responsive, functional websites.",
      ],
      [
        "UI/UX Design",
        "Designing clean and user-friendly interfaces, wireframes, and prototypes in Figma.",
      ],
      [
        "Design to code",
        "Turning ideas and visual designs into functional interfaces while gaining hands-on experience through projects.",
      ],
    ],
    about: "About me",
    aboutP:
      "Hi, I’m Karis, a Software Engineering student interested in web development and UI/UX design. I like exploring new ideas, trying different things, and turning them into projects that I can learn from. I’m still growing and learning, but I’m always excited to take on something new.",
    ticks: [
      "Worked on 3 projects across web development, mobile frontend, and UI/UX",
      "Familiar with HTML, CSS, JavaScript, PHP, Next.js, and Flutter",
      "From UI/UX design and prototyping to building functional interfaces",
    ],
    port: "Portfolio",
    open: "View project",
    work: [
      [
        "Website",
        "Javahike",
        "JavaHike is a website created to explore hiking destinations in East Java, featuring information about mountains, locations, difficulty levels, and recommendations through a simple and responsive interface.",
        "JavaHike is a web development project built to deliver a responsive, accessible, and user-friendly digital experience. The website was developed with a focus on clean interface design, structured layouts, and intuitive navigation to provide a consistent experience across different devices.\n\nBuilt using HTML and CSS for the frontend, PHP for server-side development, and MySQL for database management, JavaHike integrates different web technologies into a functional website.\n\nThe development process involved implementing the user interface, managing data through database integration, and connecting frontend components with backend processes.\n\nThrough this project, I gained practical experience in developing a website from the ground up, working with database-driven functionality, and integrating frontend and backend technologies into one cohesive application.",
        "Design to code, Web development",
        [
          "Developed the website interface using HTML and CSS.",

          "Implemented backend functionality using PHP.",

          "Designed and managed the MySQL database.",

          "Integrated frontend components with backend processes.",

          "Worked on website structure, layout, and responsive design.",
        ],
      ],
      [
        "Mobile",
        "Pendakianku",
        "Pendakianku is a mobile application developed using Flutter, focusing on intuitive UI design, smooth navigation, and a user-friendly experience. The project transforms UI concepts into functional mobile interfaces through frontend implementation.",
        `Pendakianku is a mobile application development project focused on creating an intuitive and user-friendly mobile experience. The project emphasizes interface design, structured layouts, and smooth navigation to ensure users can interact with the application comfortably.
        Developed using Flutter and Dart, the application was built by translating UI designs into functional mobile interfaces. The development process involved implementing page layouts, organizing visual components, creating navigation between screens, and maintaining consistent styling throughout the application.
        This project provided hands-on experience in mobile frontend development, UI implementation, and transforming design concepts into functional mobile applications.`,
        "Mobile Development, UI Implementation, Flutter Development",
        [
          "Developed mobile user interfaces using Flutter and Dart.",
          "Translated UI designs into functional mobile screens.",
          "Implemented page layouts and navigation between screens.",
          "Applied consistent styling across the application.",
          "Focused on creating a responsive and user-friendly mobile experience.",
        ],
      ],
      [
        "Website",
        "Lovecco",
        "Lovecco is a web-based platform for exploring and ordering digital flower bouquet designs, offering ready-made and customizable options through a simple, intuitive, and user-friendly interface.",
`Lovecco is a web-based platform designed to provide an interactive and convenient experience for customers looking to explore and order artificial flower bouquet designs.

The website is developed to simplify the ordering process through an intuitive interface, organized product presentation, and accessible navigation. Customers can browse available bouquet, select their preferred options, and place orders directly through the platform.

Lovecco also incorporates user authentication, QRIS payment integration, and order status tracking to support the overall ordering experience. On the administrative side, the platform provides tools to manage products and customer orders in a more organized way.

Through this project, the focus is on developing an integrated web application that combines user interface design, ordering functionality, and administrative management into one platform.`,        
"Web Development, E-Commerce Website",
        [
          "Designed and developed the website interface.",

          "Implemented frontend components using Next.js.",

          "Developed application functionality and user interactions.",

          "Designed database structures to support application data.",

          "Implemented user authentication and order management features.",

          "Worked on responsive layouts and overall website usability.",
        ],
      ],
    ],
    roleL: "Role",
    toolsL: "Tools",
    hl: "What I did",
    visit: "Visit live site",
    closeL: "Close",
    prevL: "Previous",
    nextL: "Next",
    skills: "Skills",
    sk: [
      [
        "Web & Mobile",
        ["HTML", "CSS", "Javascript", "Next.js", "PHP", "Flutter", "Dart"],
      ],
      ["Database", ["phpMyAdmin", "MariaDB", "MySQL"]],
      ["Design to code", ["Design to Frontend", "Design to UI"]],
      [
        "UI/UX Design",
        ["Wireframe to UI", "Mockups", "Prototyping", "Figma", "Canva"],
      ],
    ],
    cta: "Building projects, gaining experience, and growing along the way.",
    navi: "Navigate",
    find: "Find me",
    rights: "© 2026 Karchive. All rights reserved.",
    top: "Back to top ↑",
  },
  id: {
    nav: ["Beranda", "Yang Saya Jelajahi", "Tentang", "Karya", "Kontak"],
    menu: "Menu",
    close: "Tutup",
    hi: "Halo, saya",
    role: "Desainer UI/UX",
    lead: "Saya selalu penasaran untuk menjelajahi pengembangan web, desain UI/UX, dan mengubah ide menjadi pengalaman digital yang bermakna.",
    hire: "Hubungi Saya",
    view: "Lihat Portofolio Saya",
    c1: "Desain UI/UX",
    c2: "Pengembangan web",
    what: "Yang Saya Jelajahi",
    svc: [
      [
        "Pengembangan web",
        "Menjelajahi pengembangan web melalui berbagai proyek dan membangun website yang responsif serta fungsional.",
      ],
      [
        "Desain UI/UX",
        "Merancang antarmuka yang bersih dan ramah pengguna, wireframe, serta prototipe di Figma.",
      ],
      [
        "Desain ke kode",
        "Mengubah ide dan desain visual menjadi antarmuka fungsional sambil mendapatkan pengalaman langsung melalui proyek.",
      ],
    ],
    about: "Tentang saya",
    aboutP:
      "Halo, saya Karis, mahasiswa Teknik Perangkat Lunak yang tertarik pada pengembangan web dan desain UI/UX. Saya suka menjelajahi ide-ide baru, mencoba berbagai hal, dan mengubahnya menjadi proyek yang bisa saya pelajari. Saya masih terus tumbuh dan belajar, tetapi saya selalu bersemangat untuk mencoba hal baru.",
    ticks: [
      "Mengerjakan 3 proyek di bidang pengembangan web, frontend mobile, dan UI/UX",
      "Terbiasa dengan HTML, CSS, JavaScript, PHP, Next.js, dan Flutter",
      "Dari desain dan prototipe UI/UX hingga membangun antarmuka fungsional",
    ],
    port: "Portofolio",
    open: "Lihat proyek",
    work: [
      [
        "Website",
        "Javahike",
        "JavaHike adalah website yang dibuat untuk menjelajahi destinasi pendakian di Jawa Timur, menyajikan informasi tentang gunung, lokasi, tingkat kesulitan, dan rekomendasi melalui antarmuka yang sederhana dan responsif.",
        "JavaHike adalah proyek pengembangan web yang dibangun untuk menghadirkan pengalaman digital yang responsif, mudah diakses, dan ramah pengguna. Website ini dikembangkan dengan fokus pada desain antarmuka yang bersih, tata letak yang terstruktur, dan navigasi yang intuitif untuk memberikan pengalaman yang konsisten di berbagai perangkat.\n\nDibangun menggunakan HTML dan CSS untuk frontend, PHP untuk pengembangan sisi server, dan MySQL untuk pengelolaan basis data, JavaHike memadukan berbagai teknologi web menjadi sebuah website yang fungsional.\n\nProses pengembangannya meliputi penerapan antarmuka pengguna, pengelolaan data melalui integrasi basis data, serta menghubungkan komponen frontend dengan proses backend.\n\nMelalui proyek ini, saya mendapatkan pengalaman praktis dalam membangun website dari awal, mengerjakan fungsionalitas yang digerakkan oleh basis data, serta memadukan teknologi frontend dan backend menjadi satu aplikasi yang utuh.",
        "Desain ke kode, Pengembangan web",
        [
          "Mengembangkan antarmuka website menggunakan HTML dan CSS.",
          "Menerapkan fungsionalitas backend menggunakan PHP.",
          "Merancang dan mengelola basis data MySQL.",
          "Mengintegrasikan komponen frontend dengan proses backend.",
          "Mengerjakan struktur website, tata letak, dan desain responsif.",
        ],
      ],
      [
        "Mobile",
        "Pendakianku",
        "Pendakianku adalah aplikasi mobile yang dikembangkan menggunakan Flutter, dengan fokus pada desain UI yang intuitif, navigasi yang lancar, dan pengalaman yang ramah pengguna. Proyek ini mengubah konsep UI menjadi antarmuka mobile yang fungsional melalui implementasi frontend.",
        "Pendakianku adalah proyek pengembangan aplikasi mobile yang berfokus pada penciptaan pengalaman mobile yang intuitif dan ramah pengguna. Proyek ini menekankan desain antarmuka, tata letak yang terstruktur, dan navigasi yang lancar agar pengguna dapat berinteraksi dengan aplikasi secara nyaman.\n\nDikembangkan menggunakan Flutter dan Dart, aplikasi ini dibangun dengan menerjemahkan desain UI menjadi antarmuka mobile yang fungsional. Proses pengembangannya meliputi penerapan tata letak halaman, penataan komponen visual, pembuatan navigasi antar layar, dan menjaga konsistensi gaya di seluruh aplikasi.\n\nProyek ini memberikan pengalaman langsung dalam pengembangan frontend mobile, implementasi UI, dan mengubah konsep desain menjadi aplikasi mobile yang fungsional.",
        "Pengembangan Mobile, Implementasi UI, Pengembangan Flutter",
        [
          "Mengembangkan antarmuka pengguna mobile menggunakan Flutter dan Dart.",
          "Menerjemahkan desain UI menjadi layar mobile yang fungsional.",
          "Menerapkan tata letak halaman dan navigasi antar layar.",
          "Menerapkan gaya yang konsisten di seluruh aplikasi.",
          "Berfokus pada penciptaan pengalaman mobile yang responsif dan ramah pengguna.",
        ],
      ],
      [
        "Website",
        "Lovecco",
        "Lovecco adalah platform berbasis web untuk menjelajahi dan memesan desain buket bunga digital, menawarkan pilihan siap pakai dan dapat dikustomisasi melalui antarmuka yang sederhana, intuitif, dan ramah pengguna.",
        "Lovecco adalah platform berbasis web yang dirancang untuk memberikan pengalaman interaktif dan praktis bagi pelanggan yang ingin menjelajahi dan memesan desain buket bunga artifisial.\n\nWebsite ini dikembangkan untuk menyederhanakan proses pemesanan melalui antarmuka yang intuitif, penyajian produk yang terorganisir, dan navigasi yang mudah diakses. Pelanggan dapat menelusuri buket yang tersedia, memilih opsi yang diinginkan, dan melakukan pemesanan langsung melalui platform.\n\nLovecco juga dilengkapi autentikasi pengguna, integrasi pembayaran QRIS, dan pelacakan status pesanan untuk mendukung keseluruhan pengalaman pemesanan. Dari sisi administratif, platform ini menyediakan alat untuk mengelola produk dan pesanan pelanggan secara lebih terorganisir.\n\nMelalui proyek ini, fokusnya adalah mengembangkan aplikasi web terintegrasi yang menggabungkan desain antarmuka pengguna, fungsionalitas pemesanan, dan manajemen administratif ke dalam satu platform.",
        "Pengembangan Web, Website E-Commerce",
        [
          "Merancang dan mengembangkan antarmuka website.",
          "Menerapkan komponen frontend menggunakan Next.js.",
          "Mengembangkan fungsionalitas aplikasi dan interaksi pengguna.",
          "Merancang struktur basis data untuk mendukung data aplikasi.",
          "Menerapkan fitur autentikasi pengguna dan manajemen pesanan.",
          "Mengerjakan tata letak responsif dan kegunaan website secara keseluruhan.",
        ],
      ],
    ],
    roleL: "Peran",
    toolsL: "Tools",
    hl: "Yang saya kerjakan",
    visit: "Kunjungi situs",
    closeL: "Tutup",
    prevL: "Sebelumnya",
    nextL: "Berikutnya",
    skills: "Keahlian",
    sk: [
      [
        "Web & Mobile",
        ["HTML", "CSS", "Javascript", "Next.js", "PHP", "Flutter", "Dart"],
      ],
      ["Database", ["phpMyAdmin", "MariaDB", "MySQL"]],
      ["Desain ke kode", ["Desain ke Frontend", "Desain ke UI"]],
      [
        "Desain UI/UX",
        ["Wireframe ke UI", "Mockup", "Prototipe", "Figma", "Canva"],
      ],
    ],
    cta: "Membangun proyek, menambah pengalaman, dan terus berkembang.",
    navi: "Navigasi",
    find: "Temukan saya",
    rights: "© 2026 Karchive. Hak cipta dilindungi.",
    top: "Kembali ke atas ↑",
  },
};

const IDS = ["home", "services", "about", "work", "contact"];
const ICONS = ["</>", "⚙", "⇄", "✦"];
const TAGS = [
  ["HTML", "CSS", "Next.js", "Javascript"],
  ["Figma", "Canva"],
  ["Figma to Frontend", "Design to UI"],
];
// Ganti img / tambah url (link live) untuk tiap proyek. Gambar taruh di folder public/projects/
const PROJECTS = [
  {
    img: "/projects/javahike.png",
    bg: "linear-gradient(135deg,#22443a,#4c7a63)",
    tools: ["HTML", "CSS", "PHP", "MySQL", "phpMyAdmin"],
    url: "",
  },
  {
    img: "/projects/pendakianku.jpg",
    bg: "linear-gradient(135deg,#1f4954,#3e7c8a)",
    tools: ["Flutter", "Dart"],
    url: "",
  },
  {
    img: "/projects/lovecco.png",
    bg: "linear-gradient(135deg,#82304a,#b85675)",
    tools: ["Javascript", "Next.js", "MySQL", "phpMyAdmin"],
    url: "",
  },
];
const PHOTO = "/karis.jpg";
const GRAD = [
  "linear-gradient(135deg,#3559C7,#7AA2F7)",
  "linear-gradient(135deg,#0E7C86,#6FD0C8)",
  "linear-gradient(135deg,#6B4FBB,#B9A5F2)",
  "linear-gradient(135deg,#1B2F4A,#5B7DA8)",
];

const CODE = `const dev = {
  name: 'Karisma Rinjani',
  role: 'Web Develop & UI/UX Design',
  stack: ['HTML', 'CSS', 'Javascript', 'Next.js'],
  responsive: true,
  currently_available: true,
};`;

function Code({ text }) {
  return text.split(/('[^']*'?)/).map((p, i) =>
    p.startsWith("'") ? (
      <span key={i} className="s">
        {p}
      </span>
    ) : (
      p.split(/\b(const|true)\b/).map((q, j) =>
        q === "const" || q === "true" ? (
          <span key={i + "" + j} className="k">
            {q}
          </span>
        ) : (
          q
        ),
      )
    ),
  );
}

function Shot({ src, fit }) {
  const [ok, setOk] = useState(true);
  const [ratio, setRatio] = useState(null);
  return (
    <div
      className="bbody"
      style={fit && ratio ? { aspectRatio: ratio } : undefined}
    >
      <b />
      <b />
      <u />
      <u />
      <u />
      {ok && src && (
        <img
          className="shot"
          src={src}
          alt=""
          onLoad={(e) => {
            const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
            if (w && h) setRatio(w / h);
          }}
          onError={() => setOk(false)}
          ref={(el) => {
            if (el && el.complete && el.naturalWidth === 0) setOk(false);
          }}
        />
      )}
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("light");
  const [typed, setTyped] = useState(0);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [remote, setRemote] = useState(null);
  const t = T[lang];
  const pick = (o) => (o && (o[lang] || o.en)) || "";
  const items =
    remote && remote.length
      ? remote.map((q, i) => ({
          c: q.category,
          title: pick(q.title),
          short: pick(q.short),
          long: pick(q.long),
          role: pick(q.role),
          points:
            (q.points?.[lang]?.length ? q.points[lang] : q.points?.en) || [],
          tools: q.tools || [],
          url: q.url || "",
          img: q.image || "",
          bg: q.bg || GRAD[i % 4],
        }))
      : t.work.map((x, i) => ({
          c: x[0],
          title: x[1],
          short: x[2],
          long: x[3],
          role: x[4],
          points: x[5],
          tools: PROJECTS[i].tools,
          url: PROJECTS[i].url,
          img: PROJECTS[i].img,
          bg: PROJECTS[i].bg || GRAD[i % 4],
        }));
  const n = items.length;
  const cur = modal !== null ? items[modal] : null;

  useEffect(() => {
    try {
      const l =
        localStorage.getItem("lang") ||
        (navigator.language.startsWith("id") ? "id" : "en");
      const th =
        localStorage.getItem("theme") ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      setLang(l);
      setTheme(th);
    } catch (e) {}
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("theme", theme);
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [theme, lang]);

  useEffect(() => {
    // selalu mulai dari hero: matikan restore scroll browser dan hapus #hash lama
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (location.hash)
      history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => Array.isArray(d) && setRemote(d))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setTyped((n) => (n >= CODE.length ? n : n + 1)),
      38,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) =>
            e.isIntersecting &&
            (e.target.classList.add("in"), io.unobserve(e.target)),
        ),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 30);
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
      let cur = "home";
      IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 160) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (modal === null) return;
    const k = (e) => {
      if (e.key === "Escape") setModal(null);
      if (e.key === "ArrowRight") setModal((m) => (m + 1) % n);
      if (e.key === "ArrowLeft") setModal((m) => (m + n - 1) % n);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", k);
    };
  }, [modal, n]);

  return (
    <>
      <div className="progress" style={{ width: progress + "%" }} />
      <header className={"nav" + (scrolled ? " scrolled" : "")}>
        <a href="#home" className="logo">
          Karchive
        </a>
        <nav className={open ? "open" : ""}>
          {IDS.map((id, i) => (
            <a
              key={id}
              href={"#" + id}
              className={active === id ? "on" : ""}
              onClick={() => setOpen(false)}
            >
              {t.nav[i]}
            </a>
          ))}
        </nav>
        <div className="ctrl">
          <div className="seg" role="group" aria-label="Language">
            {["en", "id"].map((l) => (
              <button
                key={l}
                className={lang === l ? "on" : ""}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="mode"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button className="burger" onClick={() => setOpen(!open)}>
            {open ? t.close : t.menu}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div className="hero-copy">
            <p className="hi">{t.hi}</p>
            <h1>Karisma Rinjani</h1>
            <p className="role">{t.role}</p>
            <p className="lead">{t.lead}</p>
            <div className="btns">
              <a href="#contact" className="btn primary">
                {t.hire}
              </a>
              <a href="#work" className="btn ghost">
                {t.view}
              </a>
            </div>
          </div>
          <div className="win" aria-hidden="true">
            <div className="bar">
              <i />
              <i />
              <i />
              <span>portfolio.js</span>
            </div>
            <pre>
              <Code text={CODE.slice(0, typed)} />
              <em className="caret" />
            </pre>
            <div className="chip c1">{t.c1}</div>
            <div className="chip c2">{t.c2}</div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            {[...Array(2)].map((_, k) => (
              <span key={k}>
                HTML &nbsp;•&nbsp; CSS &nbsp;•&nbsp; Javascript &nbsp;•&nbsp;
                Next.js &nbsp;•&nbsp; Figma &nbsp;•&nbsp; Canva &nbsp;•&nbsp;
                phpMyAdmin &nbsp;•&nbsp; PHP &nbsp;•&nbsp;{" "}
              </span>
            ))}
          </div>
        </div>

        <section id="services" className="wrap sec">
          <h2 className="reveal">{t.what}</h2>
          <div className="rows">
            {t.svc.map(([title, d], i) => (
              <article
                key={i}
                className="row reveal"
                style={{ "--d": i * 100 + "ms" }}
              >
                <span className="ico">{ICONS[i]}</span>
                <h3>{title}</h3>
                <div>
                  <p>{d}</p>
                  <div className="pills">
                    {TAGS[i].map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
                <span className="arr">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="band">
          <div className="wrap about">
            <div className="reveal from-l me">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <circle cx="100" cy="82" r="34" />
                <path d="M28 200c0-50 30-82 72-82s72 32 72 82z" />
              </svg>
              <img
                src={PHOTO}
                alt="Karchive"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <div className="reveal from-r">
              <h2>{t.about}</h2>
              <p className="lead">{t.aboutP}</p>
              <ul className="ticks">
                {t.ticks.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="work" className="wrap sec">
          <h2 className="reveal">{t.port}</h2>
          <div className="stack">
            {items.map((it, i) => (
              <article
                key={i}
                className="pc"
                style={{ background: it.bg, "--i": i }}
                role="button"
                tabIndex={0}
                aria-label={it.title}
                onClick={() => setModal(i)}
                onKeyDown={(e) => e.key === "Enter" && setModal(i)}
              >
                <div className="ptext">
                  <span className="cat2">{it.c}</span>
                  <h3>{it.title}</h3>
                  <p>{it.short}</p>
                  <div className="pills">
                    {it.tools.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                  <b className="more">{t.open} ↗</b>
                </div>
                <div className="browser">
                  <div className="bbar">
                    <i />
                    <i />
                    <i />
                    <span />
                  </div>
                  <Shot src={it.img} fit />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="wrap sec">
          <h2 className="reveal">{t.skills}</h2>
          <div className="sk">
            {t.sk.map(([title, tags], i) => (
              <article
                key={i}
                className={"skc s" + i + " reveal"}
                style={{ "--d": i * 90 + "ms" }}
              >
                <span className="ico">{ICONS[i]}</span>
                <h3>{title}</h3>
                <div className="pills">
                  {tags.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="wrap">
          <div className="cta reveal">
            <h2>{t.cta}</h2>
            <div className="btns">
              <a
                className="btn light"
                href="email:karispjbl0809@gmail.com"
              >
                {t.hire}
              </a>
              <a className="btn line" href="#work">
                {t.view}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="cols">
            <div>
              <strong className="logo">Karchive</strong>
              <p>{t.role}</p>
              <a className="mail" href="email:karispjbl0809@gmail.com">
                karispjbl0809@gmail.com
              </a>
            </div>
            <div>
              <h4>{t.navi}</h4>
              {IDS.map((id, i) => (
                <a key={id} href={"#" + id}>
                  {t.nav[i]}
                </a>
              ))}
            </div>
            <div>
              <h4>{t.find}</h4>
              <a
                href="https://www.fiverr.com/users/lakhdeepkaur/"
                target="_blank"
                rel="noreferrer"
              >
                Fiverr
              </a>
              <a
                href="https://in.pinterest.com/lakhdeepkaurappiesoft/"
                target="_blank"
                rel="noreferrer"
              >
                Pinterest
              </a>
            </div>
          </div>
          <div className="bottom">
            <small>{t.rights}</small>
            <a href="#home" className="top">
              {t.top}
            </a>
          </div>
        </div>
      </footer>
      {cur && (
        <div className="ov" onClick={() => setModal(null)}>
          <div
            className="pop"
            role="dialog"
            aria-modal="true"
            aria-label={cur.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="x"
              onClick={() => setModal(null)}
              aria-label={t.closeL}
            >
              ✕
            </button>
            <div className="pimg" style={{ background: cur.bg }}>
              <div className="browser big" key={"b" + modal}>
                <div className="bbar">
                  <i />
                  <i />
                  <i />
                  <span />
                </div>
                <Shot src={cur.img} />
              </div>
            </div>
            <div className="pinfo" key={"i" + modal + lang}>
              <span className="cat">{cur.c}</span>
              <h3>{cur.title}</h3>
              <div className="longs">
                {cur.long
                  .split(/\n+/)
                  .filter(Boolean)
                  .map((para, i) => (
                    <p key={i} className="long">
                      {para}
                    </p>
                  ))}
              </div>{" "}
              <dl className="facts">
                <div>
                  <dt>{t.roleL}</dt>
                  <dd>{cur.role}</dd>
                </div>
                <div>
                  <dt>{t.toolsL}</dt>
                  <dd className="pills">
                    {cur.tools.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div>
                <h4>{t.hl}</h4>
                <ul className="ticks">
                  {cur.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="pnav">
                <button
                  className="arrow"
                  aria-label={t.prevL}
                  onClick={() => setModal((modal + n - 1) % n)}
                >
                  ←
                </button>
                <button
                  className="arrow"
                  aria-label={t.nextL}
                  onClick={() => setModal((modal + 1) % n)}
                >
                  →
                </button>

                {cur.url && (
                  <a
                    className="btn ghost"
                    href={cur.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.visit} ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
