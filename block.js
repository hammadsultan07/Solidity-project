var web3;
var address="0x2D9C85C7EE97f3cC369e4DDeB4FBbe084f1c4E14";
async function Connect()
{
    await window.web3.currentProvider.enable();
    web3=new Web3(window.web3.currentProvider);
}
if(typeof web3 !=='undefined')
{
    web3=new Web3(window.web3.currentProvider); 
}
else
{
    web3=new Web3(new Web3.Provider.HttpProvider("http://127.0.0.1:7545"));
}
var abi=[
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "amountt",
				"type": "int256"
			}
		],
		"name": "setamount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "getinput1",
				"type": "int256"
			}
		],
		"name": "setDisasterRecovery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "getinput",
				"type": "int256"
			}
		],
		"name": "setServiceQuality",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDisasterRecovery",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPenalty",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getServiceQuality",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getsustainibility",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
var contract=new web3.eth.Contract(abi,address);

/*function setamount(){
	var input1=document.getElementById("amount").value;
	web3.eth.getAccounts().then(function(account){
		return contract.methods.setamount(input1).send({from:account[0]});
	}).then(function(tmp)
	{
		$('#amount').val("");
	}).catch(function(tmp){
		alert(tmp);
	})
}

	function DisasterRecovery(){
		var input2=document.getElementById("sdr").value;
		web3.eth.getAccounts().then(function(account){
			return contract.methods.setDisasterRecovery(input2).send({from:account[0]});
		}).then(function(tmp)
		{
			$('#sdr').val("");
		}).catch(function(tmp){
			alert(tmp);
		})
	}
		function ServiceQuality(){
			var input3=document.getElementById("ssq").value;
			web3.eth.getAccounts().then(function(account){
				return contract.methods.setServiceQuality(input3).send({from:account[0]});
			}).then(function(tmp)
			{
				$('#ssq').val("");
			}).catch(function(tmp){
				alert(tmp);
			})
		}*/

		function showPen()
		{
			contract.methods.getPenalty().call().then(function(k){
				$("k").html(k);
			})
		}
