import { ENUM } from "./index";

const me = localStorage.getItem("me");

const convertRoom = (rooms) => {
  const me = localStorage.getItem("me");
  return rooms.map((room) => {
    const userPaired = room.users.find((it) => it._id !== me);
    const namePaired = userPaired ? userPaired.username : "ME";
    const roomName =
      room.type === ENUM.ROOM_TYPE.GROUP ? room.name : namePaired;
    return {
      id: room._id,
      name: roomName,
      type: room.type,
      lastMessage: room.last_message,
      users: room.users,
    };
  });
};

const checkExistNGetRoom = (rooms, userId) => {
  let room;
  rooms.forEach((r) => {
    if (r.type === ENUM.ROOM_TYPE.PAIR) {
      r.users.forEach((u) => {
        if (u._id === userId) {
          room = r.id;
        }
      });
    }
  });
  return room;
};

const getRoomById = (rooms, id) => {
  return rooms.find((room) => room.id === id);
};

export { me, convertRoom, getRoomById, checkExistNGetRoom };
