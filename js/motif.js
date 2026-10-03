const M = [
  [
    "kaif",
    "assets/motif/kaif.jpeg",
    "Menyimbolkan sumber air.",
  ],
  [
    "Buna",
    "assets/motif/buna.jpeg",
    " identitas budaya serta status sosial masyarakat setempat.",
  ],
  [
    "Lotis",
    "assets/motif/lotis.jpeg",
    "Pola kotak sebagai simbol kebersamaan.",
  ],
  [
    "Sotis",
    "assets/motif/sotis.jpeg",
    "Lengkung bak aliran air dan kesuburan.",
  ],
];
const gl = document.getElementById("gl"),
  vw = document.getElementById("vw");
gl.innerHTML = M.map(
  (m, i) =>
    `<button class="tile" style="background:url(${m[1]}) center/cover no-repeat" data-i="${i}" aria-label="Motif ${m[0]}"></button>`,
).join("");
gl.querySelectorAll(".tile").forEach(
  (t) =>
    (t.onclick = () => {
      gl.querySelectorAll(".tile").forEach((x) => x.classList.remove("sel"));
      t.classList.add("sel");
      const m = M[t.dataset.i];
      vw.src = m[1];
      vw.alt = "Motif " + m[0];
      document.getElementById("mi").innerHTML = `<b>${m[0]}</b><br>${m[2]}`;
    }),
);
gl.firstChild.click();
