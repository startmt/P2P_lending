pragma solidity >=0.4.25 <0.7.0;
contract Manner {
    struct User {
        int256 score;
        int256 id;
        string firstname;
        string lastname;
    }
    User public user;
    constructor(int256 id, string memory firstname, string memory lastname)
        public
    {
        user.score = 100;
        user.firstname = firstname;
        user.lastname = lastname;
        user.id = id;
    }
    function getUser()
        public
        view
        returns (string memory, string memory, int256)
    {
        return (user.firstname, user.lastname, user.score);
    }
    function setScore(int256 _score, string memory _operation) public {
        if (keccak256(abi.encodePacked(_operation)) == keccak256("INCREASE")) {
            user.score += _score;
        } else {
            user.score -= _score;
        }

        if (user.score > 100) {
            user.score = 100;
        } else if (user.score < 0) {
            user.score = 0;
        }
    }

}
