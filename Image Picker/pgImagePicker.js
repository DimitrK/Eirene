enyo.kind({
	name: "pgImagePicker",
	kind: enyo.ModalDialog,
	caption: $L("Select An Image"),
	autoClose: false,
	dismissWithClick: false,
	lazy:true,
	events: {
		onImageSelected: ""
	},
	published: {
		cameraOptions: "" //PhoneGap camera options object. See http://docs.phonegap.com for details. 
	},
	components:[
		{kind: enyo.GroupBox, components: [
			{kind: enyo.Button, caption: $L("Take A Picture"), onclick:"takePicture",    flex: 1, className: "enyo-button-light" },
			{kind: enyo.Button, caption: $L("Select From Gallery"), onclick:"galleryPicture", flex: 1, className: "enyo-button-light" }
		]},
		{name: "error", showing: false, style: "font-size:14px; padding:4px; color:#FF0000; font-weight:700;"},
		{kind: enyo.Spacer, height: "20px"},
		{kind: enyo.Button, caption: $L("Cancel"), onclick:"close", flex: 1}
	],
	create: function(){
		this.inherited(arguments);
		
		this.requiredCameraOptions = {quality: 50, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY};
		
		//merge camera options with required defaults
		if(this.cameraOptions){
			for (prop in this.cameraOptions) { 
			   this.requiredCameraOptions[prop] = this.cameraOptions[prop];
			}
		}
		
		//scrub options for platform quirks
		//iOS will throw a memory error often if quality is greater than 50 so limit it.
		if(window.device.platform === "iOS" || window.device.platform === "iPhone" || window.device.platform === "iPad"){
			if(this.requiredCameraOptions.quality > 50){
				this.requiredCameraOptions.quality = 50;
			}			
		}
		
		//if a targetWidth or targetHeight is define then both must be if one is missing we assume a square
		if(this.requiredCameraOptions.targetWidth && !this.requiredCameraOptions.targetHeight){
			 this.requiredCameraOptions.targetHeight = this.requiredCameraOptions.targetWidth;
		}
		else if(!this.requiredCameraOptions.targetWidth && this.requiredCameraOptions.targetHeight){
			this.requiredCameraOptions.targetWidth = this.requiredCameraOptions.targetHeight;
		}
		
		//force destinationType to FILE_URI
		if(this.requiredCameraOptions.destinationType !== Camera.DestinationType.FILE_URI){
			console.log("pgImagePicker WARNING! | Forcing cameraOptions.destinationType to Camera.DestinationType.FILE_URI");
			this.requiredCameraOptions.destinationType = Camera.DestinationType.FILE_URI;
		}
		
		if(this.requiredCameraOptions.sourceType !== Camera.PictureSourceType.PHOTOLIBRARY)
		{
			console.log("pgImagePicker WARNING! | Forcing cameraOptions.sourceType to Camera.PictureSourceType.PHOTOLIBRARY");
			this.requiredCameraOptions.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
		}
		
	},
	takePicture: function(){
		navigator.camera.getPicture(enyo.bind(this, (function(imageURI){
			//console.log("Take Photo Selected: " + imageURI);
			
			//--> Do what you want here with imageURI
			
			
			//--> Pass back that a photo was selected
			this.doImageSelected(imageURI);
			//--> Close this window
			this.close();
			return true;
		})), enyo.bind(this, (function(message){
			this.$.error.setContent($L("There was an error taking a picture. " + message));
			this.$.error.show();			
		})), this.requiredCameraOptions);
	},

	galleryPicture: function(){
		navigator.camera.getPicture(enyo.bind(this, (function(imageURI){
			//console.log("Gallery Photo Selected: " + imageURI);
			
			//--> Do what you want here with imageURI
			
			
			//--> Pass back that a photo was selected
			this.doImageSelected(imageURI);
			//--> Close this window
			this.close();
			return true;
		})), enyo.bind(this, (function(message){
			this.$.error.setContent($L("There was an error selecting a picture from the gallery. " + message));
			this.$.error.show();
		})), this.requiredCameraOptions);
	}
});