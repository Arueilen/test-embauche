# Exercice 1
1. Créer un serveur HTTP "dogs" avec express qui permet de créer, lister, récupérer et mettre à jours des Chiens. Ils seront caractérisés par leurs "nom" et "id"
2. Créer un serveur HTTP "owners" avec express qui permet de créer, lister, récupérer et mettre à jours des Propriétaires. Ils seront caractérisés par leurs "nom", "prénom", "civilité", "age" et "id"
3. Créer un serveur HTTP "api" avec express qui permet lister les propriétaires avec tous leurs chiens. 
Voici un exemple de donnée retour:
```json
[
    {
        "nom": "Alex",
        "prenom": "Terrieur",
        "civilite": "M",
        "age": "29",
        "id": 1,
        "dogs": [
            {
                "nom": "Jarvis",
                "id": "1"
            }
        ]
    },
    {
        "nom": "Alain",
        "prenom": "Proviste",
        "civilite": "M",
        "age": "12",
        "id": 2,
        "dogs": [
            {
                "nom": "Hercule",
                "id": "2"
            },
            {
                "nom": "Hermès",
                "id": "3"
            }
        ]
    }
]
```
4. Ce serveur HTTP doit également être capable de créer un Propriétaire, de créer un Chien et de l'associer à un propriétaire (la création du Chien peut se faire dans la même route que l'association si tu veux)

Tu peux utiliser la base de donnée que tu souhaites, celle qui est installée sur ta machine

# Exercice 2

1. Si ce n'est déjà fait, utilise les [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) javascript dans ces 3 applications, ainsi que de l'[ES6](http://es6-features.org/)
2. Une fois que les Promise sont faites, transforme les en [Async/Await](https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)

# Exercice 3

1. Plutôt que d'utiliser la base de donnée qui est installée sur ta machine, installe cette base de donnée via un docker, et utilise là

# Exercice 4

1. Utilise le Dockerfile fourni dans ce projet (normalement, tu ne devrais pas avoir à le toucher) pour que tes 3 applications tournent chacune dans un Docker plutôt que directement sur ta machine. Chacun de ces Docker
2. Une fois que tes 3 images Docker sont "buildées", "run" ces images pour vérifier que les appels HTTP marchent toujours. (/!\ Tu va devoir utiliser les variables d'environnement de Node pour configurer l'adresse Url)

# Exercice 5

1. Créé un docker-compose.yaml pour faciliter le "build" et le "run" de ces 3 images

# Exercice 6

1. Transforme tes 2 applications "dogs" et "owner" en serveur rabbitmq (il va falloir que tu modifie les appels d'"api" vers ces micro-services)
