import { io } from "socket.io-client";
import { BASE_URL } from "../constants";
import { credential } from "../services/request";

export const Socket = (function () {
  var instance;
  return {
    getInstance: function () {
      if (!instance) {
        instance = io(BASE_URL, {
          auth: {
            token: credential.getToken(),
          },
        });
      }
      instance.on("connect", () => {
        console.log("connected: ", instance.id);
      });
      return instance;
    },
    clearInstance: function () {
      // clear instance and every event
      instance = null;
    },
  };
})();
