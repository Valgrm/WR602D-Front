# Note d'intention — Overdrive

## But du jeu

Overdrive est un jeu de voiture en vue isométrique. Le joueur conduit sur une map circulaire et doit compléter une liste d'objectifs avant que le timer n'expire. S'il réussit, il passe au niveau suivant. S'il échoue (temps écoulé ou vies épuisées), c'est un game over.

## Objectifs en jeu

- **Boules d'énergie** — à ramasser en s'en approchant
- **Anneaux** — à traverser avec la voiture
- **Structures de cubes** — à percuter pour les détruire

## Progression

Les niveaux sont générés aléatoirement (positions, quantité d'objectifs). La difficulté augmente à chaque niveau. Le joueur accumule des points tout au long de la partie.

## Choix de game design

**Vue isométrique fixe** — la caméra ne bouge pas, ce qui simplifie la lecture de la map et évite la désorentation.

**Map circulaire** — élimine les coins morts, force le joueur à se déplacer en continu.

**Timer court + objectifs visibles** — crée de la tension. Le joueur sait toujours quoi faire et combien de temps il lui reste.

**Obstacles avec knockback** — le joueur ne meurt pas immédiatement, il est repoussé et perd une vie. Ça évite des morts frustrantes sur un mauvais angle.

**Génération aléatoire** — rejouabilité.
