/* دویچلب — گرامر سطح‌بندی‌شده
   مباحث بر اساس ترتیب کتاب‌های Menschen ،Starten wir! و Momente چیده شده‌اند.
   هر مبحث: آموزش مرحله‌ای، مثال با تلفظ، تمرین تعاملی، و آزمون همان مبحث.
   سؤال‌های آزمون، سؤال‌های واقعی و منتشرنشده گوته یا ÖSD نیستند؛
   تمرین‌های اصیل و مرتبط با همان مبحث‌اند که به سبک و قالب آزمون‌های
   گوته/ÖSD (چندگزینه‌ای، جای خالی، انتخاب شکل درست) طراحی شده‌اند. */
const S = (t, x) => ({t, x});
const E = (de, fa) => ({de, fa});
const Q = (q, options, answer, why) => ({q, options, answer, why});

const GRAMMAR = [
{
id:"a1-artikel", level:"A1", de:"Artikel und Genus", fa:"حرف تعریف و جنسیت اسم‌ها",
book:"Menschen A1 • Starten wir! A1 • Momente A1",
steps:[
  S("قدم ۱ — جنسیت را با واژه حفظ کن", "هر اسم آلمانی یک جنسیت دارد: مذکر der، مؤنث die، خنثی das. جنسیت همیشه از معنی قابل حدس نیست؛ پس هر واژه را با حرف تعریفش یاد بگیر: der Hund، die Katze، das Haus."),
  S("قدم ۲ — معین و نامعین", "حرف تعریف معین یعنی «همان»: der Mann، die Frau، das Kind. حرف تعریف نامعین یعنی «یک»: ein Mann، eine Frau، ein Kind. برای مؤنث، نامعین eine است، نه ein."),
  S("قدم ۳ — اسم همیشه با حرف بزرگ", "در آلمانی اسم، حتی وسط جمله، با حرف بزرگ نوشته می‌شود: Ich sehe den Hund. این قانون خواندن و نوشتن را خیلی راحت‌تر می‌کند."),
],
examples:[
  E("Der Hund ist groß.", "سگ بزرگ است."),
  E("Die Katze ist klein.", "گربه کوچک است."),
  E("Das Haus ist neu.", "خانه جدید است."),
  E("Das ist ein Buch.", "این یک کتاب است."),
],
practice:[
  Q("___ Frau ist Lehrerin.", ["der", "die", "das"], 1, "Frau مؤنث است، پس die."),
  Q("Das ist ___ Apfel.", ["ein", "eine", "einen"], 0, "Apfel مذکر است و در حالت فاعلی، نامعین آن ein است."),
],
quiz:[
  Q("___ Hund ist groß.", ["der", "die", "das"], 0, "Hund مذکر است."),
  Q("Das ist ___ Frau.", ["ein", "eine", "einen"], 1, "Frau مؤنث است و نامعین آن eine است."),
  Q("___ Kind spielt.", ["der", "die", "das"], 2, "Kind خنثی است."),
  Q("Ich habe ___ Buch.", ["ein", "eine", "einen"], 0, "Buch خنثی است و در حالت مفعولی، ein می‌ماند."),
  Q("___ Männer sind hier.", ["der", "die", "das"], 1, "حرف تعریف جمع همیشه die است."),
],
},
{
id:"a1-sein", level:"A1", de:"Personalpronomen und sein", fa:"ضمیرهای شخصی و فعل sein",
book:"Menschen A1 • Starten wir! A1 • Momente A1",
steps:[
  S("قدم ۱ — ضمیرها", "ich من، du تو، er او (مذکر)، sie او (مؤنث)، es آن (خنثی)، wir ما، ihr شما (خودمانی جمع)، sie آن‌ها، Sie شما (رسمی)."),
  S("قدم ۲ — صرف sein", "ich bin، du bist، er/sie/es ist، wir sind، ihr seid، sie/Sie sind. این فعل بی‌قاعده است و باید حفظ شود."),
  S("قدم ۳ — معرفی بدون حرف تعریف", "برای شغل و ملیت مفرد، حرف تعریف نمی‌آید: Ich bin Lehrerin. Ich bin aus Iran. نه «Ich bin eine Lehrerin» در معرفی ساده."),
],
examples:[
  E("Ich bin Sara.", "من سارا هستم."),
  E("Du bist mein Freund.", "تو دوست منی."),
  E("Er ist Lehrer.", "او معلم است."),
  E("Wir sind in Berlin.", "ما در برلین هستیم."),
],
practice:[
  Q("Ich ___ Sara.", ["bin", "bist", "ist"], 0, "با ich، فعل sein می‌شود bin."),
  Q("Er ___ Lehrer.", ["ist", "sind", "bist"], 0, "با er، فعل sein می‌شود ist."),
],
quiz:[
  Q("Du ___ mein Freund.", ["bin", "bist", "ist"], 1, "با du، فعل sein می‌شود bist."),
  Q("Wir ___ in Berlin.", ["bin", "seid", "sind"], 2, "با wir، فعل sein می‌شود sind."),
  Q("Sie (رسمی) ___ Lehrerin.", ["bist", "sind", "ist"], 1, "با Sie رسمی، فعل sein می‌شود sind."),
  Q("Es ___ ein Hund.", ["bin", "ist", "seid"], 1, "با es، فعل sein می‌شود ist."),
  Q("Ihr ___ meine Freunde.", ["seid", "sind", "bist"], 0, "با ihr، فعل sein می‌شود seid."),
],
},
{
id:"a1-verben", level:"A1", de:"Regelmäßige Verben im Präsens", fa:"صرف فعل‌های باقاعده در زمان حال",
book:"Menschen A1 • Starten wir! A1 • Momente A1",
steps:[
  S("قدم ۱ — ریشه + پسوند", "پسوندها: ich ‎-e، du ‎-st، er/sie/es ‎-t، wir ‎-en، ihr ‎-t، sie/Sie ‎-en. مثال lernen: ich lerne، du lernst، er lernt، wir lernen، ihr lernt، sie lernen."),
  S("قدم ۲ — ریشه‌های با t و d", "اگر ریشه به t یا d ختم شود، برای du و er یک e اضافه می‌شود تا تلفظ راحت شود: arbeiten → du arbeitest، er arbeitet."),
  S("قدم ۳ — جایگاه فعل", "در جمله خبری، فعل صرف‌شده در جایگاه دوم است: Ich lerne Deutsch. Du lernst gut."),
],
examples:[
  E("Ich lerne Deutsch.", "من آلمانی یاد می‌گیرم."),
  E("Du lernst gut.", "تو خوب یاد می‌گیری."),
  E("Er spielt Fußball.", "او فوتبال بازی می‌کند."),
  E("Wir wohnen in Berlin.", "ما در برلین زندگی می‌کنیم."),
],
practice:[
  Q("Du ___ (lernen).", ["lerne", "lernst", "lernt"], 1, "با du، پسوند ‎-st می‌آید."),
  Q("Wir ___ (spielen).", ["spielt", "spielen", "spielst"], 1, "با wir، پسوند ‎-en می‌آید."),
],
quiz:[
  Q("Er ___ (kochen).", ["koche", "kochst", "kocht"], 2, "با er، پسوند ‎-t می‌آید."),
  Q("Ich ___ (wohnen) in Berlin.", ["wohne", "wohnst", "wohnt"], 0, "با ich، پسوند ‎-e می‌آید."),
  Q("Ihr ___ (lernen) Deutsch.", ["lernt", "lernen", "lernst"], 0, "با ihr، پسوند ‎-t می‌آید."),
  Q("Sie (آن‌ها) ___ (spielen).", ["spielt", "spielen", "spielst"], 1, "با sie جمع، پسوند ‎-en می‌آید."),
  Q("Du ___ (arbeiten).", ["arbeitst", "arbeitest", "arbeitet"], 1, "ریشه arbeiten به t ختم می‌شود، پس du arbeitest."),
],
},
{
id:"a1-fragen", level:"A1", de:"W-Fragen und Ja/Nein-Fragen", fa:"سؤال‌های پرسشی و سؤال‌های بله/خیر",
book:"Menschen A1 • Starten wir! A1 • Momente A1",
steps:[
  S("قدم ۱ — W-Fragen", "سؤال با کلمه پرسشی شروع می‌شود و فعل در جایگاه دوم است: wer چه کسی، was چه، wo کجا، wann کی، wie چطور، woher از کجا. مثال: Wo wohnst du؟"),
  S("قدم ۲ — Ja/Nein-Fragen", "سؤال بله/خیر با فعل شروع می‌شود: Wohnst du in Berlin؟ جواب: Ja. یا Nein."),
  S("قدم ۳ — ترتیب را جابه‌جا نکن", "در سؤال، فاعل بعد از فعل می‌آید: Wo wohnst du؟ نه «Wo du wohnst؟» در سؤال مستقیم."),
],
examples:[
  E("Wie heißt du?", "اسمت چیست؟"),
  E("Wo wohnst du?", "کجا زندگی می‌کنی؟"),
  E("Wohnst du in Berlin?", "در برلین زندگی می‌کنی؟"),
  E("Was ist das?", "این چیست؟"),
],
practice:[
  Q("___ heißt du?", ["Wie", "Wo", "Wann"], 0, "برای پرسیدن نام، Wie می‌آید."),
  Q("___ du in Berlin?", ["Wohnst", "Wohne", "Wohnt"], 0, "سؤال بله/خیر با فعل شروع می‌شود و با du، Wohnst می‌آید."),
],
quiz:[
  Q("___ kommst du?", ["Woher", "Wie", "Was"], 0, "برای پرسیدن «از کجا»، Woher می‌آید."),
  Q("___ ist dein Name?", ["Wie", "Wo", "Wer"], 0, "برای پرسیدن نام، Wie می‌آید: Wie ist dein Name؟"),
  Q("___ du Deutsch?", ["Lernst", "Lerne", "Lernt"], 0, "با du، Lernst می‌آید."),
  Q("Was ___ das?", ["ist", "bist", "sind"], 0, "با das، ist می‌آید."),
  Q("Wo ___ ihr?", ["wohnt", "wohne", "wohnen"], 0, "با ihr، فعل wohnen می‌شود wohnt."),
],
},
];

