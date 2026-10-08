# Handoff: SEO prijazne hyperlocal strani za aplikacije

**Datum:** 8. oktober 2026

**Za:** produktno, vsebinsko, SEO in razvojno ekipo oziroma naslednjega agenta

**Referenca:** obstoječa izvedba Speech Blubs v `redesign/local-pages/`
**Primer nove aplikacije:** Yummy Bites

## 1. Cilj in osnovno pravilo

Pripraviti ponovljiv postopek, s katerim lahko različne aplikacije objavijo uporabne lokalne vodiče za mesto ali sosesko. Stran mora odgovoriti na lokalno vprašanje obiskovalca, ponuditi preverjene lokalne informacije in smiselno predstaviti aplikacijo.

**Ponovno uporabimo tehnično ogrodje in postopek preverjanja. Za vsako aplikacijo na novo določimo namen iskanja, vsebino, vire in conversion flow.**

Hyperlocal stran je vodič za konkretno območje. Samo zamenjava imena mesta v istem besedilu in usmerjanje vseh obiskovalcev v isti kviz ne ustvarita dovolj lokalne koristi. Google med problematične prakse uvršča doorway strani in množično ustvarjanje vsebin brez dodane vrednosti. Skupen CTA je lahko del uporabnega vodiča; odločilna je vsebina strani. [Google: spam policies](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse).

Ta dokument je implementacijski handoff za ponovno uporabo pri različnih aplikacijah. Zavihek Hyperlocal v OpenSEO prikazuje navodila in omogoča prenos tega dokumenta. Generični generator za več aplikacij še ni implementiran. Referenčne datoteke in ukazi spodaj pripadajo projektu Speech Blubs; niso datoteke ali ukazi OpenSEO. Primeri domen, poti in funkcij Yummy Bites so predlogi, ki potrebujejo produktno potrditev.

## 2. Kaj imamo že pripravljeno

Speech Blubs referenca v času priprave handoffa vsebuje 261 predlaganih lokalnih strani: 29 mest in 232 območij v Kaliforniji, Teksasu in Nemčiji. Številke opisujejo referenčni projekt in niso zahteva za novo aplikacijo ali dokaz javne objave. Spodnje poti so relativne glede na repozitorij Speech Blubs, ne OpenSEO.

| Referenca                                                                                                         | Kaj prevzeti                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| README — `redesign/local-pages/README.md`                                                                         | Podatki → statični HTML → preverjanje → pregled → produkcijski izvoz   |
| Regionalni podatkovni model — `redesign/local-pages/docs/regional-contract.md`                                    | Ločitev mest, območij, virov, lokalnih informacij in odprtih vprašanj  |
| Predloga — `redesign/local-pages/scripts/template.py`                                                             | Vsebina v začetnem HTML, metadata, interne povezave in JSON-LD         |
| Build — `redesign/local-pages/scripts/build.py`                                                                   | Skupni asseti s hash imeni, stiskanje in ločen review/production način |
| Validator — `redesign/local-pages/scripts/validate.py`                                                            | Preverbe vseh generiranih strani, podatkov, povezav in slik            |
| Fotografska preverba — `redesign/local-pages/scripts/check_venue_rendering.py`                                    | Ujemanje lokacije, slike, napisa, avtorstva in licence                 |
| Produkcijski izvoz — `redesign/local-pages/scripts/export_production.py`                                          | Paket samo objavljivih datotek za vključitev v obstoječe spletno mesto |
| Javna HTTP preverba — `redesign/local-pages/scripts/check_public_deployment.py`                                   | Preverjanje datotek na dejanskem hostingu po objavi                    |
| Končni SEO QA — `redesign/local-pages/docs/final-seo-qa.md` in venue QA — `redesign/local-pages/docs/VENUE-QA.md` | Primer dokumentiranja dokazov in omejitev preverjanja                  |

Za osnovo uporabimo `local-pages`, saj ima ločene in ponovno uporabne assete. Fresno samostojni HTML je težji zaradi vdelanih slik in fontov; njegov SEO audit — `redesign/fresno/docs/seo-audit-2026-10-08.md` pojasni razliko. Meritve reference so zgodovinski lokalni laboratorijski rezultati, ne meritev nove aplikacije ali dokaz javnega indeksiranja.

## 3. Vhodni brief za vsako novo aplikacijo

