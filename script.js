const grammar = {
    S: ["aSb", "ab"],
};

document.getElementById("generateBtn").addEventListener("click", () => {
    const stack = ["S"];
    let output = "";

    while (stack.length > 0) {
        const top = stack.pop();
        if (top === "a" || top === "b") {
            output += top;
        } else {
            const production = grammar[top][Math.floor(Math.random() * grammar[top].length)];
            for (let i = production.length - 1; i >= 0; i--) {
                stack.push(production[i]);
            }
        }
    }

    document.getElementById("result").textContent = output;
});
