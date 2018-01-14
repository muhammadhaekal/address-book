var addressBook = [
  {
    firstName: "firstname1",
    lastName: "lastame2",
    age: 22,
    phoneNum: "phonenum1",
    address: "address1"
  },
  {
    firstName: "firstname2",
    lastName: "fristame2",
    age: 23,
    phoneNum: "phonenum2",
    address: "address2"
  },
  {
    firstName: "firstname1",
    lastName: "lastame3",
    age: 24,
    phoneNum: "phonenum3",
    address: "address3"
  },
  {
    firstName: "firstname4",
    lastName: "lastame4",
    age: 24,
    phoneNum: "phonenum4",
    address: "address4"
  }
]
console.log(addressBook);

// ----------------------------- create -----------------------------------------------
function addContact(firstName = null, lastName = null, age = null, phoneNum = null, address = null) {
  // start input validation

  // end of input validation
  var newValue = {firstName,lastName,age,phoneNum,address}
  addressBook.push(newValue)
}

// ----------------------------- read -----------------------------------------------
function displayAllContact(){
  console.log(addressBook);
}

function searchContactBy(properties ,value){
  var arrKeys = []

  for(i=0;i<addressBook.length;i++){
    if(addressBook[i][properties] === value){
      arrKeys.push(i)
    }
  }
  // console.log(arrKeys);
  for (i=0;i<arrKeys.length;i++){
    console.log(addressBook[arrKeys[i]])
  }

}
// ----------------------------- update -----------------------------------------------

function editContactByKey(key,properties,value){
  addressBook[key][properties] = value
  console.log(addressBook);
}

// ----------------------------- delete -----------------------------------------------
function deleteContactByKey(inputkey){
  addressBook.splice(0,inputkey);
  console.log(addressBook);
}

function deleteContact(properties,value){
  var arrKeys = []

  for(i=0;i<addressBook.length;i++){
    if(addressBook[i][properties] === value){
      arrKeys.push(i)
    }
  }
  arrKeys = arrKeys.sort().reverse();
  // console.log(arrKeys);
  for (i=arrKeys.length;i>0;i--){
    addressBook.splice(arrKeys[i],1);
  }
  console.log(addressBook);
}



deleteContact("firstName","firstname2")
addContact("a","a",20,"a","a")

displayAllContact()
