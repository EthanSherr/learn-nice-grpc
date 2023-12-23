async function* generateSequence(start: number, end: number) {

  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}

const main = async () => {
  for await (let i of generateSequence(0, 100)) {
    console.log("it is", i)
  }
}
main()