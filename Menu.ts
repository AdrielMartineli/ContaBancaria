import readline = require("readline-sync");
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from "./src/util/Cores";
import { ContaController } from "./src/controller/ContaController";
import { read } from "fs";
   export function main(){
   let contas: ContaController = new ContaController;
   
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino:number;
    let titular: string;
    const tipoContas = ['Conta Corrente' , 'Conta Poupanca'];

    // Objeto da Classe ContaCorrente (Teste)
     const contaCorrente: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "Mariana", 15000, 1000);
     contas.cadastrar(contaCorrente);
     
 
     // Objeto da Classe ContaPoupanca (teste)
     const contaPoupanca: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 123, 2, "Victor", 1000, 10);
    contas.cadastrar(contaPoupanca);
     
    while(true){
        console.log(colors.bg.black, colors.fg.yellow,
                    "**************************************************")
        console.log("                                                  ")
        console.log("             BANCO DO BRAZIL COM Z                ")
        console.log("**************************************************")
        console.log("                                                  ")
        console.log("         1 - Criar Conta                          ")
        console.log("         2 - Listar todas as Contas               ")
        console.log("         3 - Buscar Conta por Numero              ")
        console.log("         4 - Atualizar Dados da Conta             ")
        console.log("         5 - Apagar                               ")
        console.log("         6 - Sacar                                ")
        console.log("         7 - Depositar                            ")
        console.log("         8 - Transferir valores entre Contas      ")
        console.log("         9 - Buscar conta por Titular             ")
        console.log("         0 - Sair                                 ")
        console.log("                                                  ")
        console.log("**************************************************")
        console.log("                                                  ")
        console.log("Escolha a opcao desejada: ",
                    colors.reset);
        opcao = readline.questionInt("");

        if(opcao>9 || opcao<0){
            console.log(colors.fg.greenstrong,
                "Digite um numero entre 0 e 9!!")
                console.log(colors.reset,"");
                keyPress() 
        }
            if(opcao == 0 ){
                console.log(colors.fg.greenstrong,
                    "\nBanco do Brazil com Z - O seu futuro começa aqui!!");
                console.log(colors.reset,"");
                about();
                process.exit(0);
            }
        switch(opcao){
            case 1:
                console.log("\n Opcao 1 - Criar Conta");
                console.log("Digite o Numero da agência: ")
                agencia = readline.questionInt("")
                console.log("Digite o Nome do titular: ")
                titular = readline.question("")
                console.log("Informe o tipo da Conta: ")
                tipo = readline.keyInSelect(tipoContas, "", {cancel : false}) + 1;
                console.log("Digite o Saldo da Conta: ")
                saldo = readline.questionFloat("")

                switch(tipo){
                    case 1:
                        console.log("Digite o Limite da Conta: ");
                        limite = readline.questionFloat(""); 
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        ) 
                        break;
                    case 2:
                        console.log("Digite o Dia do Anivesário da Conta: ");
                        aniversario = readline.questionInt("");  
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }

                keyPress() 
                break;  
            case 2:
                console.log("\n Opcao 2 - Listar todas as Contas");
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log("\n Opcao 3 - Buscar Conta por Numero");
                console.log("Digite o Numero da conta: ")
                numero = readline.questionInt("")

                contas.procurarPorNumero(numero);
                keyPress()
                break;
            case 4:
                console.log("\n Opcao 4 - Atualizar Dados da Conta");
                console.log("Digite o Numero da conta: ")
                numero = readline.questionInt("")
                let conta = contas.buscarNoArray(numero)
                if(conta !== null){
                    console.log("\n Opcao 1 - Criar Conta");
                    console.log("Digite o Numero da agência: ")
                    agencia = readline.questionInt("")
                    console.log("Digite o Nome do titular: ")
                    titular = readline.question("")
                    tipo = conta.tipo
                    console.log("Digite o Saldo da Conta: ")
                    saldo = readline.questionFloat("")
    
                    switch(tipo){
                        case 1:
                            console.log("Digite o Limite da Conta: ");
                            limite = readline.questionFloat(""); 
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            ) 
                            break;
                        case 2:
                            console.log("Digite o Dia do Anivesário da Conta: ");
                            aniversario = readline.questionInt("");  
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }
                }else{
                    console.log("A conta não foi encontrada");
                }
                keyPress()
                break;
            case 5:
                console.log("\n Opcao 5 - Apagar");
                console.log("Digite o numero da conta: ");
                numero = readline.questionInt("");
                contas.deletar(numero);
                keyPress()
                break;
            case 6:
                console.log("\n Opcao 6 - Sacar");
                console.log("Digite o numero da conta: ");
                numero = readline.questionInt("");
                console.log("Digite o valor do Saque: ")
                valor = readline.questionFloat("")

                contas.sacar(numero, valor);

                1
                keyPress()
                break;
            case 7:
                console.log("\n Opcao 7 - Depositar");
                console.log("Digite o numero da conta: ");
                numero = readline.questionInt("");
                console.log("Digite o valor do Deposito ")
                valor = readline.questionFloat("")

                contas.depositar(numero, valor);
                keyPress()
                break;
            case 8:
                console.log("\n Opcao 8 - Transferir valores entre Contas");
                console.log("Digite o numero da conta de Origem: ");
                numero = readline.questionInt("");
                console.log("Digite o numero da conta de Destino: ");
                numeroDestino = readline.questionInt("");
                console.log("Digite o valor do Deposito ")
                valor = readline.questionFloat("")
                contas.transferir(numero, numeroDestino, valor);
                keyPress()
                break;
            case 9:
                console.log("\n Opcao 9 - Consultar conta por Titular");
                console.log("Digite o Nome do titular: ");
                titular = readline.question("");

                contas.procurarPorTitular(titular);
                keyPress();
                break;
        }
    }
   }
   
   export function about(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Adriel Modesto Martineli");
    console.log("*****************************************************");
   }
   function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}
  
    
main();