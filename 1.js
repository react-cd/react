const data =  (fn)=>{
  try {
    return fn()
  } finally  {
    console.log('finally');
  }
}

const fn =  ()=>{
  console.log(232323);
  return 100;
}

const res= data(fn)
console.log(res);
