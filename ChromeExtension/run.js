var result = {};

var hardcoded = [RegExp('^https://.*wd.*mywork.*$'),RegExp('.*grepenhouse.io.*'),RegExp('.*jobs.lever.co.*')];
var strin = [];
var ret = "";
var back_data = [];
var num_experience = 3;
var num_education = 1;
var num_language = 1;
var num_categories = 0;
var fieldsets = {};
var next_fieldset = 0;
var fieldset_categories = [];

// * Option List
var genderOptionList = [
  "please select",
  "male",
  "female",
  "decline to identify",
];
// TODO hard coding
var ageGroupOptionList = ["18-29", "30-49", "50 or older", "not to say"];
var legalStatusOptionList = ["please select", "yes", "no"];
var workingVisaOptionList = ["please select", "yes", "no"];
var veteranStatusOptionList = ["yes", "no", "not to say"];

// * Adding stricter bound later to ensure no false positive
var fullNameWordList = ["full name", 2, "legal", "full", "name"];
var firstNameWordList = ["first name", 2, "first", "given", "name"];
var lastNameWordList = ["last name", 2, "last", "family", "name"];
var genderWordList = ["gender", 1, "gender", "sex"];
var ethnicityWordList = ["ethnicity", 1, "ethnicity"];
var pronounsWordList = ["pronouns", 1, "pronoun"];
var emailWordList = ["email", 1, "email"];
var phoneWordList = ["phone", 1, "phone"];
var addressWordList = ["street address", 1, "address"];
var cityWordList = ["city", 1, "city"];
var zipWordList = ["zip code", 1, "zip code", "zip", "postal code"];
var curCompanyWordList = ["current company", 1, "current company"];
var curPositionWordList = [
  "current position",
  1,
  "current position",
  "current title",
];
var linkedinWordList = ["linkedin", 1, "linkedin"];
var githubWordList = ["github", 1, "github", "website"]; // * put website into the list
var legalStatusWordList = [
  "legal status",
  3,
  "legally",
  "work",
  "authorized",
  "United States",
  "legal",
];
var workingVisaWordList = [
  "working visa",
  3,
  "sponsorship",
  "require",
  "employment",
  "h-1b",
  "visa",
  "work",
];
var disabilityWordList = ["disability status", 1, "disability"];
var veteranStatusWordList = ["veteran status", 1, "veteran"];

var collegeWordList = ["college", 1, "college", "university", "school"];
var degreeWordList = ["degree", 1, "degree"];
var majorWordList = ["major", 1, "field of study", "major"];
var gradeWordList = ["grade", 1, "gpa", "overall result"];
// TODO Not sure how to do from and to

var jobTitleWordList = ["job title", 1, "job title"];
var companyWordList = ["company", 1, "company"];
var locationWordList = ["location", 1, "location"];
var roleDescriptionWordList = ["role description", 1, "role description"];
// TODO Not sure how to do from and to

var hispanicWordList = ["hispanic", 1, "hispanic"];

