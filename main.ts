import inquirer from 'inquirer';


const quotations:string[] = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the midst of winter, I found there was, within me, an invincible summer. - Albert Camus",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt"
  ];

function getRendomQuotes ():string{
    const rendomIndex =Math.floor(Math.random()* quotations.length)
    return quotations[rendomIndex];
}

async function main (){
    const answers= await inquirer.prompt([
        {
           type: "input",
           name:"genrate",
           message:"press enter to genrate a rendom quotes",
        },

    ]);
    if (answers.genrate === ""){
        console.log('\nRandom quotes:');
        console.log(getRendomQuotes())
    }
    else{
        console.log("invalid input.plaese press enter to genrate a rendom quotes ")
    }
}
main()

