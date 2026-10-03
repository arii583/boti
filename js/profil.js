const D = [
  {
    k: "Bahasa",
    s: "Dawan (Uab Meto)",
    tags: ["Lisan", "Warisan leluhur"],
    p: [
      'Masyarakat Boti berbahasa Dawan, atau Uab Meto, yang artinya kira-kira "bahasa orang kering". Dawan adalah bahasa daerah utama di Timor Barat dan dipakai dalam percakapan sehari-hari.',
      "Bahasa ini diwariskan secara lisan lewat cerita, nyanyian, dan tutur adat. Dalam upacara, bahasa adat dipakai untuk doa, nasihat, dan menyampaikan keputusan bersama.",
      "Bahasa Indonesia dipakai berdampingan, terutama untuk sekolah dan urusan pemerintahan. Karena itu pelestarian Dawan lewat dokumentasi, rekaman, dan pengajaran ke generasi muda penting, dan di sinilah teknologi seperti NMT dan TTS bisa membantu.",
    ],
  },
  {
    k: "Pemimpin Adat",
    s: "Usif",
    tags: ["Kepemimpinan", "Hukum adat"],
    p: [
      "Pemimpin adat di Boti disebut Usif, gelar yang secara tradisional bermakna raja atau penguasa adat. Usif dihormati sebagai pemimpin yang memegang dan menjaga aturan leluhur.",
      "Perannya mencakup memimpin upacara adat, menengahi perselisihan, dan mengarahkan keputusan penting kampung, misalnya waktu menanam, panen, dan pelaksanaan ritual.",
      "Kepemimpinan ini bersifat turun-temurun dan didukung para tetua adat. Karena itu Usif menjadi sumber utama pengetahuan budaya dan narasumber yang tepat untuk konten asli situs ini.",
    ],
  },
  {
    k: "Kepercayaan",
    s: "Halaika",
    tags: ["Spiritualitas", "Alam"],
    p: [
      "Banyak warga Boti menganut kepercayaan lokal bernama Halaika. Kepercayaan ini memandang adanya Sang Pencipta di langit dan penjaga bumi, serta menekankan hormat kepada leluhur.",
      "Nilai utamanya adalah menjaga keseimbangan dengan alam: hutan, mata air, dan tanah dipandang sebagai milik bersama yang harus dirawat dan tidak dirusak. Hari-hari tertentu diperlakukan khusus dan ada larangan adat yang ditaati bersama.",
      "Sebagai pengunjung atau perancang konten, sikap yang tepat adalah menghormati aturan setempat, meminta izin sebelum memotret atau merekam, dan tidak menyederhanakan kepercayaan ini.",
    ],
  },
  {
    k: "Ciri Khas",
    s: "Rambut panjang, tenun alami, rumah tradisional",
    tags: ["Busana", "Tenun", "Rumah"],
    p: [
      "Pria Boti dikenal berambut panjang yang digelung, sebagai tanda ikatan dengan adat dan leluhur. Busana tradisional mereka berupa kain tenun.",
      "Tenun Boti dibuat sendiri dengan pewarna alami dari tumbuhan seperti daun, akar, dan kulit kayu. Setiap motif punya makna dan dikerjakan tangan dalam waktu cukup lama.",
      "Rumah tradisional berbentuk bundar beratap alang-alang, dikenal sebagai Ume Kbubu, dan menjadi bagian dari cara hidup sederhana serta mandiri.",
    ],
  },
];
const tl = document.getElementById("tl");
tl.innerHTML =
  D.map(
    (d, i) =>
      `<div class="it"><button aria-expanded="false" aria-controls="b${i}" id="h${i}"><span><b>${d.k}</b><small>${d.s}</small></span></button><div class="bd" id="b${i}" role="region" aria-labelledby="h${i}">${d.p.map((x) => "<p>" + x + "</p>").join("")}<div>${d.tags.map((t) => '<span class="tag">' + t + "</span>").join("")}</div></div></div>`,
  ).join("") ;
tl.querySelectorAll(".it").forEach((it) => {
  const b = it.querySelector("button"),
    bd = it.querySelector(".bd");
  b.onclick = () => {
    const o = !it.classList.contains("open");
    tl.querySelectorAll(".it.open").forEach((x) => {
      x.classList.remove("open");
      x.querySelector("button").setAttribute("aria-expanded", "false");
      x.querySelector(".bd").style.maxHeight = 0;
    });
    if (o) {
      it.classList.add("open");
      b.setAttribute("aria-expanded", "true");
      bd.style.maxHeight = bd.scrollHeight + 40 + "px";
    }
  };
});
const F = [
  "Boti dikenal sebagai salah satu komunitas adat yang mempertahankan cara hidup tradisional di Timor.",
  "Tenun Boti memakai pewarna dari tumbuhan seperti daun dan akar.",
  "Pemimpin adat dipanggil Usif dan dihormati lintas generasi.",
  "Bahasa Dawan juga disebut Uab Meto, bahasa mayoritas di Timor Barat.",
];
let i = 0;
document.getElementById("fbtn").onclick = () => {
  i = (i + 1) % F.length;
  document.getElementById("fact").textContent = F[i];
};
