import SectionHead from "../sectionHead"
import ContactForm from "./contactForm"
export default function ContactSection(){
    return (
        <section className="w-full" id="contact">
            <SectionHead sectionName={'Contact me'} />
            <ContactForm />
        </section>
    )
}