'use client';

import { useActionState, useState } from 'react';
import { sendInquiry,  type ContactState } from './actions';

const projectType = ['Website', 'Web app', 'Redesign'];
const initialState: ContactState = { ok: false };

export default function DevContactForm() {
  const [type, setType] = useState('Website');
    const [state, formAction, pending] = useActionState(
      sendInquiry,
      initialState,
    );

  return (
    <form
      action={formAction}
      className='bg-surface  border border-white/10 p-7 rounded-md font-mono space-y-4'
    >
      <div className='text-[11px] text-muted'>
        <label htmlFor='name' className='tracking-[.1em]'>
          NAME
        </label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='Your name'
          className='text-paper text-sm font-sans border border-white/10 rounded-sm w-full px-4 py-3 mt-2 focus:outline-1 focus:outline-steel'
        />
      </div>

      <div className='text-[11px] text-muted'>
        <label htmlFor='email' className='tracking-[.1em]'>
          EMAIL
        </label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='you@gmail.com'
          className='text-paper text-sm font-sans border border-white/10 rounded-sm w-full px-4 py-3 mt-2 focus:outline-1 focus:outline-steel'
        />
      </div>

      <div className='flex items-center gap-2'>
        {projectType.map((t) => (
          <div
            key={t}
            onClick={() => setType(t)}
            className={`flex-1 text-center border text-xs p-3 rounded-sm cursor-pointer transition-colors ${
              type === t
                ? 'border-steel bg-steel/10 text-steel'
                : 'border-white/10 text-muted hover:border-steel'
            }`}
          >
            {t}
          </div>
        ))}
      </div>

      <div className='text-[11px] text-muted'>
        <label htmlFor='timeline' className='tracking-[.1em]'>
          TIMELINE
        </label>
        <input
          id='timeline'
          name='timeline'
          type='text'
          placeholder='e.g next 4 to 6 weeks'
          className='text-paper text-sm font-sans border border-white/10 rounded-sm w-full px-4 py-3 mt-2 focus:outline-1 focus:outline-steel'
        />
      </div>

      <div className='text-[11px] text-muted'>
        <label htmlFor='details' className='tracking-[.1em]'>
          DETAILS
        </label>
        <textarea
          id='details'
          name='details'
          rows={3}
          placeholder='What are you building?'
          className='text-paper text-sm font-sans border border-white/10 rounded-sm w-full px-4 py-3 mt-2 focus:outline-1 focus:outline-steel'
        />
      </div>

      <input type='hidden' name='type' value={type} />

      {/* button */}
      <button
        disabled={pending}
        className='bg-paper text-ink text-xs p-3 rounded-sm w-full hover:bg-steel transition-colors disabled:opacity-50'
      >
        {pending ? 'SENDING...' : 'SEND INQUIRY →'}
      </button>

      {state.ok && (
        <p className='text-steel text-xs'>
          Sent. I&apos;ll reply within a day.
        </p>
      )}

      {state.error && (
        <p className='text-red-400 text-xs'>
          {state.error}
        </p>
      )}
    </form>
  );
}
