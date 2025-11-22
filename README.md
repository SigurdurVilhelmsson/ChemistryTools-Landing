# Kvenno Efnafræði - Aðalsíða og miðstöð

Aðalsíða og leiðarkerfi fyrir AI-knúin efnafræðiverkfæri við Kvennaskólann í Reykjavík.

## 📋 Um verkefnið

Þetta er aðgangspunktur kvenno.app - vefsíða sem tengir saman gagnvirk kennslutól í efnafræði. Verkfærin eru skipulögð eftir áföngum og hönnuð fyrir nemendur og kennara við Kvennaskólann í Reykjavík.

### Arkitektúr

Verkefnið notar **áfanga-miðaða uppbyggingu** þar sem hvert ár og námsleið hefur sína eigin miðstöð:

```
kvenno.app/
├── /                    (Aðalsíða - þetta verkefni)
├── /1-ar/              (Miðstöð 1. árs)
├── /2-ar/              (Miðstöð 2. árs)
├── /3-ar/              (Miðstöð 3. árs)
├── /val/               (Miðstöð valgerninga)
└── /f-bekkir/          (Miðstöð félags- og hugvísindabrautar)
```

Hvert áfangasvæði inniheldur tengla á verkfæri sem eru viðeigandi fyrir það ár.

## 🏗 Uppbygging verkefnis

### Skráarskipan

```
ChemistryTools-Landing/
├── index.html              # Aðalsíða með leiðsögn á áfanga
├── 1-ar/
│   └── index.html         # 1. árs miðstöð
├── 2-ar/
│   └── index.html         # 2. árs miðstöð
├── 3-ar/
│   └── index.html         # 3. árs miðstöð
├── val/
│   └── index.html         # Valgreinar miðstöð
├── f-bekkir/
│   └── index.html         # F-bekkir miðstöð
├── KVENNO-STRUCTURE.md    # Heildaruppbygging og hönnunarkerfi (MIKILVÆGT)
├── CLAUDE.md              # Þróunarleiðbeiningar fyrir AI aðstoð
├── DEPLOYMENT.md          # Leiðbeiningar um uppsetningu
├── README.md              # Þessi skrá
└── media/                 # Favicon og mynd efni
```

### Tæknilegur grunnur

- **Uppbygging:** Statískar HTML síður
- **Stílar:** Innbyggðir CSS-stílar í hverri síðu
- **Hönnun:** Samræmt hönnunarkerfi á öllum síðum
- **Deployment:** Einfaldar statískar skrár, engin build skref nauðsynleg

## 🎨 Hönnunarkerfi

Allar síður fylgja samræmdu hönnunarkerfi sem skilgreint er í `KVENNO-STRUCTURE.md`:

### Litir
- **Aðallitur:** `#f36b22` (appelsínugulur - vörumerki Kvennaskólans)
- **Bakgrunnur:** Hvítur eða ljósgrár (`#f5f5f5`)
- **Texti:** Dökk grá/svart (`#333333`)

### Íhlutir

#### Haus (Header)
Allir síður innihalda samræmdan haus með:
- Merki/nafn síðu: "Kvenno Efnafræði" (tengist á `/`)
- Hægri hnappar: "Kennari" og "Upplýsingar"
- Sticky staðsetning
- 2px botn border í appelsínugulu

#### Brauðmylsnuslóð (Breadcrumbs)
Allar undirsíður sýna staðsetningu:
```
Heim > 1. ár
Heim > 2. ár > Lab Reports
```

#### Hnappar og spjöld
- Border: `2px solid #f36b22`
- Border radius: `8px`
- Hover: Fylling með appelsínugulu, hvítur texti
- Smooth umskipti (transition)

## 🚀 Uppsetning og deployment

### Þróun

Engin build skref eru nauðsynleg. Opnaðu einfaldlega HTML skrárnar í vafra:

```bash
# Með einfaldum HTTP þjón (ef þú vilt prófa leiðsögnina)
python3 -m http.server 8000
# Farðu á http://localhost:8000
```

### Deployment á framleiðsluþjón

Sjá nákvæmar leiðbeiningar í `DEPLOYMENT.md`

```bash
# Grunnferli: Afritaðu skrárnar beint
scp -r * siggi@server:/tmp/landing-deploy/
ssh siggi@server
sudo cp -r /tmp/landing-deploy/* /var/www/kvenno.app/
sudo chown -R www-data:www-data /var/www/kvenno.app/
sudo chmod -R 755 /var/www/kvenno.app/
rm -rf /tmp/landing-deploy/
```

### Uppbygging á þjóni

```
/var/www/kvenno.app/
├── index.html            # Aðalsíða (þetta verkefni)
├── styles.css            # Stílar (þetta verkefni)
├── media/                # Mynd efni (þetta verkefni)
├── 1-ar/
│   ├── index.html       # Miðstöð (þetta verkefni)
│   ├── games/           # Leikir (ChemistryGames repo)
│   └── ai-tutor/        # AI Tutor (ai-tutor repo)
├── 2-ar/
│   ├── index.html       # Miðstöð (þetta verkefni)
│   ├── games/           # Leikir (ChemistryGames repo)
│   ├── lab-reports/     # Lab Reports (LabReports repo)
│   └── ai-tutor/        # AI Tutor (ai-tutor repo)
├── 3-ar/
│   ├── index.html       # Miðstöð (þetta verkefni)
│   ├── games/           # Leikir (ChemistryGames repo)
│   ├── lab-reports/     # Lab Reports (LabReports repo)
│   └── ai-tutor/        # AI Tutor (ai-tutor repo)
├── val/
│   └── index.html       # Miðstöð (þetta verkefni)
└── f-bekkir/
    └── index.html       # Miðstöð (þetta verkefni)
```

