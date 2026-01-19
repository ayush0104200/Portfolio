import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Please fill all required fields' })
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      subject,
      message
    })

    await contact.save()

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: contact
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    res.status(500).json({
      success: false,
      message: 'Error submitting your message. Please try again later.',
      error: error.message
    })
  }
})

// Get all contacts (admin)
router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message
    })
  }
})

// Get single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' })
    }
    res.json({
      success: true,
      data: contact
    })
  } catch (error) {
    console.error('Error fetching contact:', error)
    res.status(500).json({
      success: false,
      message: 'Error fetching contact',
      error: error.message
    })
  }
})

// Mark contact as read
router.patch('/:id/read', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    )
    res.json({
      success: true,
      message: 'Contact marked as read',
      data: contact
    })
  } catch (error) {
    console.error('Error updating contact:', error)
    res.status(500).json({
      success: false,
      message: 'Error updating contact',
      error: error.message
    })
  }
})

// Delete contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' })
    }
    res.json({
      success: true,
      message: 'Contact deleted successfully',
      data: contact
    })
  } catch (error) {
    console.error('Error deleting contact:', error)
    res.status(500).json({
      success: false,
      message: 'Error deleting contact',
      error: error.message
    })
  }
})

export default router
