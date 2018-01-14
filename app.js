var addressBook = {
  1: {
    firstName: "firstname1",
    lastName: "lastame2",
    age: 22,
    phoneNum: "phonenum1",
    address: "address1"
  },
  2: {
    firstName: "firstname2",
    lastName: "fristame2",
    age: 23,
    phoneNum: "phonenum2",
    address: "address2"
  },
  3: {
    firstName: "firstname1",
    lastName: "lastame3",
    age: 22,
    phoneNum: "phonenum3",
    address: "address3"
  },
}
var tempObj = []

// ----------------------------- create -----------------------------------------------
function addContact(inputFirst_name = null, inputLastName = null, inputAge = null, inputPhoneNum = null, inputAddress = null) {
  // start input validation

  // end of input validation
  var newKey = parseInt(Object.keys(addressBook)[Object.keys(addressBook).length - 1]) + 1
  var newValue = {inputFirst_name,inputLastName,inputAge,inputPhoneNum,inputAddress}
  addressBook[newKey] = newValue
}

// ----------------------------- read -----------------------------------------------
function displayAllContact(){
  console.log(addressBook);
}

function searchContactBy(properties ,value){
  var arrKeys = []
  for (var key in addressBook){
    if(addressBook[key][properties] === value){
      arrKeys.push(key)
    }
  }

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
function deleteContactByFirstName(inputFirstname){
  var intKey = parseInt(Object.keys(addressBook).find(key => addressBook[key].firstName == inputFirstname))
  delete addressBook[intKey]
}

function deleteContactByKey(inputkey){
  delete addressBook[inputkey]
}

function deleteContact(properties,value){
  var arrKeys = []
  for (var key in addressBook){
    if(addressBook[key][properties] === value){
      arrKeys.push(key)
    }
  }
  for (i=0;i<arrKeys.length;i++){
    delete addressBook[arrKeys[i]]
  }
}



deleteContact("firstName","firstname2")
addContact("a","a",20,"a","a")

displayAllContact()
