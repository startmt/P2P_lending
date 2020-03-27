pragma solidity >=0.4.25 <0.7.0;
pragma experimental ABIEncoderV2;
import "./Manner.sol";
contract Lending {
    struct ContractStruct {
        uint256 date;
        uint256 amount;
        bool isPaid;
        string evidence;
        uint256 paidDate;
    }
    struct UserContractStruct {
        int256 id;
        Manner manner;
    }
    // Contractdata
    UserContractStruct public borrower;
    UserContractStruct public lender;
    uint256 startTime;
    uint256 tenor;
    string state;
    mapping(uint256 => ContractStruct) public contractList;
    //
    constructor(
        uint256[] memory dateList,
        uint256 amount,
        int256 _borrowerId,
        address borrowerAddress,
        int256 _lenderId,
        address lenderAddress
    ) public {
        for (uint256 i = 0; i < dateList.length; i++) {
            contractList[i] = ContractStruct({
                date: dateList[i],
                amount: amount,
                isPaid: false,
                evidence: "",
                paidDate: 0
            });
        }
        borrower = UserContractStruct({
            id: _borrowerId,
            manner: Manner(borrowerAddress)
        });
        lender = UserContractStruct({
            id: _lenderId,
            manner: Manner(lenderAddress)
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

    function getState() public view returns (string memory) {
        return state;
    }

    function setBorrowerScore(uint256 _currentTime) public {
        borrower.manner.setScore(checkOvertimeLending(_currentTime));
    }
    function getBorrowerDetail()
        public
        view
        returns (int256, int256, string memory, string memory, string memory)
    {
        return borrower.manner.user();
    }
    function getLenderDetail()
        public
        view
        returns (int256, int256, string memory, string memory, string memory)
    {
        return lender.manner.user();
    }

    function setEvidenceStamp(string memory _evidence, uint256 _currentTime)
        public
        returns (string memory)
    {
        uint256 current = getCurrentTenor();
        if (
            keccak256(abi.encodePacked(state)) ==
            keccak256("SUCCESS_LENDING") ||
            keccak256(abi.encodePacked(state)) ==
            keccak256("BORROWER_NOT_ACCEPT") ||
            keccak256(abi.encodePacked(state)) == keccak256("REJECTED")
        ) {
            return state;
        } else if (current <= tenor) {
            contractList[current].evidence = _evidence;
            contractList[current].isPaid = true;
            contractList[current].paidDate = _currentTime;
            if (getCurrentTenor() > tenor) {
                state = "SUCCESS_LENDING";
                return "SUCCESS_LENDING";
            } else {
                return "PAY_SUCCESS";
            }
        }
        return state;
    }
    function startNormalLending() public {
        if (
            keccak256(abi.encodePacked(state)) == keccak256("LENDING") ||
            keccak256(abi.encodePacked(state)) == keccak256("LENDING_LATE") ||
            keccak256(abi.encodePacked(state)) ==
            keccak256("WAITING_BORROWER_ACCEPT_MONEY")
        ) {
            state = "LENDING";
        }
    }

    function checkOvertimeLending(uint256 _currentTime)
        public
        returns (string memory)
    {
        uint256 current = getCurrentTenor();
        if (
            keccak256(abi.encodePacked(state)) == keccak256("LENDING") ||
            keccak256(abi.encodePacked(state)) == keccak256("LENDING_LATE")
        ) {
            if (_currentTime >= contractList[current].date + 604800) {
                state = "REJECTED";
            } else if ((_currentTime >= contractList[current].date + 86400)) {
                state = "LENDING_LATE";
            }
        } else if (
            keccak256(abi.encodePacked(state)) ==
            keccak256("WAITING_BORROWER_ACCEPT_MONEY")
        ) {
            if (_currentTime >= startTime + 259200) {
                state = "BORROWER_NOT_ACCEPT";
            }
        }
        return state;
    }
}
