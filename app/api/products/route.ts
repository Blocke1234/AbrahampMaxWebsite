import { supabase } from '@/app/lib/supabase'

export async function GET(req: Request) {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')

    if (error) throw error

    return Response.json({ products })
  } catch (error) {
    console.error('Products API error:', error)
    return Response.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, description, price, image_url } = body

    const { data, error } = await supabase
      .from('products')
      .insert([{ name, description, price, image_url }])
      .select()

    if (error) throw error

    return Response.json({ product: data[0] }, { status: 201 })
  } catch (error) {
    console.error('Product creation error:', error)
    return Response.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}
