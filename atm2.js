let accountDetail =[
    {AccountName: 'Tomiwa', AccountNumber: 3021567496},
    {AccountName: 'Tunde', AccountNumber: 3020594007},
    {AccountName: 'Rotimi', AccountNumber: 3010045678},
    {AccountName: 'Posi', AccountNumber: 3000074956},
] 
function ActiveBtn(event) {
    let name = document.getElementById('AcctName')
    let userId = event.target.value
    let container = []
    for (let i = 0; i < accountDetail.length; i++) {
        if (userId.length > 10) {
           container = 'the AccountNumber is more than 10'
        }

        else if (userId.length < 10) {
            container = 'Your AccountNumber is less than 10 '
        }

        else{
            if (accountDetail[i].AccountNumber == userId) {
                name.innerHTML = accountDetail[i].AccountName  
                break 
            }

            else{
                container = 'Account does not exist'
            }
        }

        name.innerHTML = container
    
    }
    
}

let reponse = document.getElementById('response')
var balanceInput = document.querySelector('#balanceInput')
var activeAccount = document.querySelector('#activeAccount')
var balanceAccount = document.querySelector('#balanceAccount')

function devTom() {
    if (activeAccount.value == true) {
        if (balanceAccount.value == true && balanceInput.value > 0) {
            response.innerHTML = 'your balance is:' + balanceInput.value;   
        }

        else if(balanceAccount.value == false){
            reponse.innerHTML = 'your account balance is empty'
        }
        else if(balanceInput.value == 0){
            response.innerHTML = 'insufficient fund or you have zero(0) balance'

        }

        else if(balanceInput.value < 0){
            response.innerHTML = 'your account is negative contact our Costumer care service'

        }

        
    }

    else{
        response.innerHTML = 'Thank u have a nice day'
    }
   
    
}


        
