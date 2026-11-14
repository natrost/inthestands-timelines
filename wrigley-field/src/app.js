(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const rng = (seed) => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };

  /* ---------- Brick & ivy texture ---------- */
  function wall(w, h, ivy, fall, seed) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d'); const r = rng(seed);
    g.fillStyle = '#b3a58e'; g.fillRect(0, 0, w, h);
    const bw = 64, bh = 24, m = 4;
    for (let row = 0, y = 0; y < h; row++, y += bh) {
      const off = row % 2 ? bw / 2 : 0;
      for (let x = -off; x < w; x += bw) {
        g.fillStyle = `hsl(${10 + r() * 12} ${42 + r() * 16}% ${25 + r() * 14}%)`;
        g.fillRect(x + m / 2, y + m / 2, bw - m, bh - m);
        g.fillStyle = `rgba(0,0,0,${r() * .14})`;
        g.fillRect(x + m / 2, y + bh - m - 3, bw - m, 3);
      }
    }
    if (ivy > 0) {
      const lr = rng(seed + 99);
      const n = Math.round(w * h / 150);
      for (let i = 0; i < n; i++) {
        const x = lr() * w, y = lr() * h, t = y / h;
        const keep = t < fall ? ivy : ivy * Math.max(0, 1 - (t - fall) / (1 - fall) * 1.3);
        if (lr() > keep) continue;
        const s = 6 + lr() * 8, hue = 86 + lr() * 42, light = 14 + lr() * 26;
        g.save(); g.translate(x, y); g.rotate(lr() * Math.PI * 2);
        g.fillStyle = `hsl(${hue} ${36 + lr() * 26}% ${light}%)`;
        g.beginPath(); g.moveTo(0, -s);
        g.bezierCurveTo(s * .95, -s * .9, s * 1.05, s * .25, 0, s);
        g.bezierCurveTo(-s * 1.05, s * .25, -s * .95, -s * .9, 0, -s); g.fill();
        g.strokeStyle = `hsla(${hue} 40% ${light + 20}% / .55)`; g.lineWidth = .8;
        g.beginPath(); g.moveTo(0, -s * .8); g.lineTo(0, s * .9); g.stroke();
        g.restore();
      }
    }
    return c.toDataURL('image/jpeg', .86);
  }
  const ivyWall = `url(${wall(1600, 1000, .97, .74, 7)})`;
  document.getElementById('titlecard').style.backgroundImage = ivyWall;
  document.getElementById('y2014').style.backgroundImage = ivyWall;
  document.getElementById('wallThen').style.backgroundImage = `url(${wall(1400, 700, 0, 1, 3)})`;
  document.getElementById('wallNow').style.backgroundImage = `url(${wall(1400, 700, .98, .9, 3)})`;

  /* then/now slider */
  const compare = document.getElementById('compare');
  document.getElementById('compareRange').addEventListener('input', e => compare.style.setProperty('--pos', e.target.value + '%'));

  /* ---------- Aerial roofs + street grid ---------- */
  (() => {
    const roofs = document.getElementById('roofs'), grid = document.getElementById('grid'), r = rng(11);
    let html = '';
    for (let i = 0; i < 1400; i++) {
      const x = -700 + r() * 1850, y = -700 + r() * 2400, w = 14 + r() * 34, h = 12 + r() * 30, l = 52 + r() * 22;
      html += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="hsl(${25 + r() * 20} ${8 + r() * 12}% ${l}%)"/>`;
      if (r() < .06) html += `<circle cx="${(x + r() * 40).toFixed(0)}" cy="${(y + r() * 40).toFixed(0)}" r="${(8 + r() * 10).toFixed(0)}" fill="hsl(${95 + r() * 20} 30% ${30 + r() * 10}%)"/>`;
    }
    roofs.innerHTML = html;
    let lines = '';
    for (let x = -735; x < 1150; x += 115) lines += `<line x1="${x}" y1="-800" x2="${x}" y2="1800"/>`;
    for (let y = -805; y < 1800; y += 80) lines += `<line x1="-800" y1="${y}" x2="1150" y2="${y}"/>`;
    grid.innerHTML = lines;
  })();

  /* ---------- Clouds ---------- */
  const cv = document.getElementById('clouds'), cx = cv.getContext('2d');
  function sprite(seed) {
    const r = rng(seed), W = 640, H = 360, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d');
    for (let i = 0; i < 28; i++) {
      const x = W * (.16 + r() * .68), rad = 40 + r() * 95;
      const y = H * (.42 + r() * .26) - (Math.abs(x - W / 2) < W * .2 ? r() * H * .16 : 0);
      const gr = g.createRadialGradient(x, y - rad * .25, 0, x, y, rad);
      gr.addColorStop(0, 'rgba(255,255,255,.96)'); gr.addColorStop(.6, 'rgba(244,248,252,.72)'); gr.addColorStop(1, 'rgba(220,230,240,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(x, y, rad, 0, 7); g.fill();
    }
    return c;
  }
  const sprites = [1, 2, 3, 4, 5].map(sprite);
  const cr = rng(42);
  const clouds = Array.from({ length: 30 }, (_, i) => { const x = cr(); return { x, y: cr() * 1.1 - .05, s: .9 + cr() * 1.4, d: .5 + cr() * .9, side: x < .5 ? -1 : 1, sp: sprites[i % 5] }; }).sort((a, b) => a.d - b.d);
  function sizeCanvas(c) { const dpr = Math.min(2, devicePixelRatio || 1); c.width = c.clientWidth * dpr; c.height = c.clientHeight * dpr; c.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0); }
  function drawClouds(p) {
    const W = cv.clientWidth, H = cv.clientHeight; cx.clearRect(0, 0, W, H);
    const haze = clamp(1 - p * 2.6);
    if (haze > 0) { const sk = cx.createLinearGradient(0, 0, 0, H); sk.addColorStop(0, `rgba(150,192,222,${haze})`); sk.addColorStop(1, `rgba(228,237,245,${haze})`); cx.fillStyle = sk; cx.fillRect(0, 0, W, H); }
    const base = Math.max(W, H) / 900;
    for (const c of clouds) {
      const a = clamp(1 - Math.max(0, p - .12) * 1.9 * c.d); if (a <= 0) continue;
      const grow = 1 + p * 2.4 * c.d, w = c.sp.width * c.s * base * grow * .75, h = c.sp.height * c.s * base * grow * .75;
      const x = c.x * W + c.side * p * W * 1.3 * c.d - w / 2, y = c.y * H + (c.y - .5) * p * H * .8 - h / 2;
      cx.globalAlpha = a; cx.drawImage(c.sp, x, y, w, h);
    }
    cx.globalAlpha = 1;
  }

  const ag = document.getElementById('aerialG'), aw = document.getElementById('aerialWrap');
  const thenPhoto = document.getElementById('thenPhoto'), introCopy = document.getElementById('introCopy'), introNote = document.getElementById('introNote'), thenLabel = document.getElementById('thenLabel');
  function drawAerial(p) {
    const s = 1 + p * 1.8, rot = -30 + 30 * clamp(p / .85);
    ag.setAttribute('transform', `translate(530 495) rotate(${rot.toFixed(2)}) scale(${s.toFixed(3)}) translate(-530 -495)`);
    const sep = clamp((p - .78) / .18);
    aw.style.filter = sep ? `sepia(${sep}) contrast(${1 + sep * .12}) brightness(${1 - sep * .14})` : '';
    thenLabel.style.opacity = sep;
    thenPhoto.style.opacity = clamp((p - .86) / .12);
    introNote.style.opacity = clamp((p - .3) / .1) * (1 - sep);
    introCopy.style.opacity = clamp(1 - p * 4);
    introCopy.style.transform = `translateY(${(-p * 140).toFixed(1)}px)`;
  }

  /* ---------- Sound (organ synth) ---------- */
  let actx = null, soundOn = false;
  const fab = document.getElementById('soundFab'), cta = document.getElementById('soundCta');
  function setSound(on) {
    if (on && !actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { on = false; } }
    if (on && actx) actx.resume().catch(() => {});
    soundOn = on;
    fab.setAttribute('aria-pressed', String(on)); fab.textContent = on ? 'Sound on' : 'Sound off';
    cta.textContent = on ? 'Sound is on' : 'Turn on sound for the seventh-inning stretch';
  }
  function organ(f, t0, dur) {
    const g = actx.createGain();
    g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(.16, t0 + .03);
    g.gain.setValueAtTime(.16, t0 + Math.max(.04, dur - .05)); g.gain.linearRampToValueAtTime(0, t0 + dur + .08);
    g.connect(actx.destination);
    [[1, 1], [2, .5], [3, .28], [4, .14], [6, .06]].forEach(([m, v]) => {
      const o = actx.createOscillator(), og = actx.createGain();
      o.type = 'sine'; o.frequency.value = f * m; og.gain.value = v;
      o.connect(og).connect(g); o.start(t0); o.stop(t0 + dur + .12);
    });
  }
  function chord() { if (!soundOn || !actx) return; const t = actx.currentTime + .03; [261.63, 329.63, 392].forEach(f => organ(f, t, .45)); }
  function stretch() {
    if (!soundOn || !actx) return;
    let t = actx.currentTime + .05;
    [[261.63, .5], [523.25, .5], [440, .3], [392, .3], [329.63, .3], [392, .9], [293.66, 1.2]].forEach(([f, d]) => { organ(f, t, d * .92); t += d; });
  }
  fab.addEventListener('click', () => { setSound(!soundOn); chord(); });
  cta.addEventListener('click', () => { setSound(true); chord(); });
  document.getElementById('playStretch').addEventListener('click', () => { if (!soundOn) setSound(true); stretch(); });

  /* ---------- Confetti ---------- */
  const cf = document.getElementById('confetti'); let cfRun = 0;
  function confetti() {
    if (reduce) return;
    sizeCanvas(cf); const g = cf.getContext('2d'), W = cf.clientWidth, H = cf.clientHeight, r = rng(Date.now() | 0);
    const cols = ['#ffffff', '#b4232c', '#e0a531', '#7fb2ff'];
    const ps = Array.from({ length: 160 }, () => ({ x: W / 2 + (r() - .5) * 80, y: H * .45, vx: (r() - .5) * 16, vy: -6 - r() * 12, s: 5 + r() * 6, a: r() * 6, va: (r() - .5) * .3, c: cols[(r() * 4) | 0] }));
    const id = ++cfRun, start = performance.now();
    (function step(now) {
      if (id !== cfRun) return;
      g.clearRect(0, 0, W, H);
      for (const p of ps) { p.vy += .35; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.va; g.save(); g.translate(p.x, p.y); g.rotate(p.a); g.fillStyle = p.c; g.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); g.restore(); }
      if (now - start < 3500) requestAnimationFrame(step); else g.clearRect(0, 0, W, H);
    })(start);
  }

  /* in-page links (the page lives in a shadow root, so the browser won't jump to #ids on its own) */
  document.body.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return;
    const t = document.getElementById(a.getAttribute('href').slice(1)); if (!t) return;
    e.preventDefault(); t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ---------- Year rail ---------- */
  const marks = [...document.querySelectorAll('[data-year]')];
  const navOl = document.querySelector('#yearNav ol');
  const years = [...new Set(marks.map(m => m.dataset.year))];
  const links = {};
  years.forEach(y => {
    const target = marks.find(m => m.dataset.year === y);
    const li = document.createElement('li'), a = document.createElement('a');
    a.href = '#' + target.id; a.textContent = y;
    a.addEventListener('click', e => { e.preventDefault(); target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); });
    li.appendChild(a); navOl.appendChild(li); links[y] = a;
  });
  let activeYear = null;

  /* header stamp: only the digits that change flip, like a hand-turned scoreboard */
  const hsMonth = document.getElementById('hsMonth'), hsYear = document.getElementById('hsYear'), hsDigits = [...hsYear.querySelectorAll('b')];
  let hsMonthFull = 'March';
  const fitMonth = () => { hsMonth.textContent = innerWidth < 420 ? hsMonthFull.slice(0, 3) + '.' : hsMonthFull; };
  function setHeaderStamp(m, y) {
    hsMonthFull = m; fitMonth(); hsYear.setAttribute('aria-label', y);
    y.split('').forEach((ch, i) => {
      const b = hsDigits[i]; if (b.textContent === ch) return;
      b.textContent = ch;
      if (!reduce) { b.classList.remove('flip'); void b.offsetWidth; b.classList.add('flip'); }
    });
  }
  fitMonth();

  const siteNav = document.getElementById('siteNav'), menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', () => { const open = !siteNav.classList.contains('open'); siteNav.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', String(open)); });

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .3 });
  document.querySelectorAll('.slide').forEach(s => io.observe(s));

  /* ---------- Scroll loop ---------- */
  const intro = document.getElementById('intro'), moment = document.getElementById('moment'), count = document.getElementById('count'), timeline = document.getElementById('timeline');
  const phrases = [...moment.querySelectorAll('.phrase')];
  const digits = [...document.querySelectorAll('#countDigits b')], countLabel = document.getElementById('countLabel');
  const prog = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };
  let sang = false, burst = false, lastN = -1, queued = false;

  function frame() {
    queued = false;
    const ir = intro.getBoundingClientRect();
    if (ir.bottom > 0) { let p = prog(intro); if (reduce) p = p > .35 ? 1 : 0; drawClouds(p); drawAerial(p); }

    const mp = prog(moment), n = phrases.length;
    phrases.forEach((el, i) => {
      const d = Math.abs(mp - (i + .5) / n) * n;
      el.style.opacity = clamp(1.15 - d * 1.3).toFixed(3);
      el.style.transform = reduce ? '' : `scale(${(.82 + .28 * clamp(1 - d)).toFixed(3)})`;
    });
    if (mp > .92 && !sang) { sang = true; stretch(); }
    if (mp < .4) sang = false;

    const cp = prog(count), num = Math.round(108 * (1 - clamp(cp / .7)));
    if (num !== lastN) {
      lastN = num;
      String(num).padStart(3, ' ').split('').forEach((ch, i) => { digits[i].textContent = ch === ' ' ? ' ' : ch; });
      const won = num === 0;
      count.classList.toggle('won', won);
      countLabel.textContent = won ? 'Cubs win! First World Series title since 1908.' : 'Years since the Cubs last won the World Series';
      if (won && !burst) { burst = true; confetti(); chord(); }
      if (!won && num > 5) burst = false;
    }

    const tl = timeline.getBoundingClientRect();
    document.body.classList.toggle('nav-on', tl.top < innerHeight * .5 && tl.bottom > innerHeight * .5);
    let cur = null; const line = innerHeight * .45;
    for (const m of marks) if (m.getBoundingClientRect().top < line) cur = m;
    const y = cur ? cur.dataset.year : null;
    document.body.dataset.tone = cur ? cur.dataset.tone : 'dark';
    if (y !== activeYear) {
      if (activeYear && links[activeYear]) links[activeYear].classList.remove('active');
      activeYear = y;
      if (cur) setHeaderStamp(cur.dataset.month, y);
      if (y && links[y]) {
        const a = links[y]; a.classList.add('active'); a.setAttribute('aria-current', 'step');
        const ol = navOl; if (ol.scrollWidth > ol.clientWidth) ol.scrollTo({ left: a.offsetLeft - ol.clientWidth / 2 + a.clientWidth / 2, behavior: reduce ? 'auto' : 'smooth' });
      }
      Object.entries(links).forEach(([k, a]) => { if (k !== y) a.removeAttribute('aria-current'); });
    }
  }
  const req = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', () => { sizeCanvas(cv); fitMonth(); req(); });
  sizeCanvas(cv); frame();

  /* ---------- First game ---------- */
  const NOW = new Date().getFullYear(), SPAN = NOW - 1914;
  const events = [[1914, 'Weeghman Park opened'], [1916, 'the Cubs moved in'], [1926, 'the park became Wrigley Field'], [1932, 'Babe Ruth\'s Called Shot'], [1937, 'the ivy was planted'], [1938, 'the Homer in the Gloamin\''], [1945, 'the Billy Goat curse'], [1970, 'Ernie Banks hit No. 500'], [1982, 'Harry Caray took the booth'], [1988, 'the lights went on'], [2014, 'Wrigley turned 100'], [2016, 'the Cubs won the World Series']];
  const bar = document.getElementById('fgBar'), pin = document.getElementById('fgPin');
  const labeled = new Set([1914, 1937, 1982, 2016]);
  events.forEach(([y]) => {
    const t = document.createElement('div'); t.className = 'tick'; t.style.left = ((y - 1914) / SPAN * 100) + '%';
    if (labeled.has(y)) { const em = document.createElement('em'); em.textContent = y; t.appendChild(em); }
    bar.appendChild(t);
  });
  const out = document.getElementById('fgOut'), input = document.getElementById('fgYear');
  input.max = NOW;
  const yrs = d => `${d} year${d === 1 ? '' : 's'}`;
  document.getElementById('fgForm').addEventListener('submit', e => {
    e.preventDefault();
    const y = parseInt(input.value, 10);
    if (!(y >= 1914 && y <= NOW)) { out.textContent = `Enter a year between 1914 and ${NOW}.`; pin.classList.remove('on'); return; }
    const prev = [...events].reverse().find(ev => ev[0] <= y), next = events.find(ev => ev[0] > y);
    const parts = [];
    if (prev) parts.push(y === prev[0] ? `the same year ${prev[1]}` : `${yrs(y - prev[0])} after ${prev[1]}`);
    if (next) parts.push(`${yrs(next[0] - y)} before ${next[1]}`);
    out.textContent = `${y}: you were in the stands ${parts.join(', and ')}.`;
    pin.style.left = ((y - 1914) / SPAN * 100) + '%'; pin.classList.add('on');
  });
})();
