import { motion } from "framer-motion";
import { CONTACT } from "../constraints";
import { MapPin, Phone, Mail, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import GraduationPhoto from '../assets/graduation.jpeg';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const [isEmailJSReady, setIsEmailJSReady] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      console.error('Missing EmailJS environment variables');
      setSubmitStatus({
        success: false,
        message: 'Email service configuration is incomplete. Please check your environment variables.'
      });
      return;
    }

    try {
      emailjs.init(publicKey);
      setIsEmailJSReady(true);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to initialize email service. Please refresh the page and try again.'
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailJSReady) {
      setSubmitStatus({
        success: false,
        message: 'Email service is not ready. Please try again later.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      
      const templateParams = {
        name: formData.user_name.trim(),
        email: formData.user_email.trim(),
        title: 'New Contact Form Submission',
        message: formData.message.trim(),
        time: new Date().toLocaleString(),
        reply_to: formData.user_email.trim()
      };
      
      await emailjs.send(serviceId, templateId, templateParams);
      
      // Set success message
      setSubmitStatus({ 
        success: true, 
        message: "Your message has been sent successfully! I'll get back to you soon." 
      });
      
      // Clear form
      setFormData({ user_name: '', user_email: '', message: '' });
      
      // Auto-hide success message after 7 seconds
      setTimeout(() => {
        setSubmitStatus({ success: null, message: '' });
      }, 7000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      let errorMessage = 'Failed to send message. ';
      if (error.status === 412) {
        errorMessage = 'Validation error. Please check your input and try again.';
      } else if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      }
      setSubmitStatus({ success: false, message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Decorative elements - reduced on mobile */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 sm:opacity-10">
        <div className="hidden sm:block absolute top-1/4 -right-32 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="hidden sm:block absolute bottom-1/4 -left-32 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Let's talk!
          </p>
          <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 sm:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <h3 className="text-2xl sm:text-2xl font-semibold text-white mb-6">Send me a message</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={item}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                    formData.user_name 
                      ? 'bg-white text-gray-800 border-gray-300' 
                      : 'bg-slate-700/50 border-slate-600/50 text-white'
                  }`}
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div variants={item}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                    formData.user_email 
                      ? 'bg-white text-gray-800 border-gray-300' 
                      : 'bg-slate-700/50 border-slate-600/50 text-white'
                  }`}
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div variants={item}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className={`w-full px-4 py-3 border rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                    formData.message
                      ? 'bg-white text-gray-800 border-gray-300' 
                      : 'bg-slate-700/50 border-slate-600/50 text-white'
                  }`}
                  placeholder="Hi Dinesh, I'd like to discuss a potential project..."
                ></textarea>
              </motion.div>
              
              <motion.div variants={item} className="pt-2">
                {submitStatus.success ? (
                  <div className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg">
                    <span>✓</span>
                    <span>Message sent!</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                )}
              </motion.div>
            </form>
          </motion.div>
          
          {/* Right Column - Graduation Photo and Work Together Card */}
          <div className="space-y-6 sm:space-y-8">
            {/* Graduation Photo Card */}
            <motion.div 
              variants={item}
              className="relative"
            >
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-emerald-800 to-teal-1000 rounded-2xl sm:rounded-3xl opacity-70 blur-xl"></div>
              <div className="aspect-[4/3] w-full overflow-hidden relative z-10 rounded-xl sm:rounded-2xl border-4 border-white/10 shadow-xl sm:shadow-2xl">
                <img 
                  src={GraduationPhoto} 
                  alt="Dinesh Tamang - Graduation" 
                  className="w-full h-full object-cover object-top"
                  style={{
                    objectPosition: 'center 20%',
                  }}
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            {/* Let's Work Together Card */}
            <motion.div 
              variants={item}
              className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-xl p-6 text-center"
            >
              <h4 className="text-emerald-400 font-medium mb-2">Let's Work Together</h4>
              <p className="text-gray-300 text-sm mb-4">
                I'm currently open to new opportunities, freelance projects, and interesting collaborations.
              </p>
              <a 
                href="mailto:dinesh.tamang0507@gmail.com" 
                className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Get in touch <Send size={14} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;