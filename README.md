# Structure Firestore

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

## Exemple de structure JSON (consulter le fichier : ex1/db_structur.json)

