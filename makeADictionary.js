function makeADictionary (input){
    let inputLength = input.length;
    let dictionary = [];

    for (let i = 0; i<inputLength; i++){
        let currentTerm = JSON.parse(input[i]);
        let isPresent = false;
        
        dictionary.forEach(element => {
            if(element.hasOwnProperty(Object.keys(currentTerm)[0])){
                element[Object.keys(element)[0]] = Object.values(currentTerm)[0];
                isPresent = true;
                //console.log(element);
            }        
        });
        if (!isPresent){
        dictionary.push(currentTerm);
        }
        //let termData = input[i].split(':');
        //dictionary.push({Term: termData[0], Definition: termData[1]});

    }
    let sortedDictionary = dictionary.sort((a, b) => {
        const nameA = Object.keys(a)[0].toUpperCase();
        const nameB = Object.keys(b)[0].toUpperCase();
        //console.log(nameA);

        if(nameA<nameB){
            return -1;
        }
        if(nameA>nameB){
            return 1;
        }
        return 0;
    });
    dictionary.forEach(element => {
        console.log(`Term: ${Object.keys(element)[0]} => Definition: ${Object.values(element)[0]}`);
    });
    //console.log(sortedDictionary);
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );