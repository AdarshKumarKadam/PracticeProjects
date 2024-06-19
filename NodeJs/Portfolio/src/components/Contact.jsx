import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true); // Disable the button immediately
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        try {
            const response = await axios.post("https://getform.io/f/zaxdkmva", userInfo);
            if (response.status === 200) {
                toast.success('Message sent successfully!');
                reset();
            } else {
                console.error('Form submission error');
                toast.error('Something went wrong!');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Message not sent, error in submitting form');
        } finally {
            setIsSubmitting(false); // Re-enable the button after submission
        }
    };

    return (
        <>
            <div id="contact" className="max-w-screen-2xl container my-4 md:mb-10 mx-auto px-4 md:px-20 overflow-hidden">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md mx-auto" style={{ maxWidth: '400px' }}>
                    <h2 className="text-xl mb-4 text-center">Contact Me</h2>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                        <textarea
                            {...register('message', { required: true })}
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-md"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Contact;
