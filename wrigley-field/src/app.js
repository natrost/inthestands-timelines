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

  /* On inthestands.co or its webflow.io staging copy, keep site links on the same domain */
  if (/inthestands\.(co|webflow\.io)$/.test(location.hostname)) {
    document.querySelectorAll('a[href^="https://www.inthestands.co"]').forEach(a => {
      a.setAttribute('href', a.getAttribute('href').replace('https://www.inthestands.co', '') || '/');
    });
  }

  /* ---------- Stage: one pinned screen; events crossfade as you scroll ---------- */
  const realDoc = document.realDocument || window.document;
  const host = document.host || null;
  const navSel = (host && host.getAttribute('data-nav')) || '.nav_wrapper';
  const track = document.getElementById('timeline'), stage = document.getElementById('stage');
  const slides = [...stage.querySelectorAll(':scope > .slide')];
  const dateBar = document.getElementById('dateBar'), dbGap = document.getElementById('dbGap');
  const W_DEFAULT = 1.25;
  let starts = [], spans = [], total = 0, vh = innerHeight;

  // wrap each normal slide's content so it can animate in and scale to fit
  slides.forEach(sl => {
    if (sl.classList.contains('moment') || sl.classList.contains('count')) return;
    const inner = document.createElement('div'); inner.className = 'slide-inner';
    while (sl.firstChild) inner.appendChild(sl.firstChild);
    sl.appendChild(inner);
  });

  function layout() {
    vh = innerHeight; starts = []; spans = []; total = 0;
    slides.forEach(sl => { const w = parseFloat(sl.dataset.weight || W_DEFAULT); starts.push(total); spans.push(w * vh); total += w * vh; });
    track.style.height = (total + vh) + 'px';
    slides.forEach(fitSlide);
  }
  function fitSlide(sl) {
    const inner = sl.querySelector(':scope > .slide-inner'); if (!inner) return;
    inner.style.transform = 'none';
    const cs = getComputedStyle(sl);
    const avail = sl.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const h = inner.scrollHeight, k = h > avail ? Math.max(.55, avail / h) : 1;
    inner.style.setProperty('--fit', k.toFixed(3));
    inner.style.transform = '';
  }
  stage.querySelectorAll('img').forEach(im => im.addEventListener('load', () => fitSlide(im.closest('.slide'))));
  const trackTop = () => track.getBoundingClientRect().top + scrollY;
  const goTo = i => scrollTo({ top: trackTop() + starts[i] + 2, behavior: reduce ? 'auto' : 'smooth' });

  /* in-page links (the page lives in a shadow root, so the browser won't jump to #ids on its own) */
  document.body.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return;
    const t = document.getElementById(a.getAttribute('href').slice(1)); if (!t) return;
    e.preventDefault();
    const i = slides.indexOf(t);
    if (i >= 0) goTo(i); else t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ---------- Year rail + date menu ---------- */
  const navOl = document.querySelector('#yearNav ol'), menu = document.getElementById('yearMenu'), dateBtn = document.getElementById('dateBtn');
  const years = [...new Set(slides.map(m => m.dataset.year))];
  const links = {}, mlinks = {};
  years.forEach(y => {
    const i = slides.findIndex(m => m.dataset.year === y);
    [[navOl, links], [menu, mlinks]].forEach(([list, store]) => {
      const li = document.createElement('li'), a = document.createElement('a');
      a.href = '#' + slides[i].id; a.textContent = y;
      a.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); closeMenu(); goTo(i); });
      li.appendChild(a); list.appendChild(li); store[y] = a;
    });
  });
  function closeMenu() { menu.hidden = true; dateBtn.setAttribute('aria-expanded', 'false'); }
  dateBtn.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; dateBtn.setAttribute('aria-expanded', String(open)); });
  realDoc.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  let activeYear = null;

  /* date bar stamp: only the digits that change flip, like a hand-turned scoreboard */
  const hsMonth = document.getElementById('hsMonth'), hsYear = document.getElementById('hsYear'), hsDigits = [...hsYear.querySelectorAll('b')];
  let hsMonthFull = 'March';
  const fitMonth = () => { hsMonth.textContent = innerWidth < 420 ? hsMonthFull.slice(0, 3) + '.' : hsMonthFull; };
  function setHeaderStamp(m, y) {
    hsMonthFull = m; fitMonth(); hsYear.setAttribute('aria-label', m + ' ' + y);
    y.split('').forEach((ch, i) => {
      const b = hsDigits[i]; if (b.textContent === ch) return;
      b.textContent = ch;
      if (!reduce) { b.classList.remove('flip'); void b.offsetWidth; b.classList.add('flip'); }
    });
  }
  fitMonth();
  let gapTimer = 0;
  function showGap(from, to) {
    const d = Math.abs(to - from); if (!d) return;
    dbGap.textContent = (to > from ? '+' : '−') + d + (d === 1 ? ' year' : ' years');
    dbGap.classList.add('show'); clearTimeout(gapTimer);
    gapTimer = setTimeout(() => dbGap.classList.remove('show'), 1800);
  }

  /* ---------- Scroll loop ---------- */
  const intro = document.getElementById('intro'), moment = document.getElementById('moment'), count = document.getElementById('count');
  const phrases = [...moment.querySelectorAll('.phrase')];
  const digits = [...document.querySelectorAll('#countDigits b')], countLabel = document.getElementById('countLabel');
  const prog = el => { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); };
  let sang = false, burst = false, lastN = -1, queued = false, active = -1, fadeTimer = 0;
  const siteNav = realDoc.querySelector(navSel);

  function setActive(i) {
    if (i === active) return;
    const prev = slides[active];
    slides.forEach(sl => sl.classList.remove('prev'));
    if (prev) { prev.classList.remove('on'); prev.classList.add('prev'); }
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => { slides.forEach(sl => sl.classList.remove('prev')); }, 900);
    const sl = slides[i]; sl.classList.add('on');
    // only the event on screen plays video
    slides.forEach(x => x.querySelectorAll('video').forEach(v => { if (x === sl && !reduce) { const p = v.play(); if (p) p.catch(() => {}); } else v.pause(); }));
    if (prev) showGap(+prev.dataset.year, +sl.dataset.year);
    active = i;
    const y = sl.dataset.year;
    document.body.dataset.tone = sl.dataset.tone || 'dark';
    setHeaderStamp(sl.dataset.month, y);
    if (y !== activeYear) {
      [links, mlinks].forEach(L => { if (L[activeYear]) { L[activeYear].classList.remove('active'); L[activeYear].removeAttribute('aria-current'); } });
      activeYear = y;
      [links, mlinks].forEach(L => { if (L[y]) { L[y].classList.add('active'); L[y].setAttribute('aria-current', 'step'); } });
    }
  }

  function frame() {
    queued = false;
    const ir = intro.getBoundingClientRect();
    if (ir.bottom > 0) { let p = prog(intro); if (reduce) p = p > .35 ? 1 : 0; drawClouds(p); drawAerial(p); }

    // date bar sits under the site nav while it's on screen, then at the top
    const navB = siteNav ? Math.max(0, siteNav.getBoundingClientRect().bottom) : 0;
    dateBar.style.top = navB + 'px';
    document.body.style.setProperty('--navb', navB + 'px');

    const tr = track.getBoundingClientRect();
    const inStage = tr.top <= 1 && tr.bottom >= vh * .5;
    document.body.classList.toggle('nav-on', tr.top < vh * .35 && tr.bottom > vh * .5);
    const sY = clamp(-tr.top, 0, total - 1);
    let i = 0; while (i < starts.length - 1 && sY >= starts[i + 1]) i++;
    setActive(i);
    const local = clamp((sY - starts[i]) / spans[i]);

    // Harry: the count runs while his slide is up
    const mp = slides[i] === moment ? local : (slides.indexOf(moment) < i ? 1 : 0), n = phrases.length;
    phrases.forEach((el, k) => {
      const d = Math.abs(mp - (k + .5) / n) * n;
      el.style.opacity = clamp(1.15 - d * 1.3).toFixed(3);
      el.style.transform = reduce ? '' : `scale(${(.82 + .28 * clamp(1 - d)).toFixed(3)})`;
    });
    if (inStage && slides[i] === moment && mp > .92 && !sang) { sang = true; stretch(); }
    if (mp < .4) sang = false;

    // 2016: countdown from 108 to 0 while its slide is up
    const ci = slides.indexOf(count);
    const cp = i === ci ? local : (i > ci ? 1 : 0), num = Math.round(108 * (1 - clamp(cp / .7)));
    if (num !== lastN) {
      lastN = num;
      String(num).padStart(3, ' ').split('').forEach((ch, k) => { digits[k].textContent = ch === ' ' ? ' ' : ch; });
      const won = num === 0;
      count.classList.toggle('won', won);
      countLabel.textContent = won ? 'Cubs win! First World Series title since 1908.' : 'Years since the Cubs last won the World Series';
      if (won && !burst && i === ci) { burst = true; confetti(); chord(); }
      if (!won && num > 5) burst = false;
    }
    zoomFrame(i, local);
  }

  /* 2016: the video starts big and centered, then shrinks into its spot as you scroll; the text follows */
  const zoomSlide = stage.querySelector('[data-zoom]');
  const zoomFig = zoomSlide && zoomSlide.querySelector('.clip-video');
  const zoomText = zoomSlide ? [...zoomSlide.querySelectorAll('.split > div, .clip-video figcaption')] : [];
  const ease = t => 1 - Math.pow(1 - t, 3);
  function zoomFrame(i, local) {
    if (!zoomFig) return;
    const zi = slides.indexOf(zoomSlide);
    const p = i === zi ? local : (i > zi ? 1 : 0);
    const t = reduce ? 1 : ease(clamp(p / .55));
    zoomFig.style.transform = 'none';
    const r = zoomFig.getBoundingClientRect();
    const inner = zoomSlide.querySelector('.slide-inner');
    const fit = parseFloat(inner && inner.style.getPropertyValue('--fit')) || 1;
    const sr = stage.getBoundingClientRect(), cs = getComputedStyle(zoomSlide);
    const top = sr.top + parseFloat(cs.paddingTop), availH = sr.bottom - top - 24, availW = sr.width * .9;
    const bigW = Math.min(availW, availH * 16 / 9), s = bigW / r.width;
    const dx = (sr.left + sr.width / 2) - (r.left + r.width / 2), dy = (top + availH / 2) - (r.top + r.height / 2);
    const k = 1 - t;
    zoomFig.style.transform = k > 0.001 ? `translate(${(dx * k / fit).toFixed(1)}px, ${(dy * k / fit).toFixed(1)}px) scale(${(1 + (s - 1) * k).toFixed(4)})` : '';
    zoomFig.classList.toggle('big', k > .02);
    const o = clamp((p - .45) / .2).toFixed(3);
    zoomText.forEach(el => { el.style.opacity = reduce ? '' : o; });
  }
  const req = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', () => { sizeCanvas(cv); fitMonth(); layout(); req(); });
  if (realDoc.fonts && realDoc.fonts.ready) realDoc.fonts.ready.then(() => { layout(); req(); });
  addEventListener('load', () => { layout(); req(); });
  sizeCanvas(cv); layout(); frame();

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
