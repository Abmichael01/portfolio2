// import GradientHr from "../GradientHr";
// import Lottie from 'react-lottie-player';
// import handshakeAnimation from '@/assets/handShake.json';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import SectionName from "../SectionName";
// import { Button } from "../ui/button";
// import emailjs from 'emailjs-com';
// import { useToast } from '@/hooks/use-toast'; // Import your toast hook
// import { useState } from "react";

// const contactSchema = z.object({
//     name: z.string().min(2, { message: "Name is required" }),
//     email: z.string().email({ message: "Invalid email address" }),
//     message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
// });

// type ContactFormInputs = {
//     name: string;
//     email: string;
//     message: string;
// };

// const Contact = () => {
//     const [loading, setLoading] = useState(false)
//     const { toast } = useToast(); // Initialize toast
//     const { register, handleSubmit, formState: { errors }, setValue } = useForm<ContactFormInputs>({
//         resolver: zodResolver(contactSchema),
//     });

//     const onSubmit = (data: ContactFormInputs) => {
//         setLoading(true)
//         emailjs.send('service_6uvvlnb', 'template_q6smijf', data, 'Mt7giT4eZCJ0_bk0_')
//             .then((response) => {
//                 console.log('Email sent successfully:', response);
//                 toast({ title: 'Message Sent', description: 'Your message has been sent successfully!', className: "bg-customBg border border-gray-700 text-white", });
//                 setLoading(false)
//                 setValue('name', '');
//                 setValue('email', '');
//                 setValue('message', '');
//             })
//             .catch((error) => {
//                 console.error('Failed to send email:', error);
//                 toast({ title: 'Error', description: 'There was an error sending your message. Please try again later.', variant: 'destructive', });
//                 setLoading(false)
//             });
//     };

//     return (
//         <div>
//             <div className="flex flex-col gap-10">
//                 <SectionName name="Contact Me" />
//                 <div className="flex flex-col md:flex-row justify-between gap-10">
//                     <div className="md:w-1/2 w-full flex flex-col justify-center">
//                         <div className="flex justify-center">
//                             <Lottie
//                                 loop
//                                 animationData={handshakeAnimation}
//                                 play
//                                 className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
//                             />
//                         </div>
//                         <h1 className="font-mono sm:text-xl text-[14px] text-wrap text-primary-foreground text-center">
//                             Let's build something amazing together! Whether you need a custom solution, a new feature, or just a quick chat about your project ideas, I'm here to help make your vision a reality.
//                         </h1>
//                     </div>

//                     <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 w-full px-[1px] bg-gradient-to-b from-blue-500 via-gray-900 to-blue-500" noValidate>
//                         <div className="flex flex-col gap-10 px-1 py-5 bg-customBg">
//                             <div className="flex flex-col gap-2">
//                                 <input type="text" id="name" {...register('name')} className="input-field" placeholder="Name e.g John Williams" />
//                                 {errors.name && <p className="input-error">{errors.name.message}</p>}
//                             </div>
//                             <div className="flex flex-col gap-2">
//                                 <input type="text" id="email" {...register('email')} className="input-field" placeholder="Email e.g johnwilliams@gmail.com" />
//                                 {errors.email && <p className="input-error">{errors.email.message}</p>}
//                             </div>
//                             <div className="flex flex-col gap-2">
//                                 <textarea id="message" {...register('message')} className="input-field h-32" placeholder="Type your message here..."></textarea>
//                                 {errors.message && <p className="input-error">{errors.message.message}</p>}
//                             </div>
//                             <Button type="submit" disabled={loading}>{loading ? "Sending Message...": "Send Message"}</Button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <GradientHr />
//         </div>
//     );
// };

// export default Contact;

import GradientHr from "../GradientHr";
import Lottie from "react-lottie-player";
import handshakeAnimation from "@/assets/handShake.json";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionName from "../SectionName";
import { Button } from "../ui/button";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(20px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const onSubmit = (data: ContactFormInputs) => {
    setLoading(true);
    emailjs
      .send("service_6uvvlnb", "template_q6smijf", data, "Mt7giT4eZCJ0_bk0_")
      .then((response) => {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          className: "bg-customBg border border-gray-700 text-white",
        });
        setLoading(false);
        setValue("name", "");
        setValue("email", "");
        setValue("message", "");
        console.log(response)
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
        setLoading(false);
        console.log(error)
      });
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="flex flex-col gap-10">
        {/* Animate the section name */}
        <motion.div variants={fadeInVariants} transition={{ duration: 0.7 }}>
          <SectionName name="Contact Me" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Animate the Lottie animation and text */}
          <motion.div
            variants={fadeInVariants}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full flex flex-col justify-center"
          >
            <div className="flex justify-center">
              <Lottie
                loop
                animationData={handshakeAnimation}
                play
                className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
              />
            </div>
            <h1 className="font-mono sm:text-xl text-[14px] text-wrap text-primary-foreground text-center">
              Let's build something amazing together! Whether you need a custom solution, a new feature, or just a quick chat about your project ideas, I'm here to help make your vision a reality.
            </h1>
          </motion.div>

          {/* Animate the form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={fadeInVariants}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full px-[1px] bg-gradient-to-b from-blue-500 via-gray-900 to-blue-500"
            noValidate
          >
            <div className="flex flex-col gap-10 px-1 py-5 bg-customBg">
              <motion.div variants={fadeInVariants}>
                <div className="flex flex-col gap-2">
                  <input type="text" id="name" {...register("name")} className="input-field" placeholder="Name e.g John Williams" />
                  {errors.name && <p className="input-error">{errors.name.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={fadeInVariants}>
                <div className="flex flex-col gap-2">
                  <input type="text" id="email" {...register("email")} className="input-field" placeholder="Email e.g johnwilliams@gmail.com" />
                  {errors.email && <p className="input-error">{errors.email.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={fadeInVariants}>
                <div className="flex flex-col gap-2">
                  <textarea id="message" {...register("message")} className="input-field h-32" placeholder="Type your message here..."></textarea>
                  {errors.message && <p className="input-error">{errors.message.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={fadeInVariants} className="w-full">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Sending Message..." : "Send Message"}
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>

      <motion.div variants={fadeInVariants}>
        <GradientHr />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
