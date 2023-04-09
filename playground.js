isIsimorphic("egg","add");
isIsimorphic("paper","title");
isIsimorphic("kick","side");

function isIsimorphic(firstString, secondString){
    if (firstString.lenght != secondString.lenght) return false;
    const map = {};
    for ( let i = 0; i<=firstString; i++) {