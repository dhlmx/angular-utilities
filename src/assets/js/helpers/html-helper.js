var htmlHelper = function() {
    /** Adds an attribute to a HTML Element
    *   @param {HTMLElement} element HTML element
    *   @param {String} attributeName Attribute name
    *   @param {String} attributeValue Attribute value
    *   @returns {void}
    */
    var addAttributeToElement = function(element, attributeName, attributeValue) {
        element.setAttribute(attributeName, attributeValue);
    },

    /** Adds a HTML Table Cell [td] to a HTML Table Row [tr]
    *   @param {HTMLTableRowElement} row HTML Table Row [tr]
    *   @param {HTMLTableCellElement} cell HTML Table Cell [td]
    *   @returns {void}
    */
    addCellToRow = function(row, cell) {
        row.appendChild(cell);
    },
            
    /** Adds one o more classes to a HTML Element
    *   @param {HTMLElement} element HTML element
    *   @param {String} classes One o more classes to add to the HTML Element
    *   @returns {void}
    */
    addClassesToElement = function(element, classes) {
        element.setAttribute("class", classes);
    },

    /** Adds a HTML Table Header Cell [th] to a HTML Table Row [tr]
    *   @param {HTMLTableRowElement} headerRow HTML Table Row [tr]
    *   @param {HTMLTableHeaderCellElement} headerCell HTML Table Header Cell [th]
    *   @returns {void}
    */
    addHeaderCellToRow = function(headerRow, headerCell) {
        headerRow.appendChild(headerCell);
    },
            
    /** Adds a HTML Table Row [tr] to a HTML Table Section [thead], [tbody] or [tfoot]
    *   @param {HTMLTableSectionElement} tableSection HTML Table Section ("thead", "tbody" or "tfoot")
    *   @param {HTMLTableRowElement} row HTML Table Row [tr]
    *   @returns {void}
    */
    addRowToTableSection = function(tableSection, row) {
        tableSection.appendChild(row);
    },

    /** Creates a HTML Button [button]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the button [button] created
    *   @returns {HTMLSpanElement} HTML Span [span]
    */
    createButton = function(innerHTML) {
        var button = document.createElement("button");
        if (innerHTML !== undefined && innerHTML !== null) { button.innerHTML = innerHTML; }
        return button;
    },

    /** Creates a HTML Table Cell [td]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the cell [td] created
    *   @returns {HTMLTableCellElement} HTML Table Cell Element [td]
    */
    createCell = function(innerHTML) {
        var cell = document.createElement("td");
        if (innerHTML !== undefined && innerHTML !== null) { cell.innerHTML = innerHTML; }
        return cell;
    },
            
    /** Creates a HTML Table Cell Element [td] that includes a input type checkbox
    *   @param {String} id Identifier of checkbox
    *   @param {String} name Name of checkbox
    *   @param {String} value Value for the checkbox
    *   @param {Boolean} isChecked Boolen for to determine if the checkbox is checked
    *   @param {Boolean} isDisabled Boolen for to determine if the checkbox is disabled
    *   @returns {HTMLTableCellElement} HTML Table Cell Element [td]
    */
    createCellCheckbox = function(id, name, value, isChecked, isDisabled) {
        if (isChecked === undefined || isChecked === null || (typeof isChecked !== "boolean")) { isChecked = false; }
        if (isDisabled === undefined || isDisabled === null || (typeof isDisabled !== "boolean")) { isDisabled = false; }

        var cell = document.createElement("td");
        var checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = id;
        checkbox.name = name;
        checkbox.value = value;
        checkbox.checked = isChecked;

        if (isDisabled) { checkbox.setAttribute("disabled", "disabled"); }

        cell.appendChild(checkbox);

        return cell;
    },

    /** Creates a HTML Div [div]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the div [div] created
    *   @returns {HTMLDivElement} HTML Div [div]
    */
    createDiv = function(innerHTML) {
        var div = document.createElement("div");
        if (innerHTML !== undefined && innerHTML !== null) { div.innerHTML = innerHTML; }
        return div;
    },
            
    /** Creates a HTML Element
    *   @param {String} elementTag HTML Element tag to create
    *   @param {Object} userAttributes Argument optional. User's attributes (id, innerHTML, classes, style and title
    *   @returns {HTMLElement} HTML Element
    */
    createElement = function(elementTag, userAttributes) {
        var element = null;

        if (elementTag === undefined || elementTag === null || (typeof elementTag !== "string")) { return null; }
        
        element = document.createElement(elementTag);
        
        if (userAttributes !== undefined && userAttributes.innerHTML !== null) {
            if (userAttributes.innerHTML !== undefined && userAttributes.innerHTML !== null) { element.innerHTML = userAttributes.innerHTML; }
            if (userAttributes.id !== undefined && userAttributes.id !== null && (typeof userAttributes.id === "string")) { element.id = userAttributes.id; }
            if (userAttributes.classes !== undefined && userAttributes.classes !== null && (typeof userAttributes.classes === "string")) { element.setAttribute("class", userAttributes.classes); }
            if (userAttributes.style !== undefined && userAttributes.style !== null && (typeof userAttributes.style === "string")) { element.setAttribute("style", userAttributes.style); }
            if (userAttributes.title !== undefined && userAttributes.title !== null && (typeof userAttributes.title === "string")) { element.title = userAttributes.title; }
        } /* else {
            if (attributes.innerHTML !== undefined && attributes.innerHTML !== null) { element.innerHTML = attributes.innerHTML; }
            if (attributes.id !== undefined && attributes.id !== null && (typeof attributes.id === "string")) { element.id = attributes.id; }
            if (attributes.classes !== undefined && attributes.classes !== null && (typeof attributes.classes === "string")) { element.setAttribute("class", attributes.classes); }
            if (attributes.style !== undefined && attributes.style !== null && (typeof attributes.style === "string")) { element.setAttribute("style", attributes.style); }
            if (attributes.title !== undefined && attributes.title !== null && (typeof attributes.title === "string")) { element.title = attributes.title; }
        } */
        
        return element;
    },

    /** Creates a HTML Table Header Cell [th]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the cell [th] created
    *   @returns {HTMLTableHeaderCellElement} HTML Table Header Cell Element
    */
    createHeaderCell = function(innerHTML) {
        var cell = document.createElement("th");
        if (innerHTML !== undefined && innerHTML !== null) { cell.innerHTML = innerHTML; }
        return cell;
    },

    /** Creates a HTML Label [label]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the label [label] created
    *   @returns {HTMLTableRowElement} HTML Label [label]
    */
    createLabel = function(innerHTML) {
        var label = document.createElement("label");
        if (innerHTML !== undefined && innerHTML !== null) { label.innerText = innerHTML; }
        return label;
    },
            
    /** Creates a HTML Option [option]
    *   @param {String} value Option value
    *   @param {String} innerHTML Option's HTML content
    *   @param {Boolean} isSelected Boolean value for to define if this option is checked/unchecked
    *   @returns {HTMLOptionElement} HTML Option [option]
    */
    createOption = function(value, innerHTML, isSelected) {
        if (isSelected === undefined || isSelected === null || (typeof isSelected !== "boolean")) { isSelected = false; }

        var option = document.createElement("option");
        option.value = value;
        option.innerHTML = innerHTML;

        if (isSelected) { option.setAttribute("selected", "selected"); }

        return option;
    },
            
    /** Create a HTML Paragraph [p]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the paragraph [p] created
    *   @returns {HTMLParagraphElement} HTML Paragraph [p]
    */
    createParagraph = function(innerHTML) {
        var p = document.createElement("p");
        if (innerHTML !== undefined && innerHTML !== null) { p.innerHTML = innerHTML; }
        return p;
    },

    /** Creates a HTML Table Row [tr]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the row [tr] created.
    *   @returns {HTMLTableRowElement} HTML Table Row Element [tr]
    */
    createRow = function(innerHTML) {
        var row = document.createElement("tr");
        if (innerHTML !== undefined && innerHTML !== null) { row.innerHTML = innerHTML; }
        return row;
    },

    /** Creates a HTML Select [select]
    *   @param {String} selectId Identifier of select [select] created
    *   @param {Multiple} innerHTML Argument optional. HTML content of the select [select] created
    *   @returns {HTMLSelectElement} HTML Select [select]
    */
    createSelect = function(selectId, innerHTML) {
        var select = document.createElement("select");
        
        if (selectId !== undefined && selectId !== null) { select.id = selectId; };
        if (innerHTML !== undefined && innerHTML !== null) { select.innerHTML = innerHTML; };
        
        return select;
    },
            
    /** Create a HTML Span [span]
    *   @param {Multiple} innerHTML Argument optional. HTML content of the span [span] created
    *   @returns {HTMLSpanElement} HTML Span [span]
    */
    createSpan = function(innerHTML) {
        var span = document.createElement("span");

        if (innerHTML !== undefined && innerHTML !== null) { span.innerHTML = innerHTML; }

        return span;
    },

    /** Creates a HTML Table Section Element [thead], [tbody] or [tfoot]
    *   @param {String} sectionName Name of type of Table Section Element ("thead", "tbody" or "tfoot")
    *   @returns {HTMLTableSectionElement} HTML Table Section Element [thead], [tbody] or [tfoot]
    */
    createTableSection = function(sectionName) {
        var tableSection = document.createElement(sectionName);
        return tableSection;
    },
            
    /** Resets the attributes property of htmlHelper
    *   @returns {void}
    */
    resetAttributes = function() {
        attributes = { id: null, classes: null, style: null, title: null };
    },

    /** Resets the content of any HTML Element
    *   @param {String} elementId Element identifier
    *   @returns {void}
    */
    resetElement = function(elementId) {
        var element = document.getElementById(elementId);
        element.innerHTML = "";
    },
    
    resetProgressBar = function(progressBarId, currentValue) {
        if (currentValue === undefined || currentValue === null || (typeof currentValue !== "number") || parseInt(currentValue) === Math.NaN) { currentValue = 0; }

        var progressBar = document.getElementById(progressBarId);

        progressBar.setAttribute("aria-valuenow", currentValue);
        progressBar.setAttribute("style", "width: " + currentValue + "%;");
        progressBar.innerHTML = currentValue + "%";
    },
            
    /** Resets Select options
    *   @param {String} seletedId Select identifier
    *   @param {Boolean} keepFirstOption Boolean value for to define if the first select option will be erase too
    *   @returns {void}
    */
    resetSelect = function(seletedId, keepFirstOption) {
        var options = $("#" + seletedId + " > option");

        if (keepFirstOption) {
            options.remove();
        } else {
            options.remove(":not(:first)");
        }
    };
    
    return {
        addAttributeToElement: addAttributeToElement,
        addCellToRow: addCellToRow,
        addClassesToElement: addClassesToElement,
        addHeaderCellToRow: addHeaderCellToRow,
        addRowToTableSection: addRowToTableSection,
        createButton: createButton,
        createCell: createCell,
        createCellCheckbox: createCellCheckbox,
        createDiv: createDiv,
        createElement: createElement,
        createHeaderCell: createHeaderCell,
        createLabel: createLabel,
        createOption: createOption,
        createParagraph: createParagraph,
        createRow: createRow,
        createSelect: createSelect,
        createSpan: createSpan,
        createTableSection: createTableSection,
        resetAttributes: resetAttributes,
        resetElement: resetElement,
        resetProgressBar: resetProgressBar,
        resetSelect: resetSelect
    };
}();


