import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import user from "data/user"
import data from "data/data"
// import friends from "data/friends"
// import transactions from "data/transactions"

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title = "Upload Stats" stats={ data } />

    </>
  );
};
