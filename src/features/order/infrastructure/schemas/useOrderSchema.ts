import { object, SchemaOf } from 'yup'
import Order from '../../domain/Order'
import useAddressSchema from './useAddressSchema'
import useContactSchema from './useContactSchema'

export default function useOrderSchema (): SchemaOf<Order> {
  return object({
    deliveryAddress: useAddressSchema(),
    contact: useContactSchema()
  })
}
