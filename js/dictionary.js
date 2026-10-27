/* دویچلب — دیکشنری و موتور ساخت جمله
   هر واژه برای هر سطح A1 تا B2 دقیقاً ۱۰ جمله دارد (یعنی ۴۰ جمله برای هر واژه).
   جمله‌ها از قالب‌های سطح‌بندی‌شده ساخته می‌شوند، نه کپی از کتاب؛
   بنابراین ساختارشان برای تمرین گرامر همان سطح طراحی شده است. */

function noun(de, art, plural, fa, level, note){
  const akk = art === "der" ? "den " + de : art + " " + de;
  const kein = art === "die" ? "keine" : "kein";
  const relAkk = art === "der" ? "den" : art;
  const pron = art === "der" ? "ihn" : art === "die" ? "sie" : "es";
  const von = (art === "der" || art === "das") ? "vom " + de : "von der " + de;
  const capArt = art.charAt(0).toUpperCase() + art.slice(1);
  return {de, fa, type:"noun", level, note,
    art, plural, n: art + " " + de, N: capArt + " " + de,
    akk, pl: "die " + plural, kein, relAkk, pron, von,
    faPl: fa + "‌ها", typeFa:"اسم"};
}
function verb(de, vIch, vEr, vWir, pp, aux, fa, fa1, fa3, faWir, faSubj, faPast, level, note){
  const Inf = de.charAt(0).toUpperCase() + de.slice(1);
  const auxIch = aux === "sein" ? "bin" : "habe";
  return {de, fa, type:"verb", level, note, vIch, vEr, vWir, pp, aux: auxIch,
    inf: de, Inf, fa1, fa3, faWir, faSubj, faPast,
    faSubj2: faSubj.replace(/م$/, "ی"),
    faPastStem: faPast.replace(/م$/, ""),
    negFa1: fa1.replace("می‌", "نمی‌"),
    auxIch,
    typeFa:"فعل"};
}
function adj(de, comp, fa, compFa, level, note){
  return {de, fa, type:"adj", level, note, adj: de, comp, compFa, typeFa:"صفت"};
}

