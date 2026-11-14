#!/usr/bin/env python3
"""Bundle src/ into dist/wrigley.js: one file Webflow (or any page) loads with a single <script> tag.

The page renders inside a shadow root on <div id="its-wrigley">, so the site's own CSS
can't leak in and ours can't leak out. Images load from ../img/ next to dist/.

Run:  python3 build.py
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).parent
FONTS = ("https://fonts.googleapis.com/css2?family=League+Gothic"
         "&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400"
         "&family=Barlow:wght@500;600&display=swap")

css = (ROOT / "src/wrigley.css").read_text()
html = (ROOT / "src/wrigley.html").read_text()
app = (ROOT / "src/app.js").read_text()

bundle = f"""/* In the Stands: History of Wrigley Field. Built from src/ by build.py; edit src/, not this file. */
(function () {{
  var CSS = {json.dumps(css)};
  var HTML = {json.dumps(html)};
  var script = document.currentScript;
  var base = script && script.src ? script.src.replace(/[^/]*$/, '') : '';
  var IMG = base + '../img/';

  if (!document.querySelector('link[data-wh-fonts]')) {{
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = {json.dumps(FONTS)}; l.setAttribute('data-wh-fonts', '');
    document.head.appendChild(l);
  }}

  function start() {{
    var host = document.getElementById('its-wrigley');
    if (!host) {{ host = document.createElement('div'); host.id = 'its-wrigley'; document.body.appendChild(host); }}
    var root = host.attachShadow({{ mode: 'open' }});
    root.innerHTML = '<style>' + CSS + '</style>' + HTML.split('{{{{IMG}}}}').join(IMG);
    var shim = {{
      getElementById: function (id) {{ return root.getElementById(id); }},
      querySelector: function (s) {{ return root.querySelector(s); }},
      querySelectorAll: function (s) {{ return root.querySelectorAll(s); }},
      createElement: function (t) {{ return document.createElement(t); }},
      body: root.querySelector('.wh-root')
    }};
    (function (document) {{
{app}
    }})(shim);
  }}

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
}})();
"""

(ROOT / "dist").mkdir(exist_ok=True)
(ROOT / "dist/wrigley.js").write_text(bundle)
print(f"dist/wrigley.js  {len(bundle):,} bytes")
