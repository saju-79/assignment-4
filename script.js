

const input = prompt('plce enter your numbr')
const totalcatMoney = cashOut(input);
console.log(totalcatMoney);
function cashOut(money){
     const vetTaka = money * 1.75 / 100;
    
    if (typeof money !== '' && money >= 0) {
        return vetTaka;
    }

    else{

        return 'invailet';
    }
}
    

        

