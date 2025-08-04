
async function loadMarkdown(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = marked.parse(text);
}

window.onload = () => {
  loadMarkdown("comm-day", "community-day.md");
  loadMarkdown("raid-hour", "raid-hour.md");
  loadMarkdown("spotlight-hour", "spotlight-hour.md");
};
