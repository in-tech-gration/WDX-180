import './App.css'

const challenges = [
  {
    id: "snakebite",
    title: "Title",
    subtitle: "Subtitle",
    bgColor: "#f87171",
    bgImage: "",
    toc: [
      ["key", "value"],
      ["key", "value"],
      ["key", "value"],
    ]
  },
  {
    id: "title-slug-2",
    title: "More to come!",
    subtitle: "Keep an eye on this page.",
    bgColor: "#a78bfa",
  },
  {
    id: "title-slug-3",
    title: "Title",
    subtitle: "Subtitle",
    bgColor: "#38bdf8",
    toc: [
      ["key", "value"],
      ["key", "value"],
      ["key", "value"],
    ]
  },
  {
    id: "title-slug-4",
    title: "Title",
    subtitle: "Subtitle",
    bgColor: "#f472b6",
    toc: [
      ["key", "value"],
      ["key", "value"],
      ["key", "value"],
    ]
  },
  {
    id: "title-slug-5",
    title: "Title",
    subtitle: "Subtitle",
    bgColor: "#34d399",
    toc: [
      ["key", "value"],
      ["key", "value"],
      ["key", "value"],
    ]
  },
  {
    id: "title-slug-6",
    title: "Title",
    subtitle: "Subtitle",
    bgColor: "#fbbf24",
    toc: [
      ["key", "value"],
      ["key", "value"],
      ["key", "value"],
    ]
  },
].slice(0,2);

type Challenge = {
  id: string
  title: string
  subtitle: string
  bgColor: string
  bgImage?: string
  toc?: string[][]
}

function Card({ challenge }: { challenge: Challenge }) {

  let bgImageProps = {};

  if (challenge.bgImage) {
    bgImageProps = {
      backgroundImage: `url(${challenge.bgImage})`,
      backgroundSize: "cover"
    }
  }

  return (
    <div
      onClick={() => {
        console.log(challenge.id);
      }}
      className="bg-white text-black rounded-2xl overflow-hidden cursor-pointer shadow-lg self-start transition-shadow duration-300 hover:shadow-2xl">
      <div
        className="h-48"
        style={{
          backgroundColor: challenge.bgColor,
          ...bgImageProps
        }}
      ></div>
      <div className="p-6">
        <h2 className="font-bold text-xl">{challenge.title}</h2>
        <h3 className="text-lg mt-2 font-semibold">{challenge.subtitle}</h3>
        <ul className="mt-4">
          {challenge.toc?.map(([key, value], index) => {
            return (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{key}</span>
                <span>{value}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

// @ts-ignore
function Login() {
  return (
    <>
      <p>Sign up or log in to get complete access to the course. It’s free!</p>
      <div className="mt-6">
        <button className="bg-transparent text-white border-2 border-blue-500 hover:bg-blue-500 hover:border-transparent font-bold py-2 px-6 rounded-full mr-4">
          Log in
        </button>
        <button className="bg-transparent text-white border-2 border-green-500 hover:bg-green-500 hover:border-transparent font-bold py-2 px-6 rounded-full">
          Sign up
        </button>
      </div>

    </>
  )
}

function App() {

  return (
    <>
      <>
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6">
          <div className="text-white text-2xl font-bold">Welcome</div>
          <div>
            <a href="#" className="text-white">
              in:<strong>tech</strong>gration
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="text-center mt-12">
          <h1 className="text-4xl font-bold mb-4">
            Web Developer Challenges from the Trenches
          </h1>
          {/* <Login /> */}
        </div>

        {/* Cards */}
        <div className="container card-container mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {challenges.map(challenge => {
            return <Card key={challenge.id} challenge={challenge} />
          })}
        </div>

        {/* Footer */}
        <footer className="my-6 text-center text-gray-400">
          <p>
            in:<strong>tech</strong>gration
          </p>
        </footer>
      </>

    </>
  )
}

export default App
