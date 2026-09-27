const baseExercises = [
['oberer Rücken','abgespreiztes Kurzhantelziehen','Kurzhantel'],['oberer Rücken','Weit-Arm-Bandziehen / Face Pulls','Band'],['oberer Rücken','Band weit-Arm-ziehen','Band'],['Rücken','Klimmzüge','Körpergewicht'],['mittlerer Rücken','Band-Rudern','Band'],['Brust','Kurzhantelbankdrücken','Kurzhantel + Bank'],['obere Brust','Kurzhantel-Schrägbankdrücken','Kurzhantel + Bank'],['untere Brust','Kurzhantel-Schrägbodendrücken','Kurzhantel'],['Bauch','Crunches + Seitcrunches','Körpergewicht'],['Bauch','Crunches am Band + Hüftrotation','Band'],['Bauch','Bein hochziehen + Hüftrotation','Körpergewicht'],['Schultern','Kurzhantel-Schulterdrücken','Kurzhantel'],['seitliche Schultern','Kurzhantel-Seitheben (2 s)','Kurzhantel'],['seitliche Schultern','Band-Reverse-Ziehen','Band'],['hintere Schultern','Kurzhantel Reverse Butterfly','Kurzhantel'],['vordere Schulter','Kurzhantel Frontheben','Kurzhantel'],['Schultern','Handstand-Push-ups','Körpergewicht'],['Beine','Kurzhantel-Kreuzheben','Kurzhantel'],['Beine','Bulgarian Split Squats','Kurzhantel + Bank'],['Waden','Wadenheben an der Bank','Kurzhantel + Bank'],['Oberschenkel','Bank-Drücken (Keller)','Bank'],['Po','Über-Kreuz-Gehen','Band'],['Po','Hip Thrusts einbeinig','Bank'],['Po','Hanteleseltritte','Kurzhantel'],['Bizeps','Kurzhantel-Hammercurls','Kurzhantel'],['Bizeps','Bizepscurls auf Schrägbank','Kurzhantel + Bank'],['Unterarmbeuger','Kurzhantel Curls','Kurzhantel'],['Unterarmbeuger','Band Curls','Band'],['Unterarmstrecker','Kurzhantel Reverse Curls','Kurzhantel'],['Unterarmstrecker','Band Reverse Curls','Band'],['Unterarm','Handquetscher','Handtrainer'],['Trizeps','Kurzhantel über Kopf','Kurzhantel'],['Brust','Liegestütze','Körpergewicht']
].map((x,i)=>({id:'e'+i,group:x[0],name:x[1],equipment:x[2],target:'3 × 8–12',load:'',active:true,history:[]}));
const todayNames = new Set(['abgespreiztes Kurzhantelziehen','Band weit-Arm-ziehen','Kurzhantel-Schrägbodendrücken','Crunches + Seitcrunches','Kurzhantel-Seitheben (2 s)','Kurzhantel Frontheben','Kurzhantel-Kreuzheben','Wadenheben an der Bank','Über-Kreuz-Gehen','Hanteleseltritte','Kurzhantel Curls','Band Curls','Kurzhantel Reverse Curls','Band Reverse Curls','Kurzhantel über Kopf']);
const skills = [
{name:'Pistol Squat',icon:'🦵',family:'Beine',boss:'Der Einbeinige',steps:['15 saubere Squats','Split Squat 10/Seite','Box Pistol','Pistol mit Unterstützung','Negativ-Pistol','Freier Pistol Squat'],metric:'Wdh.'},
{name:'L-Sit',icon:'🪑',family:'Core',boss:'Der Kompressor',steps:['Stütz halten','Knie anheben','Tuck Sit','Ein Bein strecken','Beide Beine teilweise','Voller L-Sit'],metric:'Sek.'},
{name:'Handstand',icon:'🤸',family:'Balance',boss:'Die verkehrte Welt',steps:['Wrist Prep + Pike Hold','Wall Walk','Bauch-zur-Wand-Hold','Kick-up an Wand','Freier Hold 5 s','Freier Hold 30 s'],metric:'Sek.'},
{name:'Handstand Push-up',icon:'⬆️',family:'Push',boss:'Der Turm',steps:['Pike Push-up','Erhöhte Pike Push-up','Negativer Wall HSPU','Wall HSPU','Deficit Wall HSPU','Freier HSPU'],metric:'Wdh.'},
{name:'Muscle-up',icon:'🚀',family:'Pull',boss:'Der Türsteher',steps:['8 Pull-ups','Chest-to-Bar','Explosive Pull-ups','Straight-Bar-Dip','Band Muscle-up','Strict Muscle-up'],metric:'Wdh.'},
{name:'Front Lever',icon:'🦇',family:'Pull',boss:'Der Abgrund',steps:['Active Hang','Tuck Lever','Advanced Tuck','Single Leg','Straddle','Full Front Lever'],metric:'Sek.'},
{name:'Back Lever',icon:'🌒',family:'Pull',boss:'Die Rückseite',steps:['German Hang','Skin the Cat','Tuck Back Lever','Advanced Tuck','Straddle','Full Back Lever'],metric:'Sek.'},
{name:'Planche',icon:'🛸',family:'Push',boss:'Der Tempel',steps:['Planche Lean','Frog Stand','Tuck Planche','Advanced Tuck','Straddle Planche','Full Planche'],metric:'Sek.'},
{name:'Human Flag',icon:'🚩',family:'Side/Core',boss:'Der Fahnenträger',steps:['Side Plank','Vertical Flag Hold','Tuck Flag','One-Leg Flag','Straddle Flag','Full Human Flag'],metric:'Sek.'},
{name:'Dragon Flag',icon:'🐉',family:'Core',boss:'Der Drache',steps:['Hollow Hold','Leg Raises','Negative Dragon Flag','Tuck Dragon Flag','One-Leg Dragon','Full Dragon Flag'],metric:'Wdh.'},
{name:'One-Arm Pull-up',icon:'🦍',family:'Pull',boss:'Der Titan',steps:['10 Pull-ups','Archer Pull-up','Typewriter Pull-up','Assisted One-Arm','Negative One-Arm','One-Arm Pull-up'],metric:'Wdh.'},
{name:'V-Sit',icon:'✌️',family:'Core',boss:'Der Winkel',steps:['Tuck Sit','L-Sit 15 s','L-Sit 30 s','High L-Sit','Tuck V-Sit','V-Sit'],metric:'Sek.'},
{name:'Press to Handstand',icon:'🔺',family:'Balance',boss:'Der Aufstieg',steps:['Pike Compression','Frog Stand','Straddle Compression','Box Press Drill','Negative Press','Press Handstand'],metric:'Wdh.'},
{name:'90° Hold',icon:'📐',family:'Push',boss:'Der rechte Winkel',steps:['Push-up Hold','Pseudo Planche Push-up','Bent-Arm Stand','Negative 90°','Assisted 90°','90° Hold'],metric:'Sek.'},
{name:'Shrimp Squat',icon:'🦐',family:'Beine',boss:'Die Garnele',steps:['Split Squat','Reverse Lunge','Assisted Shrimp','Partial Shrimp','Full Shrimp','Weighted Shrimp'],metric:'Wdh.'},
{name:'Dragon Squat',icon:'🐲',family:'Beine',boss:'Der Knoten',steps:['Cossack Squat','Curtsy Lunge','Assisted Dragon','Partial Dragon','Full Dragon','Weighted Dragon'],metric:'Wdh.'},
{name:'Handstand Walk',icon:'🚶',family:'Balance',boss:'Der Spaziergang',steps:['Wall Handstand 30 s','Shoulder Taps','Wall Walk-offs','2 freie Schritte','5 freie Schritte','10 m Handstand Walk'],metric:'Meter'},
{name:'One-Arm Handstand',icon:'☝️',family:'Balance',boss:'Der Monolith',steps:['Handstand 45 s','Weight Shifts','Finger-Assisted Hold','One-Hand Wall Hold','2 s One-Arm','10 s One-Arm'],metric:'Sek.'}
].map((s,i)=>({...s,id:'s'+i}));
const dailyPlans = [
  {name:'Ganzkörper A',focus:'Zug · Beine · Druck · Rücken · Schulter · Core · Arme',blocks:[['e3','e18'],['e5','e4'],['e11','e8'],['e25','e31']]},
  {name:'Ganzkörper B',focus:'Hintere Kette · Brust · Rücken · Gesäß · Schulter · Core · Unterarme',blocks:[['e17','e7'],['e0','e21'],['e12','e10'],['e27','e29']]},
  {name:'Ganzkörper C',focus:'Beine · obere Brust · Rücken · Gesäß · Schulter · Core · Arme',blocks:[['e18','e6'],['e4','e23'],['e13','e9'],['e24','e31']]}
];
const defaults={xp:280,level:3,streak:0,exercises:baseExercises,skillProgress:{},equipment:{pullup:true,bench:true,dumbbell:true,bands:true,rack:false,barbell:false,rings:false,dips:false},quests:{date:'',train:false,skill:false,challenge:false},records:{spiderman:0},workouts:0,bodyChecks:[],settings:{gameMode:true,coachTone:'motivierend',reminders:false},planRotation:0,lastDailyCompletedDate:'',customSelection:[],activeWorkout:null};
function localDateKey(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
function load(){
  try{
    const raw=JSON.parse(localStorage.getItem('fitquest-state')||'{}');
    const s={...structuredClone(defaults),...raw};
    s.settings={...defaults.settings,...raw.settings};
    s.equipment={...defaults.equipment,...raw.equipment};
    s.records={...defaults.records,...raw.records};
    s.quests={...defaults.quests,...raw.quests};
    if(!Array.isArray(s.exercises)||!s.exercises.length)s.exercises=structuredClone(baseExercises);
    if(!Array.isArray(s.customSelection))s.customSelection=[];
    return s;
  }catch{return structuredClone(defaults)}
}
let state=load();
function save(){localStorage.setItem('fitquest-state',JSON.stringify(state))}
function ensureDailyReset(render=false){
  const today=localDateKey();
  if(state.quests.date!==today){
    state.quests={date:today,train:false,skill:false,challenge:false};
    if(state.activeWorkout && state.activeWorkout.date!==today)state.activeWorkout=null;
    save();
    if(render && currentView==='home')home();
  }
}
function scheduleMidnightReset(){
  const now=new Date();
  const next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0,150);
  setTimeout(()=>{ensureDailyReset(true);scheduleMidnightReset()},next-now);
}
const $=s=>document.querySelector(s); const view=$('#view');
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.remove('hidden');setTimeout(()=>t.classList.add('hidden'),2400)}
function levelFromXp(){state.level=Math.floor(state.xp/500)+1;return state.level}
function addXp(n,msg){state.xp+=n;levelFromXp();save();toast(`${msg||'Stark!'} +${n} XP ⚡`)}
function header(){document.querySelectorAll('.bottomnav button').forEach(b=>b.classList.toggle('active',b.dataset.view===currentView));}
let currentView='home';
const pct=(v,max)=>Math.min(100,Math.round(v/max*100));
function completeQuest(k,xp,msg){ensureDailyReset();if(state.quests[k])return false;state.quests[k]=true;save();addXp(xp,msg||'Daily Quest geschafft!');return true}
function home(){
  ensureDailyReset();levelFromXp();const next=500-(state.xp%500), plan=currentDailyPlan();
  view.innerHTML=`
<section class="hero"><div class="levelrow"><div><div class="muted">DEIN CHARAKTER</div><div class="level">LEVEL ${state.level}</div></div><div class="xp">⚡ ${state.xp} XP</div></div><div class="bar"><i style="width:${pct(state.xp%500,500)}%"></i></div><div class="statrow"><div class="stat"><b>${state.workouts}</b><span class="tiny">Workouts</span></div><div class="stat"><b>${Object.values(state.skillProgress).filter(x=>x>=5).length}</b><span class="tiny">Skills</span></div><div class="stat"><b>${state.records.spiderman}</b><span class="tiny">Spider-Runden</span></div><div class="stat"><b>${next}</b><span class="tiny">XP bis Level</span></div></div></section>
<div class="sectiontitle"><h2>🎯 Heute</h2><span class="tag green">${plan.name}</span></div>
<div class="card"><h3>Coach sagt</h3><p class="muted">Heute stehen ${plan.blocks.flat().length} Übungen in vier Wechselblöcken an. Unterschiedliche Muskelgruppen wechseln sich ab, damit du die Einheit kompakt halten kannst. Schwere Sätze bekommen trotzdem die Pause, die du brauchst.</p><button class="btn block" onclick="go('training')">Daily Training öffnen</button></div>
<div class="sectiontitle"><h2>📜 Daily Quests</h2><span class="muted">Reset täglich 00:00</span></div>
<div class="card">${quest('train','Training absolvieren',250)}${quest('skill','10 Min. Skilltraining',120)}${quest('challenge','Spider-Man-Challenge',300)}</div>
<div class="sectiontitle"><h2>👹 Nächster Boss</h2></div>
<div class="boss"><div class="bossicon">🦵</div><div class="muted">BOSSFIGHT</div><h2>Der Einbeinige</h2><p>Pistol Squat – finde zuerst dein aktuelles Level.</p><button class="btn warn" onclick="openSkill('s0')">Skill prüfen</button></div>`
}
function quest(k,label,xp){return `<div class="quest" onclick="toggleQuest('${k}',${xp})"><div class="check ${state.quests[k]?'done':''}">${state.quests[k]?'✓':''}</div><div><b>${label}</b><div class="muted">${state.quests[k]?'Heute erledigt':`+${xp} XP`}</div></div></div>`}
window.toggleQuest=(k,xp)=>{ensureDailyReset();if(state.quests[k])return toast('Heute schon erledigt ✅');completeQuest(k,xp,'Quest geschafft!');home()}
function currentDailyPlan(){return dailyPlans[(state.planRotation||0)%dailyPlans.length]}
function getExercise(id){return state.exercises.find(e=>e.id===id)}
function sessionDone(id){return !!(state.activeWorkout&&state.activeWorkout.date===localDateKey()&&state.activeWorkout.done&&state.activeWorkout.done[id])}
function startSession(mode,ids,title){
  const cur=state.activeWorkout;
  if(!cur||cur.date!==localDateKey()||cur.mode!==mode||JSON.stringify(cur.ids)!==JSON.stringify(ids)){
    state.activeWorkout={date:localDateKey(),mode,title,ids:[...ids],done:{}};save();
  }
}
function training(){showDailyTraining()}
function trainingTabs(active){return `<div class="tabs"><button class="tab ${active==='daily'?'active':''}" onclick="showDailyTraining()">Heute</button><button class="tab ${active==='custom'?'active':''}" onclick="showCustomBuilder()">Individuell</button><button class="tab ${active==='catalog'?'active':''}" onclick="showAllExercises()">Übungen</button><button class="tab ${active==='challenge'?'active':''}" onclick="challenge()">🕷️ Challenge</button></div>`}
function showDailyTraining(){
  const plan=currentDailyPlan(), ids=plan.blocks.flat();startSession('daily',ids,plan.name);
  const done=ids.filter(sessionDone).length;
  view.innerHTML=`<div class="sectiontitle"><div><h2>🏋️ Daily Training</h2><div class="muted">${plan.name} · ca. 30–45 Min.</div></div><span class="tag green">${done}/${ids.length}</span></div>
  ${trainingTabs('daily')}
  <div class="training-summary"><b>Heute auf einen Blick</b><span>${plan.focus}</span><small>Vier Wechselblöcke: A → B → A → B. So bekommt die gerade belastete Muskelgruppe während der anderen Übung Zeit zur Erholung.</small></div>
  <div class="workout-overview">${plan.blocks.map((b,i)=>workoutBlock(b,i)).join('')}</div>
  <button class="btn block" style="margin-top:14px" onclick="completeWorkout('daily')">✅ Training abschließen</button>`
}
window.showDailyTraining=showDailyTraining;
function workoutBlock(ids,i){
  const letters=['A','B','C','D'];
  return `<section class="pairblock"><div class="pairhead"><b>Wechselblock ${letters[i]}</b><span>abwechselnd</span></div>${ids.map((id,n)=>compactExercise(getExercise(id),n+1)).join('')}</section>`
}
function compactExercise(e,n){if(!e)return '';const done=sessionDone(e.id);return `<div class="compact-exercise ${done?'isdone':''}"><div class="exno">${done?'✓':n}</div><button class="exercise-main" onclick="logExercise('${e.id}')"><b>${e.name}</b><span>${e.group} · ${e.equipment}</span></button><div class="exercise-target"><b>${e.target||'3 × 8–12'}</b><span>${e.load||'Gewicht offen'}</span></div></div>`}
function groupExercises(exercises,renderRow){
  const groups={};exercises.forEach(e=>(groups[e.group||'Sonstiges']??=[]).push(e));
  return Object.entries(groups).sort((a,b)=>a[0].localeCompare(b[0],'de')).map(([g,es])=>`<details class="exgroup"><summary>${g}<span>${es.length}</span></summary><div class="list">${es.map(renderRow).join('')}</div></details>`).join('')
}
window.showAllExercises=()=>{view.innerHTML=`<div class="sectiontitle"><h2>Übungskatalog</h2><button class="btn" onclick="openExerciseForm()">+ Neue Übung</button></div>${trainingTabs('catalog')}<div class="notice">Dein kompletter Katalog bleibt editierbar. Muskelgruppen sind eingeklappt, damit du schneller findest, was du suchst.</div><div style="margin-top:12px">${groupExercises(state.exercises.filter(e=>e.active),e=>exerciseRow(e))}</div>`}
function exerciseRow(e){return `<div class="exercise"><div><div class="name">${e.name}</div><div class="muted">${e.equipment} · Ziel ${e.target}</div></div><button class="btn secondary small" onclick="logExercise('${e.id}')">Eintragen</button></div>`}
window.showCustomBuilder=()=>{
  const selected=new Set(state.customSelection||[]);
  view.innerHTML=`<div class="sectiontitle"><div><h2>🎛️ Individuelles Training</h2><div class="muted">Bis zu 8 Übungen frei wählen</div></div><span class="tag ${selected.size===8?'yellow':'green'}">${selected.size}/8</span></div>${trainingTabs('custom')}
  <div class="training-summary"><b>Deine Session</b><span>${selected.size?`${selected.size} Übungen gewählt`:'Noch nichts gewählt'}</span><small>Wähle frei aus deinem Katalog. Die Reihenfolge kannst du anschließend automatisch muskelgruppenfreundlich sortieren lassen.</small></div>
  <div class="custom-actions"><button class="btn secondary" onclick="autoOrderCustom()">↕️ Sinnvoll sortieren</button><button class="btn ${selected.size?'':'disabled'}" onclick="startCustomWorkout()">▶ Starten</button></div>
  <div style="margin-top:12px">${groupExercises(state.exercises.filter(e=>e.active),e=>customPickRow(e,selected.has(e.id)))}</div>`
}
function customPickRow(e,checked){return `<label class="exercise pickrow"><div><div class="name">${e.name}</div><div class="muted">${e.equipment} · ${e.target}</div></div><input type="checkbox" ${checked?'checked':''} onchange="toggleCustom('${e.id}',this.checked)"></label>`}
window.toggleCustom=(id,on)=>{state.customSelection=state.customSelection||[];if(on&&!state.customSelection.includes(id)){if(state.customSelection.length>=8){toast('Maximal 8 Übungen');showCustomBuilder();return}state.customSelection.push(id)}if(!on)state.customSelection=state.customSelection.filter(x=>x!==id);save();showCustomBuilder()}
function muscleBucket(group=''){const g=group.toLowerCase();if(g.includes('rücken')||g.includes('bizeps'))return 'pull';if(g.includes('brust')||g.includes('trizeps')||g.includes('schulter'))return 'push';if(g.includes('bein')||g.includes('waden')||g.includes('oberschenkel')||g.includes('po'))return 'legs';if(g.includes('bauch')||g.includes('core'))return 'core';if(g.includes('unterarm'))return 'forearm';return 'other'}
window.autoOrderCustom=()=>{
  const src=(state.customSelection||[]).map(getExercise).filter(Boolean), buckets={};src.forEach(e=>(buckets[muscleBucket(e.group)]??=[]).push(e.id));
  const order=['pull','legs','push','core','forearm','other'];const out=[];let changed=true;
  while(changed){changed=false;for(const k of order){if(buckets[k]?.length){out.push(buckets[k].shift());changed=true}}}
  state.customSelection=out;save();toast('Muskelgruppen abwechselnd sortiert ↕️');showCustomBuilder();
}
window.startCustomWorkout=()=>{const ids=(state.customSelection||[]).slice(0,8);if(!ids.length)return toast('Wähle mindestens eine Übung');startSession('custom',ids,'Individuelles Training');renderCustomWorkout()}
function renderCustomWorkout(){const ids=state.activeWorkout?.mode==='custom'?state.activeWorkout.ids:(state.customSelection||[]);view.innerHTML=`<div class="sectiontitle"><div><h2>🎛️ Individuelles Training</h2><div class="muted">${ids.length} Übungen</div></div><span class="tag green">${ids.filter(sessionDone).length}/${ids.length}</span></div>${trainingTabs('custom')}<div class="workout-overview single">${ids.map((id,i)=>compactExercise(getExercise(id),i+1)).join('')}</div><button class="btn block" style="margin-top:14px" onclick="completeWorkout('custom')">✅ Training abschließen</button><button class="btn secondary block" style="margin-top:8px" onclick="showCustomBuilder()">Übungen ändern</button>`}
window.openExerciseForm=()=>modal(`<h2>Neue Übung</h2><div class="formgrid">
<div class="field"><label>Name</label><input id="fName" placeholder="z. B. einarmiges Rudern"></div>
<div class="field"><label>Muskelgruppe</label><input id="fGroup" placeholder="z. B. Rücken"></div>
<div class="field"><label>Equipment</label><select id="fEq"><option>Körpergewicht</option><option>Kurzhantel</option><option>Kurzhantel + Bank</option><option>Band</option><option>Klimmzugstange</option><option>Sonstiges</option></select></div>
<div class="field"><label>Gewicht / Band</label><input id="fLoad" placeholder="z. B. 17,5 kg oder lila"></div>
<div class="field"><label>Ziel</label><input id="fTarget" value="3 × 8–12"></div>
<button class="btn" onclick="saveExercise()">Übung speichern</button></div>`)
window.saveExercise=()=>{const name=$('#fName').value.trim();if(!name)return toast('Bitte Namen eingeben');state.exercises.push({id:'u'+Date.now(),name,group:$('#fGroup').value||'Sonstiges',equipment:$('#fEq').value,load:$('#fLoad').value,target:$('#fTarget').value||'3 × 8–12',active:true,history:[]});save();closeModal();toast('Übung hinzugefügt ✅');showAllExercises()}
window.logExercise=id=>{const e=getExercise(id);if(!e)return;modal(`<h2>${e.name}</h2><div class="formgrid"><div class="field"><label>Gewicht / Band</label><input id="lLoad" value="${e.load||''}"></div><div class="field"><label>Geschaffte Wiederholungen / Sekunden</label><input id="lReps" placeholder="z. B. 12, 11, 10"></div><div class="field"><label>Wie schwer?</label><select id="lRpe"><option>leicht</option><option selected>passend</option><option>schwer</option><option>sehr schwer</option></select></div><button class="btn" onclick="saveLog('${id}')">✅ Leistung speichern & abhaken</button></div>`)}
window.saveLog=id=>{const e=getExercise(id);e.load=$('#lLoad').value;e.history=e.history||[];e.history.push({date:new Date().toISOString(),reps:$('#lReps').value,load:e.load,rpe:$('#lRpe').value});if(state.activeWorkout&&state.activeWorkout.date===localDateKey()&&state.activeWorkout.ids.includes(id))state.activeWorkout.done[id]=true;save();closeModal();addXp(15,'Leistung gespeichert!');if(currentView==='training'){state.activeWorkout?.mode==='custom'?renderCustomWorkout():showDailyTraining()}}
window.completeWorkout=(mode='daily')=>{const ids=state.activeWorkout?.ids||[];const done=ids.filter(sessionDone).length;if(ids.length&&done<Math.ceil(ids.length/2)&&!confirm(`Erst ${done}/${ids.length} Übungen abgehakt. Training trotzdem abschließen?`))return;state.workouts++;if(mode==='daily'){state.planRotation=((state.planRotation||0)+1)%dailyPlans.length;state.lastDailyCompletedDate=localDateKey()}state.activeWorkout=null;save();const gotQuest=completeQuest('train',250,'Daily Training geschafft!');if(!gotQuest){addXp(50,'Workout abgeschlossen!')}home()}
function skillsView(filter='Alle'){const fams=['Alle',...new Set(skills.map(s=>s.family))];view.innerHTML=`<div class="sectiontitle"><h2>🗺️ Skill-Welt</h2><span class="tag yellow">RPG-Modus</span></div><div class="tabs">${fams.map(f=>`<button class="tab ${f===filter?'active':''}" onclick="skillsView('${f}')">${f}</button>`).join('')}</div><div class="skillmap">${skills.filter(s=>filter==='Alle'||s.family===filter).map(skillCard).join('')}</div>`}
function skillCard(s){const p=state.skillProgress[s.id]??0;return `<div class="skill ${p>=s.steps.length?'mastered':''}"><span class="badge">${p>=s.steps.length?'🏆':'⚔️'}</span><div class="muted">${s.family}</div><h3>${s.icon} ${s.name}</h3><div>${p>=s.steps.length?'Gemeistert':`Stufe ${p+1}/${s.steps.length}: ${s.steps[p]}`}</div><div class="skillbar"><i style="width:${pct(p,s.steps.length)}%"></i></div><button class="btn secondary" style="margin-top:10px" onclick="openSkill('${s.id}')">${p?'Weitertrainieren':'Einstufen'}</button></div>`}
window.skillsView=skillsView;
window.openSkill=id=>{const s=skills.find(x=>x.id===id),p=state.skillProgress[id]??0;if(p>=s.steps.length)return modal(`<div class="celebrate">🏆</div><h2>${s.name} gemeistert!</h2><p>Boss <b>${s.boss}</b> wurde bereits besiegt.</p>`);modal(`<div class="muted">${s.icon} ${s.name}</div><h2>${p?`Aktuelle Stufe ${p+1}`:'Kurzer Einstufungscheck'}</h2><p><b>${s.steps[p]}</b></p><p class="muted">Kannst du diese Stufe sauber und kontrolliert?</p><div class="grid"><button class="btn danger" onclick="skillNo('${id}')">❌ Noch nicht</button><button class="btn" onclick="skillYes('${id}')">✅ Ja, kann ich</button></div>${p?`<p class="notice">Erst abhaken, wenn die Bewegung reproduzierbar sauber ist. Kein Zwang zum schnellen Leveln.</p>`:''}`)}
window.skillNo=id=>{closeModal();toast('Genau hier starten wir. 🎯')}
window.skillYes=id=>{ensureDailyReset();const s=skills.find(x=>x.id===id);let p=state.skillProgress[id]??0;p++;state.skillProgress[id]=p;save();closeModal();completeQuest('skill',120,'Skill-Quest geschafft!');if(p>=s.steps.length){addXp(750,`BOSS BESIEGT: ${s.boss}!`)}else addXp(60,'Skill-Stufe geschafft!');skillsView()}
function challenge(){view.innerHTML=`<div class="sectiontitle"><h2>🕷️ Spider-Man-Challenge</h2><span class="tag">20 Minuten</span></div>${trainingTabs('challenge')}<div class="card"><p><b>1 Runde</b> = 5 Klimmzüge · 10 Liegestütze · 15 Kniebeugen</p><div class="timer" id="timer">20:00</div><div class="rounds">Runden: <span id="roundCount">0</span></div><div class="grid"><button class="btn block" onclick="startTimer()">▶ Start</button><button class="btn block" onclick="addRound()">✅ Runde fertig</button></div><button class="btn secondary block" style="margin-top:10px" onclick="finishChallenge()">Challenge beenden</button><p class="muted">Rekord: ${state.records.spiderman} volle Runden</p></div>`}
let timerInt=null,seconds=1200,rounds=0;
window.startTimer=()=>{if(timerInt)return;timerInt=setInterval(()=>{seconds--;const m=String(Math.floor(seconds/60)).padStart(2,'0'),s=String(seconds%60).padStart(2,'0');const el=$('#timer');if(el)el.textContent=`${m}:${s}`;if(seconds<=0){clearInterval(timerInt);timerInt=null;finishChallenge()}},1000)}
window.addRound=()=>{rounds++;const e=$('#roundCount');if(e)e.textContent=rounds;toast(`Runde ${rounds} 🔥`)}
window.finishChallenge=()=>{ensureDailyReset();if(timerInt)clearInterval(timerInt);timerInt=null;state.records.spiderman=Math.max(state.records.spiderman,rounds);save();completeQuest('challenge',300,'Spider-Man-Quest geschafft!');if(rounds)addXp(rounds*10,'Rundenbonus!');seconds=1200;rounds=0;home()}
function body(){view.innerHTML=`<div class="sectiontitle"><h2>📷 KI-Körpercheck</h2><span class="tag yellow">Beta</span></div><div class="notice">Diese lokale PWA kann Fotos bereits aufnehmen und speichern. Eine belastbare KI-Auswertung ist in dieser Version bewusst noch nicht aktiviert – dafür braucht die App ein Bildanalyse-Backend. Keine medizinischen Diagnosen.</div><div class="card" style="margin-top:12px"><h3>1. Entspannt</h3><div class="photozone"><input type="file" accept="image/*" capture="environment" onchange="previewPhoto(event,'relaxed')"><div class="muted">Vorne · hinten · seitlich, gleiches Licht und gleicher Abstand</div><div id="relaxedPreview"></div></div></div><div class="card" style="margin-top:12px"><h3>2. Angespannt</h3><div class="photozone"><input type="file" accept="image/*" capture="environment" onchange="previewPhoto(event,'flexed')"><div class="muted">Standardisierte Pose für Vergleichbarkeit</div><div id="flexedPreview"></div></div></div><div class="card" style="margin-top:12px"><h3>Geplante KI-Auswertung</h3><p class="muted">Symmetrie · sichtbare Proportionen · Körperhaltung · Links/Rechts-Vergleich · Verbindung mit unilateralem Leistungstest · passende Übungsvorschläge.</p><button class="btn secondary block" onclick="toast('KI-Modul bleibt für die nächste Backend-Stufe vorbereitet.')">Analyse starten</button></div>`}
window.previewPhoto=(ev,type)=>{const f=ev.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{document.getElementById(type+'Preview').innerHTML=`<img src="${r.result}" alt="Körperfoto">`;toast('Foto lokal geladen 📷')};r.readAsDataURL(f)}
function progress(){const mastered=skills.filter(s=>(state.skillProgress[s.id]??0)>=s.steps.length);view.innerHTML=`<div class="sectiontitle"><h2>🏆 Hall of Fame</h2><span class="tag green">Level ${state.level}</span></div><div class="hero"><div class="kpi">${state.xp} XP</div><div class="muted">Dein Fortschritt wird aus echten Aktionen aufgebaut.</div></div><div class="sectiontitle"><h2>Boss-Trophäen</h2></div>${mastered.length?mastered.map(s=>`<div class="exercise"><div><div class="name">🏆 ${s.boss}</div><div class="muted">${s.name} gemeistert</div></div><span>⚡ +750</span></div>`).join(''):'<div class="empty">Noch kein Boss besiegt. Dein erster wartet schon.</div>'}<div class="sectiontitle"><h2>Shadow You</h2></div><div class="boss"><div class="bossicon">🌑</div><h2>Dein früheres Ich</h2><p class="muted">Später erzeugt die App aus alten Bestleistungen einen persönlichen Bossfight. Aktueller Spider-Man-Rekord: ${state.records.spiderman} Runden.</p></div>`}
function settings(){modal(`<h2>⚙️ Einstellungen</h2><div class="formgrid"><div class="field"><label>Coach-Stil</label><select id="coachTone"><option ${state.settings.coachTone==='motivierend'?'selected':''}>motivierend</option><option>ruhig</option><option>knallhart</option></select></div><h3>Equipment</h3>${Object.entries({pullup:'Klimmzugstange',bench:'Kurzhantelbank',dumbbell:'Kurzhanteln',bands:'Reverse-/Widerstandsbänder',rack:'Rack',barbell:'Langhantel',rings:'Ringe',dips:'Dip-Barren'}).map(([k,n])=>`<label class="exercise"><span>${n}</span><input type="checkbox" id="eq_${k}" ${state.equipment[k]?'checked':''}></label>`).join('')}<div class="field"><label>Spielmodus</label><select id="gameMode"><option value="on" ${state.settings.gameMode?'selected':''}>An – XP, Quests, Bosse</option><option value="off" ${!state.settings.gameMode?'selected':''}>Aus – sachlich</option></select></div><button class="btn" onclick="saveSettings()">Speichern</button><button class="btn secondary" onclick="requestNotify()">🔔 Benachrichtigungen erlauben</button><button class="btn danger" onclick="resetApp()">App zurücksetzen</button></div>`)}
window.saveSettings=()=>{state.settings.coachTone=$('#coachTone').value;state.settings.gameMode=$('#gameMode').value==='on';for(const k of Object.keys(state.equipment))state.equipment[k]=$('#eq_'+k).checked;save();closeModal();toast('Einstellungen gespeichert ✅')}
window.requestNotify=async()=>{if(!('Notification'in window))return toast('Browser unterstützt das nicht');const p=await Notification.requestPermission();toast(p==='granted'?'Benachrichtigungen erlaubt 🔔':'Nicht erlaubt')}
window.resetApp=()=>{if(confirm('Wirklich alle lokalen App-Daten löschen?')){localStorage.removeItem('fitquest-state');state=structuredClone(defaults);ensureDailyReset();closeModal();home()}}
function modal(html){$('#modalBody').innerHTML=html;$('#modal').classList.remove('hidden')}
function closeModal(){$('#modal').classList.add('hidden')};window.closeModal=closeModal;
function go(v){currentView=v;header();if(v==='home')home();if(v==='training')training();if(v==='skills')skillsView();if(v==='body')body();if(v==='progress')progress()};window.go=go;
document.querySelectorAll('.bottomnav button').forEach(b=>b.onclick=()=>go(b.dataset.view));$('#closeModal').onclick=closeModal;$('#settingsBtn').onclick=settings;
$('#todayLabel').textContent=new Intl.DateTimeFormat('de-DE',{weekday:'long',day:'2-digit',month:'2-digit'}).format(new Date());
ensureDailyReset();scheduleMidnightReset();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
go('home');
