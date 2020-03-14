pragma solidity >=0.4.25 <0.7.0;
pragma experimental ABIEncoderV2;
contract Lending {
    struct ContractStruct {
        string date;
        int256 amount;
        bool isPaid;
        string evidence;
    }
    struct UserContractStruct {
        int256 borrowerId;
        int256 lenderId;
    }
    // Contractdata
    UserContractStruct public user;
    uint256 numberOf;
    mapping(uint256 => ContractStruct) public contractList;
    //
    constructor(
        string[] memory dateList,
        int256[] memory amountList,
        bool[] memory isPaidList,
        string[] memory evidenceList,
        int256 _borrowerId,
        int256 _lenderId
    ) public {
        for (uint256 i = 0; i < dateList.length; i++) {
            contractList[i] = ContractStruct({
                date: dateList[i],
                amount: amountList[i],
                isPaid: isPaidList[i],
                evidence: evidenceList[i]
            });
        }
        user = UserContractStruct({
            borrowerId: _borrowerId,
            lenderId: _lenderId
        });
        numberOf = 0;
    }

}