const DICT = [
  // اسم‌ها — A1
  noun("Hund","der","Hunde","سگ","A1"),
  noun("Buch","das","Bücher","کتاب","A1"),
  noun("Haus","das","Häuser","خانه","A1"),
  noun("Apfel","der","Äpfel","سیب","A1"),
  noun("Freund","der","Freunde","دوست","A1"),
  // اسم‌ها — A2
  noun("Auto","das","Autos","ماشین","A2"),
  noun("Garten","der","Gärten","باغ","A2"),
  noun("Film","der","Filme","فیلم","A2"),
  noun("Lehrer","der","Lehrer","معلم","A2"),
  noun("Brot","das","Brote","نان","A2"),
  // اسم‌ها — B1
  noun("Stadt","die","Städte","شهر","B1"),
  noun("Arbeit","die","Arbeiten","کار","B1"),
  noun("Sprache","die","Sprachen","زبان","B1"),
  noun("Reise","die","Reisen","سفر","B1"),
  noun("Chance","die","Chancen","فرصت","B1"),
  // اسم‌ها — B2
  noun("Gesellschaft","die","Gesellschaften","جامعه","B2"),
  noun("Wissenschaft","die","Wissenschaften","علم","B2"),
  noun("Kultur","die","Kulturen","فرهنگ","B2"),
  noun("Entscheidung","die","Entscheidungen","تصمیم","B2"),
  noun("Entwicklung","die","Entwicklungen","توسعه","B2"),
  // فعل‌ها — A1
  verb("lernen","lerne","lernt","lernen","gelernt","haben","یاد گرفتن","یاد می‌گیرم","یاد می‌گیرد","یاد می‌گیریم","یاد بگیرم","یاد گرفتم","A1"),
  verb("tanzen","tanze","tanzt","tanzen","getanzt","haben","رقصیدن","می‌رقصم","می‌رقصد","می‌رقصیم","برقصم","رقصیدم","A1"),
  verb("spielen","spiele","spielt","spielen","gespielt","haben","بازی کردن","بازی می‌کنم","بازی می‌کند","بازی می‌کنیم","بازی کنم","بازی کردم","A1"),
  verb("kochen","koche","kocht","kochen","gekocht","haben","آشپزی کردن","آشپزی می‌کنم","آشپزی می‌کند","آشپزی می‌کنیم","آشپزی کنم","آشپزی کردم","A1"),
  // فعل‌ها — A2
  verb("arbeiten","arbeite","arbeitet","arbeiten","gearbeitet","haben","کار کردن","کار می‌کنم","کار می‌کند","کار می‌کنیم","کار کنم","کار کردم","A2"),
  verb("reisen","reise","reist","reisen","gereist","sein","سفر کردن","سفر می‌کنم","سفر می‌کند","سفر می‌کنیم","سفر کنم","سفر کردم","A2"),
  verb("kaufen","kaufe","kauft","kaufen","gekauft","haben","خریدن","می‌خرم","می‌خرد","می‌خریم","بخرم","خریدم","A2"),
  verb("suchen","suche","sucht","suchen","gesucht","haben","جستجو کردن","جستجو می‌کنم","جستجو می‌کند","جستجو می‌کنیم","جستجو کنم","جستجو کردم","A2"),
  // فعل‌ها — B1
  verb("fragen","frage","fragt","fragen","gefragt","haben","پرسیدن","می‌پرسم","می‌پرسد","می‌پرسیم","بپرسم","پرسیدم","B1"),
  verb("antworten","antworte","antwortet","antworten","geantwortet","haben","جواب دادن","جواب می‌دهم","جواب می‌دهد","جواب می‌دهیم","جواب بدهم","جواب دادم","B1"),
  verb("hören","höre","hört","hören","gehört","haben","گوش دادن","گوش می‌دهم","گوش می‌دهد","گوش می‌دهیم","گوش بدهم","گوش دادم","B1"),
  verb("lesen","lese","liest","lesen","gelesen","haben","خواندن","می‌خوانم","می‌خواند","می‌خوانیم","بخوانم","خواندم","B1"),
  // فعل‌ها — B2
  verb("üben","übe","übt","üben","geübt","haben","تمرین کردن","تمرین می‌کنم","تمرین می‌کند","تمرین می‌کنیم","تمرین کنم","تمرین کردم","B2"),
  verb("lachen","lache","lacht","lachen","gelacht","haben","خندیدن","می‌خندم","می‌خندد","می‌خندیم","بخندم","خندیدم","B2"),
  verb("warten","warte","wartet","warten","gewartet","haben","منتظر ماندن","منتظر می‌مانم","منتظر می‌ماند","منتظر می‌مانیم","منتظر بمانم","منتظر ماندم","B2"),
  verb("schreiben","schreibe","schreibt","schreiben","geschrieben","haben","نوشتن","می‌نویسم","می‌نویسد","می‌نویسیم","بنویسم","نوشتم","B2"),
  // صفت‌ها — A1
  adj("schön","schöner","زیبا","زیباتر","A1"),
  adj("gut","besser","خوب","بهتر","A1"),
  adj("neu","neuer","جدید","جدیدتر","A1"),
  // صفت‌ها — A2
  adj("interessant","interessanter","جالب","جالب‌تر","A2"),
  adj("wichtig","wichtiger","مهم","مهم‌تر","A2"),
  adj("einfach","einfacher","ساده","ساده‌تر","A2"),
  // صفت‌ها — B1
  adj("schwierig","schwieriger","سخت","سخت‌تر","B1"),
  adj("modern","moderner","مدرن","مدرن‌تر","B1"),
  adj("praktisch","praktischer","کاربردی","کاربردی‌تر","B1"),
  // صفت‌ها — B2
  adj("nützlich","nützlicher","مفید","مفیدتر","B2"),
  adj("klar","klarer","واضح","واضح‌تر","B2"),
  adj("richtig","richtiger","درست","درست‌تر","B2"),
];

