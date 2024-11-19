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
    <div className="max-w-lg mx-auto mt-8 p-6 shadow-md bg-black border-2 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-amber-700 dark:text-amber-500">
        Leave a Comment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            placeholder="Your Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg px-3 py-2 border border-gray-600 bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            placeholder="Your Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg px-3 py-2 border border-gray-600 bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="comment" className="text-sm font-semibold">
            Comment
          </label>
          <textarea
            placeholder="Please leave a comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full rounded-lg px-3 py-2 border  border-gray-600 bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-800 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="h-4 w-4" />
          {status === 'sending' ? 'Sending...' : 'Send Comment'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 dark:text-green-400 text-sm">
            Comment sent successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            Failed to send comment. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default CommentBox;