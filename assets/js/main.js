/* ── TRANSLATIONS ────────────────────────── */
const T = {
  es: {
    skip_nav: 'Saltar al contenido principal',
    nav_about: 'Sobre mí',
    nav_skills: 'Skills',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    ham_open: 'Abrir menú',
    ham_close: 'Cerrar menú',
    hero_hello: 'Hola mundo, soy',
    hero_desc: 'Estudiante de <strong>5to año de Ingeniería en Informática </strong> apasionado por construir soluciones elegantes a problemas complejos. Del algoritmo al producto final.',
    hero_btn_projects: '<i class="fas fa-terminal"></i> ./ver-proyectos',
    hero_btn_cv: '<i class="fas fa-file-code"></i> Descargar CV',
    hero_scroll: 'scroll',
    about_label: 'about_me',
    about_title: 'Un poco sobre <span class="accent">mí</span>',
    about_p1: 'Soy un apasionado de la <span class="hl">tecnología y el desarrollo de software</span>, actualmente cursando Ingeniería en Informática Avanzada. Me encanta tomar problemas complejos y convertirlos en soluciones limpias y eficientes.',
    about_p2: 'Me interesa especialmente la <span class="hl">Inteligencia Artificial</span> y todo lo que hay detrás: desde entrenar modelos hasta integrarlos en sistemas reales. Trabajo con <span class="code">Python</span> y sus ecosistemas de <span class="code">ML/AI</span> para construir cosas que realmente aprendan.',
    about_p3: 'La <span class="hl">ciberseguridad</span> también me apasiona — entender cómo funcionan los ataques para poder defenderme mejor. Cuando no estoy programando, estoy practicando en <span class="code">CTFs</span>, leyendo sobre <span class="code">pentesting</span> o desmontando software para entender qué hay debajo.',
    about_stat1: 'Proyectos completados',
    about_stat2: 'Tecnologías en stack',
    about_stat3: 'Años programando',
    about_stat4: 'Bugs resueltos*',
    skills_label: 'stack_tecnologico',
    skills_title: 'Tecnologías que <span class="accent">utilizo</span>',
    skill_languages: '<i class="fas fa-code"></i> Lenguajes',
    skill_frameworks: '<i class="fas fa-layer-group"></i> Frameworks',
    skill_db: '<i class="fas fa-database"></i> Bases de Datos',
    skill_devops: '<i class="fas fa-server"></i> DevOps &amp; Tools',
    skill_ai: '<i class="fas fa-robot"></i> IA',
    proj_label: 'proyectos_destacados',
    proj_title: 'Lo que he <span class="accent">construido</span>',
    proj_github: 'Ver en GitHub <i class="fas fa-arrow-right"></i>',
    proj_feat: '// Proyecto Destacado',
    proj_aura_desc: 'Plataforma de consulta documental con IA para la Fuerza Aérea Uruguaya. Implementa un pipeline RAG completo sobre documentos institucionales con arquitectura semi-microservicios, LLM local, autenticación JWT con RBAC jerárquico y panel de administración centralizado.',
    proj_aura_btn: '<i class="fas fa-spinner"></i> En desarrollo - Tesis de Grado',
    proj1_title: 'Sakina — Tienda Esotérica',
    proj1_desc: 'Ecommerce completo con catálogo, carrito y pedidos por WhatsApp. Panel de administración propio con Supabase Auth y gestión de productos.',
    proj2_title: '¡Carloncho!',
    proj2_desc: 'Juego mobile multijugador de cartas, diseño minimalista y simple. Uso de supabase, actualmente no hosteado, solución real a problema con amigos.',
    proj3_title: 'Ferreiro &amp; Asociados',
    proj3_desc: 'Landing page para estudio jurídico boutique en Montevideo. Diseño cálido, SEO optimizado, parallax y formulario de contacto.',
    proj4_title: 'Penca - Copa América 2024',
    proj4_desc: '"Penca" de torneo Copa América 2024. Permite a estudiantes UCU registrarse, ingresar predicciones y seguir resultados en tiempo real.',
    proj5_title: 'E-commerce — Testing &amp; QA',
    proj5_desc: 'E-commerce con múltiples bugs, sobre la cual se aplicaron ciclos de testing, identificación de fallos y correcciones en el marco de la materia "Testing".',
    proj6_title: 'Trello Clone',
    proj6_desc: 'Gestor de tareas estilo Trello. Permite crear tableros, listas y tarjetas, con persistencia en base de datos y despliegue containerizado.',
    proj7_title: 'Consultorio Odontológico',
    proj7_desc: 'Sitio web para un consultorio odontológico. Permite gestionar citas, mostrar servicios y testimonios, con diseño responsivo y moderno.',
    contact_label: 'contacto',
    contact_title: '¿Hablamos <span class="accent">?</span>',
    contact_sub: 'Ya sea que tengas un proyecto en mente, quieras colaborar o simplemente charlar sobre tecnología — mi bandeja siempre está abierta.',
    contact_name: 'NOMBRE',
    contact_name_ph: 'Bruno Albín',
    contact_email_label: 'EMAIL',
    contact_email_ph: 'tu@email.com',
    contact_subject: 'ASUNTO',
    contact_subject_ph: '¿De qué quieres hablar?',
    contact_msg: 'MENSAJE',
    contact_msg_ph: 'Cuéntame...',
    contact_send: '<i class="fas fa-paper-plane"></i>&nbsp; Enviar mensaje',
    form_sending: '<i class="fas fa-spinner fa-spin"></i>&nbsp; Enviando...',
    form_sent: '<i class="fas fa-check"></i>&nbsp; ¡Enviado!',
    form_error: '<i class="fas fa-times"></i>&nbsp; Error al enviar',
    footer_copy: '© {year} Bruno Albín — Todos los derechos reservados.',
    footer_l: '<span>// </span>diseñado &amp; construido por <span>mi :/</span>',
    footer_r: 'me gusta el café je :)',
    phrases: [
      'Estudiante de Ingeniería',
      'Full Stack Developer',
      'Problem Solver',
      'Open Source Enthusiast',
      'Linux Enjoyer 🐧',
      'Coffee-Driven Coder ☕'
    ],
  },
  en: {
    skip_nav: 'Skip to main content',
    nav_about: 'About me',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    ham_open: 'Open menu',
    ham_close: 'Close menu',
    hero_hello: "Hello world, I'm",
    hero_desc: '<strong>5th year Computer Engineering</strong> student passionate about building elegant solutions to complex problems. From algorithm to final product.',
    hero_btn_projects: '<i class="fas fa-terminal"></i> ./view-projects',
    hero_btn_cv: '<i class="fas fa-file-code"></i> Download CV',
    hero_scroll: 'scroll',
    about_label: 'about_me',
    about_title: 'A bit about <span class="accent">me</span>',
    about_p1: "I'm passionate about <span class=\"hl\">technology and software development</span>, currently studying Advanced Computer Engineering. I love taking complex problems and turning them into clean, efficient solutions.",
    about_p2: "I'm especially interested in <span class=\"hl\">Artificial Intelligence</span> and everything behind it: from training models to integrating them into real systems. I work with <span class=\"code\">Python</span> and its <span class=\"code\">ML/AI</span> ecosystems to build things that actually learn.",
    about_p3: "<span class=\"hl\">Cybersecurity</span> also fascinates me — understanding how attacks work so I can defend better. When I'm not coding, I'm practicing in <span class=\"code\">CTFs</span>, reading about <span class=\"code\">pentesting</span> or taking apart software to understand what's underneath.",
    about_stat1: 'Completed projects',
    about_stat2: 'Technologies in stack',
    about_stat3: 'Years coding',
    about_stat4: 'Bugs resolved*',
    skills_label: 'tech_stack',
    skills_title: 'Technologies I <span class="accent">use</span>',
    skill_languages: '<i class="fas fa-code"></i> Languages',
    skill_frameworks: '<i class="fas fa-layer-group"></i> Frameworks',
    skill_db: '<i class="fas fa-database"></i> Databases',
    skill_devops: '<i class="fas fa-server"></i> DevOps &amp; Tools',
    skill_ai: '<i class="fas fa-robot"></i> AI',
    proj_label: 'featured_projects',
    proj_title: "What I've <span class=\"accent\">built</span>",
    proj_github: 'View on GitHub <i class="fas fa-arrow-right"></i>',
    proj_feat: '// Featured Project',
    proj_aura_desc: 'AI-powered document consultation platform for the Uruguayan Air Force. Implements a complete RAG pipeline over institutional documents with semi-microservices architecture, local LLM, JWT authentication with hierarchical RBAC and centralized admin panel.',
    proj_aura_btn: '<i class="fas fa-spinner"></i> In development - Senior Thesis',
    proj1_title: 'Sakina — Esoteric Store',
    proj1_desc: 'Full e-commerce with catalog, cart and WhatsApp orders. Custom admin panel with Supabase Auth and product management.',
    proj2_title: '¡Carloncho!',
    proj2_desc: 'Multiplayer mobile card game with minimalist design. Uses Supabase, currently not hosted, a real solution to a problem among friends.',
    proj3_title: 'Ferreiro &amp; Associates',
    proj3_desc: 'Landing page for a boutique law firm in Montevideo. Warm design, SEO optimized, parallax and contact form.',
    proj4_title: 'Penca - Copa América 2024',
    proj4_desc: 'Copa América 2024 tournament bracket game. Allows UCU students to register, enter predictions and follow results in real time.',
    proj5_title: 'E-commerce — Testing &amp; QA',
    proj5_desc: 'E-commerce with multiple bugs, on which testing cycles, fault identification and corrections were applied as part of the "Testing" course.',
    proj6_title: 'Trello Clone',
    proj6_desc: 'Trello-style task manager. Allows creating boards, lists and cards, with database persistence and containerized deployment.',
    proj7_title: 'Dental Clinic',
    proj7_desc: 'Website for a dental clinic. Allows managing appointments, displaying services and testimonials, with responsive and modern design.',
    contact_label: 'contact',
    contact_title: "Let's <span class=\"accent\">talk?</span>",
    contact_sub: 'Whether you have a project in mind, want to collaborate, or just chat about technology — my inbox is always open.',
    contact_name: 'NAME',
    contact_name_ph: 'Bruno Albín',
    contact_email_label: 'EMAIL',
    contact_email_ph: 'your@email.com',
    contact_subject: 'SUBJECT',
    contact_subject_ph: 'What do you want to talk about?',
    contact_msg: 'MESSAGE',
    contact_msg_ph: 'Tell me...',
    contact_send: '<i class="fas fa-paper-plane"></i>&nbsp; Send message',
    form_sending: '<i class="fas fa-spinner fa-spin"></i>&nbsp; Sending...',
    form_sent: '<i class="fas fa-check"></i>&nbsp; Sent!',
    form_error: '<i class="fas fa-times"></i>&nbsp; Error sending',
    footer_copy: '© {year} Bruno Albín — All rights reserved.',
    footer_l: '<span>// </span>designed &amp; built by <span>me :/</span>',
    footer_r: 'I like coffee lol :)',
    phrases: [
      'Engineering Student',
      'Full Stack Developer',
      'Problem Solver',
      'Open Source Enthusiast',
      'Linux Enjoyer 🐧',
      'Coffee-Driven Coder ☕'
    ],
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = T[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key] || typeof t[key] !== 'string') return;
    el.innerHTML = t[key].replace('{year}', new Date().getFullYear());
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key]) el.placeholder = t[key];
  });

  document.getElementById('nav').setAttribute('aria-label',
    lang === 'es' ? 'Navegación principal' : 'Main navigation');

  const langSwitch = document.getElementById('lang-toggle');
  langSwitch.classList.toggle('en', lang === 'en');
  langSwitch.querySelector('.ls-es').classList.toggle('active', lang === 'es');
  langSwitch.querySelector('.ls-en').classList.toggle('active', lang === 'en');
  langSwitch.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');

  const hamIsOpen = document.getElementById('navLinks').classList.contains('open');
  document.getElementById('ham').setAttribute('aria-label',
    hamIsOpen ? t.ham_close : t.ham_open);
}