Pred pisanjem pilotne strani zberemo naslednje podatke. Manjkajoče podatke označimo kot odprte; ne nadomestimo jih z izmišljenimi vrednostmi.

| Podatek               | Kaj mora biti potrjeno                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------- |
| Produkt               | Ime, ciljna publika, starostna skupina in problem, ki ga aplikacija rešuje                  |
| Funkcije in trditve   | Dejanske funkcije, vir za vsako pomembno trditev, cene oziroma ponudba, če jih stran navaja |
| Domena in poti        | Končna HTTPS domena, lastnik objave, obstoječe strani in morebitne preusmeritve             |
| Jeziki in trgi        | Jezik vodiča, jezik onboarding-a in dejansko podprti jeziki aplikacije, vsak posebej        |
| CTA                   | Pravi URL do produkta, kviza, onboarding-a ali trgovine z aplikacijami                      |
| Lokalni namen iskanja | Vprašanje, ki potrebuje lokalni odgovor, in odnos tega odgovora do aplikacije               |
| Območja               | Mesta/soseske, uradna imena, nadrejeno mesto, vir geografije in status preverjanja          |
| Uredništvo            | Dejanski skrbnik, postopek pregleda, datumi ter kontakt za popravke                         |
| Brand in slike        | Dovoljena grafika, produktni screenshot-i, fonti ter licence fotografij                     |
| Meritve               | Primarna konverzija, orodje za pripisovanje rezultata in dostop do Search Console           |

Če aplikacija nima smiselne lokalne uporabe in ne more ponuditi lokalnega odgovora, pripravimo tematski vodič brez mestnih kopij. Geografski seznam sam po sebi ni razlog za ustvarjanje strani.

## 4. Izbor lokacij in ključnih besed

1. Pregledamo obstoječe URL-je in Search Console, če je dostopen. Popravimo ali nadgradimo obstoječo stran, kadar že odgovarja na isti namen iskanja.
2. Za vsak kandidat preverimo, kaj ljudje dejansko iščejo in kakšne strani prikazuje lokalni SERP. Uporabimo razpoložljive podatke o iskanju; manjkajočega search volume ne ocenimo kot dejstvo.
3. Določimo eno primarno vprašanje na URL. Sorodna vprašanja vključimo v razdelke iste strani, če ne potrebujejo samostojnega odgovora.
4. Raziskujemo mesto in šele nato soseske. Ločena stran za sosesko potrebuje drugačen uporaben lokalni odgovor.
5. Za pilot izberemo eno mesto in eno dobro raziskano sosesko. Dodatni jezik ali trg dodamo, ko ima potrjene podatke in lokalizacijo.

**Merilo za samostojno sosesko:** obiskovalec lahko izve nekaj pomembnega, česar mestni vodič ne pove dovolj natančno. To so lahko druge preverjene storitve, dostop, programi, pristojnosti ali aktivnosti. Različne uvodne povedi in sinonimi ne zadostujejo.

Če dve območji uporabljata iste vire in nimata dovolj razlik, ju pokrijemo v mestnem vodiču. Ne ustvarjamo množice praznih URL-jev, da bi jih pozneje napolnili.

Primer predlagane hierarhije za novo aplikacijo:

```text
/{tema}/                         tematski oziroma lokacijski imenik
/{tema}/{regija}/{mesto}/        mestni vodič
/{tema}/{regija}/{mesto}-{area}/ vodič za sosesko
/{jezik}/{tema}/...              potrjene lokalizirane različice
```

Pot ni vezana na obstoječi `/speech-therapy/`. Uporabimo kratek, stabilen in razumljiv URL; imena z enakim zapisom ločimo z regijo ali mestom. Zapis, trailing slash in canonical so enotni.

## 5. Raziskovanje in lokalni podatki

### Geografija

- Hranimo prikazno ime, uradno ime, tip območja, nadrejeno mesto, vir ter ID uradnega zapisa, kadar obstaja.
- Soseska, šolski okoliš, upravna četrt in načrtovalno območje imajo lahko različne meje. Opis naj pove, katero geografijo uporablja.
- Ne izmišljamo ID-jev, prebivalstva, meja ali pripadnosti storitvi. Približen centroid ne dokazuje, da je ustanova znotraj območja.
- Lokacijo zunaj soseske opišemo kot možnost zunaj nje oziroma v širšem mestu. Trditve »najbližji«, »v bližini« ali »10 minut stran« potrebujejo ustrezno preverbo.

