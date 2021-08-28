module.exports = function check(str, bracketsConfig) {
    let strArray = Array.from(str);
    let stack = [];
    const pairs = {
        [')']: '(',
        ['}']: '{',
        [']']: '[',
        ['|']: '|',
        ['2']: '1',
        ['4']: '3',
        ['6']: '5',
        ['7']: '7',
        ['8']: '8',
    }

    for (let i = 0; i < strArray.length; i++) {
        const currentElement = strArray[i];
        if (isClosedBracket(currentElement)) {
            if (pairs[currentElement] !== stack[stack.length - 1]) {
                stack.push(currentElement);
            } else {
                stack.pop();
            }
        } else {
            stack.push(currentElement);
        }
    }
    console.log(stack);
    return stack.length === 0;

    function isClosedBracket(br) {
        for (let i in pairs) {
            if (i == br) return true;
        }
        return false;
    }

}

