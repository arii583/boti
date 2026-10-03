document.getElementById("cards").innerHTML = NODES.slice(1)
  .filter((n) => !n.s)
  .map(
    (n) =>
      `<a class="card" href="${n.id}.html"><b>${n.i} ${n.t}</b><span>${n.d}</span></a>`,
  )
  .join("");
document.querySelectorAll('[data-n]').forEach(countUp);