### Lokalni viri

Prednost imajo uradne strani občin, ustanov, izvajalcev in javnih programov. Iskalni zadetek je pripomoček za odkrivanje; povezava mora podpirati konkretno navedbo.

Za vsak vir hranimo `id`, naslov, URL, datum dejanske preverbe in preverjena dejstva. Pri vsebinskem razdelku navedemo, na katere `source_ids` se opira. Ločimo dejstvo iz vira, uredniški predlog aktivnosti in podatek o produktu.

Pri ustanovi preverimo ime, naslov, cilj povezave, vrsto storitve in pomembne pogoje. Delovni čas, cene, termin, starost, vpis, zavarovanje in napotnica so časovno občutljivi; objavimo jih le s preverjenim virom. Če jih nimamo, napotimo na aktualne informacije izvajalca.

HTTP 200 ni dokaz pravilnega izvajalca. Preverimo vsebino in cilj po preusmeritvi. HTTP 403, bot challenge ali timeout pomenijo omejitev avtomatske preverbe; ne pomenijo samodejno pokvarjene povezave ali uspešnega pregleda.

## 6. Struktura posamezne strani

| Zaporedje | Vsebina                             | Namen                                                       |
| --------- | ----------------------------------- | ----------------------------------------------------------- |
| 1         | Breadcrumb in en jasen H1           | Obiskovalec takoj prepozna temo in območje                  |
| 2         | Kratek lokalni uvod                 | Pove, komu vodič pomaga in kaj lahko tu izve                |
| 3         | Najuporabnejši lokalni odgovor      | Konkretne možnosti, kontakti ali preverjeni lokalni koraki  |
| 4         | Predstavitev aplikacije in CTA      | Pojasni, kako produkt podpira isto potrebo                  |
| 5         | Lokalni praktični razdelki          | Razlike, uporabni primeri in omejitve območja               |
| 6         | Daljši vodič, če ga tema potrebuje  | Odgovori na nadaljnja vprašanja                             |
| 7         | Vidna pogosta vprašanja             | Resnična vprašanja obiskovalcev, kratki odgovori            |
| 8         | Sorodni vodiči                      | Nadrejeno mesto, ustrezne soseske in sorodni lokalni vodiči |
| 9         | Viri, odgovornost in datum pregleda | Bralec lahko preveri informacije in sporoči popravek        |

Glavni odgovor naj bo na strani dostopen brez prijave ali kviza. CTA je smiseln naslednji korak po uporabnem odgovoru. Neodvisni izvajalci naj bodo jasno ločeni od ponudnika aplikacije; partnerstva navedemo samo, če obstajajo.

