'use client';
import { GlobeDemo } from './GlobeDemo';
import { TextField } from '@mui/material';
import { IoIosSend } from 'react-icons/io';
import toast from 'react-hot-toast';
import { useState, memo } from 'react';

const sxTextDesign = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1e40af', // dark blue
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: '#e2e8f0', // light gray
    '&.Mui-focused': {
      color: '#e2e8f0',
    },
  },
};
const MemoizedGlobeDemo = memo(GlobeDemo);
interface FormData {
  userName: string;
  userEmail: string;
  userMessage: string;
}
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    userEmail: '',
    userMessage: '',
  });
  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    if (!formData.userEmail || !formData.userName || !formData.userMessage) {
      toast.error('Please fill all fields');
      return false;
    } else {
      toast.success('Your message was sent!');
      setFormData({
        userName: '',
        userEmail: '',
        userMessage: '',
      });
      return true;
    }
  };
  const handleToast = async (e: React.FormEvent) => {
    e.preventDefault();

    const { userName, userEmail, userMessage } = formData;

    if (!userEmail || !userName || !userMessage) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      setIsLoading(true); // 🚨 Start loading
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userName,
          email: userEmail,
          message: userMessage,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Your message was sent!');
        setFormData({ userName: '', userEmail: '', userMessage: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('Failed to send message.');
      console.error('❌ Fetch error:', error);
    } finally {
      setIsLoading(false); // 🔁 Stop loading
    }
  };
  return (
    <main id="contact-form" className="relative overflow-hidden mt-0 lg:mt-10">
      <figure className="text-white w-full font-bold px-14 lg:px-28 font-nunito relative lg:not-static top-10 lg:top-0 text-left">
        <h1 className="text-lg lg:text-3xl ">Have an Idea? Let’s Talk</h1>
        <p className="text-sm lg:text-lg">
          Your message can travel the world — I’m just one click away..
        </p>
      </figure>
      <main className="flex  flex-col lg:flex-row justify-between w-full">
        <section className="w-full lg:w-[50%]">
          <div className="hidden lg:block">
            <MemoizedGlobeDemo />
          </div>
        </section>
        <section className="w-full lg:w-[50%] ">
          <div>
            <form
              className="flex flex-col py-[3.5rem] px-14 gap-3"
              onSubmit={handleToast}
            >
              <TextField
                name="userName"
                value={formData.userName}
                autoComplete="off"
                onChange={handleForm}
                label="Name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#1e40af', // dark blue
                    color: 'white',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#e2e8f0', // light gray
                    '&.Mui-focused': {
                      color: '#e2e8f0',
                    },
                  },
                }}
              />
              <TextField
                name="userEmail"
                type="email"
                autoComplete="off"
                value={formData.userEmail}
                onChange={handleForm}
                label="Email"
                variant="outlined"
                sx={sxTextDesign}
              />
              <TextField
                autoComplete="off"
                name="userMessage"
                value={formData.userMessage}
                onChange={handleForm}
                label="Message"
                multiline
                rows={8}
                sx={sxTextDesign}
                variant="outlined"
              />

              <button
                type="submit"
                disabled={isLoading}
                className="relative inline-flex h-12 group active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0ea5e9_0%,#38bdf8_50%,#3b82f6_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Contact me{' '}
                      <IoIosSend className="text-lg group-hover:text-2xl transition-all" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </main>
  );
};

export default ContactForm;
