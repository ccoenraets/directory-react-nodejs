employeeService = (function () {

    var baseURL = "";

    // The public API
    return {
        findById: function(id) {
            return $.ajax(baseURL + "/employees/" + id);
        },
        findByName: function(searchKey) {
            return $.ajax({url: baseURL + "/employees", data: {name: searchKey}});
        }
    };

}());