import { NextApiRequest, NextApiResponse } from 'next'

type AffinityData = {
  name: string
  stars: number
  apiKey: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, stars, apiKey }: AffinityData = req.body as AffinityData

  const affinityData = {
    // Assuming "name" is the organization name and "stars" is a custom field
    name,
    custom_field_values: {
      'GitHub Stars': stars
    }
  }

  try {
    const response = await fetch('https://api.affinity.co/organizations', {
      method: 'POST',
      headers: {
        'API-KEY': apiKey, // Use the API key from the request body
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(affinityData)
    })

    if (response.ok) {
      res.status(200).json({ success: true })
    } else {
      throw new Error('Request failed')
    }
  } catch (err) {
    res.status(500).json({ success: false })
  }
}
