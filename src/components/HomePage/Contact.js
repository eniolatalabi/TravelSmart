import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ErrorMessage from './Messages/ErrorMessage';
import SuccessMessage from './Messages/SuccessMessage';
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
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
      className="relative min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-900 p-8"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-400"
                rows="5"
              />
              {errors.message && <ErrorMessage message={errors.message.message} />}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
            {success && <SuccessMessage message={success} />}
            {error && <ErrorMessage message={error} />}
          </form>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-lg">
              If you have any questions, feel free to contact us. Our support team is available 24/7 to assist you with any inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhoneAlt className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-lg">+1 234 567 890 (US)</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-lg">support@travelsmart.com</span>
              </div>
              <div className="flex items-center">
                <FaClock className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-lg">Available 24/7</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-lg">123 Travel Street, New York, USA</span>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-bold">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  <FaFacebook size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  <FaTwitter size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  <FaInstagram size={30} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-4">Our Office Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">New York, USA</h4>
              <p className="text-lg">123 Travel Street, New York, NY 10001</p>
              <p className="text-lg">Phone: +1 234 567 890</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">London, UK</h4>
              <p className="text-lg">456 Explorer Road, London, SW1A 1AA</p>
              <p className="text-lg">Phone: +44 123 456 789</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Dubai, UAE</h4>
              <p className="text-lg">789 Wanderer Avenue, Dubai, UAE</p>
              <p className="text-lg">Phone: +971 50 123 4567</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Sydney, Australia</h4>
              <p className="text-lg">1010 Globe Street, Sydney, NSW 2000</p>
              <p className="text-lg">Phone: +61 2 1234 5678</p>
            </div>
          </div>
        </div>


        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8">Find Us on the Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086635319156!2d-122.41941508468125!3d37.77492977975874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f072c9d%3A0x6d3c0247990b4d82!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1627921993434!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
