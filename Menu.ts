import readline = require("readline-sync");

   export function main(){
    let opcao : number;

    do{
        console.log("**************************************************")
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
        console.log("Escolha a opcao desejada: ")
        opcao = readline.questionInt("");

        if(opcao>9 || opcao<1){
            console.log("Digite um numero entre 1 e 9!!")
        }

        switch(opcao){
            case 1:
                console.log("\n Opcao 1 - Criar Conta");

                break;
                
            case 2:
                console.log("\n Opcao 2 - Listar todas as Contas");

                break;
            case 3:
                console.log("\n Opcao 3 - Buscar Conta por Numero");

                break;
            case 4:
                console.log("\n Opcao 4 - Atualizar Dados da Conta");

                break;
            case 5:
                console.log("\n Opcao 5 - Apagar");

                break;
            case 6:
                console.log("\n Opcao 6 - Sacar");

                break;
            case 7:
                console.log("\n Opcao 7 - Depositar");

                break;
            case 8:
                console.log("\n Opcao 8 - Transferir valores entre Contas");

                break;
        }
    }while(opcao != 9)
    console.log(" Obrigado por usar o BANCO DO BRAZIL COM Z     ");
    about()
   }
   
   export function about(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Adriel Modesto Martineli");
    console.log("*****************************************************");
   }

  
    
main();