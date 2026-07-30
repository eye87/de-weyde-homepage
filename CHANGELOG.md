# Changelog

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
