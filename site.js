const projects = [
  { name: "Scout", category: "Tools", stack: "Python", description: "Paper trading with market scans, risk limits, and plain-English trade explanations.", source: "scout", demo: "scout" },
  { name: "Orbit TV Launcher", category: "Web & TV", stack: "HTML · Tizen", description: "A Samsung TV launcher where the remote moves between planets and each planet opens an app.", demo: "orbit" },
  { name: "Dot Matrix Home", category: "Web & TV", stack: "HTML · webOS", description: "A custom LG TV home screen with dot-matrix type, a clock, and colours that follow the selected app.", demo: "dot" },
  { name: "Crate", category: "Apps", stack: "Swift · macOS", description: "Explore your music library as a map you can wander through, with a queue and saved sessions." },
  { name: "Pace", category: "Apps", stack: "Swift · iOS", description: "An iPhone planner with a calendar, assessment scanning, and focus tools, plus an Apple Watch app and widgets." },
  { name: "Study Desk", category: "Web & TV", stack: "JavaScript", description: "HSC study tools for calculus, economics, and business, including a visual equation editor and worked solutions." },
  { name: "Barback", category: "Apps", stack: "Swift · macOS", description: "A menu bar manager and notch shelf for organising, searching, and accessing menu bar items." },
  { name: "Ebb", category: "Apps", stack: "Swift · macOS", description: "Set battery charge limits for a plugged-in MacBook, hold a target charge, or charge to full on demand." },
  { name: "Farsight", category: "Apps", stack: "Swift · Apple platforms", description: "An encrypted remote desktop with a Mac host and viewers for Mac, iPhone, and iPad." },
  { name: "Pocket Games", category: "Apps", stack: "SwiftUI · iOS", description: "Two iOS games, Meadow Mates and Overpacked, with a companion website." },
  { name: "Leviathan Marketplace", category: "Web & TV", stack: "TypeScript · React", description: "A Sydney aquarium fish marketplace preview with a moderated catalogue, a wanted board, and seller enquiries." },
  { name: "Link Pocket", category: "Tools", stack: "JavaScript · Chrome", description: "Save a page and close its tab in one click. Browse saved links by domain or search the library." },
  { name: "KnockSwitch", category: "Apps", stack: "Swift · macOS", description: "A menu bar experiment that listens for a door knock, pauses media, and switches desktops." },
  { name: "Switchboard", category: "Apps", stack: "Swift · macOS", description: "A dashboard and menu bar app for tracking activity and usage across AI tools." },
  { name: "Prompt Shelf", category: "Tools", stack: "Swift · Claude Code", description: "Load, track, and copy sets of prompts from the Mac menu bar, with a Claude Code plugin and hook." },
  { name: "Eye Mouse", category: "Tools", stack: "Python · OpenCV", description: "An adaptation of rxhtt’s Eye-To-Mouse for moving the cursor with your gaze and using blink or dwell gestures." },
  { name: "Claude Skills", category: "Tools", stack: "Agent skills", description: "Two reusable workflows for Claude. One turns NSW syllabuses into study notes. The other sorts saved videos into Notion." },
  { name: "Commons", category: "Apps", stack: "TypeScript · Expo", description: "A civic-services wallet prototype with invented data that explores storing, presenting, and verifying credentials." },
  { name: "StreamClips", category: "Tools", stack: "Python", description: "A workflow for preparing authorised creator clips, with versioned releases." },
  { name: "crypto-anal", category: "Tools", stack: "Archive", description: "An archived repository with no published project details." },
];

const list = document.querySelector("#project-list");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const filters = [...document.querySelectorAll("[data-filter]")];
let category = "All";

function element(tag, content, className) {
  const node = document.createElement(tag);
  if (content) node.textContent = content;
  if (className) node.className = className;
  return node;
}

function link(content, href) {
  const node = element("a", content);
  node.href = href;
  return node;
}

function render() {
  const query = search.value.trim().toLowerCase();
  const matches = projects.map((project, index) => ({ project, index })).filter(({project}) => {
    const words = [project.name, project.category, project.stack, project.description].join(" ").toLowerCase();
    return (category === "All" || project.category === category) && words.includes(query);
  });

  count.textContent = matches.length ? `Showing ${matches.length} of ${projects.length}` : "No projects match this search.";
  list.replaceChildren(...matches.map(({project, index}) => {
    const card = element("article", "", "project");
    const top = element("div", "", "project-top");
    top.append(element("span", String(index + 1).padStart(2, "0"), "number"), element("span", project.stack, "meta"));
    const actions = element("div", "", "project-actions");
    if (project.demo) actions.append(link("Watch demo ↓", `#demo-${project.demo}`));
    if (project.source) actions.append(link("Source ↗", `https://github.com/Brandonshev/${project.source}`));
    else actions.append(element("span", "Private source"));
    card.append(top, element("h3", project.name), element("p", project.description), actions);
    return card;
  }));
}

for (const button of filters) {
  button.addEventListener("click", () => {
    category = button.dataset.filter;
    for (const choice of filters) choice.setAttribute("aria-pressed", String(choice === button));
    render();
  });
}
search.addEventListener("input", render);
render();
