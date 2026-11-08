// Showoff v2.6.0
const VERSION = "2.6.0";

/* ---------- Data ---------- */
// One line per filter: label, and the short note shown in the About panel
const CAT_NOTES = { mac: "Swift, mostly menu bar", ios: "SwiftUI, PencilKit and Expo", web: "Samsung, LG and browser", tools: "Bots, scripts and agent skills" };
const CATS = [
  ["all", "All"],
  ["mac", "Mac"],
  ["ios", "iPhone and iPad"],
  ["web", "TV and web"],
  ["tools", "Tools"],
];

// Featured carousel: the two newest projects (by `added`) plus these fixed picks
const PICKS = ["orbit", "scout"];

const projects = [
  { id: "scout", added: "2026-10-04T15:08:42Z", cat: "tools", name: "Scout", board: "SCOUT", stack: "Python", desc: "A paper-trading bot that scans the market, keeps to its risk limits and explains every simulated trade in plain English.", source: "scout", rec: { src: "assets/scout.mp4", poster: "assets/scout.jpg", cap: "Market mood, simulated positions and trade history in the real dashboard, using synthetic test data." } },
  { id: "hsc", added: "2026-11-07T14:24:48Z", source: "hsc-essay-engine", cat: "web", name: "HSC Essay Engine", board: "ESSAY ENGINE", stack: "HTML · macOS", desc: "Trains HSC English Advanced essays by breaking them into formulas, then drilling each one until it’s automatic. Runs in the browser or as a Mac app." },
  { id: "orbit", added: "2026-11-07T12:42:06Z", cat: "web", name: "Orbit TV Launcher", board: "ORBIT", stack: "HTML · Tizen", desc: "A Samsung TV launcher where the remote moves between planets and each planet opens an app.", rec: { src: "assets/orbit.mp4", poster: "assets/orbit.jpg", cap: "Moving between planets in the browser preview, using the same arrow keys as the TV remote." } },
  { id: "dot", added: "2026-11-07T12:42:00Z", cat: "web", name: "Dot Matrix Home", board: "DOT MATRIX", stack: "HTML · webOS", desc: "An LG TV home screen with dot-matrix type, a clock and colours that follow the selected app.", rec: { src: "assets/dot.mp4", poster: "assets/dot.jpg", cap: "Browsing the sample app list while the dot-matrix colour follows the selection." } },
  { id: "crate", added: "2026-11-07T02:37:42Z", cat: "mac", name: "Crate", board: "CRATE", stack: "Swift · macOS", desc: "Explore your music library as a map you can wander through, with a queue and saved sessions." },
  { id: "barback", added: "2026-11-07T02:37:26Z", cat: "mac", name: "Barback", board: "BARBACK", stack: "Swift · macOS", desc: "A menu bar manager and notch shelf for organising, searching and reaching menu bar items." },
  { id: "ebb", added: "2026-11-07T02:37:33Z", cat: "mac", name: "Ebb", board: "EBB", stack: "Swift · macOS", desc: "Set a charge limit for a plugged-in MacBook, hold a target charge, or charge to full on demand." },
  { id: "farsight", added: "2026-11-07T02:37:58Z", cat: "mac", name: "Farsight", board: "FARSIGHT", stack: "Swift · Apple platforms", desc: "An encrypted remote desktop with a Mac host and viewers for Mac, iPhone and iPad." },
  { id: "switchboard", added: "2026-11-07T02:37:50Z", cat: "mac", name: "Switchboard", board: "SWITCHBOARD", stack: "Swift · macOS", desc: "A dashboard and menu bar app for tracking activity and usage across AI tools." },
  { id: "promptshelf", added: "2026-11-07T02:55:38Z", cat: "mac", name: "Prompt Shelf", board: "PROMPT SHELF", stack: "Swift · Claude Code", desc: "Load, track and copy sets of prompts from the Mac menu bar, with a Claude Code plugin and hook." },
  { id: "replybell", added: "2026-11-08T03:06:29Z", cat: "mac", name: "Reply Bell", board: "REPLY BELL", stack: "Swift · macOS", desc: "A menu bar app that pings and shows a banner when an AI chat finishes replying, and turns amber when it’s waiting on your approval. Watches Claude, Codex, Gemini, Grok Bot and more." },
  { id: "knockswitch", added: "2026-11-07T02:40:03Z", cat: "mac", name: "KnockSwitch", board: "KNOCKSWITCH", stack: "Swift · macOS", desc: "A menu bar experiment that listens for a door knock, pauses media and switches desktops." },
  { id: "pace", added: "2026-11-07T02:36:40Z", cat: "ios", name: "Pace", board: "PACE", stack: "Swift · iOS", desc: "An iPhone planner with a calendar, assessment scanning and focus tools, plus an Apple Watch app and widgets." },
  { id: "pocket", added: "2026-11-07T02:37:17Z", cat: "ios", name: "Pocket Games", board: "POCKET GAMES", stack: "SwiftUI · iOS", desc: "Two iOS games, Meadow Mates and Overpacked, with a companion website." },
  { id: "proofer", added: "2026-11-08T14:04:07Z", cat: "ios", name: "Proofer", board: "PROOFER", stack: "SwiftUI · iPadOS · macOS", desc: "A maths notebook for iPad and Mac. Write your working with Apple Pencil, pin the question, and Proofer checks every line, marking each step right or wrong and explaining exactly where it went wrong." },
  { id: "studylock", added: "2026-11-08T03:25:58Z", cat: "ios", name: "studylock", board: "STUDYLOCK", stack: "SwiftUI · iOS", desc: "A Screen Time study lock for HSC students, with Barnaby the Scholar Quokka. Apps stay locked until you photograph your notes and score 90% on a quiz made from them. Every pass feeds Barnaby and earns gems for his wardrobe." },
  { id: "commons", added: "2026-11-07T02:39:49Z", cat: "ios", name: "Commons", board: "COMMONS", stack: "TypeScript · Expo", desc: "A civic-services wallet prototype with invented data, exploring how to store, show and verify credentials." },
  { id: "study", added: "2026-11-07T02:39:42Z", cat: "web", name: "Study Desk", board: "STUDY DESK", stack: "JavaScript", desc: "HSC study tools for calculus, economics and business, with a visual equation editor and worked solutions." },
  { id: "leviathan", added: "2026-11-07T02:39:54Z", cat: "web", name: "Leviathan Marketplace", board: "LEVIATHAN", stack: "TypeScript · React", desc: "A Sydney aquarium fish marketplace preview with a moderated catalogue, a wanted board and seller enquiries." },
  { id: "linkpocket", added: "2026-11-07T02:40:10Z", cat: "web", name: "Link Pocket", board: "LINK POCKET", stack: "JavaScript · Chrome", desc: "Save a page and close its tab in one click. Browse saved links by domain or search the library." },
  { id: "eyemouse", added: "2026-11-07T02:39:33Z", cat: "tools", name: "Eye Mouse", board: "EYE MOUSE", stack: "Python · OpenCV", desc: "An adaptation of rxhtt’s Eye-To-Mouse for moving the cursor with your gaze, with blink and dwell gestures." },
  { id: "skills", added: "2026-11-07T13:21:44Z", cat: "tools", name: "Claude Skills", board: "SKILLS", stack: "Agent skills", desc: "Two reusable workflows for Claude. One turns NSW syllabuses into study notes, the other sorts saved videos into Notion." },
  { id: "streamclips", added: "2026-10-04T16:43:52Z", cat: "tools", name: "StreamClips", board: "STREAMCLIPS", stack: "Python", desc: "A workflow for preparing authorised creator clips, with versioned releases." },
];

