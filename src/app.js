/* Trial of the Day – cardiology quiz. Vanilla JS, no build step.
   Expects window.TRIALS from data/trials.js. */
'use strict';
const T = window.TRIALS;

/* ---------- UTIL ---------- */
const EPOCH=Date.UTC(2026,8,20);               // day 0 = 20 Sep 2026 (so a full 62-day cycle is already archived)
const DAY=86400000;
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function shuffle(arr,rnd){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
const ORDER=shuffle(T.map((_,i)=>i),mulberry(2027));
function todayNum(){const d=new Date();return Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())-EPOCH)/DAY)}
function dayDate(n){return new Date(EPOCH+n*DAY)}
function fmt(n,o){return dayDate(n).toLocaleDateString('en-GB',Object.assign({timeZone:'UTC'},o))}
function trialFor(n){return T[ORDER[((n%T.length)+T.length)%T.length]]}
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* storage (best effort) */
let mem={};
function load(){try{const r=localStorage.getItem('ctq-v3');if(r)mem=JSON.parse(r)||{}}catch(e){}}
function save(){try{localStorage.setItem('ctq-v3',JSON.stringify(mem))}catch(e){}}

/* ---------- QUIZ BUILD ---------- */
function buildQuiz(n){
  const t=trialFor(n),ti=T.indexOf(t),rnd=mulberry(n*7919+ti*131+11);
  // name options: prefer same category
  const same=T.filter(x=>x!==t&&x.cat===t.cat),other=T.filter(x=>x!==t&&x.cat!==t.cat);
  const picks=shuffle(same,rnd).concat(shuffle(other,rnd)).slice(0,3).map(x=>x.n);
  // year options
  const ys=new Set([t.y]),cand=shuffle([-8,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6],rnd);
  for(const d of cand){const y=t.y+d;if(y>=1985&&y<=2025&&ys.size<4)ys.add(y)}
  const mk=(correct,wrong)=>{const o=shuffle([correct].concat(wrong),rnd);return{opts:o,ans:o.indexOf(correct)}};
  const qs=[];
  let m=mk(t.n,picks);qs.push({q:"Which landmark trial is shown in the diagram?",o:m.opts,a:m.ans,e:t.n+" – "+t.full+"."});
  const yrs=[...ys].sort((a,b)=>a-b).map(String);
  qs.push({q:"In what year was this trial published?",o:yrs,a:yrs.indexOf(String(t.y)),e:t.n+" was published in "+t.y+" ("+t.j+")."});
  m=mk(t.f,t.fw);qs.push({q:"What did the trial find?",o:m.opts,a:m.ans,e:t.stat+"."});
  t.q.forEach(x=>{const mm=mk(x[1],x[2]);qs.push({q:x[0],o:mm.opts,a:mm.ans,e:x[3]})});
  return{t,qs};
}

