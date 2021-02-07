// Source from https://github.com/RayBB/ternary-converter

function toIf(str){
    var num = 0;
    
    function getPart(str, partNumber) {
      var questionsAndColons = []; // array for loop;
      var piece = ""; // Part we are returning
      for (var i = 0; i < str.length; i++) {
        var cur = str[i];
        if (cur == "?") questionsAndColons.push(cur);
        else if (cur == ":") {
          questionsAndColons.pop();
          if (questionsAndColons.length === 0) {
            firstElse = str.substring(str.indexOf("?") + 2, i-1);
            lastElse = str.substring(i + 2);
            break;
          }
        }
      }
      if (partNumber === 1) piece = str.substring(0, str.indexOf("?")-1);
      if (partNumber === 2) piece = firstElse;
      if (partNumber === 3) piece = lastElse;
      
      num++;// This is to prevent infinite loops
      if (num < 100) return wreckTheTern(piece);
      
    }
    
    function wreckTheTern(str) {
      if (str.indexOf("?") === -1) { /// not ternary ///////NEEDS UPDATE
        return str;
      } else {
        return "if (" + getPart(str, 1) + "){\n" + getPart(str, 2) + ";\n}" +
          "else {\n" + getPart(str, 3) + ";\n}";
      }
    }
    
    return wreckTheTern(str);
    }

module.exports = { toIf }