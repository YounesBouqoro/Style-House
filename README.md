# Style House Website

Eine schnelle, responsive Informationsseite für Style House Friseur in Düsseldorf-Derendorf.

## Bilder ergänzen

1. Das neue Bild in `assets/images/` hochladen. WebP oder JPG ist ideal.
2. In `script.js` oben im Array `galleryImages` einen weiteren Eintrag ergänzen:

```js
{
  src: "assets/images/dateiname.webp",
  alt: "Kurze Beschreibung des Bildes",
  label: "Text auf dem Bild",
},
```

Das Bild erscheint danach automatisch in der Galerie und lässt sich vergrößern.

## Inhalte pflegen

- Texte, Kontaktdaten und Öffnungszeiten: `index.html`
- Farben und Gestaltung: `styles.css`
- Galerie und Öffnungsstatus: `script.js`

Die Seite benötigt keinen Build-Schritt und kann direkt über GitHub Pages oder einen beliebigen Webspace veröffentlicht werden.
