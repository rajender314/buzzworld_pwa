const EndpointUrl = {
  filterDataApi: "v1/FilterData",
  gridStateMaintainance: "v1/GridStateMaintenance",
  contactList: "v1/Contacts",
  userSavedFilters: "v1/UserSavedFilters",
  exportFilters: "v1/ExportData",
  organisationList: "v1/Organizations",
  accountTypes: "v1/AccountTypes",
  uploadFileApi: "v1/UploadFile",
  importFileValidation: "v1/ImportFileValidation",
  vendorList: "v1/Vendors",
  specialPricingApi: "v1/SpecialPrice",
  importProductsExcelApi: "v1/ImportProductsExcel",
  branchList: "v1/Branches",
  regionsList: "/v1/Regions",
  territoryList: "v1/Territory",
  zipcodesList: "v1/Zipcode",
  wareHouseList: "v1/Warehouse",
  productClassList: "v1/ProductClass",
  productCategoryList: "v1/ProductCategory",
  createRegions: "/v1/Regions",
  createTerritory: "v1/Territory",
  branchNames: "v1/salesBranches",
  salesPerson: "v1/salesTerritory",
  productsApi: "v1/Products",
  pricingFilters: "v1/PricingFilters",
  discountCodesApi: "v1/VendorDiscountCodes",
  stockCodeApi: "v1/Products",
  multiEditDiscountCodes: "v1/MultiEditDiscountCodes",
  quantityByDiscountCodes: "v1/QuantityByDiscountCodes",
  exportDataByMail: "v1/ExportDataByMail",
  logoutApi: "logout",
  syncData: "v1/SyncData",
  userPermissions: "v1/UserPermissions",
  importAccountTypes: "v1/ImportAccountTypes",
  mappingImportAccountTypes: "v1/MappingImportAccountTypes",
  Userroles: "v1/Userroles",
  permissionList: "v1/PermissionList",
  users: "v1/Users",
  userFileUpload: "v1/FileUpload",
  userProfile: "v1/UserProfile",
  rmaRequest: "v1/RMARequest",
  customerDropdown: "v1/CustomerDropdown",
  repairInfo: "v1/RepairInfo",
  rMASearchItems: "v1/RMASearchItems",
  repairItems: "v1/RepairItems",
  customItem: "v1/CustomItem",
  itemStorageLocation: "v1/ItemStorageLocation",
  repairLogs: "v1/RepairLogs",
  itemsEvaluate: "v1/ItemsEvaluate",
  repairItemsUpload: "v1/RepairItemsUpload",
  Attachments: "v1/Attachments",
  DownloadAttachments: "v1/DownloadAttachments",
  AddPartToProducts: "v1/AddPartToProducts",
  RepairsAssignee: "v1/RepairsAssignee",
  InternalNotes: "v1/InternalNotes",
  CustomerNotesDynamics: "v1/CustomerNotesDynamics",
  SPAccountTypes: "v1/SP-AccountTypes",
  SPOrgData: "v1/SP-OrgData",
  SPVendors: "v1/SP-Vendors",
  SPDiscountCodes: "v1/SP-DiscountCodes",
  SPItems: "v1/SP-Items",
  SpecialPrice: "v1/SpecialPrice",
  SPPreview: "v1/SP-Preview",
  SPLogHistory: "v1/SP-LogHistory",
  AddNewPart: "v1/AddNewPart",
  QuoteCustomerDropdown: "v1/Quote-CustomerDropdown",
  Quote: "v1/Quote",
  QuoteTypes: "v1/QuoteTypes",
  QuoteTaxableStatus: "v1/QuoteTaxableStatus",
  QuotePayTerms: "v1/QuotePayTerms",
  QuoteCustomerNotesDynamics: "v1/Quote-CustomerNotesDynamics",
  QuoteInternalNotes: "v1/QuoteInternalNotes",
  QuoteItems: "v1/QuoteItems",
  QuoteSearchItems: "v1/QuoteSearchItems",
  QuoteOptions: "v1/QuoteOptions",
  QuoteLogs: "v1/QuoteLogs",
  QuoteItemsMultipleDelete: "v1/QuoteItemsMultipleDelete",
  QuoteApproveForms: "v1/QuoteApproveForms",
  QuoteSourceOptions: "v1/QuoteSourceOptions",
  QuoteLeadTimeOptions: "v1/QuoteLeadTimeOptions",
  QuoteSubmitInternalApproval: "v1/QuoteSubmitInternalApproval",
  QuoteApproval: "v1/QuoteApproval",
  QuoteClose: "v1/QuoteClose",
  QuoteReopen: "v1/QuoteReopen",
  QuoteSubmitClientApproval: "v1/QuoteSubmitClientApproval",
  SaveRepairItemstoQuote: "v1/SaveRepairItemstoQuote",
  QuoteInernalApprovals: "v1/QuoteInernalApprovals",
  SysproJobInsert: "v1/SysproJobInsert",
  SalesOrderLists: "v1/SalesOrderLists",
  SalesOrderQuery: "v1/SalesOrderQuery",
  getSysproJobs: "v1/getSysproJobs",
  getSysproJobInformation: "v1/searchSysproJobs",
  getJobDetails: "v1/getSysproJobInformation",
  getJobEmployee: "v1/getJobEmployee",
  saveWorkingHours: "v1/saveWorkingHours",
  CustomerDetails: "v1/SysproCustomerDetails",
  StocklineItemDetails: "v1/getQuoteWonItems",
  CreateSalesOrder: "/v1/SysproSalesOrderInsert",
  OrdersListData: "v1/getSalesOrder",
  InvoiceTerms: "v1/getSysproPayTerms",
  SalesOrderInfo: "/v1/SalesOrderQuery",
  ShippingInstructions: "/v1/getShippingInstructions",
  PartsPurchaseListData: "/v1/getPartPurchase",
  PartsPurchaseFormUrgencyDropDownOptions: "/v1/getPartUrgency",
  PartsUserRoles: "/v1/Userroles",
  PartsUsers: "/v1/Part-Users",
  getPartsPurchaseStatus: "/v1/getPartStatus",
  createPartsPurchase: "/v1/savePartPurchase",
  partPurchaseDetailview: "/v1/getPartInfo",
  editPartPurchaseStatus: "v1/editPartPurchase",
  partPurchaseJobnumber: "/v1/getSysproJobs",
  GetInventoryQuery: "v1/getInventoryQuery",
  GetInventoryList: "v1/getInventoryList",
  PrintPdf: "v1/PrintPdf",
  DownloadPdf: "v1/DownloadPdf",
  DownloadRepairPdf: "v1/RepairReportPdf",
  PartPurchaseUpload: "v1/PartVendorUpload",
  TermsandConditions: "v1/TermsandConditions",
  UpdateTermsandConditions: "v1/UpdateTermsandConditions",
  QCcontrol: "v1/QCcontrol",
  QcRepairStatuses: "v1/QcRepairStatuses",
  QuoteAddNewPart: "v1/Quote-AddNewPart",
  QuoteStatus: "v1/QuoteStatus",
  QuoteVersion: "v1/QuoteVersion",
  QuoteApprovalValues: "v1/QuoteApprovalValues",
  QuoteInternalApprovalQues: "v1/QuoteInternalApprovalQues",
  deleteSpLog: "v1/SP-LogHistory",
  SPAEditInfo: "v1/SPAEditInfo",
  PricingBranches: "v1/Pricing-Branches",
  PricingVendors: "v1/Pricing-Vendors",
  DCBranches: "v1/DC-Branches",
  DCVendors: "v1/DC-Vendors",
  RepairVendors: "v1/Repair-Vendors",
  QuoteVendors: "v1/Quote-Vendors",
  SavePoInfo: "v1/savePartPurchaseOrder",
  VendorCodeSearch: "v1/supplierQuery",
  getStocklineItemsDeaitls: "v1/fetchStockCode",
  createStocklineItems: "v1/insertStockCode",
  getStockitemDetails: "v1/getStockCode",
  ChangePartPurchaseVendorInfo: "v1/editPartPurchaseVendor",
  ChangePartPurchaseItemInfo: "v1/editPartPurchaseItems",
  AddPurchaseItems: "v1/addPartPurchaseItems",
  DeletePurchaseItem: "v1/deletePartPurchaseItem",
  UserRoleTypes: "v1/UserRoleTypes",
  UserTypes: "v1/UserTypes",
  fobList: "v1/Fob",
  QuoteItemQty: "v1/QuoteItemQty",
  SaveasUser: "v1/SaveasUser",
  ManuallyRepairStatusUpdate: "v1/ManuallyRepairStatusUpdate",
  WoToeTag: "v1/WoeTag",
  RepairStatuses: "v1/RepairStatuses",
  RepairItemsQc: "v1/RepairItemsQc",
  RepairPriority: "v1/RepairPriority",
  QuoteUsers: "v1/Quote-Users",
  QuoteGP: "v1/Quote-GP",
  EvaluationSummary: "v1/EvaluationSummary",
  RepairSummary: "v1/RepairSummary",
  BranchUsers: "v1/branchUsers",
  BranchRegions: "v1/branchRegions",
  QuoteQuoteApproveForms: "v1/Quote-QuoteApproveForms",
  QuoteQuoteTypes: "v1/Quote-QuoteTypes",
  QuoteQuotePayTerms: "v1/Quote-QuotePayTerms",
  UsersUserroles: "v1/Users-Userroles",
  SubmitClientApprovalApi: "v1/Quote-SubmitClientApproval",
  QuoteItemsFilterSearch: "v1/Quote-ItemsFilterSearch",
  QuoteRevise: "v1/QuoteRevise",
  ppVendorList: "v1/ppVendors",
  PartsPurchasePartnumberFilterSearch: "v1/Part-MftPartFilter",
  ZipCodesSearch: "v1/getTerritoryZips",
  RelatedData: "v1/RelatedData",
  ManagerList: "v1/ManagerList",
  pastDueInvoicesList: "v1/PastDueInvoices",
  SystemQuoteItems: "v1/SystemQuoteItems",
  getAccountNotes: "v1/getAccountNotes",
  getEmailInvoices: "v1/getEmailInvoices",
  getPastDueReportSync: "v1/getCustomerPastDueReport",
  getWareHouseSync: "v1/syncWarehouses",
  getProductClassSync: "v1/syncProductClass",
  AssignTech: "v1/AssignTech",
  WareHouseOptions: "v1/getWarehouseList",
  ProductClassOptions: "v1/getProductClassList",
  ProductCategory: "v1/getProductCategoryList",
  PPRMA: "v1/PPRMA",
  RepairUsers: "v1/Repair-Users",
  BulkEditItems: "v1/BulkEditItems",
  QuoteClone: "v1/QuoteClone",
  PricingAllVendors: "v1/PricingImport-AllVendors",
  getSupplierLists: "v1/getSupplierLists",
  SPImportFileValidation: "v1/SPImportFileValidation",
  PricingProductClass: "v1/Pricing-ProductClass",
  GetCountries: "v1/getCountries",
  GetStates: "v1/getStates",
  CreateUser: "v1/CreateUser",
  getSalesReport: "v1/getSalesReport",
  getSalesReportFilters: "v1/getSalesReportFilters",
  UpdateIIDMCost: "v1/UpdateIIDMCost",
  PastRepairInvoices: "v1/PastRepairInvoices",
  ImportPricing: "v1/ImportPricing",
  exportSalesReport: "v1/exportSalesReport",
};
export default EndpointUrl;
