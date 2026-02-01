export default class Generator {
  async generateUsers() {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=7&inc=picture,name,location`,
      );
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching users:", error.message);
      throw error;
    }
  }
  async getMainAndFriends() {
    try {
      const users = await this.generateUsers();
      const mainUser = users[0];
      const mainUserData = {
        firstName: mainUser.name.first,
        lastName: mainUser.name.last,
        picture: mainUser.picture.large,
        state: mainUser.location.state,
        city: mainUser.location.city,
      };
      const friends = users.slice(1);
      const friendsData = friends.map((f) => ({
        firstName: f.name.first,
        lastName: f.name.last,
      }));
      return [mainUserData, friendsData];
    } catch (error) {
      console.error("Error fetching users:", error.message);
      throw error;
    }
  }
  async generateKanyeQuote() {
    try {
      const response = await fetch(`https://api.kanye.rest`);
      if (!response.ok) {
        throw new Error("Quote not found");
      }
      const data = await response.json();
      return data.quote;
    } catch (error) {
      console.error("Error fetching Kanye Quote:", error.message);
      throw error;
    }
  }
  async generatePokemon() {
    try {
      const maxPokemon = 1025;
      const randomId = Math.floor(Math.random() * maxPokemon) + 1;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`,
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      const pokemon = {
        name: data.name,
        image: data.sprites.front_default,
      };
      return pokemon;
    } catch (error) {
      console.error("Error fetching Pokemon:", error.message);
      throw error;
    }
  }
  async generateText() {
    try {
      const response = await fetch(
        `https://baconipsum.com/api/?type=meat-and-filler`,
      );
      if (!response.ok) {
        throw new Error("Text not found");
      }
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error("Error fetching Text:", error.message);
      throw error;
    }
  }
}
