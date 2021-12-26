import { authService } from "./authService";
import { userService } from "./userService";
import { roomService } from "./roomService";

const services = {
  ...authService,
  ...userService,
  ...roomService,
};

export default services;
