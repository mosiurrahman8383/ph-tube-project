// const isVerified = "";


// //this condition 
// if(isVerified === true){
//     console.log("user is verified");
// }
// else{
//     console.log("user is not verified")
// }


// //it's the same as the upper if else condition for write in js file
// `${isVerified === true? "user is verified" : "user is not verified"}`




function getTimeString(time){
    const hour = parseInt(time / 3600); 
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`
}

// console.log(getTimeString(3670));

function secondsToHMS(seconds) {
    const hours = parseInt(seconds / 3600);  // Using parseInt
    const minutes = parseInt((seconds % 3600) / 60);  // Using parseInt
    const remainingSeconds = seconds % 60;
  
    return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  }
  // console.log(secondsToHMS(3670));

  function setTime(second){
    const hour = parseInt(second / 3600);
    const minute= parseInt(((second % 3600) / 60));
    const seconds = second % 60;
    return `${hour} hours, ${minute} minutes, ${seconds} seconds ago`
}

// console.log(setTime(3670));


const users = [
  { name: "Charlie", age: 30 },
  { name: "Carlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 }
];

// Sort by name (A to Z)
users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);
