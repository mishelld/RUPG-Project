export default class Renderer {
  constructor() {
    this.container = document.querySelector(".container");
    this.errorbox = document.querySelector(".error");
    this.errorp = document.querySelector(".error p");
    this.userImage = document.querySelector("header img");
    this.userName = document.querySelector("header h1");
    this.userLocation = document.querySelector("header h3");
    this.friendsList = document.querySelector("aside ul");
    this.quoteEl = document.querySelector(".quote p");
    this.pokeImage = document.querySelector(".pokemon img");
    this.pokeName = document.querySelector(".pokemon p");
    this.p = document.querySelector(".about p");
    this.menu = document.querySelector(".menu");
  }

  render(usersData, quote, pokemon, text) {
    const [mainUserData, friendsData] = usersData;
    this.renderUser(mainUserData);
    this.renderFriends(friendsData);
    this.renderQuote(quote);
    this.renderPokemon(pokemon);
    this.renderText(text);
    this.renderLocalStorage();
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
    this.pokeName.innerText =
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  }
  renderText(text) {
    this.p.innerText = text;
  }
  renderError(error) {
    this.container.classList.add("hidden");
    this.errorbox.classList.remove("hidden");
    this.errorp.innerText = error;
  }
  saveUserPage(usersData, quote, pokemon, text) {
    let users = JSON.parse(localStorage.getItem("RUPG-users")) || {};
    console.log(users);
    const pageData = { usersData, quote, pokemon, text };
    const userName = usersData[0].firstName + " " + usersData[0].lastName;
    users[userName] = pageData;
    localStorage.setItem("RUPG-users", JSON.stringify(users));
    this.renderLocalStorage();
  }
  renderLocalStorage() {
    this.menu.innerHTML = "";
    const users = JSON.parse(localStorage.getItem("RUPG-users")) || {};
    if (Object.keys(users).length === 0) {
      this.menu.innerHTML = "Saved users not found.";
    }
    for (const user of Object.keys(users)) {
      const li = document.createElement("li");
      li.innerText = user;
      li.addEventListener("click", () => {
        this.loadUserPage(user);
      });
      this.menu.appendChild(li);
    }
  }
  loadUserPage(user) {
    const users = JSON.parse(localStorage.getItem("RUPG-users")) || {};
    const savedUser = users[user];
    this.render(
      savedUser.usersData,
      savedUser.quote,
      savedUser.pokemon,
      savedUser.text,
    );
  }
  showMenu() {
    this.menu.classList.toggle("hidden");
  }
}
