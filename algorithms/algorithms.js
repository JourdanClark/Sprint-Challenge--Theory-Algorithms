const a = (n) => { // O(n)
  let i = 0;
  while (i < n * n * n)
    i += n * n;
  return i;
};

const b = (array, x) => { // O(1) or O(log n) or O(n)
  let i = array.length - 1;
  while (array[i] > x && i >= 0) // the && i >= 0 will cause an infinite loop until js math gives up and sets 0.00000000000000000000000000000003/2 to 0
    i = ~~(i / 2); // floor i to fix infinite looop
  return i;
};

const c = (n) => { // O(8^2 log n^2)
  let sum = 0;
  for (let i = 0; i < Math.sqrt(n) / 2; i++)
    for (let j = i; j < 8 + i; j++)
      for (let k = j; k < 8 + j; k++)
        sum++;
  return sum;
};

const d = (n) => { // O(log n^2)
  let sum = 0;
  for (let i = 1; i < n; i *= 2)
    for (let j = 0; j < n; j++)
      sum++;
  return sum;
};

const e = (n) => { // O(n^4*10) I can't picture what the 10 will actually do
  let sum = 0;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      for (let k = j + 1; k < n; k++)
        for (let l = k + 1; l < 10 + k; l++)
          sum++;
  return sum;
};

const f = (bunnies) => { // O(n)
  if (bunnies === 0)
    return 0;
  return 2 + f(bunnies - 1);
};

const g = (array, arraySize, target) => { // O(n)
  if (arraySize > 0) {
    if (array[arraySize-1] === target)
      return true;
    else
      return g(array, arraySize-1, target);
  }
  return false;
};

/* =============== EXERCISE I ===============

  a ) a is linear because it will always scale by 3 * n

  b ) b can be O(1) if you get lucky and array[0] is already greater than x.
    it can be log n if it finds n before searching through the entire array.
    worst case is linear if it has to search through the entire array.

  c ) The first loop is the sqrt of n / 2 which would make it log n.
    the other two loops add 8 to the size of the sqrt of n / 2
    which I would image makes them 8^2 * the sqrt of n / 2

  d ) I'm not sure exactly what this one is because it's almost n^2 except the first loop doubles the value of i
    while the second loop goes from i to n so I'm guessing log n^2

  e ) I was also not sure on this one because of the last loop doing 10 + k iterations.

  f ) This is linear because it is essentially like a less effecient while loop.

  g ) This is also linear because it is essentially a while loop. Both f and g
    only recurse once per call.

*/

/* ============== EXERCISE II =============== */

const maxVal = (array) => {
  let max;
  for (let i = 0, j = 1; j < array.length; i++, j++)
    max = max === undefined ? array[j] - array[i] : array[j] - array[i] > max ? array[j] - array[i] : max; // hold my beer
  return max || null;
};

maxVal([1,2,4,1,6,3,9]) // 6

const findBreakingPoint = (egg) => {
  let floor = 0;
  while (egg.break > floor)
    floor += 2; // maybe it'll reduce egg drops
  while (floor >= egg.break)
    floor--;
  return floor;
}

findBreakingPoint({break: 10}); // 9

/*
  a ) Since both i and j increment together, it runs in linear time O(n). It has to run through
    the full array to find the maximum value.

  b ) I imagine that an egg would break at floor 1 but if we have super eggs then going up two
    floors and then back down might reduce the number of eggs that were dropped.
*/

/* ============== EXERCISE III ==============

  a ) O(n^2) because it basically unsorts the array and has to resort it.

  b ) O(n log n) you split it in half and divide up the work

*/
