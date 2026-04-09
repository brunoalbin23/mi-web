/* ── AÑO DINÁMICO ───────────────────────────── */
document.getElementById('foot-year').textContent = new Date().getFullYear();

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

// pausa la matrix cuando el hero no es visible o la pestaña está en segundo plano
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
const phrases = [
  'Estudiante de Ingeniería',
  'Full Stack Developer',
  'Problem Solver',
  'Open Source Enthusiast',
  'Linux Enjoyer 🐧',
  'Coffee-Driven Coder ☕'
];
const typedEl = document.getElementById('typed-out');
let pi = 0, ci = 0, del = false;

function typewrite() {
  const cur = phrases[pi];
  typedEl.textContent = del ? cur.slice(0, --ci) : cur.slice(0, ++ci);
  if (!del && ci === cur.length) { del = true; setTimeout(typewrite, 1800); return; }
  if (del && ci === 0)           { del = false; pi = (pi + 1) % phrases.length; }
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
  hamBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamBtn.setAttribute('aria-expanded', 'false');
    hamBtn.setAttribute('aria-label', 'Abrir menú');
  })
);

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
  const orig = btn.innerHTML;
  const form = e.target;

  const email = form.querySelector('[name=email]').value.trim();
  const msg   = form.querySelector('[name=message]').value.trim();
  if (!email || !msg) return;

  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>&nbsp; Enviando...';

  try {
    const res = await fetch('https://formspree.io/f/mojpzbdn', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    const json = await res.json();
    if (res.ok) {
      btn.innerHTML = '<i class="fas fa-check"></i>&nbsp; ¡Enviado!';
      btn.style.cssText += 'border-color:#00ff88;color:#00ff88;';
      form.reset();
    } else {
      throw new Error(json.errors ? json.errors.map(e => e.message).join(', ') : 'Error');
    }
  } catch (err) {
    btn.innerHTML = '<i class="fas fa-times"></i>&nbsp; Error al enviar';
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
