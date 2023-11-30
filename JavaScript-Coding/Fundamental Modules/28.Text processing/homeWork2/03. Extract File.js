function extractFile(path) {

    let fileInfo = path.split('\\').pop();            // сплитваме по \\ и вадим последния елемент

    let lastDotIdx = fileInfo.lastIndexOf('.');       // намираме индекса на последната точка

    let fileName = fileInfo.slice(0, lastDotIdx);     // отрязваме от последната точка до последния елемент
    let fileExtension = fileInfo.slice(lastDotIdx + 1);   // отрязваме последния елемент (+1) за да не включим точката

    console.log(`File name: ${fileName}`);        // печатаме името на файла
    console.log(`File extension: ${fileExtension}`);   // печатаме 

}


extractFile('C:\\Internal\\training-internal\\Template.pptx')