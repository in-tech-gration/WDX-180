import "./App.css";
import CookieNotice from "./components/CookieNotice";
import PropTypes from "prop-types";
// console.clear();

// PropTypes 101
function HelloWorld(props){
  return <mark>Hello {props.name}</mark>
}
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

// title, date, content, author
function BlogPost(props){
  return (
    <article className="border shadow m-2 p-2">
      <h2 className="font-bold text-2xl">{props.title}</h2>
      <h2>{props.author}</h2>
      <time dateTime="2018-07-07">{props.date}</time>
      <hr />
      <p>{props.children}</p>
      <button>Like</button>
    </article>
  )
}

// Why not supplying PropTypes for BlogPost?

const posts = [
  {
    id: 100,
    title: "Learn JS",
    author: "Kyle Simpson",
    date: "Today",
    content: "There’s an old story about the person who wished his computer were as easy to use as his telephone. That wish has come true, since I no longer know how to use my telephone. (Bjarne Stroustrup) Deleted code is debugged code. (Jeff Sickel) I think there’s a world market for about 5 computers. (Thomas J. Watson, Chairman of the Board, IBM, circa 1948) If debugging is the process of removing software bugs, then programming must be the process of putting them in. (Edsger Dijkstra)"
  },
  {
    id: 101,
    title: "Eloquent JS",
    author: "Unknown",
    date: "2020",
    content: "Windows NT addresses 2 Gigabytes of RAM, which is more than any application will ever need. (Microsoft, on the development of Windows NT, 1992) Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work”. (Anonymous) It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration. (E. W. Dijkstra) A great lathe operator commands several times the wage of an average lathe operator, but a great writer of software code is worth 10,000 times the price of an average software writer. (Bill Gates) The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability. (Randall E. Stross)"
  },
  {
    id: 102,
    title: "Learn React",
    author: "Dan Abramov",
    date: "2021",
    content: "Some cool React tricks!"
  }
];
function App() {
  return (
    <div className="border border-4 border-black m-2">
      <h1>Our Blog</h1>

      {/* 1) Loop over the 'posts' Array  */}
      
      {/* posts.map(); => [...] => returned value => ...? <BlogPost /><BlogPost /><BlogPost /> */}

      {/* {[<BlogPost />, <BlogPost/>, <BlogPost />]} */}

      {posts.map(function(value,index /* Do not use the Array index as a key value */){
        // console.log("map callback", value);
        return (
          <BlogPost key={value.id} title={value.title} author={value.author} date={value.data}>
            {value.content}
          </BlogPost>
        )
      })}
      
      {/* 2) For each Post Object, display the <BlogPost /> */}

      {/* <CookieNotice message="GDPR" days={32} isDark /> */}
      {/* <CookieNotice message={"GDPR"} days={16} /> */}
      {/* <CookieNotice days={42} message="GDPR" /> */}
    </div>
  );
}

export default App;
