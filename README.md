# makeADictionary
 a dictionary program

a function that recieves an array with strings in the form of JSON's.
The program combines the string into one array of objects. Every string from the input array holds terms and a description. If the program receives the same term twice, it replaces it with the new definition. Last the program prints every term and definition in that dictionary on new line in format:
`Term: ${term} => Definition: ${definition}` , sorted alphabetically.