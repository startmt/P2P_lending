pragma solidity >=0.4.25 <0.7.0;
pragma experimental ABIEncoderV2;
import "./Manner.sol";
import "./Interest.sol";


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
        bool withdrawn;
        string evidence;
    }
    struct LenderContract {
        int256 fee;
        int256 amount;
    }
    // Contractdata
    UserContractStruct public borrower;
    LenderContract public lenderContract;
    UserContractStruct public lender;
    uint256 public tenor;
    string public state;
    uint256 public id;
    Interest interest = Interest(0xd0ee9F1B0580897FdB42e3fD14361D89441Cf938);
    mapping(uint256 => ContractStruct) public contractList;

    //
    constructor(
        uint256 _id,
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
            manner: Manner(borrowerAddress),
            withdrawn: false,
            evidence: ""
        });
        lender = UserContractStruct({
            id: _lenderId,
            manner: Manner(lenderAddress),
            withdrawn: false,
            evidence: ""
        });
        (, int256 fee) = interest.interest();
        lenderContract = LenderContract({
            fee: (fee),
            amount: int256(amount * dateList.length)
        });
        id = _id;
        tenor = dateList.length;
        state = "LENDING";
    }

    function getCurrentTenor() public view returns (uint256) {
        for (uint256 i = 0; i < tenor; i++) {
            if (contractList[i].isPaid == false) {
                return i;
            }
        }
        return 999;
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
        } else if (current <= tenor && borrower.withdrawn == true) {
            contractList[current].evidence = _evidence;
            contractList[current].isPaid = true;
            contractList[current].paidDate = _currentTime;
            if (getCurrentTenor() > tenor) {
                state = "SUCCESS_LENDING";
                return state;
            } else {
                return "PAY_SUCCESS";
            }
        }
        return state;
    }

    function startNormalLending() public {
        if (
            keccak256(abi.encodePacked(state)) == keccak256("LENDING") ||
            keccak256(abi.encodePacked(state)) == keccak256("LENDING_LATE")
        ) {
            state = "LENDING";
        }
    }

    function startLending(string memory evidence) public {
        borrower.withdrawn = true;
        borrower.evidence = evidence;
    }

    function finishLending(string memory evidence) public {
        lender.withdrawn = true;
        lender.evidence = evidence;
    }

    function checkOvertimeLending(uint256 _currentTime)
        public
        returns (string memory)
    {
        uint256 current = getCurrentTenor();
        if (borrower.withdrawn == false) {
            if (_currentTime >= contractList[current].date + 259200000) {
                state = "BORROWER_NOT_ACCEPT";
            }
        } else if (
            keccak256(abi.encodePacked(state)) == keccak256("LENDING") ||
            keccak256(abi.encodePacked(state)) == keccak256("LENDING_LATE")
        ) {
            if (_currentTime >= contractList[current].date + 604800000) {
                state = "REJECTED";
            } else if (
                (_currentTime >= contractList[current].date + 86400000)
            ) {
                state = "LENDING_LATE";
            }
        }
        return state;
    }
}
