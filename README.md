# Exercice Express / BDD
1. Crée un projet "dogs" qui sera un serveur HTTP express.

Ce serveur sera connecté à une base de donnée de ton choix.

Il doit être capable de créer et lister des Chiens. (tu peux mettre ce que tu veux comme url)

Ces "Chiens" seront caractérisés par leurs "nom", "id" et "owner_id".

Un filtre sur l'owner_id doit être possible sur le listing des chiens.

Chaque route doit retourner du json.

2. Crée un projet "owners" qui sera un autre serveur HTTP express.

Ce serveur sera connecté à une base de donnée de ton choix. Tu n'es pas obligé d'utiliser la même base de donnée que l'exercice 1 si t'aimes le challenge :)

Il doit être capable de créer et lister des Propriétaires. (tu peux mettre ce que tu veux comme url)

Les Propriétaires seront caractérisés par leurs "nom", "prenom", "civilite", "age" et "id".

Un filtre sur "nom" et/ou "prénom" et/ou "civilité" et/ou "age" doit être possible sur le listing des propriétaires.

Chaque route doit retourner du json

3. Crée un projet "api" qui sera un 3ème serveur HTTP express.

Il doit être capable de lister (avec filtres possibles) les propriétaires avec tous leurs chiens, créer un propriétaire et créer un chien en l'associant à son propriétaire. (tu peux mettre ce que tu veux comme url)

Voici un exemple de donnée retour pour le listing:
```json
[
    {
        "nom": "Terrieur",
        "prenom": "Alex",
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
        "nom": "Suhre",
        "prenom": "Sarah",
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

Je te conseille d'utiliser Postman pour tester tes appels de création, plus pratique qu'avec du curl.

# Exercice Promise / ES6

1. Si ce n'est déjà fait, utilise les [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) javascript dans ces 3 applications plutôt que des callback, ainsi que de l'[ES6](http://es6-features.org/)

2. Une fois que les Promise sont faites, transforme celles possible en [Async/Await](https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016)

# Exercice Docker

1. Plutôt que d'utiliser la (les?) base de donnée qui est installée sur ta machine, [installe cette base de donnée via un docker](https://docs.docker.com/engine/reference/commandline/pull/), coupe ta BDD sur ta machine et [run](https://docs.docker.com/engine/reference/run/) l'image docker que tu vient d'installer.

2. Vérifie que tes applications tournent toujours

3. Utilise le Dockerfile fourni dans ce projet pour [builder](https://docs.docker.com/engine/reference/commandline/build/) tes 3 applications dans un Docker plutôt que directement sur ta machine. Tu ne devrais pas avoir à toucher le Dockerfile.

4. Une fois que tes 3 images Docker sont buildées, run ces images pour vérifier que les appels HTTP marchent toujours. 

/!\ Les Docker étant des machines virtuelle, elles n'arriveront pas à communiquer entre elles via `localhost` ou `127.0.0.1`. Tu va devoir user de tes talents, mais surtout des variables d'environnements et des options du `docker run` pour que tes applications puissent se connecter à ta base de données, et que ton application "api" puissent contacter "dogs" et "owner"

# Exercice docker-compose

1. Créé un docker-compose.yaml pour lancer ta (tes?) base de données, et faciliter le "build" et le "run" de tes 3 applications (que ce soit au niveau des ports mais aussi des variables d'environnements)
2. Lance ce docker-compose pour vérifier que tes applications tournent toujours.

## Félicitations ! T'as créé une architecture microservice !
