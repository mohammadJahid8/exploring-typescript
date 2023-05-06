const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed");
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// console.table(getPromise);

// // fetch from json placeholder

interface Itodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<Itodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();
  return data;
};
console.log(getTodo());

const getTodoData = async (): Promise<void> => {
  const resulttodo = await getTodo();
  console.log(resulttodo);
};

getTodoData();
