const DataSet2 = [
    {
        "Name": "Dhoni",
        "age": 42,
        "role": "Keeper"
    },
    {
        "Name": "Virat Kholi",
        "age": 33,
        "role": "Batsman"
    },
    {
        "Name": "Dhawan",
        "age": 30,
        "role": "Batsman"
    },
    {
        "Name": "KL Rahul",
        "age": 29,
        "role": "Batsman"
    },
    {
        "Name": "Shreyas iyer",
        "age": 27,
        "role": "Batsman"
    },
    {
        "Name": "Rishab Pant",
        "age": 27,
        "role": "Keeper"
    },
    {
        "Name": "jadeja",
        "age": 31,
        "role": "All-rounder"
    },
    {
        "Name": "Ashwin",
        "age": 34,
        "role": "All-rounder"
    },
    {
        "Name": "Siraj",
        "age": 27,
        "role": "Bowler"
    },
    {
        "Name": "Bumbrah",
        "age": 27,
        "role": "Bowler"
    }

]



const assendingOrderForDataSet2 = (array, filterOption = "name") => {
    let dataSet = [...array];
    let length = array.length;
    if (filterOption == "age") {
        for (i = 0; i < length; i++) {
            forLoopYForAge(dataSet, length, i)
        }
    }
    else {
        for (i = 0; i < length; i++) {
            forLoopYForName(dataSet, length, i)
        }

    }
    return dataSet;
}

const forLoopYForAge = (dataset, length, i) => {
    var dataSet = [...dataset];
    var result = dataset;
    for (y = i + 1; y < length; y++) {
        if (result[i].age > result[y].age) {
            result[i] = dataSet[y];
            result[y] = dataSet[i];
            dataSet = [...result];
        }
    }
}
const forLoopYForName = (dataset, length, i) => {
    var dataSet = [...dataset];
    var result = dataset;
    for (y = i + 1; y < length; y++) {
        if (result[i].Name[0].charCodeAt() > result[y].Name[0].charCodeAt()) {
            result[i] = dataSet[y];
            result[y] = dataSet[i];
            dataSet = [...result];
        }
    }
}

const filterAge = (array, getAge) => {
    let age = getAge;
    let DataSet = [...array];
    let length = DataSet.length;
    let result = [];
    for (let i = 0; i < length; i++) {
        if (DataSet[i].age < age) {
            result.push(DataSet[i])
        }
    }
    return result;

}

const MinMaxAvg = () => {
    let array = assendingOrderForDataSet2(DataSet2, "age");
    let min = array[0].age;
    let max = array[array.length - 1].age;
    let average = array.reduce((a, b) => a + b.age, 0);
    average = average / (array.length);
    return { min, max, average };

}

const grouping = (array) => {
    let result = {};
    let DataSet = [...array];
    for (let obj of DataSet) {
        for (let prop in obj) {
            if (prop != "role") continue;
            if (result[obj[prop]]) {
                result[obj[prop]].push(obj)
            }
            else {
                result[obj[prop]] = [obj];
            }
        }


    }
    return result;


}
const totalRecordsBased = () => {
    let obj = grouping(DataSet2);
    let result = {};
    for (let key in obj) {

        result[key] = obj[key].length

    }
    return result;

}
const dateOfBirth = (array) => {
    let dataSet = [...array];
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDay();
    for (let i = 0; i < dataSet.length; i++) {
        let year = date.getFullYear() - dataSet[i].age;
        dataSet[i]["dataOfBirth"] = new Date(year, month, day);

    }
    return dataSet;
}




console.log("question 1 filter with age", assendingOrderForDataSet2(DataSet2, "age"));
console.log("question 1 filter with name", assendingOrderForDataSet2(DataSet2, "name"));
console.log("question 2 filter age below given age", filterAge(DataSet2, 30));
console.log("questin 3", dateOfBirth(DataSet2));
console.log("question 4 grouping", grouping(DataSet2));
console.log("question 5 min max average", MinMaxAvg());
console.log("question 6", totalRecordsBased());
