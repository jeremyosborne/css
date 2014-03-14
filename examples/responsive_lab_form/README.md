Lab - Media Queries
===================

This lab is about modifying an HTML form to behave well across multiple devices using media queries. The items to do are listed below. The vagueness of some of the items is on purpose to give you freedom to implement variations that you might like to implement.



In the html file:

    * Include a meta viewport that allows for normalization of CSS pixel values on mobile devices.



In the css file:

* Create a default style.
    * Style the page header.
    * Remove the focus highlight from input fields.
    * Make the :valid state of the inputs transition to a light green border and (very) light green background.
    * Center the form horizontally on the page in the default view.
    * Set the size of the id-photo to 226x146.
    * Set up the form fields to be horizontally laid out in the following format:
            
            Label:           Input
            Another lable:   Input
    
    * Vertically align the inputs and the labels.
    * Center the submit button.
    
* Mid view (equal or less than 768px wide)
    * Change the form width into a responsive width, with 10% white space on each side of it.
    * Change the form to a stacked layout, such as:
        
            Label:
            Input
            Label:
            Input
    
    * Have the inputs, textarea, and submit button fill the entire width of the form.

* Small device view (equal or less than 480px wide)
    * Make the header less obtrusive relative to whatever the default header style is.
    * Make the form only have 2.5% white space on either side of it relative to the viewport.
    * Halve the size of the id-photo.
