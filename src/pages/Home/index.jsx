import { useState } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { MessagePreview } from "../../components/MessagePreview";
import { Post } from "../../components/Post";
import styles from "./Home.module.scss";

const friends = [
  { name: "Chandler", photo: "https://randomuser.me/api/portraits/lego/5.jpg" },
  { name: "Pippo", photo: "https://randomuser.me/api/portraits/lego/7.jpg" },
  { name: "Geralt", photo: "https://randomuser.me/api/portraits/lego/8.jpg" },
];

const messages = [
  { text: "lorem ipsum", date: new Date(), sender: "Pippo" },
  { text: "bau bau", date: new Date(), sender: "Pluto" },
  { text: "yoooo", date: new Date(), sender: "V" },
  { text: "finish the fight", date: new Date(), sender: "Master Chief" },
  {
    text: "this cave is not a natural formation",
    date: new Date(),
    sender: "Cortana",
  },
];

const posts = [
  {
    author: "User",
    text: "Oggi ho mangiato robba buona",
    date: new Date(),
    photo:
      "https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
  },
  {
    author: "User",
    text: "Sto imparando React",
    date: new Date(),
  },
];

const Home = () => {
  const [friendsPreview, setFriendsPreview] = useState(friends);
  const [allPosts, setAllPosts] = useState(posts);
  const [messagesPreview, setMessagesPreview] = useState(messages);
  // const friendPreview = [];

  return (
    <section className={styles.home}>
      <h3>Bevenuto utente</h3>
      <div className={styles.grid}>
        <aside>
          {friendsPreview.map((friend, index) => (
            <FriendPreview key={index} data={friend} />
          ))}
        </aside>
        <main>
          {allPosts.map((post, index) => (
            <Post key={index} data={post} />
          ))}
        </main>
        <aside>
          {messagesPreview.map((message, index) => (
            <MessagePreview key={index} data={message} />
          ))}
        </aside>
      </div>
    </section>
  );
};

export default Home;
