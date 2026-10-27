/* دویچلب (DeutschLab) — داده‌های نسخه اول
   نکته حقوقی: این فایل شامل متن یا فایل صوتی رسمی کتاب‌ها نیست.
   درس‌ها، واژه‌های پرکاربرد و خلاصه‌های گرامری به‌صورت آموزشی و
   مستقل نوشته شده‌اند تا مسیر کتاب مشخص باشد. فایل‌های دارای
   کپی‌رایت باید بعداً با مجوز ناشر اضافه شوند. */
const LEVELS = ["همه","A1","A2","B1","B2","C1"];

const BOOKS = [
{
  id:"menschen", name:"Menschen", fa:"منشن", publisher:"Hueber",
  desc:"محبوب‌ترین مسیر کلاس‌های آلمانی؛ مکالمه‌محور و قدم‌به‌قدم.",
  levels:[
    {level:"A1", title:"Menschen A1", lessons:[
      {de:"Begrüßung und Vorstellung", fa:"سلام و معرفی خود", grammar:"فعل sein و ضمیرهای شخصی: ich, du, er/sie"},
      {de:"Familie und Freunde", fa:"خانواده و دوستان", grammar:"صرف فعل‌های با قاعده در زمان حال"},
      {de:"Essen und Trinken", fa:"خوردن و نوشیدن", grammar:"حرف تعریف معین der / die / das"},
      {de:"Freizeit und Hobbys", fa:"اوقات فراغت و سرگرمی", grammar:"فعل‌های mögen و können"},
      {de:"Wohnen in der Stadt", fa:"زندگی در شهر", grammar:"حروف اضافه مکانی: in, an, bei"},
    ], vocab:[{de:"Hallo",fa:"سلام"},{de:"danke",fa:"ممنون"},{de:"die Familie",fa:"خانواده"},{de:"das Brot",fa:"نان"},{de:"wohnen",fa:"زندگی کردن"}]},
    {level:"A2", title:"Menschen A2", lessons:[
      {de:"Beruf und Alltag", fa:"شغل و زندگی روزمره", grammar:"زمان گذشته Perfekt با haben و sein"},
      {de:"Reisen und Urlaub", fa:"سفر و تعطیلات", grammar:"حروف اضافه زمانی و مکانی در حالت Akkusativ و Dativ"},
      {de:"Gesundheit und Körper", fa:"سلامتی و بدن", grammar:"افعال انعکاسی و دستورهای پزشکی ساده"},
      {de:"Medien und Kommunikation", fa:"رسانه و ارتباطات", grammar:"جملات ربطی با weil و dass"},
      {de:"Feste und Traditionen", fa:"جشن‌ها و سنت‌ها", grammar:"صفت‌های مقایسه‌ای: Komparativ"},
    ], vocab:[{de:"der Urlaub",fa:"تعطیلات"},{de:"reisen",fa:"سفر کردن"},{de:"krank",fa:"بیمار"},{de:"weil",fa:"زیرا"},{de:"besser",fa:"بهتر"}]},
    {level:"B1", title:"Menschen B1", lessons:[
      {de:"Meinung und Diskussion", fa:"نظر دادن و بحث کردن", grammar:"جملات ربطی با obwohl و trotzdem"},
      {de:"Arbeit und Bewerbung", fa:"کار و درخواست شغل", grammar:"مجهول Passiv در زمان حال"},
      {de:"Umwelt und Zukunft", fa:"محیط زیست و آینده", grammar:"زمان آینده Futur I"},
      {de:"Stadt und Land", fa:"شهر و روستا", grammar:"حالت Genitiv و توصیف دقیق‌تر"},
      {de:"Lernen und Ziele", fa:"یادگیری و هدف‌ها", grammar:"مصدر با zu و جملات هدف با um … zu"},
    ], vocab:[{de:"die Meinung",fa:"نظر"},{de:"die Bewerbung",fa:"درخواست شغل"},{de:"die Umwelt",fa:"محیط زیست"},{de:"das Ziel",fa:"هدف"},{de:"trotzdem",fa:"با این حال"}]},
  ]
},
{
  id:"starten", name:"Starten wir!", fa:"اشتارتن ویر", publisher:"Hueber",
  desc:"سری جدید و تصویری برای بزرگسالان؛ تمرکز روی مکالمه روزمره.",
  levels:[
    {level:"A1", title:"Starten wir! A1", lessons:[
      {de:"Hallo, ich bin …", fa:"سلام، من … هستم", grammar:"معرفی، ملیت و زبان‌ها"},
      {de:"Mein Tag", fa:"روز من", grammar:"افعال جداشدنی و ساعت"},
      {de:"Einkaufen", fa:"خرید کردن", grammar:"اعداد، قیمت و حالت Akkusativ"},
      {de:"Meine Wohnung", fa:"خانه من", grammar:"حروف اضافه مکانی و توصیف خانه"},
      {de:"Freunde treffen", fa:"دیدار با دوستان", grammar:"دعوت کردن و قرار گذاشتن"},
    ], vocab:[{de:"der Tag",fa:"روز"},{de:"kaufen",fa:"خریدن"},{de:"die Wohnung",fa:"آپارتمان"},{de:"treffen",fa:"ملاقات کردن"},{de:"die Uhr",fa:"ساعت"}]},
    {level:"A2", title:"Starten wir! A2", lessons:[
      {de:"Früher und heute", fa:"گذشته و امروز", grammar:"زمان گذشته Präteritum برای افعال پرکاربرد"},
      {de:"In der Stadt unterwegs", fa:"در شهر", grammar:"مسیر دادن و وسایل نقلیه"},
      {de:"Beruf und Pläne", fa:"شغل و برنامه‌ها", grammar:"آینده و قصدها با wollen و werden"},
      {de:"Essen in Deutschland", fa:"غذا در آلمان", grammar:"مقایسه و سلیقه غذایی"},
      {de:"Feiern mit Freunden", fa:"جشن با دوستان", grammar:"دعوت رسمی و غیررسمی"},
    ], vocab:[{de:"früher",fa:"قبلاً"},{de:"die Stadt",fa:"شهر"},{de:"der Beruf",fa:"شغل"},{de:"feiern",fa:"جشن گرفتن"},{de:"der Plan",fa:"برنامه"}]},
    {level:"B1", title:"Starten wir! B1", lessons:[
      {de:"Argumentieren", fa:"استدلال کردن", grammar:"ربط‌دهنده‌های بحث: einerseits … andererseits"},
      {de:"Arbeiten in Deutschland", fa:"کار در آلمان", grammar:"مجهول و گزارش تجربه کاری"},
      {de:"Nachhaltig leben", fa:"زندگی پایدار", grammar:"جملات شرطی با wenn"},
      {de:"Kultur und Medien", fa:"فرهنگ و رسانه", grammar:"نقل قول غیرمستقیم ساده"},
      {de:"Meine Zukunft", fa:"آینده من", grammar:"هدف‌گذاری و برنامه‌ریزی با Futur"},
    ], vocab:[{de:"argumentieren",fa:"استدلال کردن"},{de:"nachhaltig",fa:"پایدار"},{de:"die Kultur",fa:"فرهنگ"},{de:"die Zukunft",fa:"آینده"},{de:"wenn",fa:"اگر"}]},
  ]
},
{
  id:"momente", name:"Momente", fa:"مومنت", publisher:"Hueber",
  desc:"مسیر تصویری و مدرن با داستان‌های کوتاه و تمرین‌های تعاملی.",
  levels:[
    {level:"A1", title:"Momente A1", lessons:[
      {de:"Ankommen", fa:"رسیدن و شروع", grammar:"سلام، خداحافظی و اعداد ۱ تا ۱۰۰"},
      {de:"Menschen kennenlernen", fa:"آشنایی با آدم‌ها", grammar:"پرسش با W-Fragen"},
      {de:"Zu Hause", fa:"در خانه", grammar:"وسایل خانه و حرف تعریف"},
      {de:"Unterwegs", fa:"در راه", grammar:"مسیر و زمان"},
      {de:"Lecker essen", fa:"غذای خوشمزه", grammar:"سفارش در رستوران"},
    ], vocab:[{de:"ankommen",fa:"رسیدن"},{de:"kennenlernen",fa:"آشنا شدن"},{de:"zu Hause",fa:"در خانه"},{de:"unterwegs",fa:"در راه"},{de:"lecker",fa:"خوشمزه"}]},
    {level:"A2", title:"Momente A2", lessons:[
      {de:"Erinnerungen", fa:"خاطره‌ها", grammar:"Perfekt و خاطره گفتن"},
      {de:"Reisen", fa:"سفر", grammar:"برنامه سفر و رزرو"},
      {de:"Alltag und Termine", fa:"روزمره و قرارها", grammar:"زمان و ترتیب کارها"},
      {de:"Gesund bleiben", fa:"سالم ماندن", grammar:"توصیه با sollen"},
      {de:"Meine Stadt", fa:"شهر من", grammar:"توصیف مکان‌ها"},
    ], vocab:[{de:"die Erinnerung",fa:"خاطره"},{de:"der Termin",fa:"قرار"},{de:"gesund",fa:"سالم"},{de:"bleiben",fa:"ماندن"},{de:"empfehlen",fa:"پیشنهاد دادن"}]},
    {level:"B1", title:"Momente B1", lessons:[
      {de:"Standpunkte", fa:"دیدگاه‌ها", grammar:"نظر موافق و مخالف"},
      {de:"Arbeit und Leben", fa:"کار و زندگی", grammar:"تعادل کار و زندگی"},
      {de:"Digital leben", fa:"زندگی دیجیتال", grammar:"مزایا و معایب تکنولوژی"},
      {de:"Kultur erleben", fa:"تجربه فرهنگ", grammar:"توصیف رویدادها"},
      {de:"Ziele erreichen", fa:"رسیدن به هدف‌ها", grammar:"برنامه و انگیزه"},
    ], vocab:[{de:"der Standpunkt",fa:"دیدگاه"},{de:"digital",fa:"دیجیتال"},{de:"erleben",fa:"تجربه کردن"},{de:"erreichen",fa:"رسیدن به"},{de:"die Motivation",fa:"انگیزه"}]},
    {level:"B2", title:"Momente B2", lessons:[
      {de:"Debattieren", fa:"مناظره", grammar:"ساختار بحث رسمی"},
      {de:"Gesellschaft", fa:"جامعه", grammar:"موضوعات اجتماعی و Passiv پیشرفته"},
      {de:"Wissenschaft und Technik", fa:"علم و تکنولوژی", grammar:"جملات اسمی و تخصصی"},
      {de:"Karriere", fa:"مسیر شغلی", grammar:"ارائه و مذاکره"},
      {de:"Perspektiven", fa:"چشم‌اندازها", grammar:"Konjunktiv II برای پیشنهاد مؤدبانه"},
    ], vocab:[{de:"debattieren",fa:"مناظره کردن"},{de:"die Gesellschaft",fa:"جامعه"},{de:"die Wissenschaft",fa:"علم"},{de:"die Karriere",fa:"مسیر شغلی"},{de:"die Perspektive",fa:"چشم‌انداز"}]},
  ]
}
];

