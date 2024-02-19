import { Product } from "../../../utils/async_functions"


type Props = {
  selectedProducts: Product[]
}

export const Recommendations = ({selectedProducts}: Props) => {
  console.log(selectedProducts)
  return (
    <div>index</div>
  )
}
