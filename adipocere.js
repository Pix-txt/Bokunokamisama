function Person(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}

numberList = []

function submitNewEntry(){
    tempFirst = document.getElementById('submitphonenumber').elements[0].value;
    tempLast = document.getElementById('submitphonenumber').elements[1].value;
    tempNumber = document.getElementById('submitphonenumber').elements[2].value;

    for(let y in numberList){
        if(tempNumber == numberList[y].phoneNumber){
            alert('Phone Number already exists')
            return;
        }
    }
    
    if(tempNumber.length < 6){
        alert('Phone number too short')
        return;
    }

    if(tempFirst.length < 3 || tempLast.length < 3){
        alert('Name to short (if thats ur actual name then get good ig :p)')
        return;
    }
    
    if(tempFirst != '' && tempNumber != '' && tempLast != ''){
        
        text = '';

        const newPerson = new Person(tempFirst, tempLast, tempNumber);
        numberList.push(newPerson)

        for(let x in numberList){
            text += 'Name = ' + numberList[x].fullName() + '<br> Phone number = ' + numberList[x].phoneNumber + '<br><br><br>'
        }
        document.getElementById('Phonelist').innerHTML = text;
        alert(numberList[x].fullName() + 'has been succesfully added!!')
    }
    
}

function searchNumber(){
    let searchresults = ''

    searchNum = document.getElementById('searchFunction').elements[0].value;
    for(let y in numberList){
        if(searchNum == numberList[y].phoneNumber){
            searchresults = 'Phone number belongs to '+ numberList[y].fullName()
        }
    }
    if(searchresults == ''){
        searchresults = 'User not found'
    }

    document.getElementById('results').innerHTML = searchresults
}

function searchName(){
    let searchresults = ''

    searchNam = document.getElementById('searchFunction').elements[2].value;

    for(let y in numberList){
        m = numberList[y].fullName();
        if(searchNam.toLowerCase() == numberList[y].firstName.toLowerCase() || searchNam.toLowerCase() == numberList[y].lastName.toLowerCase() || searchNam.toLowerCase() == m.toLowerCase()){
            searchresults = "Person's phone number is "+ numberList[y].phoneNumber
        }
    }
    if(searchresults == ''){
        searchresults = 'User not found'
    }

    document.getElementById('results').innerHTML = searchresults
}