// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
/* l'ordre est de 2, 3, 1 car il lance la premiere fonction et donc le timer et passe a la suite et lance les autres
 timers en attendant que le premier soit finit pour afficher le message
 */
function first() {
  return sleep(300).then(() => {console.log('message 1');});
}

function second() {
  return sleep(100).then(() => {console.log('message 2');});
}

function third() {
  return sleep(200).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

//first().then(second).then(third); exo
first().catch(secondWithError).then(third);


function species () {
  fetch('https://swapi.dev/api/species/1')
      .then(response => response.json())
      .then(data => {
          const peoplePromises = [];
          for(const [key, value] of Object.entries(data)){
              if (key === 'people') {
                  for (const url of value) {
                      peoplePromises.push(fetch(url).then(response => response.json()));
                  }
              }
          }
          Promise.all(peoplePromises)
              .then(peopleData => {
                  console.log(peopleData);
              });
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
}

function bouton (){
    return promise
    return echec
}

species() ;