class Generator {
  async generateUsers() {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=7`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  }
}
