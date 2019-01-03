function getCapAddress(capId)
{
    var primaryCapAddressScriptObject = aa.address.getPrimaryAddressByCapID(capId,"Y");
    var capAddressObj;
    if (primaryCapAddressScriptObject.getSuccess())
    {
        capAddressObj = primaryCapAddressScriptObject.getOutput().getAddressModel();    
    }
    else
    {
        var capAddressScriptObject = aa.address.getAddressByCapId(capId);
        if (capAddressScriptObject.getSuccess())
        {
            var capAddressArray = capAddressScriptObject.getOutput();
            if(capAddressArray.length > 0)
            {
                capAddressObj = capAddressArray[0];            
            }
        }
    }
    
    if(capAddressObj)      
    {                 
        return capAddressObj.toString();
     }
     else
     {
         return "";
     }
}
 

/*----------------------------------------------------------------------------------------------------/
| Function getCapPrimaryOwner
| Used to bring back the owner marked primary on the current record
| Added by IK Consulting, LLC - 9/8/16
/----------------------------------------------------------------------------------------------------*/
