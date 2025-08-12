# EX 1 : Structure Firestore

Ce projet décrit la **structure de base de données NoSQL** (Firestore) 

---

## Contexte

Nous avons besoin d’une base de données capable de gérer :

- Des utilisateurs normaux qui peuvent prendre des photos et obtenir un diagnostic avec scores.
- Un historique complet des diagnostics par utilisateur.
- Des comptes professionnels pouvant prendre des photos pour des clients sans identifiant utilisateur, seulement nom, prénom et téléphone.
- Pour chaque diagnostic, la recommandation d’un produit identifié par un code-barres (`barcode`).

---

## Architecture Firestore proposée

### Collections principales

1. **`userInfos`**  
   Contient les documents utilisateurs identifiés par `userId`. Chaque utilisateur a une sous-collection `diagnostics` avec l’historique de ses diagnostics.

2. **`proUsers`**  
   Contient les comptes professionnels (`proUserId`). Chaque compte professionnel a une sous-collection `clients` avec des clients non identifiés (nom, prénom, téléphone). Chaque client possède une sous-collection `diagnostics`.

---

### Images illustratives de la structure Firestore

<img width="1795" height="780" alt="Capture d'écran 2025-08-12 164821" src="https://github.com/user-attachments/assets/02dca61f-d9a4-480c-a186-8e3af7ce4032" />
<img width="1802" height="787" alt="Capture d'écran 2025-08-12 164842" src="https://github.com/user-attachments/assets/1d591504-9bea-4725-8f63-85630b1102fb" />
<img width="1796" height="768" alt="Capture d'écran 2025-08-12 170251" src="https://github.com/user-attachments/assets/e8940f41-8c82-4cec-85bd-ecc431be4b5a" />
<img width="1801" height="771" alt="Capture d'écran 2025-08-12 170322" src="https://github.com/user-attachments/assets/9a53244b-1b9f-4b17-919a-342a4ec12479" />
<img width="1795" height="771" alt="Capture d'écran 2025-08-12 170338" src="https://github.com/user-attachments/assets/e86e4f8c-4796-4ab1-9111-f2a803e2a15d" />

---

## Pour tester le résultat

🌿Vous devez avoir un fichier comme celui-ci : 🌿 
`dbstructure-d73dc-firebase-adminsdk-fbsvc-88eb38654a.json`  

Ce fichier contient les clés secrètes nécessaires pour connecter votre script à votre compte Firestore.

### Comment télécharger ce fichier depuis Firebase Console

1. Allez sur [console.firebase.google.com](https://console.firebase.google.com) et ouvrez votre projet.
2. Dans le menu de gauche, cliquez sur **"Paramètres du projet"** (l’icône d’engrenage).
3. Sélectionnez l’onglet **"Comptes de service"**.
4. Cliquez sur **"Générer une nouvelle clé privée"**.
5. Confirmez le téléchargement du fichier JSON.
6. Placez ce fichier dans le dossier de votre projet local et renommez-le en `dbstructure-d73dc-firebase-adminsdk-fbsvc-88eb38654a.json` ou modifiez le script pour correspondre au nom du fichier.

---

Pour insérer les données, utilisez la commande suivante :  

```bash
node importData.js
