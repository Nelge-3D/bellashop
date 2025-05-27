// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  // simulate envoi des données au backend / stripe
  console.log('Commande reçue :', body)

  return NextResponse.json({ status: 'success', message: 'Commande validée' })
}
