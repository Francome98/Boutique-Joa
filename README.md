# Ferme des Trois Sillons – Boutique

Site statique (HTML, CSS, JavaScript), sans étape de build.

## Structure

- `index.html` : la page
- `css/style.css` : le style
- `js/products.js` : le catalogue (produits, prix, catégories)
- `js/app.js` : l'affichage, les filtres et le panier
- `_headers` : en-têtes HTTP pour Cloudflare Pages

## Tester en local

    python3 -m http.server 8000

Ouvrez ensuite http://localhost:8000.

## Mettre en ligne

1. Poussez ce dossier sur GitHub.
2. Dans Cloudflare : Workers & Pages > Create > Pages > Connect to Git.
3. Choisissez le dépôt, puis laissez **Build command** vide et mettez **Build output directory** à `/`.
4. Cliquez sur Save and Deploy.

Chaque `git push` sur la branche `main` redéploie le site.
