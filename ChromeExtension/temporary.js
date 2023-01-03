var randomizeInputValue = function (el, category, num) {
  /*
  This function acquires an input element, figures out the label associated with the input element,acquires the correct value to input, and fills in that value. 
  Inputs:
    el:input html element
    category: the category it belongs to (currently education,personal information, or experiences)
    num: determines index of the element required from the list containing elements belonging to a category
  */

  // acquries label element with for property that is the same as the input.
  if ($(el).length != 0) {
    switch ($(el)[0].nodeName.toLowerCase()) {
      case "input":
        var inputType = $(el).attr("type");
        var id = $(el).attr("id");
        var label = $("label[for=" + id + "]");

        if (!$(label).text()) {
          label = findLabel(el);
          value = filler($(label).text(), category, num, el);
        }
        if (inputType === "radio") {
        } else if (inputType === "checkbox") {
        } else {
          $(el).focus().val(value);
        }

        value = filler($(label).text(), category, num);
        if (value == null) {
          return;
        }
        // fills the input html element with the correct input value.
        $(el).focus().val(value);

        break;
      case "select":
        var id = $(el).attr("id");
        var label = $("label[for=" + id + "]");
        var opts = $(el)[0].options;

        if (!$(label).text()) {
          label = findLabel(el);
          var userInput = filler($(label).text());
          var webOutput = identifyValue(opts, userInput);
          //$(el).parent().find("div:first").text(value); // ! change soon
          if (webOutput) {
            $(el).focus().val(webOutput);
          }
          return;
        }
        var userInput = filler($(label).text());
        var webOutput = identifyValue(opts, userInput);
        $(el).focus().val(webOutput);

        //var options = ["2", "3"];
        //$("#books").val(options);
        break;
      case "textarea":
        var id = $(el).attr("id");
        var label = $("label[for=" + id + "]");

        if (!$(label).text()) {
          label = findLabel(el);
          value = filler($(label).text(), category, num, el);

          $(el).focus().val(value); // ! Watch out
          return;
        }

        value = filler($(label).text(), category, num);
        if (value == null) {
          return;
        }
        // fills the input html element with the correct input value.
        $(el).focus().val(value);
        break;
    }
  }
};

var randomizeInputValue = function (el, category, num) {
  /*
  This function acquires an input element, figures out the label associated with the input element,acquires the correct value to input, and fills in that value. 
  Inputs:
    el:input html element
    category: the category it belongs to (currently education,personal information, or experiences)
    num: determines index of the element required from the list containing elements belonging to a category
  */

  // acquries label element with for property that is the same as the input.
  if ($(el).length != 0) {
    switch ($(el)[0].nodeName.toLowerCase()) {
      case "input":
        var id = $(el).attr("id");
        var label = $("label[for=" + id + "]");

        if (!$(label).text()) {
          label = findLabel(el);
          value = filler($(label).text(), category, num, el);

          $(el).focus().val(value); // ! Watch out
          return;
        }

        value = filler($(label).text(), category, num);
        if (value == null) {
          return;
        }
        // fills the input html element with the correct input value.
        $(el).focus().val(value);
        break;
      case "select":
        var id = $(el).attr("id");
        var label = $("label[for=" + id + "]");
        var opts = $(el)[0].options;

        if (!$(label).text()) {
          label = findLabel(el);
          var userInput = filler($(label).text());
          var webOutput = identifyValue(opts, userInput);
          //$(el).parent().find("div:first").text(value); // ! change soon
          if (webOutput) {
            $(el).focus().val(webOutput);
          }
          return;
        }
        var userInput = filler($(label).text());
        var webOutput = identifyValue(opts, userInput);
        $(el).focus().val(webOutput);

        //var options = ["2", "3"];
        //$("#books").val(options);
        break;
      case "textarea":
        var id = $(el).attr("id");
        var label = $("label[for=" + id + "]");

        if (!$(label).text()) {
          label = findLabel(el);
          value = filler($(label).text(), category, num, el);

          $(el).focus().val(value); // ! Watch out
          return;
        }

        value = filler($(label).text(), category, num);
        if (value == null) {
          return;
        }
        // fills the input html element with the correct input value.
        $(el).focus().val(value);
        break;
    }
  }
};
