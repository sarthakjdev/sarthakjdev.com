import SectionHead from "../sectionHead"
import ContactForm from "./contactForm"
export default function ContactSection(){
    return (
        <section className=" mx-20 md:mx-10">
            <SectionHead sectionName={'Contact me'} />
            <ContactForm />
        </section>
    )
}