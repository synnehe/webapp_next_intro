import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createProducts } from "@/features/generateContent";
import type { Product } from "@/features/types";

const productsList: Product[] = [
  {
    id: 0,
    title: "Cinnamon bun hat",
    description: "Stay warm and stylish in the colder months with this cozy cinnamon bun hat, designed to look just as delicious as it is comfortable to wear.",
    price: 268,
    quantity: 1
  }
]

export function GET() {
  //const products = createProducts()
  const products = productsList

  return NextResponse.json(
    { data: products },
    { status: 200 },
  )
}

export async function POST(request: NextRequest){
  const data = await request.json() as Product[]
  
  productsList.push(...data)
  
  return NextResponse.json({data}, {status: 201})
}