const games = [
  { name: "Carry a Fridge Up a Mountain", img: "assets/roblox/fridge.jpg", place: "134558230651069", tags: "Co-op · 1 to 4 players", desc: "Rope up a stubborn fridge and haul it up steep ramps to the summit, solo or with friends." },
  { name: "One Cart, Four Drivers", img: "assets/roblox/cart.jpg", place: "100034442423754", tags: "Co-op · 1 to 4 players", desc: "Steer, push and balance one shopping cart across ramps and narrow roads as a team." },
  { name: "Verity Tycoon", img: "assets/roblox/tycoon.jpg", place: "99989610571422", tags: "Tycoon · fan game", desc: "Build a Helper Factory with droppers, pets and mystery buttons. Just don’t trust the Helpers." },
  { name: "Verity Obby", img: "assets/roblox/obby.jpg", place: "88163989898384", tags: "Obby · fan game", desc: "A Verity-themed obstacle course. Practise your jumps and compare runs with a friend." },
  { soon: true },
];

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const fmtDate = (iso) => new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric", timeZone: "Australia/Sydney" });
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const ICON = {
  out: '<svg class="icon" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10"/></svg>',
  lock: '<svg class="icon" viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  play: '<svg class="icon" viewBox="0 0 24 24"><path d="m7 4 13 8-13 8z"/></svg>',
  copy: '<svg class="icon" viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
};
const small = {
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/>',
  battery: '<rect x="2" y="7" width="17" height="10" rx="2"/><path d="M22 11v2"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M10 2h4"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10a7 7 0 0 1-14 0M12 19v3"/>',
  cam: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  books: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  bt: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
};
const svg = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${small[n]}</svg>`;

// Timer bag so every demo can stop cleanly
function timers() {
  const ids = new Set(); let raf = 0; let alive = true;
  return {
    after(ms, fn) { const id = setTimeout(() => { ids.delete(id); if (alive) fn(); }, ms); ids.add(id); return id; },
    every(ms, fn) { const id = setInterval(() => alive && fn(), ms); ids.add(id); return id; },
    frame(fn) { const step = (t) => { if (!alive) return; fn(t); raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); },
    clear() { alive = false; ids.forEach((id) => { clearTimeout(id); clearInterval(id); }); cancelAnimationFrame(raf); },
  };
}
// Seeded random so layouts are the same on every visit
function rng(seed) { return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646; }

/* ---------- 5×7 dot font ---------- */
const FONT = {
  A: "01110 10001 10001 11111 10001 10001 10001", B: "11110 10001 10001 11110 10001 10001 11110", C: "01110 10001 10000 10000 10000 10001 01110",
  D: "11110 10001 10001 10001 10001 10001 11110", E: "11111 10000 10000 11110 10000 10000 11111", F: "11111 10000 10000 11110 10000 10000 10000",
  G: "01110 10001 10000 10111 10001 10001 01111", H: "10001 10001 10001 11111 10001 10001 10001", I: "01110 00100 00100 00100 00100 00100 01110",
  J: "00111 00010 00010 00010 00010 10010 01100", K: "10001 10010 10100 11000 10100 10010 10001", L: "10000 10000 10000 10000 10000 10000 11111",
  M: "10001 11011 10101 10101 10001 10001 10001", N: "10001 10001 11001 10101 10011 10001 10001", O: "01110 10001 10001 10001 10001 10001 01110",
  P: "11110 10001 10001 11110 10000 10000 10000", Q: "01110 10001 10001 10001 10101 10010 01101", R: "11110 10001 10001 11110 10100 10010 10001",
  S: "01111 10000 10000 01110 00001 00001 11110", T: "11111 00100 00100 00100 00100 00100 00100", U: "10001 10001 10001 10001 10001 10001 01110",
  V: "10001 10001 10001 10001 10001 01010 00100", W: "10001 10001 10001 10101 10101 10101 01010", X: "10001 10001 01010 00100 01010 10001 10001",
  Y: "10001 10001 01010 00100 00100 00100 00100", Z: "11111 00001 00010 00100 01000 10000 11111",
  0: "01110 10001 10011 10101 11001 10001 01110", 1: "00100 01100 00100 00100 00100 00100 01110", 2: "01110 10001 00001 00010 00100 01000 11111",
  3: "11111 00010 00100 00010 00001 10001 01110", 4: "00010 00110 01010 10010 11111 00010 00010", 5: "11111 10000 11110 00001 00001 10001 01110",
  6: "00110 01000 10000 11110 10001 10001 01110", 7: "11111 00001 00010 00100 01000 01000 01000", 8: "01110 10001 10001 01110 10001 10001 01110",
  9: "01110 10001 10001 01111 00001 00010 01100", ":": "00000 01100 01100 00000 01100 01100 00000", ".": "00000 00000 00000 00000 00000 01100 01100",
  "-": "00000 00000 00000 11111 00000 00000 00000", "+": "00000 00100 00100 11111 00100 00100 00000", "/": "00001 00010 00010 00100 01000 01000 10000",
  ">": "01000 00100 00010 00001 00010 00100 01000", " ": "00000 00000 00000 00000 00000 00000 00000",
};
const textWidth = (s) => s.length * 6 - 1;
function plot(cells, cols, rows, str, x, y, color) {
  [...str.toUpperCase()].forEach((ch, i) => {
    const g = (FONT[ch] || FONT[" "]).split(" ");
    g.forEach((row, ry) => [...row].forEach((b, rx) => {
      const cx = x + i * 6 + rx, cy = y + ry;
      if (b === "1" && cx >= 0 && cx < cols && cy >= 0 && cy < rows) cells[cy * cols + cx] = color;
    }));
  });
}
function paint(ctx, w, h, cols, rows, cells, off, bg) {
  const p = w / cols, r = p * 0.36;
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
    ctx.fillStyle = cells[y * cols + x] || off;
    ctx.beginPath(); ctx.arc(x * p + p / 2, y * p + p / 2, r, 0, 6.2832); ctx.fill();
  }
}
function fitCanvas(c, w, h) {
  const d = Math.min(devicePixelRatio || 1, 2);
  c.width = w * d; c.height = h * d;
  const ctx = c.getContext("2d"); ctx.scale(d, d); return ctx;
}

/* ---------- Hero board ---------- */
function initBoard() {
  const canvas = $("#board"); if (!canvas) return;
  const W = 760, H = 260, COLS = 76, ROWS = 26;
  canvas.style.aspectRatio = `${W} / ${H}`;
  const ctx = fitCanvas(canvas, W, H);
  const list = projects.filter((p) => p.board);
  const dots = $("#board-dots");
  dots.innerHTML = list.map((p, i) => `<button type="button" aria-label="${esc(p.name)}" data-i="${i}"></button>`).join("");
  let idx = 0, prev = 0, changed = 0, hold = false, visible = true;
  const amber = "#f5a524", dim = "rgba(239,233,222,0.5)", off = "rgba(239,233,222,0.05)";

  function frameFor(i) {
    const cells = new Array(COLS * ROWS), p = list[i];
    const now = new Date();
    const clock = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    plot(cells, COLS, ROWS, `${String(i + 1).padStart(2, "0")}/${list.length}`, 3, 2, dim);
    plot(cells, COLS, ROWS, clock, COLS - 3 - textWidth(clock), 2, dim);
    plot(cells, COLS, ROWS, p.board, 3, 10, amber);
    plot(cells, COLS, ROWS, p.stack.replace(/[·]/g, " ").replace(/\s+/g, " "), 3, 18, dim);
    return cells;
  }
  function select(i) {
    prev = idx; idx = (i + list.length) % list.length; changed = performance.now();
    const p = list[idx];
    $("#board-stack").textContent = p.stack;
    $("#board-desc").textContent = p.desc;
    $("#board-link").href = `#p-${p.id}`;
    const cap = $("#board-copy"); cap.classList.remove("swap"); void cap.offsetWidth; cap.classList.add("swap");
    [...dots.children].forEach((b, n) => b.setAttribute("aria-current", n === idx ? "true" : "false"));
  }
  $("#board-link").addEventListener("click", (e) => {
    const card = document.querySelector(e.currentTarget.getAttribute("href")); if (!card) return;
    e.preventDefault();
    const all = $('#filters [data-f="all"]'); if (card.hidden && all) all.click();
    card.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    card.classList.remove("flash"); void card.offsetWidth; card.classList.add("flash");
  });
  dots.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { select(+b.dataset.i); last = performance.now(); } });
  canvas.closest(".board").addEventListener("mouseenter", () => (hold = true));
  canvas.closest(".board").addEventListener("mouseleave", () => (hold = false));
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);

  let last = performance.now();
  select(0); prev = 0;
  function draw(t) {
    requestAnimationFrame(draw);
    if (!visible) return;
    if (!hold && !reduced && t - last > 3600) { select(idx + 1); last = t; }
    const k = reduced ? 1 : Math.min(1, (t - changed) / 420);
    const a = frameFor(prev), b = frameFor(idx);
    const edge = Math.floor(k * (COLS + 2));
    const cells = new Array(COLS * ROWS);
    for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
      const n = y * COLS + x;
      cells[n] = x < edge - 1 ? b[n] : x <= edge ? (b[n] || a[n] ? "rgba(239,233,222,0.85)" : off) : a[n];
    }
    paint(ctx, W, H, COLS, ROWS, cells, off, "#080807");
  }
  requestAnimationFrame(draw);
}

