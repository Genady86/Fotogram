# Fotogram

Fotogram ist eine kleine Fotogalerie, die ich mit HTML, CSS und JavaScript erstellt habe.

Das Projekt ist im Rahmen meiner Weiterbildung entstanden. Mein Ziel war es, das Zusammenspiel von HTML, CSS und JavaScript besser zu verstehen und eine Galerie zu bauen, bei der die Bilder mit JavaScript erzeugt und in einer größeren Ansicht geöffnet werden können.

## Funktionen

* 12 Bilder in einer Galerie
* Bilder werden mit JavaScript in die Seite eingefügt
* Klick auf ein Bild öffnet eine größere Ansicht
* Vor- und Zurück-Buttons
* Navigation mit den Pfeiltasten
* Anzeige, welches Bild gerade geöffnet ist
* Titel und Beschreibung zu jedem Bild
* Schließen über den X-Button
* Schließen durch Klick auf den Hintergrund
* responsive Darstellung für kleinere Bildschirme
* Tastaturbedienung und ARIA-Attribute

## Verwendete Technologien

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* HTML Dialog Element
* Git und GitHub

Ich habe bewusst keine Frameworks verwendet, weil es bei diesem Projekt hauptsächlich darum ging, die Grundlagen von JavaScript und DOM-Manipulation zu üben.

## Projektaufbau

```text
Fotogram/
├── index.html
├── style.css
├── script.js
├── img/
│   ├── photos/
│   ├── full/
│   ├── logo-fotogram.png
│   ├── logo-akademie.png
│   ├── arrow-left.png
│   └── arrow-right.png
└── README.md
```

### index.html

In der `index.html` befindet sich die Grundstruktur der Seite.

Dazu gehören:

* Header
* Hauptbereich
* Galerie
* Footer
* Dialog für die große Bildansicht
* Buttons für Vor, Zurück und Schließen

### style.css

In der `style.css` befindet sich das Design der Seite.

Dort habe ich unter anderem umgesetzt:

* Farben und Abstände
* Größe der Bilder
* responsive Darstellung
* Hover-Effekte
* Fokuszustände
* Gestaltung des Dialogfensters

### script.js

In der `script.js` befindet sich die eigentliche Logik der Galerie.

Die Bilder werden in einem Array gespeichert und anschließend mit JavaScript in die Galerie eingefügt.

```javascript
const PHOTOS = [
    'photo-01.jpg',
    'photo-02.jpg',
    'photo-03.jpg',
    // ...
];
```

Die Funktion `render()` geht durch das Array und erstellt für jedes Bild eine Bildkarte.

```javascript
function render() {
    const contentRef = document.getElementById('fotogram-content');

    contentRef.innerHTML = '';

    for (let i = 0; i < PHOTOS.length; i++) {
        contentRef.innerHTML += getPhotoTemplate(
            PHOTOS[i],
            PHOTO_TITLES[i],
            i
        );
    }
}
```

Wenn ein Bild angeklickt wird, wird der Index des Bildes gespeichert und der Dialog geöffnet.

```javascript
function openDialog(index) {
    currentIndex = index;

    updateDialog();

    dialogRef.showModal();
}
```

Mit `currentIndex` weiß das Programm immer, welches Bild gerade angezeigt wird.

Die Funktionen `showPreviousPhoto()` und `showNextPhoto()` verändern diesen Index und laden danach das passende Bild neu.

## Tastatursteuerung

Wenn der Dialog geöffnet ist, kann man auch mit der Tastatur durch die Bilder wechseln.

* Pfeil links = vorheriges Bild
* Pfeil rechts = nächstes Bild
* Escape = Dialog schließen

## Was ich bei dem Projekt gelernt habe

Bei Fotogram habe ich vor allem folgende Themen geübt:

* Arrays
* Schleifen
* Funktionen
* DOM-Elemente auswählen
* HTML mit JavaScript erzeugen
* Event Listener
* Klick-Events
* Tastatur-Events
* Arbeiten mit einem Index
* Dialoge öffnen und schließen
* responsive CSS
* Accessibility Grundlagen

Besonders wichtig war für mich zu verstehen, wie HTML, CSS und JavaScript zusammenarbeiten.

HTML gibt die Grundstruktur vor, CSS ist für das Aussehen zuständig und JavaScript sorgt dafür, dass die Galerie auf Eingaben reagiert.

## Projekt starten

Repository klonen:

```bash
git clone https://github.com/Genady86/Fotogram.git
```

Danach in den Ordner wechseln:

```bash
cd Fotogram
```

Anschließend kann die `index.html` im Browser geöffnet werden.

Ich benutze während der Entwicklung meistens Live Server in Visual Studio Code.

## Mögliche Erweiterungen

Später könnte ich das Projekt zum Beispiel noch erweitern um:

* Suchfunktion
* Kategorien
* Favoriten
* Dark Mode
* Swipe-Navigation auf dem Smartphone

Im aktuellen Projekt sind diese Funktionen noch nicht enthalten.

## Autor

Genady86

GitHub: https://github.com/Genady86
