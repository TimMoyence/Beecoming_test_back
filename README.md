# Application des Capitales de Pays

Cette application backend, développée par Tim Moyence, permet de récupérer les capitales des différents pays. Elle est conçue pour être utilisée avec une interface utilisateur qui affiche les informations.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- PostgreSQL
- Sqitch
- Node.js (si applicable)

## Configuration initiale

1. **Cloner le dépôt :**

   ```bash
   git clone git@github.com:TimMoyence/Beecoming_test_back.git
   cd capitales
   ```

2. **Configurer l'environnement :**
   Copiez le fichier `.env.exemple` en `.env` et modifiez les variables d'environnement selon votre configuration.
   ```bash
   cp .env.exemple .env
   ```

## Mise en place de la base de données

1. **Créer la base de données PostgreSQL :**
   Assurez-vous que PostgreSQL fonctionne sur votre machine. Créez la base de données utilisée par l'application :

   ```bash
   psql -U nom_utilisateur -c "CREATE DATABASE nom_base_de_donnees;"
   ```

2. **Déployer les migrations avec Sqitch :**
   Naviguez jusqu'au dossier où se trouvent les fichiers de migration Sqitch.
   ```bash
   sqitch deploy db:pg:nom_base_de_donnees
   ```

## Insertion des données initiales

Exécutez les scripts SQL fournis pour peupler la base de données avec les données initiales des capitales des pays.

```bash
psql -U nom_utilisateur -d nom_base_de_donnees -a -f chemin/vers/le/fichier/data.sql
```

## Lancement de l'application

Détaillez les commandes pour lancer l'application :

```bash
node app.js  # Exemple pour une application Node.js
```

## Contribution

Des contributions sont toujours les bienvenues ! Pour contribuer à ce projet, veuillez forker le dépôt, créer une nouvelle branche, et soumettre une pull request.

## Licence

Any
