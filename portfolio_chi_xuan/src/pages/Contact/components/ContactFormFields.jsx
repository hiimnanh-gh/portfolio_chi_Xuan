import { ConfidentialityField } from './ConfidentialityField';
import { EmailField } from './EmailField';
import { MessageField } from './MessageField';
import { NameField } from './NameField';
import { OrganizationField } from './OrganizationField';
import { PurposeField } from './PurposeField';

export function ContactFormFields({ formConfig, values, errors, handleChange }) {
  const { fields, purposes, confidentialLabel } = formConfig;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NameField
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          value={values.name}
          error={errors.name}
          onChange={handleChange('name')}
        />
        <EmailField
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          value={values.email}
          error={errors.email}
          onChange={handleChange('email')}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <OrganizationField
          label={fields.organization.label}
          placeholder={fields.organization.placeholder}
          value={values.organization}
          onChange={handleChange('organization')}
        />
        <PurposeField
          label={fields.purpose.label}
          options={purposes}
          value={values.purpose}
          onChange={handleChange('purpose')}
        />
      </div>

      <MessageField
        label={fields.message.label}
        placeholder={fields.message.placeholder}
        value={values.message}
        error={errors.message}
        onChange={handleChange('message')}
      />

      <ConfidentialityField
        label={confidentialLabel}
        checked={values.isConfidential}
        onChange={handleChange('isConfidential')}
      />
    </div>
  );
}
