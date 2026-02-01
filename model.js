class Generator {
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
      return { mainUserData, friendsData };
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  }
}
/*
const generator = new Generator();

const users = await generator.getMainAndFriends();
console.log(users);
*/
