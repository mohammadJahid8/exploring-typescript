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
