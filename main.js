const isMaleName = (names) => {
  const lowerCaseNames = names.toLowerCase();

  if (lowerCaseNames === "bonawentura" || !lowerCaseNames.endsWith("a")) {
    return true;
  } else {
    lowerCaseNames.endsWith("a");
    return false;
  }
};

console.log(isMaleName("Bonawentura"));
console.log(isMaleName("bonawentura"));
console.log(isMaleName("Krzysiek"));
console.log(isMaleName("jacek"));
console.log(isMaleName("anna"));
console.log(isMaleName("Sylwia"));
