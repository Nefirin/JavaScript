let szoveg = window.prompt("mesélj egy mesét");


if (szoveg.length > 80) {
    console.log(szoveg.substring(0, 77) + "...")
}   else{
    console.log(szoveg)
};


