const sum = (...args) => {
  let s1=0;
  for(let i=0;i<args.length;i++)
  {
      s1+=args[i];
  }
  return s1;
}