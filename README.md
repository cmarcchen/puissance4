# Projet Puissance 4

Votre objectif est de créer un jeu de puissance 4 dans le navigateur, tour par tour.
Le jeu doit afficher la partie, permettre au joueur de jouer chacun leur tour, et détecter une victoire.
Le jeu doit comptabiliser les victoires des joueurs jaunes et rouges au cours du temps
L'état du jeu doit persister même en rafraichissant la page

## Technologies

- React
- Jest, (Cypress)
- LocalStorage

- Lancer le projet `npm start`
- Lancer les tests `npm test`
- Ouvrir cypress `npx cypress open`

## Fonctionnalités essentielles

- Afficher l'état du jeu
- Permettre au prochain joueur de jouer
- Détecter une victoire
- Empêcher un move interdit
- Se souvenir de l'état de la partie en cas de rechargement de la page

## Fonctionnalités supplémentaires (idées, n'hésitez pas à implémenter les votres)

- Sauvegarde de l'état de la partie dans une chaine de caractère ou dans l'url
- Amélioration de l'interface graphique pour la rendre la plus agréable et esthétique possible
- Multijoueur sur le réseau
- Jouer contre une AI / l'ordinateur

## Barème et notation

- Le plus important est la qualité du code et la qualité des tests. Préférez implémenter moins de fonctionnalités mais mieux.

| Topic                   | Points     |
| ----------------------- | ---------- |
| Project features        | 8          |
| Unit tests              | 4          |
| E2E & Integration tests | 4          |
| Code quality : naming   | 1          |
| Code quality : general  | 3          |
| Git usage               | +2 (Bonus) |