/* ── CURSOR ─────────────────────────────────── */
const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .11;
  ry += (my - ry) * .11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .tag, .proj-card, .skill-cat').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hov'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hov'));
});

/* ── MATRIX RAIN ────────────────────────────── */
const cvs = document.getElementById('matrix');
const ctx = cvs.getContext('2d');
const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨ0123456789<>{}[]()=/\\|!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const FS = 13;
let cols, drops;

function resizeCvs() {
  cvs.width  = window.innerWidth;
  cvs.height = window.innerHeight;
  cols  = Math.ceil(cvs.width / FS);
  drops = Array.from({length: cols}, () => Math.random() * -50);
}
resizeCvs();
window.addEventListener('resize', resizeCvs);

let matrixPaused = false;
new IntersectionObserver(([e]) => { matrixPaused = !e.isIntersecting; }, { threshold: 0 })
  .observe(document.getElementById('hero'));
document.addEventListener('visibilitychange', () => { matrixPaused = document.hidden; });

function drawMatrix() {
  if (matrixPaused) return;
  ctx.fillStyle = 'rgba(6,13,31,.06)';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  ctx.font = FS + 'px JetBrains Mono, monospace';

  for (let i = 0; i < drops.length; i++) {
    const ch  = CHARS[Math.random() * CHARS.length | 0];
    const x   = i * FS;
    const y   = drops[i] * FS;
    const frac = drops[i] / (cvs.height / FS);

    ctx.fillStyle = Math.random() > .97 ? '#ffffff'
      : frac < .15 ? '#00d4ff'
      : `rgba(0,212,255,${.75 - frac * .5})`;

    ctx.fillText(ch, x, y);

    if (y > cvs.height && Math.random() > .972) drops[i] = 0;
    drops[i] += .5 + Math.random() * .5;
  }
}
setInterval(drawMatrix, 38);

