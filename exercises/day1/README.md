# Day 1

## [1] Crea un bootstrapper per il progetto

Node.js app per creare i file iniziali, con contenuto. I files per aiutarti si trovano nella cartella `node-cli`. Per eseguire il file usa `node index.js`.

### Specifiche

Questo CLI tool dovrebbe:

- Creare i dotfiles (`.env.sample`, `.eslintignore`, `.eslintrc.js`, `.prettierc.js`, `.prettierignore`)
- Creare le cartelle `src/pages`
- Creare `src/pages/index.jsx`
- Copiare `package.json` nella `node-cli` folder

## [2] Aggiungere un Layout alla pagina iniziale

### Specifiche

- Creare una cartella `components` in `src`
- Creare dentro `components` il nostro layout utilizzando `Layout/index.jsx`
- Aggiungere al layout una navbar utilizzando components da `chakra-ui`
- Applicare il layout a `pages/index.jsx`
