// process.stdout.write();

//Edge Cases//
//No numbers are provided - no beeps should occur
//An input is a negative number - ignore
//An input is not a number - ignore

let args = process.argv.slice(2,process.argv.length)

for(let argu in args){
  if(typeof args[argu] === 'string' || args[argu] < 0){
  }
  else if(typeof args[argu] === 'number'){
    delay = args[argu]
    setTimeout((delay) => {
    process.stdout.write('.');
    }, delay * 1000)
  }
}