/* ---------- DIAGRAM ---------- */
function wrap(s,max){const w=s.split(' '),l=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>max){l.push(c);c=x}else c=(c+' '+x).trim()});if(c)l.push(c);return l}
function tspans(lines,x,y,lh,cls,anchor){return lines.map((l,i)=>`<text class="${cls}" x="${x}" y="${y+i*lh}" text-anchor="${anchor||'middle'}">${esc(l)}</text>`).join('')}
function diagram(t,rev){
  const k=t.arms.length,W=720;
  let s=`<svg viewBox="0 0 ${W} 372" role="img" aria-label="Trial design diagram"><defs><marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L8,4L0,8z" fill="var(--mute)"/></marker></defs>`;
  // population
  const pl=wrap(t.pop,52);
  s+=`<rect class="dbox" x="150" y="8" width="420" height="${44+pl.length*16}" rx="10"/><text class="dlab" x="360" y="25" text-anchor="middle">POPULATION · n = ${esc(t.N)}</text>${tspans(pl,360,44,16,'dtxt')}`;
  const py=8+44+pl.length*16;
  // randomise circle
  const cy=py+30;
  s+=`<line class="arrow" x1="360" y1="${py}" x2="360" y2="${cy-17}" marker-end="url(#ah)"/><circle class="rand" cx="360" cy="${cy}" r="16"/><text class="rand-t" x="360" y="${cy+4.5}" text-anchor="middle">R</text>`;
  // arms
  const gap=10,aw=(W-20-(k-1)*gap)/k,ay=cy+48,ah=62;
  for(let i=0;i<k;i++){
    const x=10+i*(aw+gap),cx=x+aw/2,lines=wrap(t.arms[i],Math.max(14,Math.floor(aw/7.3)));
    s+=`<path class="arrow" d="M360,${cy+16} C360,${ay-14} ${cx},${ay-26} ${cx},${ay-2}" marker-end="url(#ah)"/>`;
    s+=`<rect class="dbox arm${i}" x="${x}" y="${ay}" width="${aw}" height="${ah}" rx="10" style="stroke-width:2.2"/><text class="dlab" x="${cx}" y="${ay+17}" text-anchor="middle">ARM ${i+1}</text>${tspans(lines,cx,ay+36,15,'dbold')}`;
    s+=`<line class="arrow" x1="${cx}" y1="${ay+ah}" x2="${cx}" y2="${ay+ah+18}"/>`;
  }
  const fy=ay+ah+18;
  s+=`<rect class="dbox" x="10" y="${fy}" width="700" height="26" rx="13"/><text class="dtxt" x="360" y="${fy+17}" text-anchor="middle">Follow-up: ${esc(t.fu)}</text>`;
  const ey=fy+26+14;
  s+=`<line class="arrow" x1="360" y1="${fy+26}" x2="360" y2="${ey}" marker-end="url(#ah)"/>`;
  const el=wrap(t.ep,70),eh=36+el.length*16+(rev?20:0);
  s+=`<rect class="dbox endbox ${rev?'rev':''}" x="110" y="${ey}" width="500" height="${eh}" rx="10"/><text class="dlab" x="360" y="${ey+17}" text-anchor="middle">PRIMARY ENDPOINT</text>${tspans(el,360,ey+36,16,'dbold')}`;
  if(rev)s+=`<text class="stat" x="360" y="${ey+36+el.length*16+2}" text-anchor="middle">${esc(t.stat)}</text>`;
  s+=`</svg>`;
  return s.replace('viewBox="0 0 720 372"',`viewBox="0 0 720 ${Math.max(300,ey+eh+10)}"`);
}


/* ---------- KEY FIGURE (original schematic redraw of published event rates) ---------- */
const CCOL=['var(--navy)','var(--red)','var(--teal)','var(--amber)'];
function keyFigure(t){
  const k=t.km;if(!k)return '<p style="padding:20px;color:var(--mute)">No key figure available.</p>';
  const T=k[0],u=k[1],r=k[2],approx=k[3];
  const W=720,H=320,L=56,R=150,Tp=18,B=48,pw=W-L-R,ph=H-Tp-B;
  const mx=Math.max(...r),step=[1,2,5,10,20,25,50].find(x=>mx*1.15/x<=6)||50,ymax=Math.ceil(mx*1.1/step)*step;
  const X=v=>L+pw*v/T,Y=v=>Tp+ph-ph*v/ymax;
  let s=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Schematic cumulative event curves">`;
  for(let v=0;v<=ymax+1e-9;v+=step){s+=`<line class="grid" x1="${L}" x2="${L+pw}" y1="${Y(v)}" y2="${Y(v)}"/><text class="tick" x="${L-8}" y="${Y(v)+4}" text-anchor="end">${v}</text>`}
  const nt=5;for(let i=0;i<=nt;i++){const v=T*i/nt;s+=`<text class="tick" x="${X(v)}" y="${Tp+ph+16}" text-anchor="middle">${+v.toFixed(1)}</text>`}
  s+=`<line class="ax" x1="${L}" x2="${L}" y1="${Tp}" y2="${Tp+ph}"/><line class="ax" x1="${L}" x2="${L+pw}" y1="${Tp+ph}" y2="${Tp+ph}"/>`;
  s+=`<text class="tick" x="${L+pw/2}" y="${H-8}" text-anchor="middle">${u}</text><text class="tick" transform="translate(14 ${Tp+ph/2}) rotate(-90)" text-anchor="middle">Patients with event (%)</text>`;
  // curves (concave cumulative-incidence shape ending exactly at published value)
  const g=1.1,den=1-Math.exp(-g);
  const ends=[];
  r.forEach((e,i)=>{let d='';for(let j=0;j<=40;j++){const f=j/40,v=e*(1-Math.exp(-g*f))/den;d+=(j?'L':'M')+X(T*f).toFixed(1)+','+Y(v).toFixed(1)}
    s+=`<path class="cv" d="${d}" stroke="${CCOL[i]}"/>`;ends.push([i,Y(e)])});
  // label placement avoiding overlap
  ends.sort((a,b)=>a[1]-b[1]);let last=-99;
  ends.forEach(([i,y])=>{let yy=Math.max(y,last+30);last=yy;const lab=wrap(t.arms[i],20);
    s+=`<circle cx="${L+pw}" cy="${y}" r="4" fill="${CCOL[i]}"/><text class="dbold" x="${L+pw+10}" y="${yy-2}" style="fill:${CCOL[i]}!important">${r[i]}%</text>`+lab.slice(0,2).map((l,n)=>`<text class="tick" x="${L+pw+10}" y="${yy+11+n*11}">${esc(l)}</text>`).join('')});
  s+=`</svg><p class="figcap">Endpoint: ${esc(t.ep)}. ${approx?'Approximate: derived from annual event rates. ':''}Original schematic redrawn from published event rates; curve shapes are illustrative and this is not the journal's figure. Source: ${esc(t.j)} ${t.y}.</p>`;
  return s;
}

