# 📤 שלב 6 • HANDOFF (מסירה/גרסה חתומה)

## מה קורה כאן?

בשלב האחרון מכינים חבילה רשמית למסירה, וכל העבודה מקבלת גרסה.

**זה לא "סיימתי" — זה "שלX עבר QA וקיבל חתימה".**

---

## מדוע שלב זה קריטי?

1. **מגדיר גרסה** — ברור מה יצא ובאיזה גרסה
2. **מתעד עקביות** — מי עשה מה ומתי
3. **סוגר** — התחלה נקייה למי שבא אחר כך
4. **מגן על פרטים** — מונע עמעום

---

## מה צריך לעשות?

### 1. חבילת מסירה רשמית 📦

**מה נכלל?**
- [ ] כל קבצי הקוד/נכסים
- [ ] Preview / Mockup
- [ ] Wireframe מאושר (אם רלוונטי)
- [ ] STYLE_GUIDE מעודכן

**איך מסדרים?**
- כל קובץ עם שם ברור (לא `final_final_new.psd`)
- תיקיות מאורגנות
- README קצר לגרסה

---

### 2. עדכון CHANGELOG 📝

מתעד ב-`VERSIONING/CHANGELOG.md`:

```markdown
## [v0.2.0] - 2025-10-30
### Added
- Landing page לAnLoMinus
- פלטת צבעים חדשה (כחול שמיים + לבן)

### Changed
- עדכון לוגו (SVG מותקן)

### Fixed
- Responsive layout ל-Mobile
```

---

### 3. תגית גרסה 🏷

מתעד ב-`VERSIONING/TAGGING_RULES.md`:

**פורמט:** `v[major].[minor].[patch]-[description]`

**דוגמאות:**
- `v0.1.0-design-alpha`
- `v0.2.0-responsive-fix`
- `v1.0.0-launch-ready`

**Git:**
```bash
git tag v0.2.0
git push origin v0.2.0
```

---

### 4. חתימה ב-CREDITS 💼

מתעד ב-`CREDITS.md`:

```markdown
## v0.2.0 - Landing Page AnLoMinus
* Designer: [שם]
* QA: [שם]
* Date: 2025-10-30
```

---

## QA סופי על המסירה

- [ ] 🧪 הכול מתועד?
- [ ] 🧪 אין קבצים רגישים (PSD כבדים וכו' אם לא אמור לצאת)?
- [ ] 🧪 שם ברור לכל קובץ?
- [ ] 🧪 STYLE_GUIDE תואם למציאות?
- [ ] 🧪 CHANGELOG מעודכן?
- [ ] 🧪 תגית גרסה נוספה?
- [ ] 🧪 CREDITS מעודכן?

---

## הכנת Commit Message

**פורמט מומלץ:**

```bash
git commit -m "feat: Landing page AnLoMinus (v0.2.0)"
```

**סוגי commits:**
- `feat:` — פיצ'ר חדש
- `fix:` — תיקון באג
- `style:` — שינוי עיצוב ללא שינוי פונקציונלי
- `refactor:` — שינוי קוד ללא שינוי פונקציונלי
- `docs:` — שינוי תיעוד

---

## מעבר להגדרה

**אחרי כל הבדיקות PASSED:**  
👉 הגרסה מוכרזת — המעצב השתחרר

**הבא בתור יכול להמשיך בפרויקט.**

---

## אזהרות

- 🚫 אין דחיסה על נושאים — HANDOFF לא קופץ
- 🚫 אין תעדוף "סיימתי" על תיעוד
- 🚫 אין דילוג על ניסוח

**תיעוד = חיים. ללא זה המידע נעלם.**

---

**לכל העבודה:** `WORKFLOW.md` 🔄  
**הצ'קליסט:** `QA_CHECKLIST.md` ✅  
**תיעוד גרסאות:** `VERSIONING/CHANGELOG.md` 📝  
**זהויות:** `VERSIONING/TAGGING_RULES.md` 🏷

#DF #Handoff #Stage6 #ProcessBeforePixel

