import { nanoid } from "nanoid"

function Skills() {

  const skillsBadge = [
    "html",
    "javascript",
    "css",
    "react",
    "typescript",
    "vue",
    "svelte",
    "nodejs",
    "tailwindcss",
    "sass",
    "next",
    "firebase",
    "redux-action",
    "graphql",
    "vscode",
    "git",
    "vite",
    "webpack",
  ]

  return (
     <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        className="text-center text-3xl lg:text-4xl"
      >
        My skills & Knowledge
      </h1>
      <p
        className="description text-lg text-center my-[30px]"
      >
        Technologies and languages that I utilize in my everyday development
      </p>
      <div className="grid justify-center grid-cols-4 md:grid-cols-6 gap-y-[10px] md:gap-y-[20px]">
        {skillsBadge.map((skill) => (
          <a
            key={nanoid()}
            href={`https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${skill}.svg&w=50&h=50`}
            target="_blank"
            rel="noopener noreferrer"
            className="item flex flex-col items-center justify-around group"
          >
            <img
              className="w-[60px] h-[60px] transition duration-300 group-hover:scale-110"
              src={`https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${skill}.svg&w=50&h=50`}
              alt=""
            />
            <p className="text-center capitalize">{skill === "html" ? "HTML" : skill === "javascript" ? "JavaScript" : skill === "css" ? "CSS" : skill === "typescript" ? "TypeScript" : skill === "nodejs" ? "NodeJS" :
              skill === "tailwindcss" ? "tailwindCSS" : skill === "redux-action" ? "Redux" : skill === "graphql" ? "GraphQL" : skill === "vscode" ? "VS Code" : skill
            }</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Skills
