"use client"
import { Button } from "@/components/ui/button";
import { Calendar, Heart, Bell } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Feature {
    title: string,
    description: string,
    icon: React.ReactNode
}
export default function HomeFeatures() {
    const [activeSlide, setActiveSlide] = useState(0)
    // let signUpPage
    // const router = useRouter()
    const welcomePageFeatures: Feature[] = [
        {
            title: 'Matches updates',
            description: "Get real-time updates for your favorite teams and competitions.",
            icon: <Calendar className="w-12 h-12 text-[var(--color-primary)]" />
        },
        {
            icon: <Bell className="w-12 h-12 text-[var(--color-primary)]" />,
            title: "Custom Alerts",
            description: "Choose how and when you want to be notified about matches and events."
        },
        {
            icon: <Heart className="w-12 h-12 text-[var(--color-primary)]" />,
            title: "Personalized Experience",
            description: "Follow teams you love (or love to hate) for a tailored football experience."
        }
    ]

    const handleNext = () => {
        //if not the last slide, increment, else route to sign up page or if active slide is equals to the features length route, else increment
        if (activeSlide < welcomePageFeatures.length - 1) {
            setActiveSlide((prev) => prev + 1);
        }
        // else {
        //     // signUpPage = true
        //     // router.push("/signup");
        // }
    };


    const { title, description, icon } = welcomePageFeatures[activeSlide]

    return (

        <div className="flex-col items-center gap-9 px-4">
            <div>

                <div className="flex-col gap-2 justify-center items-center  mb-3">
                    {icon}
                    <h1>{title}</h1>
                    <p className="text-center">{description}</p>
                </div>

            </div>
            {/* Dot indicators */}
            <div className="flex gap-2">
                {welcomePageFeatures.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === activeSlide ? "bg-[var(--color-primary)] " : "bg-gray-300"
                            }`}
                        onClick={() => setActiveSlide(idx)}
                    />
                ))}
            </div>

            <div className="w-full max-w-md">
                {activeSlide < welcomePageFeatures.length - 1 ? <Button
                    onClick={handleNext}
                    className="w-full mb-2 bg-[var(--color-primary)]     hover:bg-[var(--color-primary-hover)] text-white"
                >
                    Next
                </Button>
                    :
                    // <Link href="/signup" passHref>
                    //     <Button className="w-full mb-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white">
                    //         Get Started
                    //     </Button>
                    // </Link>
                    <Link className="w-full mb-2 bg-[var(--color-primary)]     hover:bg-[var(--color-primary-hover)] text-white"
                        href={'/signup'}>Get Started</Link>
                }

                <div className="flex justify-center gap-1 text-sm">
                    <span className="text-muted-foreground">
                        Already have an account?
                    </span>
                    <Link href="/signin" className="text-[var(--color-primary)] font-medium">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}