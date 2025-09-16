import { useState } from 'react'
import { Mail, Send, User, MessageSquare } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = `Portfolio Contact: Message from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    setSubmitStatus('success')
    setIsSubmitting(false)

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitStatus(null)
    }, 3000)
  }

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <div className='max-w-xl mx-auto p-6 relative z-30'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h2 className='text-5xl font-bold text-white mb-4'>Get In Touch</h2>
        <p className='text-xl text-white/80'>
          Got an idea? Let’s bring it to life together
        </p>
      </div>

      {/* Contact Form */}
      <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6'>
        <div className='space-y-6'>
          {/* Name Field */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <User className='inline w-4 h-4 mr-2' />
              Your Name
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none'
              placeholder='Enter your full name'
            />
          </div>

          {/* Email Field */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <Mail className='inline w-4 h-4 mr-2' />
              Email Address
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none'
              placeholder='your.email@example.com'
            />
          </div>

          {/* Message Field */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              <MessageSquare className='inline w-4 h-4 mr-2' />
              Your Message
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows='5'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none'
              placeholder='Tell me about your project, ideas, or just say hello...'
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
              isFormValid && !isSubmitting
                ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg'
                : 'relative pointer-events-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                Opening Email Client...
              </>
            ) : (
              <>
                <Send className='w-4 h-4' />
                Send Message
              </>
            )}
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className='text-center p-4 bg-green-50 border border-green-200 rounded-lg'>
              <p className='text-green-800 font-medium'>
                Email client opened! Please send the message to complete.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Additional Contact Info */}
      <div className='text-center mt-8 text-gray-600'>
        <p className='text-sm'>
          Prefer email directly? Reach out to{' '}
          <a
            href='mailto:tiwaribashanta9@gmail.com'
            className='text-orange-500 hover:text-orange-600 font-medium transition-colors'
          >
            tiwaribashanta9@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
