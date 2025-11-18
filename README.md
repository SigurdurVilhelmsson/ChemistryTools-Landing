# Efnafræðiverkfæri með AI - Kvennaskólinn

Velkominn á lendingarsíðu AI-knúinna efnafræðiverkfæra fyrir Kvennaskólann í Reykjavík.

## 📋 Um verkefnið

Þessi vefur er aðgangspunktur fyrir AI-knúin kennslutól sem eru þróuð til að styðja við nám og kennslu í efnafræði. Verkfærin eru hönnuð sérstaklega fyrir nemendur og kennara við Kvennaskólann og nota Microsoft Azure OpenAI þjónustu.

## 🎨 Hönnunarkerfi

Vefurinn fylgir hönnunarkerfi Kvennaskólans:

- **Aðal litur:** #f36b22 (appelsínugulur)
- **Aukalit:** #c55113
- **Leturgerð:** Hind frá Google Fonts
- **Hönnunarstíll:** Hreinn, nútímalegur með miklu hvítu rými

## 🛠 Tæknilegur grunnur

- **React 19** með Vite
- **React Router v7** fyrir síðuskipti
- **CSS Modules** fyrir stílsetningu
- **Mock auðkenning** með RBAC (Role-Based Access Control)
- **Context API** fyrir auðkenningarstjórnun og hlutverk notenda

## 📁 Uppbygging verkefnis

```
src/
├── components/             # Endurnýtanlegir íhlutir
│   ├── Header.jsx         # Haus með leiðsögn
│   ├── Hero.jsx           # Helgarsíða
│   ├── ToolCard.jsx       # Spjald fyrir verkfæri
│   └── Footer.jsx         # Fótur
├── pages/                 # Síður
│   ├── Home.jsx           # Forsíða
│   ├── About.jsx          # Um verkfærin
│   ├── LabReports.jsx     # Skýrslugerð (staðgengill)
│   ├── AITutor.jsx        # AI kennari (staðgengill)
│   └── Admin.jsx          # Stjórnunarspjald (aðeins fyrir kennara)
├── contexts/              # React Context
│   └── UserRoleContext.jsx # Auðkenning og hlutverk
├── config/                # Stillingar
│   └── teachers.js        # Listi yfir kennara
├── App.jsx                # Aðalíhlutur
└── main.jsx               # Inngangspunktur
```

## 🚀 Uppsetning

### Skilyrði

- Node.js (útgáfa 18 eða nýrri)
- npm eða yarn

### Uppsetning á development umhverfi

1. Klóna verkefnið:
```bash
git clone <repository-url>
cd ChemistryTools-Landing
```

2. Setja upp dependencies:
```bash
npm install
```

3. Keyra þróunarþjón:
```bash
npm run dev
```

4. Opna vafra og fara á `http://localhost:5173`

### Byggja fyrir framleiðslu

```bash
npm run build
```

Byggðar skrár verða í `dist/` möppunni.

## 🔐 Auðkenning og hlutverk

Núverandi útgáfa notar **mock auðkenning** með RBAC (Role-Based Access Control):

### Hlutverk notenda

- **Kennarar:** Hafa fullan aðgang að öllum verkfærum og stjórnunarspjaldi
- **Nemendur:** Hafa aðgang að öllum námskeiðsverkfærum

### Kennaraskrá

Kennarar eru skilgreindir í `src/config/teachers.js`. Til að bæta við kennara:

```javascript
export const TEACHER_EMAILS = [
  'sigurdurev@kvenno.is',
  // Bættu við fleiri netföngum hér
];
```

### Tæknilegar upplýsingar

- Notendur skrá sig inn með @kvenno.is netfangi
- Hlutverk er ákvarðað út frá kennaraskrá
- Gögn eru geymd í localStorage
- UserRoleContext veitir aðgang að `isTeacher` og `role` upplýsingum
- Þetta verður skipt út fyrir Azure AD auðkenning í framtíðinni

## 📱 Responsive hönnun

Vefurinn er fullkomlega responsive með þremur breakpoints:

- **Farsími:** < 768px
- **Spjaldtölva:** 768px - 1024px
- **Tölva:** > 1024px

## 🧪 Tiltæk verkfæri

### 1. Aðstoð við skýrslugerð (Tiltækt)
AI-knúin endurgjöf fyrir efnafræðiskýrslur

### 2. Aðstoðarkennari í efnafræði (Væntanlegt)
Gagnvirkur AI aðstoðarkennari - kemur í janúar 2026

### 3. Framtíðarverkfæri (Í þróun)
Fleiri verkfæri í þróun

### 4. Stjórnunarspjald (Aðeins kennarar)
Kennarar hafa aðgang að stjórnunarspjaldi þar sem þeir geta:
- Bætt við og breytt tilraunum (í framtíðinni)
- Stjórnað aðgangi nemenda (í framtíðinni)
- Skoðað notkunartölur (í framtíðinni)
- Breytt stillingum (í framtíðinni)

## 🔒 Persónuvernd

- Engin gögn eru geymd
- Azure OpenAI uppfyllir GDPR staðla
- Aðeins @kvenno.is netföng hafa aðgang

## 📞 Tengiliður

Ef þú hefur spurningar eða rekst á vandamál:

- **Netfang:** efnafraeði@kvenno.is
- **Skóli:** Kvennaskólinn í Reykjavík

## 📝 License

© 2025 Kvennaskólinn í Reykjavík. Allur réttur áskilinn.

---

Þróað af efnafræðikennaranum við Kvennaskólann í Reykjavík.
