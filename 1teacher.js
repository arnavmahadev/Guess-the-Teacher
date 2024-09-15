let correctFullName;

function startGame() {

    //learned how to make an array with values for two variables from https://www.ibm.com/docs/en/zos/2.3.0?topic=workflow-array-variables
    let silhouette = [  //images taken from yearbook
        { image: 'Sarah Jensen.jpg', fullName: 'Sarah Jensen' },
        { image: 'Monica Jariwala.jpg', fullName: 'Monica Jariwala' },
        { image: 'Jodi Johnson.jpg', fullName: 'Jodi Johnson' },
        { image: 'Erica Kim.jpg', fullName: 'Erica Kim' },
        { image: 'Joyce Fortune.jpg', fullName: 'Joyce Fortune' },
        { image: 'Randall Holaday.jpg', fullName: 'Randall Holaday' },
        { image: 'John Gilchrist.jpg', fullName: 'John Gilchrist' },
        { image: 'Hadiya Key.jpg', fullName: 'Hadiya Key' },
        { image: 'Aalok Patel.jpg', fullName: 'Aalok Patel' },
        { image: 'Robbie Hoffman.jpg', fullName: 'Robbie Hoffman' },
        { image: 'Seema Tandon.jpg', fullName: 'Seema Tandon' },
        { image: 'Curtis Sloan.jpg', fullName: 'Curtis Sloan' },
        { image: 'Lora Lerner.jpg', fullName: 'Lora Lerner' },
        { image: 'Pooya Hajjarian.jpg', fullName: 'Pooya Hajjarian' },
        { image: 'David Greenstein.jpg', fullName: 'David Greenstein' },
        { image: 'Lynn Rose.jpg', fullName: 'Lynn Rose' },
        { image: 'Carl Schmidt.jpg', fullName: 'Carl Schmidt' },
        { image: 'Kavita Gupta.jpg', fullName: 'Kavita Gupta' },
        { image: 'Scott Victorine.jpg', fullName: 'Scott Victorine' },
        { image: 'Michael White.jpg', fullName: 'Michael White' },
        { image: 'Janissa Zahn.jpg', fullName: 'Janissa Zahn' },
        { image: 'David Zahn.jpg', fullName: 'David Zahn' },
        { image: 'Alan Wong.jpg', fullName: 'Alan Wong' },
        { image: 'Melissa Wurfer.jpg', fullName: 'Melissa Wurfer' },
        { image: 'Amy Young.jpg', fullName: 'Amy Young' },
        { image: 'Brooklyn Sylve.jpg', fullName: 'Brooklyn Sylve' },
        { image: 'Jireh Tanabe.jpg', fullName: 'Jireh Tanabe' },
        { image: 'Shanmugavadivu Soundararajan.jpg', fullName: 'Shanmugavadivu Soundararajan' },
        { image: 'Ruth Seyer.jpg', fullName: 'Ruth Seyer' },
        { image: 'Brian Sullivan.jpg', fullName: 'Brian Sullivan' },
        { image: 'Antonio Sousa.jpg', fullName: 'Antonio Sousa' },
        { image: 'Clay Stiver.jpg', fullName: 'Clay Stiver' },
        { image: 'Jaime Vasquez.jpg', fullName: 'Jaime Vasquez' },
        { image: 'Usiel Meraz Cerna.jpg', fullName: 'Usiel Meraz Cerna' },
        { image: 'Edward Medal.jpg', fullName: 'Edward Medal' },
        { image: 'Tre McGill.jpg', fullName: 'Tre McGill' },
        { image: 'Supriya Moore.jpg', fullName: 'Supriya Moore' },
        { image: 'Thomas Michaelis.jpg', fullName: 'Thomas Michaelis' },
        { image: 'Brian Sanchez.jpg', fullName: 'Brian Sanchez' },
        { image: 'Maria Pangelina.jpg', fullName: 'Maria Pangelina' },
        { image: 'Tricia Palomino.jpg', fullName: 'Tricia Palomino' },
        { image: 'Vennessa Nava.jpg', fullName: 'Vennessa Nava' },
        { image: 'Omid Motlagh.jpg', fullName: 'Omid Motlagh' },
        { image: 'Mia Onodera.jpg', fullName: 'Mia Onodera' },
        { image: 'Jay Shelton.jpg', fullName: 'Jay Shelton' },
        { image: 'Julia Satterthwaite.jpg', fullName: 'Julia Satterthwaite' },
        { image: 'Benjamin Recktenwald.jpg', fullName: 'Benjamin Recktenwald' },
        { image: 'Megumi Shibamiya.jpg', fullName: 'Megumi Shibamiya' },
        { image: 'Elizabeth McCracken.jpg', fullName: 'Elizabeth McCracken' },
        { image: 'Derek Lu.jpg', fullName: 'Derek Lu' },
        { image: 'Kathleen McCarty.jpg', fullName: 'Kathleen McCarty' },
        { image: 'Paulo Sergio Luis.jpg', fullName: 'Paulo Sergio Luis' },
        { image: 'Deborah Mandac.jpg', fullName: 'Deborah Mandac' },
        { image: 'Monique Franzino.jpg', fullName: 'Monique Franzino' },
        { image: 'Barbara Frei-Jager.jpg', fullName: 'Barbara Frei-Jager' },
        { image: 'Kyle Jones.jpg', fullName: 'Kyle Jones' },
        { image: 'Hannah Gould.jpg', fullName: 'Hannah Gould' },
        { image: 'Molly Guadiamos.jpg', fullName: 'Molly Guadiamos' },
        { image: 'Yasmine Elgohary.jpg', fullName: 'Yasmine Elgohary' },
        { image: 'Renee Fallon.jpg', fullName: 'Renee Fallon' },
        { image: 'Lenore Espanola.jpg', fullName: 'Lenore Espanola' },
        { image: 'Mark Diamanti.jpg', fullName: 'Mark Diamanti' },
        { image: 'Brittany Duffy.jpg', fullName: 'Brittany Duffy' },
        { image: 'Scott De Ruiter.jpg', fullName: 'Scott De Ruiter' },
        { image: 'Hannah Banks.jpg', fullName: 'Hannah Banks' },
        { image: 'Jacinta Deavila.jpg', fullName: 'Jacinta Deavila' },
        { image: 'James Birdsong.jpg', fullName: 'James Birdsong' },
        { image: 'Bonnie Belshe.jpg', fullName: 'Bonnie Belshe' },
        { image: 'Laura Utile.jpg', fullName: 'Laura Utile' },
        { image: 'Karl Tang.jpg', fullName: 'Karl Tang' },
        { image: 'Tina Volzing.jpg', fullName: 'Tina Volzing' },
        { image: 'Shawn Voigt.jpg', fullName: 'Shawn Voigt' },
        { image: 'Ashley Voigt.jpg', fullName: 'Ashley Voigt' },
        { image: 'Maria Autran.jpg', fullName: 'Maria Autran' },
        { image: 'Marichu Agustin.jpg', fullName: 'Marichu Agustin' },
        { image: 'Sushma Bana.jpg', fullName: 'Sushma Bana' },
        { image: 'Norma Abarca.jpg', fullName: 'Norma Abarca' },
        { image: 'Ceazar Agront.jpg', fullName: 'Ceazar Agront' },
        { image: 'Emily Quan.jpg', fullName: 'Emily Quan' },
        { image: 'Eddy Puga.jpg', fullName: 'Eddy Puga' },
        { image: 'Ted Shinta.jpg', fullName: 'Ted Shinta' },
        { image: 'Shozo Shimazaki.jpg', fullName: 'Shozo Shimazaki' },
        { image: 'Ling Yu Shih.jpg', fullName: 'Ling Yu Shih' },
        { image: 'Shilpie Jain.jpg', fullName: 'Shilpie Jain' },
        { image: 'Esther Hsu.jpg', fullName: 'Esther Hsu' },
        { image: 'Douglas Leresche.jpg', fullName: 'Douglas Leresche' },
        { image: 'Sylvia Lam.jpg', fullName: 'Sylvia Lam' },
        { image: 'Josh Kuo.jpg', fullName: 'Josh Kuo' },
        { image: 'Nico Flores.jpg', fullName: 'Nico Flores' },
        { image: 'Hilary Barron.jpg', fullName: 'Hilary Barron' },
        { image: 'Pablo Paul Amaya.jpg', fullName: 'Pablo Paul Amaya' },
        { image: 'Jennifer Giarritta.jpg', fullName: 'Jennifer Giarritta' },
        { image: 'Melinda Gaul.jpg', fullName: 'Melinda Gaul' },
        { image: 'Jarvis Bui.jpg', fullName: 'Jarvis Bui' },
        { image: 'Joelle Buscher.jpg', fullName: 'Joelle Buscher' },
        { image: 'Rogelio Calderon.jpg', fullName: 'Rogelio Calderon' },
        { image: 'Mark Carpenter.jpg', fullName: 'Mark Carpenter' },
        { image: 'I-Chu Chang.jpg', fullName: 'I-Chu Chang' },
        { image: 'Nicholas Bonacorsi.jpg', fullName: 'Nicholas Bonacorsi' },
        { image: 'Doreen Bonde.jpg', fullName: 'Doreen Bonde' },
        { image: 'Sara Borelli.jpg', fullName: 'Sara Borelli' },
        { image: 'Robyn Brostowicz.jpg', fullName: 'Robyn Brostowicz' },
        { image: 'Elly Brown.jpg', fullName: 'Elly Brown' },
        { image: 'Vivian Chapman.jpg', fullName: 'Vivian Chapman' },
        { image: 'Janice Chen.jpg', fullName: 'Janice Chen' },
        { image: 'Megan Choate.jpg', fullName: 'Megan Choate' },
        { image: 'Brian Chow.jpg', fullName: 'Brian Chow' },
        { image: 'Pamela Chow.jpg', fullName: 'Pamela Chow' },
        { image: 'Melissa Clark.jpg', fullName: 'Melissa Clark' },
        { image: 'Benjamin Clausnitzer.jpg', fullName: 'Benjamin Clausnitzer' },
        { image: 'Ana Cortez Gutierrez.jpg', fullName: 'Ana Cortez Gutierrez' },
        { image: 'Gregory Crane.jpg', fullName: 'Gregory Crane' },
        { image: 'Courtney Crase-Delp.jpg', fullName: 'Courtney Crase-Delp' },
        { image: 'Richard Prinz.jpg', fullName: 'Richard Prinz' },
        { image: 'Leila Lurie.jpg', fullName: 'Leila Lurie' },
        { image: 'Edgar Marin.jpg', fullName: 'Edgar Marin' },
        { image: 'Lisa McCahill.jpg', fullName: 'Lisa McCahill' },
        { image: 'Julie Milgrom.jpg', fullName: 'Julie Milgrom' },
        { image: 'Sydney Fernandez.jpg', fullName: 'Sydney Fernandez' },
        { image: 'Kenneth Gan.jpg', fullName: 'Kenneth Gan' },
        { image: 'Sarah Finck.jpg', fullName: 'Sarah Finck' },
        { image: 'Glenn Fisher.jpg', fullName: 'Glenn Fisher' },
      ];




    let randomNum = Math.floor(Math.random() * silhouette.length);
    displayImage(silhouette[randomNum].image);

    createRadioOptions(silhouette, randomNum);
}