const PODCASTS = [
  {id:"p1", level:"A1", name:"Coffee Break German", episode:"فصل ۱: اولین قدم‌ها", minutes:18, desc:"شروع آرام آلمانی با توضیح انگلیسی؛ مناسب روز اول.", sample:"Hallo! Wie geht es dir? Ich lerne Deutsch."},
  {id:"p2", level:"A1", name:"Deutsch – warum nicht? (DW)", episode:"سری ۱: آندreas در آلمان", minutes:15, desc:"داستان صوتی آموزشی دویچه‌وله برای مبتدی‌ها.", sample:"Ich heiße Andreas. Ich wohne in Berlin."},
  {id:"p3", level:"A2", name:"Slow German", episode:"برلین و تاریخ آن", minutes:10, desc:"آلمانی شمرده و واضح؛ هر قسمت یک موضوع فرهنگی.", sample:"Berlin ist die Hauptstadt von Deutschland. Die Stadt hat eine lange Geschichte."},
  {id:"p4", level:"A2", name:"Coffee Break German", episode:"فصل ۲: سفر و روزمره", minutes:20, desc:"مکالمه‌های سفر، رستوران و خرید با تکرار.", sample:"Ich möchte ein Ticket nach München, bitte."},
  {id:"p5", level:"B1", name:"Easy German Podcast", episode:"زندگی روزمره در آلمان", minutes:25, desc:"گفت‌وگوی طبیعی دو مجری درباره زندگی واقعی.", sample:"In Deutschland trinken viele Menschen am Morgen einen Kaffee und lesen die Nachrichten."},
  {id:"p6", level:"B1", name:"Auf Deutsch gesagt", episode:"لهجه‌ها و اصطلاحات", minutes:22, desc:"اصطلاحات و تفاوت‌های گفتار روزمره.", sample:"Umgangssprache ist oft anders als die Sprache in einem Buch."},
  {id:"p7", level:"B2", name:"Langsam gesprochene Nachrichten (DW)", episode:"اخبار روز با سرعت آهسته", minutes:12, desc:"اخبار واقعی آلمان و جهان با سرعت مناسب زبان‌آموز.", sample:"Die Nachrichten berichten heute über Politik, Wetter und Sport in Deutschland."},
  {id:"p8", level:"B2", name:"Slow German", episode:"موضوعات پیشرفته فرهنگی", minutes:14, desc:"همان سبک آهسته، با واژه‌های سخت‌تر و موضوع عمیق‌تر.", sample:"Kultur ist nicht nur Kunst. Kultur ist auch, wie Menschen zusammen leben."},
  {id:"p9", level:"C1", name:"Nachrichten und Debatten", episode:"بحث روز آلمان", minutes:30, desc:"برای نزدیک شدن به سرعت بومی‌ها؛ گوش دادن فعال و یادداشت واژه.", sample:"In der Debatte geht es um die Frage, wie wir in Zukunft arbeiten und leben wollen."},
];

