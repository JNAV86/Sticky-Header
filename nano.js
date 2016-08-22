  $(document).ready(function () {
    $("#nanoGallery3").nanoGallery({
        itemsBaseURL:''
    });

    $("#nanoGallery").nanoGallery({
      userID: '34858669@N00',
      kind: 'flickr',
      
      photoset: 'none',

      thumbnailWidth: 120, thumbnailHeight: 120,
      thumbnailHoverEffect: 'scaleLabelOverImage,borderDarker',
      theme: 'light',
      thumbnailLabel: { display:true, position:'overImageOnMiddle', align:'center' },
      thumbnailLazyLoad: true
    });
  });