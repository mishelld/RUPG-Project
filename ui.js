export default class Renderer {
  render(usersData, quote, pokemon, text) {
    const [mainUserData, friendsData] = usersData;
    this.renderUser(mainUserData);
    this.renderFriends(friendsData);
    this.renderQuote(quote);
    this.renderPokemon(pokemon);
    this.renderText(text);
  }
  renderUser(userData) {
    const image = document.querySelector("header img");
    const name = document.querySelector("header h1");
    const location = document.querySelector("header h3");
    image.src = userData.picture;
    name.innerText = userData.firstName + " " + userData.lastName;
    location.innerText = userData.city + ", " + userData.state;
  }
  renderFriends(friendsData) {
    const list = document.querySelector("aside ul");
    for (const key of Object.keys(friendsData)) {
      const li = document.createElement("li");
      li.innerText =
        friendsData[key].firstName + " " + friendsData[key].lastName;
      list.appendChild(li);
    }
  }
  renderQuote(quote) {
    const quoteEl = document.querySelector(".quote p");
    quoteEl.innerText = quote;
  }
  renderPokemon(pokemon) {
    const image = document.querySelector(".pokemon img");
    const name = document.querySelector(".pokemon p");
    image.src = pokemon.image;
    name.innerText = pokemon.name;
  }
  renderText(text) {
    const p = document.querySelector(".about p");
    p.innerText = text;
  }
}
