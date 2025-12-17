const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = 435262
accountCity = "Puducheri"; // Do not prefer this variable declaration

// We can't change cons type variables as they are permament
accountEmail = "hc@hc.gmail.com";
accountPassword = 212121;
accountCity = "Jaipur"; // Declared a variable explicitly but not preferable
let accountState;

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