// * List Box Option Word List
var femaleWordList = ["woman", 1, "female", "woman"];
var maleWordList = ["man", 1, "man", "male"];
/*
var sleep = function(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
function randomInt(min,max)
{
    var result = Math.floor((Math.random() * max) + min);
    return result;
}
var htmlInputTypes = {
  "color" : function(){
    return '#'+pad(Math.floor(Math.random()*16777215).toString(16), 6);
  },
  "date" : function(){
    var rndDate = randomDate(new Date(1977, 8, 1), new Date(2999, 8, 1));
    var result = [
      rndDate.getFullYear(),
      "-",
      pad(rndDate.getMonth() + 1, 2),
      "-",
      pad(rndDate.getDay() + 1, 2), 
    ].join('');
    return result;
  },
  "datetime-local" : "",
  "email" : "internet.email",
  "month" : function(){
    var rndDate = randomDate(new Date(1977, 8, 1), new Date(2999, 8, 1));
    var result = [
      rndDate.getFullYear(),
      "-",
      pad(rndDate.getMonth() + 1, 2)
    ].join('');
    return result;
  },
  "number" : "random.number",
  "range" : function(el){
    var minValue= parseInt($(el).prop('min'), 10);
    var maxValue = parseInt($(el).prop('max'), 10);
    return randomInt(minValue, maxValue);
  },
  "search" : "lorem.words",
  "tel" : "phone.phoneNumber",
  "url" : "internet.url",
  "week" : function(){
    var rndDate = randomDate(new Date(1977, 8, 1), new Date(2999, 8, 1));
    var onejan = new Date(rndDate.getFullYear(),0,1);
    var weeknumber = Math.ceil((((rndDate - onejan) / 86400000) + onejan.getDay()+1)/7);
    var result = rndDate.getFullYear() + "-W" + pad(weeknumber, 2);
    return result;
  },
  "radio" : selectRandomRadio,
  "checkbox" : function(el){
    var randomBoolean = Math.random() >= 0.5;
    $(el).attr("checked", randomBoolean);
  }
};
var fakerCultures = ["az", "cz", "de", "de_AT", "de_CH", "en", "en_AU", "en_BORK", "en_CA", "en_GB", "en_IE", "en_IND", "en_US", "en_au_ocker", "es", "es_MX", "fa", "fr", "fr_CA", "ge", "id_ID", "it", "ja", "ko", "nb_NO", "nep", "nl", "pl", "pt_BR", "ru", "sk", "sv", "tr", "uk", "vi", "zh_CN", "zh_TW"];
*/
function selectRandomRadio(el) {
  var groupName = $(el).attr("name");
  var radios = $("input:radio:enabled[name='" + groupName + "']");
  var idx = randomInt(0, radios.length - 1);
  $(radios[idx]).prop("checked", true);
}

