const G=NODES.filter(n=>!n.s);
  '<defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#d8bfa3"/></marker></defs>';
NODES.forEach((a) =>
  a.to.forEach((t) => {
    const b=G.find(n=>n.id===t); if(!b) return;
      dx = b.x - a.x,
      dy = b.y - a.y,
      l = Math.hypot(dx, dy) || 1;
    s += `<line class="e" marker-end="url(#a)" x1="${a.x + (dx / l) * 20}" y1="${a.y + (dy / l) * 20}" x2="${b.x - (dx / l) * 24}" y2="${b.y - (dy / l) * 24}"/>`;
  }),
);
NODES.forEach(
  (n) =>
    (s += `<a href="${n.id}.html"><g class="n ${n.id === "graf" ? "cur" : ""}"><circle cx="${n.x}" cy="${n.y}" r="20"/><text x="${n.x}" y="${n.y + 3}">${n.t.slice(0, 8)}</text></g></a>`),
);
document.getElementById("g").innerHTML = s;
