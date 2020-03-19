pragma solidity >=0.4.25 <0.7.0;
contract Manner {
    struct User {
        int256 score;
        int256 id;
        string firstname;
        string lastname;
        string state;
        uint amoutOfRequest;
    }

    User public user;
    constructor(int256 id, string memory firstname, string memory lastname)
        public
    {
        user.score = 100;
        user.firstname = firstname;
        user.lastname = lastname;
        user.id = id;
        user.state = "NORMAL";
    }
    function setScore(string memory _state) public returns (string memory) {
        if (keccak256(abi.encodePacked(_state)) == keccak256("LENDING")) {
            user.score += 5;
        } else if (
            keccak256(abi.encodePacked(_state)) ==
            keccak256("BORROWER_NOT_ACCEPT") ||
            keccak256(abi.encodePacked(_state)) == keccak256("REJECTED")
        ) {
            user.score -= 20;
        } else if (
            keccak256(abi.encodePacked(_state)) == keccak256("LENDING_LATE")
        ) {
            user.score -= 10;
        }
        if (user.score > 100) {
            user.score = 100;
        } else if (user.score < 0) {
            user.score = 0;
        }
    }
    function checkBan() public {
        if (user.score == 0) {
            user.state = "BANNED";
        }
    }

}
