type NoobDeveloper = {
  name: string;
};

type JuniorDev = NoobDeveloper & {
  skill: string;
  expertise: string;
};

type NextLevelDev = JuniorDev & {
  experience: number;
  level: "junior" | "mid" | "senior";
};

const dev: JuniorDev | NoobDeveloper = {
  name: "jahid",
  skill: "s",
  expertise: "react",
};

const nextdev: NextLevelDev = {
  name: "jahid",
  skill: "react",
  expertise: "js",
  experience: 1,
  level: "mid",
};
