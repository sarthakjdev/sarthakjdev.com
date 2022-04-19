import SectionHead from "../sectionHead"
import ContactForm from "./contactForm"
export default function ContactSection(){
    return (
        <section className="my-14 mx-20 md:mx-10 mt-32 lg:mt-14">
            <SectionHead sectionName={'Contact me'} />
            <ContactForm />
        </section>
    )
}