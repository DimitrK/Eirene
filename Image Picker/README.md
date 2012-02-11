Image Picker Control
=====================

This is a control is based on [Jame Harris' image picker](http://forums.enyojs.com/discussion/56/image-picker-kind-for-phonegap-and-enyo-1-0) for [PhoneGap](http://www.phonegap.com). The control will pops up a modal dialog box and allows a user to select an image from their photo library or take one using the camera. 

## Control Use

To use the control simply add it as a component to your app and remember to add _pgImagePicker.js_ to your _depends.js_ file.  The _onImageSelected_ parameter is used to know where to return back to your code and passes in the path to the image.  To call the control use the _openAtCenter()_ function.  If the control is not working, please check the _console.log_ output for error messages.

## Control Details

### Control Name

**pgImagePicker**

### Example Setup

	{name: "PhoneGapImagePicker", kind: "pgImagePicker", onImageSelected: "functionWhenImageIsSelected"}

### Published Parameters

_(function)_ **onImageSelected:** This is the function that the control will return the selected image to passing in the path to the image. _*DEFAULT VALUE:* N/A

_(Object)_ **cameraOptions:** This parameter is a [PhoneGap cameraOptions](http://docs.phonegap.com/en/1.4.1/phonegap_camera_camera.md.html#cameraOptions) object and can be used to specify options used by the PhoneGap Camera API. Certain parameters and values may be required by the control so user specified options may be overridden.  Please see console.log for warnings if you suspect issues. _*DEFAULT VALUE:* {quality: 50, destinationType: Camera.DestinationType.FILE\_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY}_

### Return Value

The control will return to the function specified in the _onImageSelected__ parameter passing it the path in URI format to the image.

## Limitations

None Known.

## To Do
- Test on various platforms

## License

This software is released under the MIT License.

Copyright (c) 2011 Syntactix LLC, [http://www.gosyntactix.com/](http://www.gosyntactix.com)

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

