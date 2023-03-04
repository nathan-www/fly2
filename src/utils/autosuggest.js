export function autosuggest(text) {
  return new Promise((resolve, reject) => {
    fetch("https://nathanarnold.co.uk/fly2/api/autofill/?text=" + text)
      .then((resp) => resp.json())
      .then((resp) => {
        resolve(resp.places);
      });
  });
}