/* ── TYPEWRITER ─────────────────────────────── */
const typedEl = document.getElementById('typed-out');
let pi = 0, ci = 0, del = false;

function typewrite() {
  const phrs = T[currentLang].phrases;
  const cur = phrs[pi % phrs.length];
  typedEl.textContent = del ? cur.slice(0, --ci) : cur.slice(0, ++ci);
  if (!del && ci === cur.length) { del = true; setTimeout(typewrite, 1800); return; }
  if (del && ci === 0)           { del = false; pi = (pi + 1) % phrs.length; }
  setTimeout(typewrite, del ? 55 : 95);
}
typewrite();

/* ── TICKER ─────────────────────────────────── */
const TICK_ITEMS = [
  {i:'fa-solid fa-code',      t:'Python'},
  {i:'fa-brands fa-js',       t:'JavaScript'},
  {i:'fa-brands fa-react',    t:'React'},
  {i:'fa-solid fa-database',  t:'PostgreSQL'},
  {i:'fa-brands fa-docker',   t:'Docker'},
  {i:'fa-brands fa-git-alt',  t:'Git'},
  {i:'fa-brands fa-linux',    t:'Linux'},
  {i:'fa-brands fa-node-js',  t:'Node.js'},
  {i:'fa-solid fa-terminal',  t:'Bash'},
  {i:'fa-solid fa-cloud',     t:'AWS'},
];

