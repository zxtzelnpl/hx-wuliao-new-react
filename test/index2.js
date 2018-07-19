function magic() {
  let a = 1;
  a = 2;
  let b = innerMagic();
  a = 3;

  return b;

  function innerMagic() {
    return a;
  }
}

console.log(magic())
