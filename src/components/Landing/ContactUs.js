import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ErrorMessage from './Messages/ErrorMessage';
import SuccessMessage from './Messages/SuccessMessage';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = (data) => {
    emailjs.send('service_tcta9ty', 'template_9oa5qvb', data, 'wTt_-7iIX7zkJiV-D')
      .then((response) => {
        console.log('Success:', response);
        setSuccess('Message sent successfully!');
        setError(''); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to send message. Please try again.');
        setSuccess(''); 
      });
  };

  return (
    <section
      id="contact-us"
      className="relative min-h-screen bg-gradient-neutral text-center p-8"
    >
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-lg font-semibold">Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 border rounded"
              />
              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-lg font-semibold">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-2 border rounded"
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-lg font-semibold">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 border rounded"
                rows="4"
              />
              {errors.message && <ErrorMessage message={errors.message.message} />}
            </div>
            <button
              type="submit"
              className="bg-accent-orange text-white px-8 py-3 rounded-full hover:bg-accent-yellow transition-colors duration-300"
            >
              Send Message
            </button>
            {success && <SuccessMessage message={success} />}
            {error && <ErrorMessage message={error} />}
          </form>

          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold mb-4">Our Contact Information</h3>
            <div className="flex items-center">
              <FaPhoneAlt className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">+1 234 567 890 (US)</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">+44 123 456 789 (UK)</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">+91 987 654 321 (India)</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">+234 800 123 4567 (Nigeria)</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">+971 50 123 4567 (Dubai)</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">devpros@admin.com</span>
            </div>
            <div className="flex items-center">
              <FaClock className="w-6 h-6 text-primary-dark mr-2" />
              <span className="text-lg">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
