"use client"

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const CommentBox = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setComment('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-2 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-8 text-[#CFAF80]">Leave a Comment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex items-center'>
          <label htmlFor="name" className="block text-sm mb-1 mr-2 font-semibold">
            Name
          </label>
          <input
            placeholder='Your Name ..'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black rounded-xl px-3 py-2 border-2 border-gray-300 focus:outline-none"
            required
          />
        </div>

        <div className='flex items-center'>
          <label htmlFor="email" className="block text-sm mb-1 mr-2 font-semibold">
            Email
          </label>
          <input
            placeholder='Your Email ..'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black rounded-xl px-3 py-2 border-2 border-gray-300 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm mb-1 mr-2 font-semibold">
            Comment
          </label>
          <textarea
            placeholder='Please leave a comment ..'
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full bg-black rounded-xl px-3 py-2 border-2 border-gray-300 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Send size={18} />
          {status === 'sending' ? 'Sending...' : 'Send Comment'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm">Comment sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm">Failed to send comment. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default CommentBox;