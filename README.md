<p align="center">
  <img src="https://res.cloudinary.com/cookit/image/upload/v1605888231/Logos/Logo-Cookit.svg" width="300" />
</p>

---

# Test technique Front-end

English version will follow.


## Mise en place

- Forkez le repository
- Clonez sur votre environnement `git clone`
- roulez `npm i` pour installer les modules node
- roulez `npm start` pour démarrer le projet


## Technologies utilisées

- React (https://reactjs.org/)
- Typescript (https://www.typescriptlang.org/)
- Axios (Validation code postal) (https://github.com/axios/axios)
- Jest (Tests unitaire) (https://jestjs.io/)
- Redux (Langue et Theme) (https://redux.js.org/)
- Styled component (Styling) (https://styled-components.com/)
- i18next (Localization) (https://www.i18next.com/)

---

## Test

Pour compléter le test, vous devez terminer le formulaire d'abonnement selon les critères décrits dans la "User story" suivante:

ETQ utilisateur s'abonnant à Cook it:

- Je m'attend à fournir:
  - Mon courriel
  - Mon code postal
- Je souhaite voir un message d'erreur si mon courriel a un format invalide
- Je souhaite voir un message d'erreur si mon code postal a un format invalide
- Je souhaite voir un message d'erreur si mon code postal n'est pas présent dans la liste des codes postaux disponibles (API: `https://us-central1-interview-zip-code.cloudfunctions.net/zipTest`)
- Je souhaite pouvoir soumettre mes informations et être redirigé vers une page de confirmation
- Je souhaite voir mes informations soumises présentes sur la page page de confirmation

ETQ Code reviewer:

- **Je souhaite voir une pull request compréhensible des changements apportés**

ETQ Développeur travaillant sur ce projet après l'implémentation:

- je souhaite pouvoir rouler les tests unitaires (`npm run test`) pour savoir si mes changements ont causés une régression

### Attention: Il est très important de faire une pull request pour pouvoir identifier votre code du nôtre facilement

---

## API:

```
Usage: validation du code postal

URL: https://us-central1-interview-zip-code.cloudfunctions.net/zipTest

Method: GET
```

Parameters:

| parameter |  type  | required |
| --------- | :----: | -------: |
| zip       | string |    false |

Return:

```
{
    "is_deliverable": boolean,
    "has_error": boolean,
    "error_message": string
}
```

---

## Setup
- Fork the repository
- Clone it in your environment using `git clone`
- Run `npm i` to install node modules
- Run `npm start` to start the project

## Stack used
- React (https://reactjs.org/)
- Typescript (https://www.typescriptlang.org/)
- Axios (Postal Code validation) (https://github.com/axios/axios)
- Jest (Unit tests) (https://jestjs.io/)
- Redux (Theme and languuge) (https://redux.js.org/)
- Styled Components (Styling) (https://styled-components.com/)
- i18next (Localization) (https://www.i18next.com/)

---

## Test

To complete the test, you must complete the subscription form according to the specifications described in the following "user stories":

As a USER subscribing to Cook it:
- I expect to fill out my:
  - Email
  - Postal code
- I would like to see an error message if my email is in an invalid format
- I would like to see an error message if my postal code is in an invalid format
- I would like to see an error message if my postal code isn't in a deliverable zone (API: `https://us-central1-interview-zip-code.cloudfunctions.net/zipTest`)
- I would like to be able to submit my information and to be redirected to a confirmation page
- I would like to see my submitted information in the confirmation page

As a CODE REVIEWER:
- **I would like to see a comprehensible Pull Request with the changes made**

As a DEVELOPER WORKING ON THIS PROJECT AFTER MY IMPLEMENTATION:
- I would like to be able to run unit tests (`npm run test`) to see if my changes have caused any regressions

### Note: It's important to make a Pull Request so that we are able to identify your changes easily.

---

## API:

```
Usage: Postal Code Validation

URL: https://us-central1-interview-zip-code.cloudfunctions.net/zipTest

Method: GET
```

Parameters:

| parameter |  type  | required |
| --------- | :----: | -------: |
| zip       | string |    false |

Return:

```
{
    "is_deliverable": boolean,
    "has_error": boolean,
    "error_message": string
}
```
