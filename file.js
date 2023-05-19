var fs = require("fs");
fs.open('welcome.txt', 'w+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");

});
fs.writeFile('welcome.txt', "Hello Node", function (err) {
    if (err) {
        return console.error(err);
    }
});
fs.readFile('welcome.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
})