## 📁 Verkfæri og áfangar

### Verkfæri sem deilt er á milli ára

Eftirfarandi verkfæri eru í **aðskildum repositories** en notuð á mörgum árum:

- **AI Efnafræðikennari** (`ai-tutor-app`)
  - Notað í: 1. ár, 2. ár, 3. ár
  - Slóðir: `/1-ar/ai-tutor/`, `/2-ar/ai-tutor/`, `/3-ar/ai-tutor/`

- **Lab Reports** (`lab-reports-app`)
  - Notað í: 2. ár, 3. ár
  - Slóðir: `/2-ar/lab-reports/`, `/3-ar/lab-reports/`

### Sértæk verkfæri fyrir hvert ár

- **Efnafræðileikir** - Mismunandi erfiðleikastig fyrir hvert ár:
  - `chemistry-games-1ar` → `/1-ar/games/`
  - `chemistry-games-2ar` → `/2-ar/games/`
  - `chemistry-games-3ar` → `/3-ar/games/`

## 🔧 Hvernig á að breyta

### Að bæta við nýrri áfangamiðstöð

1. Búðu til nýja möppu (t.d. `4-ar/`)
2. Afritaðu `1-ar/index.html` sem sniðmát
3. Breyttu titli, breadcrumbs og verkfæralista
4. Bættu við tengli á aðalsíðunni (`index.html`)

### Að bæta við verkfæri á áfangasíðu

Breyttu viðeigandi `[ártal]/index.html`:

```html
<a href="/1-ar/nytt-verkfaeri/" class="tool-card">
    <h3>Nafn verkfæris</h3>
    <p>Lýsing á verkfærinu...</p>
    <span class="status">Staða: Tiltækt / Væntanlegt / Í áætlun</span>
</a>
```

### Að uppfæra hönnunarkerfi

1. Lestu `KVENNO-STRUCTURE.md` fyrir samræmda hönnun
2. Gerðu breytingar í CSS hluta viðeigandi HTML skrár
3. Tryggðu samræmi á öllum síðum
4. Uppfærðu `KVENNO-STRUCTURE.md` ef nauðsynlegt
5. Afritaðu uppfærðu `KVENNO-STRUCTURE.md` í öll önnur kvenno.app repositories

## 📖 Mikilvæg skjöl

### KVENNO-STRUCTURE.md
**MIKILVÆGAST** - Lýsir heildaruppbyggingu alls kvenno.app vefjarins:
- Heildar URL skipan og vegleiðsla
- Hönnunarkerfi og stílreglur
- Haus og breadcrumb kröfur
- Authentication og aðgangsstýring
- Deployment aðferðir fyrir shared apps
- Leiðbeiningar um að vinna með verkfæri
- **Afritaðu þessa skrá í öll önnur repositories** fyrir kvenno.app verkfæri

### DEPLOYMENT.md
Ítarlegar leiðbeiningar um deployment:
- Pre-deployment checklist
- Deployment aðferðir (SCP, Git, Rsync)
- Post-deployment verification
- Rollback procedures
- Algengar villur og lausnir

### CLAUDE.md
Leiðbeiningar fyrir AI þróunaraðstoð (Claude Code). Inniheldur:
- Nákvæmar þróunarleiðbeiningar
- Samhengi um verkefnið
- Repository structure
- Best practices
- **ATH:** KVENNO-STRUCTURE.md er aðalheimild fyrir hönnunarkerfi

## 🌐 Tungumál

Öll viðmót eru á **íslensku**:
- "Heim" ekki "Home"
- "Til baka" ekki "Back"
- "Verkfæri" ekki "Tools"
- "Kennari" ekki "Teacher/Admin"

## 🔗 Tenglar

- **Vefur:** kvenno.app
- **Skóli:** [Kvennaskólinn í Reykjavík](https://kvenno.is)
- **Efnafræðideild:** efnafraeði@kvenno.is

## 📊 Núverandi staða (Nov 2024)

- ✅ Aðalsíða með áfangaleiðsögn
- ✅ Miðstöðvar fyrir 1. ár, 2. ár, 3. ár, Val og F-bekkir
- ✅ Samræmt hönnunarkerfi
- ✅ Responsive hönnun fyrir farsíma og spjaldtölvur
- 🚧 Einstök verkfæri í þróun (aðskilin repositories)
- 📋 Áætlun: Fleiri verkfæri og eiginleikar

## 📝 License

© 2024 Kvennaskólinn í Reykjavík - Efnafræðideild. Allur réttur áskilinn.

---

**Síðast uppfært:** 2025-11-22
**Viðhaldsaðili:** Sigurður Einarsson, efnafræðikennari
**Útgáfa:** 2.1.0 (Uppfærð skjölun)
