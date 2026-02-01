import Renderer from "./ui.js";
import Generator from "./model.js";
const generator = new Generator();
const renderer = new Renderer();
const [user, friend] = await generator.getMainAndFriends();
renderer.renderUser(user);
