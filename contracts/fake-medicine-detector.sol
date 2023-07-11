pragma solidity ^0.8.0;

contract FakeMedicineDetector {
    address private owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this operation");
    }

    constructor() {
        owner = msg.sender;
    }

    mapping(bytes32 => Medicine) public medicineList;

    struct Medicine {
        bytes32 medicineID;
        string medicineName;
        uint256 medicinePrice;
        bool isFake;
        uint256 uploadTime;
        uint256 reportTime;
        string manufacturer;
        uint256 productionDate;
        uint256 expiryDate;
    }

    event MedicineUploaded(
        bytes32 indexed medicineID,
        string medicineName,
        uint256 medicinePrice,
        string manufacturer,
        uint256 productionDate,
        uint256 expiryDate
    );

    event FakeMedicineReported(bytes32 indexed medicineID);

    function uploadMedicine(
        bytes32 id,
        string memory name,
        uint256 price,
        string memory manufacturer,
        uint256 productionDate,
        uint256 expiryDate
    ) public onlyOwner {
        require(medicineList[id].medicineID == bytes32(0), "Medicine already exists");
        medicineList[id] = Medicine({
            medicineID: id,
            medicineName: name,
            medicinePrice: price,
            isFake: false,
            uploadTime: block.timestamp,
            reportTime: 0,
            manufacturer: manufacturer,
            productionDate: productionDate,
            expiryDate: expiryDate
        });
        emit MedicineUploaded(id, name, price, manufacturer, productionDate, expiryDate);
    }

    function reportFakeMedicine(bytes32 medicineId) public onlyOwner {
        require(medicineList[medicineId].medicineID != bytes32(0), "Medicine not found");
        require(!medicineList[medicineId].isFake, "Medicine already reported as fake");
        medicineList[medicineId].isFake = true;
        medicineList[medicineId].reportTime = block.timestamp;
        emit FakeMedicineReported(medicineId);
    }

    function isFakeMedicine(bytes32 medicineId) public view returns (bool) {
        return medicineList[medicineId].isFake;
    }
}