Dolžino določi tema. Google ne predpisuje ciljnega števila besed; besedila ne podaljšujemo zaradi SEO kvote. Datuma pregleda ne spreminjamo brez dejanskega pregleda. [Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

Obstoječi validator preverja interne pragove za besede, teme in vire. Pri prenosu jih prilagodimo vsebini; niso Googlova zahteva in ne dokazujejo kakovosti.

## 7. Tehnična SEO specifikacija

### HTML in dostopnost

Uporabimo statično generiranje, SSR ali prerendering. H1, glavno besedilo, lokalne informacije, interne povezave in metadata naj bodo v začetnem HTTP odgovoru. JavaScript izboljšuje interakcije; izklopljen JavaScript ne sme odstraniti lokalnega vodiča. To je priporočena arhitekturna izbira za ta sistem. [Google: JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Uporabimo semantični `main`, `nav`, `section` in `footer`, smiselno hierarhijo naslovov ter prave povezave `<a href="…">`. Preverimo tipkovnico, fokus, kontrast, zoom in dostopna imena CTA. Vidno besedilo gumba naj bo vključeno v njegovo dostopno ime.

### Metadata in canonical

- En unikaten `<title>` in description, ki naravno opisujeta temo in lokacijo. Približno 50–60 oziroma 140–160 znakov je uredniško vodilo, ne omejitev ali zagotovilo prikaza.
- En H1, pravilen `html lang`, UTF-8 in viewport brez onemogočenega povečanja.
- Absoluten self-referencing canonical za vsak samostojen lokalni vodič. Mesta in soseske ne canonicaliziramo na domačo stran.
- Canonical, `og:url`, WebPage URL, sitemap in notranje povezave uporabljajo isti končni URL brez UTM parametrov.
- Podvojene različice normaliziramo; stare poti po selitvi praviloma trajno preusmerimo na vsebinsko ustrezno novo pot.
- CMS in generator ne smeta dodati nasprotujočih si canonicalov ali podvojenega SEO head-a.

Canonical je signal, ki ga Google presoja skupaj z drugimi signali; ni zagotovilo izbrane različice. [Google: canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### Indexing, robots in sitemap

| Način                | Pričakovano vedenje                                                               |
| -------------------- | --------------------------------------------------------------------------------- |
| Review/staging       | `noindex`; javnega indexable sitemap-a ne oddamo za pregledne strani              |
| Končni lokalni vodič | HTTP 200, brez `noindex` v HTML ali HTTP headerju, crawl dovoljen                 |
| Neobstoječa pot      | Resničen HTTP 404; ne HTTP 200 z domačo stranjo                                   |
| Pomožne strani       | Zavestno določena politika; ne vključimo jih samodejno v sitemap lokalnih vodičev |

Preverimo tudi CDN oziroma CMS `X-Robots-Tag`. `robots.txt` ne nadomesti `noindex`; crawler mora stran doseči, da prebere `noindex`. [Google: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).

V sitemap vključimo končne canonical URL-je, ki jih želimo indeksirati, vrnejo 200 in so indexable. `lastmod` naj odraža pomembno spremembo vsebine, ne vsak build. Sitemap vključimo v obstoječi sitemap/index in ga oddamo v Search Console. Sitemap ne zagotavlja indeksiranja. [Google: build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=en).

### Strukturirani podatki

Osnovni JSON-LD graf: `Organization`, `WebPage` in `BreadcrumbList`. Lokalno temo lahko povežemo s `Place` oziroma `City` v `WebPage.about`. Podatki morajo ustrezati strani in dejanskim entitetam.

Ne dodamo izmišljene lokalne poslovalnice, naslova, `LocalBusiness`, ordinacije, ocen ali strokovnega reviewerja. Druge tipe, denimo `SoftwareApplication` ali `Recipe`, uporabimo le na vsebinsko ustrezni strani z resničnimi zahtevanimi podatki in po preverbi aktualnih smernic.

Preverimo veljavnost grafa in njegovo skladnost z vidno vsebino. Rich Results Test preveri podprte Google funkcije; veljaven generični `WebPage` sam po sebi ne pomeni rich result-a. Google tudi pri pravilnem markupu prikaza ne zagotavlja. [Google: structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies?isappinstalled=0).

Vidna FAQ vprašanja so uporabna za bralca. **FAQ rich results v Googlu od 7. maja 2026 niso več prikazani**, zato jih ne postavljamo kot cilj ali obljubo tega sistema. [Google: Search documentation updates](https://developers.google.com/search/updates).

### Jeziki

Prevedemo vso pomembno vsebino, tudi metadata, CTA, lokalne nazive in omejitve. Jezik vodiča ne dokazuje podpore tega jezika v aplikaciji.

`hreflang` uporabimo za dejanske jezikovne oziroma regionalne različice iste strani, s self-reference, povratnimi povezavami in absolutnimi URL-ji. Različna mestna vodiča nista jezikovni alternativi. Vsaka samostojna lokalizirana stran uporablja svoj canonical. `x-default` dodamo za smiselno privzeto različico ali izbirnik. [Google: localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions).

## 8. Povezave, slike in hitrost

Mestni vodič povezujemo z objavljenimi soseskami. Soseska povezuje nadrejeno mesto in ustrezne druge vodiče. Dodamo tudi vhodne povezave iz tematskega imenika ali obstoječe vsebine glavne domene, da strani niso orphan pages. Anchor opiše ciljno temo/območje. Ne povezujemo na predvidene, še neobjavljene URL-je.

Za fotografijo dejanske ustanove preverimo **uradni URL in ime lokacije skupaj**, ker lahko isti direktorij vsebuje več ustanov. Hranimo izvirni vir, licenco, avtorja, datum fotografije, kadar je znan, in uporabljene prilagoditve. Prenosljiva datoteka sama ne dokazuje pravice uporabe.

Če ustrezne fotografije nimamo, uporabimo dovoljeno ilustrativno fotografijo in jo jasno označimo. Ne predstavimo stock fotografije ali generirane slike kot fotografije resničnega lokalnega objekta. Alt opiše prikazano sliko; dekorativna slika ima prazen alt.

Za javno dostavo uporabimo ločene optimizirane slike in fonte, responsive `srcset`/`sizes`, resnične dimenzije ter WebP/AVIF z ustreznim fallbackom. Hero oziroma LCP slike ne nalagamo lazy; sekundarne slike praviloma so lazy. Fonti naj vključujejo potrebne lokalne znake.

Hosting mora izvajati stiskanje HTML/CSS/JS, dolgo immutable predpomnjenje assetov s hash imeni in kratko predpomnjenje HTML. Samostojni HTML z base64 slikami ni privzeta produkcijska oblika.

**Cilji Core Web Vitals:** LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 pri 75. percentilu realnih obiskov, ločeno za mobilno in namizno uporabo. Lighthouse uporabimo za diagnostiko; rezultat 100 in TBT 0 ne dokazujeta dobrega INP v realni uporabi. [web.dev: Web Vitals](https://web.dev/articles/vitals).

## 9. Predlagani model za več aplikacij

Naslednja struktura je **predlog novega adapterja/refaktorja**, ne obstoječi API ali delujoča konfiguracija sedanjega generatorja.

```text
hyperlocal/
  shared/                       renderer, SEO, link graph, preverbe
  apps/
    yummy-bites/
      app-config.json           brand, domain, jeziki, route policy, CTA
      product-facts.json        potrjene funkcije/trditve in njihovi viri
      locations.json            geografija in status preverjanja
      resources.json            lokalne ustanove/storitve
      sources.json              dokazila za konkretna dejstva
      pages/                    uvodi, razdelki, FAQ, source_ids
      photo-manifest.json       identiteta, izvirnik, licenca in derivati
      assets/                   grafika te aplikacije
      qa/                       poročila in odprta vprašanja
      dist-review/              generiran pregled
      dist-production/          generirani produkcijski build
      deployment/               objavljive datoteke + ločena dokazila
```

Primer začetnega `app-config.json`, ki je namenoma še neobjavljiv:

```json
{
  "app_id": "yummy-bites",
  "brand_name": "Yummy Bites",
  "canonical_origin": null,
  "asset_namespace": "/assets/yummy-bites-local/",
  "guide_locales": ["en-US"],
  "verified_app_languages": [],
  "route_prefix": null,
  "cta": { "label": "Explore Yummy Bites", "url": null, "allowed_params": [] },
  "editorial_owner": null,
  "publishable": false
}
```

Pred produkcijskim izvozom morajo biti obvezne vrednosti potrjene, povezave dejanske in `publishable` omogočen po končanem QA. Generator naj ob manjkajočem podatku izvoz ustavi z razumljivo napako.

Minimalne podatkovne pogodbe:

| Entiteta          | Polja                                                                                                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lokacija          | `id`, `display_name`, `official_name`, `slug`, `geography_type`, `parent_id`, `official_record_ids`, `source_ids`, `verification_status`, `scope_note`                                              |
| Vir               | `id`, `title`, `url`, `checked_at`, `verified_facts`, `access_status`                                                                                                                               |
| Lokalni resource  | `id`, `name`, `type`, `official_url`, preverjen naslov, `source_ids`, pogoji/dostop, `photo_id`                                                                                                     |
| Stran             | `id`, `app_id`, `locale`, `location_id`, `path`, `primary_intent`, `title`, `description`, `h1`, razdelki, `source_ids`, sorodne strani, `content_updated_at`, `sources_checked_at`, `missing_data` |
| Produktna trditev | `id`, `text`, `source_url`, `verified_at`, dovoljeni trgi/jeziki in morebitne omejitve                                                                                                              |
| Fotografija       | `id`, resource identiteta, izvirni URL, avtor/licenca, datum, prilagoditve, dejanske dimenzije in derivati                                                                                          |

Ločimo datum spremembe vsebine, pregled virov in čas builda. Vsaka aplikacija ima lasten izvorni in output prostor; build ne sme prepisati druge aplikacije.

### Kaj odstranimo iz trenutnih vezav

Parametriziramo domeno `speechblubs.com`, brand, produktne trditve, `/speech-therapy/` in `/de/logopaedie/`, trge, jezike, število strani, zahtevano število sosesk, CTA ter asset namespace. To velja tudi za validator, exporter, pakiranje in javni checker.

Moduli `park`, `library`, govorna podpora in šest starostnih CTA pripadajo sedanji vsebini. Za novo aplikacijo določimo druge module, kadar jih potrebuje njen namen iskanja. Ne kopiramo starega datuma `2026-10-08` v novo vsebino ali sitemap.

## 10. CTA, pripisovanje in conversion flow

Potrdimo dejanski parameter contract ciljne aplikacije. Sedanjih `sb_locality_id`, `sb_market`, `sb_locale`, `sb_child_age` ne prenesemo brez prilagoditve.

Če novi flow potrebuje lokacijo, določimo, ali sprejema interno lokacijo, uradni geografski ID, mesto ali sosesko. Preverimo prejem parametrov in dejanski naslednji zaslon. Odprtje pravilnega URL-ja ne dokazuje, da provider parameter tudi uporabi.

Za pripisovanje predlagamo `app_id`, `page_id`, `market`, `locale`, `location_id` in mesto CTA. To so predlagana analitična polja; podpora ponudnika še potrebuje implementacijo oziroma potrditev. Ne dodajamo osebnih ali zdravstvenih podatkov otroka v URL.

Merimo prikaz strani, CTA click, začetek/zaključek onboarding-a in primarno konverzijo, kolikor jih dejanski sistem omogoča. Klik v App Store ne pomeni potrjene namestitve; za to potrebujemo ustrezen attribution mehanizem. Implementacija analytics sledi pravilom in consent nastavitvam glavnega spletnega mesta.

## 11. Delovni primer: Yummy Bites

**Fokus primera:** Yummy Bites je namenjen prvim obrokom dojenčka in uvajanju hrane. Starosti, posamezne funkcije, domena in onboarding v tem handoffu niso potrjeni. Lokalni vodič zato raziskujemo okoli podpore staršem pri uvajanju hrane; dejanske produktne obljube objavimo šele po preverbi.

### Predlagani pilot

| Element                 | Predlog, ki potrebuje raziskavo/potrditev                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mesto                   | Fresno, California, kot primer zaradi obstoječega lokalnega referenčnega projekta                                                                             |
| Namen                   | Starš išče lokalno pomoč, delavnice ali programe pri uvajanju hrane dojenčku                                                                                  |
| Kandidat ključne besede | `starting solids classes Fresno` ali `baby feeding classes Fresno`, glede na lokalni SERP in potrjen produktni brief                                          |
| Pot                     | `/starting-solids/california/fresno/` na potrjeni domeni aplikacije                                                                                           |
| Title                   | `Starting Solids Resources in Fresno, CA \| Yummy Bites`                                                                                                      |
| H1                      | `Starting solids resources for Fresno families`                                                                                                               |
| Description             | `Find verified baby feeding resources in Fresno, learn what to check before contacting a local program, and explore Yummy Bites for your baby's first foods.` |
| CTA                     | `Explore Yummy Bites`, s potrjenim produktnim URL-jem                                                                                                         |

Title/H1/description so osnutek. Končni zapis mora natančneje zadeti potrjen namen iskanja in vire; niso rezultati keyword raziskave.

### Vsebinske kartice

Namesto avtomatskega kopiranja parka, knjižnice in govorne terapije raziskujemo module, ki ustrezajo produktu:

- Lokalna strokovna možnost: preverjen pediatrični prehranski oziroma feeding program, če ga ustanova dejansko ponuja.
- Javni program: preverjena prehranska podpora, starševska delavnica ali drug relevanten program. Upravičenost pojasnimo iz uradnega vira.
- Lokalna praktična dejavnost: resničen družinski kuharski program ali drug primeren resource, če obstaja in je potrjen.

Te kategorije so raziskovalne naloge, **ne že potrjene ustanove v Fresnu**. Park in knjižnica sta lahko vključena, če imata dokazljivo povezavo z izbrano vsebino, ne zaradi zahteve stare predloge.

Predlagani H2 razdelki:

```text
Where to find support for starting solids in Fresno
What to check before contacting a local program
Parent workshops and verified baby feeding resources
How Yummy Bites fits into your family's routine
Questions from Fresno parents
Sources and related local guides
```

Produktni razdelek objavimo s funkcijami, potrjenimi v `product-facts.json`. Receptov, meal planov, kviza, podprtih starosti, jezikov, cene ali rezultatov ne obljubimo brez preverbe. Ne predstavimo aplikacije kot lokalne ambulante ali zamenjave za strokovno obravnavo.

Če vodič vključuje zdravstvena priporočila o hranjenju, alergenih ali težavah pri hranjenju, potrebujemo aktualne strokovne vire in ustrezen strokovni pregled teh priporočil. Sam pregled uradnih lokalnih naslovov ni klinični pregled.

Sosesko dodamo šele po ločeni raziskavi. Če so zanjo relevantne iste mestne storitve in nič bistveno drugačnega, ostane pokrita v mestnem vodiču.

## 12. Izvedba: od pilota do objave

1. Potrdimo brief, produktne trditve, temo, ciljni URL in CTA.
2. Izdelamo izbor in preverimo geografijo, vire, fotografije ter odprte podatke.
3. Pripravimo eno mestno in eno soseskino stran. Vsebino uredniško pregledamo pred množičnim generiranjem.
4. Uvedemo app adapter in prilagodimo validator. Pomembni lokalni podatki pridejo v začetni HTML.
5. Zgradimo review z `noindex`. Preverimo desktop, mobilno postavitev, tipkovnico, vse CTA in vire.
6. Generiramo širši izbor samo za lokacije, ki izpolnjujejo vsebinska merila. Avtomatsko preverimo vse strani, ne le pilota.
7. Pripravimo produkcijski izvoz s seznamom poti, hash-i in navodili za hosting. QA dokazila hranimo ločeno od javnih datotek.
8. Objavimo v potrjen prostor glavne domene, preverimo javne odzive in vključimo sitemap ter vhodne interne povezave.
9. V Search Console preverimo indeksiranje in izbrani canonical. Spremljamo dejanske CWV in konverzije, nato določimo naslednjo širitev.

### Dejanski ukazi sedanje Speech Blubs reference

Spodnji ukazi veljajo za **sedanji projekt**, ne za še neimplementirani Yummy Bites adapter. Izvajajo se iz `redesign/local-pages/`; Python odvisnosti so navedene v `requirements.txt`. Build ponovno ustvari generirano mapo. `prepare_assets.py` uporablja Speech Blubs grafiko in lahko prenese manjkajočo referenčno fotografijo.

```sh
python3 scripts/prepare_assets.py
python3 scripts/merge_venue_photos.py
python3 scripts/prepare_venue_photos.py
python3 scripts/build.py --pilot
python3 scripts/validate.py --pilot
python3 scripts/build.py
python3 scripts/validate.py
python3 scripts/check_venue_rendering.py
python3 scripts/package_review.py
python3 scripts/serve.py --port 5180
```

Produkcijski build in izvoz:

```sh
python3 scripts/build.py --production
python3 scripts/validate.py --production
python3 scripts/check_venue_rendering.py --production
python3 scripts/export_production.py --check-only
python3 scripts/export_production.py
```

Za lokalni produkcijski preview: `python3 scripts/serve.py --production --port 5181`. Kadar sta oba preview strežnika zagnana, `python3 scripts/check_http.py` preveri oba načina.

**V sedanji izvedbi objavimo vsebino `deployment/site/`.** Celotni `dist-production/` in review ZIP vsebujeta tudi pregledne oziroma operativne datoteke. Exporter izloči domačo stran `/`, `robots.txt`, `_headers` in raziskovalne JSON izvoze; vključi lokalne strani, skupne assete, foto kredite in `sitemap-local-guides.xml`. Sitemap vključimo v obstoječi sitemap/index. Hosting mora dejansko nastaviti ustrezne headerje in ohraniti druge poti spletnega mesta.

Exporter ločeno pripravi `deployment/overlay-manifest.json`, `deployment/checksums.sha256` in `deployment/speech-blubs-local-pages-production.zip` za prevzem in preverjanje. Teh operativnih datotek ne objavimo kot del spletnega mesta. `validate.py` preveri trenutni interni link graph; uspešen `export_production.py --check-only` ne potrjuje aktualnosti zunanjega, uredniškega ali browser QA. Ti pregledi morajo pokrivati različico, ki jo predajamo.

Po dejanski javni objavi Speech Blubs reference je primer preverbe:

```sh
python3 scripts/check_public_deployment.py \
  --base-url https://speechblubs.com \
  --full \
  --report deployment/public-check.json
```

Checker ničesar ne objavi. Privzeto pregleda vzorec 12 strani; `--full` pokrije ves trenutni paket. Za drugo aplikacijo prej prilagodimo tudi njegove Speech Blubs vezave. Uspešna preverba na localhostu ne dokazuje javne objave.

## 13. Definition of done in prevzemni paket

Stran je pripravljena za objavo, ko so zaključene naslednje preverbe:

- [ ] Namen strani, lokacija in produktne trditve so potrjeni; nobena trditev nima izmišljenega vira.
- [ ] Lokalni vodič pomaga tudi brez klika na CTA; soseska ima utemeljeno samostojno vrednost.
- [ ] Viri podpirajo konkretna dejstva; odprta vprašanja so rešena ali pošteno izpuščena/pojasnjena.
- [ ] En H1, unikaten title/description, pravilen jezik, usklajeni canonical/OG/JSON-LD in stabilni URL-ji.
- [ ] Glavna vsebina in povezave so v začetnem HTML; ni podvojenega CMS SEO head-a.
- [ ] Vse interne poti obstajajo; glavna domena ima vhodne povezave do vodičev.
- [ ] CTA je preverjen do dejanskega naslednjega koraka, vključno s parametri, jezikom in mobilno uporabo.
- [ ] Fotografije imajo potrjeno identiteto/licenco; illustrative oznake, alt in dimenzije so pravilni.
- [ ] Mobilna/desktop postavitev in dostopnost so pregledane; zmogljivost je izmerjena z opisano metodo.
- [ ] Review je noindex; produkcijski HTML in headerji imajo načrtovano indexability politiko.
- [ ] Objavljivi paket vsebuje vse potrebne assete/pomožne strani in ne prepiše tujih poti ali robots.txt.
- [ ] Dejanski uredniški in objavni skrbnik sta določena.

**Po objavi posebej potrdimo:** javni HTTP 200/404, indexability headerje, assete, predpomnjenje, sitemap, canonical in Search Console. »Pripravljeno za objavo«, »objavljeno«, »indeksirano« in »dosega rezultate« so ločeni statusi.

Prevzemni paket vsebuje:

| Deliverable         | Vsebina                                                                              |
| ------------------- | ------------------------------------------------------------------------------------ |
| Izvor               | App config, potrjena produktna dejstva, lokalni podatki, vsebina in renderer/adapter |
| Objavljive datoteke | Landing strani, potrebni asseti/pomožne strani in sitemap                            |
| Manifest            | Pot, locale, lokacija, canonical, status preverjanja, datumi in hash datoteke        |
| Dokazila            | Viri, licence, odprta vprašanja, avtomatski QA, browser QA in meritve                |
| Navodila            | Rebuild, objava, headerji, javne preverbe in odgovorne osebe                         |

Za obsežno izvedbo razdelimo delo med raziskovalca, razvijalca in neodvisnega QA agenta z jasno določenimi datotekami oziroma odgovornostmi. Pri testiranju na napravah ima vsak agent eno napravo v upravljanju, skladno z navodili projekta.

## 14. Vzdrževanje in naslednja izvedbena naloga

Določimo pogostost pregleda glede na občutljivost podatkov. Termine, cene in dostop preverjamo pogosteje kot stabilne opise; odkrite spremembe vključimo takoj. QA povezav dopolnimo z vsebinskim preverjanjem. Ukinjene storitve zamenjamo s preverjenimi možnostmi ali navedbo odstranimo.

Po objavi spremljamo Search Console impresije, klike, query-je, indeksiranje in canonical, nato CTA ter potrjene konverzije po strani/trgu. Če stran ostaja neindeksirana ali nima vrednosti za obiskovalca, preverimo njen odgovor in razlikovanje od drugih strani. Širitev naj temelji na kakovosti in rezultatih pilota.

Predlog naloge za naslednjega izvajalca:

> Na podlagi tega handoffa pripravi ločen hyperlocal adapter za Yummy Bites. Najprej potrdi produktni brief, domeno, jezike, funkcije in CTA. Uporabi arhitekturo `redesign/local-pages/`, parametriziraj vse Speech Blubs vezave in pripravi eno mestno ter eno vsebinsko upravičeno soseskino pilotno stran. Razišči uradne lokalne vire in ustrezne fotografije, zgradi noindex review, preveri vsebino/SEO/CTA/mobilno uporabo ter pripravi ločen produkcijski paket in seznam odprtih integracij. Uredi izvore, ne generiranega HTML. Ne spreminjaj `speechblubs-unity/`.