GRAMMAR.push(
{
id:"a1-zeit", level:"A1", de:"Zahlen, Uhrzeit und Zeitangaben", fa:"اعداد، ساعت و عبارت‌های زمانی",
book:"Menschen A1 • Starten wir! A1 • Momente A1",
steps:[
  S("قدم ۱ — ساعت", "Es ist drei Uhr یعنی ساعت سه است. برای نیم ساعت: Es ist halb vier یعنی سه و نیم (نیم به چهار)."),
  S("قدم ۲ — um برای ساعت دقیق", "برای ساعت دقیق، um می‌آید: Ich komme um acht Uhr. یعنی ساعت هشت می‌آیم."),
  S("قدم ۳ — am برای روزها", "برای روزهای هفته و آخر هفته، am می‌آید: am Montag، am Wochenende. مثال: Am Montag habe ich Deutsch."),
],
examples:[
  E("Es ist drei Uhr.", "ساعت سه است."),
  E("Ich komme um acht Uhr.", "ساعت هشت می‌آیم."),
  E("Am Montag habe ich Deutsch.", "دوشنبه آلمانی دارم."),
  E("Am Wochenende spiele ich.", "آخر هفته بازی می‌کنم."),
],
practice:[
  Q("Ich komme ___ 8 Uhr.", ["um", "am", "in"], 0, "برای ساعت دقیق، um می‌آید."),
  Q("___ Montag habe ich Deutsch.", ["Am", "Um", "In"], 0, "برای روزهای هفته، am می‌آید."),
],
quiz:[
  Q("Es ist ___ Uhr.", ["drei", "dreis", "dreien"], 0, "عدد سه در آلمانی drei است."),
  Q("Ich komme ___ neun Uhr.", ["am", "um", "in"], 1, "برای ساعت دقیق، um می‌آید."),
  Q("___ Wochenende spiele ich.", ["Am", "Um", "An"], 0, "برای آخر هفته، am می‌آید."),
  Q("Am ___ habe ich Deutsch.", ["Montag", "Montags", "Montagen"], 0, "روز هفته Montag است."),
  Q("Es ist halb ___.", ["vier", "vieren", "vierer"], 0, "halb vier یعنی سه و نیم."),
],
},
{
id:"a1-modal", level:"A1", de:"Modalverben können, müssen, wollen", fa:"فعل‌های کمکی können و müssen و wollen",
book:"Menschen A1 • Starten wir! A1 • Momente A1",
steps:[
  S("قدم ۱ — ساختار", "فعل کمکی در جایگاه دوم صرف می‌شود و فعل اصلی به‌صورت مصدر در آخر جمله می‌آید: Ich kann Deutsch sprechen."),
  S("قدم ۲ — صرف", "können: ich kann، du kannst، er kann، wir können. müssen: ich muss، du musst، er muss، wir müssen. wollen: ich will، du willst، er will، wir wollen."),
  S("قدم ۳ — معنی", "können یعنی توانستن، müssen یعنی باید، wollen یعنی خواستن. مثال: Ich muss heute lernen یعنی امروز باید یاد بگیرم."),
],
examples:[
  E("Ich kann Deutsch sprechen.", "می‌توانم آلمانی صحبت کنم."),
  E("Ich muss heute lernen.", "امروز باید یاد بگیرم."),
  E("Ich will nach Berlin fahren.", "می‌خواهم به برلین بروم."),
  E("Kannst du mir helfen?", "می‌توانی به من کمک کنی؟"),
],
practice:[
  Q("Ich ___ Deutsch sprechen.", ["kann", "kannst", "können"], 0, "با ich، können می‌شود kann."),
  Q("Ich ___ heute lernen.", ["muss", "musst", "müssen"], 0, "با ich، müssen می‌شود muss."),
],
quiz:[
  Q("Er ___ Deutsch sprechen.", ["kann", "kannst", "können"], 0, "با er، können می‌شود kann."),
  Q("Wir ___ nach Berlin fahren.", ["will", "wollen", "willst"], 1, "با wir، wollen می‌شود wollen."),
  Q("Du ___ heute lernen.", ["muss", "musst", "müssen"], 1, "با du، müssen می‌شود musst."),
  Q("Ich ___ nach Berlin fahren.", ["will", "wollen", "willst"], 0, "با ich، wollen می‌شود will."),
  Q("___ du mir helfen?", ["Kannst", "Kann", "Können"], 0, "با du، können می‌شود kannst."),
],
},
// ---------- A2 ----------
{
id:"a2-perfekt", level:"A2", de:"Perfekt mit haben und sein", fa:"زمان گذشته کامل Perfekt با haben و sein",
book:"Menschen A2 • Starten wir! A2 • Momente A2",
steps:[
  S("قدم ۱ — ساختار", "Perfekt = فعل کمکی haben یا sein در جایگاه دوم + اسم مفعول (Partizip II) در آخر جمله: Ich habe gelernt. Ich bin gefahren."),
  S("قدم ۲ — haben یا sein؟", "بیشتر فعل‌ها با haben می‌آیند. فعل‌های حرکت و تغییر حالت (gehen، kommen، fahren، reisen) با sein می‌آیند: Ich bin gegangen."),
  S("قدم ۳ — Partizip II فعل‌های باقاعده", "برای فعل‌های باقاعده: ge + ریشه + t: lernen → gelernt، spielen → gespielt. برای فعل‌های جداشدنی، ge وسط می‌آید: ankommen → angekommen."),
],
examples:[
  E("Ich habe Deutsch gelernt.", "آلمانی یاد گرفتم."),
  E("Ich bin nach Berlin gefahren.", "به برلین رفتم."),
  E("Wir haben gestern gespielt.", "دیروز بازی کردیم."),
  E("Er ist nach Hause gegangen.", "او به خانه رفت."),
],
practice:[
  Q("Ich habe Deutsch ___.", ["gelernt", "lernen", "lernte"], 0, "Partizip II فعل lernen می‌شود gelernt."),
  Q("Ich ___ nach Berlin gefahren.", ["habe", "bin", "ist"], 1, "فعل fahren حرکت است، پس با sein می‌آید."),
],
quiz:[
  Q("Wir haben gestern ___.", ["gespielt", "spielen", "spielte"], 0, "Partizip II فعل spielen می‌شود gespielt."),
  Q("Er ist nach Hause ___.", ["gegangen", "gehen", "ging"], 0, "Partizip II فعل gehen می‌شود gegangen و با sein می‌آید."),
  Q("Ich habe ein Buch ___.", ["gekauft", "kaufen", "kaufte"], 0, "Partizip II فعل kaufen می‌شود gekauft."),
  Q("Sie ___ nach Berlin gefahren.", ["hat", "ist", "haben"], 1, "با sie مفرد مؤنث و فعل حرکت، sein می‌شود ist."),
  Q("Ich ___ gestern gelernt.", ["habe", "bin", "hat"], 0, "فعل lernen با haben می‌آید."),
],
},
{
id:"a2-praeteritum", level:"A2", de:"Präteritum von sein, haben und Modalverben", fa:"گذشته ساده Präteritum برای sein و haben و فعل‌های کمکی",
book:"Menschen A2 • Starten wir! A2 • Momente A2",
steps:[
  S("قدم ۱ — چرا Präteritum؟", "در گفتار روزمره بیشتر Perfekt به کار می‌رود، ولی sein و haben و فعل‌های کمکی در گذشته ساده هم خیلی پرکاربردند، مخصوصاً در داستان و نوشتار."),
  S("قدم ۲ — sein و haben", "sein: ich war، du warst، er war، wir waren. haben: ich hatte، du hattest، er hatte، wir hatten."),
  S("قدم ۳ — فعل‌های کمکی", "können → konnte، müssen → musste، wollen → wollte. مثال: Ich konnte nicht kommen یعنی نتوانستم بیایم."),
],
examples:[
  E("Ich war gestern in Berlin.", "دیروز در برلین بودم."),
  E("Ich hatte keine Zeit.", "وقت نداشتم."),
  E("Er konnte nicht kommen.", "او نتوانست بیاید."),
  E("Wir wollten nach Hause gehen.", "می‌خواستیم به خانه برویم."),
],
practice:[
  Q("Ich ___ gestern in Berlin.", ["war", "bin", "wurde"], 0, "گذشته sein با ich می‌شود war."),
  Q("Ich ___ keine Zeit.", ["hatte", "habe", "hat"], 0, "گذشته haben با ich می‌شود hatte."),
],
quiz:[
  Q("Er ___ gestern in Berlin.", ["war", "ist", "wurde"], 0, "گذشته sein با er می‌شود war."),
  Q("Wir ___ keine Zeit.", ["hatten", "haben", "hattet"], 0, "گذشته haben با wir می‌شود hatten."),
  Q("Ich ___ nicht kommen.", ["konnte", "kann", "könnte"], 0, "گذشته können با ich می‌شود konnte."),
  Q("Sie ___ nach Hause gehen.", ["wollte", "will", "wollten"], 2, "گذشته wollen با sie جمع می‌شود wollten."),
  Q("Du ___ gestern hier.", ["warst", "war", "wurdest"], 0, "گذشته sein با du می‌شود warst."),
],
},
{
id:"a2-praepositionen", level:"A2", de:"Präpositionen mit Akkusativ und Dativ", fa:"حروف اضافه با حالت مفعولی و حالت داتیو",
book:"Menschen A2 • Starten wir! A2 • Momente A2",
steps:[
  S("قدم ۱ — Akkusativ یعنی حرکت به سمت", "حروف in، an، auf وقتی حرکت به سمت مقصد را نشان دهند، مفعولی می‌گیرند: Ich gehe in die Schule. (der → den)"),
  S("قدم ۲ — Dativ یعنی بودن در مکان", "همان حروف وقتی بودن در مکان را نشان دهند، داتیو می‌گیرند: Ich bin in der Schule. (der → dem، die → der، das → dem)"),
  S("قدم ۳ — حروف همیشه داتیو", "mit، von، zu، bei همیشه داتیو می‌گیرند: Ich fahre mit dem Bus. Ich komme von der Arbeit."),
],
examples:[
  E("Ich gehe in die Schule.", "به مدرسه می‌روم."),
  E("Ich bin in der Schule.", "در مدرسه هستم."),
  E("Ich fahre mit dem Bus.", "با اتوبوس می‌روم."),
  E("Ich komme von der Arbeit.", "از سر کار می‌آیم."),
],
practice:[
  Q("Ich gehe in ___ Schule.", ["die", "der", "dem"], 0, "حرکت به سمت مدرسه، پس Akkusativ: die Schule."),
  Q("Ich bin in ___ Schule.", ["die", "der", "dem"], 1, "بودن در مدرسه، پس Dativ: der Schule."),
],
quiz:[
  Q("Ich fahre mit ___ Bus.", ["den", "dem", "der"], 1, "mit همیشه Dativ می‌گیرد: dem Bus."),
  Q("Ich gehe in ___ Stadt.", ["die", "der", "dem"], 0, "حرکت به سمت شهر، پس Akkusativ: die Stadt."),
  Q("Ich bin in ___ Stadt.", ["die", "der", "dem"], 1, "بودن در شهر، پس Dativ: der Stadt."),
  Q("Ich komme von ___ Arbeit.", ["die", "der", "dem"], 1, "von همیشه Dativ می‌گیرد: der Arbeit."),
  Q("Ich lege das Buch auf ___ Tisch.", ["den", "dem", "der"], 0, "گذاشتن روی میز حرکت است، پس Akkusativ: den Tisch."),
],
},
{
id:"a2-nebensaetze", level:"A2", de:"Nebensätze mit weil, dass, wenn", fa:"جملات فرعی با weil و dass و wenn",
book:"Menschen A2 • Starten wir! A2 • Momente A2",
steps:[
  S("قدم ۱ — فعل به آخر جمله فرعی می‌رود", "در جمله فرعی، فعل صرف‌شده در آخر می‌آید: Ich lerne Deutsch, weil ich in Deutschland wohnen will."),
  S("قدم ۲ — weil یعنی زیرا", "weil دلیل می‌آورد: Ich bleibe zu Hause, weil ich krank bin."),
  S("قدم ۳ — dass و wenn", "dass برای نقل و نظر: Ich denke, dass das gut ist. wenn برای شرط و تکرار: Wenn ich Zeit habe, lerne ich."),
],
examples:[
  E("Ich bleibe zu Hause, weil ich krank bin.", "در خانه می‌مانم، چون بیمارم."),
  E("Ich denke, dass das gut ist.", "فکر می‌کنم این خوب است."),
  E("Wenn ich Zeit habe, lerne ich.", "وقتی وقت دارم، یاد می‌گیرم."),
  E("Ich lerne Deutsch, weil ich in Deutschland wohnen will.", "آلمانی یاد می‌گیرم، چون می‌خواهم در آلمان زندگی کنم."),
],
practice:[
  Q("Ich bleibe zu Hause, ___ ich krank bin.", ["weil", "dass", "wenn"], 0, "برای دلیل، weil می‌آید."),
  Q("Ich denke, ___ das gut ist.", ["weil", "dass", "wenn"], 1, "برای نقل نظر، dass می‌آید."),
],
quiz:[
  Q("Ich lerne, ___ ich Zeit habe.", ["weil", "dass", "wenn"], 2, "برای شرط «وقتی»، wenn می‌آید."),
  Q("Er sagt, ___ er kommt.", ["weil", "dass", "wenn"], 1, "برای نقل گفته، dass می‌آید."),
  Q("Ich bleibe zu Hause, weil ich ___ bin.", ["krank", "kranke", "kranken"], 0, "بعد از sein، صفت بدون پسوند می‌آید: krank."),
  Q("Wenn ich Zeit habe, ___ ich.", ["lerne", "lernen", "lernt"], 0, "در جمله اصلی، فعل با ich می‌شود lerne."),
  Q("Ich denke, dass das ___ ist.", ["gut", "gute", "guten"], 0, "بعد از sein، صفت بدون پسوند می‌آید: gut."),
],
},
{
id:"a2-komparativ", level:"A2", de:"Komparativ und Superlativ", fa:"صفت تفضیلی و عالی",
book:"Menschen A2 • Starten wir! A2 • Momente A2",
steps:[
  S("قدم ۱ — تفضیلی", "به صفت ‎-er اضافه می‌شود: schön → schöner، schnell → schneller. مقایسه با als: Er ist größer als ich."),
  S("قدم ۲ — بی‌قاعده‌ها", "gut → besser، viel → mehr، gern → lieber. این‌ها را باید حفظ کرد."),
  S("قدم ۳ — عالی", "عالی با am + ‎-sten: am schönsten، am schnellsten. و gut → am besten."),
],
examples:[
  E("Er ist größer als ich.", "او از من بزرگ‌تر است."),
  E("Das ist besser als früher.", "این از قبل بهتر است."),
  E("Das ist am schönsten.", "این زیباترین است."),
  E("Ich lerne lieber Deutsch.", "ترجیح می‌دهم آلمانی یاد بگیرم."),
],
practice:[
  Q("Er ist ___ als ich. (groß)", ["größer", "großer", "am größten"], 0, "تفضیلی groß می‌شود größer."),
  Q("Das ist ___ als früher. (gut)", ["guter", "besser", "am besten"], 1, "تفضیلی gut می‌شود besser."),
],
quiz:[
  Q("Sie ist ___ als ich. (schnell)", ["schneller", "schnell", "am schnellsten"], 0, "تفضیلی schnell می‌شود schneller."),
  Q("Das ist ___. (gut, عالی)", ["am besten", "besser", "beste"], 0, "عالی gut می‌شود am besten."),
  Q("Ich trinke ___ Wasser. (viel, تفضیلی)", ["mehr", "vieler", "am meisten"], 0, "تفضیلی viel می‌شود mehr."),
  Q("Er ist ___ als sein Bruder. (alt)", ["älter", "alter", "am ältesten"], 0, "تفضیلی alt می‌شود älter."),
  Q("Das ist ___ als gestern. (interessant)", ["interessanter", "interessant", "am interessantesten"], 0, "تفضیلی interessant می‌شود interessanter."),
],
},
{
id:"a2-trennbar", level:"A2", de:"Trennbare und reflexive Verben", fa:"فعل‌های جداشدنی و انعکاسی",
book:"Menschen A2 • Starten wir! A2 • Momente A2",
steps:[
  S("قدم ۱ — فعل جداشدنی", "در جمله خبری، بخش اصلی فعل در جایگاه دوم و پیشوند در آخر جمله می‌آید: Ich stehe um 7 Uhr auf. (aufstehen)"),
  S("قدم ۲ — در جمله فرعی و مصدر", "در جمله فرعی، پیشوند می‌چسبد: …, weil ich aufstehe. در مصدر با zu: aufzustehen."),
  S("قدم ۳ — فعل انعکاسی", "بعضی فعل‌ها با sich می‌آیند: sich freuen، sich erinnern. ضمیر انعکاسی با فاعل عوض می‌شود: Ich freue mich، du freust dich، er freut sich."),
],
examples:[
  E("Ich stehe um 7 Uhr auf.", "ساعت ۷ بلند می‌شوم."),
  E("Ich freue mich auf den Urlaub.", "برای تعطیلات خوشحالم."),
  E("Er erinnert sich an mich.", "او مرا به یاد می‌آورد."),
  E("Wir kommen um 8 Uhr an.", "ساعت ۸ می‌رسیم."),
],
practice:[
  Q("Ich stehe um 7 Uhr ___.", ["auf", "an", "ab"], 0, "فعل aufstehen در جمله خبری جدا می‌شود: stehe … auf."),
  Q("Ich freue ___ auf den Urlaub.", ["mich", "dich", "sich"], 0, "با ich، ضمیر انعکاسی mich است."),
],
quiz:[
  Q("Wir kommen um 8 Uhr ___.", ["an", "auf", "ab"], 0, "فعل ankommen جدا می‌شود: kommen … an."),
  Q("Du freust ___ auf den Urlaub.", ["mich", "dich", "sich"], 1, "با du، ضمیر انعکاسی dich است."),
  Q("Er erinnert ___ an mich.", ["mich", "sich", "dich"], 1, "با er، ضمیر انعکاسی sich است."),
  Q("Ich stehe ___ 7 Uhr auf.", ["um", "am", "in"], 0, "برای ساعت دقیق، um می‌آید."),
  Q("…, weil ich ___ . (aufstehen)", ["aufstehe", "stehe auf", "aufstehen"], 0, "در جمله فرعی، پیشوند می‌چسبد: aufstehe."),
],
},
);

