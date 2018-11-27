(function () {
    var underscoreRegex = /(?:[^\w\s]|_)+/g, sandwichNumberRegex = /(\d)\s+(?=\d)/g, camelCaseRegex = /(?:^\s*\w|\b\w|\W+)/g;
    String.prototype.toCamelCase = String.prototype.toCamelCase || function toCamelCase(isPascalCase) {
        if (isPascalCase === void 0) { isPascalCase = false; }
        if (/^\s*_[\s_]*$/g.test(this)) {
            return '_';
        }
        return this.replace(underscoreRegex, ' ')
            .replace(sandwichNumberRegex, '$1_')
            .replace(camelCaseRegex, function (match, index) {
            if (/^\W+$/.test(match)) {
                return '';
            }
            return index == 0 ?
                isPascalCase ? match.trim().toUpperCase() :
                    match.trim().toLowerCase() : match.toUpperCase();
        });
    };
})();
