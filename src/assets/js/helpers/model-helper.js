var modelHelper = function() {
    var buildSQLQueryForToCreate = function(table) {
        $.getJSON("repository/model/getTableStructure.php?table=" + table, function(data) {
            var sqlFields = constants.STRING_EMPTY;
            var sqlValues = constants.STRING_EMPTY;

            $.each(data, function(index, item) {
                if (item.Key !== constants.INDEX_PRIMARY_KEY) {
                    if (sqlFields !== constants.STRING_EMPTY) { sqlFields += ", "; }
                    if (sqlValues !== constants.STRING_EMPTY) { sqlValues += ", "; }

                    sqlFields += item.Field;

                    var type = getFieldType(item.Type);

                    switch (type) {
                        case "bit":
                        case "enum":
                        case "decimal":
                        case "int":
                            sqlValues += document.getElementById(item.Field).value;
                            break;
                        case "date":
                        case "datetime":
                        case "char":
                        case "text":
                        case "varchar":
                            sqlValues += "'" + document.getElementById(item.Field).value + "'";
                            break;
                        default:
                            sqlValues += "'" + document.getElementById(item.Field).value + "'";
                            break;
                    }
                }
            });

            var sqlQuery = "INSERT INTO " + table + " (" + sqlFields + ") VALUES (" + sqlValues + ");";

            var postURL = "repository/model/postCreateRecordOnTable.php";
            var dataModel = {};
            dataModel.sqlQuery = sqlQuery;

            $.post(postURL, dataModel, function(data) {
                if (data !== "Success") {
                    alert(data);
                } else {
                    $("#btnClose").trigger("click");            
                }
            });
        });
    },

    buildSQLQueryForToUpdate = function(table) {
        $.getJSON("repository/model/getTableStructure.php?table=" + table, function(data) {
            var sqlFieldsValues = constants.STRING_EMPTY;
            var sqlWhere = constants.STRING_EMPTY;

            $.each(data, function(index, item) {
                if (item.Key !== constants.INDEX_PRIMARY_KEY) {
                    if (sqlFieldsValues !== constants.STRING_EMPTY) { sqlFieldsValues += ", "; }

                    sqlFieldsValues += item.Field + " = ";

                    var type = getFieldType(item.Type);

                    switch (type) {
                        case "bit":
                        case "enum":
                        case "decimal":
                        case "int":
                            sqlFieldsValues += document.getElementById(item.Field).value;
                            break;
                        case "date":
                        case "datetime":
                        case "char":
                        case "text":
                        case "varchar":
                            sqlFieldsValues += "'" + document.getElementById(item.Field).value + "'";
                            break;
                        default:
                            sqlFieldsValues += "'" + document.getElementById(item.Field).value + "'";
                            break;
                    }
                } else {
                    sqlWhere += item.Field + " = ";

                    var keyType = getFieldType(item.Type);

                    switch (keyType) {
                        case "bit":
                        case "enum":
                        case "decimal":
                        case "int":
                            sqlWhere += document.getElementById(item.Field).value;
                            break;
                        case "date":
                        case "datetime":
                        case "char":
                        case "text":
                        case "varchar":
                            sqlWhere += "'" + document.getElementById(item.Field).value + "'";
                            break;
                        default:
                            sqlWhere += "'" + document.getElementById(item.Field).value + "'";
                            break;
                    }
                }
            });

            var sqlQuery = "UPDATE " + table + " SET " + sqlFieldsValues + " WHERE " + sqlWhere + ";";

            var postURL = "repository/model/postUpdateRecordOnTable.php";
            var dataModel = {};
            dataModel.sqlQuery = sqlQuery;

            $.post(postURL, dataModel, function(data) {
                if (data !== "Success") {
                    alert(data);
                } else {
                    $("#btnClose").trigger("click");            
                }
            });
        });
    },
    
    createInputFromStructure = function(item) {
        var scale = getFieldScale(item.Type);
        var type = getFieldType(item.Type);
        var fieldComment = JSON.parse(eval(item.Comment));
        var inputElement;
        var option;
        
        switch (type) {
            case "bit":
            case "enum":
                inputElement = document.createElement("select");

                option = document.createElement("option");
                option.value = constants.STRING_ZERO;
                option.innerText = constants.STRING_NO;

                if (item.Default === constants.STRING_ZERO || item.Default === constants.NUMBER_ZERO) {
                    option.setAttribute("selected", "selected");
                }

                inputElement.appendChild(option);

                option = document.createElement("option");
                option.value = constants.STRING_ONE;
                option.innerText = constants.STRING_SI;

                if (item.Default === constants.STRING_ONE || item.Default === constants.NUMBER_ONE) {
                    option.setAttribute("selected", "selected");
                }

                inputElement.appendChild(option);
                break;
            case "date":
                inputElement = document.createElement("input");
                inputElement.type = "date";
                inputElement.setAttribute("size", "10");
                inputElement.setAttribute("maxlength", "10");
                break;
            case "datetime":
                inputElement = document.createElement("input");
                inputElement.type = "datetime";
                inputElement.setAttribute("size", "10");
                inputElement.setAttribute("maxlength", "10");
                break;
            case "decimal":
            case "int":
                if (item.Key === constants.INDEX_PRIMARY_KEY || item.Key === constants.INDEX_MULTIPLE_KEY) {
                    if (item.Extra === "auto_increment") {
                        inputElement = document.createElement("input");
                        inputElement.type = "number";
                        inputElement.value = constants.NUMBER_ZERO;
                    } else {
                        if (fieldComment.ExternalTable !== undefined && !commonHelper.isNullOrEmpty(fieldComment.ExternalTable)
                            && fieldComment.ExternalValue !== undefined && !commonHelper.isNullOrEmpty(fieldComment.ExternalValue)
                            && fieldComment.ExternalText !== undefined && !commonHelper.isNullOrEmpty(fieldComment.ExternalText)
                            && fieldComment.Order !== undefined && !commonHelper.isNullOrEmpty(fieldComment.Order)) {
                        
                            inputElement = document.createElement("select");
                            
                            var url = "repository/model/getTable.php?table=";
                            url += fieldComment.ExternalTable;
                            url += ((fieldComment.Where !== undefined && !commonHelper.isNullOrEmpty(fieldComment.Where)) ? "&where=" + fieldComment.Where : constants.STRING_EMPTY);
                            url += "&orderby=" + fieldComment.Order;

                            $.getJSON(url, function(data) {
                                $.each(data, function(index, record) {
                                    var option = document.createElement("option");

                                    if (record.hasOwnProperty(fieldComment.ExternalValue)
                                        && record.hasOwnProperty(fieldComment.ExternalText)) {
                                        var value = "record." + fieldComment.ExternalValue;
                                        var text = "record." + fieldComment.ExternalText;

                                        option.value = eval(value);
                                        option.innerText = eval(text);

                                        inputElement.appendChild(option);
                                    }
                                });
                            });
                        } else {
                            inputElement = document.createElement("input");
                            inputElement.type = "number";
                            inputElement.value = constants.NUMBER_ZERO;
                        }
                    }
                } else {
                    inputElement = document.createElement("input");
                    inputElement.type = "number";
                    inputElement.value = constants.NUMBER_ZERO;
                }
                break;
            case "char":
            case "varchar":
                if (item.Key === constants.INDEX_PRIMARY_KEY || item.Key === constants.INDEX_MULTIPLE_KEY) {
                    inputElement = document.createElement("input");
                    inputElement.type = "text";
                    inputElement.value = constants.STRING_EMPTY;


                } else {
                    inputElement = document.createElement("input");
                    inputElement.type = "text";
                    inputElement.value = constants.STRING_EMPTY;
                }

                break;
            case "text":
                if (item.Key === constants.INDEX_PRIMARY_KEY || item.Key === constants.INDEX_MULTIPLE_KEY) {
                    inputElement = document.createElement("textarea");
                    inputElement.setAttribute("style", "height: 180px;");
                    inputElement.value = constants.STRING_EMPTY;
                    inputElement.onchange = function(evt) {
                        var text = commonHelper.sanitizeQuotes(this.value);
                        this.value = text;
                    };
                } else {
                    inputElement = document.createElement("textarea");
                    inputElement.setAttribute("style", "height: 180px;");
                    inputElement.value = constants.STRING_EMPTY;
                    inputElement.onchange = function(evt) {
                        var text = commonHelper.sanitizeQuotes(this.value);
                        this.value = text;
                    };
                }

                break;
            case "time":
                inputElement = document.createElement("input");
                inputElement.type = "time";
                inputElement.setAttribute("size", "10");
                inputElement.setAttribute("maxlength", "10");
                break;
            default:
                inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.value = constants.STRING_EMPTY;

                break;
        }
    
        inputElement.id = item.Field;
        inputElement.name = item.Field;
        inputElement.setAttribute("title", fieldComment.Title);

        if (item.Key === constants.INDEX_PRIMARY_KEY && item.Extra === "auto_increment") {
            inputElement.setAttribute("disabled", "disabled");
        }

        return inputElement;
    },

    createInputFromStructureForToUpdate = function(item, itemValues) {
        var field = item.Field;
        var scale = getFieldScale(item.Type);
        var type = getFieldType(item.Type);
        var fieldComment = JSON.parse(eval(item.Comment));
        var inputElement;
        var option;

        switch (type) {
            case "bit":
            case "enum":
                inputElement = document.createElement("select");

                option = document.createElement("option");
                option.value = constants.STRING_ZERO;
                option.innerText = constants.STRING_NO;

                if (eval("itemValues." + field) === constants.STRING_ZERO || eval("itemValues." + field) === constants.NUMBER_ZERO) {
                    option.setAttribute("selected", "selected");
                }

                inputElement.appendChild(option);

                option = document.createElement("option");
                option.value = constants.STRING_ONE;
                option.innerText = constants.STRING_SI;

                if (eval("itemValues." + field) === constants.STRING_ONE || eval("itemValues." + field) === constants.NUMBER_ONE) {
                    option.setAttribute("selected", "selected");
                }

                inputElement.appendChild(option);
                break;
            case "date":
                inputElement = document.createElement("input");
                inputElement.type = "date";
                inputElement.setAttribute("size", "10");
                inputElement.setAttribute("maxlength", "10");
                inputElement.value = eval("itemValues." + field);
                break;
            case "datetime":
                inputElement = document.createElement("input");
                inputElement.type = "datetime";
                inputElement.setAttribute("size", "10");
                inputElement.setAttribute("maxlength", "10");
                inputElement.value = eval("itemValues." + field);
                break;
            case "decimal":
            case "int":
                if (fieldComment.ExternalTable !== undefined && fieldComment.ExternalTable !== constants.STRING_EMPTY
                    && fieldComment.ExternalValue !== undefined && fieldComment.ExternalValue !== constants.STRING_EMPTY
                    && fieldComment.ExternalText !== undefined && fieldComment.ExternalText !== constants.STRING_EMPTY
                    && fieldComment.Order !== undefined && fieldComment.Order !== constants.STRING_EMPTY) {

                    inputElement = document.createElement("select");

                    var url = "repository/model/getTable.php?table=";
                    url += fieldComment.ExternalTable;
                    url += ((fieldComment.Where !== undefined && !commonHelper.isNullOrEmpty(fieldComment.Where)) ? "&where=" + fieldComment.Where : constants.STRING_EMPTY);
                    url += "&orderby=" + fieldComment.Order;

                    $.getJSON(url, function(data) {
                        $.each(data, function(index, record) {
                            var option = document.createElement("option");

                            if (record.hasOwnProperty(fieldComment.ExternalValue)
                                && record.hasOwnProperty(fieldComment.ExternalText)) {
                                var value = "record." + fieldComment.ExternalValue;
                                var text = "record." + fieldComment.ExternalText;

                                option.value = eval(value);
                                option.innerText = eval(text);

                                if (option.value === eval("itemValues." + field)) {
                                    option.setAttribute("selected", "selected");
                                }

                                inputElement.appendChild(option);
                            }
                        });
                    });
                } else {
                    inputElement = document.createElement("input");
                    inputElement.type = "number";
                    inputElement.value = eval("itemValues." + field);
                }
                break;
            case "char":
            case "varchar":
                inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.value = eval("itemValues." + field);
                break;
            case "text":
                inputElement = document.createElement("textarea");
                inputElement.setAttribute("style", "height: 180px;");
                inputElement.value = eval("itemValues." + field);
                inputElement.onchange = function(evt) {
                    var text = commonHelper.sanitizeQuotes(this.value);
                    this.value = text;
                };

                break;
            case "time":
                inputElement = document.createElement("input");
                inputElement.type = "time";
                inputElement.setAttribute("size", "10");
                inputElement.setAttribute("maxlength", "10");
                inputElement.value = eval("itemValues." + field);
                break;
            default:
                inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.value = eval("itemValues." + field);
                break;
        }

        inputElement.id = item.Field;
        inputElement.name = item.Field;
        inputElement.setAttribute("title", fieldComment.Title);

        if (item.Key === constants.INDEX_PRIMARY_KEY) {
            inputElement.setAttribute("disabled", "disabled");
        }

        return inputElement;
    },

    getFieldScale = function(field) {
        var initialPosition = String(field).indexOf(constants.STRING_PARENTHESIS_LEFT);
        var finalPosition = String(field).indexOf(constants.STRING_PARENTHESIS_RIGHT);
        var scale = constants.NUMBER_NEGATIVE_ONE;

        if (initialPosition >= constants.NUMBER_ZERO && finalPosition >= constants.NUMBER_ZERO) {
            scale = parseInt(String(field).substring(initialPosition + constants.NUMBER_ONE, finalPosition));
        }

        return scale;
    },

    getFieldType = function(field) {
        var type = constants.STRING_EMPTY;

        if (getFieldScale(field) > constants.NUMBER_ZERO) {
            type = String(field).substring(constants.NUMBER_ZERO, String(field).indexOf(constants.STRING_PARENTHESIS_LEFT));
        } else {
            type = field;
        }

        return type;
    },

    processFormToCreate = function(table) {
        var multipleKeys = [];
        var primaryKey = constants.INDEX_PRIMARY_KEY;
        var uniqueKey = constants.INDEX_UNIQUE_KEY;

        $("#formulario").html("");

        var structureURL = "repository/model/getTableStructure.php?table=" + table;

        $.getJSON(structureURL, function(structure) {
            if (structure !== null && Array.isArray(structure)) {
                $.each(structure, function(index, item) {
                    var div = document.createElement("div");
                    var label = document.createElement("label");
                    var fieldComment = JSON.parse(eval(item.Comment));

                    label.innerText = fieldComment.Label;
                    label.setAttribute("class", "col-md-3 text-right");
                    label.setAttribute("style", "vertical-align: top;");

                    div.appendChild(label);

                    var inputElement = createInputFromStructure(item);
                    inputElement.setAttribute("class", "col-md-9");

                    div.appendChild(inputElement);
                    div.setAttribute("class", "col-md-12");

                    $("#formulario").append(div);
                });
            }
        });

        $("#btnSave").val("Create");
        $('#modalForm').modal('show');
    },
            
    processFormToUpdate = function(table, key, value) {
        var multipleKeys = [];
        var primaryKey = constants.STRING_EMPTY;
        var uniqueKey = constants.STRING_EMPTY;

        $("#formulario").html("");

        var dataURL ="repository/model/getRecordFromTableByIndexKey.php?";
        dataURL += "table=" + table + "&";
        dataURL += "key=" + key + "&";
        dataURL += "value=" + value;

        $.getJSON(dataURL, function(data) {
            if (data !== null && Array.isArray(data) && data.length === 1) {
                var entity = data[0];

                var structureURL = "repository/model/getTableStructure.php?table=" + table;

                $.getJSON(structureURL, function(structure) {
                    if (structure !== null && Array.isArray(structure)) {
                        $.each(structure, function(index, item) {
                            var div = document.createElement("div");
                            var label = document.createElement("label");
                            var fieldComment = JSON.parse(eval(item.Comment));

                            label.innerText = fieldComment.Label;
                            label.setAttribute("class", "col-md-3 text-right");
                            label.setAttribute("style", "vertical-align: top;");

                            div.appendChild(label);

                            var inputElement = modelHelper.createInputFromStructureForToUpdate(item, entity);

                            inputElement.setAttribute("class", "col-md-9");

                            div.appendChild(inputElement);
                            div.setAttribute("class", "col-md-12");

                            $("#formulario").append(div);
                        });
                    }
                });
            }
        });

        $("#btnSave").val("Update");
        $('#modalForm').modal('show');
    };
    
    return {
        buildSQLQueryForToCreate: buildSQLQueryForToCreate,
        buildSQLQueryForToUpdate: buildSQLQueryForToUpdate,
        createInputFromStructure: createInputFromStructure,
        createInputFromStructureForToUpdate: createInputFromStructureForToUpdate,
        getFieldScale: getFieldScale,
        getFieldType: getFieldType,
        processFormToCreate: processFormToCreate,
        processFormToUpdate: processFormToUpdate
    };
}();