/* ---------- Demos ---------- */
const demos = {
  scout(s, T) {
    s.innerHTML = `<div class="d-scout"><div><div style="display:flex;gap:20px"><div class="stat"><span>Balance</span><b id="bal">A$1,000</b></div><div class="stat"><span>vs holding BTC</span><b id="vs" style="color:var(--pos)">+0.0%</b></div></div>
      <svg viewBox="0 0 200 80" preserveAspectRatio="none"><path d="M0 20H200M0 40H200M0 60H200" stroke="rgba(239,233,222,.06)"/><path id="btc" fill="none" stroke="rgba(239,233,222,.35)" stroke-width="1.5"/><path id="acct" fill="none" stroke="#f5a524" stroke-width="2" stroke-linecap="round"/></svg></div>
      <div class="mood"><span>Market mood</span><b>RISK_ON</b><div id="pos"></div></div></div>`;
    const r = rng(11), N = 40, a = [40], b = [40];
    for (let i = 1; i < N; i++) { b.push(b[i - 1] + (r() - 0.48) * 6); a.push(a[i - 1] + (r() - 0.42) * 4); }
    const path = (arr, k) => arr.slice(0, k).map((v, i) => `${i ? "L" : "M"}${(i / (N - 1)) * 200} ${80 - Math.max(4, Math.min(76, v))}`).join("");
    const trades = [["ETH", "long", "+A$4.20"], ["SOL", "long", "+A$5.58"], ["BTC", "long", "−A$1.71"]];
    let k = 2;
    T.every(120, () => {
      k = k >= N ? 2 : k + 1;
      $("#acct", s).setAttribute("d", path(a, k)); $("#btc", s).setAttribute("d", path(b, k));
      const bal = 1000 + (a[k - 1] - 40) * 1.6, diff = ((a[k - 1] - b[k - 1]) / 40) * 2;
      $("#bal", s).textContent = `A$${bal.toLocaleString("en-AU", { maximumFractionDigits: 0 })}`;
      $("#vs", s).textContent = `${diff >= 0 ? "+" : "−"}${Math.abs(diff).toFixed(1)}%`; $("#vs", s).style.color = diff >= 0 ? "var(--pos)" : "var(--neg)";
      if (k % 12 === 0) { const t = trades[(k / 12 - 1) % 3]; $("#pos", s).innerHTML = `<div class="pill">${t[0]} ${t[1]}<br><span style="color:${t[2][0] === "+" ? "var(--pos)" : "var(--neg)"}">${t[2]}</span></div>`; }
    });
  },

  hsc(s, T) {
    const parts = [["Concept", "#f5d58a", "Lawson shows"], ["Technique", "#a8d4b5", "through stark imagery of the bush"], ["Effect", "#b9cdea", "that isolation tests resilience"]];
    s.innerHTML = `<div class="d-hsc"><span class="tag">F1 · Thesis</span><h5>Thesis formula</h5>
      <div class="formula">${parts.map(([n, c], i) => `${i ? '<span class="plus">+</span>' : ""}<span class="slot" style="--c:${c}">${n}</span>`).join("")}</div>
      <div class="out" id="out"></div><div class="foot"><span>Drill streak <b id="streak">0</b></span><span>Band 6 check</span></div></div>`;
    const slots = [...s.querySelectorAll(".slot")], out = $("#out", s); let streak = 0;
    const run = () => {
      slots.forEach((x) => x.classList.remove("on")); out.innerHTML = "";
      parts.forEach(([, c, text], i) => T.after(600 + i * 800, () => { slots[i].classList.add("on"); out.insertAdjacentHTML("beforeend", `${i ? " " : ""}<span style="background:${c}">${text}</span>`); }));
      T.after(600 + 3 * 800 + 300, () => ($("#streak", s).textContent = ++streak));
    };
    run(); T.every(5400, run);
  },

  replybell(s, T) {
    s.innerHTML = `<div class="d-bell" style="position:absolute;inset:0">
      <div class="menubar"><span class="mb-ico active"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></span><span class="mb-ico">${svg("wifi")}</span><span class="mono" style="font-size:11px">12:30</span></div>
      <div class="banner"><span class="b-ico"></span><span class="b-text"></span></div>
      <div class="chat"><div class="chat-top"><span class="lights"><i></i><i></i><i></i></span><span class="mono" id="app">Claude</span></div>
        <div class="msg me">Can you tidy up this function?</div><div class="msg ai"><i style="width:80%"></i><i style="width:64%"></i><i style="width:72%"></i></div>
        <div class="composer"><span id="cstate">Generating</span><span class="ctrl" id="ctrl"></span></div></div>
      <span class="hint mono" id="hint">You’re in another app</span></div>`;
    const el = $(".d-bell", s), banner = $(".banner", s), lines = [...s.querySelectorAll(".msg.ai i")];
    const rounds = [["Claude", "done", "Claude finished replying"], ["Codex", "input", "Codex needs your approval"], ["Gemini", "done", "Gemini finished replying"]];
    let k = 0;
    const run = () => {
      const [app, kind, text] = rounds[k++ % rounds.length];
      $("#app", s).textContent = app; banner.className = "banner"; el.classList.add("gen");
      $("#cstate", s).textContent = "Generating"; $("#ctrl", s).className = "ctrl stop";
      lines.forEach((l) => (l.style.transform = "scaleX(0)"));
      lines.forEach((l, i) => T.after(300 + i * 500, () => (l.style.transform = "scaleX(1)")));
      T.after(1900, () => {
        el.classList.remove("gen"); $("#cstate", s).textContent = kind === "input" ? "Waiting for approval" : "Ready"; $("#ctrl", s).className = "ctrl send";
        $(".b-ico", banner).textContent = kind === "input" ? "!" : "✓"; $(".b-text", banner).textContent = text;
        banner.className = `banner on ${kind}`;
      });
      T.after(4200, () => (banner.className = "banner"));
    };
    run(); T.every(4800, run);
  },

  proofer(s, T) {
    const lines = [["(x − 2)(x − 3) = 0", "ok"], ["x − 2 = 0  or  x − 3 = 0", "ok"], ["x = 2  or  x = −3", "bad"]];
    s.innerHTML = `<div class="d-proof">
      <div class="pf-q"><span class="pf-tag mono"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16h14v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></svg>Question</span>Solve x² − 5x + 6 = 0</div>
      ${lines.map(([t, k]) => `<div class="pf-line" data-k="${k}"><span class="pf-ink">${t}</span><span class="pf-mark"></span></div>`).join("")}
      <button type="button" class="pf-btn" tabindex="-1">Check working</button>
      <div class="pf-card"><b>Step 3 · Sign error</b><span>x − 3 = 0 gives x = 3, not −3</span></div></div>`;
    const el = $(".d-proof", s), ls = [...s.querySelectorAll(".pf-line")], btn = $(".pf-btn", s);
    const run = () => {
      el.classList.remove("checked"); btn.classList.remove("press");
      ls.forEach((l) => { l.classList.remove("on", "ok", "bad"); });
      ls.forEach((l, i) => T.after(300 + i * 700, () => l.classList.add("on")));
      T.after(2500, () => btn.classList.add("press"));
      T.after(2800, () => btn.classList.remove("press"));
      ls.forEach((l, i) => T.after(3000 + i * 350, () => l.classList.add(l.dataset.k)));
      T.after(3000 + ls.length * 350 + 150, () => el.classList.add("checked"));
    };
    run(); T.every(7200, run);
  },

  studylock(s, T) {
    const needs = [["Thirst", "English", 72], ["Hunger", "Maths", 18], ["Energy", "Economics", 64], ["Rest", "Business", 81], ["Nature", "Geography", 55]];
    s.innerHTML = `<div class="d-lock"><div class="phone"><span class="island"></span><div class="screen">
      <div class="lk-top"><b>studylock</b><span class="mono lk-gems">◆ <span id="lk-gems">240</span></span></div>
      <div class="lk-pet"><img src="assets/studylock-barnaby.png" alt="" width="32" height="32"><span class="lk-bubble" id="lk-say">My tummy! Maths, please</span></div>
      <div class="lk-needs">${needs.map(([n, sub, v], i) => `<div class="lk-need${i === 1 ? " low" : ""}"><span>${n} <em>${sub}</em></span><span class="lk-track"><i style="width:${v}%"></i></span></div>`).join("")}</div>
      <div class="lk-foot mono" id="lk-foot">Apps locked · 25:00 focus</div>
    </div></div></div>`;
    const el = $(".d-lock", s), say = $("#lk-say", s), foot = $("#lk-foot", s), gems = $("#lk-gems", s);
    const hunger = s.querySelectorAll(".lk-need")[1], bar = $("i", hunger);
    const run = () => {
      let total = 240; gems.textContent = total;
      el.classList.remove("open"); hunger.classList.add("low"); bar.style.width = "18%";
      say.textContent = "My tummy! Maths, please"; foot.textContent = "Apps locked · 25:00 focus";
      T.after(1400, () => { say.textContent = "YES! Feeding time! Show me the proof!"; foot.textContent = "3 pages of notes scanned"; });
      T.after(2800, () => (foot.textContent = "Quiz · 5 questions"));
      T.after(3800, () => { foot.textContent = "Scored 92% · apps unlocked"; el.classList.add("open"); hunger.classList.remove("low"); bar.style.width = "100%"; total += 115; gems.textContent = total; say.textContent = "Full! +115 gems"; });
    };
    run(); T.every(6800, run);
  },

  orbit(s, T) {
    const apps = [["Netflix", "#e50914", 22], ["Disney+", "#3e7bfa", 16], ["YouTube", "#ff4a4a", 18], ["Stremio", "#8d6bf0", 15], ["Stan", "#2c8cf0", 14], ["Settings", "#c9a35b", 12]];
    s.innerHTML = `<div class="d-orbit"><div class="stars"></div><div class="ring"></div><div class="sun"></div>
      ${apps.map(([, c, z]) => `<div class="planet" style="width:${z}px;height:${z}px;background:radial-gradient(circle at 35% 30%, rgba(255,255,255,.55), ${c} 45%, rgba(0,0,0,.6))"></div>`).join("")}
      <div class="label"><b></b><span></span></div>
      <div class="keys"><button class="key" data-d="-1" aria-label="Previous planet">←</button><button class="key" data-d="1" aria-label="Next planet">→</button></div></div>`;
    const planets = [...s.querySelectorAll(".planet")], label = $(".label", s), n = apps.length;
    let sel = 0, base = Math.PI / 2, userAt = 0;
    const target = () => Math.PI / 2 - sel * (2 * Math.PI / n);
    const setLabel = () => { label.style.color = apps[sel][1] === "#e50914" ? "#ff3b45" : apps[sel][1]; $("b", label).textContent = apps[sel][0]; };
    setLabel();
    const move = (d) => { sel = (sel + d + n) % n; setLabel(); };
    s.querySelector(".keys").onclick = (e) => { const k = e.target.closest("[data-d]"); if (k) { move(+k.dataset.d); userAt = Date.now(); } };
    T.every(2400, () => { if (Date.now() - userAt > 5000) move(1); });
    T.frame(() => {
      let d = target() - base; d = Math.atan2(Math.sin(d), Math.cos(d)); base += d * 0.12;
      const w = s.clientWidth, cx = w * 0.36, cy = s.clientHeight * 0.54;
      planets.forEach((p, i) => {
        const a = base + i * (2 * Math.PI / n), z = Math.sin(a);
        p.style.left = `${cx + 110 * Math.cos(a)}px`; p.style.top = `${cy + 42 * z}px`;
        p.style.transform = `translate(-50%,-50%) scale(${0.72 + 0.28 * (z + 1) / 2})`;
        p.style.zIndex = z > 0 ? 3 : 1; p.classList.toggle("on", i === sel);
      });
    });
  },

  dot(s, T) {
    s.innerHTML = `<div class="d-dots"><canvas></canvas></div>`;
    const c = $("canvas", s), W = s.clientWidth, H = s.clientHeight, COLS = 112, p = W / COLS, ROWS = Math.floor(H / p);
    const ctx = fitCanvas(c, W, H);
    const apps = [["NETFLIX", "#ff3b45"], ["PRIME VIDEO", "#29b6f6"], ["DISNEY+", "#5b8cff"], ["HBO MAX", "#a56bff"], ["YOUTUBE", "#ff5a5a"]];
    let sel = 2;
    const draw = () => {
      const cells = new Array(COLS * ROWS);
      apps.forEach(([name, col], i) => {
        const y = 6 + i * 10, on = i === sel;
        plot(cells, COLS, ROWS, (on ? ">" : " ") + name, 4, y, on ? col : col + "55");
      });
      const t = new Date(), clock = `${t.getHours() % 12 || 12}:${String(t.getMinutes()).padStart(2, "0")}`;
      plot(cells, COLS, ROWS, clock, COLS - 4 - textWidth(clock), 6, "rgba(239,233,222,.8)");
      paint(ctx, W, H, COLS, ROWS, cells, apps[sel][1] + "12", "#0a0c14");
    };
    draw();
    T.every(1500, () => { sel = (sel + 1) % apps.length; draw(); });
  },

  crate(s, T) {
    const clusters = [["Ambient", 0.18, 0.34, "#7fa9c9"], ["Jazz", 0.42, 0.28, "#d8b35b"], ["Hip-hop", 0.2, 0.74, "#d98663"], ["Indie", 0.48, 0.7, "#8fbf86"]];
    const r = rng(7); let nodes = "";
    clusters.forEach(([, x, y, c], ci) => { for (let i = 0; i < 11; i++) { const a = r() * 6.28, d = 6 + r() * 30; nodes += `<i class="node" data-c="${ci}" style="left:calc(${x * 100}% + ${Math.cos(a) * d * 1.4}px);top:calc(${y * 100}% + ${Math.sin(a) * d}px);background:${c}"></i>`; } });
    s.innerHTML = `<div class="d-crate">${nodes}${clusters.map(([n, x, y]) => `<span class="cluster" style="left:${x * 100}%;top:calc(${y * 100}% + 30px)">${n}</span>`).join("")}<div class="you"></div><div class="queue"><span class="mono" style="color:var(--muted);font-size:10px">Session</span><span id="q" style="display:block"></span></div></div>`;
    const you = $(".you", s), q = $("#q", s); const order = [0, 1, 3, 2]; let step = 0; const hist = [];
    const go = () => {
      const ci = order[step % 4], [name, x, y] = clusters[ci];
      you.style.left = `${x * 100}%`; you.style.top = `${y * 100}%`;
      s.querySelectorAll(".node").forEach((n) => n.classList.toggle("lit", +n.dataset.c === ci));
      hist.unshift([name, 4 + ((step * 3) % 5)]); hist.length = Math.min(hist.length, 4);
      q.innerHTML = hist.map(([n, k], i) => `<div class="qrow"${i ? "" : ' style="color:var(--text)"'}><span>${i ? "" : "Now · "}${n}</span><span class="mono" style="font-size:10px">${k} tracks</span></div>`).join("");
      step++;
    };
    go(); T.every(2200, go);
  },

  barback(s, T) {
    const bar = ["cloud", "music", "clip", "timer", "bt", "wifi", "battery"];
    s.innerHTML = `<div class="d-barback" style="position:absolute;inset:0">
      <div class="menubar" style="justify-content:space-between"><span style="font-weight:600;color:var(--text)">Finder</span><span style="display:flex;gap:10px;align-items:center">${bar.map((n) => `<span class="mb-ico">${svg(n)}</span>`).join("")}<span class="mono" style="font-size:11px">12:30</span></span></div>
      <div class="notch"></div>
      <div class="shelf"><span class="search">${svg("search")}Search items</span>${["cloud", "music", "clip", "timer", "mic", "cam", "books", "bt"].map((n) => `<span>${svg(n)}</span>`).join("")}</div>
      <span class="hint">Hover the notch</span></div>`;
    const el = $(".d-barback", s); let over = false;
    el.addEventListener("mouseenter", () => { over = true; el.classList.add("open"); });
    el.addEventListener("mouseleave", () => { over = false; });
    T.after(600, () => el.classList.add("open"));
    T.every(2800, () => { if (!over) el.classList.toggle("open"); });
  },

  ebb(s, T) {
    s.innerHTML = `<div class="d-ebb"><div class="batt"><div class="fill-wrap"><div class="fill" style="height:62%"></div><div class="limit"></div></div></div>
      <div class="readout"><b id="pct">62%</b><span class="mono" id="state">Charging to 80%</span>
      <input type="range" min="50" max="100" step="5" value="80" aria-label="Charge limit">
      <div class="row"><span class="mono" style="color:var(--muted)">Limit <span id="lim" style="color:var(--amber-ink)">80%</span></span><button class="mini-btn" id="full" type="button">Charge to full</button></div></div></div>`;
    const fill = $(".fill", s), lim = $(".limit", s), range = $("input", s), pct = $("#pct", s), state = $("#state", s);
    let level = 62, limit = 80, full = false;
    const setLimit = () => { lim.style.bottom = `${limit}%`; $("#lim", s).textContent = `${limit}%`; };
    const render = () => {
      fill.style.height = `${level}%`; pct.textContent = `${Math.round(level)}%`;
      const goal = full ? 100 : limit;
      state.textContent = level < goal ? `Charging to ${goal}%` : full ? "Full · back to the limit next time" : `Holding at ${limit}%`;
    };
    setLimit(); render();
    range.oninput = () => { limit = +range.value; full = false; setLimit(); if (level > limit) level = limit; render(); };
    $("#full", s).onclick = () => { full = true; render(); };
    T.every(260, () => { const goal = full ? 100 : limit; if (level < goal) { level = Math.min(goal, level + 1); render(); } });
  },

  farsight(s, T) {
    const scene = `<div class="scene"></div><div class="win"><i style="top:18px;right:30%"></i><i style="top:26px"></i><i style="top:34px;right:45%"></i><i style="top:42px"></i></div><span class="cur"></span>`;
    s.innerHTML = `<div class="d-far" style="position:absolute;inset:0"><div class="mac">${scene}</div><div class="stand"></div><div class="link-line"></div><div class="ipad">${scene}</div><span class="status"><i></i>Encrypted · Mac to iPad</span></div>`;
    const curs = [...s.querySelectorAll(".cur")];
    const pts = [[30, 30], [62, 44], [44, 62], [76, 24], [22, 58]]; let i = 0;
    const go = () => { const [x, y] = pts[i++ % pts.length]; curs.forEach((c) => { c.style.left = `${x}%`; c.style.top = `${y}%`; }); };
    go(); T.every(1300, go);
  },

  switchboard(s, T) {
    const tools = [["Claude", 41], ["ChatGPT", 24], ["Gemini", 14], ["Grok", 8]];
    s.innerHTML = `<div class="d-switch">${tools.map(([n, v], i) => `<div class="row${i ? "" : " lead"}" data-v="${v}"><span>${n}</span><span class="bar-track"><span class="bar-fill"></span></span><span class="num">${v}</span><button type="button" class="toggle" role="switch" aria-checked="true" aria-label="Track ${n}"></button></div>`).join("")}<div class="total"><span>Messages today</span><span id="tot"></span></div></div>`;
    const rows = [...s.querySelectorAll(".row")];
    const sync = () => {
      let t = 0;
      rows.forEach((r) => { const on = $(".toggle", r).getAttribute("aria-checked") === "true"; r.classList.toggle("off", !on); $(".bar-fill", r).style.width = `${(+r.dataset.v / 45) * 100}%`; $(".num", r).textContent = on ? r.dataset.v : "off"; if (on) t += +r.dataset.v; });
      $("#tot", s).textContent = t;
    };
    s.addEventListener("click", (e) => { const t = e.target.closest(".toggle"); if (t) { t.setAttribute("aria-checked", t.getAttribute("aria-checked") === "true" ? "false" : "true"); sync(); } });
    rows.forEach((r) => ($(".bar-fill", r).style.width = "0"));
    T.after(120, sync);
    T.every(2600, () => { rows.forEach((r) => (r.dataset.v = Math.max(3, +r.dataset.v + Math.round(Math.random() * 2)))); sync(); });
  },

  promptshelf(s, T) {
    const steps = ["Context, no code yet", "Calendar view", "Assessment scanner", "Focus timer", "Watch app and widgets", "App icon"];
    s.innerHTML = `<div class="d-shelf" style="position:absolute;inset:0"><div class="menubar"><span class="mb-ico active">${svg("books")}</span>${["wifi", "battery"].map((n) => `<span class="mb-ico">${svg(n)}</span>`).join("")}<span class="mono" style="font-size:11px">12:30</span></div>
      <div class="menu"><h5><span>Pace</span><span class="mono" id="ver"></span></h5><div class="progress"><i></i></div><div id="items"></div></div></div>`;
    let done = 1, hover = 2, copied = -1;
    const render = () => {
      $("#items", s).innerHTML = steps.map((t, i) => `<div class="item${i === hover ? " hover" : ""}"><span class="n">${i}</span><span>${t}</span>${i === copied ? '<span class="copied">Copied</span>' : i <= done ? `<span class="done">${svg("check")}</span>` : `<span style="color:var(--muted)">${svg("copy")}</span>`}</div>`).join("");
      $(".progress i", s).style.width = `${((done + 1) / steps.length) * 100}%`;
      $("#ver", s).textContent = `v0.${done + 1}.0`;
    };
    render();
    const cycle = () => {
      if (done >= steps.length - 1) { done = 1; hover = 2; copied = -1; render(); return; }
      hover = done + 1; render();
      T.after(700, () => { copied = hover; render(); T.after(900, () => { done = hover; copied = -1; render(); }); });
    };
    T.every(2600, cycle);
  },

  knockswitch(s, T) {
    const N = 40;
    s.innerHTML = `<div class="d-knock"><div class="wave">${"<i></i>".repeat(N)}</div><div class="foot"><span class="state"><i></i><span id="st">Listening</span></span><span class="media" id="md">Music playing</span><span class="spaces"><span class="on">1</span><span>2</span></span></div></div>`;
    const bars = [...s.querySelectorAll(".wave i")], st = $(".state", s), sp = [...s.querySelectorAll(".spaces span")];
    let spikes = [];
    T.every(90, () => bars.forEach((b, i) => {
      const hit = spikes.includes(i) || spikes.includes(i - 1);
      b.classList.toggle("hit", hit);
      b.style.height = `${hit ? 64 + Math.random() * 24 : 3 + Math.random() * (i % 7 === 0 ? 14 : 8)}px`;
    }));
    const knock = () => {
      spikes = [N - 8]; T.after(260, () => (spikes = [N - 8, N - 3]));
      T.after(520, () => { spikes = []; st.classList.add("heard"); $("#st", s).textContent = "Knock heard"; $("#md", s).textContent = "Media paused"; sp[0].classList.remove("on"); sp[1].classList.add("on"); });
      T.after(2600, () => { st.classList.remove("heard"); $("#st", s).textContent = "Listening"; $("#md", s).textContent = "Music playing"; sp[1].classList.remove("on"); sp[0].classList.add("on"); });
    };
    T.after(800, knock); T.every(4600, knock);
  },

  pace(s, T) {
    s.innerHTML = `<div class="d-pace"><div class="phone"><span class="island"></span><div class="screen"><h4>This week</h4>
      <div class="week">${["M", "T", "W", "T", "F"].map((d, i) => `<span class="${i === 3 ? "on" : ""}">${d}</span>`).join("")}</div>
      <div class="task"><i style="background:#c27a0a"></i>Maths assessment<span style="margin-left:auto;color:#7b7266">Thu</span></div>
      <div class="task"><i style="background:#3f7a5a"></i>English draft<span style="margin-left:auto;color:#7b7266">Fri</span></div>
      <div class="focus"><svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17" fill="none" stroke="rgba(31,27,22,.1)" stroke-width="3"/><circle id="ring" cx="20" cy="20" r="17" fill="none" stroke="#1f1b16" stroke-width="3" stroke-linecap="round" stroke-dasharray="106.8" stroke-dashoffset="0"/></svg><b id="clock">25:00</b></div></div></div></div>`;
    let left = 25 * 60 - 1;
    const ring = $("#ring", s), clock = $("#clock", s);
    T.every(1000, () => {
      left = left <= 0 ? 25 * 60 : left - 1;
      clock.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
      ring.style.strokeDashoffset = `${106.8 * (1 - left / 1500)}`;
    });
  },

  pocket(s, T) {
    s.innerHTML = `<div class="d-pocket"><div class="phone"><span class="island"></span><div class="screen">
      <div class="apps"><span class="app"><i class="meadow"></i>Meadow</span><span class="app"><i class="packed"></i>Overpacked</span><span class="app"><i></i>&nbsp;</span><span class="app"><i></i>&nbsp;</span><span class="app"><i></i>&nbsp;</span><span class="app"><i></i>&nbsp;</span></div>
      <div class="splash meadow">Meadow<br>Mates</div><div class="splash packed">Over-<br>packed</div><span class="tap"></span></div></div></div>`;
    const screen = $(".screen", s), tap = $(".tap", s), icons = [...s.querySelectorAll(".app i")].slice(0, 2), splashes = [$(".splash.meadow", s), $(".splash.packed", s)];
    let k = 0;
    const open = () => {
      const i = k++ % 2, a = icons[i].getBoundingClientRect(), b = screen.getBoundingClientRect();
      const x = a.left - b.left + a.width / 2, y = a.top - b.top + a.height / 2;
      tap.style.left = `${x}px`; tap.style.top = `${y}px`; tap.classList.add("on");
      splashes[i].style.transformOrigin = `${x}px ${y}px`;
      T.after(220, () => { tap.classList.remove("on"); splashes[i].classList.add("on"); });
      T.after(1900, () => splashes[i].classList.remove("on"));
    };
    T.after(500, open); T.every(2800, open);
  },

  commons(s, T) {
    const creds = [["Photo card", "#2f5f86"], ["Library card", "#3f7a5a"], ["Boat licence", "#9a5a2e"]];
    s.innerHTML = `<div class="d-commons"><div class="phone"><span class="island"></span><div class="screen"><h4>Wallet</h4>
      ${creds.map(([n, c], i) => `<div class="cred" style="background:${c};top:${48 + i * 18}px;z-index:${i + 1}"><b>${n}</b><span class="mono">Alex Citizen</span></div>`).join("")}
      <div class="qr"><div class="code"></div><span class="ok">Verified</span><br><span style="color:#7b7266">Invented data</span></div></div></div></div>`;
    const cards = [...s.querySelectorAll(".cred")], qr = $(".qr", s); let pick = 2;
    const show = () => {
      cards.forEach((c, i) => (c.style.top = i === pick ? "44px" : "300px"));
      T.after(300, () => qr.classList.add("on"));
      T.after(2000, () => { qr.classList.remove("on"); cards.forEach((c, i) => (c.style.top = `${48 + i * 18}px`)); pick = (pick + 2) % 3; });
    };
    T.after(700, show); T.every(3400, show);
  },

  study(s, T) {
    const eq = "d/dx (3x² + 2x)";
    s.innerHTML = `<div class="d-study"><span class="tag">Calculus</span><div class="eq"><span id="eq"></span><span class="caret"></span></div>
      <div class="steps"><div><span class="mono">Rule</span><span>Power rule, term by term</span></div><div><span class="mono">Step</span><span>= 3 · 2x + 2 · 1</span></div><div><span class="mono">Answer</span><span><b style="font-weight:500">= 6x + 2</b></span></div></div></div>`;
    const out = $("#eq", s), steps = [...s.querySelectorAll(".steps div")];
    const run = () => {
      out.textContent = ""; steps.forEach((d) => d.classList.remove("on"));
      [...eq].forEach((ch, i) => T.after(80 * i, () => (out.textContent += ch)));
      steps.forEach((d, i) => T.after(80 * eq.length + 400 + i * 500, () => d.classList.add("on")));
    };
    run(); T.every(6000, run);
  },

  leviathan(s, T) {
    const fish = [["Neon tetra ×10", "A$45 · Parramatta", "#1d3a4a", "#38c6f4"], ["Blue ram pair", "A$60 · Penrith", "#22403a", "#f2c14e"], ["Bristlenose pleco", "A$15 · Hornsby", "#2e3a2a", "#8a7a5c"]];
    const wanted = [["Otocinclus ×6", "Blacktown"], ["Cherry shrimp ×20", "Ryde"], ["Java fern, large", "Any suburb"]];
    s.innerHTML = `<div class="d-lev"><div class="tabs"><button type="button" aria-pressed="true" data-t="0">Catalogue</button><button type="button" aria-pressed="false" data-t="1">Wanted</button><span class="mono" style="margin-left:auto;color:var(--muted);align-self:center;font-size:10px">Moderated</span></div><div id="body"></div></div>`;
    const body = $("#body", s), tabs = [...s.querySelectorAll(".tabs button")]; let tab = 0, userAt = 0;
    const render = () => {
      tabs.forEach((b, i) => b.setAttribute("aria-pressed", i === tab ? "true" : "false"));
      body.innerHTML = tab === 0
        ? `<div class="list">${fish.map(([n, m, bg, fc]) => `<div class="fish"><div class="pic" style="background:${bg};--fc:${fc}"></div><b>${n}</b><span>${m}</span></div>`).join("")}</div>`
        : `<div class="wanted">${wanted.map(([n, w]) => `<div class="want"><span style="color:var(--text);font-family:var(--sans);font-size:12px">${n}</span><span>${w}</span></div>`).join("")}</div>`;
    };
    render();
    s.querySelector(".tabs").onclick = (e) => { const b = e.target.closest("[data-t]"); if (b) { tab = +b.dataset.t; userAt = Date.now(); render(); } };
    T.every(3200, () => { if (Date.now() - userAt > 6000) { tab = 1 - tab; render(); } });
  },

  linkpocket(s, T) {
    const tabs = [["github.com", "Brandonshev/pace"], ["developer.apple.com", "SwiftUI documentation"], ["youtube.com", "Menu bar app tutorial"], ["github.com", "rxhtt/Eye-To-Mouse"]];
    s.innerHTML = `<div class="d-pocketlink"><div class="browser"><div class="tabs">${tabs.map(([, t]) => `<span class="tab">${t}</span>`).join("")}</div>
      <div class="toolbar"><span class="url"></span><button type="button" class="mini-btn" id="save">Save and close</button></div><div class="page"><i style="width:60%"></i><i></i><i style="width:80%"></i><i style="width:40%"></i></div></div>
      <div class="saved"><h5>Saved</h5><div id="groups"></div></div></div>`;
    const els = [...s.querySelectorAll(".tab")], url = $(".url", s), groups = $("#groups", s);
    let cur = 0; const saved = {};
    const focus = () => { els.forEach((e, i) => e.classList.toggle("on", i === cur)); url.textContent = cur < tabs.length ? `${tabs[cur][0]}/…` : "No tabs open"; };
    const renderSaved = () => { groups.innerHTML = Object.entries(saved).map(([d, list]) => `<div class="group"><div class="mono">${d}</div>${list.map((t) => `<div>${t}</div>`).join("")}</div>`).join(""); };
    const save = () => {
      if (cur >= tabs.length) { cur = 0; Object.keys(saved).forEach((k) => delete saved[k]); els.forEach((e) => e.classList.remove("gone")); renderSaved(); focus(); return; }
      const [d, t] = tabs[cur]; (saved[d] = saved[d] || []).push(t); els[cur].classList.add("gone"); cur++; renderSaved(); focus();
    };
    focus();
    $("#save", s).onclick = save;
    T.every(1800, save);
  },

  eyemouse(s, T) {
    s.innerHTML = `<div class="d-eye"><div class="cam"><span class="mono"><i></i>Camera</span><div class="track"></div><div class="eye"><div class="iris"></div></div></div>
      <div class="screen2"><span class="t" style="left:8%;top:12%"></span><span class="t" style="left:58%;top:12%"></span><span class="t" style="left:8%;top:60%"></span><span class="t" style="left:58%;top:60%"></span><span class="pointer"></span><span class="ripple"></span></div></div>`;
    const iris = $(".iris", s), eye = $(".eye", s), ptr = $(".pointer", s), rip = $(".ripple", s), tiles = [...s.querySelectorAll(".t")];
    const centres = [[23, 25], [73, 25], [23, 73], [73, 73]]; let i = 0;
    const look = () => {
      const k = i++ % 4, [x, y] = centres[k];
      iris.style.transform = `translate(${(x - 50) * 0.5}px, ${(y - 50) * 0.18}px)`;
      ptr.style.left = `${x}%`; ptr.style.top = `${y}%`;
      tiles.forEach((t, n) => t.classList.remove("hot"));
      T.after(900, () => {
        eye.classList.add("blink");
        T.after(140, () => { eye.classList.remove("blink"); tiles[k].classList.add("hot"); rip.style.left = `${x}%`; rip.style.top = `${y}%`; rip.classList.remove("on"); void rip.offsetWidth; rip.classList.add("on"); });
      });
    };
    look(); T.every(2000, look);
  },

  skills(s, T) {
    s.innerHTML = `<div class="term" id="term"></div>`;
    const term = $("#term", s);
    const lines = [
      [0, '<span class="p">›</span> <span class="w">/saves-to-notion</span>'],
      [700, "Reading 12 saved videos"],
      [1300, '<div class="notion"><span>Coding<em>5</em></span><span>App ideas<em>4</em></span><span>Fitness<em>3</em></span></div>'],
      [2000, '<span class="ok">Done</span> · added to Notion › Saved'],
      [2900, '<span class="p">›</span> <span class="w">/syllabus-notes maths-advanced</span>'],
      [3600, "Reading the NSW syllabus"],
      [4300, '<span class="ok">Done</span> · notes for 4 topics'],
    ];
    const run = () => { term.innerHTML = ""; lines.forEach(([ms, html]) => T.after(ms, () => term.insertAdjacentHTML("beforeend", `<div style="animation:rise 260ms var(--ease) both">${html}</div>`))); };
    run(); T.every(7200, run);
  },

  streamclips(s, T) {
    const r = rng(3); let bars = "";
    for (let i = 0; i < 90; i++) bars += `<i style="left:${(i / 90) * 100}%;height:${8 + r() * 30}px"></i>`;
    const sels = [[8, 22], [41, 55], [70, 86]];
    s.innerHTML = `<div class="d-clips"><div class="timeline">${bars}${sels.map(([a, b]) => `<span class="sel" style="left:${a}%;width:${b - a}%"></span>`).join("")}<span class="head"></span></div>
      <div class="outs">${sels.map((_, i) => `<div class="out"><span>clip ${i + 1}</span></div>`).join("")}<div class="ver">Release<br><b id="rv">v1.0</b></div></div></div>`;
    const head = $(".head", s), selEls = [...s.querySelectorAll(".sel")], outs = [...s.querySelectorAll(".out")];
    let start = performance.now(), rel = 0;
    T.frame((t) => {
      const k = ((t - start) % 5200) / 4200;
      if (k < 0.02 && selEls[0].classList.contains("on")) { selEls.forEach((e) => e.classList.remove("on")); outs.forEach((e) => e.classList.remove("on")); rel++; $("#rv", s).textContent = `v1.${rel}`; }
      const x = Math.min(k, 1) * 100; head.style.left = `${x}%`;
      sels.forEach(([, b], i) => { if (x >= b && !selEls[i].classList.contains("on")) { selEls[i].classList.add("on"); outs[i].classList.add("on"); } });
    });
  },
};

