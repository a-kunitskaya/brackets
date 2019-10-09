module.exports = function check(str, bracketsConfig) {
    const config = new Map(bracketsConfig);
    const opening = new Set(config.keys());
    const closing = new Set(config.values());

    const temp = [];
    for (let strBracket of str) {
        if (opening.has(strBracket)) {
            const matchingClosing = config.get(strBracket);
            if (temp[temp.length - 1] === matchingClosing && matchingClosing === strBracket) {
                temp.pop();
            } else {
                temp.push(strBracket);
            }
        } else if (closing.has(strBracket)) {
            const lastBracket = temp[temp.length - 1];
            if (config.get(lastBracket) === strBracket) {
                temp.pop()
            } else {
                temp.push(strBracket);
            }
        }
    }
    return !temp.length;
};
