import { Conta } from "../model/conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Cores";

export class ContaController implements ContaRepository{
    procurarPorTitular(titular: string) {
       let listaContasPorTitular = this.listaContas.filter(c =>
            c.titular.toUpperCase().includes(titular.toUpperCase()))
       for( let conta of listaContasPorTitular){
        conta.visualizar();
       } 
    }
    private listaContas :Array<Conta> = new Array<Conta>();

    numero: number = 0;
    
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null)
            buscaConta.visualizar();
        else
        console.log("\nConta não foi Encontrada!");
    }
    listarTodas(): void {
       for(let conta of this.listaContas){
        conta.visualizar();
       } 
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.blue, "\nA Conta numero " + conta.numero+
                     " Foi criada com sucesso!", colors.reset);
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);
        if(buscaConta!== null){
            this.listaContas[this.listaContas.indexOf(buscaConta)]=conta;
            console.log(`A conta número ${conta.numero} foi atualizada com exito!`)
        }else
        console.log("\nConta não foi encontrada")
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta!= null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta),1);
            console.log(colors.fg.red, "\nA conta numero: " +
            numero + " foi apagada com sucesso", colors.reset);
        }else
        console.log(colors.fg.gray,"\nA Conta numero: "+ numero + "não foi encontrada!", colors.reset)
    }
    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta!= null){
            if(buscaConta.sacar(valor)=== true)
                console.log(`O saque na Conta numero ${numero} foi efetuado com exito!!`);
        }else
        console.log(colors.fg.gray,"\nA Conta numero: "+ numero + "não foi encontrada!", colors.reset)
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta!= null){
                buscaConta.depositar(valor);    
                console.log(`O deposito na Conta numero ${numero} foi efetuado com exito!!`);
        }else
        console.log(colors.fg.gray,"\nA Conta numero: "+ numero + "não foi encontrada!", colors.reset)
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem)
        let contaDestino = this.buscarNoArray(numeroDestino)
        if(contaOrigem !== null && contaDestino !== null){
            if(contaOrigem.sacar(valor)=== true){
                contaDestino.depositar(valor)
                console.log(`O deposito na Conta numero ${numeroOrigem} para a conta${numeroDestino}
                foi efetuado com exito!!`);
            }
                
        }else
        console.log(colors.fg.gray,"\nA Conta numero: "+ numeroOrigem + "não foi encontrada!", colors.reset)
    }

    public gerarNumero() : number{
        return ++ this.numero;
    }
    public buscarNoArray(numero:number): Conta | null{
        for(let conta of this.listaContas){
            if(conta.numero === numero){
                return conta;
            }
           } 
           return null;
    }
}