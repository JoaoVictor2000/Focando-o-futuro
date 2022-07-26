// clearTimeout  cancelar  um timeOut

const timeout = 3000 //(3s)
const finished = () => console.log('done');

let  timer = setTimeout(finished, timeout)
// a qualquer momento posso passar o clearTimeout e ele cancelara. como:

clearTimeout(timer)

