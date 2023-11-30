function cutReverse(str) {

    let middleIdx = str.length / 2;

    let leftHalf = str.slice(0, middleIdx).split('').reverse().join('');   // от началото до средата чрез spit(''),за да го обърнем в масив за да ползваме .reverse() и .join('') за да го върнем вече в обратен ред
    let rightHalf = str.slice(middleIdx).split('').reverse().join('');     // от средата до края (ако не добавим до къде, метода автоматично си ги изброява до края)

    console.log(leftHalf);
    console.log(rightHalf);

}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');