GRAMMAR.push(
{
id:"b1-konnektoren", level:"B1", de:"Konnektoren: obwohl, trotzdem, deshalb, während", fa:"ربط‌دهنده‌های پیشرفته: obwohl و trotzdem و deshalb و während",
book:"Menschen B1 • Starten wir! B1 • Momente B1",
steps:[
  S("قدم ۱ — obwohl یعنی با اینکه", "obwohl جمله فرعی می‌سازد و فعل به آخر می‌رود: Obwohl es regnet, gehe ich spazieren."),
  S("قدم ۲ — trotzdem یعنی با این حال", "trotzdem در جمله اصلی می‌آید و فعل در جایگاه دوم می‌ماند، ولی ترتیب وارونه می‌شود: Es regnet, trotzdem gehe ich spazieren."),
  S("قدم ۳ — deshalb و während", "deshalb یعنی به همین دلیل و در جمله اصلی با وارونگی می‌آید: Ich bin krank, deshalb bleibe ich zu Hause. während یعنی در حالی که و جمله فرعی می‌سازد: Während ich lerne, hört er Musik."),
],
examples:[
  E("Obwohl es regnet, gehe ich spazieren.", "با اینکه باران می‌بارد، قدم می‌زنم."),
  E("Es regnet, trotzdem gehe ich spazieren.", "باران می‌بارد، با این حال قدم می‌زنم."),
  E("Ich bin krank, deshalb bleibe ich zu Hause.", "بیمارم، به همین دلیل در خانه می‌مانم."),
  E("Während ich lerne, hört er Musik.", "در حالی که من یاد می‌گیرم، او موسیقی گوش می‌دهد."),
],
practice:[
  Q("___ es regnet, gehe ich spazieren.", ["Obwohl", "Trotzdem", "Deshalb"], 0, "برای «با اینکه» در جمله فرعی، obwohl می‌آید."),
  Q("Ich bin krank, ___ bleibe ich zu Hause.", ["deshalb", "obwohl", "während"], 0, "برای «به همین دلیل»، deshalb می‌آید."),
],
quiz:[
  Q("___ ich müde bin, lerne ich.", ["Obwohl", "Trotzdem", "Deshalb"], 0, "obwohl جمله فرعی می‌سازد."),
  Q("Es regnet, ___ gehe ich spazieren.", ["trotzdem", "obwohl", "deshalb"], 0, "trotzdem در جمله اصلی با وارونگی می‌آید."),
  Q("Ich habe keine Zeit, ___ bleibe ich zu Hause.", ["deshalb", "obwohl", "während"], 0, "deshalb یعنی به همین دلیل."),
  Q("___ ich lerne, hört er Musik.", ["Während", "Deshalb", "Trotzdem"], 0, "während یعنی در حالی که."),
  Q("Obwohl es regnet, ___ ich spazieren.", ["gehe", "gehen", "geht"], 0, "در جمله اصلی بعد از obwohl، فعل با ich می‌شود gehe."),
],
},
{
id:"b1-passiv", level:"B1", de:"Passiv im Präsens", fa:"ساختار مجهول در زمان حال",
book:"Menschen B1 • Starten wir! B1 • Momente B1",
steps:[
  S("قدم ۱ — ساختار", "مجهول حال = werden صرف‌شده + Partizip II: Das Buch wird gelesen. فاعل انجام‌دهنده مهم نیست یا با von می‌آید: Das Buch wird von Sara gelesen."),
  S("قدم ۲ — werden را با sein اشتباه نگیر", "sein + Partizip II حالت را نشان می‌دهد (Zustandspassiv): Das Buch ist gelesen یعنی کتاب خوانده شده است (وضعیت). werden + Partizip II خود عمل را نشان می‌دهد."),
  S("قدم ۳ — صرف werden", "ich werde، du wirst، er wird، wir werden، ihr werdet، sie werden."),
],
examples:[
  E("Das Buch wird gelesen.", "کتاب خوانده می‌شود."),
  E("Das Haus wird gebaut.", "خانه ساخته می‌شود."),
  E("Die Briefe werden geschrieben.", "نامه‌ها نوشته می‌شوند."),
  E("Das Buch wird von Sara gelesen.", "کتاب توسط سارا خوانده می‌شود."),
],
practice:[
  Q("Das Buch ___ gelesen.", ["wird", "ist", "werden"], 0, "مجهول حال با werden ساخته می‌شود."),
  Q("Die Briefe ___ geschrieben.", ["wird", "werden", "ist"], 1, "با جمع، werden می‌شود werden."),
],
quiz:[
  Q("Das Haus ___ gebaut.", ["wird", "werden", "ist"], 0, "با مفرد، werden می‌شود wird."),
  Q("Die Kinder ___ unterrichtet.", ["wird", "werden", "wirst"], 1, "با جمع، werden می‌شود werden."),
  Q("Das Buch ___ von Sara gelesen.", ["wird", "werden", "ist"], 0, "مجهول حال: wird + gelesen."),
  Q("Du ___ gefragt.", ["wirst", "wird", "werden"], 0, "با du، werden می‌شود wirst."),
  Q("Das Buch ist ___. (حالت، نه عمل)", ["gelesen", "wird gelesen", "lesen"], 0, "حالت با sein + Partizip II: ist gelesen."),
],
},
{
id:"b1-futur-konjunktiv", level:"B1", de:"Futur I und Konjunktiv II (Wünsche, höfliche Bitten)", fa:"آینده Futur I و شرطی Konjunktiv II برای آرزو و درخواست مؤدبانه",
book:"Menschen B1 • Starten wir! B1 • Momente B1",
steps:[
  S("قدم ۱ — Futur I", "Futur I = werden صرف‌شده + مصدر در آخر: Ich werde morgen lernen. برای پیش‌بینی و قصد آینده به کار می‌رود."),
  S("قدم ۲ — Konjunktiv II با würde", "برای آرزو و درخواست مؤدبانه: würde + مصدر: Ich würde gern nach Berlin fahren. Ich hätte gern ein Wasser."),
  S("قدم ۳ — hätte و wäre", "گذشته و شرطی با hätte (از haben) و wäre (از sein): Wenn ich Zeit hätte, würde ich reisen. Ich wäre gern in Berlin."),
],
examples:[
  E("Ich werde morgen lernen.", "فردا یاد خواهم گرفت."),
  E("Ich würde gern nach Berlin fahren.", "دوست دارم به برلین بروم."),
  E("Wenn ich Zeit hätte, würde ich reisen.", "اگر وقت داشتم، سفر می‌کردم."),
  E("Ich hätte gern ein Wasser.", "یک آب می‌خواهم (مؤدبانه)."),
],
practice:[
  Q("Ich ___ morgen lernen.", ["werde", "würde", "will"], 0, "آینده با werden ساخته می‌شود: werde."),
  Q("Ich ___ gern nach Berlin fahren.", ["würde", "werde", "will"], 0, "برای آرزوی مؤدبانه، würde می‌آید."),
],
quiz:[
  Q("Er ___ morgen kommen.", ["wird", "würde", "will"], 0, "آینده با werden: wird."),
  Q("Wenn ich Zeit ___, würde ich reisen.", ["hätte", "habe", "wäre"], 0, "شرطی با haben می‌شود hätte."),
  Q("Ich ___ gern in Berlin.", ["wäre", "bin", "würde"], 0, "شرطی با sein می‌شود wäre."),
  Q("Wir ___ morgen lernen.", ["werden", "würden", "wollen"], 0, "آینده با wir می‌شود werden."),
  Q("___ du mir helfen? (مؤدبانه)", ["Würdest", "Wirst", "Willst"], 0, "درخواست مؤدبانه با würdest ساخته می‌شود."),
],
},
{
id:"b1-infinitiv", level:"B1", de:"Infinitiv mit zu und um … zu", fa:"مصدر با zu و ساختار um … zu",
book:"Menschen B1 • Starten wir! B1 • Momente B1",
steps:[
  S("قدم ۱ — Infinitiv mit zu", "بعد از بعضی فعل‌ها و صفت‌ها، مصدر با zu می‌آید: Ich versuche, Deutsch zu lernen. Es ist wichtig, Deutsch zu lernen."),
  S("قدم ۲ — um … zu برای هدف", "برای بیان هدف: Ich lerne Deutsch, um in Deutschland zu arbeiten. یعنی آلمانی یاد می‌گیرم تا در آلمان کار کنم."),
  S("قدم ۳ — فاعل یکی باشد", "um … zu وقتی به کار می‌رود که فاعل دو جمله یکی باشد. اگر فاعل فرق کند، از damit استفاده می‌شود: Ich helfe dir, damit du lernst."),
],
examples:[
  E("Ich versuche, Deutsch zu lernen.", "سعی می‌کنم آلمانی یاد بگیرم."),
  E("Es ist wichtig, Deutsch zu lernen.", "مهم است که آلمانی یاد بگیری."),
  E("Ich lerne Deutsch, um in Deutschland zu arbeiten.", "آلمانی یاد می‌گیرم تا در آلمان کار کنم."),
  E("Ich helfe dir, damit du lernst.", "به تو کمک می‌کنم تا یاد بگیری."),
],
practice:[
  Q("Ich versuche, Deutsch ___ lernen.", ["zu", "um", "damit"], 0, "مصدر با zu می‌آید."),
  Q("Ich lerne Deutsch, ___ in Deutschland zu arbeiten.", ["um", "zu", "damit"], 0, "برای هدف با فاعل یکسان، um … zu می‌آید."),
],
quiz:[
  Q("Es ist wichtig, Deutsch ___ lernen.", ["zu", "um", "damit"], 0, "بعد از wichtig، مصدر با zu می‌آید."),
  Q("Ich lerne Deutsch, um in Deutschland ___ arbeiten.", ["zu", "um", "damit"], 0, "در um … zu، مصدر دوم هم با zu می‌آید."),
  Q("Ich helfe dir, ___ du lernst.", ["damit", "um", "zu"], 0, "وقتی فاعل فرق می‌کند، damit می‌آید."),
  Q("Ich versuche, jeden Tag ___ lernen.", ["zu", "um", "dass"], 0, "بعد از versuchen، مصدر با zu می‌آید."),
  Q("Ich komme, ___ dir zu helfen.", ["um", "zu", "damit"], 0, "برای هدف با فاعل یکسان، um می‌آید."),
],
},
{
id:"b1-relativ", level:"B1", de:"Relativsätze", fa:"جملات موصولی (که …)",
book:"Menschen B1 • Starten wir! B1 • Momente B1",
steps:[
  S("قدم ۱ — ضمیر موصولی", "ضمیر موصولی با جنسیت و عدد اسم مطابقت دارد: der Mann, der …؛ die Frau, die …؛ das Kind, das …؛ جمع: die Menschen, die …"),
  S("قدم ۲ — حالت ضمیر", "حالت ضمیر به نقش آن در جمله فرعی بستگی دارد: Der Mann, den ich kenne, … (den چون مفعول است). Die Frau, der ich helfe, … (der چون داتیو است)."),
  S("قدم ۳ — فعل به آخر می‌رود", "جمله موصولی یک جمله فرعی است و فعل در آخر می‌آید: Das ist der Mann, den ich kenne."),
],
examples:[
  E("Das ist der Mann, den ich kenne.", "این مردی است که می‌شناسم."),
  E("Das ist die Frau, die in Berlin wohnt.", "این زنی است که در برلین زندگی می‌کند."),
  E("Das ist das Buch, das ich lese.", "این کتابی است که می‌خوانم."),
  E("Das sind die Kinder, die spielen.", "این‌ها کودکانی‌اند که بازی می‌کنند."),
],
practice:[
  Q("Das ist der Mann, ___ ich kenne.", ["den", "der", "dem"], 0, "مفعول جمله فرعی، پس den."),
  Q("Das ist die Frau, ___ in Berlin wohnt.", ["die", "der", "das"], 0, "فاعل مؤنث، پس die."),
],
quiz:[
  Q("Das ist das Buch, ___ ich lese.", ["das", "der", "den"], 0, "مفعول خنثی، پس das."),
  Q("Das sind die Kinder, ___ spielen.", ["die", "der", "das"], 0, "فاعل جمع، پس die."),
  Q("Das ist der Mann, ___ ich helfe.", ["der", "den", "dem"], 2, "با helfen، داتیو می‌آید: dem."),
  Q("Das ist die Frau, ___ ich kenne.", ["die", "der", "den"], 0, "مفعول مؤنث، پس die."),
  Q("Das ist das Haus, ___ ich wohne.", ["in dem", "in den", "in der"], 0, "در خانه بودن با داتیو: in dem Haus."),
],
},
{
id:"b1-genitiv", level:"B1", de:"Genitiv", fa:"حالت اضافه Genitiv (مالکیت)",
book:"Menschen B1 • Starten wir! B1 • Momente B1",
steps:[
  S("قدم ۱ — ساختار", "Genitiv مالکیت را نشان می‌دهد و معمولاً بعد از اسم می‌آید: das Buch des Mannes (کتاب مرد)، das Haus der Frau."),
  S("قدم ۲ — پسوندها", "مذکر و خنثی: des + ‎-s یا ‎-es: des Mannes، des Kindes. مؤنث و جمع: der: der Frau، der Kinder."),
  S("قدم ۳ — جایگزین با von", "در گفتار روزمره اغلب به‌جای Genitiv از von + Dativ استفاده می‌شود: das Buch von dem Mann. در نوشتار رسمی، Genitiv رایج‌تر است."),
],
examples:[
  E("Das Buch des Mannes ist neu.", "کتاب مرد جدید است."),
  E("Das Haus der Frau ist groß.", "خانه زن بزرگ است."),
  E("Die Kinder der Lehrer spielen.", "کودکان معلمان بازی می‌کنند."),
  E("Das ist das Buch von dem Mann.", "این کتاب مرد است (با von)."),
],
practice:[
  Q("Das Buch ___ Mannes ist neu.", ["des", "der", "dem"], 0, "Genitiv مذکر: des Mannes."),
  Q("Das Haus ___ Frau ist groß.", ["des", "der", "dem"], 1, "Genitiv مؤنث: der Frau."),
],
quiz:[
  Q("Die Kinder ___ Lehrer spielen.", ["der", "des", "dem"], 0, "Genitiv جمع: der Lehrer."),
  Q("Das Auto ___ Kindes ist neu.", ["des", "der", "dem"], 0, "Genitiv خنثی: des Kindes."),
  Q("Das Buch ___ Frau ist alt.", ["der", "des", "dem"], 0, "Genitiv مؤنث: der Frau."),
  Q("Das Haus ___ Mannes ist groß.", ["des", "der", "dem"], 0, "Genitiv مذکر: des Mannes."),
  Q("Das ist das Buch ___ dem Mann. (با von)", ["von", "des", "der"], 0, "جایگزین گفتاری Genitiv با von + Dativ است."),
],
},
);

