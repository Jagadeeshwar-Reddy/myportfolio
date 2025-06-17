import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // TODO: Replace with your actual form submission logic
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = (error) =>
        `w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${error ? 'border-red-500' : ''
        }`;

    return (
        <div className="card p-6 sm:p-8">
            <h3
                className="mb-4 sm:mb-6"
                style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontSize: 'var(--font-size-xl)',
                    lineHeight: 'var(--line-height-tight)'
                }}
            >
                Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses(errors.name)}
                        placeholder="Your name"
                        style={{
                            background: 'var(--color-surface-card)',
                            borderColor: errors.name ? 'var(--color-error)' : 'var(--color-border)',
                            color: 'var(--color-text-primary)'
                        }}
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--color-error)' }}>{errors.name}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses(errors.email)}
                        placeholder="your.email@example.com"
                        style={{
                            background: 'var(--color-surface-card)',
                            borderColor: errors.email ? 'var(--color-error)' : 'var(--color-border)',
                            color: 'var(--color-text-primary)'
                        }}
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--color-error)' }}>{errors.email}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClasses(errors.subject)}
                        placeholder="Message subject"
                        style={{
                            background: 'var(--color-surface-card)',
                            borderColor: errors.subject ? 'var(--color-error)' : 'var(--color-border)',
                            color: 'var(--color-text-primary)'
                        }}
                    />
                    {errors.subject && (
                        <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--color-error)' }}>{errors.subject}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={inputClasses(errors.message)}
                        placeholder="Your message..."
                        style={{
                            background: 'var(--color-surface-card)',
                            borderColor: errors.message ? 'var(--color-error)' : 'var(--color-border)',
                            color: 'var(--color-text-primary)'
                        }}
                    />
                    {errors.message && (
                        <p className="mt-1 text-xs sm:text-sm" style={{ color: 'var(--color-error)' }}>{errors.message}</p>
                    )}
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                    style={{
                        background: isSubmitting ? 'var(--color-text-muted)' : 'var(--gradient-primary)',
                        color: 'var(--color-text-inverse)',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message
                            <FaPaperPlane className="w-3 h-3 sm:w-4 sm:h-4" />
                        </>
                    )}
                </motion.button>

                {submitStatus === 'success' && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-sm sm:text-base"
                        style={{ color: 'var(--color-success)' }}
                    >
                        Message sent successfully! I'll get back to you soon.
                    </motion.p>
                )}

                {submitStatus === 'error' && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-sm sm:text-base"
                        style={{ color: 'var(--color-error)' }}
                    >
                        Something went wrong. Please try again.
                    </motion.p>
                )}
            </form>
        </div>
    );
};

export default ContactForm; 