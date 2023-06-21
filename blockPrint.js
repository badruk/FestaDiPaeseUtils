/*
	Given a specific xpath disables the associated element to prevent problems
*/

// Xpath for the print button, disabling it forces the user to register the order at least once
var printXpath = "/html/body/div[1]/div[2]/div/div[2]/div/div/div[2]/div[1]/form/a/button"

// adds a solid border for debugging purposes
document.body.style.border = "5px solid red"

// disables the required element
disableElementByXpath(printXpath);
function disableElementByXpath(path) {
  document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.disabled = true;
}