const track = document.getElementById('tickerTrack');
[...TICK_ITEMS, ...TICK_ITEMS].forEach((it, idx) => {
  const item = document.createElement('span');
  item.className = 'tick-item';
  item.innerHTML = `<i class="${it.i}"></i>${it.t}`;
  track.appendChild(item);
  if (idx < TICK_ITEMS.length * 2 - 1) {
    const sep = document.createElement('span');
    sep.className = 'tick-sep'; sep.textContent = '◆';
    track.appendChild(sep);
  }
});

/* ── NAV HIDE / ACTIVE ──────────────────────── */
const navbar = document.getElementById('nav');
let lastY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('hide', y > lastY && y > 220);
  lastY = y;

  document.querySelectorAll('.nav-links [data-s]').forEach(a => {
    const sec = document.getElementById(a.dataset.s);
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    a.classList.toggle('active', r.top <= 90 && r.bottom >= 90);
  });
});

/* ── MOBILE MENU ────────────────────────────── */
const hamBtn   = document.getElementById('ham');
const navLinks = document.getElementById('navLinks');

hamBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamBtn.setAttribute('aria-expanded', isOpen);
  hamBtn.setAttribute('aria-label', isOpen ? T[currentLang].ham_close : T[currentLang].ham_open);
});

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamBtn.setAttribute('aria-expanded', 'false');
    hamBtn.setAttribute('aria-label', T[currentLang].ham_open);
  })
);

