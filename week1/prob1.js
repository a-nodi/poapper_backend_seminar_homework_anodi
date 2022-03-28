String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

for(let i = 1; i <= 9; i++){
    for(let j = 1; j <= 9; j++){
        console.log("{0} x {1} = {2}".format(i, j, i * j));
    }
}