const STORIES = [
  {id:"s1", level:"A1", title:"Ein Tag in Berlin", fa:"یک روز در برلین", minutes:4,
   text:"Anna wohnt in Berlin. Am Morgen trinkt sie einen Kaffee. Dann fährt sie mit dem Bus zur Arbeit. Am Mittag isst sie ein Brot. Am Abend geht sie im Park spazieren. Berlin ist laut, aber schön.",
   translation:"آنا در برلین زندگی می‌کند. صبح قهوه می‌نوشد. بعد با اتوبوس سر کار می‌رود. ظهر نان می‌خورد. عصر در پارک قدم می‌زند. برلین شلوغ است، اما زیباست.",
   vocab:[{de:"der Morgen",fa:"صبح"},{de:"fahren",fa:"رفتن با وسیله"},{de:"spazieren gehen",fa:"قدم زدن"},{de:"laut",fa:"پرسروصدا"},{de:"schön",fa:"زیبا"}],
   question:"آنا عصر کجا می‌رود؟"},
  {id:"s2", level:"A2", title:"Der verlorene Schlüssel", fa:"کلید گمشده", minutes:6,
   text:"Lukas sucht seinen Schlüssel. Er sucht in der Jacke, in der Tasche und in der Küche. Er findet ihn nicht. Dann ruft er seine Freundin an. Sie lacht und sagt: Dein Schlüssel ist in deiner Hand! Lukas lacht auch. Manchmal ist die Lösung ganz einfach.",
   translation:"لوکاس دنبال کلیدش می‌گردد. در کاپشن، در کیف و در آشپزخانه می‌گردد. پیدایش نمی‌کند. بعد به دوستش زنگ می‌زند. او می‌خندد و می‌گوید: کلیدت در دست خودت است! لوکاس هم می‌خندد. گاهی راه‌حل خیلی ساده است.",
   vocab:[{de:"suchen",fa:"جستجو کردن"},{de:"die Tasche",fa:"کیف"},{de:"finden",fa:"پیدا کردن"},{de:"anrufen",fa:"تلفن زدن"},{de:"die Lösung",fa:"راه‌حل"}],
   question:"کلید لوکاس در نهایت کجا بود؟"},
  {id:"s3", level:"B1", title:"Ein neues Leben in Hamburg", fa:"یک زندگی تازه در هامبورگ", minutes:8,
   text:"Sara zieht von einer kleinen Stadt nach Hamburg. Am Anfang ist alles neu: die Wohnung, die Arbeit und die Menschen. Sie lernt Deutsch jeden Tag und spricht mit ihren Nachbarn. Nach drei Monaten fühlt sie sich zu Hause. Sie sagt: Ein neues Leben braucht Mut, aber es lohnt sich.",
   translation:"سارا از شهری کوچک به هامبورگ نقل مکان می‌کند. اول همه‌چیز تازه است: خانه، کار و آدم‌ها. او هر روز آلمانی یاد می‌گیرد و با همسایه‌ها حرف می‌زند. بعد از سه ماه احساس می‌کند در خانه است. می‌گوید: زندگی تازه شجاعت می‌خواهد، اما ارزشش را دارد.",
   vocab:[{de:"ziehen",fa:"نقل مکان کردن"},{de:"der Nachbar",fa:"همسایه"},{de:"der Mut",fa:"شجاعت"},{de:"sich lohnen",fa:"ارزش داشتن"},{de:"am Anfang",fa:"در آغاز"}],
   question:"به نظر سارا، زندگی تازه به چه چیزی نیاز دارد؟"},
  {id:"s4", level:"B2", title:"Die Entscheidung", fa:"تصمیم", minutes:9,
   text:"Jonas hat zwei Angebote: eine sichere Stelle in seiner Heimatstadt oder ein riskantes Projekt in Wien. Er schreibt eine Liste mit Vorteilen und Nachteilen. Seine Freunde raten ihm zu Wien, aber seine Familie ist vorsichtig. Am Ende entscheidet er sich für Wien, weil er wachsen will. Eine Entscheidung ist nicht nur Logik, sie ist auch Gefühl.",
   translation:"یوناس دو پیشنهاد دارد: یک شغل امن در شهر خودش یا یک پروژه پرریسک در وین. فهرستی از مزایا و معایب می‌نویسد. دوستانش وین را پیشنهاد می‌کنند، اما خانواده‌اش محتاط است. در پایان وین را انتخاب می‌کند چون می‌خواهد رشد کند. تصمیم فقط منطق نیست، احساس هم هست.",
   vocab:[{de:"das Angebot",fa:"پیشنهاد"},{de:"sicher",fa:"امن"},{de:"riskant",fa:"پرریسک"},{de:"der Vorteil",fa:"مزیت"},{de:"wachsen",fa:"رشد کردن"}],
   question:"چرا یوناس در پایان وین را انتخاب می‌کند؟"},
  {id:"s5", level:"C1", title:"Zwischen zwei Welten", fa:"میان دو جهان", minutes:10,
   text:"Lena lebt seit zehn Jahren in Deutschland, aber ihre Kindheit war in einem anderen Land. Manchmal fühlt sie sich hier zu Hause, manchmal fremd. Sie versteht beide Kulturen, und genau das ist ihre Stärke. Identität, denkt sie, ist kein Ort. Identität ist eine Geschichte, die man selbst schreibt.",
   translation:"لنا ده سال است در آلمان زندگی می‌کند، اما کودکی‌اش در کشوری دیگر بوده است. گاهی اینجا احساس خانه بودن می‌کند، گاهی غریبگی. هر دو فرهنگ را می‌فهمد و دقیقاً همین نقطه قوت اوست. هویت، به نظر او، یک مکان نیست. هویت داستانی است که خودت می‌نویسی.",
   vocab:[{de:"die Kindheit",fa:"کودکی"},{de:"fremd",fa:"غریب"},{de:"die Stärke",fa:"نقطه قوت"},{de:"die Identität",fa:"هویت"},{de:"die Geschichte",fa:"داستان"}],
   question:"به نظر لنا هویت چیست؟"},
];
