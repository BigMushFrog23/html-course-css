
# Documentation sur les Balises et Attributs HTML

## Introduction aux balises et attributs HTML

HTML (*Hypertext Markup Language*) est le langage de base pour structurer le contenu d'une page web. Les balises (ou tags) HTML sont utilisées pour définir différents types de contenu, et les attributs permettent de spécifier des informations supplémentaires sur ces balises.

### Structure d'une balise HTML

Une balise HTML de base s'écrit sous la forme suivante :

```html
<tagname attribut="valeur">Contenu de la balise</tagname>
```

- **`<tagname>`** : Le nom de la balise, comme `div`, `p`, `a`, etc.
- **Attribut** : Les attributs sont des informations supplémentaires insérées à l'intérieur de la balise d'ouverture. Ils prennent la forme `attribut="valeur"`.
- **Contenu** : Ce que contient la balise, comme le texte ou d'autres balises HTML.
- **Balise de fermeture** : Certaines balises nécessitent une balise de fermeture `</tagname>` pour indiquer la fin de leur contenu.

### Balises HTML courantes

Voici quelques balises HTML essentielles et leurs utilisations :

1. **Titres** (`<h1>` à `<h6>`)  
   Utilisées pour structurer les titres. `<h1>` est le plus grand, et `<h6>` est le plus petit.

   ```html
   <h1>Titre principal</h1>
   <h2>Sous-titre</h2>
   ...
   <h6>sous-titre</h6>
   ```

2. **Paragraphes** (`<p>`)  
   Définit un paragraphe de texte.

   ```html
   <p>Ceci est un paragraphe de texte.</p>
   ```

3. **Liens** (`<a>`)  
   Crée un lien hypertexte. Utilise l'attribut `href` pour définir l'URL de destination.

   ```html
   <a href="https://example.com">Visitez notre site</a>
   ```

4. **Images** (`<img>`)  
   Affiche une image. Nécessite l'attribut `src` pour l'URL de l'image et `alt` pour une description de l'image.

   ```html
   <img src="image.jpg" alt="Description de l'image">
   ```

5. **Listes** (`<ul>`, `<ol>`, `<li>`)  
   - **Listes non ordonnées** (`<ul>`) et **listes ordonnées** (`<ol>`) sont des conteneurs de listes.
   - **Élément de liste** (`<li>`) : Contenu de chaque élément de la liste.

   ```html
   <ul>
     <li>Élément de liste</li>
     <li>Un autre élément</li>
   </ul>
   ```

6. **Divisions et sections** (`<div>` et `<section>`)  
   - **`<div>`** est une division générique, souvent utilisée pour grouper du contenu.
   - **`<section>`** définit une section logique.

   ```html
   <div>
       <p>Contenu dans une division</p>
   </div>
   ```

### Attributs HTML courants

Les attributs ajoutent des détails aux balises. Voici les principaux attributs HTML avec exemples :

1. **`id`**  
   Un identifiant unique pour une balise, utilisé pour le style CSS ou les scripts JavaScript.

   ```html
   <p id="intro">Texte d'introduction</p>
   ```

2. **`class`**  
   Attribut qui permet de regrouper plusieurs éléments pour leur appliquer des styles ou des actions communes.

   ```html
   <p class="important-text">Texte important</p>
   ```

3. **`href`**  
   Spécifie l'URL d'un lien, utilisé dans `<a>`.

   ```html
   <a href="https://example.com">Lien vers un site</a>
   ```

4. **`src`**  
   Définit la source d'une ressource externe, comme une image.

   ```html
   <img src="image.jpg" alt="Image">
   ```

5. **`alt`**  
   Description alternative pour les images, utile pour l'accessibilité.

   ```html
   <img src="image.jpg" alt="Description de l'image">
   ```

6. **`style`**  
   Permet d'ajouter des styles CSS directement à l'intérieur d'une balise.

   ```html
   <p style="color: blue;">Texte en bleu</p>
   ```

7. **`target`**  
   Spécifie où ouvrir un lien, par exemple dans une nouvelle fenêtre avec `_blank`.

   ```html
   <a href="https://example.com" target="_blank">Ouvrir dans un nouvel onglet</a>
   ```

8. **`title`**  
   Fournit une information sous forme d'info-bulle au survol de l'élément.

   ```html
   <p title="title-text">Texte visible</p>
   ```

### Exemple concret

Voir code de la page index.