const T = (de, fa) => ({de, fa});
const TEMPLATES = {
noun: {
A1: [
  T("Das ist {n}.", "این {fa} است."),
  T("Ich sehe {akk}.", "من {fa} را می‌بینم."),
  T("{N} ist gut.", "{fa} خوب است."),
  T("Ich habe {akk}.", "من {fa} دارم."),
  T("Wo ist {n}?", "{fa} کجاست؟"),
  T("Das ist mein {de}.", "این {fa} من است."),
  T("Ich brauche {akk}.", "من به {fa} نیاز دارم."),
  T("{N} ist hier.", "{fa} اینجاست."),
  T("Das ist {kein} {de}.", "این {fa} نیست."),
  T("Ich mag {akk}.", "من {fa} را دوست دارم."),
],
A2: [
  T("Ich kenne {akk} gut.", "{fa} را خوب می‌شناسم."),
  T("Ich spreche über {akk}.", "درباره {fa} صحبت می‌کنم."),
  T("Ich denke an {akk}.", "به {fa} فکر می‌کنم."),
  T("{pl} sind wichtig.", "{faPl} مهم‌اند."),
  T("Ich suche {akk}.", "دنبال {fa} می‌گردم."),
  T("Ich finde {akk} interessant.", "{fa} را جالب می‌دانم."),
  T("Gestern habe ich über {akk} gesprochen.", "دیروز درباره {fa} صحبت کردم."),
  T("Wenn ich Zeit habe, denke ich an {akk}.", "وقتی وقت دارم، به {fa} فکر می‌کنم."),
  T("Das ist {n}, {relAkk} ich kenne.", "این {fa}ای است که می‌شناسم."),
  T("{N} ist nicht neu.", "{fa} جدید نیست."),
],
B1: [
  T("Ich finde, dass {n} sehr nützlich ist.", "به نظرم {fa} خیلی مفید است."),
  T("Man kann {akk} überall finden.", "می‌توان {fa} را همه‌جا پیدا کرد."),
  T("Wenn man {akk} hat, ist das Leben leichter.", "وقتی {fa} داری، زندگی راحت‌تر است."),
  T("Ich habe gelernt, wie man {akk} benutzt.", "یاد گرفتم چطور از {fa} استفاده کنم."),
  T("{n} spielt in meinem Leben eine große Rolle.", "{fa} در زندگی من نقش بزرگی دارد."),
  T("Es ist wichtig, {akk} zu verstehen.", "مهم است که {fa} را بفهمی."),
  T("Viele Menschen sprechen über {akk}.", "خیلی‌ها درباره {fa} صحبت می‌کنند."),
  T("Ich möchte mehr über {akk} lernen.", "می‌خواهم درباره {fa} بیشتر یاد بگیرم."),
  T("{n} kann man nicht einfach ersetzen.", "{fa} را نمی‌توان به‌راحتی جایگزین کرد."),
  T("Seit ich {akk} habe, bin ich glücklicher.", "از وقتی {fa} را دارم، خوشحال‌ترم."),
],
B2: [
  T("Würde ich {akk} wählen, wäre ich zufrieden.", "اگر {fa} را انتخاب می‌کردم، راضی بودم."),
  T("{n} ist nicht nur praktisch, sondern auch schön.", "{fa} نه‌تنها کاربردی، بلکه زیباست."),
  T("Es lässt sich nicht leugnen, dass {n} wichtig ist.", "نمی‌توان انکار کرد که {fa} مهم است."),
  T("Je mehr man über {akk} weiß, desto besser versteht man {pron}.", "هرچه درباره {fa} بیشتر بدانی، بهتر آن را می‌فهمی."),
  T("{n} sollte man sorgfältig auswählen.", "{fa} را باید با دقت انتخاب کرد."),
  T("Ohne {akk} wäre mein Alltag schwieriger.", "بدون {fa}، روزمرگی‌ام سخت‌تر بود."),
  T("Die Rolle von {von} ist groß.", "نقش {fa} بزرگ است."),
  T("Man sollte {akk} nicht unterschätzen.", "نباید {fa} را دست‌کم گرفت."),
  T("{n} zeigt, wie wichtig Details sind.", "{fa} نشان می‌دهد جزئیات چقدر مهم‌اند."),
  T("Wenn es um {akk} geht, bin ich sehr genau.", "وقتی پای {fa} در میان است، خیلی دقیق‌ام."),
],
},
verb: {
A1: [
  T("Ich {vIch} oft.", "من اغلب {fa1}."),
  T("Ich {vIch} gern.", "من با علاقه {fa1}."),
  T("Er {vEr} heute.", "او امروز {fa3}."),
  T("Wir {vWir} zusammen.", "ما با هم {faWir}."),
  T("Ich möchte {inf}.", "می‌خواهم {faSubj}."),
  T("Kannst du {inf}?", "می‌توانی {faSubj2}؟"),
  T("Heute {vIch} ich.", "امروز {fa1}."),
  T("Ich {aux} gestern {pp}.", "دیروز {faPast}."),
  T("Ich muss {inf}.", "باید {faSubj}."),
  T("Er {vEr} gern.", "او با علاقه {fa3}."),
],
A2: [
  T("Ich {aux} gestern viel {pp}.", "دیروز خیلی {faPast}."),
  T("Ich {vIch}, weil es wichtig ist.", "{fa1}، چون مهم است."),
  T("Wenn ich Zeit habe, {vIch} ich.", "وقتی وقت دارم، {fa1}."),
  T("Ich {aux} {pp}, und das war gut.", "{faPast}، و خوب بود."),
  T("Er {vEr} am Wochenende.", "او آخر هفته {fa3}."),
  T("Wir {vWir} am Morgen.", "ما صبح {faWir}."),
  T("Ich möchte morgen {inf}.", "فردا می‌خواهم {faSubj}."),
  T("Kann ich {inf}?", "می‌توانم {faSubj}؟"),
  T("Ich {vIch} nicht, wenn ich müde bin.", "وقتی خسته‌ام، {negFa1}."),
  T("Am Abend {vIch} ich.", "عصر {fa1}."),
],
B1: [
  T("Ich finde, dass {Inf} wichtig ist.", "به نظرم {faInf} مهم است."),
  T("Man sollte regelmäßig {inf}.", "باید مرتب {faInf}."),
  T("Ich {vIch} seit einem Jahr.", "یک سال است که {fa1}."),
  T("Er {vEr} jeden Tag ein bisschen.", "او هر روز کمی {fa3}."),
  T("Wenn ich Zeit habe, {vIch} ich mehr.", "وقتی وقت دارم، بیشتر {fa1}."),
  T("Ich {aux} schon viel {pp}.", "قبلاً خیلی {faPast}."),
  T("Es ist gut, dass du {inf} kannst.", "خوب است که می‌توانی {faSubj2}."),
  T("Wir {vWir}, wenn wir Zeit haben.", "وقتی وقت داریم، {faWir}."),
  T("Ich {vIch}, obwohl ich müde bin.", "با اینکه خسته‌ام، {fa1}."),
  T("Das Ziel ist, gut zu {inf}.", "هدف این است که خوب {faSubj}."),
],
B2: [
  T("Würde ich mehr {inf}, wäre ich besser.", "اگر بیشتر {faSubj}، بهتر بودم."),
  T("Ich {vIch}, seit ich in Deutschland bin.", "از وقتی در آلمان هستم، {fa1}."),
  T("Je mehr ich {vIch}, desto besser werde ich.", "هرچه بیشتر {fa1}، بهتر می‌شوم."),
  T("Man kann nicht gut {inf}, ohne zu üben.", "بدون تمرین نمی‌توان خوب {faPastStem}."),
  T("Es lässt sich nicht leugnen, dass {inf} wichtig ist.", "نمی‌توان انکار کرد که {faInf} مهم است."),
  T("Ich {vIch} lieber allein als in einer Gruppe.", "ترجیح می‌دهم تنها {faSubj} تا در گروه."),
  T("Wenn es um {Inf} geht, bin ich sehr genau.", "وقتی پای {faInf} در میان است، خیلی دقیق‌ام."),
  T("Nachdem ich {pp} {auxIch}, fühle ich mich besser.", "بعد از اینکه {faPast}، احساس بهتری دارم."),
  T("Die Fähigkeit zu {inf} ist wichtig.", "توانایی {faInf} مهم است."),
  T("Ich würde gern mehr {inf}.", "دوست دارم بیشتر {faSubj}."),
],
},
adj: {
A1: [
  T("Das ist {adj}.", "این {fa} است."),
  T("Das Leben ist {adj}.", "زندگی {fa} است."),
  T("Die Idee ist {adj}.", "ایده {fa} است."),
  T("Das Ergebnis ist {adj}.", "نتیجه {fa} است."),
  T("Das Thema ist {adj}.", "موضوع {fa} است."),
  T("Ich finde das {adj}.", "این را {fa} می‌دانم."),
  T("Das ist wirklich {adj}.", "این واقعاً {fa} است."),
  T("Heute ist alles {adj}.", "امروز همه‌چیز {fa} است."),
  T("Das ist nicht {adj}.", "این {fa} نیست."),
  T("Ist das {adj}?", "آیا این {fa} است؟"),
],
A2: [
  T("Das war gestern {adj}.", "دیروز این {fa} بود."),
  T("Ich finde die Idee {adj}.", "ایده را {fa} می‌دانم."),
  T("Das Ergebnis war {adj}.", "نتیجه {fa} بود."),
  T("Das Thema ist heute {adj}.", "موضوع امروز {fa} است."),
  T("Ist die Idee {adj} oder nicht?", "آیا ایده {fa} است یا نه؟"),
  T("Das Leben war früher {adj}.", "زندگی قبلاً {fa} بود."),
  T("Ich habe das {adj} gefunden.", "این را {fa} یافتم."),
  T("Das ist heute {adj}.", "این امروز {fa} است."),
  T("Die Idee ist jetzt {adj}.", "ایده الان {fa} است."),
  T("Das war wirklich {adj}.", "آن واقعاً {fa} بود."),
],
B1: [
  T("Ich denke, dass das {adj} ist.", "فکر می‌کنم این {fa} است."),
  T("Das ist {comp} als früher.", "این از قبل {compFa} است."),
  T("Es ist {adj}, dass wir das wissen.", "{fa} است که این را می‌دانیم."),
  T("Wenn die Idee {adj} ist, bin ich zufrieden.", "اگر ایده {fa} باشد، راضی‌ام."),
  T("Das Ergebnis ist {adj} und das freut mich.", "نتیجه {fa} است و این خوشحالم می‌کند."),
  T("Ich finde es {adj}, dass du hier bist.", "{fa} می‌دانم که اینجا هستی."),
  T("Das Thema ist {adj}, deshalb sprechen wir darüber.", "موضوع {fa} است، به همین دلیل درباره‌اش صحبت می‌کنیم."),
  T("Es ist nicht immer {adj}.", "همیشه {fa} نیست."),
  T("Die Idee wird {comp}.", "ایده {compFa} می‌شود."),
  T("Ich hoffe, dass das {adj} bleibt.", "امیدوارم این {fa} بماند."),
],
B2: [
  T("Würde die Idee {comp} sein, wäre ich glücklicher.", "اگر ایده {compFa} بود، خوشحال‌تر بودم."),
  T("Es lässt sich nicht leugnen, dass das {adj} ist.", "نمی‌توان انکار کرد که این {fa} است."),
  T("Je {comp} die Idee ist, desto besser ist das Ergebnis.", "هرچه ایده {compFa} باشد، نتیجه بهتر است."),
  T("Wenn das {adj} wäre, würde ich es sofort machen.", "اگر این {fa} بود، فوراً انجامش می‌دادم."),
  T("Zu verstehen, dass das {adj} ist, ist nicht leicht.", "فهمیدن اینکه این {fa} است، آسان نیست."),
  T("Ich bin mir sicher, dass das {adj} ist.", "مطمئنم که این {fa} است."),
  T("Das Ergebnis zeigt, dass die Idee {adj} ist.", "نتیجه نشان می‌دهد که ایده {fa} است."),
  T("Es ist {adj}, ohne dass wir es merken.", "{fa} است، بدون اینکه متوجه شویم."),
  T("Die Idee bleibt {adj}, auch wenn sich alles ändert.", "ایده {fa} می‌ماند، حتی اگر همه‌چیز تغییر کند."),
  T("Man sollte das {adj} nennen.", "باید این را {fa} نامید."),
],
},
};

