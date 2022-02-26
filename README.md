# Entwicklungsumgebung
+ Node v16.13.0
+ npm v8.1.0

# Secrets
Damit die App korrekt funktioniert müssen alle Secrets in `.env` definiert sein. Wie ihr diese Secrets benennen müsst könnt ihr `.example.env` entnehmen 

# pakete installieren
```console
npm install
```
# Lokale Entwicklung
```console
npm run dev -- --open
```

# Github for VsCode
Um Github in VsCode zu benutzen müsst ihr erst folgende variablen über die Konsole setzen
+ `git config --global user.name "YOUR GITHUB NAME"`
+ `git config --global user.email "YOUR GITHUB EMAIL"`
wenn ihr nun über dem Github Tab in VsCode ein Aktion vornehmt die eine Authentifizierung verlangt (z.B. push) sollte sich ein Popup öffnen über das ihr euch authentifizieren könnt.

# Code Struktur
### Pages
Routing wird von Sveltekit übernommen. Alle Pages befinden sich in `src/routes/`. Pages welche mit der API interagieren tuen dies in einem module context (Schaut euch dafür die [Sveltekit load function](https://kit.svelte.dev/docs/loading) an)

### Components
Komponenten welche an mehreren Stellen reused werden findet ihr in `src/lib/components`

### Dirty Hacks
Da wir zu lazy waren ein login System zu implementieren wird das aktuelle CERT und der aktuelle USER durch einen Svelte Store `src/lib/stores/index.js` vorgegaugeklt

### Datenbank
Wir verwenden eine MongDB Atlas DB über welche wir mit Mongooose kommunizieren.
Die Mongoose Connection und Schemata sowie DefaultWerte für Schemata befinden sich in `src/lib/mongoose/...`.
Die Kommunikation mit der Datenbank findet über eine eigene API statt welche in `src/routes/api/...` definiert ist und ähnlich wie reguläre pages auf Sveltekit Routing basiert.
Das Schema der DB findet ihr in DB-Schema.svg im root

### Social Media API integration
Um die Nachrichten über Email/Reddit/Twitter zu verbreiten steht die einheitliche Schnittstelle `sendAlert` in `src/lib/channels/index.js` zur Verfügung. Diese ruft dann abhängig von `channelName` die Platform spezifische API integration auf.