function displayImage(image) {
    document.getElementById('silhouetteImage').src = image;
}

function createRadioOptions(options, correctIndex) {
    let optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';


    let names = [options[correctIndex].fullName];
    correctFullName = options[correctIndex].fullName;


    while (names.length < 4) {
        let randomIndex = Math.floor(Math.random() * options.length);
        let randomName = options[randomIndex].fullName;
        if (!names.includes(randomName)) {
            names.push(randomName);
        }
    }

    names = shuffleArray(names);


    for (let i = 0; i < names.length; i++) {
        let radio = document.createElement('input');   //learned createElement from https://www.w3schools.com/jsref/met_document_createelement.asp
        radio.type = 'radio';
        radio.name = 'silhouetteOptions';
        radio.value = names[i];

        let label = document.createElement('label');
        label.innerHTML = names[i];

        optionsContainer.appendChild(radio);                              //Used appendChild from https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
        optionsContainer.appendChild(label);                              
        optionsContainer.appendChild(document.createElement('br'));       
    }
}

function shuffleArray(array) {     //got this function to shuffle the array from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer() {

    let selectedValue = document.querySelector('input[name="silhouetteOptions"]:checked');  //Used querySelector from https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

    if (selectedValue) {

        if (selectedValue.value == correctFullName) {
            showMessage('Correct! You got it right.');
        } else {
            showMessage('Wrong! The correct answer was ' + correctFullName + '.');
        }
    } else {
        showMessage('Please select an option.');
    }
}


function showMessage(message) {
    document.getElementById('message').textContent = message;
}


window.onload = startGame;    //got window.onload from https://www.w3schools.com/jsref/event_onload.asp


function returnToHome(homePage) {
    window.location.href = homePage;
    location.replace(homePage);
}