import SectionHead from "../sectionHead"
import ContactForm from "./contactForm"
export default function ContactSection(){
    return (
        <section>
            <SectionHead sectionName={'Contact me'} />
            <ContactForm />
        </section>
    )
}