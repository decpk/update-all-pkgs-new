export default function sum(...arr) {
    return arr.reduce((acc, curr) => {
        console.log(curr);
        return acc + curr;
    }, 0);
}
//# sourceMappingURL=math.js.map