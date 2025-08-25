// TimeSelect.jsx
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import { FiChevronDown, FiCheck, FiClock } from "react-icons/fi";

function genTimes(start="08:00", end="17:00", step=30) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const s = sh*60+sm, e = eh*60+em;
  const out = [];
  for (let m=s; m<=e; m+=step) {
    const h = Math.floor(m/60), mm = m%60;
    const h12 = ((h+11)%12)+1;
    const ampm = h < 12 ? "AM" : "PM";
    out.push({ value: `${String(h).padStart(2,"0")}:${String(mm).padStart(2,"0")}`, label: `${h12}:${String(mm).padStart(2,"0")} ${ampm}` });
  }
  return out;
}

 function TimeSelect({ value, onChange, name="time", disabled, error, start="08:00", end="20:00", step=30, label="Preferred Time" }) {
  const times = useMemo(() => genTimes(start,end,step), [start,end,step]);
  const selected = times.find(t => t.value === value) ?? times[0];

  return (
    <label className="block">
      <span className="block text-xs dark:text-grey-midLight mb-2">{label}</span>
      <div className="relative z-30">
        <Listbox value={selected} onChange={(t) => onChange({ target:{ name, value: t.value }})} disabled={disabled}>
          <Listbox.Button className={`w-full input-style input-select flex items-center justify-between ${error ? "ring-1 ring-red-500" : ""}`}>
           <span className="flex items-center gap-2">
                         <FiClock className="opacity-80" />
                         {selected.label}
                       </span>
            <FiChevronDown className="opacity-80" />
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute left-0 right-0 z-30 mt-2 max-h-64 overflow-auto rounded-lg pr-1
                                        border shadow-xl focus:outline-none custom-scroll
                                        bg-white text-gray-900 border-gray-200 ring-1 ring-black/10
                                        dark:bg-dark-midDark dark:text-gray-100 dark:border-dark-midLight">
              {times.map(t => (
                <Listbox.Option key={t.value} value={t}
                  className={({active}) => `cursor-pointer select-none px-3 py-2 text-sm ${active ? "bg-purple-600/20" : ""}`}>
                  {({ selected }) => (
                    <div className="flex items-center gap-2">
                      {selected ? <FiCheck className="shrink-0" /> : <span className="w-4" />}
                      <span>{t.label}</span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
      {error && <p className="error-text">Please pick a time.</p>}
    </label>
  );
}

export default TimeSelect;