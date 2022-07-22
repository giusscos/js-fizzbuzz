const gridElement = document.querySelector('.grid_container');

for (let i = 1; i <= 100; i++){    
    const threRes = 'Fizz';
    const fivRes = "Buzz";

    let divElement = document.createElement("div");
    divElement.classList.add('col');

    if( i % 3 === 0 && i % 5 === 0){
        divElement.append(threRes + fivRes);
        divElement.classList.add('fizz_buzz');
    } else if( i % 3 === 0){
        divElement.append(threRes);
        divElement.classList.add('fizz_solo');
    } else if( i % 5 === 0){
        divElement.append(fivRes);
        divElement.classList.add('buzz_solo');
    } else {
        divElement.append(i);
        divElement.classList.add('counter');
    }
    gridElement.append(divElement);
}