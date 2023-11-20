import HomePage from "@/components/HomePage";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight:'900',
  subsets:['latin'],
  display:"swap"
})
const roboto2 = Roboto({
  weight:'300',
  subsets:['latin'],
  display:"swap"
})
export default function Home() {
  
  return (
    <>
      <HomePage roboto={roboto} roboto2={roboto2}/>
    </>
  )
}
