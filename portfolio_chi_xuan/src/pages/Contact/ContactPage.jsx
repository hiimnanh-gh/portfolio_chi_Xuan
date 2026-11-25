import { SectionWrapper } from '@/components/shared';
import { SECTION_IDS } from '@/config/navigation.config';
import { PROFILE_DATA } from '@/data/profile.data';
import { ContactForm } from './components/ContactForm';
import { ContactInformation } from './components/ContactInformation';
import { CONTACT_DATA } from './data/contact.data';
import styles from './styles/ContactPage.module.css';

export function ContactPage() {
  return (
    <SectionWrapper id={SECTION_IDS.CONTACT}>
      <div className={styles.contactGrid}>
        <ContactInformation
          heading={CONTACT_DATA.heading}
          infoLabels={CONTACT_DATA.infoLabels}
          mapData={CONTACT_DATA.map}
          profile={PROFILE_DATA}
        />
        <ContactForm
          formConfig={CONTACT_DATA.form}
          recipientEmail={PROFILE_DATA.email}
        />
      </div>
    </SectionWrapper>
  );
}
