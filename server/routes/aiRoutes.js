const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.post('/describe', protect, async (req, res) => {
  try {
    const { productName, category, condition } = req.body

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: `You are a helpful assistant for a college student marketplace in India. Write a short, honest and compelling product description in 2-3 sentences (max 60 words) for selling this product. Product: ${productName}, Category: ${category}, Condition: ${condition}. Only return the description, nothing else.`,
        stream: false
      })
    })

    const data = await response.json()
    res.status(200).json({ description: data.response })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/price', protect, async (req, res) => {
  try {
    const { productName, category, condition } = req.body

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2',
        prompt: `You are a pricing expert for a college second-hand marketplace in India. Suggest a fair resale price range in INR for this product. Product: ${productName}, Category: ${category}, Condition: ${condition}. Return ONLY a JSON object like this: {"min": 100, "max": 300, "reason": "one line reason"}. Nothing else, no extra text.`,
        stream: false
      })
    })

    const data = await response.json()

    const text = data.response.trim()
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    const parsed = JSON.parse(jsonMatch[0])

    res.status(200).json(parsed)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router