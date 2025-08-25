import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { FiChevronDown, FiCheck } from 'react-icons/fi';

/**
 * props:
 *  - sessions: [{ group: string, items: [{ name: string }] }]   // required
 *  - value: string                                              // current selected session name
 *  - onChange: (syntheticEventLike) => void                     // receives { target:{ name:'session', value:string } }
 *  - disabled?: boolean
 *  - error?: boolean
 */
function SessionSelect({ sessions, value, onChange, disabled, error, fieldName = 'session' }) {
  // flatten to find the current selected item
  const flat = sessions.flatMap(g => g.items);
  const selectedItem = flat.find(s => s.name === value) ?? flat[0];

  return (
    <Listbox
      value={selectedItem}
      onChange={v => onChange({ target: { name: fieldName, value: v.name } })}
      disabled={disabled}
    >
      <div className="relative z-50">
        {/* Button */}
        <Listbox.Button
          className={`w-full input-style flex items-center justify-between
            dark:bg-dark-midDark dark:text-gray-100 border border-dark-midLight
            focus:ring-2 focus:ring-purple-midLight focus:border-purple-midLight
            ${error ? 'ring-1 ring-red-500' : ''}`}
        >
          <span>{selectedItem?.name}</span>
          <FiChevronDown className="opacity-80" />
        </Listbox.Button>

        {/* Options */}
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute left-0 right-0 z-30 mt-2 max-h-64 overflow-auto rounded-lg pr-1 border shadow-xl focus:outline-none  custom-scroll bg-white text-gray-900 border-gray-200 ring-1 ring-black/10 dark:bg-dark-midDark dark:text-gray-100 dark:border-dark-midLight">
            {sessions.map(group => (
              <div key={group.group}>
                <div className="px-3 pt-2 pb-1 text-[11px] uppercase tracking-wider dark:text-gray-light">
                  {group.group}
                </div>

                {group.items.map(item => (
                  <Listbox.Option
                    key={item.name}
                    value={item}
                    className={({ active }) =>
                      `cursor-pointer select-none px-3 py-2 text-sm
                         dark:text-grey-light
                        ${active ? 'bg-purple-midLight/50' : ''}`
                    }
                  >
                    {({ selected }) => (
                      <div className="flex items-center gap-2">
                        {selected ? (
                          <FiCheck className="shrink-0" />
                        ) : (
                          <span className="w-4" />
                        )}
                        <span>{item.name}</span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}

                <div className="h-px bg-neutral-800 mx-2 my-1" />
              </div>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

export default SessionSelect;
