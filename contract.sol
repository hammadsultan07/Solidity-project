// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
// pragma solidity ^0.4.24;

contract mycontract {
    int quality; 
    int disaster;
    int amount;
    // string values;
    //address owner;
    
    //modifier onlyOwner(){
       // require(msg.sender==owner);
       // _;
   // }
  //  constructor() public {
     //   owner=msg.sender;
  //  }
    function getServiceQuality() public view returns(string memory) {
        if (quality>=90){
            return("superb quality");
        }
        else if (quality<90 && quality>=70){
            return("good quality");
        }
        else{
            return("worst quality");
        }
    }
    function setamount(int amountt) public{
        amount=amountt;
    }
    function setServiceQuality(int getinput) public{
        quality=getinput;
    }
    function getsustainibility() public view returns(string memory) {
        if (quality>69){
            return("service available");
        }
        else{
            return("service not available");
        }
    }
    function setDisasterRecovery(int getinput1) public{
        disaster=getinput1;
    }
    function getDisasterRecovery() public view returns(string memory) {
        if (disaster>=90){
            return("strong recovery");
        }
        else if(disaster<90 && disaster>=60){
            return("midium recovery");
        }
        else{
            return("low recovery");
        }
    }
    // function getPenalty() public view returns(string memory){
    //     if (speed-((speed*quality)/100)>50){
    //         return("no penalty");
    //     }
    //     else{
    //         return("penalty");
    //     }
    // }
    function getPenalty() public view returns(int){       //how to do that place holding thing here like %d,%f
        if (quality>=90){
            return 0;
        }
        else if (quality<90 && quality>=80){
            int k=amount-((amount*10)/100);
            return k;
        }
        else if (quality<80 && quality>=70){
            int k=amount-((amount*20)/100);
            return k;
        }
        else if (quality<70 && quality>=60){
            int k=amount-((amount*30)/100);
            return k;
        }
        else{
            int k=amount-((amount*50)/100);
            return k;
        }

    }
    // function get() public view returns(string memory) {
    //     return values;
    // }
    // function set(string memory value) public {
    //     values=value;
    // } 


   
}
