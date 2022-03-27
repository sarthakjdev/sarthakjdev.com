import { Formik, Form, useFormik } from "formik"
import * as Yup from 'yup'
import { useRouter } from "next/router"

export default function Signup(){

    const router = useRouter()
    
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required'),
        email: Yup.string().email().required('email is requried'),
        password: Yup.string().min(6, 'Password must contain atleadt 6 characters').required(),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), null],'Passwords must match'),
    })
    
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '', 
            password: '', 
            confirm_password: ''
        }, 
        validationSchema: validationSchema,
    })

    return (

        <section className="flex flex-col items-center justify-center my-20 text-white">
        <form  className="flex flex-col w-30 lg:w-40 sm:w-full gap-24" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center justify-center relative group">
            <input id="username" className="border-primary border-2 rounded-3xl h-12 w-full  px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="username" type="username" onChange={formik.handleChange} value={formik.values.username} />
            <label htmlFor="username" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">username</label>
            </div>

            <div className="flex flex-col items-center justify-center relative group">
            <input id="email" className="border-primary border-2 rounded-3xl h-12 w-full px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
            <label htmlFor="email" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">email</label>
            </div>

            <div className="flex flex-col items-center justify-center relative group">
            <input id="password" className="border-primary border-2 rounded-3xl h-12 w-full px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
            <label htmlFor="password" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">password</label>
            </div>
            
            <div className="flex flex-col items-center justify-center relative group">
            <input id="confirm_password" className="border-primary border-2 rounded-3xl h-12 w-full px-4  absolute top-0 left-0 right-0 bottom-0 bg-transparent peer" name="confirm_password" type="confirm_password" onChange={formik.handleChange} value={formik.values.confirm_password} />
            <label htmlFor="confirm_password" className="uppercase text-text_grey tracking-widest text-center absolute top-2 mt-1 left-6 right-0 bottom-0 mr-auto w-fit peer-focus:hidden">confirm password</label>
            </div>

            <button type="submit" className="uppercase bg-primary text-white border-primary border-2 hover: hover:bg-transparent w-fit m-auto my-6 px-10 font-extrabold py-2 rounded-3xl">Sent</button>
        </form>
    </section>
    )
}