var filler = function (label, category, num, el) {
  /*
  Basic functionality: given a label of an input element filler outputs the required information from result dictionary/json file.
  Inputs
    label: Label of the input box to acquire the fill in information for 
    category: tells whether the label is associated with personal information, education or work experiences category
    num: determines index of the element required from the list containing elements belonging to a category
    el: the html input element for which the information is to be acquired.
  Output:
    correct value to fill in for the required input field or null if not sure.
  */
  label = label.toLowerCase().trim();
  //console.log(label);
  // experience category
  if (category == "experience") {
    //console.log(label);
    //console.log("filling experience");
    //console.log(result["experience"][num]);
    var experienceInfo = result["experience"][num];
    // console.log(num);
    // console.log(experienceInfo);
    if (labelIdentifier(jobTitleWordList, label) === "job title") {
      return experienceInfo["job-title"];
    } else if (labelIdentifier(companyWordList, label) === "company") {
      return experienceInfo["company"];
    } else if (labelIdentifier(locationWordList, label) === "location") {
      return experienceInfo["location"];
    } else if (["from", "from*"].includes(label)) {
      // This portion is hardcoded for the workday application date filling(has to be generalized later)
      var value = experienceInfo["from"];
      //console.log(label);
      //console.log(value);
      if (label == "from*") {
        if (
          $(el).parent().find("div:first").text().toLowerCase().trim() == "mm"
        ) {
          value = value.slice(5);
        } else {
          value = value.slice(0, 4);
        }
      }
      //console.log(value);
      return value;
    } else if (["to", "to*"].includes(label)) {
      var value = experienceInfo["to"];
      //console.log(value);
      //console.log(label);
      if (label == "to*") {
        if (
          $(el).parent().find("div:first").text().toLowerCase().trim() == "mm"
        ) {
          value = value.slice(5);
        } else {
          value = value.slice(0, 4);
        }
      }
      //console.log(value);
      return value;
      // end of hardcoded section
    } else if (["role description", "role description*"].includes(label)) {
      return experienceInfo["role-description"];
    }
    //education category
  } else if (category == "education") {
    //console.log(label);
    //console.log("filling education");
    var educationInfo = result["education"];
    if (labelIdentifier(collegeWordList, label) === "college") {
      return educationInfo["university"];
    } else if (labelIdentifier(degreeWordList, label) === "degree") {
      return educationInfo["degree"];
    } else if (labelIdentifier(majorWordList, label) === "major") {
      return educationInfo["field"];
    } else if (labelIdentifier(gradeWordList, label) === "grade") {
      return educationInfo["gpa"];
    } else if (["from"].includes(label)) {
      //console.log(parseInt(educationInfo["from"]));
      return parseInt(educationInfo["from"]);
    } else if (["to (actual or expected)"].includes(label)) {
      return educationInfo["to"];
    }
    //personal information category. Return values are currently not acquired form the extesion(to be changed)
  } else {
    // * console.log("filling personal information");
    var personInfo = result["personal"];
    // * console.log(personInfo["gender"]);

    // * console.log(label);

    if (labelIdentifier(fullNameWordList, label) === "full name") {
      return personInfo["first-name"] + " " + personInfo["last-name"];
    } else if (labelIdentifier(firstNameWordList, label) === "first name") {
      return personInfo["first-name"];
    } else if (labelIdentifier(lastNameWordList, label) === "last name") {
      return personInfo["last-name"];
      //else if (["last name*", "last name", "last name *"].includes(label)) {
      //return personInfo["last-name"];
    } else if (labelIdentifier(genderWordList, label) === "gender") {
      return personInfo["gender"];
    } else if (labelIdentifier(pronounsWordList, label) === "pronouns") {
      return personInfo["pronouns"];
    } else if (labelIdentifier(ethnicityWordList, label) === "ethnicity") {
      //console.log(personInfo["ethnicity"]);
      return personInfo["ethnicity"];
    } else if (labelIdentifier(emailWordList, label) === "email") {
      return personInfo["email"];
    } else if (
      // TODO Hard Coding
      labelIdentifier(phoneWordList, label) === "phone" &&
      !label.includes("code") &&
      !label.includes("extension")
    ) {
      return personInfo["phone"];
    } else if (labelIdentifier(addressWordList, label) === "street address") {
      return personInfo["address"];
    } else if (labelIdentifier(cityWordList, label) === "city") {
      return personInfo["city"];
    } else if (labelIdentifier(zipWordList, label) === "zip code") {
      return personInfo["zip-code"];
    } else if (
      labelIdentifier(curCompanyWordList, label) === "current company"
    ) {
      return personInfo["current-company"];
    } else if (
      labelIdentifier(curPositionWordList, label) === "current position"
    ) {
      return personInfo["current-position"];
    } else if (labelIdentifier(linkedinWordList, label) === "linkedin") {
      return personInfo["linkedin"];
    } else if (labelIdentifier(githubWordList, label) === "github") {
      return personInfo["github"];
    } else if (labelIdentifier(legalStatusWordList, label) === "legal status") {
      return personInfo["legal-status"];
    } else if (labelIdentifier(workingVisaWordList, label) === "working visa") {
      return personInfo["working-visa"];
    } else if (
      labelIdentifier(disabilityWordList, label) === "disability status"
    ) {
      return personInfo["disability-status"];
    } else if (
      labelIdentifier(veteranStatusWordList, label) === "veteran status"
    ) {
      return personInfo["veteran-status"];
    } else if (labelIdentifier(hispanicWordList, label) === "hispanic") {
      if (personInfo["ethnicity"] === "hispanic") {
        return "yes";
      } else if (personInfo["ethnicity"] === "please select") {
        return "please select";
      } else {
        return "no";
      }
    } else {
      return null;
    }
  }
};

var labelIdentifier = function (synonymList, label) {
  var requiredCorrectCount = synonymList[1];
  var correctCount = 0;
  for (i = 2; i < synonymList.length; i++) {
    if (label.includes(synonymList[i])) {
      correctCount++;
    }
    if (correctCount === requiredCorrectCount) {
      return synonymList[0];
    }
  }
};

