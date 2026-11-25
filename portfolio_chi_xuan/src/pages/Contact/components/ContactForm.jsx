import { Card } from '@/components/ui';
import { useContactForm } from '../hooks/useContactForm';
import { ContactFormFields } from './ContactFormFields';
import { ContactFormHeader } from './ContactFormHeader';
import { FormFeedback } from './FormFeedback';
import { SubmitButton } from './SubmitButton';

export function ContactForm({ formConfig, recipientEmail }) {
  const { values, errors, isSubmitting, feedback, handleChange, handleSubmit } =
    useContactForm({
      purposes: formConfig.purposes,
      recipientEmail,
    });

  return (
    <Card variant="default" padding="lg" className="min-w-0">
      <ContactFormHeader
        title={formConfig.title}
        description={formConfig.description}
      />

      <form onSubmit={handleSubmit} noValidate>
        <ContactFormFields
          formConfig={formConfig}
          values={values}
          errors={errors}
          handleChange={handleChange}
        />

        <SubmitButton
          label={formConfig.submitLabel}
          submittingLabel={formConfig.submittingLabel}
          isSubmitting={isSubmitting}
        />

        <FormFeedback feedback={feedback} />
      </form>
    </Card>
  );
}
