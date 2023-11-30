function oddOccurrences(arr) {

    let occurrences = {};
    let searchedWord = arr.split(' ');

    for (let word of searchedWord) {
        occurrences[word] = 0;

        if (word in occurrences) {
            occurrences[word] += 1;
        }
    }
    console.log(occurrences);
    
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
