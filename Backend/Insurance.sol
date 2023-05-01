// SPDX-License-Identifier: MIT

pragma solidity ^0.8;

contract Client {
    // Unique client identifier.
    string public unique_id;
    // Client country.
    string public country;
    // Client age.
    uint256 public age;
    // Client gender.
    string public gender;
    // Client phone number.
    uint256 public phone_number;
    // Client email.
    string public email;
    // Client plan start, will formatted as a timestamp and sent from frontend.
    uint256 public start;
    // Client plan end, will formatted as a timestamp and sent from frontend.
    uint256 public end;
    // The plan whch the client selected ------ add it here once it is created.
    // InsurancePlan plan;

    event newInsuranceClient(
        string _uniqueId,
        string _country,
        uint256 _age,
        string _gender,
        uint256 _phoneNumber,
        string _email,
        uint256 _start,
        uint256 _end
        // InsurancePlan _plan
    );

    constructor(
        string memory _uniqueId,
        string memory _country,
        uint256 _age,
        string memory _gender,
        uint256 _phoneNumber,
        string memory _email,
        uint256 _start,
        uint256 _end // InsurancePlan memory _plan
    ) {
        unique_id = _uniqueId;
        country = _country;
        age = _age;
        gender = _gender;
        phone_number = _phoneNumber;
        email = _email;
        start = _start;
        end = _end;
        // plan = _plan;

        emit newInsuranceClient(
            _uniqueId,
            _country,
            _age,
            _gender,
            _phoneNumber,
            _email,
            _start,
            _end
            // _plan
        );
    }
}

contract Insure {
    Client client;

    mapping(string => Client) public clients_list;

    function newClient(
        string memory _uniqueId,
        string memory _country,
        uint256 _age,
        string memory _gender,
        uint256 _phoneNumber,
        string memory _email,
        uint256 _start,
        uint256 _end
    ) public returns (address) {
        client = new Client(
            _uniqueId,
            _country,
            _age,
            _gender,
            _phoneNumber,
            _email,
            _start,
            _end
        );

        clients_list[_uniqueId] = client;

        // check if the client has pushed to the list.
        require(
            address(clients_list[_uniqueId]) == address(client),
            "Client creation failed."
        );

        // Will be given to client as his unique identification string
        // So that he can use it later in future for claim.
        return address(clients_list[_uniqueId]);
    }
}
