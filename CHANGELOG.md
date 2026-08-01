# Changelog

## v3.8.1 — Ontdek Westerwolde in homepage-stijl

- SVG-viewports van alle organisch gemaskeerde foto’s op zichtbaar gezet, zodat de subtiele zoom niet rechthoekig wordt afgesneden; bounce van secundaire foto’s vervangen door een vaste positie met rustige interne beeldzoom.
- Cijferblok onder de hero teruggebracht naar de rustige uitvoering zonder kaartachtergronden en extra labels; secundaire foto’s hergebruiken nu exact `environment-photo-clip-2`; achtergrond van “Ervaar het zelf” loopt weer door achter de footer.
- Footer-aansluiting hersteld, beide secundaire foto’s voorzien van een SVG-clipPath en iets lager geplaatst; CTA-pijlen aangepast naar wit en `#BA7548`.
- “Persoonlijke tips” en “Ervaar het zelf” uitgebreid met een asymmetrisch fotoduo; op mobiel staan beide beeldgroepen boven de tekst.
- Hero vernieuwd met een sfeervol Westerwolds landschap en karakteristiek gebouw rechts in beeld.
- Cijferblok verrijkt met korte belevingslabels, getinte kaarten en subtiele interactie.
- Rechthoekige bronfoto’s in de intro geplaatst, zodat alleen de originele SVG-paden van “Waarom De Weyde” de beeldvorm bepalen.
- Sliderbediening van “Door ons uitgelicht” onder de kaarten geplaatst.
- Favorietenbadges vier pixels lager en tien pixels breder gemaakt.
- Pijlen toegevoegd aan de ankerknoppen in de hero en bij “Persoonlijke tips”, met de juiste scrollrichting.
- Zes consistente line-iconen toegevoegd aan “Nog meer te beleven” en de aantallen tips natuurlijk verdeeld over vier en vijf items.
- Hero-CTA “Bekijk onze favorieten” toegevoegd met smooth-scrolldoel bij de favorietenslider.
- Intro-, favorieten- en persoonlijke-tipbeelden vervangen door inhoudelijk passende, geoptimaliseerde omgevingsfotografie.
- Categorielabels op favorietenkaarten omgebouwd tot duidelijke accentbadges; afstandslabels verwijderd.
- Externe links op favorietenkaarten uitgevoerd als open secundaire knoppen.
- Kop en beschrijving van “Nog meer te beleven” opnieuw uitgebalanceerd en alle zes categorieën inhoudelijk uitgebreid.
- Lijstitems voorzien van subtiele accentpunten; pijlen verschijnen alleen bij hover of toetsenbordfocus.
- Persoonlijke-tipsectie uitgebreid met een CTA naar de favorieten.
- Beeld bij “Ervaar het zelf” vervangen door de bestaande homepagebanner.
- Hero op desktop en tablet compacter gemaakt.
- Favorietenslider rechts uit de contentkolom laten doorlopen, met behoud van de positie van de navigatieknoppen.
- Mobiele favorietenslider zonder controls en met swipe-instructie uitgevoerd.
- Getinte achtergrond van “Ervaar het zelf” doorgetrokken tot achter de aansluiting op de footer.
- “Door ons uitgelicht” omgebouwd naar een echte horizontale slider met knoppen, swipe/trackpad en scroll-snap.
- Pijliconen onder “Nog meer te beleven” direct op 10px afstand van de linktekst geplaatst.
- Vinkjes onder “Nog meer te beleven” vervangen door proportionele pijliconen met hoverbeweging en accentkleur.
- CTA “Bekijk de vakantiewoning” gewijzigd naar een volle primaire knop.
- Labels op uitgelichte plekken vervangen door de inhoudelijke categorie; externe links hernoemd naar “Ga naar website”.
- Afbeelding bij “Persoonlijke tips” voorzien van een actuele inline SVG-clipPath.
- “Ervaar het zelf” omgebouwd naar dezelfde tweekolomsstijl, met tekst links en een gemaskeerde landschapsfoto rechts.
- Cijferblok direct onder de hero geplaatst.
- “Buitenleven begint hier” voorzien van dezelfde getinte achtergrond als “Ontdek De Weyde”.
- De foto uit “Persoonlijke tips” geplaatst in de grootste SVG-beeldvorm van de intro.
- Introcollage gebruikt de actuele inline SVG-clipPaths uit “Waarom De Weyde” in plaats van de verouderde vooraf gemaskeerde PNG-bestanden.
- Hero gelijkgetrokken met de homepage, inclusief brush-mask, typografie en kleurgebruik.
- Nieuwe panoramische landschapsfoto van Westerwolde toegevoegd.
- Eyebrow “Buitenleven begint hier” ingesteld op `#BA7548`.
- Introcollage voorzien van dezelfde organische beeldmaskers als “Waarom De Weyde”.
- Westerwolde-cijfers omgebouwd naar het iconenraster onder de homepage-hero.
- “Nog meer te beleven” visueel gelijkgetrokken met “Ontdek het vakantiehuis”.
- Responsive presentatie voor desktop, tablet en mobiel verfijnd.

## v3.7.2 — Quotes blijven wisselen bij verminderde beweging

- De quote-rotatie blijft actief wanneer `prefers-reduced-motion: reduce` is ingesteld, waaronder op iPhones met “Verminder beweging”.
- De crossfade-animatie wordt in dat geval uitgeschakeld via CSS; de inhoud wisselt nog steeds zonder beweging.
- Pauzeren bij een inactief browsertabblad blijft behouden.

