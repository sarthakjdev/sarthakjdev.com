import { Formik, Form, useFormik } from "formik"
import * as Yup from 'yup'
import { useRouter } from "next/router"

export default function ContactForm(){

    const router = useRouter()
    
    const validationSchema = Yup.object({
        name: Yup.string().required('name is required'),
        email: Yup.string().email().required('email is requried'),
        title: Yup.string().required('title is required'),
        description: Yup.string().required('description is required')
        
    })
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '', 
            title: '', 
            description: ''
        }, 
        validationSchema: validationSchema,
    })

    return (

        <section className="flex flex-col items-center justify-center my-20 text-white">
        <form  className="flex flex-col w-30 lg:w-40 sm:w-full gap-24 sm:gap-x-0" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center justify-center relative group">
            <input id="name" className="border-primary border-2 rounded-3xl h-12 w-full  px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="name" type="name" onChange={formik.handleChange} value={formik.values.name} />
            <label htmlFor="name" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">name</label>
            </div>

            <div className="flex flex-col items-center justify-center relative group">
            <input id="email" className="border-primary border-2 rounded-3xl h-12 w-full px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            <label htmlFor="email" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">email</label>
            </div>

            <div className="flex flex-col items-center justify-center relative group">
            <input id="title" className="border-primary border-2 rounded-3xl h-12 w-full px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="title" type="text" onChange={formik.handleChange} value={formik.values.password} />
            <label htmlFor="title" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">title</label>
            </div>
            
            <div className="flex flex-col items-center justify-center relative group">
            <input id="description" className="border-primary border-2 rounded-3xl h-12 w-full px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="description" type="description" onChange={formik.handleChange} value={formik.values.description} />
            <label htmlFor="description" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">description</label>
            </div>

            <button type="submit" className="uppercase bg-primary text-white border-primary border-2 hover: hover:bg-transparent w-fit m-auto my-6 px-10 font-extrabold py-2 rounded-3xl">send</button>
        </form>
    </section>
    )
}