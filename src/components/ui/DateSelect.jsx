import { Fragment, useMemo } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';

// helpers to convert your form string <-> Date
const toDate = str => {
  if (!str) return undefined;
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const toISO = date =>
  date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        '0'
      )}-${String(date.getDate()).padStart(2, '0')}`
    : '';

function DateSelect({
  value, // "YYYY-MM-DD"
  onChange, // receives { target:{ name:'date', value:'YYYY-MM-DD' } }
  name = 'date',
  label = 'Preferred Date',
  disabled,
  error,
  min, // "YYYY-MM-DD" min date (optional)
  className = '',
}) {
  const selected = useMemo(() => toDate(value), [value]);
  const minDate = useMemo(() => toDate(min), [min]);

  const setDate = d => {
    onChange?.({ target: { name, value: toISO(d) } });
  };

  const labelText = selected
    ? selected.toLocaleDateString(undefined, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    : 'Pick a date';

  return (
    <div className={className}>
      <label className="block">
        <span className="block text-xs dark:text-grey-midLight mb-2">
          {label}
        </span>

        <Popover className="relative z-40">
          {({ close }) => (
            <>
              <Popover.Button
                disabled={disabled}
                className={`w-full input-style input-select flex items-center justify-between
                            ${error ? 'ring-1 ring-red-500' : ''}`}
                aria-invalid={!!error}
              >
                <span className="flex items-center gap-2">
                  <FiCalendar className="opacity-80" />
                  {labelText}
                </span>
                <FiChevronDown className="opacity-80" />
              </Popover.Button>

              <Transition /* ...same as before... */>
                <Popover.Panel
                  className="absolute left-0 mt-2 w-auto rounded-lg border shadow-xl focus:outline-none
                                          bg-white text-gray-900 border-gray-200 ring-1 ring-black/10
                                          dark:bg-dark-midDark dark:text-gray-100 dark:border-dark-midLight"
                >
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={d => {
                      if (!d) return;
                      setDate(d);
                      close(); // <- closes popover on selection
                    }}
                    disabled={minDate ? { before: minDate } : undefined}
                    className="rdp-custom"
                    style={{
                      '--rdp-accent-color': '#7c3aed',
                      '--rdp-background-color': 'rgba(124,58,237,.12)',
                      '--rdp-outline': '2px solid rgba(124,58,237,.6)',
                      '--rdp-outline-selected': '2px solid rgba(124,58,237,.9)',
                    }}
                    fromDate={minDate}
                    weekStartsOn={1}
                    showOutsideDays
                    captionLayout="dropdown-buttons"
                  />
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {error ? <p className="error-text">{error}</p> : null}
      </label>
    </div>
  );
}
export default DateSelect;
