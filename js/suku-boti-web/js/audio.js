const $ = (i) => document.getElementById(i),
  w = $("wv");
if (!("speechSynthesis" in window))
  $("ms").textContent = "Peramban ini tidak mendukung TTS.";
$("pl").onclick = () => {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance($("tx").value);
  u.lang = "id-ID";
  u.rate = +$("rt").value;
  u.onstart = () => w.classList.add("on");
  u.onend = u.onerror = () => w.classList.remove("on");
  speechSynthesis.speak(u);
};
$("st").onclick = () => {
  speechSynthesis.cancel();
  w.classList.remove("on");
};
