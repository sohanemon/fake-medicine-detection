pragma solidity ^0.8.0;

contract FakeMedicineDetector {
    mapping(bytes32 => Medicine) public medicineList;

    struct Medicine {
        bytes32 medicineID;
        string medicineName;
        uint256 medicinePrice;
        bool isFake;
    }

    function uploadMedicine(bytes32 id, string memory name, uint256 price) public {
        require(medicineList[id].medicineID == bytes32(0), "Medicine already exists");
        medicineList[id] = Medicine({
            medicineID: id,
            medicineName: name,
            medicinePrice: price,
            isFake: false
        });
    }

    function reportFakeMedicine(bytes32 medicineId) public {
        require(medicineList[medicineId].medicineID != bytes32(0), "Medicine not found");
        medicineList[medicineId].isFake = true;
    }

    function isFakeMedicine(bytes32 medicineId) public view returns (bool) {
        return medicineList[medicineId].isFake;
    }
}