/* ---------- Grid ---------- */
function renderGrid() {
  const grid = $("#grid"), list = projects;
  grid.innerHTML = list.map((p) => `
    <article class="card" id="p-${p.id}" data-cat="${p.cat}">
      <div class="stage" data-demo="${p.id}" aria-hidden="true"></div>
      <div class="card-body">
        <div class="card-top"><h3>${esc(p.name)}</h3><span class="stack mono">${esc(p.stack)}</span></div>
        <p>${esc(p.desc)}</p>
        <div class="card-actions">
          ${p.rec ? `<button type="button" class="link" data-rec="${p.id}">Watch recording${ICON.play}</button>` : ""}
          ${p.source ? `<a class="link" href="https://github.com/Brandonshev/${p.source}" target="_blank" rel="noopener">Source${ICON.out}</a>` : `<span class="private mono">${ICON.lock}Private repo</span>`}
          <time class="date mono" datetime="${p.added}">${fmtDate(p.added)}</time>
        </div>
      </div>
    </article>`).join("");

  const counts = { all: list.length };
  list.forEach((p) => (counts[p.cat] = (counts[p.cat] || 0) + 1));
  const filters = $("#filters");
  filters.innerHTML = CATS.map(([k, l], i) => `<button type="button" data-f="${k}" aria-pressed="${i === 0}">${l}<span class="mono">${counts[k] || 0}</span></button>`).join("");
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]"); if (!b) return;
    filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    grid.querySelectorAll(".card").forEach((c) => (c.hidden = b.dataset.f !== "all" && c.dataset.cat !== b.dataset.f));
  });

  $("#count-projects").textContent = projects.length;
  // About panel uses the same categories and counts as the filters, plus Roblox
  const soon = games.filter((g) => g.soon).length;
  $("#count-games").textContent = games.length;
  $("#facts").innerHTML = CATS.filter(([k]) => k !== "all").map(([k, l]) => `
    <button type="button" class="fact" data-go="${k}"><span class="mono">${l}</span><b>${counts[k] || 0}</b><span>${CAT_NOTES[k]}</span></button>`).join("") + `
    <a class="fact" href="#games"><span class="mono">Roblox</span><b>${games.length}</b><span>${soon ? `${soon} releasing soon` : "All live"}</span></a>
    <button type="button" class="fact" data-go="all"><span class="mono">In total</span><b>${list.length + games.length}</b><span>(includes ${games.length} Roblox games)</span></button>`;
  $("#facts").addEventListener("click", (e) => {
    const f = e.target.closest("[data-go]"); if (!f) return;
    filters.querySelector(`[data-f="${f.dataset.go}"]`).click();
    $("#work").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  });

  // Run each demo only while it is on screen
  const running = new Map();
  const io = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
    const id = target.dataset.demo;
    if (isIntersecting && !running.has(target)) {
      const T = timers(); running.set(target, T);
      try { demos[id](target, T); } catch (err) { console.error(id, err); }
    } else if (!isIntersecting && running.has(target)) {
      running.get(target).clear(); running.delete(target);
    }
  }), { rootMargin: "80px" });
  grid.querySelectorAll(".stage").forEach((s) => io.observe(s));
}

