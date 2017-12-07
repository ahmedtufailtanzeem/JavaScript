var objectList = [
    {

        lName: 'Dang',
        displayName: 'Luan Dang',
        phNo: '123=-456',
        fName: 'Luan'

    },
    {
        fName: 'samir',
        lName: 'gandhi'
    }
];

var sampleObject1 = {
    fName: 'Luan',
    lName: 'Dang'
};

var sampleObject2 = {
    fName: 'Akansha',
    lName: 'foo'
};

var resultsObjectsArray = [];

function findObjects(objectList, sampleObject) {
    for (var i = 0; i < objectList.length; i++) {
        var obj = objectList[i];
        console.log(obj);
        console.log(obj.fName);
        if (obj.fName !== undefined && obj.fName === sampleObject.fName) {
            if (obj.lName !== undefined && obj.lName === sampleObject.lName) {
                resultsObjectsArray.push(obj);
            }
        }
    }
}

findObjects(objectList, sampleObject1);
console.log(resultsObjectsArray);

findObjects(objectList, sampleObject2);
console.log(resultsObjectsArray);
