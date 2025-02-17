import { ReactNode } from 'react'

export type PayloadProps = {
  payload: object
  method: string
  apiUrl: string
  headers?: object
}

export type FilterColumnProps = {
  id: string
  name: string
  filter_name?: string
  discount_code?: string
  address1?: string
  account_number?: string
  total_price?: string
  code?: string
}
export type EditFilterColumnProps = {
  id: number
  name: string
  status: string
  description: string
  filter_name?: string
}
export type SidenavProps = {
  key: string
  label: string
}
export type ApiResponseProps = {
  data: any
  message: string
  status_code: number
  success: boolean
  is_override_popup?: boolean
}
export type ApiResponse = {
  result: ApiResponseProps
}
export type ApiDataProps = {
  apiUrl: string
  params: object
}
export type PageProps = {
  pageLabel: string
  displayLabel?: string
  gridName?: string
  sideNavData: SidenavProps[]
  apiDataUrl: string
  pageLogo: string
  flag?: boolean
  apiData: ApiDataProps
  userId?: any
  isOpenModel?: boolean
  routeLabel?: string
}

export type GridfilterData = {
  column_data: any
  filters: any
  saved_filters: any
  users: any
}

export type StateMaintainanceProps = {
  created_date?: string
  data: any
  grid_name: string
  id?: string
}

export type FiltersetProps = {
  filterType: string
  values: Array<[]>
}

export type SaveChangesProps = {
  filter_name: string
  filter_description: string
  filter_status: boolean
  filter_userdetails: object
}

export type ProfileProps = {
  id: string
  name: string
  route: string
  url: string
}
export type ColumnHeaders = {
  editable: boolean
  field: string
  filter: boolean
  headerName: string
  sort: boolean
  width: number
  [x: string]: any
}

export type AdminRowProps = {
  description: string
  id?: string
  name: string
  status: string
}

export type SavedFilterProps = {
  created_by: string
  created_date: string
  is_delete_option: boolean
  label: string
  value: string
}

export type UserListProps = {
  value: string
  label: string
}
export type MenuOptions = {
  key: string
  label: string
}
export type PiMenuOptions = {
  children?: MenuOptions[]
  key: string
  label: string
  icon?: ReactNode
  href?: string
  id?: string
}

export type BranchListProps = {
  id: string
  name: string
  status: string
}
export type TempTableProps = {
  temp_table: string
}
export type ImportParams = {
  discount_codes_data: TempTableProps
  price_list_data: TempTableProps
  vendor_id: string
  branch_id: string
}
export type AccountTypeData = {
  MRO: string
  OEM: string
  PO: string
  RS: string
  quantity: number
}
export type BodyProps = {
  branch_id?: string
  vendor_id?: string
  quantity_id?: string
  vendor_name?: string
}
export type ReqInfoHeaderProps = {
  Authorization: string
}
export type ReqInfoProps = {
  body: BodyProps
  headers: ReqInfoHeaderProps
  method: string
  url: string
}

export type PiSelectProps = {
  value: number
  label: string
}

export type DynamicJsonValidProps = {
  [x: string]: string
}

export type SubscribeProps = {
  data: ReqInfoProps
}
export type AxiosProps = {
  method: string
  url: string
  data: object
  headers?: object
}

export type RowDataProps = {
  id?: string
  name: string
  description: string
  status: string
  quantity: string
}

export type PricingAddRowProps = {
  manufacturer_discount_id: string
  stock_code: string
  list_price: string
  description: string
}

export type BranchSelectProps = {
  id: string
  name: string
  label: string
  value: string
}
export type DropdownLabelProps = {
  id?: string
  name: string
  label: string
  value: string
}

export type RouteParams = {
  id: string
}