function fillTemplate(str, w){
  const faInf = w.type === "verb" ? w.fa : w.fa;
  const map = Object.assign({}, w, {faInf});
  return str.replace(/\{(\w+)\}/g, (m, k) => (map[k] !== undefined ? map[k] : m));
}
function buildSentences(word, sentLevel){
  const list = (TEMPLATES[word.type] && TEMPLATES[word.type][sentLevel]) || [];
  return list.map(t => ({de: fillTemplate(t.de, word), fa: fillTemplate(t.fa, word)}));
}
function findWord(text){
  const q = text.trim().toLowerCase();
  return DICT.find(w => w.de.toLowerCase() === q || w.fa === text.trim());
}
function translateSentence(input){
  const clean = input.trim().replace(/\s+/g, " ");
  if(!clean) return null;
  // ۱) ترجمه دقیق: اگر جمله دقیقاً یکی از جمله‌های ساخته‌شده باشد
  for(const w of DICT){
    for(const lvl of ["A1","A2","B1","B2"]){
      for(const s of buildSentences(w, lvl)){
        if(s.de.toLowerCase() === clean.toLowerCase()){
          return {exact:true, word:w, level:lvl, de:s.de, fa:s.fa, words:[]};
        }
      }
    }
  }
  // ۲) معنی واژه‌به‌واژه برای جمله‌های آزاد
  const tokens = clean.split(/[\s,؛;:.?!؟]+/).filter(Boolean);
  const words = tokens.map(tok => {
    const low = tok.toLowerCase();
    const found = DICT.find(w => {
      if(w.de.toLowerCase() === low) return true;
      if(w.type === "verb" && [w.vIch, w.vEr, w.vWir, w.pp].includes(low)) return true;
      if(w.type === "noun" && w.plural.toLowerCase() === low) return true;
      return false;
    });
    return {tok, found: found || null};
  });
  const known = words.filter(x => x.found);
  if(!known.length) return {exact:false, word:null, level:null, de:clean, fa:"", words};
  const approx = words.map(x => x.found ? x.found.fa : x.tok).join(" ");
  return {exact:false, word:null, level:null, de:clean, fa:approx, words};
}
