People Picker Control
=====================

This is a control that allows a user to select a contact from a list generated from the device's address book.  We base64 encoded all the default images to reduce any dependancies.  These of course can be overwritten by setting the corresponding variable (see below) as well as almost all of the styling.  We followed the PhoneGap convention for their contact object normalizing the contact data since not all the fields are supported for each platform.

## Control Use

To use the control simply add it as a component to your app and remember to add _pgPeoplePicker.js_ to your _depends.js_ file.  You must set the _onComplete_ parameter and you can set the other published paramters using the Enyo generated get/set functions (note these generated function calls are camel cased _example: setPpPhoto(value)_).  To call the control use the _openPeoplePicker()_ function.  If the control is not working, please check the _console.log_ output for error messages.

## Control Details

### Control Name

**pgPeoplePicker**

### Published Parameters

_(function)_ **onComplete:** This is the function that the control will return the selected contact data to. _*DEFAULT VALUE:* N/A

_(CSS Style)_ **ppDialogSytle:** This parameter is a reference to the model dialogs style attribute. This is mainly used to set the width of the model popup. _*DEFAULT VALUE:* "width: 450px;"_

_(Image)_ **ppHeaderIcon:** This specifies the image used as the icon in the dialogs header. _*DEFAULT VALUE:* Base64 Encoded Image_

_(CSS Style)_ **ppHeaderIconStyle:** This parameter is a reference to the header icons style attribute. This is used mainly to position the icon within the header appropriately.  _*DEFAULT VALUE:* "padding-left: 10px; padding-top: 5px;"_

_(String)_ **ppHeaderText:** This is the text displayed in the dialogs header.  _*DEFAULT VALUE:*_ "Select A Contact"

_(CSS Style)_ **ppHeaderTextStyle:** This is a reference to the header's text style attribute. This is mainly used to position the text appropriately.  _*DEFAULT VALUE:* "font-size: x-large; padding-left: 7px; padding-top: 5px;"_

_(String)_ **ppHeaderButton:** Specifies the text displayed in the button that closes the contact list dialog canceling the request.  _*DEFAULT VALUE:* "Close"_

_(CSS Style)_ **ppHeaderButtonStyle:** This is a reference to the button that closes the contact lists dialog's style attribute.  This is mainly used to properly position the button within the header.  _*DEFAULT VALUE:* "margin-left: 112px;"_

_(String)_ **ppFilter:** This parameter is used to reduce the returned list of contacts displayed to the user.  It maps directly to the _contactFindOptions_ PhoneGap API parameter.  _*DEFAULT VALUE:* ""_

_(Boolean)_ **ppFields.id:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.displayName:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.name:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.nickname:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.phoneNumbers:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.emails:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.addresses:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.orginizations:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.birthday:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.photos:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.categories:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **ppFields.urls:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Image)_ **ppPhoto:** This specifies the default image to use when a contact does not have a photo.  _*DEFAULT VALUE:* Base64 Encoded Image_

### Return Value

The control will return to the function specified in the _onComplete_ parameter passing it a PhoneGap compliant contact object. See [http://docs.phonegap.com/en/1.1.0/phonegap_contacts_contacts.md.html#Contact](http://docs.phonegap.com/en/1.1.0/phonegap_contacts_contacts.md.html#Contact) for details.

## Limitations

This control will not work for webOS due to the way contacts are handled by the platform.  Instead one should use the built in control. In the future it may make sense for this control to detect the platform and determine whether to use the PhoneGap version or the built in one.

## To Do
- Re-evaluate name sorting as it times out on large lists 
- Add Scrolling Ability to Modal List
- Test on iOS
- Test on Android
- Test on Blackberry
- Detect webOS vs. other platform and use the correct corresponding control.

## License

This software is released under the MIT License.

Copyright (c) 2011 Syntactix LLC, http://www.gosyntactix.com/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

