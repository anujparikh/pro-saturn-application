export const getDummyPromise = (responseToBeSentBack: any) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => console.log('simulating lag'), 1000);
    resolve(responseToBeSentBack);
  });
  return promise;
};
