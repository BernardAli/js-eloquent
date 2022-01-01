for (let i = 1; i < 7; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += '#';
    }
    console.log(str);
}

for (let i = 1; i <= 100; i++) {
    let str = '';
    if (i % 3 === 0) str += 'Fizz';
    if (i % 5 === 0) str += 'Buzz';
    console.log(str || i);
  }

  const size = 8;
  let str = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      str += (x + y) % 2 === 0 ? '#' : ' ';
    }
    str += '\n';
  }
  console.log(str);