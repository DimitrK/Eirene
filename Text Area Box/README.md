RichText Box Replacement Control
================================

This is a control to replace the default Enyo 1.0 which has an issue on iOS 4.x (it does work on 5.x) and Android. The control follows the default control's pattern of extending Enyo.input and mimics its behavior.

## Control Use

To use the control simply add it as a component to your app and remember to add _textAreaBox.js_ to your _depends.js_ file.  If the control is not working, please check the _console.log_ output for error messages.

## Control Details

### Control Name

**textArea**

### Published Parameters

_(function)_ **onChange:** This is the function that the control will return the selected contact data to. _*DEFAULT VALUE:* N/A

_(string)_ **hint:** Sets the default text shown in the control that disappears when the user begins to type.  _*DEFAULT VALUE:* ""_

_(string)_ **value:** Sets or gets the text in the textarea box.  _*DEFAULT VALUE:* ""_

_(string)_ **maxTextHeight:** HTML5 'spellcheck' attribute.  _*DEFAULT VALUE:* null_

_(Boolean)_ **spellcheck:** This parameter specifies if the returned contact data should include this field.  _*DEFAULT VALUE:* true_

_(Boolean)_ **autocorrect:** Maps to Mobile Safari 'autocorrect' attribute.  _*DEFAULT VALUE:* true_

_(string)_ **autoKeyModifier:** Possible settings: "num-lock", "caps-lock", "shift-lock", "shift-single", "num-single".  _*DEFAULT VALUE:* ""_

_(string)_ **autoCapitalize:** Possible settings: "sentence", "title", "lowercase" (actual attribute is cap +).  _*DEFAULT VALUE:* "sentence"_

_(Boolean)_ **autoEmoticons:** Set to true to enable auto-emoticons support.  _*DEFAULT VALUE:* false_

_(Boolean)_ **autoLinking:** Set to true to enable auto-linking support.  _*DEFAULT VALUE:* false_

_(Boolean)_ **autoWordComplete:** Set to false to disable automatic word completion.  _*DEFAULT VALUE:* true_

_(string)_ **inputType:** Specifies the 'type' attribute on the input field.  On webOS, this modifies the virtual keyboard layout, supported values are "email" and "url.  _*DEFAULT VALUE:* ""_

_(CSS Class)_ **inputClassName** CSS class to apply to the inner input control.  _*DEFAULT VALUE:* ""_

_(CSS Class)_ **focusClassName** CSS class to apply on focus.  _*DEFAULT VALUE:* "enyo-input-focus"_

_(CSS Class)_ **spacingClassName** CSS class to apply inner controls to control spacing.  _*DEFAULT VALUE:* "enyo-input-spacing"_

_(Boolean)_ **alwaysLooksFocused:** Set to true to make the input look focused when it's not.  _*DEFAULT VALUE:* false_

_(Object)_ **selection:** The selection property is an object describing selected text. The start and end properties specify the zero-based starting and ending indexes of the selection. For example, if an input value is "Value" and getSelection returns `{start: 1, end: 3}` then "al" is selected. To select "alu," call: `this.$.input.setSelection({start: 1, end: 4});`.  _*DEFAULT VALUE:* null_

_(Boolean)_ **disabled:** Determines whether the textarea is available to the user.  _*DEFAULT VALUE:* false_

_(Boolean)_ **changeOnInput:** Set to true to fire the onchange event as well as the oninput event whenever the input content is changed.  _*DEFAULT VALUE:* false_

_(Integer)_ **keypressInputDelay:** Set to the number of milliseconds to delay the input event when a key is pressed. If another key is pressed within the delay interval, the input will be postponed and fired once only after the delay has elapsed without a key being pressed.  _*DEFAULT VALUE:* 0_

_(Boolean)_ **styled:** Set to false to avoid any default styling from being applied.  _*DEFAULT VALUE:* true_

_(Boolean)_ **selectAllOnFocus:** Set to true to select all text when the input gains focus.  _*DEFAULT VALUE:* false_

### Return Value

N/A

## Limitations

The control currently does not work on Android (neither does the default).  One thought is this is due to a bug in the way Android handles webview based text inputs.

## To Do
- Get working on Android

## License

This software is released under the MIT License.

Copyright (c) 2012 Syntactix LLC, http://www.gosyntactix.com/

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