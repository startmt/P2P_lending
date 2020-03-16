pragma solidity >=0.4.25 <0.7.0;
pragma experimental ABIEncoderV2;
contract Lending {
    struct ContractStruct {
        uint256 date;
        uint256 amount;
        bool isPaid;
        string evidence;
    }
    struct UserContractStruct {
        int256 borrowerId;
        int256 lenderId;
    }
    // Contractdata
    UserContractStruct public user;
    uint256 startTime;
    uint256 tenor;
    string state;
    mapping(uint256 => ContractStruct) public contractList;
    //
    constructor(
        uint256[] memory dateList,
        uint256[] memory amountList,
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
        tenor = dateList.length;
        state = "WAITING_BORROWER_ACCEPT_MONEY";
    }
    function getCurrentTenor() public view returns (uint256) {
        for (uint256 i = 0; i < tenor; i++) {
            if (contractList[i].isPaid == false) {
                return i;
            }
        }
        return 999;
    }
    function setEvidenceStamp(string memory _evidence) public {
        uint256 current = getCurrentTenor();
        if (
            current <= tenor &&
            (keccak256(abi.encodePacked(state)) !=
                keccak256("SUCCESS_LENDING") ||
                keccak256(abi.encodePacked(state)) !=
                keccak256("BORROWER_NOT_ACCEPT") ||
                keccak256(abi.encodePacked(state)) != keccak256("REJECTED"))
        ) {
            state = "LENDING";
            contractList[current].evidence = _evidence;
            contractList[current].isPaid = true;
        } else {
            state = "SUCCESS_LENDING";
        }
    }
    function startLending() public {
        state = "LENDING";
    }

    function checkOvertimeLending(uint256 _currentTime)
        public
        returns (string memory)
    {
        uint256 current = getCurrentTenor();
        if (
            current == 999 ||
            keccak256(abi.encodePacked(state)) != keccak256("LENDING") ||
            keccak256(abi.encodePacked(state)) != keccak256("LENDING_LATE")
        ) {
            return state;
        } else if (
            _currentTime >= startTime + 259200 &&
            keccak256(abi.encodePacked(state)) ==
            keccak256("WAITING_BORROWER_ACCEPT_MONEY")
        ) {
            state = "BORROWER_NOT_ACCEPT";
        } else if (
            keccak256(abi.encodePacked(state)) == keccak256("LENDING") ||
            keccak256(abi.encodePacked(state)) == keccak256("LENDING_LATE")
        ) {
            if (_currentTime >= contractList[current].date + 604800) {
                state = "REJECTED";
            } else if ((_currentTime >= contractList[current].date + 86400)) {
                state = "LENDING_LATE";
            }
        }
        return state;
    }
}
