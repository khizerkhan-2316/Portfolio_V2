import './ContactSection.css';
import ContactForm from '../../Components/ContactForm/ContactForm';
import PersonalInformation from '../../Components/PersonalInformation/PersonalInformation';
import Map from '../../Components/Map/Map';

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="contact-heading-container">
        <h2>Get in touch</h2>
        <p>
          If you have any questions or a request, don't hesitate to use the
          form.
        </p>
      </div>

      <div className="contact-content-wrapper">
        <ContactForm />
        <PersonalInformation />
        <Map />
      </div>
    </section>
  );
};

export default ContactSection;