function renderGames() {
  $("#game-list").innerHTML = games.map((g) => g.soon ? `
    <article class="game soon">
      <div class="soon-art"><div style="text-align:center"><b>05</b><span class="mono">Releasing soon</span></div></div>
      <div class="game-body"><span class="tags mono">In development</span><h3>Game five</h3><p>Finished and waiting to be released. The link goes up here when it’s live.</p></div>
    </article>` : `
    <article class="game">
      <img src="${g.img}" alt="${esc(g.name)} game icon" loading="lazy" width="320" height="320">
      <div class="game-body"><span class="tags mono">${g.tags}</span><h3>${esc(g.name)}</h3><p>${esc(g.desc)}</p>
      <a class="link" href="https://www.roblox.com/games/${g.place}" target="_blank" rel="noopener">Play on Roblox${ICON.out}</a></div>
    </article>`).join("");
}

/* ---------- Recording dialog, Scout video, email ---------- */
function initExtras() {
  const dlg = $("#rec"), vid = $("#rec-video");
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-rec]"); if (!b) return;
    const p = projects.find((x) => x.id === b.dataset.rec);
    $("#rec-title").textContent = `${p.name} · recording`;
    $("#rec-cap").textContent = p.rec.cap;
    vid.poster = p.rec.poster; vid.src = p.rec.src;
    dlg.showModal(); vid.play().catch(() => {});
  });
  const close = () => { vid.pause(); dlg.close(); };
  $("#rec-close").onclick = close;
  dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
  dlg.addEventListener("close", () => vid.pause());

  // Every outside link opens in a new tab
  document.querySelectorAll('a[href^="http"]').forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });

  const btn = $("#copy-email"), label = $("#copy-label");
  btn.onclick = async () => {
    const text = btn.dataset.email;
    try { await navigator.clipboard.writeText(text); }
    catch { const t = document.createElement("textarea"); t.value = text; document.body.append(t); t.select(); document.execCommand("copy"); t.remove(); }
    label.innerHTML = `${ICON.check}Copied`;
    setTimeout(() => (label.innerHTML = `${ICON.copy}Copy`), 2000);
  };
  document.documentElement.dataset.version = VERSION; // for debugging: check <html data-version>
}

