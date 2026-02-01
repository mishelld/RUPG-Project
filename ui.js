export default class Renderer {
  constructor() {
    this.container = document.querySelector(".container");
    this.errorbox = document.querySelector(".error p");
    this.userImage = document.querySelector("header img");
    this.userName = document.querySelector("header h1");
    this.userLocation = document.querySelector("header h3");
    this.friendsList = document.querySelector("aside ul");
    this.quoteEl = document.querySelector(".quote p");
    this.pokeImage = document.querySelector(".pokemon img");
    this.pokeName = document.querySelector(".pokemon p");
    this.p = document.querySelector(".about p");
  }

  render(usersData, quote, pokemon, text) {
    const [mainUserData, friendsData] = usersData;
    this.renderUser(mainUserData);
    this.renderFriends(friendsData);
    this.renderQuote(quote);
    this.renderPokemon(pokemon);
    this.renderText(text);
  }
  renderUser(userData) {
    this.userImage.src = userData.picture;
    this.userName.innerText = userData.firstName + " " + userData.lastName;
    this.userLocation.innerText = userData.city + ", " + userData.state;
  }
  renderFriends(friendsData) {
    this.friendsList.innerHTML = "";
    for (const key of Object.keys(friendsData)) {
      const li = document.createElement("li");
      li.innerText =
        friendsData[key].firstName + " " + friendsData[key].lastName;
      this.friendsList.appendChild(li);
    }
  }
  renderQuote(quote) {
    this.quoteEl.innerText = quote;
  }
  renderPokemon(pokemon) {
    this.pokeImage.src = pokemon.image;
    this.pokeName.innerText = pokemon.name;
  }
  renderText(text) {
    this.p.innerText = text;
  }
  renderError(error) {
    this.container.classList.add(".hidden");
    this.errorbox.classList.remove(".hidden");
    this.errorbox.innerText = error;
  }
}
