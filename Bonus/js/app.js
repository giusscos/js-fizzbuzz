const gridElement = document.querySelector('.grid_container');

for (let i = 1; i <= 100; i++){    
    const threRes = 'Fizz';
    const fivRes = "Buzz";

    let divElement = document.createElement("div");
    divElement.classList.add('col');

    if( i % 3 === 0 && i % 5 === 0){
        divElement.append(threRes + fivRes);
    } else if( i % 3 === 0){
        divElement.append(threRes);
    } else if( i % 5 === 0){
        divElement.append(fivRes);
    } else {
        divElement.append(i);
    }
    gridElement.append(divElement);
}