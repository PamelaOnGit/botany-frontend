export interface IOrder { 
  customer_id: string | null, 
  delivery_address_id: string | null, 
  delivery_option_id: string | null, 
  total_amount: number | null, 
  order_status_id: number | null 
}