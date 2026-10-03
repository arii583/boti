const $ = (i) => document.getElementById(i);
const L = {
  boti: {
    q: "Desa Boti, Kie, Timor Tengah Selatan, Nusa Tenggara Timur",
    t: "Desa Boti",
    d: "Desa adat Suku Boti di Kecamatan Kie, sekitar 40 km dari Soe. Perjalanan sekitar 2 jam dari Soe dan sekitar 4 jam dari Kupang (perkiraan, kondisi jalan dapat berubah).",
  },
  soe: {
    q: "Soe, Timor Tengah Selatan, Nusa Tenggara Timur",
    t: "SoE",
    d: "Ibu kota Kabupaten Timor Tengah Selatan, titik singgah utama menuju Boti.",
  },
  kupang: {
    q: "Kupang, Nusa Tenggara Timur",
    t: "Kupang",
    d: "Ibu kota Provinsi NTT dan titik awal perjalanan.",
  },
};
function show(k) {
  document
    .querySelectorAll(".chip")
    .forEach((c) => c.classList.toggle("on", c.dataset.k === k));
  const l = L[k];
  $("fr").src =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(l.q) +
    "&z=13&output=embed";
  $("gm").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(l.q);
}
document
  .querySelectorAll(".chip")
  .forEach((c) => (c.onclick = () => show(c.dataset.k)));
show("boti");
