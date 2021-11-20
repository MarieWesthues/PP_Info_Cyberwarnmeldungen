# Entwicklungsumgebung
+ Node v16.13.0
+ npm v8.1.0

# Secrets
Damit die App korrekt funktioniert müssen alle Secrets in `.env` definiert sein. Wie ihr diese Secrets benennen müsst könnt ihr `.example.env` entnehmen 

# pakete installieren
```console
npm install
```

# Github for VsCode
Um Github in VsCode zu benutzen müsst ihr erst folgende variablen über die Konsole setzen
+ `git config --global user.name "YOUR GITHUB NAME"`
+ `git config --global user.email "YOUR GITHUB EMAIL"`
wenn ihr nun über dem Github Tab in VsCode ein Aktion vornehmt die eine Authentifizierung verlangt (z.B. push) sollte sich ein Popup öffnen über das ihr euch authentifizieren könnt.

# Lokale Entwicklung
```console
npm run dev -- --open
```
