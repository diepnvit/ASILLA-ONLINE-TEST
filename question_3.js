const getMinSwaps = (s, k) => {
  let a = s.split('');
  let np = [...a];
  while (k--) nextPermutation(np);
  let n = a.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] == np[i]) continue;
    let j;
    for (j = i + 1; j < n && a[j] != np[i]; j++);
    for (let k = j; k > i; k--) {
      [a[k], a[k - 1]] = [a[k - 1], a[k]];
      res++;
    }
  }
  return res;
};

const nextPermutation = a => {
  let n = a.length;
  let i, j;
  for (i = n - 2; i >= 0 && a[i] >= a[i + 1]; i--);
  if (i == -1) return false;
  for (j = i + 1; j < n && a[i] < a[j]; j++);
  [a[i], a[j - 1]] = [a[j - 1], a[i]];
  for (let p = i + 1, q = n - 1; p < q; p++, q--) [a[p], a[q]] = [a[q], a[p]];
  return true;
};
console.log(getMinSwaps('5489355142', 4));
console.log(getMinSwaps('11112', 4));
console.log(getMinSwaps('00123', 1));
