// initialize the variable and assign it a value
var _name = "Faisal satti";
console.log("Name written in lowercase: " + _name.toLowerCase());
console.log("Name written in uppercase: " + _name.toUpperCase());
_name = _name.split(' ')
    .map(function (w) { return w == "of" ? w.toLowerCase() :
    w == "a" ? w.toLowerCase() :
        w == "is" ? w.toLowerCase() :
            w == "am" ? w.toLowerCase() :
                w == "are" ? w.toLowerCase() :
                    w == "the" ? w.toLowerCase() :
                        w[0].toUpperCase() + w.substring(1).toLowerCase(); })
    .join(' ');
console.log("Name written in titlecase: " + _name);
