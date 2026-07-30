# De Weyde homepage

Statische frontend van de homepage van vakantiehuis De Weyde.

## Contentblokken

De code gebruikt de volgende vaste benamingen:

1. Menu
2. Header
3. USP's
4. Foto's
5. Quotes
6. Huisdetails
7. De Weyde
8. Footer

De HTML-secties zijn met deze namen gemarkeerd. De bijbehorende CSS-bestanden gebruiken dezelfde naamgeving.

## Projectstructuur

```text
assets/
├── brand/          Logo's
├── brushes/        Organische SVG-vormen
├── css/
│   ├── components/ Menu, buttons en footer
│   └── sections/   De contentblokken van de homepage
├── fotos/          Foto-assets
├── icons/          Interface- en contenticonen
├── illustraties/   Decoratieve illustraties
├── js/             Interacties
└── mobile/         Mobiele menu- en hero-assets
```

## Lokaal bekijken

Open `index.html` rechtstreeks in een browser of gebruik een lokale webserver, bijvoorbeeld via de Live Server-extensie in VS Code.

## Versie 3.5.0 — code cleanup

- CSS-bestanden hernoemd volgens de afgesproken contentblokken.
- HTML-secties voorzien van duidelijke bloklabels.
- Onnodige macOS-bestanden en dubbele losse clipPath-bestanden verwijderd.
- Typfout in `illustratie-footer.svg` hersteld.
- Spelling van “fotogalerij” gecorrigeerd.
- Lazy loading en asynchrone decodering toegevoegd aan afbeeldingen onder de vouw.
- Mobiel menu voorzien van een focus trap voor toetsenbordgebruik.
- Menu- en accordionstatus worden robuust gereset bij viewportwissels.
- Responsive CSS leesbaarder gemarkeerd zonder de cascade of visuele uitkomst te wijzigen.

## Belangrijk

Deze cleanup is bedoeld als structurele optimalisatie. Layout, breakpoints, animaties en vormgeving zijn bewust behouden.


## Fotogalerij

De kaarten in `[data-gallery]` vormen de databron voor zowel de mobiele slider als de desktop-lightbox. Elke kaart bevat een afbeelding, `data-title` en een optionele `data-description`. Hierdoor kan de inhoud later rechtstreeks vanuit WordPress worden opgebouwd zonder de lightboxlogica te wijzigen.
