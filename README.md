# Projet_multi
##Projet de multimédia CMI printemps 2016
###Etat d'avancement :
-Toute les question ont été traitées
###Fonctionnement :
Par défaut le fichier HTML lance le projet avec le moteur pour lancer les première
version il faut mettre en commentaire l'include de Test_moteur.js et enlever l'include
de common.js
Pour lancer la partie on appuie sur le bouton jouer.
Si on réappuie alors que tout les joueurs sont en vie le jeu se mets en pause.
Sinon le jeu recommence.
Dans je fichier Test_moteur.js en modifiant les lignes 2 et 3 on peut changer le
type des joueur présent.
Type disponible:
-humain
  -IA_1
  -IA_2
  -IA_3
  -IA_4
  -IA_5
###Fonctionnement des IA :
-IA_1 :
  IA basique qui cherche à toujours se diriger vers le haut
-IA_2 :
  IA à déplacement aléatoire
-IA_3 :
  IA qui cherche à toujours prendre le chemin le plus viable c'est à dire le chemin
  potentiellement le plus long pour éviter de se retrouvé bloquer dansune impasse
-IA_4 :
  IA qui va chercher à être le plus loin possible de la tete de l'autre snake
-IA_5 :
  IA qui va chercher à être le plus proche possible de la tete de l'autre snake

-Idée d'IA :
  Une IA qui va chercher à encercler le snake adverse

La rercherche de chemin des IA 3,4,5 est faite grace à l'algorithme de dijkstra
qui recherche le plus cours chemin entre une source et les autre point de l'arene