GRAMMAR.push(
{
id:"b2-passiv2", level:"B2", de:"Passiv mit Modalverben und Zustandspassiv", fa:"مجهول با فعل‌های کمکی و مجهول حالتی",
book:"Momente B2 • Menschen B1 (تکمیلی)",
steps:[
  S("قدم ۱ — مجهول با فعل کمکی", "ساختار: فعل کمکی + Partizip II + werden: Das Buch muss gelesen werden. یعنی کتاب باید خوانده شود."),
  S("قدم ۲ — مجهول حالتی", "Zustandspassiv با sein + Partizip II وضعیت بعد از عمل را نشان می‌دهد: Das Buch ist gelesen یعنی کتاب خوانده شده است (تمام شده)."),
  S("قدم ۳ — تفاوت را حس کن", "Das Buch wird gelesen = در حال خوانده شدن است. Das Buch ist gelesen = خوانده شده و تمام شده است."),
],
examples:[
  E("Das Buch muss gelesen werden.", "کتاب باید خوانده شود."),
  E("Das Buch ist gelesen.", "کتاب خوانده شده است."),
  E("Das Haus kann gebaut werden.", "خانه می‌تواند ساخته شود."),
  E("Die Tür ist geöffnet.", "در باز شده است."),
],
practice:[
  Q("Das Buch ___ gelesen werden.", ["muss", "müssen", "musst"], 0, "با مفرد، müssen می‌شود muss."),
  Q("Das Buch ___ gelesen. (حالت)", ["ist", "wird", "werden"], 0, "مجهول حالتی با sein ساخته می‌شود."),
],
quiz:[
  Q("Die Briefe ___ geschrieben werden.", ["müssen", "muss", "musst"], 0, "با جمع، müssen می‌شود müssen."),
  Q("Das Haus ___ gebaut. (حالت)", ["ist", "wird", "werden"], 0, "مجهول حالتی: ist + gebaut."),
  Q("Das Buch ___ von Sara gelesen werden.", ["kann", "können", "kannst"], 0, "با مفرد، können می‌شود kann."),
  Q("Die Tür ___ geöffnet. (حالت)", ["ist", "wird", "werden"], 0, "مجهول حالتی: ist + geöffnet."),
  Q("Das Buch ___ gelesen werden, weil es wichtig ist.", ["muss", "müssen", "musst"], 0, "با مفرد، müssen می‌شود muss."),
],
},
{
id:"b2-konjunktiv1", level:"B2", de:"Konjunktiv I (indirekte Rede)", fa:"نقل قول غیرمستقیم با Konjunktiv I",
book:"Momente B2",
steps:[
  S("قدم ۱ — چرا Konjunktiv I؟", "برای نقل گفته دیگران بدون اینکه تأیید کنیم درست است: Er sagt, er sei krank. یعنی او می‌گوید بیمار است (نقل قول، نه تأیید ما)."),
  S("قدم ۲ — شکل‌ها", "sein: ich sei، du seist، er sei، wir seien. haben: ich habe، er habe. فعل‌های عادی: er lerne، er sage (ریشه + e)."),
  S("قدم ۳ — اگر با حال یکی شد", "اگر شکل Konjunktiv I با حال ساده یکی شد (مثل wir lernen)، از Konjunktiv II یا würde استفاده می‌شود تا نقل قول مشخص بماند."),
],
examples:[
  E("Er sagt, er sei krank.", "او می‌گوید بیمار است."),
  E("Sie sagt, sie habe keine Zeit.", "او می‌گوید وقت ندارد."),
  E("Er sagt, er lerne Deutsch.", "او می‌گوید آلمانی یاد می‌گیرد."),
  E("Sie sagen, sie seien in Berlin.", "آن‌ها می‌گویند در برلین هستند."),
],
practice:[
  Q("Er sagt, er ___ krank.", ["sei", "ist", "wäre"], 0, "نقل قول با sein می‌شود sei."),
  Q("Sie sagt, sie ___ keine Zeit.", ["habe", "hat", "hätte"], 0, "نقل قول با haben می‌شود habe."),
],
quiz:[
  Q("Er sagt, er ___ Deutsch.", ["lerne", "lernt", "lernen"], 0, "نقل قول با lernen می‌شود lerne."),
  Q("Sie sagen, sie ___ in Berlin.", ["seien", "sind", "wären"], 0, "نقل قول با sein و جمع می‌شود seien."),
  Q("Er sagt, er ___ ein Buch.", ["habe", "hat", "hätte"], 0, "نقل قول با haben می‌شود habe."),
  Q("Sie sagt, sie ___ müde.", ["sei", "ist", "wäre"], 0, "نقل قول با sein و مؤنث مفرد می‌شود sei."),
  Q("Er sagt, er ___ nach Berlin.", ["fahre", "fährt", "fahren"], 0, "نقل قول با fahren می‌شود fahre."),
],
},
{
id:"b2-konjunktiv2", level:"B2", de:"Konjunktiv II in der Vergangenheit", fa:"شرطی گذشته و آرزوهای غیرواقعی",
book:"Momente B2",
steps:[
  S("قدم ۱ — ساختار گذشته", "شرطی گذشته = hätte/wäre + Partizip II: Wenn ich Zeit gehabt hätte, wäre ich gereist. یعنی اگر وقت داشتم، سفر می‌کردم (ولی نداشتم)."),
  S("قدم ۲ — hätte یا wäre؟", "با فعل‌های haben و بیشتر فعل‌ها hätte، با فعل‌های حرکت و sein، wäre: Ich wäre gegangen. Ich hätte gelernt."),
  S("قدم ۳ — آرزوی غیرواقعی", "برای آرزویی که برآورده نشده: Ich wünschte, ich hätte mehr gelernt."),
],
examples:[
  E("Wenn ich Zeit gehabt hätte, wäre ich gereist.", "اگر وقت داشتم، سفر می‌کردم."),
  E("Ich wäre gern nach Berlin gegangen.", "دوست داشتم به برلین بروم."),
  E("Ich hätte mehr lernen sollen.", "باید بیشتر یاد می‌گرفتم."),
  E("Wenn er gekommen wäre, hätten wir gespielt.", "اگر او می‌آمد، بازی می‌کردیم."),
],
practice:[
  Q("Wenn ich Zeit gehabt ___, wäre ich gereist.", ["hätte", "habe", "wäre"], 0, "با haben در شرطی گذشته، hätte می‌آید."),
  Q("Ich ___ gern nach Berlin gegangen.", ["wäre", "bin", "würde"], 0, "با فعل حرکت در شرطی گذشته، wäre می‌آید."),
],
quiz:[
  Q("Wenn er gekommen ___, hätten wir gespielt.", ["wäre", "ist", "hätte"], 0, "با kommen (حرکت) در شرطی گذشته، wäre می‌آید."),
  Q("Ich ___ mehr lernen sollen.", ["hätte", "habe", "wäre"], 0, "با lernen در شرطی گذشته، hätte می‌آید."),
  Q("Wenn ich Geld gehabt ___, hätte ich ein Auto gekauft.", ["hätte", "habe", "wäre"], 0, "با haben، hätte می‌آید."),
  Q("Er ___ gern in Berlin geblieben.", ["wäre", "ist", "hätte"], 0, "با bleiben (تغییر حالت) در شرطی گذشته، wäre می‌آید."),
  Q("Wir ___ gestern kommen sollen.", ["hätten", "haben", "wären"], 0, "با جمع و فعل کمکی، hätte می‌شود hätten."),
],
},
{
id:"b2-nominalisierung", level:"B2", de:"Nominalisierung", fa:"اسم‌سازی از فعل (Nominalisierung)",
book:"Momente B2",
steps:[
  S("قدم ۱ — فعل به اسم تبدیل می‌شود", "مصدر فعل با حرف بزرگ به اسم تبدیل می‌شود: lernen → das Lernen، lesen → das Lesen. یعنی «یاد گرفتن» به‌عنوان یک چیز."),
  S("قدم ۲ — با حرف تعریف و صفت", "اسم ساخته‌شده خنثی است و می‌تواند صفت بگیرد: das schnelle Lesen، das tägliche Lernen."),
  S("قدم ۳ — در جمله رسمی", "در نوشتار رسمی و علمی، اسم‌سازی خیلی رایج است و جمله را فشرده‌تر می‌کند: Das Lernen einer Sprache braucht Zeit."),
],
examples:[
  E("Das Lernen einer Sprache braucht Zeit.", "یاد گرفتن یک زبان زمان می‌برد."),
  E("Das Lesen ist wichtig.", "خواندن مهم است."),
  E("Beim Lernen muss man üben.", "هنگام یاد گرفتن باید تمرین کرد."),
  E("Das schnelle Lesen hilft viel.", "خواندن سریع خیلی کمک می‌کند."),
],
practice:[
  Q("___ Lernen einer Sprache braucht Zeit.", ["Das", "Der", "Die"], 0, "اسم ساخته‌شده از فعل خنثی است: das Lernen."),
  Q("___ Lesen ist wichtig.", ["Das", "Der", "Die"], 0, "اسم ساخته‌شده از lesen خنثی است: das Lesen."),
],
quiz:[
  Q("___ Arbeiten in Deutschland ist interessant.", ["Das", "Der", "Die"], 0, "اسم ساخته‌شده از arbeiten خنثی است."),
  Q("Beim ___ muss man üben.", ["Lernen", "Lernens", "Lernt"], 0, "بعد از beim، مصدر با حرف بزرگ می‌آید: Lernen."),
  Q("Das ___ Lesen hilft viel.", ["schnelle", "schnell", "schneller"], 0, "صفت قبل از اسم ساخته‌شده پسوند می‌گیرد: schnelle."),
  Q("___ Schreiben ist nicht leicht.", ["Das", "Der", "Die"], 0, "اسم ساخته‌شده از schreiben خنثی است."),
  Q("Das tägliche ___ braucht Zeit.", ["Lernen", "Lernt", "Lernens"], 0, "اسم ساخته‌شده: Lernen."),
],
},
{
id:"b2-praeposition-verben", level:"B2", de:"Verben mit Präpositionen", fa:"فعل‌ها با حرف اضافه ثابت",
book:"Momente B2",
steps:[
  S("قدم ۱ — فعل + حرف اضافه ثابت", "بعضی فعل‌ها همیشه با یک حرف اضافه خاص می‌آیند: sich freuen auf (منتظر چیزی بودن با شوق)، sich freuen über (از چیزی خوشحال بودن)، warten auf (منتظر چیزی ماندن)، denken an (به چیزی فکر کردن)."),
  S("قدم ۲ — حالت بعد از حرف اضافه", "حالت بعد از حرف اضافه را باید با خود فعل حفظ کرد: auf + Akkusativ در sich freuen auf، über + Akkusativ در sich freuen über، an + Akkusativ در denken an."),
  S("قدم ۳ — با ضمیر", "وقتی به‌جای اسم، ضمیر می‌آید، از da + حرف اضافه استفاده می‌شود: Ich freue mich darauf. Ich denke daran."),
],
examples:[
  E("Ich freue mich auf den Urlaub.", "برای تعطیلات خوشحالم (منتظرم)."),
  E("Ich freue mich über das Geschenk.", "از هدیه خوشحالم."),
  E("Ich warte auf den Bus.", "منتظر اتوبوس هستم."),
  E("Ich denke an dich.", "به تو فکر می‌کنم."),
],
practice:[
  Q("Ich freue mich ___ den Urlaub.", ["auf", "über", "an"], 0, "برای انتظار با شوق، auf می‌آید."),
  Q("Ich freue mich ___ das Geschenk.", ["auf", "über", "an"], 1, "برای خوشحالی از چیزی که هست، über می‌آید."),
],
quiz:[
  Q("Ich warte ___ den Bus.", ["auf", "über", "an"], 0, "warten همیشه با auf می‌آید."),
  Q("Ich denke ___ dich.", ["an", "auf", "über"], 0, "denken همیشه با an می‌آید."),
  Q("Ich freue mich ___. (به‌جای اسم، با ضمیر)", ["darauf", "darüber", "daran"], 0, "با ضمیر و حرف auf، darauf می‌آید."),
  Q("Ich denke ___. (به‌جای اسم، با ضمیر)", ["daran", "darauf", "darüber"], 0, "با ضمیر و حرف an، daran می‌آید."),
  Q("Ich freue mich ___ das Geschenk.", ["über", "auf", "an"], 0, "برای خوشحالی از چیزی که هست، über می‌آید."),
],
},
{
id:"b2-konnektoren2", level:"B2", de:"Fortgeschrittene Konnektoren", fa:"ربط‌دهنده‌های پیشرفته: je … desto و sowohl … als auch و weder … noch",
book:"Momente B2",
steps:[
  S("قدم ۱ — je … desto", "برای مقایسه متناسب: Je mehr ich lerne, desto besser werde ich. یعنی هرچه بیشتر یاد بگیرم، بهتر می‌شوم. هر دو بخش تفضیلی می‌گیرند."),
  S("قدم ۲ — sowohl … als auch", "یعنی هم … هم …: Ich spreche sowohl Deutsch als auch Englisch. یعنی هم آلمانی صحبت می‌کنم هم انگلیسی."),
  S("قدم ۳ — weder … noch و statt … zu", "weder … noch یعنی نه … نه …: Ich habe weder Zeit noch Geld. statt … zu یعنی به‌جای اینکه: Statt zu Hause zu bleiben, gehe ich spazieren."),
],
examples:[
  E("Je mehr ich lerne, desto besser werde ich.", "هرچه بیشتر یاد بگیرم، بهتر می‌شوم."),
  E("Ich spreche sowohl Deutsch als auch Englisch.", "هم آلمانی صحبت می‌کنم هم انگلیسی."),
  E("Ich habe weder Zeit noch Geld.", "نه وقت دارم نه پول."),
  E("Statt zu Hause zu bleiben, gehe ich spazieren.", "به‌جای اینکه در خانه بمانم، قدم می‌زنم."),
],
practice:[
  Q("Je mehr ich lerne, ___ besser werde ich.", ["desto", "sowohl", "weder"], 0, "با je، بخش دوم با desto می‌آید."),
  Q("Ich spreche ___ Deutsch als auch Englisch.", ["sowohl", "weder", "desto"], 0, "برای «هم … هم …»، sowohl … als auch می‌آید."),
],
quiz:[
  Q("Je mehr ich übe, ___ besser werde ich.", ["desto", "sowohl", "weder"], 0, "je … desto."),
  Q("Ich habe ___ Zeit noch Geld.", ["weder", "sowohl", "desto"], 0, "برای «نه … نه …»، weder … noch می‌آید."),
  Q("___ zu Hause zu bleiben, gehe ich spazieren.", ["Statt", "Sowohl", "Weder"], 0, "برای «به‌جای اینکه»، statt … zu می‌آید."),
  Q("Ich lerne ___ Deutsch als auch Englisch.", ["sowohl", "weder", "je"], 0, "sowohl … als auch."),
  Q("Je ___ ich lerne, desto besser werde ich.", ["mehr", "viel", "mehrer"], 0, "با je، تفضیلی mehr می‌آید."),
],
},
);
