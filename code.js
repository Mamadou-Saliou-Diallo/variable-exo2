  // Types de variables et leurs caractéristiques
  const types = {
    "string": {
        exemple: "Ceci est une chaîne de caractères.",
        description: "Une séquence de caractères, utilisée pour représenter du texte."
    },
    "number": {
        exemple: 42,
        description: "Représente des valeurs numériques, que ce soit des entiers ou des flottants."
    },
    "boolean": {
        exemple: true,
        description: "Peut être soit vrai (true) soit faux (false), souvent utilisé pour les conditions."
    },
    "null": {
        exemple: null,
        description: "Représente une valeur vide ou l'absence d'objet."
    },
    "undefined": {
        exemple: undefined,
        description: "Indique qu'une variable a été déclarée mais n'a pas encore de valeur."
    },
    "symbol": {
        exemple: Symbol("symbole"),
        description: "Un type de donnée unique et immuable, souvent utilisé comme identifiant."
    },
    "object": {
        exemple: { nom: "Alice", age: 30 },
        description: "Une collection de propriétés, chaque propriété étant une paire clé-valeur."
    },
    "array": {
        exemple: [1, 2, 3, 4, 5],
        description: "Un type d'objet qui représente une liste ordonnée de valeurs."
    }
};

// Événement au clic du bouton
document.getElementById('submitButton').addEventListener('click', () => {
    const input = document.getElementById('inputType').value.trim().toLowerCase(); // Convertir en minuscule
    const info = types[input];

    const output = document.getElementById('output');
    output.innerHTML = ''; // Réinitialiser le contenu

    if (info) {
        output.innerHTML = `
            <div class="variable-type">
                <h2>${input.charAt(0).toUpperCase() + input.slice(1)}</h2>
                <p><strong>Exemple :</strong> ${JSON.stringify(info.exemple)}</p>
                <p class="description"><strong>Description :</strong> ${info.description}</p>
            </div>
        `;
    } else {
        output.innerHTML = `<p style="color: red;">Type non reconnu. Veuillez entrer un type valide (String, Number, etc.).</p>`;
    }
});