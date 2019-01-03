function loadParcelAttributesFromValidated(pNum, pArr) {
       var parcel = pNum;
       var addressStart = "";
       var addressEnd = "";
       var direction = "";
       var streetName = "";
       var suffix = "";
       var unitStart = "";
       var unitEnd = "";
       var city = "";
       var ownerName = "";

       var result = aa.parcel.getParceListForAdmin(parcel,addressStart,addressEnd,direction,streetName,
              suffix,unitStart,unitEnd,city,ownerName);

       if(result.getSuccess()) {
              var parcelArray = result.getOutput();
              if(parcelArray != null)   {      
                     var size = parcelArray.length;
                     for(var i=0; i<size; i++) {
                           var parcelInfoModel = parcelArray[i];
                   var pm = parcelInfoModel.getParcelModel();
                           var pa = pm.getParcelAttribute();
                           if(parcelInfoModel.getParcelModel() != null && parcelInfoModel.getParcelModel().getParcelAttribute() != null) {
                                  var its = parcelInfoModel.getParcelModel().getParcelAttribute().iterator();
                                  while(its.hasNext()) {
                                         var l3APOAttributeModel = its.next();
                                         pArr["ParcelAttribute." + l3APOAttributeModel.getAttributeName()]=l3APOAttributeModel.getAttributeValue();
                                  }                          
                           }
                     }
              }
       }
}
 