## v3.7.1 — Mobiele galerie, quotes en lightbox-polish

- De “Bekijk alle foto’s”-overlay wordt op mobiel niet meer getoond; de laatste kaart is daar een normale fotoslide.
- De mobiele quote-crossfade gebruikt nu één vast, gecentreerd tekstvlak, zodat langere quotes niet buiten de brush vallen.
- De bruine focusrand rond sluit- en navigatieknoppen in de lightbox is verwijderd.
- Het sluiticoon vergroot subtiel bij hover en toetsenbordfocus.
- De linkerpijl beweegt bij hover subtiel naar links en de rechterpijl naar rechts.
- De hoverkleurfilter op de lightboxiconen is verwijderd.

## v3.7.0

- Lightbox-overlay gewijzigd naar zwart met 90% dekking en 8px achtergrondblur.
- Cirkels en achtergronden rond de navigatie- en sluiticonen verwijderd.
- Iconen krijgen bij hover de accentkleur `#BA7548`.
- Lightboxtitel ingesteld op Lora SemiBold 45px en beschrijving op Inter Regular 16px.
- Afbeeldingen worden volledig binnen de beschikbare viewport getoond en hebben een border-radius van 20px.
- Extra ruimte tussen beschrijving en foto toegevoegd.
- Quotesblok uitgebreid met een subtiele crossfade op desktop, tablet en mobiel.
- Brush-achtergrond blijft tijdens het wisselen volledig stilstaan.
- Quotes zijn als losse herhaalbare items opgebouwd ter voorbereiding op WordPress.
- Animatie stopt bij `prefers-reduced-motion` en wanneer het tabblad niet actief is.

## v3.6.2

- De definitieve witte navigatie-iconen toegevoegd voor sluiten, vorige en volgende.
- Alle galerie- en lightboxfoto’s voorzien van een border-radius van 20px.
- Lightboxafbeeldingen worden altijd volledig binnen de beschikbare viewport getoond met `object-fit: contain`.
- Twintig pixels extra ruimte toegevoegd tussen de subtitel en de foto.

## v3.6.2 — Lightbox verfijning

- Overlaytekst op de laatste fototegel gewijzigd naar “Bekijk alle foto’s”.
- Eigen witte sluit- en navigatie-iconen toegevoegd.
- Titel en subtitel gecentreerd boven de foto geplaatst.
- Fototeller gecentreerd onder de foto geplaatst.
- Titel, subtitel en teller ingesteld op `#FEFDFB`.
- Viewportveilige layout toegevoegd zodat foto en alle informatie altijd volledig zichtbaar blijven.
- Lightboxachtergrond gewijzigd naar `#06311D` met 90% dekking en 8px backdrop blur.

## v3.6.0 — Foto's en fullscreen lightbox

- Fullscreen fotolightbox toegevoegd voor desktop en tablet.
- Openen vanaf iedere foto, direct op de aangeklikte afbeelding.
- Navigatie met knoppen, pijltjestoetsen en swipe.
- Sluiten via kruisje, Escape en de achtergrond.
- Fototitels, korte beschrijvingen en teller toegevoegd.
- Focusherstel en scroll-lock toegevoegd.
- Op mobiel blijven alle beschikbare foto's direct in de horizontale slider staan.
- Component voorbereid op uitbreiding met WordPress-data.

## 3.5.0 — Code cleanup

### Structuur
- CSS-bestanden afgestemd op de vaste contentbloknamen: Menu, Header, USP's, Foto's, Quotes, Huisdetails, De Weyde en Footer.
- Duidelijke blokmarkeringen toegevoegd aan de HTML en CSS.
- Verouderde README vervangen door actuele projectdocumentatie.

### Bestanden
- `.DS_Store`, `__MACOSX` en lokale Git-metadata niet opgenomen in het distributiepakket.
- Drie losse clipPath-SVG's verwijderd omdat dezelfde paden al inline in `index.html` staan.
- `llustratie-footer.svg` hernoemd naar `illustratie-footer.svg`.

### HTML en performance
- “Fotogallerij” gecorrigeerd naar “fotogalerij”.
- Lazy loading en asynchrone decodering toegevoegd aan afbeeldingen onder de vouw.
- Bestaande inline clipPaths en beeldcompositie behouden.

### JavaScript en toegankelijkheid
- Focus blijft binnen het geopende mobiele menu.
- Escape-toets, sluitknop en navigatielinks blijven het menu sluiten.
- Menu- en accordionstatus worden bij viewportwissels netjes gesynchroniseerd.
- Scrolllistener gebruikt een passieve eventlistener.

### Controle
- Alle lokale assetverwijzingen gecontroleerd: geen ontbrekende bestanden.
- JavaScript syntactisch gecontroleerd met Node.js.
- CSS-accolades gecontroleerd.
- Geen bewuste visuele wijzigingen aangebracht.


## 3.8.0

- Nieuwe pagina **Ontdek Westerwolde** toegevoegd.
- Menu-item Omgeving hernoemd en doorgelinkt.
- Logo in desktop- en mobiel menu linkt naar de homepage.
- Actieve navigatiestatus toegevoegd op de nieuwe pagina.
- Intro, feitenblok, favorieten, categoriekaarten, persoonlijk tipsblok en CTA toegevoegd.
- Responsive opzet voor desktop, tablet en mobiel.
