
// Simple on-scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Counter animation
function animateCount(el){
  const target = +el.dataset.target;
  const duration = 1400;
  const start = 0;
  const t0 = performance.now();
  function tick(t){
    const p = Math.min((t - t0)/duration, 1);
    const val = Math.floor(start + (target-start)*p);
    el.textContent = val.toLocaleString();
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('[data-target]').forEach(animateCount);

// Hide loader after window load
window.addEventListener('load', ()=>{ const L=document.getElementById('loader'); if(L){ setTimeout(()=>{ L.style.opacity=0; setTimeout(()=>L.remove(),400) },700) } })

// Rotating happy quotes in quote-bar
const quotes = [
  "Small acts, big smiles 😊",
  "Stitching hope, one thread at a time!",
  "Feeding souls, fueling dreams.",
  "Volunteer today — become a joy distributor!"
];
let qi = 0;
function rotateQuote(){
  const el = document.querySelector('.quote-bar .qtext');
  if(!el) return;
  el.textContent = quotes[qi%quotes.length];
  qi++;
}
setInterval(rotateQuote, 5000);
rotateQuote();

// Fix timeline alternating sides: add class based on index
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.trow').forEach((r,i)=>{
    r.classList.add(i%2===0? 'left-side':'right-side');
  });
});

// Keep existing reveal observer
