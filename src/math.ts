export default function sum(...arr: number[]) {
  return arr.reduce((acc, curr) => {
    console.log(curr);
    return acc + curr;
  }, 0);
}
