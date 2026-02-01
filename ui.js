export default class Renderer {
  renderUser(userData) {
    const image = document.querySelector("header img");
    const name = document.querySelector("header h1");
    const location = document.querySelector("header h3");
    image.src = userData.picture;
    name.innerText = userData.firstName + " " + userData.lastName;
    location.innerText = userData.city + ", " + userData.state;
  }
}
