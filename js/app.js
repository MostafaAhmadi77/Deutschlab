const $ = (s) => document.querySelector(s);
const faNum = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
let tab = "home", level = "همه", search = "";
let view = null; // {type, ...}
let done = new Set(JSON.parse(localStorage.getItem("deutschlab-done") || "[]"));
const save = () => localStorage.setItem("deutschlab-done", JSON.stringify([...done]));
const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;");
const matchesLevel = (l) => level === "همه" || l === level;
const matchesSearch = (...texts) => !search || texts.join(" ").toLowerCase().includes(search.toLowerCase());
function coverHTML(b, lv, large){
  return `<div class="book-cover ${large?"large":""}" style="background:linear-gradient(160deg, ${b.color}, #0f172a)">
    <span class="c-name">${esc(b.name)}</span>
    <span><span class="c-level">${lv.level}</span><br><span class="c-pub">Hueber • ${esc(b.fa)}</span>${lv.isbn?`<br><span class="c-isbn">ISBN ${esc(lv.isbn)}</span>`:""}</span>
  </div>`;
}
let pdfUrl = null;
function loadPdf(ev){
  const f = ev.target.files && ev.target.files[0];
  if(!f) return;
  if(pdfUrl) URL.revokeObjectURL(pdfUrl);
  pdfUrl = URL.createObjectURL(f);
  const area = document.getElementById("pdfArea");
  if(area) area.innerHTML = `<p>📄 ${esc(f.name)}</p><div class="pdfbox"><embed src="${pdfUrl}" type="application/pdf"></div><p><small>این فایل فقط روی همین دستگاه و در همین جلسه باز می‌شود و جایی آپلود نمی‌شود.</small></p>`;
}