/** Hides a HTML Element
*   @param {string} elementId Element identifier
*   @returns void
function hideElement(elementId) {
    var element = document.getElementById(elementId);
    $(element).hide();
}
*/

/** Singleton A
 * @property {?string} class Optional class especified for to create the element A
 * @property {?string} href Optional URL especified for to create the element A
 * @property {?string} id Optional unique identifier for to create the element A
 * @property {?string} name Optional name especified for to create the element A
 * @property {?string} target Optional target window for to create the element A
 * @property {?string} style Optional style specifications for to create the element A
 */
/*
A = new function() {
    // Properties
    this.class = null;
    this.href = null;
    this.id = null;
    this.name = null;
    this.target = null;
    this.style = null;
    
    this.create = function() {
        var element = document.createElement(HTML_ELEMENT_ANCHOR);
        
        if (this.class !== undefined && this.class !== null ) { element.id = this.class; }
        if (this.href !== undefined && this.href !== null ) { element.href = this.href; }
        if (this.id !== undefined && this.id !== null ) { element.id = this.id; }
        if (this.name !== undefined && this.name !== null ) { element.name = this.name; }
        if (this.style !== undefined && this.style !== null ) { element.style = this.style; }
        if (this.target !== undefined && this.target !== null ) { element.target = this.target; }
        
        return element;
    };
    
    this.reset = function() {
        this.class = null;
        this.href = null;
        this.id = null;
        this.name = null;
        this.style = null;
        this.target = null;
    };
};
*/

/*
Function expresions
var add = function(a, b) { return a + b); }

Referencias:
(1) Rauschmayer, Dr. Axel, Speaking JavaScript.
(2) 
*/