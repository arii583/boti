(() => {
  const p = document.body.dataset.page,
    cur = NODES.find((n) => n.id === p),
    L = (n) =>
      `<a href="${n.h || n.id + ".html"}" ${n.h ? 'target="_blank" rel="noopener"' : ""} ${n.id === p ? 'aria-current="page"' : ""}>${n.i} ${n.t}</a>`;
  let tr = [];
  try {
    tr = JSON.parse(sessionStorage.getItem("trail") || "[]");
    if (tr[tr.length - 1] !== cur.t) tr.push(cur.t);
    tr = tr.slice(-6);
    sessionStorage.setItem("trail", JSON.stringify(tr));
  } catch (e) {}
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<a class="skip" href="#main">Lompat ke konten</a>
<header class="top"><a class="logo" href="index.html">Boti<span>.</span></a><nav class="menu" aria-label="Menu utama">${NODES.slice(1, 6).map(L).join("")}</nav>
<div class="tools"><a class="btn" href="index.html">⌂ Home</a><button id="sm" aria-label="Sitemap">☰</button><button id="th" aria-label="Ganti tema">◐</button></div></header>
<nav class="crumb" aria-label="Breadcrumb"><a href="index.html">Beranda</a>${p === "index" ? "" : " › <b>" + cur.t + "</b>"}</nav>
<aside id="sitemap" hidden><h2>Sitemap</h2><ul>${NODES.map((n) => `<li><a href="${n.id}.html" ${n.id === p ? 'aria-current="page"' : ""}>${n.i} ${n.t}<small>${n.d}</small></a></li>`).join("")}</ul><p class="mut">Jejak: ${tr.join(" → ")}</p><button id="cl">Tutup</button></aside>`,
  );
  document.body.insertAdjacentHTML(
    "beforeend",
    "<footer>© Proyek Mini OBE · Hypermedia · Suku Boti, Timor Tengah Selatan, NTT</footer>",
  );
  const sm = document.getElementById("sitemap");
  sm.querySelector("#cl").onclick = () => (sm.hidden = true);
  document.getElementById("sm").onclick = () => (sm.hidden = !sm.hidden);
  const R = document.documentElement;
  try {
    R.dataset.theme = localStorage.getItem("th") || "";
  } catch (e) {}
  document.getElementById("th").onclick = () => {
    R.dataset.theme = R.dataset.theme === "light" ? "" : "light";
    try {
      localStorage.setItem("th", R.dataset.theme);
    } catch (e) {}
  };
  const nx = document.getElementById("next");
  if (nx && cur.to && p !== "index")
    nx.innerHTML =
      '<h3>Lanjut ke</h3><div class="grid">' +
      cur.to
        .map((id) => NODES.find((n) => n.id === id))
        .map(
          (n) =>
            `<a class="card" href="${n.id}.html"><b>${n.i} ${n.t}</b><span>${n.d}</span></a>`,
        )
        .join("") +
      "</div>";
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
    { threshold: 0.15 },
  );
  document.querySelectorAll(".rv").forEach((e) => io.observe(e));
  window.countUp = (el) => {
    const t = +el.dataset.n;
    let i = 0;
    const iv = setInterval(() => {
      i = Math.min(t, i + Math.max(1, t / 40));
      el.textContent = Math.round(i);
      if (i >= t) clearInterval(iv);
    }, 30);
  };
  if ("serviceWorker" in navigator && location.protocol.startsWith("http"))
    navigator.serviceWorker.register("sw.js").catch(() => {});
})();
