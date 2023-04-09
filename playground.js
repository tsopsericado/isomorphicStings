
isIsimorphic("egg","add");
isIsimorphic("paper","title");
isIsimorphic("kick","side");

function isIsimorphic(firstString, secondString){
    if (firstString.lenght != secondString.lenght) return false;
    const map = {};
    for ( let i = 0; i<=firstString; i++) {
        const letterA = firstString;
        const letterB =secondString;
        if(map[letterA] === undefined){
            map[letterA] = letterB
            // {k:s, i:i, c:d, k}
        } else if (map[letterA] !== letterB){
            return false;
        }
    }
    return true;
}
console.log(isIsimorphic);