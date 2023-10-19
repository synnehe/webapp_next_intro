import Link from "next/link"
import "src/css/main.css"

export default function Home() {


  return (
  <>
  <Link href="/products">
    <button id="nav-link">Go to product page</button>
  </Link>
  </>
  )
}
