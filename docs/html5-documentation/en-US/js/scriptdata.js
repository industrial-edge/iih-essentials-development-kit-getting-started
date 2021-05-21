var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "f86c3b7f81d5926e6ef11ab4a8057693"; //
g_DefaultDocumentId = "144683960843"; 
//#endregion --- Default Data ---


g_documentInfoObject["144683960843"] = {"RootTreeId":"3d2d6c7d475b92f5558bb5decde18005","Title":"Data Service Development Kit for Industrial Edge","System":"Industrial Edge","ProductGroup":"App","DocuClass":"Application Manual","PublishEdition":"04/2021","PublishDrawingNumber":"A5E50909595-AA"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"3d2d6c7d475b92f5558bb5decde18005","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"f86c3b7f81d5926e6ef11ab4a8057693|5042fcab6df27a7a00b4d11000075ee2|e4cfdded8d25422aad5d707824d4bc9b|00d6c54ee5f9085e8be98dfbea24a773|4af2b77b002f3b590f176115edec8c74|16572f6c554323533646fa23d1bab3e4|b8087e19898fe9685bf04aa5fa8629a5"}
g_nodeDict[1] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"f86c3b7f81d5926e6ef11ab4a8057693","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Introduction","NodeType":"chapter","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693","SubNodes":"29a8391a12c8123f6553abe609270864|975f6f42d90096397c3e06ebfec1a3c2|d52f787318423df9fc25f5b17ac3b5d4|a7fc81892275c4023a94d5b167f49516|41a30058ed9ebd00fcfd86cf1b771309|6e573621f72628ffa427d6d440e21091"}
g_nodeDict[2] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"29a8391a12c8123f6553abe609270864","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Security information","NodeType":"topic","Parent":"f86c3b7f81d5926e6ef11ab4a8057693","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693|29a8391a12c8123f6553abe609270864","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"975f6f42d90096397c3e06ebfec1a3c2","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Note on EU General Data Protection Regulation","NodeType":"topic","Parent":"f86c3b7f81d5926e6ef11ab4a8057693","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693|975f6f42d90096397c3e06ebfec1a3c2","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"d52f787318423df9fc25f5b17ac3b5d4","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Security Information for Industrial Edge Apps","NodeType":"topic","Parent":"f86c3b7f81d5926e6ef11ab4a8057693","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693|d52f787318423df9fc25f5b17ac3b5d4","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"a7fc81892275c4023a94d5b167f49516","ContainerId":"144550271115","FlavorId":"144316051595","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Overview of Industrial Edge","NodeType":"topic","Parent":"f86c3b7f81d5926e6ef11ab4a8057693","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693|a7fc81892275c4023a94d5b167f49516","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"41a30058ed9ebd00fcfd86cf1b771309","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"1.5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Function overview","NodeType":"topic","Parent":"f86c3b7f81d5926e6ef11ab4a8057693","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693|41a30058ed9ebd00fcfd86cf1b771309","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"6e573621f72628ffa427d6d440e21091","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Application example - Legal information","NodeType":"topic","Parent":"f86c3b7f81d5926e6ef11ab4a8057693","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|f86c3b7f81d5926e6ef11ab4a8057693|6e573621f72628ffa427d6d440e21091","SubNodes":""}
g_nodeDict[8] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"5042fcab6df27a7a00b4d11000075ee2","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Installation","NodeType":"topic","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|5042fcab6df27a7a00b4d11000075ee2","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"e4cfdded8d25422aad5d707824d4bc9b","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Start Docker Container","NodeType":"topic","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|e4cfdded8d25422aad5d707824d4bc9b","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"00d6c54ee5f9085e8be98dfbea24a773","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Open local host (port)","NodeType":"topic","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|00d6c54ee5f9085e8be98dfbea24a773","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"4af2b77b002f3b590f176115edec8c74","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Application example","NodeType":"topic","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|4af2b77b002f3b590f176115edec8c74","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"16572f6c554323533646fa23d1bab3e4","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"OpenAPI specification","NodeType":"topic","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|16572f6c554323533646fa23d1bab3e4","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"144683960843","ProductModelDocumentId":"","TreeId":"b8087e19898fe9685bf04aa5fa8629a5","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Publishing user-developed app in the IEM","NodeType":"topic","Parent":"3d2d6c7d475b92f5558bb5decde18005","BreadCrumb":"3d2d6c7d475b92f5558bb5decde18005|b8087e19898fe9685bf04aa5fa8629a5","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "3d2d6c7d475b92f5558bb5decde18005";
g_nodeIndexDict["1"] = "f86c3b7f81d5926e6ef11ab4a8057693";
g_nodeIndexDict["2"] = "29a8391a12c8123f6553abe609270864";
g_nodeIndexDict["3"] = "975f6f42d90096397c3e06ebfec1a3c2";
g_nodeIndexDict["4"] = "d52f787318423df9fc25f5b17ac3b5d4";
g_nodeIndexDict["5"] = "a7fc81892275c4023a94d5b167f49516";
g_nodeIndexDict["6"] = "41a30058ed9ebd00fcfd86cf1b771309";
g_nodeIndexDict["7"] = "6e573621f72628ffa427d6d440e21091";
g_nodeIndexDict["8"] = "5042fcab6df27a7a00b4d11000075ee2";
g_nodeIndexDict["9"] = "e4cfdded8d25422aad5d707824d4bc9b";
g_nodeIndexDict["10"] = "00d6c54ee5f9085e8be98dfbea24a773";
g_nodeIndexDict["11"] = "4af2b77b002f3b590f176115edec8c74";
g_nodeIndexDict["12"] = "16572f6c554323533646fa23d1bab3e4";
g_nodeIndexDict["13"] = "b8087e19898fe9685bf04aa5fa8629a5";

