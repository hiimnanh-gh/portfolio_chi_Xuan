import { Send } from 'lucide-react';
import { Button } from '@/components/ui';

export function SubmitButton({ label, submittingLabel, isSubmitting = false }) {
  return (
    <Button
      type="submit"
      variant="primary"
      size="md"
      disabled={isSubmitting}
      leftIcon={<Send className="h-4 w-4" />}
      className="mt-5 w-full sm:w-auto"
    >
      {isSubmitting ? submittingLabel : label}
    </Button>
  );
}
