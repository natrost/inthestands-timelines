/* In the Stands: History of Wrigley Field. Built from src/ by build.py; edit src/, not this file. */
(function () {
  var CSS = ":host{\n  /* Layout: scroll story. Sky intro -> brick & ivy title card -> slides keyed to a hand-turned-scoreboard year stamp, with a fixed year rail (left on desktop, top strip on phones). */\n  --ink:#1c1f1b;\n  --paper:#efe7d4;\n  --scoreboard:#1f3d2e;\n  --ivy:#3e5b2b;\n  --marquee:#b4232c;\n  --navy:#132c5e;\n  --chalk:#f7f2e7;\n  --gold:#e0a531;\n  --muted:#6b675d;\n  --display:\"League Gothic\",\"Oswald\",\"Arial Narrow\",sans-serif;\n  --body:\"Source Serif 4\",Georgia,serif;\n  --ui:\"Barlow\",\"Helvetica Neue\",Arial,sans-serif;\n  --nav-ink:#fff;\n  --hdr:60px;\n  color-scheme:light;\n}\n/* ---------- Site header with docked date stamp ---------- */\n.site-header{position:fixed;top:0;left:0;right:0;height:var(--hdr);z-index:60;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;padding:0 20px;background:rgba(28,31,27,.94);backdrop-filter:blur(8px);color:#fff;border-bottom:1px solid rgba(255,255,255,.08)}\n.brand-wrap{justify-self:start;display:flex;align-items:center;gap:14px;min-width:0}\n.back-link{font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:rgba(255,255,255,.75);border-left:1px solid rgba(255,255,255,.25);padding-left:14px;white-space:nowrap}\n.back-link:hover{color:var(--gold)}\n.crumbs{font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.14em;text-transform:uppercase;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;text-shadow:0 1px 6px rgba(0,0,0,.6)}\n.crumbs a{text-decoration:none;opacity:.85}.crumbs a:hover{color:var(--gold);opacity:1}\n.exits{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:18px}\n.exits .btn.ghost{color:var(--ink)}\n.brand{font-family:var(--display);font-size:26px;line-height:1;text-transform:uppercase;text-decoration:none;letter-spacing:.03em}\n.brand span{color:var(--gold)}\n.hdr-stamp{display:flex;align-items:center;gap:10px;opacity:0;transform:translateY(-6px);transition:opacity .3s,transform .3s}\n.wh-root.nav-on .hdr-stamp{opacity:1;transform:none}\n.hs-month{font-family:var(--display);font-size:24px;text-transform:uppercase;line-height:1;border-bottom:2px solid currentColor;padding-bottom:1px}\n.hs-year{display:flex;gap:3px;padding:3px;background:#122a1e;border:2px solid #fff;perspective:300px}\n.hs-year b{font-family:var(--display);font-weight:400;font-size:32px;line-height:1;width:.62em;text-align:center;background:var(--scoreboard);color:#fff;padding:.06em 0 0;box-shadow:inset 0 -3px 0 rgba(0,0,0,.28);transform-origin:50% 0;display:block}\n.hs-year b.flip{animation:flip .5s cubic-bezier(.2,.8,.2,1)}\n.site-nav{justify-self:end;position:relative}\n.site-nav .links{display:flex;gap:22px;align-items:center;font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.14em;text-transform:uppercase}\n.site-nav .links a{text-decoration:none;opacity:.85}\n.site-nav .links a:hover,.site-nav .links a[aria-current]{opacity:1;color:var(--gold)}\n.menu-back{display:none}\n.menu-btn{display:none;background:none;border:1px solid rgba(255,255,255,.4);color:#fff;font-family:var(--ui);font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;padding:8px 10px;cursor:pointer}\n*{box-sizing:border-box}\n.wh-root{margin:0;background:var(--paper);color:var(--ink);font-family:var(--body);font-size:18px;line-height:1.55}\n.wh-root[data-tone=\"light\"]{--nav-ink:var(--ink)}\nh1,h2,h3{font-family:var(--display);font-weight:400;text-transform:uppercase;letter-spacing:.01em;line-height:.92;margin:0;text-wrap:balance}\np{margin:0}\na{color:inherit}\n:focus-visible{outline:3px solid var(--gold);outline-offset:3px}\n.eyebrow{font-family:var(--ui);font-weight:600;letter-spacing:.2em;text-transform:uppercase;font-size:13px}\n.btn{font-family:var(--ui);font-weight:600;letter-spacing:.12em;text-transform:uppercase;font-size:13px;padding:14px 22px;border:0;background:var(--gold);color:var(--ink);cursor:pointer;border-radius:2px}\n.btn.ghost{background:transparent;color:inherit;border:2px solid currentColor}\n.diamond{width:30px;height:30px;border:2px solid currentColor;transform:rotate(45deg);display:grid;place-items:center}\n.diamond::after{content:\"\";width:8px;height:8px;background:var(--gold);border-radius:50%}\n\n/* ---------- Intro: clouds over the aerial ---------- */\n.intro{height:320vh;position:relative;background:#bdb6a6}\n.intro-sticky{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden}\n.aerial-wrap{position:absolute;inset:0;background:#b7b0a0}\n#aerial{width:100%;height:100%;display:block;overflow:visible}\n#clouds{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}\n.intro-copy{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:var(--navy);padding:0 16px;gap:8px}\n.intro-copy h1{font-size:clamp(76px,16vw,210px)}\n.intro-copy .years{font-family:var(--display);font-size:clamp(26px,4vw,42px)}\n.cue{margin-top:28px;font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.2em;text-transform:uppercase;display:flex;flex-direction:column;align-items:center;gap:16px}\n.intro-note{position:absolute;left:16px;bottom:16px;font-family:var(--ui);font-size:12px;color:#fff;background:rgba(0,0,0,.5);padding:6px 10px;border-radius:3px;opacity:0;max-width:calc(100% - 32px)}\n.then-label{position:absolute;inset:auto 16px 16px auto;text-align:right;color:#fff;text-shadow:0 2px 14px rgba(0,0,0,.6);opacity:0}\n.then-label strong{display:block;font-family:var(--display);font-weight:400;font-size:clamp(34px,6vw,72px);text-transform:uppercase;line-height:1}\n.then-label span{font-family:var(--ui);font-size:12px;letter-spacing:.14em;text-transform:uppercase}\n\n/* ---------- Title card: brick & ivy ---------- */\n.titlecard{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:96px 16px;background:var(--ivy) center/cover;color:var(--chalk);text-align:center;overflow:hidden}\n.titlecard::before{content:\"\";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 45%,rgba(8,14,6,.72),rgba(8,14,6,.2) 75%)}\n.titlecard-inner{position:relative;max-width:1000px;display:flex;flex-direction:column;align-items:center;gap:28px;padding-top:var(--hdr)}\n.marquee{background:var(--marquee);color:#fff;border:3px solid #fff;outline:6px solid var(--marquee);box-shadow:0 14px 34px rgba(0,0,0,.5);padding:8px 26px 10px;border-radius:4px}\n.marquee small{display:block;font-family:var(--ui);font-weight:600;letter-spacing:.25em;font-size:11px}\n.marquee span{font-family:var(--display);font-size:30px;letter-spacing:.06em;text-transform:uppercase}\n.titlecard h2{font-size:clamp(56px,9.5vw,128px);text-shadow:0 4px 26px rgba(0,0,0,.55)}\n.titlecard h2 .small{font-size:.42em;display:inline-block;vertical-align:.6em;border-bottom:3px solid currentColor;line-height:1;margin:0 .15em}\n.titlecard .sub{font-style:italic;font-size:20px;max-width:36ch;text-shadow:0 2px 10px rgba(0,0,0,.6)}\n.title-actions{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}\n.start{display:flex;flex-direction:column;align-items:center;gap:18px;text-decoration:none;font-family:var(--display);font-size:32px;text-transform:uppercase;margin-top:8px}\n\n/* ---------- Year rail ---------- */\n.year-nav{position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:40;padding:12px 18px;opacity:0;pointer-events:none;transition:opacity .4s}\n.wh-root.nav-on .year-nav{opacity:1;pointer-events:auto}\n.year-nav ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}\n.year-nav a{font-family:var(--display);font-size:22px;line-height:1;text-decoration:none;color:var(--nav-ink);opacity:.55;display:block;transition:transform .25s,opacity .25s,color .3s;transform-origin:left center}\n.year-nav a:hover{opacity:.9}\n.year-nav a.active{opacity:1;transform:scale(1.5)}\n.year-nav li+li a.active{margin-top:4px}\n.year-nav .soon{opacity:.25}\n\n/* ---------- Slides ---------- */\n.slide{position:relative;min-height:100vh;padding:calc(var(--hdr) + 70px) 32px 110px 140px;display:flex;flex-direction:column;align-items:center;gap:48px;overflow:hidden}\n.slide.paper{background:\n  radial-gradient(circle at 20% 30%,rgba(120,90,50,.07) 0 2px,transparent 3px) 0 0/140px 120px,\n  radial-gradient(circle at 70% 80%,rgba(120,90,50,.06) 0 1px,transparent 2px) 0 0/90px 70px,\n  var(--paper)}\n.slide.dark{background:var(--ink);color:var(--chalk)}\n.slide.sepia{background:#2b241c;color:var(--chalk)}\n.stamp{display:flex;align-items:flex-end}\n.stamp-month{font-family:var(--display);font-size:clamp(30px,4vw,46px);text-transform:uppercase;border-bottom:3px solid currentColor;padding:0 12px 0 0;margin-bottom:16px;line-height:1}\n.stamp-year{display:flex;gap:5px;padding:8px;background:#122a1e;border:3px solid currentColor;perspective:600px}\n.stamp-year b{font-family:var(--display);font-weight:400;font-size:clamp(62px,8.5vw,108px);line-height:1;width:.6em;text-align:center;background:var(--scoreboard);color:#fff;padding:.08em 0 .02em;box-shadow:inset 0 -5px 0 rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.08);display:block;transform-origin:50% 0}\n.slide.in .stamp-year b{animation:flip .7s cubic-bezier(.2,.8,.2,1) both}\n.stamp-year b:nth-child(2){animation-delay:.08s!important}\n.stamp-year b:nth-child(3){animation-delay:.16s!important}\n.stamp-year b:nth-child(4){animation-delay:.24s!important}\n@keyframes flip{from{transform:rotateX(-95deg);filter:brightness(.4)}to{transform:none;filter:none}}\n\n.split{display:grid;grid-template-columns:1fr 1fr;gap:56px;max-width:1120px;width:100%;align-items:center}\n.slide h3{font-size:clamp(56px,7.5vw,104px)}\n.slide h3 .small{font-size:.45em;display:inline-block;vertical-align:.55em;border-bottom:3px solid currentColor;line-height:1;margin-right:.15em}\n.lede{font-size:19px;max-width:44ch;margin-top:20px}\n.chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}\n.chip{border:2px solid currentColor;padding:9px 14px 8px;font-family:var(--display);font-size:30px;line-height:1}\n.chip small{display:block;font-family:var(--ui);font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;margin-top:4px}\n.funfact{margin-top:28px;display:flex;gap:14px;align-items:flex-start;max-width:44ch;font-size:16px}\n.funfact .tag{flex:none;font-family:var(--ui);font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;background:var(--gold);color:var(--ink);padding:4px 8px;margin-top:3px}\n\n/* photo placeholders */\n.ph{margin:0}\n.ph-img{position:relative;aspect-ratio:4/3;display:grid;place-items:center;text-align:center;padding:28px;\n  background:\n    repeating-radial-gradient(circle at 30% 40%,rgba(255,255,255,.035) 0 1px,transparent 1px 3px),\n    linear-gradient(140deg,#9a8262,#5a4835 55%,#2f261c);\n  color:rgba(255,241,218,.9);font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.16em;text-transform:uppercase;box-shadow:0 18px 36px rgba(0,0,0,.28)}\n.ph-img::after{content:\"\";position:absolute;inset:12px;border:1px dashed rgba(255,241,218,.45);pointer-events:none}\n.ph-img span{max-width:26ch}\n.ph figcaption{font-family:var(--ui);font-size:12px;color:var(--muted);margin-top:12px}\n.dark .ph figcaption,.sepia .ph figcaption{color:rgba(247,242,231,.6)}\n\n/* 1914 artifacts */\n.artifacts{position:relative;display:grid;gap:20px;justify-items:center}\n.blueprint{width:100%;max-width:520px;transform:rotate(-2.5deg);box-shadow:0 18px 36px rgba(0,0,0,.3);display:block}\n.clip{background:#e6dcc3;color:#2a261f;padding:16px 18px 18px;max-width:300px;transform:rotate(3deg) translate(30%,-28px);box-shadow:0 12px 26px rgba(0,0,0,.25);font-family:Georgia,serif}\n.clip .hed{font-family:var(--display);font-size:34px;text-transform:uppercase;line-height:.95}\n.clip p{font-size:13px;line-height:1.4;margin-top:8px;column-count:2;column-gap:12px}\n.clip .note{display:block;font-family:var(--ui);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--marquee);margin-top:8px}\n\n/* then / now */\n.compare{position:relative;width:min(1120px,100%);aspect-ratio:16/8;overflow:hidden;box-shadow:0 22px 44px rgba(0,0,0,.45);--pos:50%}\n.compare .layer{position:absolute;inset:0;background-size:cover;background-position:center}\n.compare .now{clip-path:inset(0 0 0 var(--pos))}\n.compare .divider{position:absolute;top:0;bottom:0;left:var(--pos);width:3px;margin-left:-1.5px;background:#fff;pointer-events:none}\n.compare .divider::after{content:\"\u27f7\";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:46px;height:46px;border-radius:50%;background:#fff;color:var(--ink);display:grid;place-items:center;font-size:20px;box-shadow:0 4px 14px rgba(0,0,0,.4)}\n.compare input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:ew-resize;margin:0}\n.compare .lbl{position:absolute;bottom:14px;font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.14em;text-transform:uppercase;background:rgba(0,0,0,.6);color:#fff;padding:6px 10px;pointer-events:none}\n.compare .lbl.l{left:14px}.compare .lbl.r{right:14px}\n.compare:has(input:focus-visible){outline:3px solid var(--gold);outline-offset:4px}\n.center-copy{text-align:center;display:flex;flex-direction:column;align-items:center}\n.center-copy .lede{margin-left:auto;margin-right:auto}\n\n/* gap bands */\n.gap{background:var(--ink);color:var(--gold);text-align:center;padding:22px 16px;font-family:var(--display);font-size:28px;text-transform:uppercase;letter-spacing:.04em;display:flex;align-items:center;justify-content:center;gap:18px}\n.gap::before,.gap::after{content:\"\";height:2px;width:min(140px,18vw);background:currentColor;opacity:.5}\n\n/* Harry moment */\n.moment{height:330vh;position:relative;background:#0b0b0b;color:#fff}\n.moment-sticky{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;display:grid;place-items:center;\n  background:radial-gradient(ellipse at center,#2a2620 0%,#0b0b0b 70%)}\n.moment-frame{position:absolute;inset:6vh 6vw;border:2px dashed rgba(255,255,255,.18)}\n.phrase{position:absolute;font-family:var(--display);text-transform:uppercase;font-size:clamp(72px,15vw,220px);line-height:.9;text-align:center;padding:0 16px;will-change:transform,opacity}\n.phrase small{display:block;font-size:.35em;color:var(--gold)}\n.moment-note{position:absolute;bottom:calc(6vh + 14px);left:50%;transform:translateX(-50%);font-family:var(--ui);font-size:12px;letter-spacing:.08em;color:rgba(255,255,255,.6);text-align:center;width:min(560px,86vw)}\n\n/* 1982 */\n.circle{position:relative;width:min(360px,72vw);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 40% 35%,#fffdf8,#e6dcc6);display:grid;place-items:center;box-shadow:0 20px 40px rgba(0,0,0,.2);margin:0 auto}\n.circle svg{width:78%}\n.play{position:absolute;width:96px;height:96px;border-radius:50%;border:0;background:var(--gold);color:var(--ink);font-family:var(--ui);font-weight:600;letter-spacing:.12em;font-size:13px;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.25);transition:transform .2s}\n.play:hover{transform:scale(1.06)}\n.quote{font-family:var(--display);font-size:clamp(40px,5vw,64px);text-transform:uppercase;line-height:1;margin-top:26px;color:var(--marquee)}\n\n/* 1988 */\n.stat-split{display:grid;grid-template-columns:1.15fr .85fr;gap:48px;max-width:1120px;width:100%;align-items:center}\n.bignum{font-family:var(--display);font-size:clamp(110px,17vw,240px);line-height:.85;color:#fff}\n.tower{background:#121412;border:2px solid #333;padding:22px;display:grid;grid-template-columns:repeat(6,1fr);gap:12px;max-width:380px;margin:0 auto;width:100%;box-shadow:0 0 80px rgba(255,236,170,.18)}\n.light{aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#fffbe6 0 30%,#ffe9a3 55%,#c9a54a 100%);box-shadow:0 0 18px 4px rgba(255,236,170,.55)}\n.slide.on .light{animation:lighton 1.6s steps(1,end) both}\n@keyframes lighton{0%{filter:brightness(.15);box-shadow:none}30%{filter:brightness(1)}38%{filter:brightness(.2)}45%,100%{filter:none}}\n.tower-legs{width:46%;margin:0 auto;height:70px;border-left:6px solid #333;border-right:6px solid #333}\n\n/* 2016 countdown */\n.count{height:250vh;position:relative;background:var(--navy);color:#fff}\n.count-sticky{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;padding:0 16px;text-align:center}\n.count-stage{display:grid;place-items:center}\n.count-stage>*{grid-area:1/1}\n.count-digits{display:flex;gap:8px;padding:10px;background:#0c1f15;border:4px solid #fff;transition:opacity .4s,transform .4s}\n.count-digits b{font-family:var(--display);font-weight:400;font-size:clamp(110px,20vw,250px);line-height:1;width:.6em;text-align:center;background:var(--scoreboard);color:#fff;padding:.06em 0 0;box-shadow:inset 0 -8px 0 rgba(0,0,0,.28)}\n.count-label{font-family:var(--ui);font-weight:600;letter-spacing:.18em;text-transform:uppercase;font-size:14px;max-width:40ch}\n.flag-wrap{display:flex;align-items:flex-start;opacity:0;transition:opacity .3s}\n.pole{width:8px;height:clamp(260px,46vh,420px);background:linear-gradient(90deg,#9a9a9a,#eee,#8a8a8a);border-radius:4px}\n.flag{width:min(440px,66vw);aspect-ratio:3/2;background:#fff;position:relative;transform-origin:left center;transform:scaleX(0);transition:transform 1s cubic-bezier(.2,.9,.25,1.15);display:grid;place-items:center;overflow:hidden;margin-top:8px}\n.flag span{font-family:var(--display);font-size:clamp(150px,26vw,300px);line-height:.8;color:var(--navy);padding-top:.08em}\n.flag::after{content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(0,0,0,.12) 0,rgba(255,255,255,0) 18%,rgba(0,0,0,.1) 36%);background-size:200% 100%;animation:wave 2.4s linear infinite}\n@keyframes wave{to{background-position:-200% 0}}\n.count.won .count-digits{opacity:0;transform:scale(.8)}\n.count.won .flag-wrap{opacity:1}\n.count.won .flag{transform:scaleX(1)}\n#confetti{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}\n\n/* first game */\n.firstgame{background:var(--gold);color:var(--ink);padding:110px 16px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:22px}\n.firstgame h2{font-size:clamp(54px,8vw,104px);max-width:12ch}\n.firstgame form{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:8px}\n.firstgame label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}\n.firstgame input{font-family:var(--display);font-size:34px;width:150px;padding:6px 14px;border:3px solid var(--ink);background:var(--chalk);color:var(--ink);text-align:center}\n.firstgame .btn{background:var(--ink);color:#fff}\n#fgOut{font-size:20px;max-width:46ch;min-height:2.4em}\n.fg-bar{position:relative;width:min(900px,100%);height:64px;margin-top:4px}\n.fg-bar .line{position:absolute;left:0;right:0;top:20px;height:3px;background:var(--ink)}\n.fg-bar .tick{position:absolute;top:13px;width:3px;height:17px;background:var(--ink);transform:translateX(-50%)}\n.fg-bar .tick em{position:absolute;top:22px;left:50%;transform:translateX(-50%);font-style:normal;font-family:var(--display);font-size:18px}\n.fg-bar .pin{position:absolute;top:0;transform:translateX(-50%);width:20px;height:20px;border-radius:50%;background:var(--marquee);border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.3);opacity:0;transition:left .6s cubic-bezier(.2,.8,.2,1),opacity .3s}\n.fg-bar .pin.on{opacity:1}\n\nfooter{background:var(--ink);color:rgba(247,242,231,.75);padding:56px 16px;font-family:var(--ui);font-size:14px}\nfooter .inner{max-width:900px;margin:0 auto;display:grid;gap:14px}\nfooter h4{margin:0;font-family:var(--display);font-weight:400;font-size:28px;color:var(--chalk);text-transform:uppercase}\nfooter ul{margin:0;padding-left:18px;display:grid;gap:6px}\n\n.sound-fab{position:fixed;right:16px;bottom:16px;z-index:50;font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.12em;text-transform:uppercase;background:rgba(28,31,27,.88);color:#fff;border:1px solid rgba(255,255,255,.25);padding:10px 14px;border-radius:999px;cursor:pointer}\n.sound-fab[aria-pressed=\"true\"]{background:var(--gold);color:var(--ink)}\n\n@media (max-width:1180px){\n  .menu-btn{display:block}\n  .site-nav .links{display:none;position:fixed;top:var(--hdr);right:0;width:min(320px,100%);flex-direction:column;align-items:flex-start;gap:18px;background:var(--ink);padding:20px;border:1px solid rgba(255,255,255,.1);border-top:0}\n  .site-nav.open .links{display:flex}\n}\n@media (max-width:760px){\n  .wh-root{font-size:17px}\n  .site-header{grid-template-columns:auto 1fr auto;padding:0 12px;gap:10px}\n  .brand{font-size:20px}\n  .back-link{display:none}\n  .hdr-stamp{justify-self:center;gap:6px}\n  .hs-month{font-size:18px}\n  .hs-year b{font-size:24px}\n  .menu-btn{display:block}\n  .site-nav .links{display:none;position:fixed;top:var(--hdr);left:0;right:0;flex-direction:column;align-items:flex-start;gap:18px;background:var(--ink);padding:20px 16px;border-bottom:1px solid rgba(255,255,255,.1)}\n  .site-nav.open .links{display:flex}\n  .site-nav .links .menu-back{display:block;color:var(--gold);opacity:1}\n  .year-nav{top:var(--hdr);left:0;right:0;transform:none;padding:0;background:rgba(28,31,27,.82);backdrop-filter:blur(6px);border-top:1px solid rgba(255,255,255,.08)}\n  .year-nav ol{flex-direction:row;overflow-x:auto;gap:20px;padding:10px 16px;scrollbar-width:none}\n  .year-nav ol::-webkit-scrollbar{display:none}\n  .year-nav a{color:#fff;font-size:21px}\n  .year-nav a.active{transform:none;color:var(--gold)}\n  .year-nav li+li a.active{margin-top:0}\n  .slide{padding:calc(var(--hdr) + 72px) 16px 80px;gap:36px}\n  .split,.stat-split{grid-template-columns:1fr;gap:36px}\n  .clip{transform:rotate(2deg)}\n  .compare{aspect-ratio:4/3}\n  .gap{font-size:24px}\n}\n@media (prefers-reduced-motion:reduce){\n  html{scroll-behavior:auto}\n  .slide.on .light,.flag::after,.hs-year b.flip{animation:none}\n  .flag{transition:none}\n}\n\n/* ---------- Added: real photos, new layouts ---------- */\n.wh-root img{max-width:100%;display:block}\n.then-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;pointer-events:none;filter:sepia(.35) contrast(1.05)}\n.print{margin:0;background:#f6f1e4;padding:10px 10px 12px;box-shadow:0 18px 36px rgba(0,0,0,.28);transform:rotate(1.5deg) translate(6%,-18px);max-width:560px}\n.print figcaption,.wide-photo figcaption{font-family:var(--ui);font-size:12px;color:var(--muted);margin-top:8px;line-height:1.4}\n.wide-photo{margin:0;width:min(1240px,100%)}\n.wide-photo img{width:100%;box-shadow:0 18px 40px rgba(0,0,0,.3)}\n.dark .wide-photo figcaption{color:rgba(247,242,231,.6)}\n.names{list-style:none;margin:0;padding:0;display:grid;gap:14px;justify-items:start}\n.names li{display:flex;align-items:baseline;gap:14px;font-family:var(--display);font-size:clamp(44px,6vw,76px);line-height:1;text-transform:uppercase}\n.names small{font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.14em}\n.names .struck b{position:relative;color:var(--muted);font-weight:400}\n.names .struck b::after{content:\"\";position:absolute;left:-4px;right:-4px;top:52%;height:5px;background:var(--marquee);transform:rotate(-2deg)}\n.names .now b{font-weight:400;background:var(--marquee);color:#fff;padding:.06em .25em 0;outline:3px solid #fff;outline-offset:-8px}\n.versus{display:grid;grid-template-columns:1fr 1fr;gap:20px;width:min(900px,100%)}\n.versus .card{border:2px solid rgba(247,242,231,.35);padding:22px;font-size:18px;display:grid;gap:10px}\n.versus .card .eyebrow{color:var(--gold)}\n.slide.dusk{background:linear-gradient(180deg,#f0a35c 0%,#a5506a 28%,#3b2f5c 60%,#0e1230 100%);color:#fff;justify-content:center}\n.slide.dusk .lede{text-shadow:0 2px 12px rgba(0,0,0,.4)}\n.slide.dusk .funfact{text-align:left}\n.stat-card{display:grid;justify-items:center;text-align:center;gap:8px}\n.bignum.ink{color:var(--marquee)}\n.num-circle span{font-family:var(--display);font-size:clamp(110px,16vw,180px);line-height:1;color:var(--scoreboard)}\n.slide.ivywall{background:var(--ivy) center/cover;color:var(--chalk);justify-content:center}\n.slide.ivywall::before{content:\"\";position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(8,14,6,.78),rgba(8,14,6,.35) 80%)}\n.slide.ivywall>*{position:relative}\n.slide.ivywall .bignum{text-shadow:0 6px 30px rgba(0,0,0,.6)}\n@media (max-width:760px){\n  .versus{grid-template-columns:1fr}\n  .print{transform:rotate(1deg)}\n  .names li{font-size:44px;flex-wrap:wrap}\n}\n\n/* ---------- Stage: pinned screen, events crossfade ---------- */\n:host{--bar:68px}\n.track{position:relative;background:var(--ink)}\n.stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;background:var(--ink)}\n.stage>.slide{position:absolute;inset:0;min-height:0;margin:0;padding:calc(var(--navb,0px) + var(--bar) + 28px) 40px 36px 150px;display:flex;flex-direction:column;justify-content:center;align-items:stretch;overflow:hidden;\n  opacity:0;visibility:hidden;z-index:0;transition:opacity .8s ease,visibility 0s linear .8s}\n.stage>.slide.on{opacity:1;visibility:visible;z-index:2;transition:opacity .8s ease}\n.stage>.slide.prev{opacity:1;visibility:visible;z-index:1;transition:none}\n.slide-inner{width:100%;display:flex;flex-direction:column;align-items:center;gap:36px;transform:scale(var(--fit,1));transform-origin:50% 50%}\n.slide-inner>*{opacity:0;transform:translateY(34px);transition:opacity .5s ease,transform .8s cubic-bezier(.2,.8,.2,1)}\n.slide.on .slide-inner>*{opacity:1;transform:none}\n.slide.on .slide-inner>:nth-child(2){transition-delay:.15s}\n.slide.on .slide-inner>:nth-child(3){transition-delay:.3s}\n.slide.on .slide-inner>:nth-child(4){transition-delay:.45s}\n.slide.prev .slide-inner>*{opacity:0;transition:opacity .25s ease}\n.stage>.slide.moment,.stage>.slide.count{padding:0}\n.moment .moment-sticky,.count .count-sticky{position:absolute;inset:0;height:auto;top:auto}\n.count .count-sticky{padding-top:calc(var(--navb,0px) + var(--bar))}\n\n/* ---------- Date bar under the site nav ---------- */\n.datebar{position:fixed;left:0;right:0;top:0;z-index:55;height:var(--bar);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;padding:0 20px;\n  background:rgba(28,31,27,.94);backdrop-filter:blur(8px);color:#fff;border-bottom:1px solid rgba(255,255,255,.08);\n  opacity:0;pointer-events:none;transform:translateY(-6px);transition:opacity .3s,transform .3s}\n.wh-root.nav-on .datebar{opacity:1;pointer-events:auto;transform:none}\n.db-back{justify-self:start;font-family:var(--ui);font-weight:600;font-size:12px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:rgba(255,255,255,.78);white-space:nowrap}\n.db-back:hover{color:var(--gold)}\n.db-center{position:relative;display:flex;align-items:center;justify-content:center}\n.db-date{display:flex;align-items:center;gap:12px;background:none;border:0;color:inherit;cursor:pointer;padding:4px 6px}\n.db-date .hs-month{font-size:28px}\n.db-date .hs-year b{font-size:40px}\n.db-caret{font-size:14px;opacity:.6}\n.db-gap{position:absolute;left:100%;margin-left:10px;white-space:nowrap;font-family:var(--display);font-size:22px;color:var(--gold);opacity:0;transform:translateX(-6px);transition:opacity .3s,transform .3s}\n.db-gap.show{opacity:1;transform:none}\n.year-menu{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%);list-style:none;margin:0;padding:14px 18px;display:grid;grid-template-columns:repeat(4,auto);gap:8px 22px;background:var(--ink);border:1px solid rgba(255,255,255,.14);box-shadow:0 18px 40px rgba(0,0,0,.4)}\n.year-menu[hidden]{display:none}\n.year-menu a{font-family:var(--display);font-size:26px;color:#fff;text-decoration:none;opacity:.7}\n.year-menu a:hover{opacity:1}\n.year-menu a.active{color:var(--gold);opacity:1}\n.db-right{justify-self:end}\n.db-sound{font-family:var(--ui);font-weight:600;font-size:11px;letter-spacing:.12em;text-transform:uppercase;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:8px 12px;border-radius:999px;cursor:pointer}\n.db-sound[aria-pressed=\"true\"]{background:var(--gold);color:var(--ink);border-color:var(--gold)}\n.year-nav{top:calc(50% + var(--bar) / 2)}\n\n@media (max-width:760px){\n  :host{--bar:58px}\n  .year-nav{display:none}\n  .datebar{grid-template-columns:1fr auto;padding:0 12px}\n  .db-back{display:none}\n  .db-center{justify-content:flex-start}\n  .db-date .hs-month{font-size:22px}\n  .db-date .hs-year b{font-size:30px}\n  .db-gap{display:none}\n  .year-menu{left:0;transform:none;grid-template-columns:repeat(3,auto)}\n  .stage>.slide{padding:calc(var(--navb,0px) + var(--bar) + 20px) 16px 24px}\n  .slide-inner{gap:22px}\n}\n@media (prefers-reduced-motion:reduce){\n  .stage>.slide,.stage>.slide.on,.slide-inner>*{transition:none}\n}\n";
  var HTML = "<div class=\"wh-root\" data-tone=\"dark\">\n\n<div class=\"datebar\" id=\"dateBar\">\n  <a class=\"db-back\" href=\"https://www.inthestands.co/overview/chicago-cubs\">\u2039 Chicago Cubs \u00b7 Wrigley Field</a>\n  <div class=\"db-center\">\n    <button class=\"db-date\" id=\"dateBtn\" type=\"button\" aria-expanded=\"false\" aria-controls=\"yearMenu\" aria-label=\"Jump to a year\">\n      <span class=\"hs-month\" id=\"hsMonth\">March</span>\n      <span class=\"hs-year\" id=\"hsYear\" aria-label=\"March 1914\"><b>1</b><b>9</b><b>1</b><b>4</b></span>\n      <span class=\"db-caret\" aria-hidden=\"true\">\u25be</span>\n    </button>\n    <span class=\"db-gap\" id=\"dbGap\" aria-hidden=\"true\"></span>\n    <ol class=\"year-menu\" id=\"yearMenu\" hidden></ol>\n  </div>\n  <div class=\"db-right\"><button class=\"db-sound\" id=\"soundFab\" type=\"button\" aria-pressed=\"false\">Sound off</button></div>\n</div>\n\n<nav class=\"year-nav\" id=\"yearNav\" aria-label=\"Timeline years\"><ol></ol></nav>\n\n<!-- INTRO -->\n<section class=\"intro\" id=\"intro\" aria-label=\"Intro: descending through the clouds to Wrigley Field\">\n  <div class=\"intro-sticky\">\n    <div class=\"aerial-wrap\" id=\"aerialWrap\">\n      <svg id=\"aerial\" viewBox=\"0 0 1000 1000\" preserveAspectRatio=\"xMidYMid slice\" aria-hidden=\"true\">\n        <g id=\"aerialG\">\n          <rect x=\"-800\" y=\"-800\" width=\"2600\" height=\"2600\" fill=\"#b7b0a0\"/>\n          <g id=\"roofs\"></g>\n          <rect x=\"1150\" y=\"-800\" width=\"700\" height=\"2600\" fill=\"#5f8fae\"/>\n          <g stroke=\"#e9e5db\" stroke-linecap=\"square\">\n            <g id=\"grid\" stroke-width=\"9\"></g>\n            <line x1=\"-800\" y1=\"655\" x2=\"1800\" y2=\"655\" stroke-width=\"20\"/>\n            <line x1=\"695\" y1=\"-800\" x2=\"695\" y2=\"1800\" stroke-width=\"20\"/>\n            <line x1=\"-800\" y1=\"315\" x2=\"1800\" y2=\"315\" stroke-width=\"16\"/>\n            <line x1=\"871\" y1=\"-800\" x2=\"-52\" y2=\"1800\" stroke-width=\"22\"/>\n          </g>\n          <!-- ballpark -->\n          <polygon points=\"470,330 680,330 680,640 360,640\" fill=\"#77736b\"/>\n          <path d=\"M398,618 L424,372 Q560,330 662,404 L662,600 Z\" fill=\"#8c877b\"/>\n          <path d=\"M398,618 L428,392 Q555,355 645,415 L645,598 Z\" fill=\"#4f8a3b\"/>\n          <path d=\"M428,392 Q555,355 645,415\" fill=\"none\" stroke=\"#2f5a2a\" stroke-width=\"5\"/>\n          <rect x=\"545\" y=\"342\" width=\"44\" height=\"12\" fill=\"#1f3d2e\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n          <path d=\"M400,612 L494,604 A94,94 0 0 0 410,520 Z\" fill=\"#b5784a\"/>\n          <polygon points=\"412,600 462,596 466,548 416,552\" fill=\"#4f8a3b\"/>\n          <circle cx=\"439\" cy=\"574\" r=\"5\" fill=\"#b5784a\"/>\n          <g fill=\"#fff\"><rect x=\"398\" y=\"609\" width=\"5\" height=\"5\"/><rect x=\"460\" y=\"593\" width=\"5\" height=\"5\"/><rect x=\"463\" y=\"545\" width=\"5\" height=\"5\"/><rect x=\"413\" y=\"549\" width=\"5\" height=\"5\"/></g>\n          <g font-family=\"Barlow, Arial, sans-serif\" font-weight=\"600\" font-size=\"13\" letter-spacing=\"3\" fill=\"#fff\" opacity=\".85\">\n            <text x=\"760\" y=\"672\">ADDISON ST</text>\n            <text x=\"760\" y=\"331\">WAVELAND AVE</text>\n            <text x=\"704\" y=\"160\" transform=\"rotate(90 704 160)\">SHEFFIELD AVE</text>\n            <text x=\"250\" y=\"860\" transform=\"rotate(-70.4 250 860)\">CLARK ST</text>\n          </g>\n        </g>\n      </svg>\n    </div>\n    <img class=\"then-photo\" id=\"thenPhoto\" src=\"{{IMG}}opening-day-1914.jpg\" alt=\"Opening day at the Federal League park at Addison and Clark, April 23, 1914\">\n    <canvas id=\"clouds\"></canvas>\n    <div class=\"intro-copy\" id=\"introCopy\">\n      <p class=\"eyebrow\">In the Stands presents</p>\n      <h1>Wrigley Field</h1>\n      <p class=\"years\">1914 \u2013 Today</p>\n      <div class=\"cue\"><span>Scroll to descend</span><span class=\"diamond\" aria-hidden=\"true\"></span></div>\n    </div>\n    <p class=\"intro-note\" id=\"introNote\">Placeholder aerial. The final version uses a Google Earth Studio camera move here (credit: Google Earth).</p>\n    <div class=\"then-label\" id=\"thenLabel\"><strong>Clark &amp; Addison, 1914</strong><span>Opening day \u00b7 Library of Congress</span></div>\n  </div>\n</section>\n\n<!-- TITLE CARD -->\n<section class=\"titlecard\" id=\"titlecard\">\n  <div class=\"titlecard-inner\">\n    <nav class=\"crumbs\" aria-label=\"Breadcrumb\"><a href=\"https://www.inthestands.co/\">MLB</a><span aria-hidden=\"true\">\u203a</span><a href=\"https://www.inthestands.co/overview/chicago-cubs\">Chicago Cubs \u00b7 Wrigley Field</a><span aria-hidden=\"true\">\u203a</span><span aria-current=\"page\">History</span></nav>\n    <div class=\"marquee\"><small>In the Stands presents</small><span>The Friendly Confines</span></div>\n    <h2><span class=\"small\">The</span> mostly accurate, completely unofficial history <span class=\"small\">of</span> Wrigley Field</h2>\n    <p class=\"sub\">Ivy, lights, a goat, a called shot, and 108 years of waiting.</p>\n    <div class=\"title-actions\">\n      <button class=\"btn\" id=\"soundCta\" type=\"button\">Turn on sound for the seventh-inning stretch</button>\n    </div>\n    <a class=\"start\" href=\"#y1914\">Start the history lesson<span class=\"diamond\" aria-hidden=\"true\"></span></a>\n  </div>\n</section>\n\n<main id=\"timeline\" class=\"track\">\n<div class=\"stage\" id=\"stage\">\n\n  <!-- 1914: paper + artifacts -->\n  <section class=\"slide paper\" id=\"y1914\" data-year=\"1914\" data-month=\"March\" data-tone=\"light\">\n    <div class=\"split\">\n      <div>\n        <h3>Weeghman Park <span class=\"small\">rises</span></h3>\n        <p class=\"lede\">Restaurant owner Charles Weeghman builds a steel-and-concrete ballpark at Clark and Addison, on the grounds of a former Lutheran seminary, for his Federal League club. Architect Zachary Taylor Davis designs it.</p>\n        <div class=\"chips\">\n          <div class=\"chip\">$250K<small>To build</small></div>\n          <div class=\"chip\">~7 weeks<small>Ground to opener</small></div>\n          <div class=\"chip\">14,000<small>Seats</small></div>\n        </div>\n      </div>\n      <div class=\"artifacts\">\n        <svg class=\"blueprint\" viewBox=\"0 0 520 360\" role=\"img\" aria-label=\"Placeholder blueprint of the ballpark plan\">\n          <defs><pattern id=\"bpgrid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M20 0H0V20\" fill=\"none\" stroke=\"rgba(255,255,255,.12)\"/></pattern></defs>\n          <rect width=\"520\" height=\"360\" fill=\"#1f4e7a\"/><rect width=\"520\" height=\"360\" fill=\"url(#bpgrid)\"/>\n          <g fill=\"none\" stroke=\"#e8f1fa\" stroke-width=\"2\">\n            <polygon points=\"180,40 470,40 470,320 110,320\"/>\n            <path d=\"M140,300 L165,75 Q320,40 450,105 L450,295 Z\"/>\n            <path d=\"M140,300 L235,292 A95,95 0 0 0 150,205 Z\"/>\n            <circle cx=\"180\" cy=\"262\" r=\"6\"/>\n          </g>\n          <g fill=\"#e8f1fa\" font-family=\"Barlow, Arial, sans-serif\" font-weight=\"600\" letter-spacing=\"2\">\n            <text x=\"24\" y=\"34\" font-size=\"15\">WEEGHMAN PARK \u00b7 GENERAL PLAN</text>\n            <text x=\"24\" y=\"346\" font-size=\"11\">Z. T. DAVIS, ARCHITECT \u00b7 PLACEHOLDER</text>\n            <text x=\"300\" y=\"346\" font-size=\"11\">CLARK ST / ADDISON ST</text>\n          </g>\n        </svg>\n        <figure class=\"print\">\n          <img src=\"{{IMG}}opening-day-1914.jpg\" alt=\"Panorama of a packed opening day crowd at the new Federal League park, April 23, 1914\">\n          <figcaption>Opening day, April 23, 1914. Chicago 9, Kansas City 1. Kaufmann, Weimer &amp; Fabry Co. / Library of Congress</figcaption>\n        </figure>\n      </div>\n    </div>\n  </section>\n\n  <!-- 1916: photo left / text right -->\n  <section class=\"slide paper\" id=\"y1916\" data-year=\"1916\" data-month=\"April\" data-tone=\"light\">\n    <div class=\"split\">\n      <figure class=\"ph\">\n        <div class=\"ph-img\"><span>Photo: Cubs at Weeghman Park, 1916</span></div>\n        <figcaption>Source to check: Library of Congress, Chicago Daily News collection (public domain)</figcaption>\n      </figure>\n      <div>\n        <h3><span class=\"small\">The</span> Cubs move in</h3>\n        <p class=\"lede\">After the Federal League folds, Weeghman buys the Cubs and moves them to his park. On April 20, 1916, they beat the Reds 7\u20136 in 11 innings in their first game there.</p>\n        <p class=\"funfact\"><span class=\"tag\">Fun fact</span><span>A live bear cub was on hand for the occasion.</span></p>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"slide paper\" id=\"y1926\" data-year=\"1926\" data-month=\"Season\" data-tone=\"light\">\n    <div class=\"split\">\n      <div>\n        <h3>It becomes <span class=\"small\">Wrigley</span> Field</h3>\n        <p class=\"lede\">Chewing-gum magnate William Wrigley Jr. now owns the Cubs, and the park takes his name. An upper deck goes up over the next two seasons.</p>\n      </div>\n      <ol class=\"names\" aria-label=\"The park's names\">\n        <li class=\"struck\"><b>Weeghman Park</b><small>1914\u20131919</small></li>\n        <li class=\"struck\"><b>Cubs Park</b><small>1920\u20131926</small></li>\n        <li class=\"now\"><b>Wrigley Field</b><small>1926\u2013today</small></li>\n      </ol>\n    </div>\n    <figure class=\"wide-photo\">\n      <img src=\"{{IMG}}wrigley-1929.jpg\" alt=\"1929 composite of Wrigley Field with portraits of Cubs players and executives, William Wrigley Jr. at top center\">\n      <figcaption>\"Wrigley Field, home of the Chicago Cubs, 1929.\" William Wrigley Jr. is at top center. Kaufmann &amp; Fabry Co. / Library of Congress</figcaption>\n    </figure>\n  </section>\n\n  <section class=\"slide dark\" id=\"y1932\" data-year=\"1932\" data-month=\"October\" data-tone=\"dark\">\n    <div class=\"center-copy\">\n      <h3><span class=\"small\">The</span> Called Shot</h3>\n      <p class=\"lede\">World Series, Game 3, fifth inning. Babe Ruth has two strikes on him, gestures toward center field, and hits the next pitch there.</p>\n    </div>\n    <div class=\"versus\">\n      <div class=\"card\"><p class=\"eyebrow\">The legend</p><p>Ruth pointed to the bleachers and called his home run before he hit it.</p></div>\n      <div class=\"card\"><p class=\"eyebrow\">The film</p><p>Grainy footage shows a gesture, but nobody agrees if he was pointing at the bleachers, the Cubs dugout, or pitcher Charlie Root.</p></div>\n    </div>\n    <figure class=\"wide-photo\">\n      <img src=\"{{IMG}}crowd-1929.jpg\" alt=\"Panorama of a packed Cubs Park crowd in 1929, with fans standing in the outfield\">\n      <figcaption>The park three years earlier: \"Crowd at Cubs Park, July 27, 1929.\" Kaufmann &amp; Fabry Co. / Library of Congress</figcaption>\n    </figure>\n    <p class=\"funfact\"><span class=\"tag\">Fun fact</span><span>Charlie Root, who threw the pitch, is in the 1929 team composite on the slide before this one.</span></p>\n  </section>\n\n  <!-- 1937: then / now -->\n  <section class=\"slide sepia\" id=\"y1937\" data-year=\"1937\" data-month=\"September\" data-tone=\"dark\">\n    <div class=\"center-copy\">\n      <h3><span class=\"small\">The</span> ivy goes up</h3>\n      <p class=\"lede\">Bill Veeck plants Boston ivy and bittersweet along the new outfield wall. The center-field scoreboard goes up the same year, and it's still turned by hand.</p>\n    </div>\n    <div class=\"compare\" id=\"compare\">\n      <div class=\"layer then\" id=\"wallThen\"></div>\n      <div class=\"layer now\" id=\"wallNow\"></div>\n      <div class=\"divider\"></div>\n      <span class=\"lbl l\">Before the ivy</span><span class=\"lbl r\">Today</span>\n      <input type=\"range\" id=\"compareRange\" min=\"0\" max=\"100\" value=\"50\" aria-label=\"Compare the outfield wall before the ivy and today\">\n    </div>\n  </section>\n\n  <section class=\"slide dusk\" id=\"y1938\" data-year=\"1938\" data-month=\"September\" data-tone=\"dark\">\n    <div class=\"center-copy\">\n      <h3>Homer <span class=\"small\">in the</span> Gloamin'</h3>\n      <p class=\"lede\">With darkness falling and the game about to be called, player-manager Gabby Hartnett homers in the bottom of the ninth to beat the Pirates. The Cubs take first place and go on to win the pennant.</p>\n      <p class=\"funfact\"><span class=\"tag\">Fun fact</span><span>\"Gloaming\" is an old word for dusk. Wrigley wouldn't get lights for another 50 years.</span></p>\n    </div>\n  </section>\n\n  <section class=\"slide paper\" id=\"y1945\" data-year=\"1945\" data-month=\"October\" data-tone=\"light\">\n    <div class=\"stat-split\">\n      <div>\n        <h3><span class=\"small\">The</span> curse <span class=\"small\">(allegedly)</span></h3>\n        <p class=\"lede\">Billy Sianis, owner of the Billy Goat Tavern, brings his goat Murphy to Game 4 of the World Series. The goat is asked to leave. Legend says Sianis declared the Cubs would never win again. They lose the Series to Detroit.</p>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"bignum ink\">71</div>\n        <p class=\"eyebrow\">Years until the Cubs' next World Series</p>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"slide paper\" id=\"y1970\" data-year=\"1970\" data-month=\"May\" data-tone=\"light\">\n    <div class=\"split\">\n      <div class=\"circle num-circle\"><span>500</span></div>\n      <div>\n        <h3>Mr. Cub <span class=\"small\">hits</span> 500</h3>\n        <p class=\"lede\">On May 12, 1970, Ernie Banks hits his 500th career home run, off Atlanta's Pat Jarvis, at Wrigley.</p>\n        <p class=\"quote\">\"Let's play two!\"</p>\n        <p class=\"funfact\"><span class=\"tag\">Fun fact</span><span>1970 is also the Chicago Bears' last season at Wrigley. They played there from 1921 to 1970.</span></p>\n      </div>\n    </div>\n  </section>\n\n  <!-- Harry moment -->\n  <section class=\"slide moment\" data-weight=\"3\" id=\"moment\" data-year=\"1982\" data-month=\"April\" data-tone=\"dark\" aria-label=\"Seventh-inning stretch moment\">\n    <div class=\"moment-sticky\">\n      <div class=\"moment-frame\" aria-hidden=\"true\"></div>\n      <div class=\"phrase\"><small>Alright!</small>Let me hear ya!</div>\n      <div class=\"phrase\">A-one!</div>\n      <div class=\"phrase\">A-two!</div>\n      <div class=\"phrase\">A-three!</div>\n      <p class=\"moment-note\">Full-screen video goes here: Harry leading the stretch, from an official MLB or Cubs YouTube embed. With sound on, an organ plays the opening notes at the end of the count.</p>\n    </div>\n  </section>\n\n  <!-- 1982: circle media -->\n  <section class=\"slide paper\" id=\"y1982\" data-year=\"1982\" data-month=\"April\" data-tone=\"light\">\n    <div class=\"split\">\n      <div class=\"circle\">\n        <svg viewBox=\"0 0 300 120\" aria-hidden=\"true\">\n          <g fill=\"none\" stroke=\"#111\" stroke-width=\"12\">\n            <rect x=\"18\" y=\"18\" width=\"112\" height=\"86\" rx=\"26\"/>\n            <rect x=\"170\" y=\"18\" width=\"112\" height=\"86\" rx=\"26\"/>\n            <path d=\"M130,48 Q150,34 170,48\"/>\n          </g>\n          <rect x=\"30\" y=\"30\" width=\"88\" height=\"62\" rx=\"18\" fill=\"rgba(120,170,210,.25)\"/>\n          <rect x=\"182\" y=\"30\" width=\"88\" height=\"62\" rx=\"18\" fill=\"rgba(120,170,210,.25)\"/>\n        </svg>\n        <button class=\"play\" id=\"playStretch\" type=\"button\">Play</button>\n      </div>\n      <div>\n        <h3>Harry takes <span class=\"small\">the</span> booth</h3>\n        <p class=\"lede\">Harry Caray moves across town from the White Sox and leads Wrigley through \"Take Me Out to the Ball Game\" every seventh inning until 1997. After he dies in 1998, guest conductors keep the tradition going.</p>\n        <p class=\"quote\">\"Holy cow!\"</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- 1988: dark stat split -->\n  <section class=\"slide dark\" id=\"y1988\" data-year=\"1988\" data-month=\"August\" data-tone=\"dark\">\n    <div class=\"stat-split\">\n      <div>\n        <div class=\"bignum\">8.8.88</div>\n        <h3 style=\"margin-top:14px\">Let there be lights</h3>\n        <p class=\"lede\">Wrigley was the last major league park without lights. The first night game started on 8/8/88, then got rained out in the fourth inning. The first official night game came the next night.</p>\n      </div>\n      <div aria-hidden=\"true\">\n        <div class=\"tower\">\n          <span class=\"light\" style=\"animation-delay:.0s\"></span><span class=\"light\" style=\"animation-delay:.1s\"></span><span class=\"light\" style=\"animation-delay:.2s\"></span><span class=\"light\" style=\"animation-delay:.3s\"></span><span class=\"light\" style=\"animation-delay:.4s\"></span><span class=\"light\" style=\"animation-delay:.5s\"></span>\n          <span class=\"light\" style=\"animation-delay:.15s\"></span><span class=\"light\" style=\"animation-delay:.25s\"></span><span class=\"light\" style=\"animation-delay:.35s\"></span><span class=\"light\" style=\"animation-delay:.45s\"></span><span class=\"light\" style=\"animation-delay:.55s\"></span><span class=\"light\" style=\"animation-delay:.65s\"></span>\n          <span class=\"light\" style=\"animation-delay:.3s\"></span><span class=\"light\" style=\"animation-delay:.4s\"></span><span class=\"light\" style=\"animation-delay:.5s\"></span><span class=\"light\" style=\"animation-delay:.6s\"></span><span class=\"light\" style=\"animation-delay:.7s\"></span><span class=\"light\" style=\"animation-delay:.8s\"></span>\n        </div>\n        <div class=\"tower-legs\"></div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"slide ivywall\" id=\"y2014\" data-year=\"2014\" data-month=\"April\" data-tone=\"dark\">\n    <div class=\"center-copy\">\n      <div class=\"bignum\">100</div>\n      <h3>Happy birthday, Wrigley</h3>\n      <p class=\"lede\">The park turns 100 on April 23, 2014. After the season, the 1060 Project renovation begins: rebuilt bleachers, video boards in 2015, and upgrades that run through 2019.</p>\n    </div>\n  </section>\n\n  <!-- 2016 countdown -->\n  <section class=\"slide count\" data-weight=\"2.4\" id=\"count\" data-year=\"2016\" data-month=\"November\" data-tone=\"dark\" aria-label=\"Countdown to the 2016 World Series title\">\n    <div class=\"count-sticky\">\n      <canvas id=\"confetti\"></canvas>\n      <p class=\"eyebrow\">November 2, 2016</p>\n      <div class=\"count-stage\">\n        <div class=\"count-digits\" id=\"countDigits\" aria-live=\"off\"><b>1</b><b>0</b><b>8</b></div>\n        <div class=\"flag-wrap\" aria-hidden=\"true\"><div class=\"pole\"></div><div class=\"flag\"><span>W</span></div></div>\n      </div>\n      <p class=\"count-label\" id=\"countLabel\">Years since the Cubs last won the World Series</p>\n    </div>\n  </section>\n\n  <section class=\"slide paper\" id=\"y2016\" data-year=\"2016\" data-month=\"November\" data-tone=\"light\">\n    <div class=\"split\">\n      <div>\n        <h3><span class=\"small\">The</span> wait is over</h3>\n        <p class=\"lede\">The Cubs win Game 7 in Cleveland, 8\u20137 in 10 innings, for their first title since 1908. Two nights later, the \"W\" flag flies over the marquee. On November 4, the parade starts at Clark and Addison.</p>\n        <p class=\"funfact\"><span class=\"tag\">Fun fact</span><span>Games 3, 4 and 5 were the first World Series games at Wrigley since 1945.</span></p>\n      </div>\n      <figure class=\"ph\">\n        <div class=\"ph-img\"><span>Photo: fans outside the marquee, November 2016</span></div>\n        <figcaption>Source to check: licensed editorial photo (Getty, AP) or a reader submission</figcaption>\n      </figure>\n    </div>\n  </section>\n\n</div>\n</main>\n\n<!-- FIRST GAME -->\n<section class=\"firstgame\" id=\"first-game\">\n  <p class=\"eyebrow\">Your turn in the stands</p>\n  <h2>When was your first game at Wrigley?</h2>\n  <form id=\"fgForm\" novalidate>\n    <label for=\"fgYear\">Year of your first game</label>\n    <input id=\"fgYear\" type=\"number\" inputmode=\"numeric\" min=\"1914\" placeholder=\"1995\">\n    <button class=\"btn\" type=\"submit\">Put me on the timeline</button>\n  </form>\n  <div class=\"fg-bar\" id=\"fgBar\" aria-hidden=\"true\"><div class=\"line\"></div><div class=\"pin\" id=\"fgPin\"></div></div>\n  <p id=\"fgOut\" aria-live=\"polite\">Enter a year to see where you fit in Wrigley's history.</p>\n  <div class=\"exits\">\n    <a class=\"btn\" href=\"https://www.inthestands.co/overview/chicago-cubs\" style=\"text-decoration:none\">\u2039 Back to the Cubs at Wrigley Field guide</a>\n    <a class=\"btn ghost\" href=\"https://www.inthestands.co/overview/chicago-cubs#BARS-RESTAURANTS\" style=\"text-decoration:none\">Plan your trip: Wrigleyville bars \u203a</a>\n  </div>\n</section>\n\n<footer>\n  <div class=\"inner\">\n    <h4>Prototype notes</h4>\n    <ul>\n      <li>Shaded photo boxes mark where real photos go, with a suggested source for each.</li>\n      <li>Aerial: Google Earth Studio camera move, with \"Google Earth\" credit on screen.</li>\n      <li>Harry Caray moment: official MLB or Cubs YouTube embed, not a hosted copy of the broadcast.</li>\n      <li>Real photos so far: 1914 opening day and two 1929 panoramas, all public domain from the Library of Congress. Shaded boxes still need photos.</li>\n      <li>Header links match the live site. The MLB and MLS dropdowns are simplified to single links here.</li>\n    </ul>\n    <p>In the Stands is a fan site and is not affiliated with Major League Baseball or the Chicago Cubs.</p>\n  </div>\n</footer>\n\n</div>";
  var script = document.currentScript;
  var base = script && script.src ? script.src.replace(/[^/]*$/, '') : '';
  var IMG = base + '../img/';

  if (!document.querySelector('link[data-wh-fonts]')) {
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = "https://fonts.googleapis.com/css2?family=League+Gothic&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Barlow:wght@500;600&display=swap"; l.setAttribute('data-wh-fonts', '');
    document.head.appendChild(l);
  }

  function start() {
    var host = document.getElementById('its-wrigley');
    if (!host) { host = document.createElement('div'); host.id = 'its-wrigley'; document.body.appendChild(host); }
    var root = host.attachShadow({ mode: 'open' });
    root.innerHTML = '<style>' + CSS + '</style>' + HTML.split('{{IMG}}').join(IMG);
    var shim = {
      getElementById: function (id) { return root.getElementById(id); },
      querySelector: function (s) { return root.querySelector(s); },
      querySelectorAll: function (s) { return root.querySelectorAll(s); },
      createElement: function (t) { return document.createElement(t); },
      body: root.querySelector('.wh-root'),
      host: host,
      realDocument: document
    };
    (function (document) {
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

    })(shim);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
