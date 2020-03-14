pragma solidity >=0.4.25 <0.7.0;

contract Interest {
    struct InterestStruct {
        int256 allInterest;
        int256 fee;
    }

    InterestStruct public interest;

    constructor() public {
        interest.allInterest = 10;
        interest.fee = 2;
    }
    function getNetInterest() public view returns (int256) {
        return (interest.allInterest - interest.fee);
    }
    function setAllInterest(int256 _interest) public {
        interest.allInterest = _interest;
    }
    function setFee(int256 _fee) public {
        interest.fee = _fee;
    }

}
