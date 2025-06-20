# 📋 React Frontend - Application To-Do List

Ce projet est le frontend d'une application de gestion de tâches (To-Do List) réalisée avec React. Il permet à un utilisateur de créer, modifier, filtrer et supprimer des tâches, avec gestion des catégories et des statuts (terminée ou non). L’application communique avec une API Django REST.

---

## 📁 Prérequis

Avant de commencer, assurez-vous d’avoir les outils suivants installés sur votre machine :

* **Node.js** (version 18 ou supérieure recommandée) : [https://nodejs.org](https://nodejs.org)
* **npm** (installé automatiquement avec Node.js)
* Un **serveur backend Django REST** fonctionnel à l'adresse suivante :
  `http://localhost:8000/api/`

---

## 🚀 Installation et démarrage

### 1. Cloner le projet

```bash
git clone https://github.com/kenza15a/todoList-examen-react

```

### 2. Installer les dépendances

```bash
npm install
# ou avec yarn
yarn install
```

### 3. Vérifier ou modifier l’adresse du backend

Dans le fichier `src/utils/apiServices.js`, vérifiez que l’URL correspond à celle de votre backend :

```js
const BASE_URL = "http://localhost:8000/api";
```

> Si votre backend est hébergé ailleurs, remplacez cette URL par celle du serveur.

### 4. Lancer le serveur de développement

```bash
npm start
# ou
yarn start
```

Accédez à l’application à l’adresse : [http://localhost:3000](http://localhost:3000)

---

## 🧠 Fonctionnalités

* ✅ Créer une tâche
* ✏️ Modifier une tâche existante
* 🗑️ Supprimer une tâche
* 🔍 Filtrer les tâches par **catégorie**
* 📌 Filtrer les tâches par **statut** (Terminée / Non terminée)
* 🆕 Ajouter une **catégorie**
* 🧾 Validation des champs avec messages d’erreurs affichés en direct

---

## 🧹 Structure du projet

```
src/
│
├── components/
│   ├── Filters/            # Contient CategoryFilter, IsCompletedFilter, etc.
│   ├── Footer/             # Footer component
│   ├── Forms/              # TaskForm, CategoriesForm
│   ├── Modal/              # Modal.jsx
│   ├── Navbar/             # Navbar.jsx
│   ├── TaskFormSection/    # Composant principal d’affichage
│   ├── TaskItem/           # Chaque tâche individuelle
│   ├── TasksList/          # Liste des tâches
│   └── Ui/                 # Boutons, composants réutilisables (Button, Select, etc.)
│
├── pages/                  # Pages complètes comme HomePage
├── uils/                   # Fichiers utilitaires (apiServices.js, etc.)
├── App.jsx
├── App.css
└── index.js

```

---

## ❓ En cas de problème

* Vérifiez que le backend Django fonctionne bien (commande `python manage.py runserver`)
* Assurez-vous que le CORS est activé sur le backend pour autoriser les appels depuis le frontend
* Consultez la console du navigateur (`F12 > Network`) pour identifier les erreurs API

---

## 📄 Licence

Ce projet est open-source et libre pour usage personnel, académique ou de démonstration.
Aucune responsabilité n’est garantie pour un usage en production sans adaptation.

---

## 👨‍💼 Auteur

Développé  par KENZA FILALI
