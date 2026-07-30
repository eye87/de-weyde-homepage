# Changelog

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
