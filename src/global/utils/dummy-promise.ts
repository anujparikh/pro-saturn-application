export const getDummyPromise = (responseToBeSentBack: any) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(responseToBeSentBack);
      console.log('simulating lag');
    }, 1000);
  });
  return promise;
};
