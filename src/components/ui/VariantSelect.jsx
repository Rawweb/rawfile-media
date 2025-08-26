import SessionSelect from '@components/ui/SessionSelect';
import { getVariants } from './sessionVariants';



function VariantSelect({
  session,
  value,
  onChange,
  disabled,
  error,
  label = 'Options',
}) {
  const variants = getVariants(session);
  if (variants.length === 0) return null; // no variants for this session

  const sessions = [{ group: label, items: variants.map(v => ({ name: v })) }];

  return (
    <label className="block">
      <span className="block text-xs dark:text-grey-midLight mb-2">
        {label}
      </span>
      <SessionSelect
        sessions={sessions}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
        fieldName="variant"
      />
    </label>
  );
}

export default VariantSelect;
