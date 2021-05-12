let friend1 = {
    name: 'John', 
}

let friend2 = {
    name: 'Jane',
}

let friend3 = {
    name: 'Jack',
}

let friend4 = {
    name: 'Jim',
}

let friend5 = {
    name: 'Jesus',
}

let friends = [friend1, friend2, friend3, friend4, friend5];

for (i = 0; i < friends.length; i++){
    console.log(friends[i].name + ':');
    codes(friends[i].name);
}





function codes() {
    var x = 99;
    while (x > 1) {
        console.log(x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " lines of code in the file!");
        x -= 1;
        if (x == 2) {
            console.log(x+ " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " line of code in the file!");
            break;
        }
    }
    var y = 1;
    while (y > 0) {
        console.log(y + " line of code in the file, " + y + " line of code. " + friends[i].name + " stikes one out, clears it all out, " + (y - 1) + " lines of code in the file!");
        break;
    }
    var z = 0;
    while (z > -1) {
        console.log("No more lines of code in the file, no more lines of code. " + friends[i].name + " shuts it down, closes it out, no more lines of code in the file!");
        break;
    }
}
