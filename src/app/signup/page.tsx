"use client"
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signUpSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AppleIcon, Github, GoalIcon, } from "lucide-react";
import InputField from "@/myComponent/inputField";
// import Link from "next/link";

function Signup() {

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    })
    const handleSocialSignUp = (provider: string) => {
        console.log(`Signing up with ${provider}`);
        // Implement social sign-up logic here
    }


    const onSubmit = (values: z.infer<typeof signUpSchema>) => {
        console.log(values)
    }

    return (
        <section className="h-screen flex flex-col items-center justify-center ">
            <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] h-[90%] max-h-fit p-8 drop-shadow-xl rounded-2xl shadow-2xl flex flex-col">
                <div className="top flex flex-col items-center">
                    <h1>Create Account</h1>
                    <p className="italic">Join us and start your journey!</p>
                </div>
                {/* SOCIALS */}
                <div className="socials flex items-center justify-center gap-4 my-4">
                    <Button variant="outline" className="rounded" onClick={() => handleSocialSignUp('google')}>
                        <GoalIcon className="" />
                    </Button>
                    <Button variant="outline" className="rounded" onClick={() => handleSocialSignUp('github')}>
                        <Github className="" />
                    </Button>

                    <Button variant="outline" className="rounded" onClick={() => handleSocialSignUp('apple')}>
                        <AppleIcon className="" />
                    </Button>
                </div>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-4 text-gray-500 font-medium">or sign up with email</span>
                    </div>
                </div>

                {/* FORM */}
                <section className="overflow-y-auto h-fit flex flex-col gap-3 px-2 ">
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <InputField
                                name='name' label='Full Name' placeholder="John Doe" isOptional={false}
                            />
                            <InputField
                                name='username' label='Username' placeholder="johndoe" isOptional={true}
                            />

                            <InputField
                                name='email' label='Email' placeholder="johndoe@example.com" type='email' isOptional={false}
                            />
                            <InputField
                                name='password' label='Password' placeholder="********" isOptional={false} type="password"
                            />
                            <InputField
                                name='confirmPassword' label='Confirm Password' placeholder="********" isOptional={false} type="password"
                            />

                            <Button type="submit" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white mt-5">Sign Up</Button>
                        </form>
                    </Form>
                </section>
            </div>
            {/* <p>Already have an account? <Link href="/login" className="text-[var(--color-primary)] hover:underline">Log in</Link></p> */}


        </section>
    );
}

export default Signup;