var identifyValue = function (options, answer) {
  //console.log("trying to identify" + answer);
  for (i = 0; i < options.length; i++) {
    optionLabel = $(options[i]).text().toLowerCase();
    //console.log(typeof optionLabel + optionLabel);

    // TODO Hard Coding
    if (answer === "man") {
      answer = "male";
    } else if (answer === "woman") {
      answer = "female";
    }

    // TODO Hard Coding
    if (optionLabel.includes("i am not a")) {
      optionLabel = "no";
    } else if (optionLabel.includes("i identify as")) {
      optionLabel = "yes";
    }

    if (optionLabel.includes(answer)) {
      //console.log(optionLabel + " returned successfully");
      return options[i].value;
    }
  }
  return options[0].value;
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

          // TODO Hard Coding
          if (
            window.location.hostname.toString().includes("myworkingdayjobs")
          ) {
            $(el).parent().find("div:first").text(value);
            return;
          }

          // TODO Hard Coding
          if (window.location.hostname.toString().includes("lever")) {
            var ageGroup = result["personal"]["age-group"];
            var genderChoice = result["personal"]["gender"];
            var ethnicityChoice = result["personal"]["ethnicity"];
            var veteranStatus = result["personal"]["veteran-status"];
            var labelText = $(label).text().toLowerCase();
            //console.log(genderChoice);
            if (
              ethnicityChoice === "asian" &&
              labelText.includes("caucasian")
            ) {
              return;
            }
            if (
              labelText.includes(ageGroup) ||
              labelText.includes(genderChoice) ||
              labelText.includes(ethnicityChoice) ||
              labelText.includes(veteranStatus)
            ) {
              //console.log("entered");
              $(label).find("input").prop("checked", true);
              return;
            }
          }
          /* If hostname == lever
          gender = personal[gender], ethnicity= personal[ethnicity] ……..
          If (label == gender or ethnicity or ….)
          $(this).prop(checked, true) */

          return;
        }

        // TODO Hard Coding
        if (window.location.hostname.toString().includes("lever")) {
          var ageGroup = result["personal"]["age-group"];
          var genderChoice = result["personal"]["gender"];
          var ethnicityChoice = result["personal"]["ethnicity"];
          var veteranStatus = result["personal"]["veteran-status"];
          if (
            $(label).text().includes(ageGroup) ||
            $(label).text().includes(genderChoice) ||
            $(label).text().includes(ethnicityChoice) ||
            $(label).text().includes(veteranStatus)
          ) {
            $(label).prop("checked", true);
          }
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
var findLabel = function (elem) {
  /* 
  finds the nearest label element that is closest to the input element in HTML tree
  Inputs
    elem: The input element to find the label for
  Output:
    The nearest label element above the input
  */

  var label = null;
  count = 0;
  var parent = null;
  while (true) {
    parent = $(elem).parent();
    if (!parent) break;
    label = parent.find("label:first");
    if ($(label).text()) {
      //console.log($(label).text());
      return label;
    }
    elem = parent;
  }
  return label;
};

var create_fieldsets = function () {
  /*
  For each category it presses add and creates the remaining number of fieldsets required and fills them
  */
  var len = 0;
  var j = 0;
  for (i = 0; i < fieldset_categories.length; i++) {
    if (fieldset_categories[i] == "fill_experience") {
      j = num_experience;
    } else if (fieldset_categories[i] == "fill_education") {
      j = num_education;
    } else if (fieldset_categories[i] == "fill_language") {
      j = num_language;
    } else {
      continue;
    }
    while (j > 0) {
      var add_buttons = [];
      $(":button")
        .not(":hidden,input[type=submit],input[readonly]")
        .each(function () {
          if (
            $(this).length != 0 &&
            ($(this).text() == "Add" || $(this).text() == "Add Another")
          ) {
            add_buttons.push(this);
          }
        });
      $(add_buttons[i]).click();
      len++;
      //console.log(j);
      j--;
    }
  }
  // fill created waits for all the fieldsets to get created. It goes ahead and fills them once they are created.
  fill_created(len);
};

function fill_created(len) {
  // identifies and fills all the fieldsets created within create_fieldsets function.
  var fieldsets = $("fieldset").not(
    ":hidden,input[type=submit],input[readonly], .filled"
  );
  if (fieldsets.length == len) {
    $("fieldset")
      .not(":hidden,input[type=submit],input[readonly],.filled")
      .each(function () {
        //console.log("new fieldset");
        identify_fieldset(this);
        fill_fieldset(this);
      });
  } else {
    setTimeout(function () {
      fill_created(len);
    }, 300);
  }
}

var identify_fieldset = function (el) {
  // identifies if the fieldset is an education, experience, or language fieldset. It then adds a class value to the fieldset so its category can be identified later.
  //console.log("identified");
  var labels = [];
  $(el)
    .find("label")
    .each(function () {
      labels.push($(this).text().toLowerCase().trim());
    });
  if (labels.includes("company*")) {
    $(el).addClass("fill_experience");
    return "fill_experience";
  } else if (labels.includes("degree*")) {
    $(el).addClass("fill_education");
    return "fill_education";
  } else if (labels.includes("language*")) {
    $(el).addClass("fill_language");
    return "fill_language";
  }
  $(el).addClass("fill_other");
  return "other";
};
var fill_fieldset = function (el) {
  // Uses the class tag to identify category, identifies the index in the category list by checking how many are left to fill, finally fills in the values for the fieldset
  // and adds a class called filled to mark the that the fieldset is filled.
  if ($(el).hasClass("fill_experience")) {
    num_experience -= 1;
    var num = result["experience"]["sel"].length - num_experience;
    num = result["experience"]["sel"][num - 1];
    var labels = [];
    $(el)
      .find("input:enabled, select:enabled, textarea:enabled")
      .not(":button,:hidden,input[type=submit],input[readonly]")
      .each(function () {
        randomizeInputValue(this, "experience", num);
      });
  } else if ($(el).hasClass("fill_education")) {
    num_education -= 1;
    var labels = [];
    $(el)
      .find("input:enabled, select:enabled, textarea:enabled")
      .not(":button,:hidden,input[type=submit],input[readonly]")
      .each(function () {
        //console.log("education part");
        randomizeInputValue(this, "education");
      });
  } else if ($(el).hasClass("fill_language")) {
    num_language -= 1;
  }
  $(el).addClass("filled");
};

var identify_sections = function (len) {
  /*
  Identifies the categories that need to filled, creates the required number of each by pressing their respective add buttons, and fills them.
  Inputs
    len: is the number of add buttons that are identified. This corresponds to number of categories to be filled.
  */
  // selects all the fieldsets that are not previously filled.
  var fieldsets = $("fieldset").not(
    ":hidden,input[type=submit],input[readonly], .filled"
  );
  // the len is used to check all the fieldsets are created following the initial click of the add buttons. if not it waits until they are created before moving on.
  if (fieldsets.length == len) {
    //  fills the fieldsets created with the click and identifies what category each belong to. field_Categories is used to index which cateogry each add button corresponds to
    $("fieldset")
      .not(":hidden,input[type=submit],input[readonly],.filled")
      .each(function () {
        //console.log("new fieldset");
        var category = identify_fieldset(this);
        fill_fieldset(this);
        fieldset_categories.push(category);
        //console.log(category);
      });
    // create_fiedlsets creates the remaining fieldsets by pressing the add button corresponding to each category the required number of times(now we have identified what fieldset
    // each button belongs to so we know how many times to press each)
    create_fieldsets();
  } else {
    setTimeout(function () {
      identify_sections(len);
    }, 300);
  }
};



var fill_back = function(data){
  //console.log('received data from server');
  //console.log(data);
   back_data = data;
   if($("input:enabled, select:enabled, textarea:enabled")
        .not(":button,:hidden,input[type=submit],input[readonly]").length != data.length) {
    return;
   }
   chrome.storage.local.get(["userinfo"], function (res) {
      result = res["userinfo"];
      var i = 0;
      $("input:enabled, select:enabled, textarea:enabled")
        .not(":button,:hidden,input[type=submit]")
        .each(function () {
          fill_from_back(this,data[i],result,strin[i]);
          i = i+1;
        });
    });
}

var getText = function( elems ) {
    var  elem;
     for ( var i = 0; elems[i]; i++ ) {
         elem = elems[i];    //console.log(elem.nodeName);
        // Get the text from text nodes and CDATA nodes
         if( elem.tagName == "INPUT" || elem.tagName == "SELECT" || elem.tagName == "TEXTAREA" || elem.tagName == "H2" || elem.tagName == "H3" || elem.tagName == "H4" || elem.tagName == "H5" || elem.tagName == "H6" || elem.tagName == "H1" ) {  
            if (window.getComputedStyle(elem).visibility === "hidden" || $(elem).is(":hidden") || $(elem).is(":disabled")) {
              //console.log("hidden") 
            } else {
                 strin.push([ret,elem.tagName,elem.type,[]]); 
                 ret = ""; 
            } 
        } else if( elem.tagName == "OPTION") {
          strin[strin.length-1][3].push(ret);
          ret = "";
        }
        if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
            ret += elem.nodeValue;
            
         } else if ( elem.nodeType !== 8 ) {
            getText( elem.childNodes );
         }
    }
};

