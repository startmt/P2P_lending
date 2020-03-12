pragma solidity >=0.4.25 <0.7.0;

contract Lending {
    struct ContractStruct {
        string date;
        int256 amount;
        bool isPaid;
        string evidence;
    }
    struct LendingStruct {
        int256 id;
        int256 amount;
        int256 interest;
        // list รายการที่ยังไม่จ่าย
        // list รายการเดือนที่จ่ายแล้ว
    }

    LendingStruct public lending;

    // function getContract() public view returns (int256) {
    //     return (lending.alllending - lending.fee);
    // }
    // function setAlllending(int256 _lending) public {
    //     lending.alllending = _lending;
    // }
    // function setFee(int256 _fee) public {
    //     lending.fee = _fee;
    // }

}
