function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        let isRepeated = false;
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str.charAt(i) === str.charAt(j)) {
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated) {
            return str.charAt(i);
        }
    }
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
