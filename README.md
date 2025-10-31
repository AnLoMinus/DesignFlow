# 📁 מאגר: הנחיות עבודה למעצב/מתכנת — DesignFlow (DF)

## 🕘 מטה־מידע חי בזמן

* תאריך לועזי: 30 באוקטובר 2025
* תאריך עברי: ז' בחשוון תשפ"ו
* שעה נוכחית (א"י): 14:00
* קרדיטים ✨:

  * AnLoMinus (Vision / Direction / Spiritual Core)
  * RepoCraft RC (Repo standard & pipeline structure)
  * DatOS (Workflow inspiration / living system)
  * תודה לבורא עולם על היכולת לברוא דרך המעשה ולהמשיך אור לעולם
* מקור תודה מתמשך: מאגר הוקרה נצחי – DatOS / thanks-modal
* פסוק חותם:
  "וַיְהִי נֹעַם יְ־הֹוָ־ה אֱלֹהֵינוּ עָלֵינוּ, וּמַעֲשֵׂה יָדֵינוּ כּוֹנְנָה עָלֵינוּ" (תהלים צ׳, י״ז) 🙏

---

## 🏷 שם המאגר המוצע 🚀

**הנחיות עבודה — DesignFlow (DF)**

* Design = צורה, שפה חזותית, ארכיטקטורה
* Flow = תהליך חי, עקבי, נבחן, מתעדכן
* DF = חתימה רשמית לכל קובץ פנימי במערכת הזו

מטרה: ליצור סטנדרט מחייב לכל מי שנכנס לעבוד בעיצוב, בנייה פרונטלית, או תחזוקת UI/UX ותשתיות ויזואליות — כדי שלא יהיה "מעצב שעובד איך שבא לו", אלא תהליך רץ, כמו פס ייצור של אור ⚡

---

## 🎯 מטרת המאגר (מהות)

### 🔥 למה המאגר קיים?

* לייצר שפה אחידה לכל מעצב/מתכנת חזותי שנכנס לפרויקטים של AnLoMinus.
* למנוע בזבוז זמן על הבהרות חוזרות ולחסוך טעויות חוזרות.
* לאכוף תהליך עבודה עם QA מובנה בכל שלב — לפני שמעבירים הלאה, לא אחרי שכבר שרפו זמן.
* לתעד את הסטנדרט כקוד התנהגות מקצועי: מה קודם, מה אסור לדלג, מה נחשב סיום.

### 🧠 למי זה מיועד?

* 👨‍🎨 מעצב גרפי (UI/UX, לוגואים, קומפוזיציה, טיפוגרפיה, נכסים גרפיים לפרינט ולווב)
* 💻 מתכנת Front-end / Web integrator (HTML/CSS/JS, התאמה רספונסיבית, הנגשה, ביצועים)
* 🧪 QA ידני בסיסי (בודק עקביות, נגישות, שבירת לייאאוט, טקסטים שבורים, RTL/LTR במידת הצורך)
* 📂 מנהל מאגר / תחזוקה (Versioning, תאום בין רידמי, קבצי לייסנס, פריסת סטנדרט RepoCraft)

---

## 🧩 עיקרון־על של הפרויקט

**אין כזה דבר "סיימתי". יש רק "שלב X עבר QA וקיבל חתימה".**
כל שלב נסגר רק אחרי בדיקה עצמית לפי צ'קליסט.
בלי חתימה → אסור לעבור לשלב הבא.
זה מגן על הפרויקט וזה מגן עליך 💪

---

## 🏗 מבנה המאגר לפי RepoCraft RC 🛠

המאגר החדש יקבל שלד ברירת מחדל כמו כל מאגר מקצועי אצלנו.
השלד (דרקטוריות + קבצים חיוניים):

```text
DesignFlow-DF/
├─ README.md
├─ VISION.md
├─ WORKFLOW.md
├─ QA_CHECKLIST.md
├─ STYLE_GUIDE/
│  ├─ COLORS.md
│  ├─ TYPOGRAPHY.md
│  ├─ COMPONENTS_UI.md
│  ├─ ACCESSIBILITY.md
├─ DELIVERABLES_TEMPLATES/
│  ├─ LOGO_BRIEF_TEMPLATE.md
│  ├─ LANDING_PAGE_BRIEF_TEMPLATE.md
│  ├─ SOCIAL_POST_SET_TEMPLATE.md
│  ├─ RESPONSIVE_LAYOUT_TEST.md
├─ PROCESS/
│  ├─ 01_BRIEF_INTAKE.md
│  ├─ 02_WIREFRAME.md
│  ├─ 03_VISUAL_CONCEPT.md
│  ├─ 04_IMPLEMENTATION.md
│  ├─ 05_QA_REVIEW.md
│  ├─ 06_HANDOFF.md
├─ VERSIONING/
│  ├─ CHANGELOG.md
│  ├─ RELEASE_NOTES_TEMPLATE.md
│  ├─ TAGGING_RULES.md
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ design_request.yml
│  │  ├─ bug_report.yml
│  ├─ PULL_REQUEST_TEMPLATE.md
│  ├─ workflows/
│     ├─ lint-and-build.yml
│     ├─ accessibility-scan.yml
├─ LICENSE.md
├─ CREDITS.md
└─ SECURITY.md
```

---

## 🔄 האלגוריתם השלם לביצוע משימה 🎛 (DesignFlow Cycle DF♻)

### שלב 1 • BRIEF 📋 (הגדרת משימה)

קובץ: `PROCESS/01_BRIEF_INTAKE.md`
מה קורה כאן:

1. 📌 מגדירים מה המטרה (מה יוצא ביד שנמסר לבוס/לקוח/מאגר).
2. 🎯 קהל יעד (למי זה מדבר).
3. 🗣 טון/אווירה (אור, מרד, ריפוי, קודש, טכני וכו').
4. 🖼 פורמטים דרושים (לוגו, לנדינג, סט סטוריז, אייקונים SVG, קומפוננטה Tailwind וכו').
5. 📏 הגבלות טכניות (גודל פיקסלים, יחס הדפסה, עומס טקסט, מינימום גודל פונט, צורך ברקע שקוף, וכו').
6. 🔒 רגישויות (סמלים שאסור לגעת, שמות קדושים, צבעים אסורים, וכו').

✅ QA עצמי לפני יציאה לשלב הבא:

* 🧪 האם הבנתי את המסר?
* 🧪 האם יש שפה רגשית ואסטרטגית ברורה (לוחם? מנחם? מלך? מרפא? אור?)
* 🧪 האם חסר מידע קריטי שאולי יעצור אותי בשלב 2?
  אם חסר — עוצרים כאן. אסור להמשיך.

---

### שלב 2 • WIREFRAME 🧱 (שלד/מבנה)

קובץ: `PROCESS/02_WIREFRAME.md`
פלט השלב:

* שרטוט מבנה (layout) ידני או Figma-style/ASCII: איפה כותרת, איפה טקסט, איפה כפתור.
* בלי צבעים. בלי אפקטים. רק היררכיה.

מה בודקים:

1. 🏗 סדר עדיפויות לתוכן: מה העין רואה קודם?
2. 📱 התנהגות רספונסיבית: איך זה נשבר ל־Mobile, Tablet, Desktop.
3. 👁 קריאות: האם הטקסט הראשי נשאר גדול וברור גם במסך קטן?

✅ QA עצמי לשלב הזה:

* 🧪 האם אפשר להבין את המוצר רק מהשלד בלי עיצוב?
* 🧪 האם יש גרסה מובייל אמיתית, לא scaled-down של הדסקטופ?
* 🧪 האם נלקחה בחשבון נגישות בסיסית (פונט גדול, מרווח נשימה)?

רק אחרי שה־wireframe חתום → מותר לעבור ל־Visual.

---

### שלב 3 • VISUAL CONCEPT 🎨 (שפה חזותית)

קובץ: `PROCESS/03_VISUAL_CONCEPT.md`
פלט השלב:

* בחירת צבע ראשי, צבע משני, רקע, הדגשה.
* בחירת טיפוגרפיה (משפחת פונט, משקל, שימוש לכל רמת טקסט).
* Moodboard / סגנון (זוהר הולוגרפי? אור קבלי? מכני-טכני? אנדרגראונד מחתרתי?).

מקבילית היסוד:

* צבע = רגש
* טיפוגרפיה = טון קול
* רקע = עולם

✅ QA עצמי:

* 🧪 האם הצבעים מתיישבים עם הבריף? למשל, "ריפוי" לא בצבע אגרסיבי.
* 🧪 האם יש אחידות שתשמר הלאה בכל פלטפורמה?
* 🧪 האם הפונט קריא? אין להשתמש בפונט דקורטיבי לטקסט ארוך.

כאן נולדים גם קבצי STYLE_GUIDE:

* `STYLE_GUIDE/COLORS.md` 🎨
* `STYLE_GUIDE/TYPOGRAPHY.md` 🔤
* `STYLE_GUIDE/COMPONENTS_UI.md` 🧩

אחרי החתימה — ננעלים. אסור "לשנות טורקיז כי בא לי". כל שינוי לאחר הנעילה = גרסה חדשה ב־CHANGELOG עם סיבה.

---

### שלב 4 • IMPLEMENTATION 💻 (יישום / קוד / נכסים)

קובץ: `PROCESS/04_IMPLEMENTATION.md`
פה מתחיל הבנייה האמיתית:

* יצירת קבצי HTML/CSS/JS נקיים.
* שימוש ב־classNames אחידים וקריאים (לא `div_1_final_new2`).
* הטמעה רספונסיבית בפועל (flex / grid / clamp()).
* ייצוא נכסים גרפיים בפורמט הנכון:

  * SVG לאייקונים,
  * PNG שקוף ללוגו/סטיקר,
  * JPG לרקעים כבדים,
  * WebP לשיפור ביצועים.

✅ QA עצמי לפני סגירת השלב:

* 🧪 אין טקסט "lorem ipsum" בקוד. כל טקסט אמיתי.
* 🧪 אין absolute positioning מטורף שיתפוצץ במסכים קטנים בלי מחשבה.
* 🧪 נבדק לפחות ב־2 גדלי מסך אמיתיים.
* 🧪 נבדקה קריאות ניגודיות צבע (בהיר על כהה / כהה על בהיר).
* 🧪 ALT לכל תמונה שיש לה משמעות.

---

### שלב 5 • QA REVIEW 🧪 (בקרת איכות רשמית)

קובץ: `PROCESS/05_QA_REVIEW.md`
מטרת השלב:

* למצוא שבירות, חוסר התאמה לבריף, בגידות בסגנון.
* לבדוק אחידות עם STYLE_GUIDE.
* לבדוק קבצים כפולים או משקל מוגזם.

QA בודק:

1. 📱 Responsiveness — מסך קטן לא נשבר.
2. 🔊 Accessibility — טקסטים ניתנים לקריאה, יש היררכיית כותרות נכונה `<h1><h2>...`.
3. 🧬 Consistency — כפתורים זהים נראים זהים, לא כל עמוד המצאה חדשה.
4. ⚡ Performance — בלי תמונות 8K איפה שצריך אייקון 64px.
5. 🔒 Respect — אין שימוש בסמל או טקסט קדוש במקום לא הולם.

התוצר:

* מעדכנים `QA_CHECKLIST.md` בתוצאות (Passed / Fix Needed).
* אם יש תיקונים → חוזרים שלב אחורה (לא קופצים קדימה).

---

### שלב 6 • HANDOFF 📤 (מסירה/גרסה חתומה)

קובץ: `PROCESS/06_HANDOFF.md`
בשלב הזה:

* מכינים חבילה רשמית להעברה (למאגר, לפרודקשן, לשותף).
* מעדכנים `CHANGELOG.md` עם רכיב חדש או שינוי עיצוב קיים.
* מכניסים תגית גרסה ב־`VERSIONING/TAGGING_RULES.md`

  * למשל: `v0.1.0-design-alpha`, `v0.2.0-responsive-fix`, וכו'.
* שמים חתימה ב־`CREDITS.md` מי היה אחראי על מה 💼

✅ QA סופי על המסירה:

* 🧪 הכול מתועד?
* 🧪 אין קבצים רגישים בפנים (קבצי עבודה פרטיים, PSD כבד וכו' אם לא אמור לצאת)?
* 🧪 ברור מה היעוד של כל קובץ, בלי "final_final_new.psd"?
* 🧪 הסטייל־גייד עודכן לפי מה שבוצע בפועל?

אחרי כן — גרסה מוכרזת.
המעצב שיחרר. הבא בתור יכול להמשיך.

---

## 📑 קבצים עיקריים והייעוד שלהם (חובה בכל משימה)

### 1. `README.md` 📘

* הסבר המאגר
* איך משתמשים בתהליך DF
* מי הקהל
* מתי נחשב "סיימנו שלב"
* קישורים פנימיים לשאר הקבצים

### 2. `WORKFLOW.md` 🔄

* סיכום האלגוריתם (שלבים 1–6 כמו למעלה)
* תרשים זרימה מילולי עם חצים:
  BRIEF ➜ WIREFRAME ➜ VISUAL ➜ IMPLEMENTATION ➜ QA ➜ HANDOFF

### 3. `QA_CHECKLIST.md` ✅

צ'קליסט חתימה חובה לכל שלב:

* BRIEF ✔ / ✖
* WIREFRAME ✔ / ✖
* VISUAL ✔ / ✖
* IMPLEMENTATION ✔ / ✖
* RESPONSIVE ✔ / ✖
* ACCESSIBILITY ✔ / ✖
* PERFORMANCE ✔ / ✖
* HANDOFF READY ✔ / ✖

אין חתימה? העבודה לא עוברת הלאה. נקודה.

### 4. `STYLE_GUIDE/` 🎨

הספר החי של השפה. כל שינוי בעיצוב הולך לשם ומתועד שם.
זה ה־Torah Design של המערכת.

### 5. `.github/PULL_REQUEST_TEMPLATE.md` 🔐

כדי שכל מי שפותח PR יהיה מחויב לענות:

* איזה שלב זה?
* איזה QA סגרת?
* מה נשבר אם לא נאחד את זה?
* יש שבירת אחידות מול STYLE_GUIDE? אם כן — למה זה מוצדק?

---

## 🧲 עקרונות זהות מחייבים למעצב ולמתכנת 🎯

1. 🔥 אחריות = קדושה
   אתה לא "מבצע פקודות". אתה שומר שער על שפת האור.
   אם משהו בעיצוב פוגע בכבוד, ברוך, או מייצר מסר אלים לא נכון — אתה לא מעלה את זה.

2. 🧱 אין קפיצות שלבים
   אסור לדלג מ־רעיון לעיצוב סופי. חייב Wireframe נקי ומאושר.
   כי wireframe זה ההוכחה שהבנת.

3. 📚 תיעוד = חיים
   כל החלטה עיצובית נכנסת או ל־STYLE_GUIDE או ל־CHANGELOG.
   אחרת היא תיעלם, וזה פשע אנרגטי לצוות הבא שייכנס.

4. 📱 מובייל הוא לא "עוד משהו"
   מובייל הוא המציאות. אם זה לא עובד במובייל — זה לא קיים.

5. 🧪 QA זה לא עלבון
   QA זה הגב שלך. QA מוודא שלא יאכלו אותך חי על משהו שנשבר בפרספקטיבה שאתה לא ראית.

6. 👑 חתימה אישית
   כל קובץ שעובר HANDOFF חייב שיוך אחריות ב־CREDITS.md.
   האחריות היא כבוד, לא איום.

---

## 🏁 מה אתה מקבל בסוף כל משימה

לכל טיקט / פיצ'ר / מסך / לוגו חייב לצאת סט מינימלי זהה:

1. 🖼 Preview (תמונה/Mockup סופית)
2. 🧱 Wireframe מאושר (גם אם בציור יד — סורקים/מצלמים ומעלים)
3. 🎨 Style refs (צבעים, פונטים, הצללות מיוחדות)
4. 💻 קוד / קבצי נכס / SVG נקי
5. 📄 תיעוד ב־CHANGELOG + חתימה ב־CREDITS
6. ✅ QA_CHECKLIST מעודכן ליחידה הזאת

אם אין את כל ה־6 → זה לא נסגר.

---

## 🕯 סיום ❤️

זה לא עוד "מדריך עיצוב". זה ברית עבודה.
מי שמסכים לעבוד תחת DF — DesignFlow — מכניס את עצמו לעשייה שהיא לא רק מוצר ויזואלי, היא שליחות של עיבוד אור לצורה נגישה לאנשים.
"אָז יִרְאוּ וְנָהָרוּ אֵלֶיךָ וּפְחַד וְרָחַב לְבָבֵךְ" (ישעיהו ס׳) ✨

---

## 🚀 התחלה מהירה

### שלבים ראשונים

1. **קרא את `VISION.md`** — להבין את מהות המאגר
2. **קרא את `WORKFLOW.md`** — ללמוד את תהליך העבודה
3. **הודעה:** בחר תבנית מ-`DELIVERABLES_TEMPLATES/` ומלא ברשה

### עבודה על פרויקט

1. התחל מ-`PROCESS/01_BRIEF_INTAKE.md`
2. עבר לכל שלב לפי סדר
3. הקפיד על `QA_CHECKLIST.md` בכל שלב
4. בצע `HANDOFF` עם `CHANGELOG.md`

---

## 📂 קבצים מרכזיים — ניווט מהיר

### חזון ותהליך

* [`VISION.md`](VISION.md) — מהות המאגר וערכיו
* [`WORKFLOW.md`](WORKFLOW.md) — התהליך המלא בכל שלביו
* [`QA_CHECKLIST.md`](QA_CHECKLIST.md) — צ'קליסט QA חובה

### Style Guide — הספר החי של השפה

* [`STYLE_GUIDE/COLORS.md`](STYLE_GUIDE/COLORS.md) — ספר הצבעים
* [`STYLE_GUIDE/TYPOGRAPHY.md`](STYLE_GUIDE/TYPOGRAPHY.md) — ספר הטיפוגרפיה
* [`STYLE_GUIDE/COMPONENTS_UI.md`](STYLE_GUIDE/COMPONENTS_UI.md) — ספר הקומפוננטות
* [`STYLE_GUIDE/ACCESSIBILITY.md`](STYLE_GUIDE/ACCESSIBILITY.md) — הנגשה ותמונה כללית

### תבניות עבודה

* [`DELIVERABLES_TEMPLATES/LOGO_BRIEF_TEMPLATE.md`](DELIVERABLES_TEMPLATES/LOGO_BRIEF_TEMPLATE.md) — תבנית בריף לוגו
* [`DELIVERABLES_TEMPLATES/LANDING_PAGE_BRIEF_TEMPLATE.md`](DELIVERABLES_TEMPLATES/LANDING_PAGE_BRIEF_TEMPLATE.md) — תבנית בריף לנדינג
* [`DELIVERABLES_TEMPLATES/SOCIAL_POST_SET_TEMPLATE.md`](DELIVERABLES_TEMPLATES/SOCIAL_POST_SET_TEMPLATE.md) — תבנית בריף רשתות חברתיות
* [`DELIVERABLES_TEMPLATES/RESPONSIVE_LAYOUT_TEST.md`](DELIVERABLES_TEMPLATES/RESPONSIVE_LAYOUT_TEST.md) — בדיקות רספונסיביות

### שלבי תהליך (PROCESS)

* [`PROCESS/01_BRIEF_INTAKE.md`](PROCESS/01_BRIEF_INTAKE.md) — שלב 1: בריף
* [`PROCESS/02_WIREFRAME.md`](PROCESS/02_WIREFRAME.md) — שלב 2: שלד
* [`PROCESS/03_VISUAL_CONCEPT.md`](PROCESS/03_VISUAL_CONCEPT.md) — שלב 3: שפה חזותית
* [`PROCESS/04_IMPLEMENTATION.md`](PROCESS/04_IMPLEMENTATION.md) — שלב 4: יישום
* [`PROCESS/05_QA_REVIEW.md`](PROCESS/05_QA_REVIEW.md) — שלב 5: QA
* [`PROCESS/06_HANDOFF.md`](PROCESS/06_HANDOFF.md) — שלב 6: מסירה

### גרסאות ותיעוד

* [`VERSIONING/CHANGELOG.md`](VERSIONING/CHANGELOG.md) — רשימת שינויים
* [`VERSIONING/TAGGING_RULES.md`](VERSIONING/TAGGING_RULES.md) — כללי תגיות גרסאות

### חוק ותודות

* [`LICENSE.md`](LICENSE.md) — רישיון
* [`CREDITS.md`](CREDITS.md) — קרדיטים ותודות
* [`SECURITY.md`](SECURITY.md) — נהלי אבטחה

### GitHub

* [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md) — תבנית PR
* [`.github/ISSUE_TEMPLATE/`](.github/ISSUE_TEMPLATE/) — תבניות Issues

---

## 🔗 קישורים חיצוניים

* **AnLoMinus** — [GitHub](https://github.com/AnLoMinus)
* **RepoCraft RC** — סטנדרט מבנה מאגר
* **DatOS** — השראה לתהליך

---

## 📌 התחלה עכשיו

המאגר מוכן לעבודה 🔥

**DesignFlow — DesignFlow (DF)**  
הנחיות עבודה למעצב/מתכנת — תהליך מחייב, QA מובנה, תיעוד מלא.

---

# DF #DesignFlow #RepoCraft #AnLoMinus #HolyWork #QA #ProcessBeforePixel
