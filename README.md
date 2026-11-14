# In the Stands: ballpark timelines

Interactive "history of" pages for [In the Stands](https://www.inthestands.co), one folder per ballpark.

## Wrigley Field

```
wrigley-field/
  src/wrigley.html   markup ({{IMG}} = image folder)
  src/wrigley.css    styles (rendered in a shadow root, so site CSS can't clash)
  src/app.js         scroll effects, year rail, sound, first-game widget
  build.py           bundles src/ into dist/wrigley.js
  dist/wrigley.js    the one file Webflow loads
  img/               public-domain photos (Library of Congress)
  index.html         standalone preview
```

Edit `src/`, run `python3 wrigley-field/build.py`, commit, then tag a version (for example `v0.2.0`).

### In Webflow

The page has the site's Mega Menu, then a div with ID `its-wrigley`, then the Footer.
The date bar docks under the nav (`.nav_wrapper`; override with `data-nav` on the div).
Page footer custom code:

```html
<script src="https://cdn.jsdelivr.net/gh/natrost/inthestands-timelines@v0.3.0/wrigley-field/dist/wrigley.js"></script>
```

Bump the tag in that URL to ship a new version. jsDelivr caches tagged files permanently, so always use a new tag rather than re-pointing an old one.

### Photo credits

- Wrigley Field from the right-field bleachers ("Wrigley Field bleachers in last light"): Jon Gudorf Photography, CC BY-SA 2.0, via Wikimedia Commons.
- "Chicago's New Federal League Park," 1914: Max Rigot Selling Co. Public domain, via Wikimedia Commons.
- Weeghman Park under construction, 1914: Chicago Daily News negatives collection, Chicago History Museum, via Library of Congress (SDN-059261). Public domain.
- Opening day, April 23, 1914: Kaufmann, Weimer & Fabry Co., Library of Congress Prints & Photographs (item 2007663728)
- "Wrigley Field, home of the Chicago Cubs, 1929": Kaufmann & Fabry Co., Library of Congress (item 2007663725)
- "Crowd at Cubs Park, July 27, 1929": Kaufmann & Fabry Co., Library of Congress (item 2007663541)

- Wrigleyville after the 2016 World Series (video): Brandon Zeman, CC BY-SA 2.0, via Wikimedia Commons. Shortened copies made from Wikimedia's own 480p/360p versions.

The three photos were published before 1931 and are public domain in the US. The Library of Congress lists no known restrictions.
