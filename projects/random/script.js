
// Generating random numbers in console in range [1, 100], until it return 100

let i = 1;
while (true) {
  let rndm = Math.trunc(Math.random() * 100) + 1;
  console.log(`${i}: ${rndm}`);
  i++;
  if (rndm >= 100) { break; }
}
