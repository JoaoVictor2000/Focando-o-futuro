class ContBancaria {

    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;//colocamos o underline pois a tera get e set, pois são funções
    }
    //getter e setter
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        this._saldo = valor;
    }


    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada';
        }

        this._saldo = this._saldo - valor;
        return this._saldo; // para a pessoa ver quantos que ficou 
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}
class contaCorrente extends ContBancaria {
    constructor(agencia, numero, cartao_credito) {
        super(agencia, numero); //mandando tudo que a gente recebeu para a classe pai pelo super
        this.tipo = 'Conta Corrente';
        this._cartao_credito = cartao_credito;
    }
    get cartao_credito() {
        return this._cartao_credito;
    }
    set cartao_credito(valor) {
        this._cartao_credito = valor;
    }
}
class ContaPoupança extends ContBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupança'
    }
}

class ContaUniversitaria  extends ContBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitaria';
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Concluida';
        }
       
            return  this._saldo = this._saldo - valor;
    }
}