/* ---------- Featured carousel ---------- */
const carousel = { go() {} };
function initCarousel() {
  const view = $("#f-view"), bar = $("#f-bar"), win = $("#featured .window"), DUR = 8000;
  const recent = projects.filter((p) => !PICKS.includes(p.id)).sort((a, b) => b.added.localeCompare(a.added)).slice(0, 2);
  const list = [...recent.map((p) => ({ p, tag: "New" })), ...PICKS.map((id) => ({ p: projects.find((x) => x.id === id), tag: "My pick" }))];
  let idx = 0, T = null, visible = false, onDemo = false, elapsed = 0, last = 0;
  const pad = (n) => String(n).padStart(2, "0");
  function show(i) {
    idx = (i + list.length) % list.length; elapsed = 0;
    const { p, tag } = list[idx];
    if (T) T.clear();
    $("#f-idx").textContent = `${pad(idx + 1)} / ${pad(list.length)}`;
    $("#f-copy").innerHTML = `<span class="f-tag ${tag === "New" ? "new" : ""}">${tag}</span><h3 id="f-name">${esc(p.name)}</h3>
      <span class="mono" style="color:var(--muted)">${esc(p.stack)} · Added <time datetime="${p.added}">${fmtDate(p.added)}</time></span><p id="f-desc">${esc(p.desc)}</p>
      <div class="feature-actions">${p.source ? `<a class="btn btn-primary" href="https://github.com/Brandonshev/${p.source}" target="_blank" rel="noopener">View source</a>` : ""}<a class="link" href="#p-${p.id}">See the card${ICON.out}</a>${p.source ? "" : `<span class="private mono" style="color:var(--muted);display:inline-flex;gap:6px;align-items:center">${ICON.lock}Private repo</span>`}</div>`;
    $("#f-path").textContent = `${p.id} / ${p.rec ? "recording" : "demo"}`;
    $("#f-kind").textContent = p.rec ? "Screen recording" : "Live demo";
    if (p.rec) {
      view.innerHTML = `<video src="${p.rec.src}" poster="${p.rec.poster}" muted loop playsinline autoplay aria-label="${esc(p.rec.cap)}"></video>`;
      if (!reduced) $("video", view).play().catch(() => {});
    } else {
      view.innerHTML = `<div class="big"></div>`;
      const big = $(".big", view); big.style.transform = `scale(${view.clientWidth / 380})`;
      T = timers(); try { demos[p.id](big, T); } catch (e) { console.error(e); }
    }
    bar.style.width = "0";
  }
  // Progress only advances while the section is on screen and the cursor is off the demo.
  // Hovering the demo pauses it where it is; moving off continues from the same spot.
  function tick(t) {
    const dt = last ? Math.min(t - last, 100) : 0; last = t;
    if (visible && !onDemo && !reduced) {
      elapsed += dt; bar.style.width = `${Math.min(elapsed / DUR, 1) * 100}%`;
      if (elapsed >= DUR) show(idx + 1);
    }
    requestAnimationFrame(tick);
  }
  win.addEventListener("mouseenter", () => { onDemo = true; win.classList.add("paused"); });
  win.addEventListener("mouseleave", () => { onDemo = false; win.classList.remove("paused"); });
  $("#f-prev").onclick = () => show(idx - 1);
  $("#f-next").onclick = () => show(idx + 1);
  $("#featured").addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1); });
  new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.3 }).observe($("#featured"));
  addEventListener("resize", () => { const big = $(".big", view); if (big) big.style.transform = `scale(${view.clientWidth / 380})`; });
  carousel.go = show;
  show(0);
  requestAnimationFrame(tick);
}

renderGrid();
renderGames();
initBoard();
initCarousel();
initExtras();
