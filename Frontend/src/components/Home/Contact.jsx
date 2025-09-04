import { Send, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { useState } from 'react';
import { handleError, handleSuccess } from '../Includes/Utils';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      const url = `http://localhost:8080/contact`; 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success === false) {
        throw new Error(result.message || 'Failed to send message');
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      setStatusMessage(result.message || 'Message sent successfully!');
      handleSuccess(result.message || 'Message sent successfully!');
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(error.message || 'There was an error sending your message. Please try again later.');
      handleError(error.message || 'There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} className="text-blue-600 dark:text-blue-400" />,
      title: 'Email',
      value: '',
      link: '',
    },
    {
      icon: <Phone size={24} className="text-green-600 dark:text-green-400" />,
      title: 'Phone',
      value: '',
      link: 'tel:+91',
    },
    {
      icon: <MapPin size={24} className="text-red-600 dark:text-red-400" />,
      title: 'Location',
      value: 'Bengaluru, Karnataka',
      link: null,
    },
    {
      icon: <Globe size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'Website',
      value: '',
      link: '',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Write your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Write your email address"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Describe your project or inquiry..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      Processing<span className="ml-2 animate-pulse">...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm">
                  {statusMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1">{method.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{method.title}</h4>
                      {method.link ? (
                        <a href={method.link} className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-white/90 text-sm mb-4">
                I typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white/90">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;