g_nodeIDDict = [];
g_nodeIDDict["3d2d6c7d475b92f5558bb5decde18005"] = "0";
g_nodeIDDict["f86c3b7f81d5926e6ef11ab4a8057693"] = "1";
g_nodeIDDict["29a8391a12c8123f6553abe609270864"] = "2";
g_nodeIDDict["975f6f42d90096397c3e06ebfec1a3c2"] = "3";
g_nodeIDDict["d52f787318423df9fc25f5b17ac3b5d4"] = "4";
g_nodeIDDict["a7fc81892275c4023a94d5b167f49516"] = "5";
g_nodeIDDict["41a30058ed9ebd00fcfd86cf1b771309"] = "6";
g_nodeIDDict["6e573621f72628ffa427d6d440e21091"] = "7";
g_nodeIDDict["5042fcab6df27a7a00b4d11000075ee2"] = "8";
g_nodeIDDict["e4cfdded8d25422aad5d707824d4bc9b"] = "9";
g_nodeIDDict["00d6c54ee5f9085e8be98dfbea24a773"] = "10";
g_nodeIDDict["4af2b77b002f3b590f176115edec8c74"] = "11";
g_nodeIDDict["16572f6c554323533646fa23d1bab3e4"] = "12";
g_nodeIDDict["b8087e19898fe9685bf04aa5fa8629a5"] = "13";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "144683960843";
g_nDocIdMap["legalinfo"] = "144683960843";
g_nDocIdMap["documentsettings"] = "144683960843";
g_nDocIdMap["3d2d6c7d475b92f5558bb5decde18005"] = "144683960843";
g_nDocIdMap["f86c3b7f81d5926e6ef11ab4a8057693"] = "144683960843";
g_nDocIdMap["29a8391a12c8123f6553abe609270864"] = "144683960843";
g_nDocIdMap["975f6f42d90096397c3e06ebfec1a3c2"] = "144683960843";
g_nDocIdMap["d52f787318423df9fc25f5b17ac3b5d4"] = "144683960843";
g_nDocIdMap["a7fc81892275c4023a94d5b167f49516"] = "144683960843";
g_nDocIdMap["41a30058ed9ebd00fcfd86cf1b771309"] = "144683960843";
g_nDocIdMap["6e573621f72628ffa427d6d440e21091"] = "144683960843";
g_nDocIdMap["5042fcab6df27a7a00b4d11000075ee2"] = "144683960843";
g_nDocIdMap["e4cfdded8d25422aad5d707824d4bc9b"] = "144683960843";
g_nDocIdMap["00d6c54ee5f9085e8be98dfbea24a773"] = "144683960843";
g_nDocIdMap["4af2b77b002f3b590f176115edec8c74"] = "144683960843";
g_nDocIdMap["16572f6c554323533646fa23d1bab3e4"] = "144683960843";
g_nDocIdMap["b8087e19898fe9685bf04aa5fa8629a5"] = "144683960843";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "29a8391a12c8123f6553abe609270864";
g_flavorIdNodeMapping["143947792651"] = "975f6f42d90096397c3e06ebfec1a3c2";
g_flavorIdNodeMapping["137695296011"] = "d52f787318423df9fc25f5b17ac3b5d4";
g_flavorIdNodeMapping["144316051595"] = "a7fc81892275c4023a94d5b167f49516";
g_flavorIdNodeMapping["143947784971"] = "41a30058ed9ebd00fcfd86cf1b771309";
g_flavorIdNodeMapping["144677801867"] = "6e573621f72628ffa427d6d440e21091";
g_flavorIdNodeMapping["143440678411"] = "5042fcab6df27a7a00b4d11000075ee2";
g_flavorIdNodeMapping["143440670859"] = "e4cfdded8d25422aad5d707824d4bc9b";
g_flavorIdNodeMapping["143471880331"] = "00d6c54ee5f9085e8be98dfbea24a773";
g_flavorIdNodeMapping["143472937995"] = "4af2b77b002f3b590f176115edec8c74";
g_flavorIdNodeMapping["143472945803"] = "16572f6c554323533646fa23d1bab3e4";
g_flavorIdNodeMapping["144520134923"] = "b8087e19898fe9685bf04aa5fa8629a5";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "3d2d6c7d475b92f5558bb5decde18005";
g_nodeNameMapping["143401734667/143947029771.htm"] = "f86c3b7f81d5926e6ef11ab4a8057693";
g_nodeNameMapping["143401734667/143947033099.htm"] = "29a8391a12c8123f6553abe609270864";
g_nodeNameMapping["143401734667/144067797771.htm"] = "975f6f42d90096397c3e06ebfec1a3c2";
g_nodeNameMapping["143401734667/143947038731.htm"] = "d52f787318423df9fc25f5b17ac3b5d4";
g_nodeNameMapping["143401734667/144550271115.htm"] = "a7fc81892275c4023a94d5b167f49516";
g_nodeNameMapping["143401734667/143947788555.htm"] = "41a30058ed9ebd00fcfd86cf1b771309";
g_nodeNameMapping["143401734667/144677805451.htm"] = "6e573621f72628ffa427d6d440e21091";
g_nodeNameMapping["143401734667/143471876107.htm"] = "5042fcab6df27a7a00b4d11000075ee2";
g_nodeNameMapping["143401734667/143440674443.htm"] = "e4cfdded8d25422aad5d707824d4bc9b";
g_nodeNameMapping["143401734667/143471884427.htm"] = "00d6c54ee5f9085e8be98dfbea24a773";
g_nodeNameMapping["143401734667/143472941835.htm"] = "4af2b77b002f3b590f176115edec8c74";
g_nodeNameMapping["143401734667/143586306699.htm"] = "16572f6c554323533646fa23d1bab3e4";
g_nodeNameMapping["143401734667/144520138763.htm"] = "b8087e19898fe9685bf04aa5fa8629a5";