/* ---------- VIEWS ---------- */
let view='today',cur=null,TODAY=todayNum();
function setTab(v){view=v;$('#t-today').setAttribute('aria-selected',v==='today'||v==='quiz'&&cur&&cur.n===TODAY);$('#t-arch').setAttribute('aria-selected',v==='archive'||v==='quiz'&&cur&&cur.n!==TODAY)}
function stats(){
  const done=Object.keys(mem).filter(k=>mem[k].done);
  let streak=0;for(let d=TODAY;d>=0;d--){if(mem[d]&&mem[d].done)streak++;else if(d===TODAY)continue;else break}
  const avg=done.length?Math.round(done.reduce((a,k)=>a+mem[k].score/mem[k].total,0)/done.length*100):0;
  return `<div class="stats"><span>Streak <b>${streak}</b></span><span>Completed <b>${done.length}</b></span><span>Average <b>${avg}%</b></span></div>`;
}
function startQuiz(n){
  const b=buildQuiz(n),saved=mem[n];
  cur={n,t:b.t,qs:b.qs,i:0,score:0,res:[],answered:false};
  if(saved&&saved.done&&false){}
  view='quiz';render();
}
function render(){
  $('#date').textContent=fmt(TODAY,{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  $('#t-today').setAttribute('aria-selected',String(view==='today'||(view==='quiz'&&cur.n===TODAY)));
  $('#t-arch').setAttribute('aria-selected',String(view==='archive'||(view==='quiz'&&cur.n!==TODAY)));
  const app=$('#app');
  if(view==='today'){
    const t=trialFor(TODAY),st=mem[TODAY];
    app.innerHTML=stats()+`<div class="card"><div class="meta"><span class="pill">${esc(t.cat)}</span><span>Trial #${TODAY+1} · ${fmt(TODAY,{day:'numeric',month:'short'})}</span></div><div class="diagram">${diagram(t,false)}</div></div>
    <div class="card"><div class="q" style="margin-top:0">Can you name this trial?</div><p style="margin:0 0 4px;color:var(--mute)">Five questions: name, year, key finding and two clinical-context questions. Answering the finding question unlocks the key figure.</p>${st&&st.done?`<p>Today's score: <b>${st.score}/${st.total}</b></p>`:''}<button class="btn" id="go">${st&&st.done?'Retake today\'s quiz':'Start today\'s quiz'}</button></div>`;
    $('#go').onclick=()=>startQuiz(TODAY);
  }else if(view==='archive'){
    let h=stats()+'<div class="arch">';
    for(let d=TODAY;d>=0;d--){const t=trialFor(d),st=mem[d];
      h+=`<button class="arow" data-d="${d}"><span><span class="d">${fmt(d,{weekday:'short',day:'numeric',month:'short'})}</span> <span class="c">· ${esc(t.cat)}${st&&st.done?' · '+esc(t.n):''}</span></span><span class="badge ${st&&st.done?'done':''}">${st&&st.done?st.score+'/'+st.total:(d===TODAY?'Today':'Practice')}</span></button>`}
    app.innerHTML=h+'</div>';
    app.querySelectorAll('.arow').forEach(b=>b.onclick=()=>startQuiz(+b.dataset.d));
  }else if(view==='quiz'){renderQuiz()}
}
function drawFig(){
  const c=cur,t=c.t,rev=c.res[0]!==undefined,mode=c.fig||'design';
  $('#fig').innerHTML=mode==='result'&&c.unlocked?keyFigure(t):diagram(t,rev);
  $('#ft-d').setAttribute('aria-selected',String(mode!=='result'||!c.unlocked));
  $('#ft-r').setAttribute('aria-selected',String(mode==='result'&&c.unlocked));
  $('#ft-r').disabled=!c.unlocked;
  $('#ft-d').onclick=()=>{c.fig='design';drawFig()};
  $('#ft-r').onclick=()=>{c.fig='result';drawFig()};
}
function renderQuiz(){
  const c=cur,t=c.t,app=$('#app'),done=c.i>=c.qs.length,rev=done||c.i>0&&c.res[0]!==undefined;
  const prog=c.qs.map((_,i)=>`<i class="${c.res[i]===true?'ok':c.res[i]===false?'no':i===c.i&&!done?'on':''}"></i>`).join('');
  if(done)c.unlocked=true;
  let h=`<div class="card"><div class="meta"><span class="pill">${esc(t.cat)}</span><span>${fmt(c.n,{weekday:'short',day:'numeric',month:'short'})}${c.n!==TODAY?' · archive':''}</span></div><div class="figtabs"><button class="ft" id="ft-d">Trial design</button><button class="ft" id="ft-r">Key figure${c.unlocked?'':' 🔒'}</button></div><div class="diagram" id="fig"></div></div>`;
  if(!done){
    const q=c.qs[c.i];
    h+=`<div class="card"><div class="progress">${prog}</div><div class="qn">Question ${c.i+1} of ${c.qs.length}</div><div class="q">${esc(q.q)}</div><div class="opts">`+
      q.o.map((o,i)=>`<button class="opt" data-i="${i}"><b>${'ABCD'[i]}</b><span>${esc(o)}</span></button>`).join('')+`</div><div id="fb"></div></div>`;
    app.innerHTML=h;drawFig();
    app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>answer(+b.dataset.i));
  }else{
    mem[c.n]={done:true,score:c.score,total:c.qs.length};save();
    h+=`<div class="card"><div class="progress">${prog}</div><div class="score">${c.score}/${c.qs.length}</div><p style="margin:2px 0 0;color:var(--mute)">${c.score===c.qs.length?'Perfect.':c.score>=3?'Good work.':'Worth another look.'}</p></div>
    <div class="card reveal"><h2>${esc(t.n)}</h2><div class="full">${esc(t.full)} · ${esc(t.j)} ${t.y}</div><dl class="kv"><dt>Population</dt><dd>${esc(t.pop)} (n = ${esc(t.N)})</dd><dt>Comparison</dt><dd>${t.arms.map(esc).join(' vs ')}</dd><dt>Primary endpoint</dt><dd>${esc(t.ep)}</dd><dt>Result</dt><dd><b>${esc(t.stat)}</b></dd><dt>Conclusion</dt><dd>${esc(t.f)}</dd></dl>
    <div class="links"><a href="https://www.wikijournalclub.org/wiki/Special:Search?search=${encodeURIComponent(t.n)}" target="_blank" rel="noopener">WikiJournalClub: ${esc(t.n)}</a><a href="https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(t.full)}" target="_blank" rel="noopener">PubMed: original paper</a></div><button class="btn" id="again">Retry</button> <button class="btn ghost" id="arc">Browse archive</button></div>`;
    app.innerHTML=h;drawFig();
    $('#again').onclick=()=>startQuiz(c.n);$('#arc').onclick=()=>{view='archive';render()};
  }
  window.scrollTo({top:0,behavior:'smooth'});
}
function answer(i){
  const c=cur;if(c.answered)return;c.answered=true;
  const q=c.qs[c.i],ok=i===q.a;c.res[c.i]=ok;if(ok)c.score++;
  document.querySelectorAll('.opt').forEach((b,j)=>{b.disabled=true;if(j===q.a)b.classList.add('right');else if(j===i)b.classList.add('wrong')});
  const last=c.i===c.qs.length-1;
  $('#fb').innerHTML=`<div class="fb"><b>${ok?'Correct.':'Not quite.'}</b> ${esc(q.e)}</div><button class="btn" id="nx">${last?'See results':'Next question'}</button>`;
  document.querySelectorAll('.progress i')[c.i].className=ok?'ok':'no';
  if(c.i===2){c.unlocked=true;c.fig='result'}  // finding answered: key figure unlocks
  drawFig();
  if(c.i===2)document.getElementById('ft-r').textContent='Key figure';
  $('#nx').onclick=()=>{c.i++;c.answered=false;renderQuiz()};
  $('#nx').scrollIntoView({block:'nearest',behavior:'smooth'});
}

$('#t-today').onclick=()=>{view='today';render()};
$('#t-arch').onclick=()=>{view='archive';render()};
document.addEventListener('visibilitychange',()=>{if(!document.hidden){const n=todayNum();if(n!==TODAY){TODAY=n;if(view!=='quiz'){render()}}}});
load();render();
