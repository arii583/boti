const V=[['🌿 Harmoni dengan Alam','Alam adalah rumah bersama yang dijaga, bukan dieksploitasi.'],['🕯️ Hormat pada Leluhur','Adat diwariskan lintas generasi lewat ritual dan kepemimpinan Usif.'],['🤝 Kesederhanaan','Hidup secukupnya, mengutamakan kebersamaan dan gotong royong.'],['🌾 Kemandirian','Pangan dan sandang dihasilkan sendiri, termasuk tenun alami.']];
const g=document.getElementById('flip');g.innerHTML=V.map(v=>`<button class="fc" aria-label="${v[0]}"><i><s>${v[0]}</s><u>${v[1]}</u></i></button>`).join('');
g.querySelectorAll('.fc').forEach(b=>b.onclick=()=>b.classList.toggle('on'));
