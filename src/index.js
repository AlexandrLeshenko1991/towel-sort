// You should implement your task here.

module.exports = towelSort = (matrix) =>{
    let arrFinal = [];
    if (matrix){
        matrix.forEach(function (item, i) {
            if (i % 2 !== 0) {
                arrFinal.push(...item.reverse())
            } else {
                arrFinal.push(...item)
            }
        });
    }
    return arrFinal;
}
