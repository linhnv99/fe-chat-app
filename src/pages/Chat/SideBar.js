import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatItem from "../../components/Chat/ChatItem";
import SearchForm from "../../components/Chat/SearchForm";
import { getAll } from "../../store/actions/user";

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
    <div id="plist" className="people-list">
      <ul className="list-unstyled chat-list mt-2 mb-0">
        <SearchForm search={search} setSearch={setSearch} />
        {userFilter.length > 0 &&
          userFilter.map((user, index) => (
            <ChatItem user={user} key={index} avt={index + 1} />
          ))}
      </ul>
    </div>
  );
};

export default SideBar;
