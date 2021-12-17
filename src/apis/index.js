import { authService } from "./authService";
import { userService } from "./userService";

const services = {
  ...authService,
  ...userService,
};

export default services;
