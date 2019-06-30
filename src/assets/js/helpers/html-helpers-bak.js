// Constants
var HTML_TABLE_ROW = "tr";
var HTML_TABLE_CELL = "td";
var HTML_TABLE_HEADER_CELL = "th";

HTMLHelper = function() {
    /** Add an attribute to a HTML Element
    *   @param {HTMLElement} element HTML element
    *   @param {string} name Attribute name
    *   @param {string} value Attribute value
    *   @returns void
    */
    this.addAttributeToElement = function(element, name, value) {
        element.setAttribute(name, value);
        return;
    };

    /** Add a HTML Table Cell Element to a HTML Table Row Element
    *   @param {HTMLTableRowElement} row HTML Table Row Element
    *   @param {HTMLTableCellElement} cell HTML Table Cell Element
    *   @returns void
    */
    this.addCellToRow = function(row, cell) {
        row.appendChild(cell);
        return;
    };

    /** Add a HTML Table Header Cell Element to a HTML Table Row Element
    *   @param {HTMLTableRowElement} row HTML Table Row Element
    *   @param {HTMLTableHeaderCellElement} cell HTML Table Header Cell Element
    *   @returns void
    */
    this.addHeaderCellToRow = function(row, cell) {
        row.appendChild(cell);
        return;
    };
    
    /** Add a HTML Table Row Element [tr] to a HTML Table Section Element [thead], [tbody] or [tfoot]
    *   @param {HTMLTableSectionElement} tableSection HTML Table Section Element ("thead", "tbody" or "tfoot")
    *   @param {HTMLTableRowElement} row HTML Table Row Element [tr]
    *   @returns void
    */
    this.addRowToTableSection = function (tableSection, row) {
        tableSection.appendChild(row);
        return;
    };
    
    /** Create a HTML Table Cell Element [td]
    *   @param {String, numeric, boolean, html} value Value of HTML Table Cell Element [td]
    *   @returns {HTMLTableCellElement} HTML Table Cell Element [td]
    */
    this.createCell = function (value) {
        var cell = document.createElement(HTML_TABLE_CELL);
        cell.innerHTML = value;
        return cell;
    };

    /** Create a HTML Table Header Cell Element [th]
    *   @param {String, numeric, boolean, html} value Value of HTML Table Header Cell Element [th]
    *   @returns {HTMLTableHeaderCellElement} HTML Table Header Cell Element [th]
    */
    this.createHeaderCell = function (value) {
        var cell = document.createElement(HTML_TABLE_HEADER_CELL);
        cell.innerHTML = value;
        return cell;
    };
    
    /** Create a HTMLTableRowElement [tr]
    *   @param {String, numeric, boolean, html} value Optional value of HTML Table Header Cell Element [th]
    *   @returns {HTMLTableRowElement} HTML Table Row Element [tr]
    */
    this.createRow = function (value) {
        var row = document.createElement(HTML_TABLE_ROW);

        if (value !== undefined && value !== null) {
            row.innerHTML = value;
        }

        return row;
    };
    
    /** Create a HTML Table Section Element [thead], [tbody] or [tfoot]
    *   @param {String} section Name of type of Table Section Element ("thead", "tbody" or "tfoot")
    *   @returns {HTMLTableSectionElement} HTML Table Section Element [thead], [tbody] or [tfoot]
    */
    this.createTableSection = function (section) {
        var tableSection = document.createElement(section);
        return tableSection;
    };
    
    
    //this.createCheckbox = function()
    
};
