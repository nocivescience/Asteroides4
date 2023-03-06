var laser;
function newShip(){
    return {
        lasers:[],
    }
}
function shootLaser(){
    laser = newShip();
    for( let i=0;i <10; i++){
        laser.lasers.push({
            x: i,
            y: Math.pow(i,2),
            letter: String.fromCharCode(65+i),
        });
    }
    return laser;
}
console.log(shootLaser())