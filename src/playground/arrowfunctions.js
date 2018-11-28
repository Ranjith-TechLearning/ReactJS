const getFirstName = fullName => {
  return fullName.split(" ")[0];
};
console.log(getFirstName("Ranjith Ramalingam"));

const getFirstNameSim = fullName => fullName.split(" ")[0];
console.log(getFirstNameSim("Ranjith... Ramalingam"));
