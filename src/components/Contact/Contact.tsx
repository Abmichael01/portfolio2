import GradientHr from "../GradientHr"
import Lottie from 'react-lottie-player';
import handshakeAnimation from '@/assets/handShake.json';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SectionName from "../SectionName";
import { Button } from "../ui/button";

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});


type ContactFormInputs = {
    name: string;
    email: string;
    message: string;
}



const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormInputs) => {
        console.log(data);
    }

    return (
        <div>
            <div className="flex flex-col gap-10">
                <SectionName name="Contact Me" />
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="md:w-1/2 w-full flex flex-col justify-center">
                        <div className="flex justify-center">
                            <Lottie
                                loop
                                animationData={handshakeAnimation}
                                play
                                className=" w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
                            />
                        </div>
                        <h1 className="font-mono sm:text-xl text-[14px] text-wrap text-primary-foreground text-center ">Let's build something amazing together! Whether you need a custom solution, a new feature, or just a quick chat about your project ideas, I'm here to help make your vision a reality.</h1>
                    </div>

                    <form action="" onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 w-full px-[1px] bg-gradient-to-b from-blue-500 via-gray-900 to-blue-500" noValidate>
                        <div className="flex flex-col gap-10 px-1 py-5 bg-customBg ">
                            <div className="flex flex-col gap-2">
                                <input type="text" id="name" {...register('name')} className="input-field" placeholder="Name e.g John Williams" />
                                {errors.name && <p className="input-error">{errors?.name?.message as string}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <input type="text" id="emal" {...register('email')} className="input-field" placeholder="Email e.g johnwilliams@gmail.com" />
                                {errors.email && <p className="input-error">{errors?.email?.message as string}</p>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <textarea id="message" {...register('message')} className="input-field h-32" placeholder="Type your message here..." ></textarea>
                                {errors.message && <p className="input-error">{errors?.message?.message as string}</p>}
                            </div>
                            <Button>Send Message</Button>
                        </div>
                    </form>

                </div>
            </div>
            <GradientHr />
        </div>
    )
}

export default Contact
