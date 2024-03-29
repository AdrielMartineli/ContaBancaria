import readline = require("readline-sync");
import { Conta } from "./src/model/conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { colors } from "./src/util/Cores";
   export function main(){
    let opcao : number;
   
 
    // Objeto da Classe ContaCorrente (Teste)
     const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
     contacorrente.visualizar();
     contacorrente.sacar(2000);
     contacorrente.visualizar();
     contacorrente.depositar(1000);
     contacorrente.visualizar();
 
     // Objeto da Classe ContaPoupanca (teste)
     const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
     contapoupanca.visualizar();
     contapoupanca.sacar(200);
     contapoupanca.visualizar();
     contapoupanca.depositar(1000);
     contapoupanca.visualizar();

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
        console.log("         9 - Sair                                 ")
        console.log("                                                  ")
        console.log("**************************************************")
        console.log("                                                  ")
        console.log("Escolha a opcao desejada: ",
                    colors.reset);
        opcao = readline.questionInt("");

        if(opcao>9 || opcao<1){
            console.log(colors.fg.greenstrong,
                "Digite um numero entre 1 e 9!!")
                console.log(colors.reset,"");
                keyPress() 
        }
            if(opcao == 9 ){
                console.log(colors.fg.greenstrong,
                    "\nBanco do Brazil com Z - O seu futuro começa aqui!!");
                console.log(colors.reset,"");
                about();
                process.exit(0);
            }
        switch(opcao){
            case 1:
                console.log("\n Opcao 1 - Criar Conta");
                keyPress() 
                break;  
            case 2:
                console.log("\n Opcao 2 - Listar todas as Contas");
                keyPress()
                break;
            case 3:
                console.log("\n Opcao 3 - Buscar Conta por Numero");
                keyPress()
                break;
            case 4:
                console.log("\n Opcao 4 - Atualizar Dados da Conta");
                keyPress()
                break;
            case 5:
                console.log("\n Opcao 5 - Apagar");
                keyPress()
                break;
            case 6:
                console.log("\n Opcao 6 - Sacar");
                keyPress()
                break;
            case 7:
                console.log("\n Opcao 7 - Depositar");
                keyPress()
                break;
            case 8:
                console.log("\n Opcao 8 - Transferir valores entre Contas");
                keyPress()
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