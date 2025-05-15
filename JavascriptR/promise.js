let checkEven = new Promise((success, unsuccess) => {
  let num = 10;
  if (num % 2 === 0) success("Number is even");
  else unsuccess("Number is not even");
});
checkEven
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
