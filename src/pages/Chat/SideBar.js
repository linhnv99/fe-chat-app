import React, { useEffect, useState } from "react";
import SearchBox from "../../components/Chat/SearchBox";
import SideContainer from "../../components/layout/SideContainer";
import { useSelector } from "react-redux";
import ChatItem from "../../components/Chat/ChatItem";

const SideBar = () => {
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

  return (
    <SideContainer>
      <SearchBox search={search} setSearch={setSearch} />
      {userFilter.length > 0 &&
        userFilter.map((user, index) => (
          <ChatItem user={user} key={index} avt={index + 1} />
        ))}
    </SideContainer>
  );
};

export default SideBar;