/* ── LANG TOGGLE ────────────────────────────── */
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => applyLang(currentLang === 'es' ? 'en' : 'es'));
langToggle.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); applyLang(currentLang === 'es' ? 'en' : 'es'); }
});

/* ── SCROLL REVEAL ──────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('on');
    e.target.querySelectorAll('[data-count]').forEach(animCount);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => io.observe(el));

/* ── COUNTER ANIMATION ──────────────────────── */
function animCount(el) {
  const target = +el.dataset.count;
  const t0 = performance.now();
  const dur = 1400;
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target) + (p >= 1 ? '+' : '');
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}

/* ── CONTACT FORM (Formspree) ───────────────── */
async function handleForm(e) {
  e.preventDefault();
  const btn  = document.getElementById('sendBtn');
  const orig = T[currentLang].contact_send;
  const form = e.target;

  const email = form.querySelector('[name=email]').value.trim();
  const msg   = form.querySelector('[name=message]').value.trim();
  if (!email || !msg) return;

  btn.disabled = true;
  btn.innerHTML = T[currentLang].form_sending;

  try {
    const res = await fetch('https://formspree.io/f/mojpzbdn', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    const json = await res.json();
    if (res.ok) {
      btn.innerHTML = T[currentLang].form_sent;
      btn.style.cssText += 'border-color:#00ff88;color:#00ff88;';
      form.reset();
    } else {
      throw new Error(json.errors ? json.errors.map(e => e.message).join(', ') : 'Error');
    }
  } catch (err) {
    btn.innerHTML = T[currentLang].form_error;
    btn.style.cssText += 'border-color:#ff4757;color:#ff4757;';
    console.error('Formspree error:', err);
  } finally {
    btn.disabled = false;
    setTimeout(() => { btn.innerHTML = orig; btn.removeAttribute('style'); }, 3800);
  }
}

/* ── EASTER EGG: escribí "sudo" en cualquier parte ── */
let buf = '';
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  buf += e.key.toLowerCase();
  if (buf.includes('sudo')) {
    buf = '';
    document.querySelectorAll('.sudo-toast').forEach(t => t.remove());
    const toast = document.createElement('div');
    toast.className = 'sudo-toast';
    toast.innerHTML = `<div class="t-cmd">$ sudo rm -rf /</div>
      <div>Permission denied, mortal.<br>Pero que lo hayas intentado dice mucho. 😄<br><br>
      <span style="color:var(--cyan)">// Tip: prueba el código Konami</span></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5200);
  }
  if (buf.length > 30) buf = buf.slice(-15);
});

/* ── KONAMI CODE ────────────────────────────── */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let ki = 0;
document.addEventListener('keydown', e => {
  if (e.key === KONAMI[ki]) ki++; else ki = 0;
  if (ki === KONAMI.length) {
    ki = 0;
    document.querySelectorAll('.sudo-toast').forEach(t => t.remove());
    const toast = document.createElement('div');
    toast.className = 'sudo-toast';
    toast.style.borderColor = 'var(--green)';
    toast.style.boxShadow = '0 0 28px rgba(0,255,136,.25)';
    toast.innerHTML = `<div class="t-cmd" style="color:var(--green)">⬆⬆⬇⬇⬅➡⬅➡ B A</div>
      <div style="color:var(--green)">+30 vidas desbloqueadas.<br>Nunca pensé que alguien lo encontraría. 🎮</div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 5200);
  }
});

/* ── INIT ───────────────────────────────────── */
applyLang(currentLang);