var fill_from_back = function (el,data,result,inp) {
  var value;
  if(inp[1]=="SELECT") {
    var idx = data[0];
    var opts = $(el)[0].options;
    value = opts[idx].value;
  } else {
    if(data[1] == "personal" || data[1] == "education") {
      value  = result[data[1]][data[0]];
    } else if(data[1] == "experience") {
      if(result["experience"][data[2]]){
        value = result["experience"][data[2]][data[0]];
      } else {
        value == "NULL";
      }
    }
  }
  // acquries label element with for property that is the same as the input.
  if ($(el).length != 0) {
        // fills the input html element with the correct input value.
      // value = "adnan";
      if(value == "NULL") {
        return;
      }
      $(el).focus().val(value);
  };
}

// acquire the personal information from storage and fill in the personal information fields.
//console.log("starting autofill");

var ishardcode = false;
for(var i =0; i < hardcoded.length; i++) {
  if(window.location.href.match(hardcoded[i])) {
    ishardcode = true;
  } 
}

//console.log('ishardcode');
//console.log(ishardcode);
if(ishardcode){
 chrome.storage.local.get(["userinfo"], function (res) {
    result = res["userinfo"];
    console.log(result);

    $("input:enabled, select:enabled, textarea:enabled")
      .not(":button,:hidden,input[type=submit],input[readonly]")
      .each(function () {
        randomizeInputValue(this);
      });

  // // acquire the education adn experience information from storage and fill in the education and experience information fields.
  // chrome.storage.sync.get(["experience"], function (res) {
  //   // store experience information in result json.
  //   result["experience"] = res["experience"];
  //   chrome.storage.sync.get(["education"], function (res2) {
  //     //store education information in result json.
  //     result["education"] = res2["education"];
      num_experience = result["experience"]["sel"].length;
      // identify the fieldsets that are currently on the page and fill them with the required values.
      $("fieldset")
        .not(":hidden,input[type=submit],input[readonly]")
        .each(function () {
          identify_fieldset(this);
          fill_fieldset(this);
        });
      // most times only one fieldset of each category(education, experience) is present and you have to open more by pressing the add or the add another button.
      // the below code determines how many adds to press for each category, clicks them the required number of times, then waits for them to form, finally fills them up after that.
      // most of this happens in identify sections. the below code just presses all the add buttons once. identify sections does the remaining.
      $(":button")
        .not(":hidden,input[type=submit],input[readonly]")
        .each(function () {
          if (
            $(this).length != 0 &&
            ($(this).text() == "Add" || $(this).text() == "Add Another")
          ) {
            num_categories += 1;
            $(this).click();
          }
        });
      identify_sections(num_categories);

});
} else {
//
  getText(document.body.childNodes);
  //console.log('got inp list');
  //console.log(strin);
  chrome.storage.local.get(["userinfo"], function (res) {
    result = res["userinfo"];
    chrome.runtime.sendMessage({msg:'get-values',data:[strin,result['personal']]}, (response) => {fill_back(response);})
  });
  
}
