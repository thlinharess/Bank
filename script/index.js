/* document */

class contaBancria {
    saldo;
    
    sacar(valor){
        if(valor < this.saldo)
        this.saldo -= valor;
    }
    
    depositar(valor){
        if(valor > 0 )
        this.saldo += valor; 
    }

    transferir(valor) {
        const valorScado = this.sacar(valor);
        this.saldoPoup += valorScado;
    }
    
}

class contaPoup {
    saqueDePoup;
    
    sacarPoup(valor) {
        this.saldoPoup -= valor;
    }
    
    depositarPoup(valor) {
        this.saldoPoup += valor;
    }
    
    transferirPoup(valor) {
        const saqueDePoup = this.sacarPoup(valor);
        this.saldo += saqueDePoup;
    }
}

const firstAccount = new contaBancria();
firstAccount.saldo = 190;
const accountValue = document.querySelector('[data-js="accountValue"]').innerText = "R$: " + Number(firstAccount.saldo);





