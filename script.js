function indexOfIgnoreCase(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const index = s1.indexOf(s2);
    return index; // returns -1 automatically if not found
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