function renderChips(){
  $("#levelChips").innerHTML = LEVELS.map(l =>
    `<button class="chip ${l===level?"active":""}" onclick="setLevel('${l}')">${l==="همه"?"همه سطوح":l}</button>`).join("");
}
function setLevel(l){ level = l; view = null; render(); }
function setTab(t){ tab = t; view = null; render(); }
function speak(text){
  if(!("speechSynthesis" in window)){ alert("پخش صدا در این مرورگر پشتیبانی نمی‌شود."); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE"; u.rate = 0.85;
  speechSynthesis.speak(u);
}
function toggleDone(id, label){
  if(done.has(id)) done.delete(id); else done.add(id);
  save(); render();
}
function allLessons(){
  let list = [];
  BOOKS.forEach(b => b.levels.forEach(lv => lv.lessons.forEach((ls,i) =>
    list.push({book:b, lv, ls, id:`${b.id}-${lv.level}-${i}`}))));
  return list;
}
function progress(){
  const total = allLessons().length + STORIES.length + PODCASTS.length;
  return total ? Math.round(done.size / total * 100) : 0;
}

function homeHTML(){
  const p = progress();
  return `
  <div class="hero">
    <h1>آلمانی را مثل یک بازی، قدم‌به‌قدم یاد بگیر 🇩🇪</h1>
    <p>از سلام و معرفی شروع کن، بعد با کتاب، پادکست و داستان جلو برو.</p>
    <div class="progress"><i style="width:${p}%"></i></div>
    <p style="margin-top:10px">پیشرفت کلی: ${faNum(p)}٪ • ${faNum(done.size)} مورد تکمیل‌شده</p>
    <button onclick="setTab('books')">شروع با کتاب‌ها ←</button>
  </div>
  <h2>مسیر سریع</h2>
  <div class="grid">
    <div class="mini" onclick="setTab('books')"><b>📚</b><span>۳ سری کتاب<br>A1 تا B2</span></div>
    <div class="mini" onclick="setTab('podcasts')"><b>🎧</b><span>${faNum(PODCASTS.length)} پادکست<br>سطح‌بندی‌شده</span></div>
    <div class="mini" onclick="setTab('stories')"><b>📖</b><span>${faNum(STORIES.length)} داستان<br>A1 تا C1</span></div>
    <div class="mini" onclick="setLevel('A1');setTab('books')"><b>🚀</b><span>شروع از A1<br>مبتدی کامل</span></div>
  </div>
  <h2>پیشنهاد امروز</h2>
  <div class="card" onclick="openBook('menschen','A1')">
    <span class="tag">شروع از اینجا • A1</span>
    <h3>Menschen A1 — سلام و معرفی خود</h3>
    <small>۵ درس نمونه • واژه، گرامر و مکالمه • با تلفظ</small>
  </div>
  <div class="card" onclick="setTab('dictionary')">
    <span class="tag">جدید • دیکشنری</span>
    <h3>🔍 دیکشنری و مترجم جمله</h3>
    <small>${faNum(DICT.length)} واژه • هر واژه ۴۰ جمله ساخته‌شده (۱۰ جمله برای هر سطح A1 تا B2) • ترجمه جمله</small>
  </div>
  <div class="note">📌 هر کتاب جلد و فهرست درس خودش را دارد. برای خواندن خود کتاب، در صفحه کتاب روی «انتخاب فایل PDF» بزن و نسخه قانونی خودت را باز کن؛ فایل رسمی کتاب به‌خاطر کپی‌رایت داخل اپ نیست.</div>`;
}

function booksHTML(){
  if(view?.type === "book"){
    const b = BOOKS.find(x => x.id === view.book);
    const lv = b.levels.find(x => x.level === view.level);
    return `<span class="back" onclick="view=null;render()">← برگشت به کتاب‌ها</span>
    <div class="cover-row">
      ${coverHTML(b, lv, true)}
      <div>
        <h2 style="margin-top:0">${b.name} ${lv.level}</h2>
        <p style="margin:0">${b.fa} • ${b.publisher}${lv.isbn?` • ISBN ${lv.isbn}`:""}</p>
        <p>${b.desc}</p>
      </div>
    </div>
    <div class="card" style="cursor:default">
      <h3>📖 خواندن خود کتاب</h3>
      <p>فایل PDF کتاب را از روی گوشی‌ات انتخاب کن تا همین‌جا باز شود. این برای کتابی است که خودت به‌صورت قانونی خریده‌ای؛ فایل جایی آپلود یا ذخیره نمی‌شود.</p>
      <input type="file" accept="application/pdf" onchange="loadPdf(event)">
      <div id="pdfArea"></div>
      <div class="note" style="margin-top:10px">نسخه کامل این کتاب‌ها محصول Hueber است و به‌خاطر کپی‌رایت داخل اپ و ریپو قرار نگرفته است. نسخه چاپی یا دیجیتال رسمی را با عنوان و ISBN بالا از فروشگاه Hueber تهیه کن، بعد PDF شخصی‌ات را همین‌جا باز کن.</div>
    </div>
    <h2>فهرست درس‌های نمونه</h2>
    ${lv.lessons.map((ls,i) => {
      const id = `${b.id}-${lv.level}-${i}`;
      const isDone = done.has(id);
      return `<div class="card">
        <span class="badge">${lv.level} • درس ${faNum(i+1)}</span>
        <h3 class="de">${esc(ls.de)}</h3>
        <p style="margin:4px 0">${esc(ls.fa)}</p>
        <small>📐 گرامر: ${esc(ls.grammar)}</small>
        <div class="btnrow">
          <button class="btn secondary" onclick="speak('${esc(ls.de)}')">🔊 تلفظ عنوان</button>
          <button class="btn ${isDone?"green":""}" onclick="toggleDone('${id}')">${isDone?"✓ انجام شد":"✓ انجام شد؟"}</button>
        </div>
      </div>`;
    }).join("")}
    <h2>واژه‌های کلیدی این سطح</h2>
    ${lv.vocab.map(w => `<div class="word"><span>${esc(w.fa)}</span><span><b>${esc(w.de)}</b> <button class="btn secondary" style="padding:4px 10px" onclick="speak('${esc(w.de)}')">🔊</button></span></div>`).join("")}`;
  }
  let rows = [];
  BOOKS.forEach(b => b.levels.forEach(lv => {
    if(!matchesLevel(lv.level)) return;
    if(!matchesSearch(b.name, b.fa, lv.title)) return;
    rows.push(`<div class="card" onclick="openBook('${b.id}','${lv.level}')">
      <div class="cover-row">${coverHTML(b, lv, false)}
      <div>
      <span class="tag">${lv.level}</span><span class="badge">${b.publisher}</span>
      <h3>${b.name} ${lv.level} <span style="font-weight:400;color:#94a3b8">• ${b.fa}</span></h3>
      <small>${faNum(lv.lessons.length)} درس نمونه • ${b.desc}</small>
      </div></div>
    </div>`);
  }));
  return `<h2>کتاب‌های آموزشی</h2><p>سطح را از بالا انتخاب کن، یا روی کتاب بزن تا درس‌هایش باز شود.</p>${rows.length ? rows.join("") : "<div class='note'>برای این سطح کتابی پیدا نشد. سطح دیگری را امتحان کن.</div>"}`;
}
function openBook(id, lvl){ view = {type:"book", book:id, level:lvl}; render(); }

function podcastsHTML(){
  if(view?.type === "podcast"){
    const p = PODCASTS.find(x => x.id === view.id);
    const isDone = done.has(p.id);
    return `<span class="back" onclick="view=null;render()">← برگشت به پادکست‌ها</span>
    <div class="card" style="cursor:default">
      <span class="tag">${p.level} • ${faNum(p.minutes)} دقیقه</span>
      <h3>${esc(p.name)}</h3>
      <p class="de">${esc(p.episode)}</p>
      <p>${esc(p.desc)}</p>
      <p class="de-text">${esc(p.sample)}</p>
      <div class="btnrow">
        <button class="btn" onclick="speak('${esc(p.sample)}')">▶ پخش نمونه با صدای دستگاه</button>
        <button class="btn ${isDone?"green":""}" onclick="toggleDone('${p.id}')">✓ گوش دادم</button>
      </div>
    </div>
    <div class="note">نسخه کامل این پادکست‌ها روی پلتفرم‌های رسمی خودشان منتشر می‌شود؛ اینجا نمونه شنیداری و جمله کلیدی برای تمرین گوش دادن قرار گرفته است.</div>`;
  }
  let rows = PODCASTS.filter(p => matchesLevel(p.level) && matchesSearch(p.name, p.episode, p.desc))
    .map(p => `<div class="card" onclick="view={type:'podcast',id:'${p.id}'};render()">
      <span class="tag">${p.level}</span><span class="badge">🎧 ${faNum(p.minutes)} دقیقه</span>
      <h3>${esc(p.name)}</h3><p style="margin:4px 0">${esc(p.episode)}</p><small>${esc(p.desc)}</small>
    </div>`).join("");
  return `<h2>پادکست‌های آلمانی</h2><p>از A1 شروع کن و هرچه گوش‌ات قوی‌تر شد، سطح را بالا ببر.</p>${rows || "<div class='note'>پادکستی برای این سطح پیدا نشد.</div>"}`;
}

function storiesHTML(){
  if(view?.type === "story"){
    const s = STORIES.find(x => x.id === view.id);
    const isDone = done.has(s.id);
    return `<span class="back" onclick="view=null;render()">← برگشت به داستان‌ها</span>
    <div class="card" style="cursor:default">
      <span class="tag">${s.level} • ${faNum(s.minutes)} دقیقه خواندن</span>
      <h3 class="de">${esc(s.title)}</h3><p>${esc(s.fa)}</p>
      <p class="de-text">${esc(s.text)}</p>
      <hr style="border-color:#243350">
      <p>${esc(s.translation)}</p>
      <div class="btnrow">
        <button class="btn" onclick="speak('${esc(s.title)}. ${esc(s.text)}')">🔊 خواندن داستان</button>
        <button class="btn ${isDone?"green":""}" onclick="toggleDone('${s.id}')">✓ خواندم</button>
      </div>
    </div>
    <h2>واژه‌های داستان</h2>
    ${s.vocab.map(w => `<div class="word"><span>${esc(w.fa)}</span><span><b>${esc(w.de)}</b> <button class="btn secondary" style="padding:4px 10px" onclick="speak('${esc(w.de)}')">🔊</button></span></div>`).join("")}
    <div class="note" style="margin-top:12px">❓ سؤال فهم مطلب: ${esc(s.question)}</div>`;
  }
  let rows = STORIES.filter(s => matchesLevel(s.level) && matchesSearch(s.title, s.fa))
    .map(s => `<div class="card" onclick="view={type:'story',id:'${s.id}'};render()">
      <span class="tag">${s.level}</span><span class="badge">📖 ${faNum(s.minutes)} دقیقه</span>
      <h3 class="de">${esc(s.title)}</h3><p style="margin:4px 0">${esc(s.fa)}</p>
      <small>متن آلمانی + ترجمه فارسی + واژه + سؤال</small>
    </div>`).join("");
  return `<h2>داستان‌های آلمانی</h2><p>هر داستان دقیقاً برای یک سطح نوشته شده؛ از A1 شروع کن.</p>${rows || "<div class='note'>داستانی برای این سطح پیدا نشد.</div>"}`;
}

let sentLevel = "A1";
function setSentLevel(l){ sentLevel = l; render(); }
function openDictWord(idx){ view = {type:"dict", idx}; render(); }
function translateNow(){
  const input = document.getElementById("transInput");
  const out = document.getElementById("transOutput");
  if(!input || !out) return;
  const r = translateSentence(input.value);
  if(!r){ out.innerHTML = ""; return; }
  const single = input.value.trim().split(/\s+/).length === 1 ? findWord(input.value) : null;
  if(single){
    const idx = DICT.indexOf(single);
    out.innerHTML = `<div class="card" style="cursor:default"><span class="tag">معنی واژه • ${single.level} • ${single.typeFa}</span><h3 class="de">${esc(single.type === "noun" ? single.n : single.de)}</h3><p style="font-size:18px">${esc(single.fa)}</p><button class="btn" onclick="openDictWord(${idx})">باز کردن صفحه واژه و جمله‌هایش ←</button></div>`;
    filterDictByTrans();
  } else if(r.exact){
    out.innerHTML = `<div class="card" style="cursor:default"><span class="tag">ترجمه دقیق • سطح ${r.level}</span><p class="de-text">${esc(r.de)}</p><p>${esc(r.fa)}</p><small>این جمله از جمله‌های ساخته‌شده دیکشنری است.</small></div>`;
  } else if(!r.words.some(x => x.found)){
    const q = input.value.trim().toLowerCase();
    const sug = DICT.filter(w => w.de.toLowerCase().includes(q) || w.fa.includes(input.value.trim())).slice(0, 5);
    out.innerHTML = sug.length
      ? `<div class="note">این واژه دقیقاً در دیکشنری نیست، ولی این موارد نزدیک به آن است — روی هر کدام بزن:</div>` + sug.map(w => `<div class="card" onclick="openDictWord(${DICT.indexOf(w)})"><h3 class="de">${esc(w.type === "noun" ? w.n : w.de)}</h3><p>${esc(w.fa)}</p></div>`).join("")
      : `<div class="note">واژه‌ای از دیکشنری در این جمله پیدا نشد. واژه را از فهرست زیر پیدا کن، یا جمله‌ای با همان واژه‌ها بنویس.</div>`;
  } else {
    out.innerHTML = `<div class="card" style="cursor:default"><span class="tag">ترجمه واژه‌به‌واژه</span><p><small>${r.words.map(x => x.found ? `${esc(x.tok)} = ${esc(x.found.fa)}` : `${esc(x.tok)} = ؟`).join(" • ")}</small></p><p><small>⚠️ این فقط معنی تک‌تک واژه‌های شناخته‌شده است و جمله کامل را ترجمه نمی‌کند؛ برای ترجمه دقیق، از جمله‌های ساخته‌شده هر واژه استفاده کن.</small></p></div>`;
  }
}
function dictRowsHTML(q){
  let list = DICT.filter(w => matchesLevel(w.level) && matchesSearch(w.de, w.fa, w.typeFa));
  if(q){
    const qq = q.toLowerCase();
    list = list.filter(w => w.de.toLowerCase().includes(qq) || w.fa.includes(q));
  }
  return list.map(w => {
    const idx = DICT.indexOf(w);
    return `<div class="card" onclick="openDictWord(${idx})">
      <span class="tag">${w.level}</span><span class="badge">${w.typeFa}</span>
      <h3 class="de">${esc(w.type === "noun" ? w.n : w.de)}</h3>
      <p style="margin:4px 0">${esc(w.fa)}</p>
      <small>۴۰ جمله ساخته‌شده • ۱۰ جمله برای هر سطح A1 تا B2 • با تلفظ</small>
    </div>`;
  }).join("");
}
function filterDictByTrans(){
  const inp = document.getElementById("transInput");
  const list = document.getElementById("dictList");
  if(!inp || !list) return;
  const html = dictRowsHTML(inp.value.trim());
  list.innerHTML = html || "<div class='note'>واژه‌ای با این جستجو پیدا نشد. واژه دیگری را امتحان کن.</div>";
}
function dictionaryHTML(){
  if(view?.type === "dict"){
    const w = DICT[view.idx];
    const sents = buildSentences(w, sentLevel);
    const typeInfo = w.type === "noun" ? `${w.art} ${w.de} • جمع: die ${w.plural}`
      : w.type === "verb" ? `${w.de} • حال: ich ${w.vIch}، er ${w.vEr} • گذشته کامل: ${w.aux} ${w.pp}`
      : `${w.de} • تفضیلی: ${w.comp}`;
    return `<span class="back" onclick="view=null;render()">← برگشت به دیکشنری</span>
    <div class="card" style="cursor:default">
      <span class="tag">${w.level} • ${w.typeFa}</span>
      <h3 class="de" style="font-size:24px">${esc(w.type === "noun" ? w.n : w.de)}</h3>
      <p style="font-size:18px">${esc(w.fa)}</p>
      <small>${esc(typeInfo)}</small>
      <div class="btnrow"><button class="btn secondary" onclick="speak('${esc(w.de)}')">🔊 تلفظ واژه</button></div>
    </div>
    <h2>جمله‌های ساخته‌شده — سطح ${sentLevel} <span style="color:#94a3b8;font-size:13px">(${faNum(10)} جمله)</span></h2>
    <div class="levels" style="padding:0 0 10px">${["A1","A2","B1","B2"].map(l => `<button class="chip ${l===sentLevel?"active":""}" onclick="setSentLevel('${l}')">${l}</button>`).join("")}</div>
    ${sents.map((s,i) => `<div class="card" style="cursor:default">
      <span class="badge">جمله ${faNum(i+1)}</span>
      <p class="de-text">${esc(s.de)}</p><p>${esc(s.fa)}</p>
      <button class="btn secondary" onclick="speak('${esc(s.de)}')">🔊 شنیدن جمله</button>
    </div>`).join("")}
    <div class="note">جمله‌های هر سطح با ساختار گرامری همان سطح ساخته شده‌اند: A1 ساده، A2 با گذشته و ربط‌دهنده، B1 با جملات فرعی، B2 با شرطی و ساختارهای پیشرفته.</div>`;
  }
  return `<h2>مترجم جمله</h2>
  <div class="card" style="cursor:default">
    <p>یک واژه یا جمله آلمانی بنویس. با هر حرفی که می‌نویسی، فهرست زیر هم زنده فیلتر می‌شود. اگر واژه در دیکشنری باشد، معنی‌اش را همین‌جا می‌بینی.</p>
    <input id="transInput" type="text" oninput="filterDictByTrans()" placeholder="مثلاً: Handy یا Ich lerne oft." style="width:100%;padding:11px;border-radius:12px;border:1px solid var(--line);background:#0f172a;color:#fff;margin:8px 0">
    <button class="btn" onclick="translateNow()">ترجمه کن</button>
    <div id="transOutput" style="margin-top:10px"></div>
  </div>
  <h2>دیکشنری — ${faNum(DICT.length)} واژه</h2>
  <p>روی هر واژه بزن تا معنی، تلفظ و ۱۰ جمله‌اش را برای هر سطح ببینی. فیلتر سطح بالا، سطح خود واژه را فیلتر می‌کند و جستجوی بالا هم همین فهرست را فیلتر می‌کند.</p>
  <div id="dictList">${dictRowsHTML() || "<div class='note'>واژه‌ای پیدا نشد.</div>"}</div>`;
}

function render(){
  renderChips();
  $("#doneCount").textContent = faNum(done.size);
  document.querySelectorAll(".bottomnav button").forEach(b =>
    b.classList.toggle("active", b.dataset.tab === tab));
  $("#app").innerHTML = tab === "home" ? homeHTML() : tab === "books" ? booksHTML() : tab === "podcasts" ? podcastsHTML() : tab === "dictionary" ? dictionaryHTML() : storiesHTML();
  window.scrollTo({top:0});
}
document.querySelectorAll(".bottomnav button").forEach(b =>
  b.addEventListener("click", () => setTab(b.dataset.tab)));
$("#searchInput").addEventListener("input", (e) => { search = e.target.value.trim(); render(); });
render();
