var commonHelper = function() {
    // Methods
    /** Determines either a variable is empty or null
    *   @param {String} text Text to test
    *   @param {Boolean} allowEmptyStrings Specifies either the test will consider like valid texts similar to " "
    *   @param {Boolean} allowSingleQuotes Specifies either the test will consider like valid texts similar to ''
    *   @returns {Boolean} Returns True if @text is empty or null, else returns False
    */
    var isNullOrEmpty = function(text, allowEmptyStrings, allowSingleQuotes) {
       try
       {
            if (allowEmptyStrings === undefined || allowEmptyStrings === null) { allowEmptyStrings = false; }
            if (allowSingleQuotes === undefined || allowSingleQuotes === null) { allowSingleQuotes = false; }

            if (text === undefined || text === null) {
                return true;
            } else {
                if (!allowEmptyStrings) {
                    if (text === constants.STRING_EMPTY || String(text).trim() === constants.STRING_EMPTY) {
                        return true;
                    }
                }

                if (!allowSingleQuotes) {
                    if (text === setSingleQuotes(constants.STRING_EMPTY)) {
                        return true;
                    }
                }
            }

            return false;
       }
       catch(ex)
       {
           alert(ex);
       }
    },
            
    sanitizeQuotes = function(text) {
        do {
            text = String(text).replace("“", constants.STRING_DOUBLE_QUOTE);
        } while (String(text).indexOf("“") >= constants.NUMBER_ZERO);
        
        do {
            text = String(text).replace("”", constants.STRING_DOUBLE_QUOTE);
        } while (String(text).indexOf("”") >= constants.NUMBER_ZERO);

        do {
            text = String(text).replace("`", constants.STRING_DOUBLE_ARROW_LEFT);
        } while (String(text).indexOf("`") >= constants.NUMBER_ZERO);

        do {
            text = String(text).replace("´", constants.STRING_DOUBLE_ARROW_RIGHT);
        } while (String(text).indexOf("´") >= constants.NUMBER_ZERO);
        
        do {
            text = String(text).replace("‘", constants.STRING_DOUBLE_ARROW_LEFT);
        } while (String(text).indexOf("‘") >= constants.NUMBER_ZERO);
        
        do {
            text = String(text).replace("’", constants.STRING_DOUBLE_ARROW_RIGHT);
        } while (String(text).indexOf("’") >= constants.NUMBER_ZERO);
        
        do {
            text = String(text).replace(constants.STRING_SINGLE_QUOTE, constants.STRING_PIPE + constants.STRING_PIPE);
        } while (String(text).indexOf(constants.STRING_SINGLE_QUOTE) >= constants.NUMBER_ZERO);
        
        do {
            text = String(text).replace(constants.STRING_PIPE + constants.STRING_PIPE, constants.STRING_SINGLE_QUOTE + constants.STRING_SINGLE_QUOTE);
        } while (String(text).indexOf(constants.STRING_PIPE + constants.STRING_PIPE) >= constants.NUMBER_ZERO);
        
        return text;
    },
    
    /** Delimites a text with single quotes '...'
    *   @param {String} text Text to delimite it
    *   @param {Boolean} cleanPreviousSingleQuotes If it's true function cleans firstly any single quote in the original text
    *   @returns {String} Returns the parameter text delimited with single quotes '...'
    */
    setSingleQuotes = function(text, cleanPreviousSingleQuotes) {
        if (cleanPreviousSingleQuotes === undefined || cleanPreviousSingleQuotes === null || typeof cleanPreviousSingleQuotes !== constants.JAVASCRIPT_BOOLEAN) { cleanPreviousSingleQuotes = true; }

        if (cleanPreviousSingleQuotes) {
            do {
                text = String(text).replace(constants.STRING_SINGLE_QUOTE, constants.STRING_EMPTY);
            } while (String(text).indexOf(constants.STRING_SINGLE_QUOTE) >= constants.NUMBER_ZERO);
        }

        return constants.STRING_SINGLE_QUOTE + text + constants.STRING_SINGLE_QUOTE;
    };

    return {
        isNullOrEmpty: isNullOrEmpty,
        sanitizeQuotes: sanitizeQuotes,
        setSingleQuotes: setSingleQuotes
    };
}();