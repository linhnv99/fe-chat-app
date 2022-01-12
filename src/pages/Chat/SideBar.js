import React, { useEffect, useState } from "react";
import SearchBox from "../../components/Chat/SearchBox";
import SideContainer from "../../components/layout/SideContainer";
import { useSelector } from "react-redux";
import ChatItem from "../../components/Chat/ChatItem";
import UserItem from "../../components/Chat/UserItem";
import User from "../../components/Chat/User";

const SideBar = ({ rooms, onSelectingUser }) => {
  const users = useSelector((state) => state.userReducer.users);
  const [userFilter, setUserFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (users.length !== 0) {
      setUserFilter(users);
    }

    if (search.trim() === "") {
      setUserFilter(users);
      return;
    }
    const afterFilter = users.filter((it) =>
      it.username.toLowerCase().includes(search.trim().toLowerCase())
    );
    setUserFilter(afterFilter);
  }, [users, search]);

  const name = localStorage.getItem("username");

  return (
    <SideContainer>
      <User name={name} />
      <SearchBox search={search} setSearch={setSearch} />
      {search &&
        userFilter.length > 0 &&
        userFilter.map((user, index) => (
          <UserItem
            user={user}
            key={index}
            avt={index + 1}
            setSearch={setSearch}
            onSelectingUser={onSelectingUser}
          />
        ))}
      {/* Conversation */}
      {!search &&
        rooms.length > 0 &&
        rooms.map((room, index) => (
          <ChatItem room={room} key={index} avt={index + 1} />
        ))}
    </SideContainer>
  );
};

export default SideBar;
