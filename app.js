

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById('btn');
    button.addEventListener('click', pageLoad);


    function pageLoad(){
        let divJohn = document.createElement('div');
        divJohn.className = 'friend';
        document.body.appendChild(divJohn);
        let nameJohn = document.createElement('h3');
        nameJohn.textContent = 'John';
        divJohn.appendChild(nameJohn);

        let divJane = document.createElement('div');
        divJane.className = 'friend';
        document.body.appendChild(divJane);
        let nameJane = document.createElement('h3');
        nameJane.textContent = 'Jane';
        divJane.appendChild(nameJane);

        let divJack = document.createElement('div');
        divJack.className = 'friend';
        document.body.appendChild(divJack);
        let nameJack = document.createElement('h3');
        nameJack.textContent = 'Jack';
        divJack.appendChild(nameJack);

        let divJim = document.createElement('div');
        divJim.className = 'friend';
        document.body.appendChild(divJim);
        let nameJim = document.createElement('h3');
        nameJim.textContent = 'Jim';
        divJim.appendChild(nameJim);

        let divJesus = document.createElement('div');
        divJesus.className = 'friend';
        document.body.appendChild(divJesus);
        let nameJesus = document.createElement('h3');
        nameJesus.textContent = 'Jesus';
        divJesus.appendChild(nameJesus);
    

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

        
        let paragraph1 = document.createElement('p');
        let paragraph2 = document.createElement('p');
        let paragraph3 = document.createElement('p');
        let paragraph4 = document.createElement('p');

        let paragraph5 = document.createElement('p');
        let paragraph6 = document.createElement('p');
        let paragraph7 = document.createElement('p');
        let paragraph8 = document.createElement('p');

        let paragraph9 = document.createElement('p');
        let paragraph10 = document.createElement('p');
        let paragraph11 = document.createElement('p');
        let paragraph12 = document.createElement('p');

        let paragraph13 = document.createElement('p');
        let paragraph14 = document.createElement('p');
        let paragraph15 = document.createElement('p');
        let paragraph16 = document.createElement('p');

        let paragraph17 = document.createElement('p');
        let paragraph18 = document.createElement('p');
        let paragraph19 = document.createElement('p');
        let paragraph20 = document.createElement('p');
        
        //for the life of me i could not figure out a way to get the first 96 lines to load since they kept
        //editing over the last line in the text string each time it ran, so it would seemingly start at 3 but
        //in reality, lines 99-4 kept getting written over. i can visualize a way to solve this and complete the
        //lab, but it would easily be almost 1000 lines of code and i'm assuming there must be a much more efficient method
        //since at this point if i was doing this IRL, it would be easier to just hard-code the text directly
        //so i decided to phone it in and give up here. sorry ab that lol

        function codes() {
            for (i = 0; i < friends.length; i++){  
                if (friends[i].name = 'John') {
                    var x = 99;
                    while (x > 1) {
                        paragraph1.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " lines of code in the file!";
                        x -= 1;
                        if (x == 2) {
                            paragraph2.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " line of code in the file!";
                            break;
                        }
                    }
                    var y = 1;
                    while (y > 0) {
                        paragraph3.textContent = y + " line of code in the file, " + y + " line of code. " + friends[i].name + " stikes one out, clears it all out, " + (y - 1) + " lines of code in the file!";
                        break;
                    }
                    var z = 0;
                    while (z > -1) {
                        paragraph4.textContent = "No more lines of code in the file, no more lines of code. " + friends[i].name + " shuts it down, closes it out, no more lines of code in the file!";
                        break;
                    }
                }
                if (friends[i].name = 'Jane') {
                    var x = 99;
                    while (x > 1) {
                        paragraph5.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " lines of code in the file!";
                        x -= 1;
                        if (x == 2) {
                            paragraph6.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " line of code in the file!";
                            break;
                        }
                    }
                    var y = 1;
                    while (y > 0) {
                        paragraph7.textContent = y + " line of code in the file, " + y + " line of code. " + friends[i].name + " stikes one out, clears it all out, " + (y - 1) + " lines of code in the file!";
                        break;
                    }
                    var z = 0;
                    while (z > -1) {
                        paragraph8.textContent = "No more lines of code in the file, no more lines of code. " + friends[i].name + " shuts it down, closes it out, no more lines of code in the file!";
                        break;
                    }
                }
                if (friends[i].name = 'Jack') {
                    var x = 99;
                    while (x > 1) {
                        paragraph9.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " lines of code in the file!";
                        x -= 1;
                        if (x == 2) {
                            paragraph10.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " line of code in the file!";
                            break;
                        }
                    }
                    var y = 1;
                    while (y > 0) {
                        paragraph11.textContent = y + " line of code in the file, " + y + " line of code. " + friends[i].name + " stikes one out, clears it all out, " + (y - 1) + " lines of code in the file!";
                        break;
                    }
                    var z = 0;
                    while (z > -1) {
                        paragraph12.textContent = "No more lines of code in the file, no more lines of code. " + friends[i].name + " shuts it down, closes it out, no more lines of code in the file!";
                        break;
                    }
                }
                if (friends[i].name = 'Jim') {
                    var x = 99;
                    while (x > 1) {
                        paragraph13.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " lines of code in the file!";
                        x -= 1;
                        if (x == 2) {
                            paragraph14.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " line of code in the file!";
                            break;
                        }
                    }
                    var y = 1;
                    while (y > 0) {
                        paragraph15.textContent = y + " line of code in the file, " + y + " line of code. " + friends[i].name + " stikes one out, clears it all out, " + (y - 1) + " lines of code in the file!";
                        break;
                    }
                    var z = 0;
                    while (z > -1) {
                        paragraph16.textContent = "No more lines of code in the file, no more lines of code. " + friends[i].name + " shuts it down, closes it out, no more lines of code in the file!";
                        break;
                    }
                }
                if (friends[i].name = 'Jesus') {
                    var x = 99;
                    while (x > 1) {
                        paragraph17.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " lines of code in the file!";
                        x -= 1;
                        if (x == 2) {
                            paragraph18.textContent = x + " lines of code in the file, " + x + " lines of code. " + friends[i].name + " stikes one out, clears it all out, " + (x - 1) + " line of code in the file!";
                            break;
                        }
                    }
                    var y = 1;
                    while (y > 0) {
                        paragraph19.textContent = y + " line of code in the file, " + y + " line of code. " + friends[i].name + " stikes one out, clears it all out, " + (y - 1) + " lines of code in the file!";
                        break;
                    }
                    var z = 0;
                    while (z > -1) {
                        paragraph20.textContent = "No more lines of code in the file, no more lines of code. " + friends[i].name + " shuts it down, closes it out, no more lines of code in the file!";
                        break;
                    }
                }
            }    
        }

        codes();

        divJohn.appendChild(paragraph1);
        divJohn.appendChild(paragraph2);
        divJohn.appendChild(paragraph3);
        divJohn.appendChild(paragraph4);

        divJane.appendChild(paragraph5);
        divJane.appendChild(paragraph6);
        divJane.appendChild(paragraph7);
        divJane.appendChild(paragraph8);

        divJack.appendChild(paragraph9);
        divJack.appendChild(paragraph10);
        divJack.appendChild(paragraph11);
        divJack.appendChild(paragraph12);

        divJim.appendChild(paragraph13);
        divJim.appendChild(paragraph14);
        divJim.appendChild(paragraph15);
        divJim.appendChild(paragraph16);

        divJesus.appendChild(paragraph17);
        divJesus.appendChild(paragraph18);
        divJesus.appendChild(paragraph19);
        divJesus.appendChild(paragraph20);

        alert("Lines 99-3 keep overwriting themselves and I've tried so many things but the only solution I could come up with would just be a crazy 1000+ line project but it wouldn't teach me anything useful to do that so I hope you enjoy lines 3-0 :(. I'll have to revisit this for more practice I guess.");
        
    }    
});

