class Alert{
    
    constructor(coin, price){
        this.coin = coin;
        this.price = price;
    }

    attach(){
        console.log('entro');
    }

    detach(){
        console.log('salgo')
    }

    notify(){
        console.log('notifico')
    }
}