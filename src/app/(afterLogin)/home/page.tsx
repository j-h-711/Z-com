import styles from "./page.module.css";
import TabProvider from "./_component/TabProvider";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "../_component/Post";

export default function Home() {
  // provider 내부에서 context API 사용 가능

  const target = [
    {
      User: {
        id: "elonmusk",
        nickname: "Elon Musk",
        image: "/me.jpg",
      },
      content: "클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ",
      createdAt: new Date(),
      Images: [],
    },
    {
      User: {
        id: "jh",
        nickname: "jhLee",
        image: "/me.jpg",
      },
      content: "개발자는 참 어려운 직업",
      createdAt: new Date(),
      Images: [],
    },
    {
      User: {
        id: "bomin",
        nickname: "bomani",
        image: "/me.jpg",
      },
      content: "지똥이 파이팅",
      createdAt: new Date(),
      Images: [],
    },
    {
      User: {
        id: "mongmong",
        nickname: "mongmongE",
        image: "/me.jpg",
      },
      content: "나는 강아지입니다요~!",
      createdAt: new Date(),
      Images: [],
    },
  ];

  return (
    <TabProvider>
      <main className={styles.main}>
        <Tab />
        <PostForm />
        {target.map((target) => (
          <Post key={target.User.id} target={target} />
        ))}
        {/* <Post /> */}
      </main>
    </TabProvider>
  );
}
