module.exports = function check(str, bracketsConfig) {
    let brackets = str.split('');

    //check that all brackets are in config
    let bracketInConfig = [];
    brackets.forEach(bracket => {
        bracketInConfig = bracketsConfig.filter(config => config.includes(bracket));
        if (!bracketInConfig.length) return false;

        const config = bracketsConfig.find(config => config.includes(bracket));
        const openingBracketIndex = brackets.indexOf(config[0]);
        let tempBrackets = brackets.slice(openingBracketIndex + 1);
        brackets.splice(openingBracketIndex, 1);
        const closingBracketIndex = brackets.indexOf(config[1]);
        if (tempBrackets.includes(config[1])) brackets.splice(closingBracketIndex, 1);
    });
    return !brackets.length;
};
